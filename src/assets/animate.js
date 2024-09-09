// /*Tab Highlighter Functionality*/
// $(document).on("click", ".nav .item", function () {
//   var $this = $(this);
//   TabHighlighter.set($this);
//   $this.closest("button").siblings(".active").removeClass("active");
//   $this.closest("button").addClass("active");
// });
// var TabHighlighter = {
//   set: function ($this) {
//     $(".tab-highlighter").css({
//       left: $this.closest("button").offset().left,
//       width: $this.closest("button").outerWidth(),
//     });
//   },
//   refresh: function () {
//     var $this = $(".nav .item");
//     $(".tab-highlighter").css({
//       left: $this.closest("button").offset().left,
//       width: $this.closest("button").outerWidth(),
//     });
//   },
// };
// $(window).resize(function () {
//   TabHighlighter.refresh();
// });
// $(document).ready(function () {
//   TabHighlighter.refresh();
// });
