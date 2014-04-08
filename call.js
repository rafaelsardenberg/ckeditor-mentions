$(document).on('ready page:load ', function() {
  CKEDITOR.replace('editor1');
  return $('#editor1').mentions();
});
