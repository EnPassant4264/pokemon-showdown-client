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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.5461912687535442" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.48356932159333854" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.42986030786989615" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.304721159748393" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.4184894911801893" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.36460309869771623" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.25115471624161234"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.1752780907591278" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.12002163481725003">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.14115310752140142">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.4228870081013776">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.13805930838714509">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.5455544911034909"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.1538619471785132"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.25167964987542124"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.457740911347837"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.6117950276785824"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.08641540989491459"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.4054976614702084"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.7487178810299702"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.7029619717804148"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.2844850144077622"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.038036459412852386"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.032406721793771576"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.2904676551317571"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.010853320739795391"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.8134067769280435"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.3672099769996029"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.5316365985836822"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.7447214614336766"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.6594374917617114"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
