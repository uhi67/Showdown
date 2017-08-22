/*
 * Showdown.js
 * Yii2 interface to showdown module
 */
 
console.log('showdown.js v1.0');

var linkbase = '';

 $(function() {
	var flavor = 'github';
	showdown.setFlavor('github');
	var linkreplace = function() {
		return [
			{
				type: 'output',
				regex: /(href|src)="([^:"]+)"/g,
				replace: '$1="'+linkbase+'$2"'
			}
		];
	};
	showdown.extension('linkreplace', linkreplace);
 	$('pre.markdown').each( function(){
 		var converter = new showdown.Converter({extensions:['linkreplace']});
 		//console.log('4 Converting '+$(this).text());
 		$(this).replaceWith(converter.makeHtml($(this).text()));
 	});
});
