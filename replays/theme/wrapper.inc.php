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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.6111604823487771" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.3831533764688637" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.7104460353673412" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.3990492456976027" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.017413358907161003" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.4839427591045493" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.5888515604462554"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.6362079752209833" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.47823122798076967">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.6508036247262703">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.17656444840657892">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.452709909668195">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.6455695608524121"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.8136217626328022"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.3996164888393523"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.45090684546854276"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.3455386521943049"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.0780737665030029"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.3198447350457705"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.42687465965438065"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.934570768802427"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.9424859822050573"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.06681490648044797"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.44971425248516494"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.061710408871937794"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.1358060083151229"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.2433003276830077"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.06031943298483311"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.1676126848056232"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.01954378215568342"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.6621534258202681"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
