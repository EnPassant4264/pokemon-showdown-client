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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.7909245409888133" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.9529503743033347" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.5640230970116433" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.5687246257448428" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.4133890160153635" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.8832066181887173" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.7423782599049482"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.07617775331363585" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.5282039841200996">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.4850181232076052">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.4011116762366751">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.8686595879936492">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.5414463515978589"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.29289699999052865"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.5358406646624652"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.5595262408804442"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.8464857184490924"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.6528056788087837"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.26372745455336033"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.866618779151691"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.652381685262621"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.7681752138302771"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.08269148625214484"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.496608934681362"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.34360161329997263"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.6197389021702135"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.15031098535803444"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.16083855272354652"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.5764312282090627"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.12883014710512208"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.3635821260833325"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
