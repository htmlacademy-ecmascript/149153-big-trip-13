/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_information__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/information */ "./src/view/information.js");
/* harmony import */ var _view_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/menu */ "./src/view/menu.js");
/* harmony import */ var _view_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/filter */ "./src/view/filter.js");
/* harmony import */ var _mock_tripPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock/tripPoint */ "./src/mock/tripPoint.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _presenter_trip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presenter/trip */ "./src/presenter/trip.js");







const points = new Array(_utils__WEBPACK_IMPORTED_MODULE_4__["POINT_COUNT"]).fill().map(_mock_tripPoint__WEBPACK_IMPORTED_MODULE_3__["generateTripPoint"]);

const mainElement = document.querySelector(`.page-main`);
const tripEventsElement = mainElement.querySelector(`.trip-events`);

/** Рендерим Маршрут и стоимость */
const headerElement = document.querySelector(`.page-header`);
const tripMainElement = headerElement.querySelector(`.trip-main`);

/** Рендерим Меню */
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);

Object(_utils__WEBPACK_IMPORTED_MODULE_4__["render"])(tripControlsElement.firstElementChild, new _view_menu__WEBPACK_IMPORTED_MODULE_1__["default"]().getElement(), _utils__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].AFTERBEGIN);

/** Рендерим Фильтры */
Object(_utils__WEBPACK_IMPORTED_MODULE_4__["render"])(tripControlsElement.lastElementChild, new _view_filter__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _utils__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].AFTERBEGIN);

/** Рендерим Контент */
const tripPresenter = new _presenter_trip__WEBPACK_IMPORTED_MODULE_5__["default"](tripEventsElement);

/** Рендерим Форму создания */
// const tripEventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

// renderElement(tripEventsListElement, createAddForm(points[0]), `afterbegin`);

if (points.length) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_4__["render"])(tripMainElement, new _view_information__WEBPACK_IMPORTED_MODULE_0__["default"]().getElement(), _utils__WEBPACK_IMPORTED_MODULE_4__["RenderPosition"].AFTEREND);
}

tripPresenter.init(points);


/***/ }),

/***/ "./src/mock/tripPoint.js":
/*!*******************************!*\
  !*** ./src/mock/tripPoint.js ***!
  \*******************************/
/*! exports provided: generateTripPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTripPoint", function() { return generateTripPoint; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


const TYPE_TRIP_POINTS = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeng`, `restaurant`];
const CITY_NAMES = [`Moscow`, `Ufa`, `Tomsk`, `Paris`, `New York`, `London`, `Salavat`];
const MOCK_TEXT_DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. 
Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc
ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus
sit amet tempus.`;
const MAX_TEXT_SIZE = 5;
const MAX_DAY_GAP = 7;
const MIN_PRICE = 1000;
const MAX_PRICE = 10000;
const MIN_PRICE_OFFER = 10;
const MAX_PRICE_OFFER = 100;
const TITLE_TEXT = [`Add luggage`, `Switch to comfort class`, `Add meal`, `Choose seats`, `Travel by train`];
const MAX_OFFERS_COUNT = 5;

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const getRandomValue = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateText = () => {
  const splitText = MOCK_TEXT_DESCRIPTION.split(`.`);
  const randomLength = Math.ceil(Math.random() * MAX_TEXT_SIZE);
  let text = ``;

  for (let i = 0; i < randomLength; i++) {
    text += splitText[i];
  }

  return text;
};

const getRandomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

const generateDate = () => {
  const dayGap = getRandomInteger(-MAX_DAY_GAP, MAX_DAY_GAP);

  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(dayGap, `day`).toDate();
};

const generateOffer = () => {
  const randomSizeOffer = getRandomInteger(1, MAX_OFFERS_COUNT);
  let offers = [];

  for (let i = 0; i < randomSizeOffer; i++) {
    offers.push({
      price: getRandomInteger(MIN_PRICE_OFFER, MAX_PRICE_OFFER),
      title: TITLE_TEXT[i]
    });
  }

  return offers;
};

const generateTripPoint = () => {
  return {
    id: generateId(),
    type: getRandomValue(TYPE_TRIP_POINTS),
    city: getRandomValue(CITY_NAMES),
    beginDate: generateDate(),
    endDate: generateDate(),
    isFavorite: false,
    price: getRandomInteger(MIN_PRICE, MAX_PRICE),
    offers: generateOffer(),
    destination: {
      description: generateText(),
      foto: `http://picsum.photos/248/152?r=${Math.floor(Math.random() * 10)}`
    }
  };
};


/***/ }),

/***/ "./src/presenter/point.js":
/*!********************************!*\
  !*** ./src/presenter/point.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
/* harmony import */ var _view_editForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/editForm */ "./src/view/editForm.js");
/* harmony import */ var _view_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/point */ "./src/view/point.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");




const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`
};

class Point {
  constructor(pointContainer, changeData, changeMode) {
    this._pointContainer = pointContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._pointComponent = null;
    this._editComponent = null;
    this._mode = Mode.DEFAULT;

    this._handelEditClick = this._handelEditClick.bind(this);
    this._handelFormClick = this._handelFormClick.bind(this);
    this._handelFormSubmit = this._handelFormSubmit.bind(this);
    this._escapeKeyDownHandler = this._escapeKeyDownHandler.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
  }

  init(point) {
    this._point = point;

    const prevPointComponent = this._pointComponent;
    const prevEditComponent = this._editComponent;

    this._pointComponent = new _view_point__WEBPACK_IMPORTED_MODULE_1__["default"](point);
    this._editComponent = new _view_editForm__WEBPACK_IMPORTED_MODULE_0__["default"](point);

    this._pointComponent.setClickHandler(this._handelEditClick);
    this._pointComponent.setFavoriteClickHandler(this._handleFavoriteClick);
    this._editComponent.setClickHandler(this._handelFormClick);
    this._editComponent.setSumbitHandler(this._handelFormSubmit);

    if (prevPointComponent === null || prevEditComponent === null) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["render"])(this._pointContainer, this._pointComponent, _utils__WEBPACK_IMPORTED_MODULE_2__["RenderPosition"].BEFOREND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._pointComponent, prevPointComponent);
    }

    if (this._mode === Mode.EDITING) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._editComponent, prevEditComponent);
    }

    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevPointComponent);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevEditComponent);

  }

  destroy() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._pointComponent);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._editComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToPoint();
    }
  }

  _replacePointToForm() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._editComponent, this._pointComponent);
    document.addEventListener(`keydown`, this._escapeKeyDownHandler);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  _replaceFormToPoint() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._pointComponent, this._editComponent);
    document.removeEventListener(`keydown`, this._escapeKeyDownHandler);
    this._mode = Mode.DEFAULT;
  }

  _escapeKeyDownHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._editComponent.reset(this._point);
      this._replaceFormToPoint();
    }
  }

  _handelEditClick() {
    this._replacePointToForm();
  }

  _handelFormClick() {
    this._replaceFormToPoint();
  }

  _handelFormSubmit(point) {
    this._changeData(point);
    this._replaceFormToPoint();
  }

  _handleFavoriteClick() {
    this._changeData(Object.assign({}, this._point, {isFavorite: !this._point.isFavorite}));
  }
}


/***/ }),

/***/ "./src/presenter/trip.js":
/*!*******************************!*\
  !*** ./src/presenter/trip.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trip; });
/* harmony import */ var _view_noPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/noPoints */ "./src/view/noPoints.js");
/* harmony import */ var _view_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/content */ "./src/view/content.js");
/* harmony import */ var _view_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/sort */ "./src/view/sort.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _presenter_point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../presenter/point */ "./src/presenter/point.js");







class Trip {
  constructor(routeContainer) {
    this._routeContainer = routeContainer;
    this._pointPresenter = {};
    this._currentSortType = _utils__WEBPACK_IMPORTED_MODULE_3__["SortType"].DAY;

    this._noPointsComponent = new _view_noPoints__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._contentComponent = new _view_content__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._pointSortComponent = new _view_sort__WEBPACK_IMPORTED_MODULE_2__["default"]();

    this._handlePointChange = this._handlePointChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handlerSortTypeChange = this._handlerSortTypeChange.bind(this);
  }
  init(points) {
    this._routePoints = points;
    this._sourcePoints = points;

    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["render"])(this._routeContainer, this._contentComponent, _utils__WEBPACK_IMPORTED_MODULE_3__["RenderPosition"].BEFOREND);
    if (points.length) {
      this._renderRoute();
    } else {
      this._renderNoPoints();
    }
  }
  _renderSort() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["render"])(this._routeContainer.firstElementChild, this._pointSortComponent, _utils__WEBPACK_IMPORTED_MODULE_3__["RenderPosition"].AFTERBEGIN);
    this._pointSortComponent.setSortTypeChangeHandler(this._handlerSortTypeChange);
  }
  _renderPoint(point) {
    const pointPresenter = new _presenter_point__WEBPACK_IMPORTED_MODULE_4__["default"](this._contentComponent, this._handlePointChange, this._handleModeChange);
    pointPresenter.init(point);
    this._pointPresenter[point.id] = pointPresenter;
  }
  _renderNoPoints() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["render"])(this._routeContainer, this._contentComponent, _utils__WEBPACK_IMPORTED_MODULE_3__["RenderPosition"].BEFOREND);
  }
  _renderRoute() {
    this._renderSort();
    for (let i = 0; i < _utils__WEBPACK_IMPORTED_MODULE_3__["POINT_COUNT"]; i++) {
      this._renderPoint(this._routePoints[i]);
    }
  }
  _clearPointList() {
    Object.values(this._pointPresenter).forEach((presenter) => presenter.destroy());
    this._pointPresenter = {};
  }

  _handlePointChange(updatedPoint) {
    this._routePoints = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["updateItem"])(this._routePoints, updatedPoint);
    this._pointPresenter[updatedPoint.id].init(updatedPoint);
  }

  _handleModeChange() {
    Object
      .values(this._pointPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _sortPoints(sortType) {
    switch (sortType) {
      case _utils__WEBPACK_IMPORTED_MODULE_3__["SortType"].TIME:
        this._routePoints.sort();
        break;
      case _utils__WEBPACK_IMPORTED_MODULE_3__["SortType"].PRICE:
        this._routePoints.sort(_utils__WEBPACK_IMPORTED_MODULE_3__["sortPrice"]);
        break;
      case _utils__WEBPACK_IMPORTED_MODULE_3__["SortType"].DAY:
        this._routePoints.sort(_utils__WEBPACK_IMPORTED_MODULE_3__["sortDate"]);
        break;
      default:
        this._routePoints = this._sourcePoints;
    }
    this._currentSortType = sortType;
  }

  _handlerSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortPoints(sortType);
    this._clearPointList();
    this._renderRoute();
  }
}


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: RenderPosition, renderTemplate, render, createElement, POINT_COUNT, replace, remove, updateItem, SortType, sortDate, sortPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINT_COUNT", function() { return POINT_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDate", function() { return sortDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortPrice", function() { return sortPrice; });
/* harmony import */ var _view_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/abstract */ "./src/view/abstract.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);



const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  AFTEREND: `afterend`,
  BEFOREND: `beforend`

};

const renderTemplate = (container, markup, place) => {
  container.insertAdjacentHTML(place, markup);
};

const render = (container, element, place) => {
  if (container instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }
  if (element instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    element = element.getElement();
  }
  switch (place) {
    case RenderPosition.AFTEREND:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREND:
      container.append(element);
      break;
    case RenderPosition.AFTERBEGIN:
      container.after(element);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstElementChild;
};

const POINT_COUNT = 20;

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};

const remove = (component) => {
  if (!(component instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }
  component.getElement().remove();
  component.removeElement();
};

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }
  return [...items.slice(0, index), update, ...items.slice(index + 1)];
};

const SortType = {
  DAY: `day`,
  TIME: `time`,
  PRICE: `price`
};

const sortDate = (pointA, pointB) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(pointB.beginDate).diff(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(pointA.beginDate));
};

const sortPrice = (a, b) =>{
  if (a.price < b.price) {
    return -1;
  } else if (a.price > b.price) {
    return 1;
  } else {
    return 0;
  }

};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/content.js":
/*!*****************************!*\
  !*** ./src/view/content.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentContainer; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createContentContainer = () => {
  return `<ul class="trip-events__list"></ul>`;
};

class ContentContainer extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return createContentContainer();
  }

}


/***/ }),

/***/ "./src/view/editForm.js":
/*!******************************!*\
  !*** ./src/view/editForm.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _smart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart */ "./src/view/smart.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);



const createEditFormElement = (point) => {
  const {price, type, city, beginDate, endDate, destination: {description}} = point;

  const startTimeFull = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(beginDate).format(`YYYY-MM-DD HH:mm`);
  const endTimeFull = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(endDate).format(`YYYY-MM-DD HH:mm`);

  return `  <li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            <div class="event__type-item">
              <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
              <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
              <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
              <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport">
              <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
              <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
              <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
              <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
              <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
              <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
            </div>
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${city}" list="destination-list-1">
        <datalist id="destination-list-1">
          <option value="Amsterdam"></option>
          <option value="Geneva"></option>
          <option value="Chamonix"></option>
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startTimeFull}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endTimeFull}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
            <label class="event__offer-label" for="event-offer-luggage-1">
              <span class="event__offer-title">Add luggage</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">50</span>
            </label>
          </div>

          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>
            <label class="event__offer-label" for="event-offer-comfort-1">
              <span class="event__offer-title">Switch to comfort</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">80</span>
            </label>
          </div>

          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">
            <label class="event__offer-label" for="event-offer-meal-1">
              <span class="event__offer-title">Add meal</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">15</span>
            </label>
          </div>

          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">
            <label class="event__offer-label" for="event-offer-seats-1">
              <span class="event__offer-title">Choose seats</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">5</span>
            </label>
          </div>

          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">
            <label class="event__offer-label" for="event-offer-train-1">
              <span class="event__offer-title">Travel by train</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">40</span>
            </label>
          </div>
        </div>
      </section>

      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${description}</p>
      </section>
    </section>
  </form>
</li>
`;
};

class Edit extends _smart__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(point) {
    super();
    this._point = point;
    this._data = Edit.parsePointToData(point);
    this._clickHandler = this._clickHandler.bind(this);
    this._destinationInputHandler = this._destinationInputHandler.bind(this);
    this._typeChangeHandler = this._typeChangeHandler.bind(this);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  _submitHandler(evt) {
    evt.preventDefault();
    this._callback.submit(Edit.parseDataToPoint(this._data));
  }

  getTemplate() {
    return createEditFormElement(this._point);
  }

  updateElement() {
    let prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.getElement();
    parent.replaceChild(newElement, prevElement);
  }

  updateData(update, justDataUpdating) {
    if (!update) {
      return;
    }

    this._data = Object.assign({}, this._data, update);

    if (justDataUpdating) {
      return;
    }

    this.updateElement();
  }

  static parsePointToData(point) {
    return Object.assign({}, point);
  }

  static parseDataToPoint(data) {
    data = Object.assign({}, data);
    return data;
  }

  _destinationInputHandler(evt) {
    evt.preventDefault();
    this.updateData({description: evt.target.value}, true);
  }

  _typeChangeHandler(evt) {
    evt.preventDefault();
    this.updateData({
      type: evt.target.value
    });
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._clickHandler);
  }

  setSumbitHandler(callback) {
    this._callback.submit = callback;
    this.getElement().querySelector(`.event--edit`).addEventListener(`submit`, this._submitHandler);
  }

  setTypeHandler(callback) {
    this._callback.changeType = callback;
    this.getElement().querySelector(`.event__type-input`).addEventListener(`change`, this._submitHandler);
  }

  reset(point) {
    this.updateData(Edit.parsePointToData(point));
  }
}


/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createFiltersElement = () => {
  return `<form class="trip-filters" action="#" method="get">
  <div class="trip-filters__filter">
    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
    <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
  </div>

  <div class="trip-filters__filter">
    <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
    <label class="trip-filters__filter-label" for="filter-future">Future</label>
  </div>

  <div class="trip-filters__filter">
    <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
    <label class="trip-filters__filter-label" for="filter-past">Past</label>
  </div>

  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;
};


class Filters extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return createFiltersElement();
  }

}



/***/ }),

/***/ "./src/view/information.js":
/*!*********************************!*\
  !*** ./src/view/information.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RouteInformation; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createRouteInformationTemplate = () => {
  return `<section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>
    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
  </div>
  <p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
  </p>
</section>`;
};

class RouteInformation extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return createRouteInformationTemplate();
  }

}


/***/ }),

/***/ "./src/view/menu.js":
/*!**************************!*\
  !*** ./src/view/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createMenuElement = () => {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn" href="#">Table</a>
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Stats</a>
  </nav>`;
};

class Menu extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return createMenuElement();
  }

}


/***/ }),

/***/ "./src/view/noPoints.js":
/*!******************************!*\
  !*** ./src/view/noPoints.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoPoints; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createNoPointsElement = () =>{
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

class NoPoints extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return createNoPointsElement();
  }

}


/***/ }),

/***/ "./src/view/point.js":
/*!***************************!*\
  !*** ./src/view/point.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");



const createOffersElement = ({title, price}) =>{
  return `<li class="event__offer">
  <span class="event__offer-title">${title}</span>
  &plus;&euro;&nbsp;
  <span class="event__offer-price">${price}</span>
  </li>`;
};

const createPointElement = (point) => {
  const {beginDate, endDate, type, city, price, offers, isFavorite} = point;
  const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(beginDate).format(`MMM DD`);
  const fullDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(beginDate).format(`YYYY-MM-DD`);
  const startTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(beginDate).format(`HH:mm`);
  const endTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endDate).format(`HH:mm`);
  const startTimeFull = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(beginDate).format(`YYYY-MM-DDTHH:mm`);
  const endTimeFull = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endDate).format(`YYYY-MM-DDTHH:mm`);
  const durationTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startTimeFull).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endTimeFull), `minute`);

  const favoriteClassName = isFavorite ? `event__favorite-btn--active` : ``;

  let offersList = ``;

  for (let i = 0; i < offers.length; i++) {
    offersList += createOffersElement(offers[i]);
  }

  return ` <li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="${fullDate}">${date}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${type} ${city}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${startTimeFull}">${startTime}</time>
        &mdash;
        <time class="event__end-time" datetime="${endTimeFull}">${endTime}</time>
      </p>
      <p class="event__duration">${durationTime}M</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${price}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${offersList}
    </ul>
    <button class="event__favorite-btn ${favoriteClassName}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>
`;
};

class Point extends _abstract__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(point) {
    super();
    this._point = point;
    this._clickHandler = this._clickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createPointElement(this._point);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._clickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.event__favorite-btn`).addEventListener(`click`, this._favoriteClickHandler);
  }

}


/***/ }),

/***/ "./src/view/smart.js":
/*!***************************!*\
  !*** ./src/view/smart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Smart; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


class Smart extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._data = {};
  }

  updateData(update, justDataUpdating) {
    if (!update) {
      return;
    }

    this._data = Object.assign({}, this._data, update);

    if (justDataUpdating) {
      return;
    }

    this.updateElement();
  }

  updateElement() {
    let prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.getElement();
    parent.replaceChild(newElement, prevElement);
  }

  /* restoreHandlers() {
    throw new Error(`Abstract method not implemented: resetHandlers`);
  }*/
}


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortForm; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");



const createSortFormElement = () => {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  <div class="trip-sort__item  trip-sort__item--day">
    <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" data-sort-type="${_utils__WEBPACK_IMPORTED_MODULE_1__["SortType"].DAY}">
    <label class="trip-sort__btn" for="sort-day">Day</label>
  </div>

  <div class="trip-sort__item  trip-sort__item--event">
    <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
    <label class="trip-sort__btn" for="sort-event">Event</label>
  </div>

  <div class="trip-sort__item  trip-sort__item--time">
    <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" data-sort-type="${_utils__WEBPACK_IMPORTED_MODULE_1__["SortType"].TIME}">
    <label class="trip-sort__btn" for="sort-time">Time</label>
  </div>

  <div class="trip-sort__item  trip-sort__item--price">
    <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" data-sort-type="${_utils__WEBPACK_IMPORTED_MODULE_1__["SortType"].PRICE}">
    <label class="trip-sort__btn" for="sort-price">Price</label>
  </div>

  <div class="trip-sort__item  trip-sort__item--offer">
    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
    <label class="trip-sort__btn" for="sort-offer">Offers</label>
  </div>
</form>`;
};

class SortForm extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortFormElement();
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== `INPUT`) {
      return;
    }
    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map