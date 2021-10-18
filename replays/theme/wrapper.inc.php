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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.598235312037021" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.8187980717352377" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.3581980555532691" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.6313817703856401" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.6704351090324816" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.41868226284959387" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.044314598590429854"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.23456899657770558" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.39345447157018154">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.9976697749566275">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.6188659694460781">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.9932226684371617">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.47685421735327194"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.5193357470629623"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.7656085775792938"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.8472837954366876"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.04847992557978964"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.14699672962752208"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.5165679072768119"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.5552677138367559"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.11397064813154145"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.949128196548267"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.7120677650043172"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.6040502628660087"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.6544576340302533"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.6541962150094571"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.7153494021964455"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.28840700981759615"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.41250331300676346"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.3901648836564613"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.20703127955503176"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
