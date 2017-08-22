Showdown module 
===============

Showdown.js interface for Yii2

Based on https://github.com/showdownjs

[Detailed documentation of showdownjs](https://github.com/showdownjs/showdown/wiki)


# Installation

The preferred way to install this extension is through composer.

To install, either run

```
    composer require uhi67/showdown "1.0.*" 
```

or add

```
    "uhi67/showdown" : "1.0.*"
```

or clone form github

```
	git clone https://github.com/uhi67/showdown
```

# Usage

## in the view

```
	<?php
		// ...
		uhi67\Showdown\ShowdownAsset::register($this); // or put this into the global layout
	?>
	<div class="showdown">
		<pre class="markdown"><?= $content ?></pre>
	</div>
	
```

where `$content` is the markdown content readed from your .md file.
  