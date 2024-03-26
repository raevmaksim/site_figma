document.addEventListener('DOMContentLoaded', function() {
  var sidenav = document.querySelectorAll('.sidenav');
  var instances_sidenav = M.Sidenav.init(sidenav);

  var modal = document.querySelectorAll('.modal');
  var instances_modal = M.Modal.init(modal);

  var gallery = document.querySelectorAll('.materialboxed');
  var instances_gallery = M.Materialbox.init(gallery);
});
// document.addEventListener('DOMContentLoaded', function() {
//   var modal = document.querySelectorAll('.modal');
//   var instances_modal = M.Modal.init(modal);
// });