<?php
namespace uhi67\showdown;

class ShowdownAsset extends \yii\web\AssetBundle
{
    // The files are not web directory accessible, therefore we need
    // to specify the sourcePath property.
    public $sourcePath = '@vendor/uhi67/showdown';

    public $css = [
        'Showdown.less',
    ];

    public $js = [
    	'dist/showdown.min.js',
    	'Showdown.js',
    ];

    public $depends = [
        'yii\web\JqueryAsset',
        'yii\jui\JuiAsset'
    ];
	public $publishOptions = [
		'forceCopy' => YII_ENV_DEV, 
	];
}
