/*
 * Showdown.js
 * Yii2 interface to showdown module
 */
 
console.log('showdown.js v1.0');

const linkbase = '';

$(function() {
	const flavor = 'github';
	showdown.setFlavor(flavor);
	const linkreplace = function () {
		return [
			{
				type: 'output',
				regex: /(href|src)="([^:"]+)"/g,
				replace: '$1="' + linkbase + '$2"'
			}
		];
	};
	showdown.extension('linkreplace', linkreplace);
 	$('pre.markdown').each( function(){
		const converter = new showdown.Converter({
			extensions: ['linkreplace'],
			simpleLineBreaks: false
		});
		//console.log('4 Converting '+$(this).text());
 		$(this).replaceWith(converter.makeHtml($(this).text()));
 	});
});
