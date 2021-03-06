/*!
 * Villa Framework v2.8.7 (http://getvilla.org/)
 * Copyright 2013-2015 Noibe Developers
 * Licensed under MIT (https://github.com/noibe/villa/blob/master/LICENSE)
 */

/*!
 * Villa DSS.JS v1.0.0 (http://getvilla.org/)
 * Copyright 2013-2015 Noibe Developers
 * Licensed under MIT (https://github.com/noibe/villa/blob/master/LICENSE)
 */
var runPropertyModel=function(e){if(e instanceof Array){var r={};return r.name=e[0],"string"==typeof e[1]?(r.value=e[1],e[2]&&(r.important=!0)):"string"==typeof e[2]&&(r.important=!0,r.value=e[2]),r}return e},runPropertiesModel=function(e){for(var r=[],t=e.length;t--;)r.push(runPropertyModel(e[t]));return r},runRuleModel=function(e){var r={};return e instanceof Array?(r.selector=e[0],r.properties=runPropertiesModel(e[1])):(r.selector=e.selector,r.properties=runPropertiesModel(e.properties)),r},runScopeModel=function(e){if(e instanceof Array)return runRuleModel(e);if(!e.type||!e.rules)return runRuleModel(e);var r=[];if(e.rules instanceof Array){for(var t=e.rules.length;t--;)r.push(runRuleModel(e.rules[t]));return{type:e.type,features:e.features,rules:r}}},runStyleSheetModel=function(e){var r=[];if(e instanceof Array)if("string"!=typeof e[0])for(var t=e.length;t--;)r.push(runScopeModel(e[t]));else r.push(runRuleModel(e));else e.selector&&r.push(e);return r.length?r:!1},debugStyleSheet=function(e){return runStyleSheetModel(e)},buildPropertyString=function(e){var r=e.name;return r+=": "+e.value,r+=e.important?" !important;":";"},buildRuleString=function(e){for(var r=e.properties,t=e.selector,n="",u=r.length;u--;)n+=buildPropertyString(r[u]);return{selector:t,rules:n}},buildScopeString=function(e){for(var r="@"+e.type+" "+e.features+" { ",t=e.rules.length;t--;){var n=buildRuleString(e.rules[t]);r+=n.selector+" { "+n.rules+" } "}return r+" }"},buildStyleString=function(e){for(var r=[],t=e.length;t--;)r.push(e[t].type||e[t].rules?buildScopeString(e[t]):buildRuleString(e[t]));return r},addRule=function(e){var r,t=document.createElement("style"),n=document.head||document.getElementsByTagName("head")[0];n.appendChild(t),r=t.sheet||document.styleSheets[0];for(var u=e.length;u--;)"insertRule"in r?"string"==typeof e[u]?r.insertRule(e[u],0):r.insertRule(e[u].selector+" { "+e[u].rules+" } ",0):"addRule"in r&&r.addRule(e[u].selector,e[u].rules)},addStyle=function(e,r){r&&(e=debugStyleSheet(e)),addRule(buildStyleString(e))};

var colors;
colors = [["red", "#f44336"], ["red-50", "#ffebee"], ["red-100", "#ffcdd2"], ["red-200", "#ef9a9a"], ["red-300", "#e57373"], ["red-400", "#ef5350"], ["red-500", "#f44336"], ["red-600", "#e53935"], ["red-700", "#d32f2f"], ["red-800", "#c62828"], ["red-900", "#b71c1c"], ["red-a100", "#ff8a80"], ["red-a200", "#ff5252"], ["red-a400", "#ff1744"], ["red-a700", "#d50000"], ["pink", "#e91e63"], ["pink-50", "#fce4ec"], ["pink-100", "#f8bbd0"], ["pink-200", "#f48fb1"], ["pink-300", "#f06292"], ["pink-400", "#ec407a"], ["pink-500", "#e91e63"], ["pink-600", "#d81b60"], ["pink-700", "#c2185b"], ["pink-800", "#ad1457"], ["pink-900", "#880e4f"], ["pink-a100", "#ff80ab"], ["pink-a200", "#ff4081"], ["pink-a400", "#f50057"], ["pink-a700", "#c51162"], ["purple", "#9c27b0"], ["purple-50", "#f3e5f5"], ["purple-100", "#e1bee7"], ["purple-200", "#ce93d8"], ["purple-300", "#ba68c8"], ["purple-400", "#ab47bc"], ["purple-500", "#9c27b0"], ["purple-600", "#8e24aa"], ["purple-700", "#7b1fa2"], ["purple-800", "#6a1b9a"], ["purple-900", "#4a148c"], ["purple-a100", "#ea80fc"], ["purple-a200", "#e040fb"], ["purple-a400", "#d500f9"], ["purple-a700", "#aa00ff"], ["deep-purple", "#673ab7"], ["deep-purple-50", "#ede7f6"], ["deep-purple-100", "#d1c4e9"], ["deep-purple-200", "#b39ddb"], ["deep-purple-300", "#9575cd"], ["deep-purple-400", "#7e57c2"], ["deep-purple-500", "#673ab7"], ["deep-purple-600", "#5e35b1"], ["deep-purple-700", "#512da8"], ["deep-purple-800", "#4527a0"], ["deep-purple-900", "#311b92"], ["deep-purple-a100", "#b388ff"], ["deep-purple-a200", "#7c4dff"], ["deep-purple-a400", "#651fff"], ["deep-purple-a700", "#6200ea"], ["indigo", "#3f51b5"], ["indigo-50", "#e8eaf6"], ["indigo-100", "#c5cae9"], ["indigo-200", "#9fa8da"], ["indigo-300", "#7986cb"], ["indigo-400", "#5c6bc0"], ["indigo-500", "#3f51b5"], ["indigo-600", "#3949ab"], ["indigo-700", "#303f9f"], ["indigo-800", "#283593"], ["indigo-900", "#1a237e"], ["indigo-a100", "#8c9eff"], ["indigo-a200", "#536dfe"], ["indigo-a400", "#3d5afe"], ["indigo-a700", "#304ffe"], ["blue", "#2196f3"], ["blue-50", "#e3f2fd"], ["blue-100", "#bbdefb"], ["blue-200", "#90caf9"], ["blue-300", "#64b5f6"], ["blue-400", "#42a5f5"], ["blue-500", "#2196f3"], ["blue-600", "#1e88e5"], ["blue-700", "#1976d2"], ["blue-800", "#1565c0"], ["blue-900", "#0d47a1"], ["blue-a100", "#82b1ff"], ["blue-a200", "#448aff"], ["blue-a400", "#2979ff"], ["blue-a700", "#2962ff"], ["light-blue", "#03a9f4"], ["light-blue-50", "#e1f5fe"], ["light-blue-100", "#b3e5fc"], ["light-blue-200", "#81d4fa"], ["light-blue-300", "#4fc3f7"], ["light-blue-400", "#29b6f6"], ["light-blue-500", "#03a9f4"], ["light-blue-600", "#039be5"], ["light-blue-700", "#0288d1"], ["light-blue-800", "#0277bd"], ["light-blue-900", "#01579b"], ["light-blue-a100", "#80d8ff"], ["light-blue-a200", "#40c4ff"], ["light-blue-a400", "#00b0ff"], ["light-blue-a700", "#0091ea"], ["cyan", "#00bcd4"], ["cyan-50", "#e0f7fa"], ["cyan-100", "#b2ebf2"], ["cyan-200", "#80deea"], ["cyan-300", "#4dd0e1"], ["cyan-400", "#26c6da"], ["cyan-500", "#00bcd4"], ["cyan-600", "#00acc1"], ["cyan-700", "#0097a7"], ["cyan-800", "#00838f"], ["cyan-900", "#006064"], ["cyan-a100", "#84ffff"], ["cyan-a200", "#18ffff"], ["cyan-a400", "#00e5ff"], ["cyan-a700", "#00b8d4"], ["teal", "#009688"], ["teal-50", "#e0f2f1"], ["teal-100", "#b2dfdb"], ["teal-200", "#80cbc4"], ["teal-300", "#4db6ac"], ["teal-400", "#26a69a"], ["teal-500", "#009688"], ["teal-600", "#00897b"], ["teal-700", "#00796b"], ["teal-800", "#00695c"], ["teal-900", "#004d40"], ["teal-a100", "#a7ffeb"], ["teal-a200", "#64ffda"], ["teal-a400", "#1de9b6"], ["teal-a700", "#00bfa5"], ["green", "#4caf50"], ["green-50", "#e8f5e9"], ["green-100", "#c8e6c9"], ["green-200", "#a5d6a7"], ["green-300", "#81c784"], ["green-400", "#66bb6a"], ["green-500", "#4caf50"], ["green-600", "#43a047"], ["green-700", "#388e3c"], ["green-800", "#2e7d32"], ["green-900", "#1b5e20"], ["green-a100", "#b9f6ca"], ["green-a200", "#69f0ae"], ["green-a400", "#00e676"], ["green-a700", "#00c853"], ["light-green", "#8bc34a"], ["light-green-50", "#f1f8e9"], ["light-green-100", "#dcedc8"], ["light-green-200", "#c5e1a5"], ["light-green-300", "#aed581"], ["light-green-400", "#9ccc65"], ["light-green-500", "#8bc34a"], ["light-green-600", "#7cb342"], ["light-green-700", "#689f38"], ["light-green-800", "#558b2f"], ["light-green-900", "#33691e"], ["light-green-a100", "#ccff90"], ["light-green-a200", "#b2ff59"], ["light-green-a400", "#76ff03"], ["light-green-a700", "#64dd17"], ["lime", "#cddc39"], ["lime-50", "#f9fbe7"], ["lime-100", "#f0f4c3"], ["lime-200", "#e6ee9c"], ["lime-300", "#dce775"], ["lime-400", "#d4e157"], ["lime-500", "#cddc39"], ["lime-600", "#c0ca33"], ["lime-700", "#afb42b"], ["lime-800", "#9e9d24"], ["lime-900", "#827717"], ["lime-a100", "#f4ff81"], ["lime-a200", "#eeff41"], ["lime-a400", "#c6ff00"], ["lime-a700", "#aeea00"], ["yellow", "#ffeb3b"], ["yellow-50", "#fffde7"], ["yellow-100", "#fff9c4"], ["yellow-200", "#fff59d"], ["yellow-300", "#fff176"], ["yellow-400", "#ffee58"], ["yellow-500", "#ffeb3b"], ["yellow-600", "#fdd835"], ["yellow-700", "#fbc02d"], ["yellow-800", "#f9a825"], ["yellow-900", "#f57f17"], ["yellow-a100", "#ffff8d"], ["yellow-a200", "#ffff00"], ["yellow-a400", "#ffea00"], ["yellow-a700", "#ffd600"], ["amber", "#ffc107"], ["amber-50", "#fff8e1"], ["amber-100", "#ffecb3"], ["amber-200", "#ffe082"], ["amber-300", "#ffd54f"], ["amber-400", "#ffca28"], ["amber-500", "#ffc107"], ["amber-600", "#ffb300"], ["amber-700", "#ffa000"], ["amber-800", "#ff8f00"], ["amber-900", "#ff6f00"], ["amber-a100", "#ffe57f"], ["amber-a200", "#ffd740"], ["amber-a400", "#ffc400"], ["amber-a700", "#ffab00"], ["orange", "#ff9800"], ["orange-50", "#fff3e0"], ["orange-100", "#ffe0b2"], ["orange-200", "#ffcc80"], ["orange-300", "#ffb74d"], ["orange-400", "#ffa726"], ["orange-500", "#ff9800"], ["orange-600", "#fb8c00"], ["orange-700", "#f57c00"], ["orange-800", "#ef6c00"], ["orange-900", "#e65100"], ["orange-a100", "#ffd180"], ["orange-a200", "#ffab40"], ["orange-a400", "#ff9100"], ["orange-a700", "#ff6d00"], ["deep-orange", "#ff5722"], ["deep-orange-50", "#fbe9e7"], ["deep-orange-100", "#ffccbc"], ["deep-orange-200", "#ffab91"], ["deep-orange-300", "#ff8a65"], ["deep-orange-400", "#ff7043"], ["deep-orange-500", "#ff5722"], ["deep-orange-600", "#f4511e"], ["deep-orange-700", "#e64a19"], ["deep-orange-800", "#d84315"], ["deep-orange-900", "#bf360c"], ["deep-orange-a100", "#ff9e80"], ["deep-orange-a200", "#ff6e40"], ["deep-orange-a400", "#ff3d00"], ["deep-orange-a700", "#dd2c00"], ["brown", "#795548"], ["brown-50", "#efebe9"], ["brown-100", "#d7ccc8"], ["brown-200", "#bcaaa4"], ["brown-300", "#a1887f"], ["brown-400", "#8d6e63"], ["brown-500", "#795548"], ["brown-600", "#6d4c41"], ["brown-700", "#5d4037"], ["brown-800", "#4e342e"], ["brown-900", "#3e2723"], ["grey", "#9e9e9e"], ["grey-50", "#fafafa"], ["grey-100", "#f5f5f5"], ["grey-200", "#eeeeee"], ["grey-300", "#e0e0e0"], ["grey-400", "#bdbdbd"], ["grey-500", "#9e9e9e"], ["grey-600", "#757575"], ["grey-700", "#616161"], ["grey-800", "#424242"], ["grey-900", "#212121"], ["blue-grey", "#607d8b"], ["blue-grey-50", "#eceff1"], ["blue-grey-100", "#cfd8dc"], ["blue-grey-200", "#b0bec5"], ["blue-grey-300", "#90a4ae"], ["blue-grey-400", "#78909c"], ["blue-grey-500", "#607d8b"], ["blue-grey-600", "#546e7a"], ["blue-grey-700", "#455a64"], ["blue-grey-800", "#37474f"], ["blue-grey-900", "#263238"], ["black", "#000000"], ["white", "#ffffff"]];

function addStylesheetRules(a) {
	addStyle(a, true);
}

var colorFactory;
colorFactory = function() {
	var styleSheetString = [];

	for (var i = colors.length; i--; ) {
		var name = colors[i][0];
		var value = colors[i][1];

		styleSheetString.push(
			['.' + name + ', .a-' + name + ':active' + ', .f-' + name+ ':focus' + ', .h-' + name+ ':hover', [['background-color', value]]],
			['.font-' + name + ', .afont-' + name+ ':active' + ', .ffont-' + name+ ':focus' + ', .hfont-' + name+ ':hover', [['color', value]]],
			['.border-' + name + ', .aborder-' + name+ ':active' + ', .fborder-' + name+ ':focus' + ', .hborder-' + name+ ':hover', [['border-color', value]]]
		);

	}

	var villaApi = [
		['.min-height-window',
			[['min-height', window.innerHeight + 'px']]
		],
		['.height-window',
			[['height', window.innerHeight + 'px']]
		],
		['.max-height-window',
			[['max-height', window.innerHeight + 'px']]
		]
	];

	addStylesheetRules(styleSheetString);
	addStylesheetRules(villaApi);
};

/**
 * Villa Flex v3.0.0 (http://getvilla.org/)
 * Copyright 2013-2015 Noibe Developers
 * Licensed under MIT (https://github.com/noibe/villa/blob/master/LICENSE)
 */
var buildFlex;
buildFlex = function() {

	// start styles array and build flex

	var i, a, b, styles = [];

	// flex helpers

	styles.push({
		selector: '.flex, .child-flex > *, .extends-flex *',
		properties: [
			['display', '-webkit-box'],
			['display', '-moz-box'],
			['display', '-ms-flexbox'],
			['display', '-webkit-flex'],
			['display', 'flex']
		]
	});

	// build align rules

	var flexAlignValues = [
		'baseline',
		'center',
		['end'],
		['start'],
		'stretch'
	];

	for (i = flexAlignValues.length; i--; ) {

		if (flexAlignValues[i] instanceof Array) {
			a = flexAlignValues[i][0];
			b = 'flex-' + flexAlignValues[i][0];
		} else {
			a = flexAlignValues[i];
			b = a;
		}

		styles.push({
			selector: '.flex.align' + '-' + a + ', .flex.child-align' + '-' + a + ' > *',
			properties: [
				['-webkit-align-items' , b],
				['align-items' , b]
			]
		});

		styles.push({
			selector: '.flex.content' + '-' + a,
			properties: [
				['-webkit-align-content' , b],
				['align-content' , b]
			]
		});

		styles.push({
			selector: '.flex .self' + '-' + a,
			properties: [
				['-webkit-align-self' , b],
				['align-self' , b]
			]
		});

	}

	// build flex direction rules

	var flexDirectionValues = [
		'column',
		'column-reverse',
		'row',
		'row-reverse'
	];

	for (i = flexDirectionValues.length; i--; ) {
		a = flexDirectionValues[i];
		styles.push({
			selector: '.flex-' + a + ', .child-flex' + a + ' > *, .extends-flex' + a + ' *',
			properties: [
				['-ms-flex-direction', a],
				['-webkit-flex-direction', a],
				['flex-direction', a]
			]
		});
	}

	// build flex grow and order rules

	styles.push({
		selector: '.flex.child-grow-1 > *',
		properties: [
			['-webkit-flex-grow', '1'],
			['flex-grow', '1']
		]
	});

	for (i = 64 + 1; --i; ) {

		styles.push({
			selector: '.flex .grow-' + i,
			properties: [
				['-webkit-flex-grow', '' + i],
				['flex-grow', '' + i]
			]
		});

		styles.push({
			selector: '.flex .order-' + i,
			properties: [
				['order', '' + i]
			]
		});

	}

	// build flex wrap rules

	var flexWrapValues = [
		'wrap',
		'nowrap'
	];

	for (i = flexWrapValues.length; i--; ) {
		a = flexWrapValues[i];
		styles.push({
			selector: '.flex-' + a + ', .child-flex-' + a + ' > *' + ', .extends-flex-' + a + ' *',
			properties: [
				['-ms-flex-wrap', a],
				['-webkit-flex-wrap', a],
				['flex-wrap', a]
			]
		});
	}

	// build justify content

	var justifyValues = [
		['center'],
		['end', 'flex'],
		['start', 'flex'],
		['between', 'space'],
		['around', 'space']
	];

	for (i = justifyValues.length; i--; ) {
		a = justifyValues[i][0];
		b = (justifyValues[i][1]) ? justifyValues[i][1] : false;

		styles.push({
			selector: '.justify-' + a + ', .child-justify-' + a + ' > *',
			properties: [
				['-webkit-justify-content', ((b) ? b + '-' : '') + a],
				['justify-content', ((b) ? b + '-' : '') + a]
			]
		});

	}

	addStylesheetRules(styles);

};


/**
 * Villa Foundation v3.0.0 (http://getvilla.org/)
 * Copyright 2013-2015 Noibe Developers
 * Licensed under MIT (https://github.com/noibe/villa/blob/master/LICENSE)
 */
var buildFoundation;
buildFoundation = function() {

	var boxSizing = 'border-box';

	var styles = [
		{
			selector: '*',
			properties: [
				['-webkit-box-sizing', boxSizing],
				['-moz-box-sizing', boxSizing],
				['box-sizing', boxSizing],
				['margin', '0'],
				['padding', '0']
			]
		},
		['li',
			[['display', 'block']]
		],
		['a',
			[
				['text-decoration', 'none'],
				['color', 'inherit']
			]
		]
	];

	addStylesheetRules(styles);

};

/**
 * Villa Grid v3.0.0 (http://getvilla.org/)
 * Copyright 2013-2015 Noibe Developers
 * Licensed under MIT (https://github.com/noibe/villa/blob/master/LICENSE)
 */
var buildGrid;
buildGrid = function() {

	var i, j, k, p, u, r, s = [];

	u = 100 / 12;

	s.push({
		selector: ".col:before",
		properties: [
			['content', 'hehe']
		]
	});

	s.push({
		selector: "[class*='col-xs'], [class*='col-sm'], [class*='col-md'], [class*='col-lg']",
		properties: [
			['position', 'relative'],
			['min-height', '1px']
		]
	});

	s.push({
		selector: "[class*='col-xl']",
		properties: [
			['float', 'left']
		]
	});

	// non media rules

	r = [
		{
			prefix: '.col-xs-',
			properties: 'width',
			zero: false
		},
		{
			prefix: '.col-xs-pull-',
			properties: 'right',
			zero: true
		},
		{
			prefix: '.col-xs-push-',
			properties: 'left',
			zero: true
		},
		{
			prefix: '.col-xs-offset-',
			properties: 'margin-left',
			zero: true
		}
	];

	for (i = 12 + 1; i--; )
		if (r.length) {
			p = u * i;
			if (p) p += '%';
			for (j = r.length; j--; )
				if ((i > 0) || ((i === 0) && (r[j].zero)))
					s.push([
						r[j].prefix + i,
						[[r[j].properties, p]]
					]);
		}

	// media rules

	var m = [
		['sm', 36],
		['md', 48],
		['lg', 60],
		['xl', 72]
	];

	for (k = m.length; k--; ) {

		var name = m[k][0];
		var size = m[k][1];

		var media = {
			type: 'media',
			features: '(min-width: ' + size + 'em)',
			rules: []
		};

		media.rules.push({
			selector: "[class*='col-" + name + "']",
			properties: [
				['float', 'left']
			]
		});

		var mediaRules = [
			{
				prefix: '.col-' + name + '-',
				properties: 'width',
				zero: false
			},
			{
				prefix: '.col-' + name + '-pull-',
				properties: 'right',
				zero: true
			},
			{
				prefix: '.col-' + name + '-push-',
				properties: 'left',
				zero: true
			},
			{
				prefix: '.col-' + name + '-offset-',
				properties: 'margin-left',
				zero: true
			}
		];

		for (i = 12 + 1; i--; )
			if (mediaRules.length) {
				p = u * i;
				if (p) p += '%';
				for (j = mediaRules.length; j--; )
					if ((i > 0) || ((i === 0) && (mediaRules[j].zero)))
						media.rules.push([
							mediaRules[j].prefix + i,
							[[mediaRules[j].properties, p]]
						]);
			}

		s.push(media);

	}

	addStylesheetRules(s);

};

// Refresh the height-window value on resize
var updateResize = function () {
	var a, b, c, o;
	a = window.innerHeight;

	b = document.getElementsByClassName('min-height-window');
	if (b)
		for (c = b.length; c--;) {
			o = (b[c].getAttribute('height-offset'));
			if (o) a += parseInt(o);
			b[c].style.minHeight = (a + o) + 'px';
		}

	b = document.getElementsByClassName('height-window');
	if (b)
		for (c = b.length; c--;) {
			o = (b[c].getAttribute('height-offset'));
			if (o) o = parseInt(o);
			b[c].style.height = (a + o) + 'px';
		}

	b = document.getElementsByClassName('max-height-window');
	if (b) for (c = b.length; c--;) b[c].style.maxHeight = a + 'px';
};

WebFontConfig = {
	google: {
		families: []    // add the fonts families //here
	},
	using: false
};

var WebFontFamilies = [
	{
		className: 'fira-sans',
		displayType: 'sans-serif',
		name: 'Fira Sans',
		properties: 'Fira+Sans:400,300,500,700:latin'
	},
	{
		className: 'fira-sans-italic',
		displayType: 'sans-serif',
		name: 'Fira Sans',
		properties: 'Fira+Sans:400,300,300italic,400italic,500,500italic,700,700italic:latin'
	},
	{
		className: 'fira-mono',
		displayType: 'monospace',
		name: 'Fira Mono',
		properties: 'Fira+Mono:400,700:latin'
	},
	{
		className: 'lato',
		displayType: 'sans-serif',
		name: 'Lato',
		properties: 'Lato:400,900,700,300,100:latin'
	},
	{
		className: 'lato-italic',
		displayType: 'sans-serif',
		name: 'Lato',
		properties: 'Lato:400,900italic,900,700italic,700,400italic,300italic,300,100italic,100:latin'
	},
	{
		className: 'open-sans',
		displayType: 'sans-serif',
		name: 'Open Sans',
		properties: 'Open+Sans:400,300,600,700,800:latin'
	},
	{
		className: 'open-sans-italic',
		displayType: 'sans-serif',
		name: 'Open Sans',
		properties: 'Open+Sans:400,300,300italic,400italic,600,600italic,700italic,700,800,800italic:latin'
	},
	{
		className: 'roboto',
		displayType: 'sans-serif',
		name: 'Roboto',
		properties: 'Roboto:400,300,600,700,800:latin'
	}
];

var hasWebFont = function (a) {
	return !!document.querySelectorAll('.' + a.className).length;
};

var insertWebFontRule;
insertWebFontRule = function(wf) {

	var styles = [
		['.' + wf.className,
			[['font-family', wf.name + ', ' + wf.displayType]]
		]
	];

	addStylesheetRules(styles);

};

var getGoogleWebFontApi = function () {

	var wf, s;

	wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';

	s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);

};

var getWebFont;
getWebFont = function () {

	for (var i = WebFontFamilies.length; i--;)
		if (hasWebFont(WebFontFamilies[i])) {
			WebFontConfig.google.families.push(WebFontFamilies[i].properties);
			WebFontConfig.using = true;
			insertWebFontRule(WebFontFamilies[i]);
		}

	if (WebFontConfig.using) getGoogleWebFontApi();

};

(function () {
	buildFoundation();
	buildFlex();
	buildGrid();
	colorFactory();
	getWebFont();
})();

var addEvent = function(a, b) {
	if (window.attachEvent) window.attachEvent(a, b);
	else window.addEventListener(a, b);
};

addEvent('resize', updateResize);
addEvent('load', getWebFont);