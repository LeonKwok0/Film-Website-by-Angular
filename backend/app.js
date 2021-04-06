var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const base = "https://api.themoviedb.org"
const key = "bec75727adfa221f20fb0a25788e805c"
const imgURL = "https://image.tmdb.org/t/p/"
const ava_pre = "https://image.tmdb.org/t/p/original"
const ava_default = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU"

const axios = require('axios');
const { url } = require('inspector');



var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'dist/frontend')));

// app.all("*",function(req,res,next){
//     //设置允许跨域的域名，*代表允许任意域名跨域
//     res.header("Access-Control-Allow-Origin","*");
//     //允许的header类型
//     res.header("Access-Control-Allow-Headers","content-type");
//     //跨域允许的请求方式 
//     res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
//     if (req.method.toLowerCase() == 'options')
//         res.send(200);  //让options尝试请求快速结束
//     else
//         next();
// })

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


// axios.defaults.proxy = {
//     host: '127.0.0.1',
//     port: '7890'
// }

// public method for get data by axios.get with retry when error occur
async function get(url) {
    // resolve result
    console.log("Fetching from:" + url)
    var retry_time = 0
    while (retry_time < 2) {
        try {
            let response = await axios.get(url);
            if (response.status != 200) {
                throw "HTTP Status:" + response.status
            }
            return await response;
        } catch (error) {
            retry_time += 1
            console.log(error + " Request Failed, Retrying the " + retry_time + " time....");
        }
    }
    //  rejct result
    throw "Failed after 2 retries"
}


//query
app.get('/search', (req, res) => {
    let url = `${base}/3/search/multi?api_key=${key}&language=en-US&query=${req.query.query}`
    get(url).then(resp => {
        let resp_filter = []
        for (let item of resp.data.results) {
            resp_filter.push(
                {
                    id: item.id,
                    name: item.name?item.name:item.title,
                    backdrop_path: imgURL + "w500" + item.backdrop_path,
                    media_type: item.media_type
                }
            )
        }
        res.json(resp_filter)
    }).catch(error => {
        res.json({ msg: error })
    })
});



// fetch currentPlay data
app.get('/current_play', (req, res) => {
    let url = `${base}/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
    get(url).then(resp => {
        let resp_filter = []
        for (let item of resp.data.results.slice(0, 5)) {
            resp_filter.push(
                {
                    id: item["id"],
                    title: item["title"],
                    backdrop_path: imgURL + "w780" + item["backdrop_path"]
                }
            )
        }
        res.json(resp_filter)
    }).catch(error => {
        res.json({ msg: error })
    })
});


// fetch popular/top rated /trending/recommend/similar X movies/tv shows 
// url1 /collect/movie|tv/popular|top_rated|trending|recommend|similar
// url2 /collect/trending/movie|tv/day
app.get('/collect/:pos1/:pos2/:pos3?', (req, res) => {
    let pa = req.params
    let url = `${base}/3/${pa.pos1}/${pa.pos2}${(pa.pos3) ? '/' + pa.pos3 : ''}?api_key=${key}&language=en-US`
    let media_type = (pa.pos1=="trending")?pa.pos2:pa.pos1
    get(url).then(
        resp_tmdb => {
            let res_arr = []
            resp_tmdb.data.results.forEach(item => {
                p_path = item.poster_path ? imgURL + "w500" + item.poster_path : ""
                res_arr.push({
                    id: item.id,
                    poster_path: p_path,
                    title: item.name ? item.name : item.title,
                    media_type:media_type,
                })
            });
            res.json(res_arr);
        }
    ).catch(error => {
        res.json({ msg: error })
    })
});




// tv/movie X videos/reviews/credits
// /3/tv/<<movie_id>>/videos
app.get('/3/:pos1/:pos2/:pos3?', (req, res) => {
    let pa = req.params
    let url = `${base}/3/${pa.pos1}/${pa.pos2}${(pa.pos3) ? '/' + pa.pos3 : ''}?api_key=${key}&language=en-US&page=1`
    get(url).then(
        resp_tmdb => {
            let resp = dataFilter([pa.pos1, pa.pos2, pa.pos3], resp_tmdb.data)
            res.json(resp)
        }
    ).catch(error => {
        let e = "Error:"+error
        res.status(500).json({ msg: e })
    })
});

// fitler raw data, process some data 
function dataFilter(url_para, tmdb_data) {
    // movie/<<movie_id>>/videos
    let video = ['site', 'type', 'name', 'key']
    // movie/<<movie_id>>/reviews
    let review = ['author', 'content', 'created_at', 'url', 'rating', 'avatar_path'] // path 
    //movie/<<movie_id>>/credits
    let cast = ['id', 'name', 'character', 'profile_path'] //path 
    
    if(url_para[2] == "credits"){
        tmdb_data = tmdb_data.cast 
    }else{
        tmdb_data = tmdb_data.results
    }

    var resp_data = []
    var fields = []
    for (let item of tmdb_data) {
        let one = {}
        if (url_para[2] == 'videos') {
            fields = video
        }
        if (url_para[2] == 'reviews') {
            fields = review
            item["avatar_path"] = item["author_details"]["avatar_path"]

            item["rating"] = item["author_details"]["rating"]

            if (item["avatar_path"]) {
                if (item["avatar_path"].slice(0,5) == '/http'){
                    item["avatar_path"] =item["avatar_path"].slice(1,-1)
                }else{
                    item["avatar_path"] = ava_pre + item["avatar_path"]
                }
                
            } else {
                item["avatar_path"]= ava_default
            }
        }
        if(url_para[2] == "credits"){
            fields = cast
            // https://image.tmdb.org/t/p/w500/+ profile_path 
            if (item["profile_path"]){
                item["profile_path"] = imgURL+"w500"+item["profile_path"]
            }else{// If profile picture is not available, don’t display those cast members.
                continue
            }    
        }
        for (let key of fields) {
            one[key] = item[key]
        }
        resp_data.push(one)
    }
    return resp_data
}

 // tv OR movie detail
 app.get('/detail/:pos1/:pos2', (req, res) => {
    let mov = ['title', 'genres', 'spoken_languages', 'poster_path',"id",
    'release_date', 'runtime', 'overview', 'vote_average', 'tagline'] 
    // tv no 'release_date' runtime  title  || use  first_air_date  episode_run_time  name  //
    let pa = req.params
    let url = `${base}/3/${pa.pos1}/${pa.pos2}?api_key=${key}&language=en-US&page=1`
    get(url).then(
        resp_tmdb => {
            let data = resp_tmdb.data
            tmp = {}
            if (pa.pos1 == "tv"){
                data["title"] = data["name"]
                data["release_date"] = data["first_air_date"]
                data["runtime"] = data["episode_run_time"]
            }
            data["poster_path"] = data["poster_path"] ? imgURL + "w500" + data["poster_path"] : ""
            mov.forEach(field =>{
                tmp[field] = data[field]
            })
            res.json(tmp)
        }
    ).catch(error => {
        res.status(500).json({ msg: ""+error})
    })
});


//  cast detail and cast external ids 
app.get('/person/:pos1/:pos2?', (req, res) => {
    let detail = ['birthday', 'gender', 'name', 'homepage',
        'also_known_as', 'known_for_department', 'biography']
    // person/550843/external_ids
    let ext = ['imdb_id', 'facebook_id', 'instagram_id', 'twitter_id']
    let fields = detail
    let pa = req.params
    let url = `${base}/3/person/${pa.pos1}${(pa.pos2) ? '/' + pa.pos2 : ''}?api_key=${key}&language=en-US&page=1`
    get(url).then(
        resp_tmdb => {
            let data = resp_tmdb.data
            let tmp = {}
            if (pa.pos2){
                fields = ext 
            }
            for(let field of fields){
                tmp[field] =  data[field]
            }
            res.json(tmp)
        }
    ).catch(error => {
        res.json({ msg: ""+error})
    })
});

app.use('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/frontend/index.html'));
});


//  for debug 
app.listen(3001, () => {
    console.log(`Example app listening at http://localhost:${3001}`)
})

module.exports = app;
