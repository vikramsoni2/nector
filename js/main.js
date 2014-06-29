( function(){
  function addLink() {
  var body_element = document.getElementsByTagName('body')[0];
  var selection;
  selection = window.getSelection();
  var pagelink = "<br /><br /> Read more at: <a href='"+document.location.href+"'>"+document.location.href+"</a><br />Copyright &copy; Nector International";
  var copytext = selection + pagelink;
  var newdiv = document.createElement('div');
  newdiv.style.position='absolute';
  newdiv.style.left='-99999px';
  body_element.appendChild(newdiv);
  newdiv.innerHTML = copytext;
  selection.selectAllChildren(newdiv);
  window.setTimeout(function() {
    body_element.removeChild(newdiv);
  },0);
}
document.oncopy = addLink;
})();

$(document).scroll(function () {
    var y = $(document).scrollTop(),
        header = $(".menu");
        page = $(".page");
        logo = $(".logo");

    if (y >= 350) {
        header.addClass('fixedmenu');
        page.addClass('addmargin');
        logo.addClass('slidelogo');
    } else {
        header.removeClass('fixedmenu');
        page.removeClass('addmargin');
        logo.removeClass('slidelogo');
    }
});
