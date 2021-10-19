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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.4207571616853327" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.4223092249060558" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.3341772938846339" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.36673824696165713" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.32724384761319647" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.1955634635900978" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.7224895773162074"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.403614631720169" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.5193906255608245">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.791089911539862">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.3562013009835976">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.8983557765863022">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.18949944446274358"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.06397196888008794"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.4297042260340509"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.1648289357898034"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.26958572919933577"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.9359148147805323"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.8915379413521045"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.5088142798675461"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.9995454072931524"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.9422993122592218"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.7319739711130073"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.32922674625333515"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.5594743937605249"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.30798930938462576"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.3506378643848096"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.508840392038697"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.9562951546678677"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.2277427077096701"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.01666436101163593"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
