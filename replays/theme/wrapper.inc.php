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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.39982478010681954" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.5306446802268754" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.2918669782612071" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.359406777391859" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.0999937128160946" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.6168187672680165" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.39529465199416647"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.6354310933933411" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.38752348938810033">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.4304644687466239">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.9862290553279636">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.2128372957079343">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.47828575245065075"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.6898757203452546"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.7367181137428045"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.45306462049157226"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.4086997098155005"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.7107243159235519"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.9268782362724362"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.9966531580164859"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.7845188205637723"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.8155724886961548"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.13310196718809797"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.6223938975289087"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.6187099382010814"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.46777301586015185"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.0378874393331301"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.23120609169820217"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.13740361560181302"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.8477511113061038"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.036324614379235065"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
