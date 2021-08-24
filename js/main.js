'use strict';

{
  const btn = document.getElementById('btn');
  const n = Math.random();

  btn.addEventListener('click', () => {
    if (n < 0.15) {
      btn.textContent = '大吉'; // 10%
    } else if (n < 0.4) {
      btn.textContent = '中吉'; // 30%
    } else if (n < 0.65) {
      btn.textContent = '小吉'; // 60%
    } else if (n < 0.9) {
      btn.textContent = '末吉'; // 90%
    } else if (n < 0.97) {
      btn.textContent = '凶'; // 98%
    } else {
      btn.textContent = '大凶'; // 100%
    }
  });
}