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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.489775972999849" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.2685113253326852" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.45419422425552836" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.6475796202374036" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.42519602055853145" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.8552092406625382" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.006162848157850176"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.6493288861949653" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.6297028095540211">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.77266654500844">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.9232699315217929">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.2057191269632621">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.7648927099672236"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.6939025255158173"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.8392467073490257"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.8635313186879843"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.966284154257409"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.8015738611536729"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.8256190909129151"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.10185110777604978"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.22192513272124326"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.41273895437856867"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.7008563140737896"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.16191207789495343"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.26090858542541584"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.2226713088916712"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.9196407276462384"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.8456285046815608"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.06967117021019065"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.46776458531152776"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.3905150916296811"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
