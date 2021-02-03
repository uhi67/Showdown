Showdown module 
===============

Showdown.js interface for Yii2

Version 1.2.1 -- release 2021-02-03

Based on https://github.com/showdownjs version 1.7.1

[Detailed documentation of showdownjs](https://github.com/showdownjs/showdown/wiki)


# Installation

The preferred way to install this extension is through composer.

To install, either run

```
composer require uhi67/showdown "^1.2" 
```

or add

```
"uhi67/showdown" : "^1.2"
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
	uhi67\showdown\ShowdownAsset::register($this); // or put this into the global layout
?>
<div class="showdown">
	<pre class="markdown"><?= $content ?></pre>
</div>	
```

where `$content` is the markdown content readed from your .md file.

# Change log

### 1.2.1 -- 2021-02-03

- Replaces "--" (double hyphen) to mdash character

### 1.2 -- 2020-12-22

- if .simple class is used in pre.markdown, will not render links and images

### 1.1 -- 2020-04-21

- simpleLineBreaks option changed to false -- now ignores simple line breaks in source
