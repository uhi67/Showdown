/*
 * Showdown.js
 * Yii2 interface to showdown module
 */

console.log('showdown.js v1.2');

const linkbase = '';

$(function() {
	/**
	 * 'simple' version removes links and images
	 */
	$('pre.markdown.simple').each(function() {
		this.innerHTML = this.innerHTML
			.replaceAll(/!?\[([^\]]+)]\([^)]+\)/g, '[$1] ')
			.replaceAll(/!\[([^\]]+)]\[[^\]]+]/g, '[$1] ')
			.replaceAll(/\[([^\]]+)]: [^\s]+(\s+"[^"]+")?/g, '');
		//console.log(this.innerHTML);
	});

	const flavor = 'github';
	showdown.setFlavor(flavor);
	const linkreplace = function () {
		return [
			{
				type: 'output',
				regex: /(href|src)="([^:"]+)"/g,
				replace: '$1="' + linkbase + '$2"'
			},
			{
				type: 'output',
				regex: /(?<=\s|>|^)--(?=\s|<|$)/g,
				replace: '&mdash;'
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
