// import {isBoss} from './healthbar.js'

// var that = {};
// function Countdown(elem, seconds, lvl) {


//   that.elem = elem;
//   that.seconds = seconds;
//   that.lvl = lvl;
//   that.totalTime = seconds * 100;
//   that.usedTime = 0;
//   that.startTime = +new Date();
//   that.timer = null;

//   that.count = function() {
//     that.usedTime = Math.floor((+new Date() - that.startTime) / 10);

//     var tt = that.totalTime - that.usedTime;
//     if (tt <= 0) {
//       isBoss = 0.1
//     } else {
//       var mi = Math.floor(tt / (60 * 100));
//       var ss = Math.floor((tt - mi * 30 * 100) / 100);
//       var ms = tt - Math.floor(tt / 100) * 100;
//       that.elem.innerHTML = + that.fillZero(ss) + "." + that.fillZero(ms);
//     }
//   };

//   that.init = function() {
//     if(that.timer){
//       that.elem.innerHTML = '30.00';
//       that.totalTime = seconds * 100;
//       that.usedTime = 0;
//       that.startTime = +new Date();
//       that.timer = null;
//     }
//   };

//   that.start = function() {
//     if(!that.timer){
//        that.timer = setInterval(that.count, 10);
//     }
//   };

//   that.stop = function() {
//      clearInterval(that.timer);
//   };

//   that.fillZero = function(num) {
//     return num < 10 ? '0' + num : num;
//   };

//   return that;
// }

// var span = document.getElementById('time');
// var countdown = new Countdown(span, 30);

// function startC(){
//   countdown.start();
// }
// function stopC(){
//   countdown.stop();
// }

// export { Countdown, that, isBoss }
