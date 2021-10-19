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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.7710233645455213" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.727413818960349" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.44867671166553325" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.07114587485063595" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.3211057422907666" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.9954899246170947" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.0980735672358024"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.9979573603366543" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.6640645621249261">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.13168614581085203">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.9809233474871011">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.46383567717275453">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.8853058139848546"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.8357868501496113"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.8226022598161224"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.6128377446489421"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.5618316836788919"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.9792466059319824"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.35359003394670574"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.7011005968379582"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.12666401712849917"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.7955085452129147"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.7506002392262632"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.20037749074038924"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.27603598953024955"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.5970528038341323"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.5155346829128793"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.7175243704364755"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.9819171200711627"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.38164629659686145"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.9635519293485859"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
