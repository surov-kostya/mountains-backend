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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

if(document.querySelectorAll('.article-names__item') !== null){

    const artItem = document.querySelectorAll('.article-names__item');
    const paperItem = document.querySelectorAll('.papers__item');

    for (let i = 0; i<artItem.length; i++) {
        artItem[i].addEventListener('click', (e)=>{
            e.preventDefault();

            for (let x = 0; x<artItem.length; x++) {
                artItem[x].classList.remove('article-names__item_active');
                paperItem[x].classList.add('visually-hidden');
            };

            e.currentTarget.classList.add('article-names__item_active');
            let attrOfActive = e.currentTarget.getAttribute('data-title');

            for (let y = 0; y<artItem.length; y++) {
                let attrOfPaper = paperItem[y].getAttribute('data-title');
                if(attrOfPaper === attrOfActive){
                    paperItem[y].classList.remove('visually-hidden');
                };
            };
        });
    };

};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

if (document.querySelector('.blog-section__left') !== null){

    const sidebar = document.querySelector('.blog-section__left');
    let startPoint = 0;
    let endPoint = 0;
    let distance = 0;

    document.addEventListener('touchstart', e=>{
        startPoint = e.targetTouches[0].pageX;
    });

    document.addEventListener('touchend', e=>{
        endPoint = e.changedTouches[0].pageX;
        showSidebar();
    });

    document.addEventListener('click', e=>{
        showSidebar();
    });

    function showSidebar () {
        distance = endPoint - startPoint;
        if (distance > 200){
            sidebar.classList.add('blog-section__left_active');
        } else {
            sidebar.classList.remove('blog-section__left_active');
        };
    };

};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const firstParallaxLayers = document.querySelectorAll('.first-parallax__img');

const moveLayers = e =>{
    
    const initialY = (window.pageYOffset);
    let k = 1;

    for(let i=0; i<firstParallaxLayers.length; i++){
        k = i*2;
        
        let finalY = initialY * 4 / k;
        firstParallaxLayers[i].style.transform = `translateY(${finalY}px)`;
    };
};

if (firstParallaxLayers !== null){
    window.addEventListener('scroll', moveLayers);
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

const fsMenu = document.querySelector('.fullscreen-menu');
const hrBtn = document.querySelector('.hamburger__input');

if (hrBtn !== null) {
    hrBtn.addEventListener('click', (e)=>{
        fsMenu.classList.toggle("visually-hidden");
        console.log('NNN');
    });
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 59.953224, lng: 30.314344},
        zoom: 12,
        gestureHandling: 'none',
        // disableDefaulUI: true,
        fullscreenControl: false,
        mapTypeControl: false,
        scaleControl: false,
        rotateControl: false,
        streetViewControl: false,
        styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "landscape",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "color": "#62d9cd"
                },
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "color": "#5cdece"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#61dac9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ]
    });

    var marker = new google.maps.Marker({
        position: {lat: 59.999660, lng: 30.221810},
        map: map,
        title: 'Hello World!',
        icon: 'assets/images/map/map_marker.svg',
        // label: 'Я здесь',
        title: 'Я здесь'
    });
}
window.initMap = initMap;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

const authBtn = document.querySelector('.index-section__auth-btn');
const indexBtn = document.querySelector('.index-panel__btn_index');
const indexCenter = document.querySelector('.index-section__center');
const indexPanel = document.querySelector('.index-panel');




if (document.querySelector('.index-section__auth-btn') !== null){
    
    window.addEventListener('load', ()=>{
        indexCenter.classList.add('flipInX');
    });

    authBtn.addEventListener('click', ()=>{
        authBtn.classList.add('visually-hidden');
        indexCenter.classList.add('flipper');
    });

    indexBtn.addEventListener('click', ()=>{
        authBtn.classList.remove('visually-hidden');
        indexCenter.classList.remove('flipper');
    });
    
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

const indexParallaxLayers = document.querySelectorAll('.index-parallax__img');

const moveLayers = e =>{
    const initialX = (window.innerWidth / 2) - e.pageX;
    const initialY = (window.innerHeight / 2) - e.pageY;
    let k = 1;
    for(let i=indexParallaxLayers.length-1; i>=0; i--){
        // k = i*5; 
        if(i===6){k=10}
        else if(i===5){k=20}
        else if(i===4){k=30}
        else if(i===3){k=40}
        else if(i===2){k=50}
        else if(i===1){k=60}
        else {k=100};
        let finalX = initialX / k;
        let finalY = initialY / k / 5;
        indexParallaxLayers[i].style.transform = `translate(${finalX}px, ${finalY}px)`;
    };
}

if (indexParallaxLayers !== null){
    window.addEventListener('mousemove', moveLayers);
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

if (document.querySelectorAll('.my-benefits__progress_filled') !== null){
    
    const progress = document.querySelectorAll('.my-benefits__progress_filled');
    const emptyRight = document.querySelectorAll('.my-benefits__progress_empty-right');
    const emptyLeft = document.querySelectorAll('.my-benefits__progress_empty-left');

    const screenHeight = window.innerHeight;
    let skillLevel = 0;

    function fillLte50(i){
        progress[i].classList.add('my-benefits__progress_' + skillLevel);
    };

    function fillGt50(i){
        progress[i].classList.add('my-benefits__progress_50');


        progress[i].addEventListener('transitionend', ()=>{
            emptyRight[i].style.borderRightColor = '#00bfa5';
            emptyRight[i].style.borderBottomColor = '#00bfa5';
            emptyRight[i].style.zIndex = '4';
            progress[i].classList.remove('my-benefits__progress_50');
            emptyLeft[i].classList.add('my-benefits__progress_' + (skillLevel - 50));
        });

        
    };
    
    window.addEventListener('load', ()=>{        

        for (let i = 0; i < progress.length; i++){
            skillLevel = progress[i].getAttribute('data-skill');
            if (skillLevel <=50){
                fillLte50(i);
            } else if (skillLevel > 50){
                fillGt50(i);
            };
        };
    });
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

const blur = document.getElementById('works-last-section__blur');
const text = document.getElementById('works-last-section__form');

function positionSearch() { 
    let topIndent = text.offsetTop;
    let leftIndent = text.offsetLeft;
    let height = text.offsetHeight;
    let width = text.offsetWidth;
    blur.style.clip = `rect(${topIndent}px, ${leftIndent + width}px, ${topIndent + height}px, ${leftIndent}px)`;
};

if (text != null) {
    window.onload = positionSearch();
    window.addEventListener('resize', ()=>positionSearch() );
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

if (document.querySelectorAll('.projects__item').length){

    new Vue({
        el:'.projects',
        data:{
            ul: document.querySelectorAll('.projects__item'),
            status: 'school',
            nextItem: 0
        },
        computed:{
            allDataAttr: function (){
                let attrList = []
                for(let i=0; i<this.ul.length; i++){
                    let attr = this.ul[i].getAttribute('data-project')
                    attr= attr.slice(1, -1)
                    attrList.push(attr)                
                }            
                return attrList
            }
        },
        methods:{        
            nextBtnClick(){
                this.nextItem +=1
                if(this.nextItem === this.ul.length){ 
                    this.nextItem = 0               
                }
                this.status = this.allDataAttr[this.nextItem]
            },
            prevBtnClick(){
                this.nextItem -=1
                if(this.nextItem < 0){ 
                    this.nextItem = this.ul.length - 1   
                }
                this.status = this.allDataAttr[this.nextItem]
            }
        }
    });

}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

if (document.querySelector('.message__btn') !== null) {
  const msgBtn = document.querySelector('.message__btn');
  msgBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    window.history.go(-1);
  });
}


/***/ })
/******/ ]);