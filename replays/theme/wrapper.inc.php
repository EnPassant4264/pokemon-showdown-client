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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.5453598568074431" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.9595250129638646" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.5121239410462453" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.39004982513795583" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.9016751079263772" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.593170770829891" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.45765745833175586"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.8555372031242798" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.3993704058521159">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.09355088081055518">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.8628396602232973">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.2762337390574363">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.542816765901146"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.056006641169678906"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.40702246714980217"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.7723719644690461"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.321688532747086"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.625971104891343"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.9992408816100391"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.16092246340847782"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.8001436116940943"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.8963148596532597"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.4762659446829962"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.648732451044328"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.12369880095697638"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.39822874790821006"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.28342714292827087"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.6303059515327221"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.9044961996122654"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.25926375600389195"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.43113539160684033"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
