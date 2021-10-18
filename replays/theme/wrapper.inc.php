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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.7393359584985508" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.12565973191073376" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.0646742050886413" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.18022920122684383" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.5827716196025048" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.2615818948913726" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.970903657047167"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.49432966344122864" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.777006775564461">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.3105369764863104">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.44781994596022123">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.04046704970659576">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.8435539822299114"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.2145582340927774"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.38942319279728843"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.5702562055668203"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.37764854118103597"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.8808722574349035"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.8039378285826984"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.5909238732580906"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.23874740655939952"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.6578526507093485"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.006802985812281559"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.20963294640758767"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.12048401441875178"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.7893929339028962"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.5234868912065975"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.6671607377315247"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.12704492188303518"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.11512989886328606"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.1071416319221008"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
