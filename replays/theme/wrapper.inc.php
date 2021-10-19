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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.4111712877634892" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.704985169686744" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.025821668865752212" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.6022111367475196" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.099856677070012" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.7009293068166249" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.7825831634529901"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.7110497714604846" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.5403023902353801">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.951033331048051">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.6768213307436741">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.5968166324202324">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.6211404402561524"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.6614992239409947"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.5742401654614486"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.24092221630494537"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.8057420705030782"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.4361842406246139"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.5686755406062605"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.7229733798481768"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.21475447643435586"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.4133715509599263"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.8293978625367047"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.024329153697048467"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.001778462024737859"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.46268849830836034"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.9828677836836679"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.8804203777336135"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.05679715632195337"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.21835420655952964"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.2290966528421814"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
