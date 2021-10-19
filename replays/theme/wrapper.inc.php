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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.7140436687269329" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.5120182124223134" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.06889213830209306" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.13018270762884976" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.02261080835983753" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.17922103846474124" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.2378360129850583"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.34286406951699333" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.5215625682067822">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.35025770027092484">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.8584519661609331">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.16664107551562268">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.23831830006641375"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.7075459521931884"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.45148610869186045"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.39349396621635924"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.7989479134253126"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.9536103439245833"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.8469073624999106"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.6552200966647361"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.3601726457819936"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.1516754465929553"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.6712373277232269"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.8812312393458683"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.68780517315771"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.21979766050777316"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.5633634442629414"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.5403958718143878"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.4587936918769182"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.33816679274335293"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.4707096048548809"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
