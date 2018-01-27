/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'weijinsuo\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-add': '&#xe900;',
		'icon-arrow': '&#xe901;',
		'icon-back': '&#xe902;',
		'icon-cancle': '&#xe903;',
		'icon-cart': '&#xe904;',
		'icon-center': '&#xe905;',
		'icon-circle': '&#xe906;',
		'icon-delete': '&#xe907;',
		'icon-detail': '&#xe908;',
		'icon-edit': '&#xe90a;',
		'icon-order': '&#xe90b;',
		'icon-phone': '&#xe90c;',
		'icon-picture': '&#xe90d;',
		'icon-plus': '&#xe90e;',
		'icon-preview': '&#xe90f;',
		'icon-share': '&#xe910;',
		'icon-staroff': '&#xe911;',
		'icon-starton': '&#xe912;',
		'icon-time': '&#xe913;',
		'icon-weixin': '&#xe914;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
