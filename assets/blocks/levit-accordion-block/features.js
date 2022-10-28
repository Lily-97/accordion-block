/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************************!*\
  !*** ./resources/levit-accordion-block/features.js ***!
  \*****************************************************/
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.levit-accordion-item-heading').forEach(function (elem) {
    elem.addEventListener('click', function (e) {
      let $this = e.target;
      if ($this.classList.contains('active')) {
        $this.classList.remove('active');
        $this.classList.add('inactive');
      } else {
        document.querySelectorAll('.levit-accordion-item-heading.active').forEach(function (el) {
          el.classList.remove('active');
          el.classList.add('inactive');
        });
        $this.classList.remove('inactive');
        $this.classList.add('active');
      }
    });
  });
});
/******/ })()
;
//# sourceMappingURL=features.js.map