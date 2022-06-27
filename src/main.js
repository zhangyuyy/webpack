import './banner.js';
import './tabs.js';
//引入jquery
import $ from 'jquery';
$('#swiper').css('background-color', 'red');
//引入index.css
import '../src/styles/index.css';
//引入index.less
import '../src/styles/index.less';
//插入图片
import imgUrl from './assets/1.gif';

let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

import imgUrl1 from '../src/assets/logo_small.png';
let img1 = document.createElement('img');
img1.src = imgUrl1;
document.body.appendChild(img1);

import './assets/fonts/iconfont.css';
//引入vue
import '../src/app.vue';
