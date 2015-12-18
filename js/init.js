// Load fonts
WebFontConfig = {
  google: { families: [ 'Fira+Sans:300,400,500:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})(); 

// Google translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: '',
      includedLanguages: 'ar,es,en,fr,id,pt,ru,zh-CN,de,uk,ro,tr,it,hi,km',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false
    },
    'googleTranslate');
}
var Slick = window.Slick || {};
$.fn.slick = function() {
  var _ = this,
    opt = arguments[0],
    args = Array.prototype.slice.call(arguments, 1),
    l = _.length,
    i = 0,
    ret;
  for (i; i < l; i++) {
    if (typeof opt == 'object' || typeof opt == 'undefined')
      _[i].slick = new Slick(_[i], opt);
    else
      ret = _[i].slick[opt].apply(_[i].slick, args);
    if (typeof ret != 'undefined') return ret;
  }
  return _;
};