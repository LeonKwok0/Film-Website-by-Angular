(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/leonguo/Desktop/web/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "151J":
/*!*******************************************************!*\
  !*** ./src/app/components/detail/detail.component.ts ***!
  \*******************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _smcarousel_smcarousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../smcarousel/smcarousel.component */ "OkWP");







function DetailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "youtube-player", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx_r0.videoKey)("height", ctx_r0.videoHeight)("width", ctx_r0.videoWidth);
} }
function DetailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Genres:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Spoken Languages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailComponent_div_3_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.basic.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.basic.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 9, ctx_r1.basic.release_date, "yyyy"), " \u00A0|\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2605", ctx_r1.basic.vote_average, " \u00A0| \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.getInt(ctx_r1.basic.runtime / 60) > 0 ? ctx_r1.getInt(ctx_r1.basic.runtime / 60) + "hrs" : null, " \u00A0 ", ctx_r1.basic.runtime % 60 > 0 ? ctx_r1.basic.runtime % 60 + "mins" : null, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.basic.genres, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.basic.spoken_languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.hasAdded ? "Remove from watchlist" : "Add to Watchlist");
} }
function DetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.basic.overview);
} }
function DetailComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://twitter.com/intent/tweet?text=" + ctx_r3.twContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://www.facebook.com/sharer/sharer.php?u=" + ctx_r3.fbContent + "%2F&src=sdkpreparse", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DetailComponent_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailComponent_div_6_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.castDetail(item_r12.id, item_r12.profile_path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r12.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.character);
} }
function DetailComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DetailComponent_div_6_div_4_Template, 10, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.casts);
} }
function DetailComponent_div_9_a_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://www.imdb.com/name/" + ctx_r15.castSocial.imdb_id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DetailComponent_div_9_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://instagram.com/" + ctx_r16.castSocial.instagram_id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DetailComponent_div_9_a_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://facebook.com/" + ctx_r17.castSocial.facebook_id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DetailComponent_div_9_a_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://twitter.com/" + ctx_r18.castSocial.twitter_id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DetailComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DetailComponent_div_9_a_24_Template, 2, 1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DetailComponent_div_9_a_25_Template, 2, 1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DetailComponent_div_9_a_26_Template, 2, 1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DetailComponent_div_9_a_27_Template, 2, 1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.castInfo.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.castImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth: ", ctx_r5.castInfo.birthday, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r5.castInfo.place_of_birth, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("Gender: ", ctx_r5.castInfo.gender == 1 ? "Female" : null, " ", ctx_r5.castInfo.gender == 2 ? "Male" : null, " ", ctx_r5.castInfo.gender == 0 ? "Undefined" : null, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Known for: ", ctx_r5.castInfo.known_for_department, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Also Known as: ", ctx_r5.castInfo.also_known_as, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.castSocial.imdb_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.castSocial.instagram_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.castSocial.facebook_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.castSocial.twitter_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.castInfo.biography);
} }
function DetailComponent_div_10_div_5_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u2B51 ", item_r20.rating, " \u00A0");
} }
function DetailComponent_div_10_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailComponent_div_10_div_5_span_8_Template, 2, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Read the Rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r20.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", item_r20.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r20.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Written by ", item_r20.author, " on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 7, item_r20.created_at, "MMM d, y, h:mm:ss a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r20.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r20.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DetailComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reviews \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailComponent_div_10_div_5_Template, 17, 10, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.reviews.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.reviews);
} }
function DetailComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-smcarousel", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Recommended ", ctx_r7.mediaType == "tv" ? "TV Shows" : "Movies", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idx", "recommend")("url", "/collect/" + ctx_r7.mediaType + "/" + ctx_r7.mediaId + "/recommendations");
} }
function DetailComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-smcarousel", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Similar ", ctx_r8.mediaType == "tv" ? "TV Shows" : "Movies", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idx", "similarMeida")("url", "/collect/" + ctx_r8.mediaType + "/" + ctx_r8.mediaId + "/similar");
} }
class DetailComponent {
    constructor(data, router) {
        this.data = data;
        this.router = router;
        this.videoWidth = 600;
        this.videoHeight = 300;
        this.isSmall = false;
        this.getInt = Math.floor;
        this.hasAdded = false;
        // use router.queryParams can get para like ?a=1
        // router.paramMap to get para in ulr path (defined at router js)
        router.paramMap.subscribe(params => {
            this.mediaType = params.get('media_type');
            this.mediaId = params.get('id');
        });
    }
    ngOnInit() {
        this.onResize();
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        this.data.get(`/detail/${this.mediaType}/${this.mediaId}`).subscribe((resp) => {
            this.basic = resp;
            this.basic.genres = this.basic.genres.map((item) => item['name']);
            this.basic.spoken_languages = this.basic.spoken_languages.map((item) => item['name']);
            this.checkStatus();
            this.contiueWatch();
            this.twContent = `Watch ${this.basic['title']} ${'https://www.youtube.com/watch?v=' + this.videoKey}     %23 USC %23 CSCI571 #FightOn`;
        });
        this.data.get(`/3/${this.mediaType}/${this.mediaId}/videos`).subscribe((resp) => {
            if (resp && resp.length > 0) {
                this.videoKey = resp[0]['key'];
            }
            else {
                this.videoKey = 'tzkWB85ULJY';
            }
            // it is async so double write this to get all valid data
            this.fbContent = 'https://www.youtube.com/watch?v=' + this.videoKey;
            this.twContent = `Watch ${this.basic['title']} ${'https://www.youtube.com/watch?v=' + this.videoKey}     %23 USC %23 CSCI571 #FightOn`;
        });
        this.data.get(`/3/${this.mediaType}/${this.mediaId}/reviews`).subscribe((resp) => {
            this.reviews = resp.slice(0, 10);
        });
        this.data.get(`/3/${this.mediaType}/${this.mediaId}/credits`).subscribe((resp) => {
            this.casts = resp;
            // console.log(resp)
        });
        this.data.get(`/3/${this.mediaType}/${this.mediaId}/credits`).subscribe((resp) => {
            this.casts = resp;
            // console.log(resp)
        });
        this.data.get(`/collect/${this.mediaType}/${this.mediaId}/similar`).subscribe((resp) => {
            this.similar = resp;
        });
        this.data.get(`/collect/${this.mediaType}/${this.mediaId}/recommendations`).subscribe((resp) => {
            this.recommendations = resp;
            // console.log(resp)
        });
    }
    contiueWatch() {
        let oldData = this.data.get_local('continue');
        let idxs = oldData.map((item) => item['id']);
        // if exist del it finally add it to the tail of array 
        for (let index = 0; index < oldData.length; index++) {
            if (oldData[index]["id"] == this.basic["id"]) {
                oldData.splice(index, 1);
            }
        }
        // if length > 24 remove top element
        if (oldData.length == 24) {
            oldData.shift();
        }
        oldData.push({
            id: this.basic["id"],
            title: this.basic['title'],
            poster_path: this.basic['poster_path'],
            media_type: this.mediaType
        });
        this.data.set_local('continue', oldData);
    }
    onResize() {
        let width = window.innerWidth;
        // let w= width*2/3
        // let h= w*2/3
        // this.videoWidth = w>600?600:w
        // this.videoHeight = h>300?300:h
        // another way
        this.isSmall = width <= 920 ? true : false;
        this.videoWidth = this.isSmall ? 380 : 600;
        this.videoHeight = this.isSmall ? 240 : 350;
    }
    checkStatus() {
        let oldData = this.data.get_local('mylist');
        let idxs = oldData.map((item) => item['id']);
        if (idxs.indexOf(this.basic['id']) != -1) {
            this.hasAdded = true;
            console.log(this.hasAdded);
            return true;
        }
        else {
            this.hasAdded = false;
            return false;
        }
    }
    alertPan(type, alertContent) {
        console.log("close");
        let alertHtml = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
    ${alertContent}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" id="alertBtn">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>`;
        let div = document.getElementById("alertPan");
        if (div) {
            div.innerHTML = alertHtml;
        }
        window.setTimeout(function () {
            var _a;
            (_a = document.getElementById('alertBtn')) === null || _a === void 0 ? void 0 : _a.click();
            console.log("closed");
        }, 5000);
    }
    addList() {
        let oldData = this.data.get_local('mylist');
        if (this.hasAdded) {
            for (let idx in oldData) {
                if (oldData[idx]['id'] == this.basic["id"]) {
                    oldData.splice(idx, 1);
                    this.data.set_local('mylist', oldData);
                    this.alertPan('danger', "Removed from watchlist.");
                    this.hasAdded = false;
                }
            }
        }
        else {
            if (oldData.length == 24) {
                oldData.shift();
            }
            oldData.push({
                id: this.basic["id"],
                title: this.basic['title'],
                poster_path: this.basic['poster_path'],
                media_type: this.mediaType
            });
            this.data.set_local('mylist', oldData);
            this.hasAdded = true;
            this.alertPan('success', "Added to watchlist.");
        }
    }
    castDetail(castID, profile_path) {
        this.castImg = profile_path;
        this.data.get(`/person/${castID}`).subscribe((resp) => {
            this.castInfo = resp;
            // console.log(resp)
        });
        this.data.get(`/person/${castID}/external_ids`).subscribe((resp) => {
            this.castSocial = resp;
            // console.log(resp)
        });
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], hostBindings: function DetailComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DetailComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 13, vars: 9, consts: [[1, "container", 2, "margin-top", "20px"], [1, "row"], ["class", "col-lg", 4, "ngIf"], ["class", "col-lg basic", 4, "ngIf"], ["class", "row desc", 4, "ngIf"], ["class", "cast", 4, "ngIf"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], ["style", "color: black;", "class", "modal-content", 4, "ngIf"], ["class", "rev desc", 4, "ngIf"], ["class", "otherMedia", "style", "padding-top: 60px;", 4, "ngIf"], ["class", "otherMedia", 4, "ngIf"], [1, "col-lg"], ["suggestedQuality", "highres", 3, "videoId", "height", "width"], [1, "col-lg", "basic"], [1, "detailTitle"], [1, "tagline"], ["id", "year_rate_time"], [1, "halfTitle"], ["type", "button", 1, "btn", "btn-primary", "addBtn", 3, "click"], ["id", "alertPan"], [1, "row", "desc"], [1, "descTitle"], [1, "share"], [1, "shareTitle"], ["id", "tw"], ["target", "view_window", 1, "twitter-share-button", 3, "href"], [1, "fab", "fa-twitter"], ["id", "fb"], ["target", "_blank", 1, "fb-xfbml-parse-ignore", 3, "href"], [1, "fab", "fa-facebook-square"], [1, "cast"], [1, "row", "desc", "subTitle"], [1, "d-flex", "flex-row", "flex-nowrap", "overflow-auto"], ["class", "card", "style", "min-width: 15rem;", "data-target", "#exampleModal", "data-toggle", "modal", 3, "click", 4, "ngFor", "ngForOf"], ["data-target", "#exampleModal", "data-toggle", "modal", 1, "card", 2, "min-width", "15rem", 3, "click"], [1, "card-img-top", 3, "src"], [1, "card-body", 2, "text-align", "center"], [1, "character"], [1, "modal-content", 2, "color", "black"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-md-4"], ["width", "100%", "alt", "", 2, "width", "100%", 3, "src"], [1, "col-md-8"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], ["ngbTooltip", "Visit IMDB", "tooltipClass", "tooltip", 1, "fab", "fa-imdb", "fa-2x", 2, "color", "#e2b62b"], ["ngbTooltip", "Visit Instagram", "tooltipClass", "tooltip", 1, "fab", "fa-instagram", "fa-2x", 2, "color", "#8d1b8d"], ["ngbTooltip", "Visit Facebook", "tooltipClass", "tooltip", 1, "fab", "fa-facebook-square", "fa-2x", 2, "color", "#0000ff"], ["ngbTooltip", "Visit Twitter", "tooltipClass", "tooltip", 1, "fab", "fa-twitter", "fa-2x", 2, "color", "#1e90ff"], [1, "rev", "desc"], [1, "row", "subTitle"], [2, "color", "grey"], ["class", "row revEle", 4, "ngFor", "ngForOf"], [1, "row", "revEle"], [1, "ele"], [1, "col-lg-2", "eleLeft"], ["alt", "", 3, "src"], [1, "col-lg-10", "eleRight"], [1, "eleTitleRate"], [1, "eleTitle"], ["class", "eleRate", 4, "ngIf"], [1, "eleAuthor"], [1, "eleContent"], [1, "readMore", 2, "text-decoration", "underline"], [3, "href"], [1, "eleRate"], [1, "otherMedia", 2, "padding-top", "60px"], [1, "subTitle"], [3, "idx", "url"], [1, "otherMedia"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DetailComponent_div_3_Template, 24, 12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DetailComponent_div_4_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailComponent_div_5_Template, 12, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DetailComponent_div_6_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailComponent_div_9_Template, 34, 14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DetailComponent_div_10_Template, 6, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetailComponent_div_11_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DetailComponent_div_12_Template, 4, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videoKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basic && ctx.videoKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basic && ctx.videoKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.casts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.castInfo && ctx.castSocial);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recommendations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.similar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__["YouTubePlayer"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltip"], _smcarousel_smcarousel_component__WEBPACK_IMPORTED_MODULE_6__["SmcarouselComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".detailTitle[_ngcontent-%COMP%]{\n    font-size: 34px;\n    color: white;\n}\n.tagline[_ngcontent-%COMP%]{\n    font-style: italic;\n    font-size: 18px;\n    margin-bottom: 5px;\n}\n.basic[_ngcontent-%COMP%], .desc[_ngcontent-%COMP%]{\n    color: #c8c4c9;\n}\n#year_rate_time[_ngcontent-%COMP%]{\n    font-size: 20px;\n    margin-bottom: 10px;\n}\n.halfTitle[_ngcontent-%COMP%]{\n    color: white;\n}\n.addBtn[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    margin-bottom:20px;\n}\n.desc[_ngcontent-%COMP%]{\n    padding-left: 20px;\n\n}\n.descTitle[_ngcontent-%COMP%], .shareTitle[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    color: white;\n    font-size: 20px;\n}\n.share[_ngcontent-%COMP%]{\n    margin-top: 20px;\n}\n#tw[_ngcontent-%COMP%]{\n    font-size: 24px;\n}\n#fb[_ngcontent-%COMP%]{\n    font-size: 24px;\n    color: #1800ff;\n}\n.subTitle[_ngcontent-%COMP%]{\n    font-size: 34px;\n    color: white;\n}\n.card[_ngcontent-%COMP%]{\n    margin-right: 10px;\n    border-width: 0px;\n    border-radius: 12px;\n    cursor: pointer;\n\n}\n\n.card-img-top[_ngcontent-%COMP%]{\n    border-top-left-radius:12px;\n    border-top-right-radius: 12px;\n}\n.card-body[_ngcontent-%COMP%]{\n   padding-bottom: 4px;\n}\ni[_ngcontent-%COMP%]{\n    margin-right: 10px;\n    cursor: pointer;\n}\n.tooltip-inner[_ngcontent-%COMP%]{\n    color: black;\n    border: thin solid gray;\n    background-color: white;\n}\n\n\n\n\n\n.rev[_ngcontent-%COMP%]{\n    margin-top:20px ;\n}\n.ele[_ngcontent-%COMP%]{\n    background: #ffffff;\n    \n    width: 100%;\n    height: 100%;\n    border-radius: 12px;\n    padding-bottom: 10px;\n    padding-right: 30px;\n    margin-right: 15px;\n}\n.revEle[_ngcontent-%COMP%]{\n    margin-top: 20px;\n}\n.eleLeft[_ngcontent-%COMP%]{\n    float: left;\n}\n.eleRight[_ngcontent-%COMP%]{\n    float: right;\n}\n.eleLeft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{   \n    width: 60px;\n    border-radius:50%;\n    margin-top: 15px;\n}\n.eleTitleRate[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    margin-bottom:24px ;\n    font-size: 20px;\n    color: black;\n    word-wrap:break-word;\n    \n}\n.eleRate[_ngcontent-%COMP%]{\n    color: white;\n    background-color: black;\n    border-radius: 10px;\n    font-size: 16px;\n}\n.eleAuthor[_ngcontent-%COMP%]{\n    color: grey;\n}\n.eleContent[_ngcontent-%COMP%]{\n    overflow : hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    color: #1c0429;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBR0E7SUFDSSxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTs7QUFFbkI7QUFFQTs7R0FFRztBQUNIO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQztBQUNBO0dBQ0csbUJBQW1CO0FBQ3RCO0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7QUFHQTs7OztLQUlLO0FBQ0w7Ozs7R0FJRztBQUNIOzs7R0FHRztBQUVIOzs7Ozs7R0FNRztBQUNIOzs7O0dBSUc7QUFHSDtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCOztvQkFFZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEIiLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsVGl0bGV7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi50YWdsaW5le1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmJhc2ljICwuZGVzY3tcbiAgICBjb2xvcjogI2M4YzRjOTtcbn1cbiN5ZWFyX3JhdGVfdGltZXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5oYWxmVGl0bGV7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmFkZEJ0bntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206MjBweDtcbn1cblxuXG4uZGVzY3tcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbn1cbi5kZXNjVGl0bGUsLnNoYXJlVGl0bGV7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uc2hhcmV7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiN0d3tcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG4jZmJ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjMTgwMGZmO1xufVxuXG4uc3ViVGl0bGV7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG5cbi8qIC5jYXJkOmhvdmVye1xuICAgIFxufSAqL1xuLmNhcmQtaW1nLXRvcHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEycHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG4uY2FyZC1ib2R5e1xuICAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuXG5pe1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b29sdGlwLWlubmVye1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IHRoaW4gc29saWQgZ3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuXG4vKiAubW9kYWwtZGlhbG9nIHtcbiAgei1pbmRleDo5OTk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB9ICovXG4vKiA6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG5cblxufSAqL1xuLypcbjo6d2Via2l0LXNjcm9sbGJhci10aHVtYntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xufSAqL1xuXG4vKiAuY2FzdENvbnRhaW5lcntcbiAgICBvdmVyZmxvdy14OiBhdXRvOyBcbiAgXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcblxufSAqL1xuLyogOjotd2Via2l0LXNjcm9sbGJhclxue1xuICAgbWFyZ2luLXRvcDogMjBweDsgXG5cbn0gKi9cblxuXG4ucmV2e1xuICAgIG1hcmdpbi10b3A6MjBweCA7XG59XG4uZWxle1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnJldkVsZXtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmVsZUxlZnR7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uZWxlUmlnaHR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLmVsZUxlZnQgaW1neyAgIFxuICAgIHdpZHRoOiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZWxlVGl0bGVSYXRle1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbToyNHB4IDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdvcmQtd3JhcDpicmVhay13b3JkO1xuICAgIC8qIHdvcmQtd3JhcDogYnJlYWstYWxsO1xuXHR3b3JkLWJyZWFrOiBub3JtYWw7XG5cdG92ZXJmbG93OiBoaWRkZW47ICovXG59XG4uZWxlUmF0ZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uZWxlQXV0aG9ye1xuICAgIGNvbG9yOiBncmV5O1xufVxuLmVsZUNvbnRlbnR7XG4gICAgb3ZlcmZsb3cgOiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiAjMWMwNDI5O1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: searchService, HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchService", function() { return searchService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function HeaderComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ngb-highlight", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r4 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", "/watch/" + r_r4.media_type + "/" + r_r4.id, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", r_r4.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("result", r_r4.name);
} }
const _c0 = function (a0) { return { "color": a0 }; };
// const URL = 'http://localhost:3001/search?query=';
const URL = '/search?query=';
class searchService {
    constructor(http) {
        this.http = http;
    }
    search(term) {
        if (term === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        return this.http
            .get(URL + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => resp.slice(0, 7)));
    }
}
searchService.ɵfac = function searchService_Factory(t) { return new (t || searchService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
searchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: searchService, factory: searchService.ɵfac });
class HeaderComponent {
    constructor(_service) {
        this._service = _service;
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(term => this._service.search(term)));
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](searchService)); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([searchService])], decls: 22, vars: 8, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", 2, "background-color", "#000c21"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "", 1, "nav-link", 3, "ngStyle"], ["routerLink", "/mylist", "routerLinkActive", "", 1, "nav-link", 3, "ngStyle"], ["rla", "routerLinkActive"], [1, "nav-item", 2, "display", "none"], ["routerLink", "/watch", "routerLinkActive", "", 1, "nav-link"], ["rla2", "routerLinkActive"], ["rt", ""], [1, "form-inline", "my-2", "my-lg-0"], ["id", "typeahead-template", "type", "text", "placeholder", "Search", 3, "ngbTypeahead", "resultTemplate"], [2, "color", "white", 3, "href"], [1, "searchImg", 3, "src"], [3, "result"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, HeaderComponent_ng_template_18_Template, 3, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, !_r1.isActive && !_r0.isActive ? "white" : null));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, _r0.isActive ? "white" : null));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbTypeahead", ctx.search)("resultTemplate", _r2);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbHighlight"]], styles: ["input{\n    background-color: #000c21;\n    border: 0px;\n    border-bottom:2px solid white;\n    color: white;\n    margin-right: 60px;\n    width: 200px;\n}\n.current{\n    color: white;\n}\n/* for search result panel */\n.searchImg{\n    width: 68px;\n    margin-right: 5px;\n}\n.dropdown-item{\n    padding: 3px 8px;\n    color: white;\n}\n.dropdown-menu{\n    background-color: #050932;\n    border: solid 1px white;\n    left: 68px;\n    width: 270px;\n    overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBR0EsNEJBQTRCO0FBQzVCO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwYzIxO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIHdoaXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuLmN1cnJlbnR7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cbi8qIGZvciBzZWFyY2ggcmVzdWx0IHBhbmVsICovXG4uc2VhcmNoSW1ne1xuICAgIHdpZHRoOiA2OHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uZHJvcGRvd24taXRlbXtcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5kcm9wZG93bi1tZW51e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTA5MzI7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XG4gICAgbGVmdDogNjhweDtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "6DPj":
/*!*******************************************************!*\
  !*** ./src/app/components/mylist/mylist.component.ts ***!
  \*******************************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MylistComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No items found in Watchlist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MylistComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " My WatchList ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "smposter": a0 }; };
const _c1 = function (a0) { return { "smTitle": a0 }; };
function MylistComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/watch/" + item_r5.media_type + "/" + item_r5.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r5.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r4.isSmall));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r4.isSmall));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.title);
} }
function MylistComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistComponent_div_3_div_1_Template, 6, 9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const smList_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", smList_r3);
} }
class MylistComponent {
    constructor(data) {
        this.data = data;
        this.mylist = [];
    }
    ngOnInit() {
        this.onResize();
        let raw_list = this.data.get_local('mylist').reverse();
        for (let i = 0; i < raw_list.length + 6; i += 6) {
            if (raw_list[i]) {
                this.mylist.push(raw_list.slice(i, i + 6));
            }
        }
    }
    onResize() {
        let width = window.innerWidth;
        this.isSmall = width <= 920 ? true : false;
        console.log(width);
    }
}
MylistComponent.ɵfac = function MylistComponent_Factory(t) { return new (t || MylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
MylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MylistComponent, selectors: [["app-mylist"]], hostBindings: function MylistComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function MylistComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 4, vars: 3, consts: [[1, "container"], ["class", "notFound", 4, "ngIf"], ["class", " row mytitle", 4, "ngIf"], ["class", "row ", "style", "text-align: center;", 4, "ngFor", "ngForOf"], [1, "notFound"], [1, "row", "mytitle"], [1, "row", 2, "text-align", "center"], ["class", "col-md-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [3, "href"], [1, "bigPoster", 3, "src", "ngClass"], [1, "mediaTitle", 3, "ngClass"], [1, "titleText"]], template: function MylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MylistComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MylistComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mylist.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mylist.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mylist);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".notFound[_ngcontent-%COMP%]{\n    text-align: center;\n    color: white;\n    font-size: 36px;\n    height: 440px;\n    margin-top: 30px;\n}\n.mytitle[_ngcontent-%COMP%]{\n    color:white;\n    font-size: 36px;\n    margin-bottom: 40px;\n\n}\n.container[_ngcontent-%COMP%]{\n    margin-top: 30px;\n    margin-bottom: 100px;\n}\n.bigPoster[_ngcontent-%COMP%]{\n    width: 100%;\n}\n.smposter[_ngcontent-%COMP%]{\n    width: 54%;\n}\n.col-md-2[_ngcontent-%COMP%]{   \n    margin-top: 18px;\n    margin-bottom:18px;\n}\n.col-md-2[_ngcontent-%COMP%]:hover  {\n    transform: scale(1.1);\n}\n.col-md-2[_ngcontent-%COMP%]:hover   .mediaTitle[_ngcontent-%COMP%]{\n    opacity: 1;\n}\n.mediaTitle[_ngcontent-%COMP%]{\n    opacity: 0;\n    height: 100px;\n    width: 100%;\n    position: relative;\n    bottom: 100px;\n    z-index: 999;\n    color: white;\n    font-size: 16px;\n    background: linear-gradient(0deg, rgba(1,1,1,1) 50%, rgba(255,255,255,0) 75%); \n}\n.smTitle[_ngcontent-%COMP%]{\n    opacity:1;\n    width:54%;\n    left: 23%;\n\n}\n.titleText[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom: 10px;\n    left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7O0FBRXZCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBR0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUVBLGFBQWEsdUJBQXVCO0lBQ2hDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUdBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLDZFQUE2RTtBQUNqRjtBQUNBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTOztBQUViO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7QUFDZCIsImZpbGUiOiJteWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RGb3VuZHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBoZWlnaHQ6IDQ0MHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ubXl0aXRsZXtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcblxufVxuXG4uY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cblxuLmJpZ1Bvc3RlcntcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zbXBvc3RlcntcbiAgICB3aWR0aDogNTQlO1xufVxuXG4uY29sLW1kLTJ7ICAgLyogZm9yIHNjYWxlIGluIGhlaWdodCovXG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOjE4cHg7XG59XG4uY29sLW1kLTI6aG92ZXIgIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cblxuLmNvbC1tZC0yOmhvdmVyIC5tZWRpYVRpdGxle1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5tZWRpYVRpdGxle1xuICAgIG9wYWNpdHk6IDA7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAxMDBweDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxLDEsMSwxKSA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgNzUlKTsgXG59XG4uc21UaXRsZXtcbiAgICBvcGFjaXR5OjE7XG4gICAgd2lkdGg6NTQlO1xuICAgIGxlZnQ6IDIzJTtcblxufVxuXG4udGl0bGVUZXh0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMTVweDtcbn0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carousel/carousel.component */ "qUJ1");
/* harmony import */ var _smcarousel_smcarousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../smcarousel/smcarousel.component */ "OkWP");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 25, vars: 14, consts: [[1, "container"], [1, "row"], [1, "col"], [1, "subTitle"], [3, "idx", "url"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Continue Watching ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-smcarousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Popular Movies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-smcarousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Top Rated Movies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-smcarousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Trending Movies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-smcarousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Popular TV Shows ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-smcarousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Top Rated TV Shows ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-smcarousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Trending TV shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-smcarousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idx", "ContinueWatching")("url", "ContinueWatching");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idx", "PopularMovies")("url", "/collect/movie/popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idx", "TopRatedMovies")("url", "/collect/movie/top_rated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idx", "TrendingMovies")("url", "/collect/trending/movie/day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idx", "PopularTVShows")("url", "/collect/tv/popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idx", "TopRatedTVShows")("url", "/collect/tv/top_rated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idx", "TrendingTVshows")("url", "/collect/trending/tv/day");
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _smcarousel_smcarousel_component__WEBPACK_IMPORTED_MODULE_2__["SmcarouselComponent"]], styles: [".subTitle[_ngcontent-%COMP%]{\n    color: white;\n    font-size: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJUaXRsZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzOHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DataService {
    constructor(http) {
        this.http = http;
    }
    get_local(key) {
        let res = localStorage.getItem(key);
        if (res) {
            return JSON.parse(res);
        }
        else {
            return [];
        }
    }
    set_local(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    get(url) {
        // url = 'http://localhost:3001' +url
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["retry"])(3));
    }
    getSmallCaro(content, type, when) {
        return this.http.get(`/api/smallCaro/${content}/${type}${when == null ? '' : '/' + when}`);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OkWP":
/*!***************************************************************!*\
  !*** ./src/app/components/smcarousel/smcarousel.component.ts ***!
  \***************************************************************/
/*! exports provided: SmcarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmcarouselComponent", function() { return SmcarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SmcarouselComponent_div_1_ol_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li");
} if (rf & 2) {
    const key_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#" + ctx_r4.idx)("data-slide-to", key_r6);
} }
function SmcarouselComponent_div_1_ol_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SmcarouselComponent_div_1_ol_1_li_1_Template, 1, 2, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.bigList);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function SmcarouselComponent_div_1_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const key_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, key_r9 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/watch/" + item_r8.media_type + "/" + item_r8.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r8.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.title);
} }
function SmcarouselComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SmcarouselComponent_div_1_div_2_div_1_Template, 6, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.smList);
} }
function SmcarouselComponent_div_1_div_3_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/watch/" + item_r14.media_type + "/" + item_r14.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r14.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.title);
} }
function SmcarouselComponent_div_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SmcarouselComponent_div_1_div_3_div_1_div_2_Template, 6, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lists_r11 = ctx.$implicit;
    const key_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, key_r12 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", lists_r11);
} }
function SmcarouselComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SmcarouselComponent_div_1_div_3_div_1_Template, 3, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.bigList);
} }
const _c1 = function (a0) { return { "left": a0 }; };
const _c2 = function (a0) { return { "right": a0 }; };
function SmcarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SmcarouselComponent_div_1_ol_1_Template, 2, 1, "ol", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SmcarouselComponent_div_1_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SmcarouselComponent_div_1_div_3_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.idx);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isSmall);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSmall);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isSmall);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#" + ctx_r0.idx, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r0.isSmall ? "-10px" : "-30px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#" + ctx_r0.idx, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx_r0.isSmall ? "-10px" : "-30px"));
} }
class SmcarouselComponent {
    constructor(data) {
        this.data = data;
        this.idx = "";
        this.url = ""; // request url
        this.bigList = [];
        this.smList = [];
        this.width = 0;
        this.isSmall = false;
    }
    ngOnInit() {
        this.onResize();
        if (this.url == "ContinueWatching") {
            this.smList = this.data.get_local('continue').reverse();
            let tmp = this.smList;
            for (let i = 0; i < 24; i += 6) {
                if (this.smList[i]) {
                    this.bigList.push(tmp.slice(i, i + 6));
                }
            }
            return;
        }
        this.data.get(this.url).subscribe((resp) => {
            console.log(resp);
            this.smList = resp;
            let tmp = resp;
            for (let i = 0; i < 24; i += 6) {
                if (resp[i]) {
                    this.bigList.push(tmp.slice(i, i + 6));
                }
            }
            // console.log(this.bigList)
        });
    }
    onResize() {
        this.width = window.innerWidth;
        this.isSmall = this.width <= 920 ? true : false;
        console.log(this.width);
    }
}
SmcarouselComponent.ɵfac = function SmcarouselComponent_Factory(t) { return new (t || SmcarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
SmcarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmcarouselComponent, selectors: [["app-smcarousel"]], hostBindings: function SmcarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SmcarouselComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { idx: "idx", url: "url" }, decls: 2, vars: 1, consts: [["class", "carousel slide", "data-ride", "carousel", 3, "id", 4, "ngIf"], ["data-ride", "carousel", 1, "carousel", "slide", 3, "id"], ["class", "carousel-indicators", 4, "ngIf"], ["class", "carousel-inner", "style", "text-align: center;", 4, "ngIf"], ["class", "carousel-inner", 4, "ngIf"], ["role", "button", "data-slide", "prev", 1, "prev", 3, "href", "ngStyle"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["role", "button", "data-slide", "next", 1, "next", 3, "href", "ngStyle"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-indicators"], [4, "ngFor", "ngForOf"], [1, "carousel-inner", 2, "text-align", "center"], ["class", "carousel-item sm-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "carousel-item", "sm-item", 3, "ngClass"], [3, "href"], [1, "small_poster", 3, "src"], [1, "sm-mediaTitle"], [1, "titleText"], [1, "carousel-inner"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "carousel-item", 3, "ngClass"], [1, "row", 2, "text-align", "center"], ["class", "col-md-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "bigPoster", 3, "src"], [1, "mediaTitle"]], template: function SmcarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SmcarouselComponent_div_1_Template, 12, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.smList.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".small_poster[_ngcontent-%COMP%]{\n    width:54%;\n}\n\n.carousel-inner[_ngcontent-%COMP%]{\n    text-align: center;\n}\n\n.bigPoster[_ngcontent-%COMP%]{\n    width: 100%;\n}\n\n.col-md-2[_ngcontent-%COMP%]{   \n    margin-top: 32px;\n    margin-bottom:32px;\n}\n\n.col-md-2[_ngcontent-%COMP%]:hover  {\n    transform: scale(1.2);\n}\n\n.col-md-2[_ngcontent-%COMP%]:hover   .mediaTitle[_ngcontent-%COMP%]{\n    opacity: 1;\n}\n\n.subTitle[_ngcontent-%COMP%]{\n    color: white;\n    font-size: 18px;\n    float:left;\n}\n\n.next[_ngcontent-%COMP%], .prev[_ngcontent-%COMP%]{  \n    position: absolute;\n    top: 0;\n    bottom: 100px;\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    opacity: 0.5;\n    transition: opacity 0.15s ease;\n    text-align: center;\n}\n\n.next[_ngcontent-%COMP%]{\n    right: -30px;\n}\n\n.prev[_ngcontent-%COMP%]{\n    left: -30px;\n}\n\n.mediaTitle[_ngcontent-%COMP%]{\n    opacity: 0;\n    height: 100px;\n    width: 100%;\n    position: relative;\n    bottom: 100px;\n    z-index: 999;\n    color: white;\n    font-size: 12px;\n    background: linear-gradient(0deg, rgba(1,1,1,1) 50%, rgba(255,255,255,0) 75%); \n}\n\n.titleText[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom: 10px;\n    left: 15px;\n}\n\n.sm-mediaTitle[_ngcontent-%COMP%]{\n    height: 100px;\n    width: 55%;\n    position: relative;\n    bottom: 100px;\n    left:22.5%;\n    z-index: 999;\n    color: white;\n    font-size: 12px;\n    background: linear-gradient(0deg, rgba(1,1,1,1) 50%, rgba(255,255,255,0) 75%); \n}\n\n.sm-item[_ngcontent-%COMP%]:hover{\n    transform: scale(1.2);\n}\n\n.sm-item[_ngcontent-%COMP%]{\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n\n.carousel-indicators[_ngcontent-%COMP%]{\n    bottom: 80px;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7O0FBRUg7SUFDSSxTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsYUFBYSx1QkFBdUI7SUFDaEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFHQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUtBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLDZFQUE2RTtBQUNqRjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUdBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZiw2RUFBNkU7QUFDakY7O0FBR0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTs7QUFFaEIiLCJmaWxlIjoic21jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNhcm91c2VsLWl0ZW17XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogNTBweDtcbn0gKi9cblxuLnNtYWxsX3Bvc3RlcntcbiAgICB3aWR0aDo1NCU7XG59XG4uY2Fyb3VzZWwtaW5uZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmlnUG9zdGVye1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sLW1kLTJ7ICAgLyogZm9yIHNjYWxlIGluIGhlaWdodCovXG4gICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICBtYXJnaW4tYm90dG9tOjMycHg7XG59XG4uY29sLW1kLTI6aG92ZXIgIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cblxuLmNvbC1tZC0yOmhvdmVyIC5tZWRpYVRpdGxle1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zdWJUaXRsZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZsb2F0OmxlZnQ7XG59XG5cblxuXG5cbi5uZXh0LC5wcmV2eyAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDEwMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5leHR7XG4gICAgcmlnaHQ6IC0zMHB4O1xufVxuLnByZXZ7XG4gICAgbGVmdDogLTMwcHg7XG59XG5cbi5tZWRpYVRpdGxle1xuICAgIG9wYWNpdHk6IDA7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAxMDBweDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxLDEsMSwxKSA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgNzUlKTsgXG59XG5cbi50aXRsZVRleHR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBsZWZ0OiAxNXB4O1xufVxuXG5cbi5zbS1tZWRpYVRpdGxle1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAxMDBweDtcbiAgICBsZWZ0OjIyLjUlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDEsMSwxLDEpIDUwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSA3NSUpOyBcbn1cblxuXG4uc20taXRlbTpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG4uc20taXRlbXtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnN7XG4gICAgYm90dG9tOiA4MHB4O1xuXG59ICJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'USC Films';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mylist/mylist.component */ "6DPj");
/* harmony import */ var _components_smcarousel_smcarousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/smcarousel/smcarousel.component */ "OkWP");
/* harmony import */ var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/detail/detail.component */ "151J");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/data.service */ "EnSQ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__["YouTubePlayerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_7__["MylistComponent"],
        _components_smcarousel_smcarousel_component__WEBPACK_IMPORTED_MODULE_8__["SmcarouselComponent"],
        _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["DetailComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__["YouTubePlayerModule"]] }); })();


/***/ }),

/***/ "qUJ1":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CarouselComponent_ol_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 11);
} if (rf & 2) {
    const key_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-slide-to", key_r4);
} }
function CarouselComponent_ol_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ol_1_li_1_Template, 1, 1, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.currentlyPlaying);
} }
const _c0 = function (a0, a1) { return { "active": a0, "smallPic": a1 }; };
const _c1 = function (a0) { return { "opacity": a0 }; };
function CarouselComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const key_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, key_r6 == 0, !ctx_r1.isSmall));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "watch/movie/" + item_r5["id"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r5.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r1.isSmall ? 1 : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.title);
} }
class CarouselComponent {
    constructor(data) {
        this.data = data;
        this.currentlyPlaying = [];
    }
    ;
    ngOnInit() {
        this.onResize();
        this.getData();
    }
    getData() {
        let url = '/current_play';
        this.data.get(url).subscribe((resp) => {
            this.currentlyPlaying = resp;
        });
    }
    onResize() {
        let width = window.innerWidth;
        this.isSmall = width <= 920 ? true : false;
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], hostBindings: function CarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function CarouselComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 12, vars: 2, consts: [["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], ["class", "carousel-indicators", 4, "ngIf"], [1, "carousel-inner"], ["class", "carousel-item posterItem", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", 4, "ngFor", "ngForOf"], ["data-target", "#carouselExampleIndicators"], [1, "carousel-item", "posterItem", 3, "ngClass"], [3, "href"], ["alt", "...", 1, "d-block", "w-100", 3, "src"], [1, "mediaTitle", 3, "ngStyle"], [1, "titleText"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ol_1_Template, 2, 1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_div_3_Template, 6, 10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSmall);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentlyPlaying);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".carousel[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n\n\n\n\n.carousel-inner[_ngcontent-%COMP%]{\n    cursor: pointer;\n}\n\nimg[_ngcontent-%COMP%]{\n    width: 100%;\n}\n\n.titleText[_ngcontent-%COMP%]{\n        position: absolute;\n        bottom: 30px;\n        left: 60px;\n        font-size: 16px;\n}\n\n.mediaTitle[_ngcontent-%COMP%]{\n    opacity: 0;\n    height: 150px;\n    width: 100%;\n    position: absolute;\n    bottom: 0px;\n    z-index: 999;\n    color: white;\n    background: linear-gradient(0deg, rgba(1,1,1,1) 50%, rgba(255,255,255,0) 75%); \n}\n\n.posterItem[_ngcontent-%COMP%]:hover{\n    transform: scale(1.1);\n\n}\n\n.posterItem[_ngcontent-%COMP%]:hover   .mediaTitle[_ngcontent-%COMP%]{\n    opacity: 1;\n}\n\n.smallPic[_ngcontent-%COMP%]{\n    height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQTs7O0lBR0k7O0FBR0o7Ozs7R0FJRzs7QUFFSDtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7UUFDUSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFVBQVU7UUFDVixlQUFlO0FBQ3ZCOztBQUdBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLDZFQUE2RTtBQUNqRjs7QUFJQTtJQUNJLHFCQUFxQjs7QUFFekI7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImNhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpbWd7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG59ICovXG5cbi5jYXJvdXNlbHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4vKiAuY2Fyb3VzZWwtaW5kaWNhdG9yc3tcbiAgICB0b3A6MzUwcHg7XG4gICAgei1pbmRleDogMTAwMDtcbn0gICovXG5cblxuLyogLnBvc3RlcntcbiAgXG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufSAqL1xuXG4uY2Fyb3VzZWwtaW5uZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udGl0bGVUZXh0e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgbGVmdDogNjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5cbi5tZWRpYVRpdGxle1xuICAgIG9wYWNpdHk6IDA7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxLDEsMSwxKSA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgNzUlKTsgXG59XG5cblxuXG4ucG9zdGVySXRlbTpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG5cbn1cbi5wb3N0ZXJJdGVtOmhvdmVyIC5tZWRpYVRpdGxle1xuICAgIG9wYWNpdHk6IDE7XG59XG5cblxuLnNtYWxsUGlje1xuICAgIGhlaWdodDogNDAwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mylist/mylist.component */ "6DPj");
/* harmony import */ var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/detail/detail.component */ "151J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'mylist', component: _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_2__["MylistComponent"] },
    { path: 'watch/:media_type/:id', component: _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"] },
    { path: '**', redirectTo: '' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map