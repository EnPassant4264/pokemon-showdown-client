<?php

if ((substr($_SERVER['REMOTE_ADDR'],0,11) === '69.164.163.') ||
		(substr(@$_SERVER['HTTP_X_FORWARDED_FOR'],0,11) === '69.164.163.')) {
	die('website disabled');
}

/********************************************************************
 * Header
 ********************************************************************/

function ThemeHeaderTemplate() {
	global $panels;
?>
<!DOCTYPE html>
<html><head>

	<meta charset="utf-8" />

	<title><?php if ($panels->pagetitle) echo htmlspecialchars($panels->pagetitle).' - '; ?>Pok&eacute;mon Showdown</title>

<?php if ($panels->pagedescription) { ?>
	<meta name="description" content="<?php echo htmlspecialchars($panels->pagedescription); ?>" />
<?php } ?>

	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=IE8" />
	<link rel="stylesheet" href="//dragonheaven.herokuapp.com/style/font-awesome.css?0.34268854355266165" />
	<link rel="stylesheet" href="//dragonheavenserver.herokuapp.com/theme/panels.css?0.158676798400621" />
	<link rel="stylesheet" href="//dragonheavenserver.herokuapp.com/theme/main.css?0.6416021415012909" />
	<link rel="stylesheet" href="//dragonheaven.herokuapp.com/style/battle.css?0.2800398820253671" />
	<link rel="stylesheet" href="//dragonheaven.herokuapp.com/style/replay.css?0.82107605867125" />
	<link rel="stylesheet" href="//dragonheaven.herokuapp.com/style/utilichart.css?0.20944257085823104" />

	<!-- Workarounds for IE bugs to display trees correctly. -->
	<!--[if lte IE 6]><style> li.tree { height: 1px; } </style><![endif]-->
	<!--[if IE 7]><style> li.tree { zoom: 1; } </style><![endif]-->

	<script type="text/javascript">
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-26211653-1']);
		_gaq.push(['_setDomainName', 'pokemonshowdown.com']);
		_gaq.push(['_setAllowLinker', true]);
		_gaq.push(['_trackPageview']);

		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>
</head><body>

	<div class="pfx-topbar">
		<div class="header">
			<ul class="nav">
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//dragonheavenserver.herokuapp.com/?0.023570404222107433"><img src="//dragonheavenserver.herokuapp.com/images/pokemonshowdownbeta.png?0.2580997280392243" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.002710493594177077">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.5143617098481508">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//dragonheavenserver.herokuapp.com/ladder/?0.71094288915001">Ladder</a></li>
				<li><a class="button nav-last" href="//dragonheavenserver.herokuapp.com/forums/?0.2595531306567975">Forum</a></li>
			</ul>
			<ul class="nav nav-play">
				<li><a class="button greenbutton nav-first nav-last" href="http://play.pokemonshowdown.com/">Play</a></li>
			</ul>
			<div style="clear:both"></div>
		</div>
	</div>
<?php
}

/********************************************************************
 * Footer
 ********************************************************************/

function ThemeScriptsTemplate() {
?>
	<script src="//dragonheaven.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.5835218881611752"></script>
	<script src="//dragonheaven.herokuapp.com/js/lib/lodash.core.js?0.9621235287603707"></script>
	<script src="//dragonheaven.herokuapp.com/js/lib/backbone.js?0.9021028903590329"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.78878734694526"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//dragonheaven.herokuapp.com/js/lib/jquery-cookie.js?0.22571314444486146"></script>
	<script src="//dragonheaven.herokuapp.com/js/lib/html-sanitizer-minified.js?0.9841194207740043"></script>
	<script src="//dragonheaven.herokuapp.com/js/battle-sound.js?0.9735986269564973"></script>
	<script src="//dragonheaven.herokuapp.com/config/config.js?0.06868518296659731"></script>
	<script src="//dragonheaven.herokuapp.com/js/battledata.js?0.40259046094575335"></script>
	<script src="//dragonheaven.herokuapp.com/data/pokedex-mini.js?0.6333242452906502"></script>
	<script src="//dragonheaven.herokuapp.com/data/pokedex-mini-bw.js?0.9864380628404521"></script>
	<script src="//dragonheaven.herokuapp.com/data/graphics.js?0.3295391849137319"></script>
	<script src="//dragonheaven.herokuapp.com/data/pokedex.js?0.8779957630315105"></script>
	<script src="//dragonheaven.herokuapp.com/data/items.js?0.6523046579201321"></script>
	<script src="//dragonheaven.herokuapp.com/data/moves.js?0.5626680656314715"></script>
	<script src="//dragonheaven.herokuapp.com/data/abilities.js?0.9090906224669297"></script>
	<script src="//dragonheaven.herokuapp.com/data/teambuilder-tables.js?0.19588915006327223"></script>
	<script src="//dragonheaven.herokuapp.com/js/battle-tooltips.js?0.87264538089629"></script>
	<script src="//dragonheaven.herokuapp.com/js/battle.js?0.5394036058975669"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
