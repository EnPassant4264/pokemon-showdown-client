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
	<link rel="stylesheet" href="//dragonheaven.herokuapp.com/style/font-awesome.css?0.6699130469904426" />
	<link rel="stylesheet" href="//dragonheavenserver.herokuapp.com/theme/panels.css?0.8828688425626072" />
	<link rel="stylesheet" href="//dragonheavenserver.herokuapp.com/theme/main.css?0.9449190760984245" />
	<link rel="stylesheet" href="//dragonheaven.herokuapp.com/style/battle.css?0.014959462077839047" />
	<link rel="stylesheet" href="//dragonheaven.herokuapp.com/style/replay.css?0.6530660787202214" />
	<link rel="stylesheet" href="//dragonheaven.herokuapp.com/style/utilichart.css?0.9743984181137249" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//dragonheavenserver.herokuapp.com/?0.4260311365600655"><img src="//dragonheavenserver.herokuapp.com/images/pokemonshowdownbeta.png?0.5669598603968706" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.8368673520320016">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.15439729421279313">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//dragonheavenserver.herokuapp.com/ladder/?0.20729395964585096">Ladder</a></li>
				<li><a class="button nav-last" href="//dragonheavenserver.herokuapp.com/forums/?0.7710711769527849">Forum</a></li>
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
	<script src="//dragonheaven.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.8112426101438097"></script>
	<script src="//dragonheaven.herokuapp.com/js/lib/lodash.core.js?0.8423133927438984"></script>
	<script src="//dragonheaven.herokuapp.com/js/lib/backbone.js?0.10421514633632922"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.33037049771392923"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//dragonheaven.herokuapp.com/js/lib/jquery-cookie.js?0.7293114608818443"></script>
	<script src="//dragonheaven.herokuapp.com/js/lib/html-sanitizer-minified.js?0.4099461468090546"></script>
	<script src="//dragonheaven.herokuapp.com/js/battle-sound.js?0.6434854823110299"></script>
	<script src="//dragonheaven.herokuapp.com/config/config.js?0.01757809902270302"></script>
	<script src="//dragonheaven.herokuapp.com/js/battledata.js?0.6749452408656609"></script>
	<script src="//dragonheaven.herokuapp.com/data/pokedex-mini.js?0.5384253418899598"></script>
	<script src="//dragonheaven.herokuapp.com/data/pokedex-mini-bw.js?0.003752487673343685"></script>
	<script src="//dragonheaven.herokuapp.com/data/graphics.js?0.6196608652854727"></script>
	<script src="//dragonheaven.herokuapp.com/data/pokedex.js?0.7227341119771689"></script>
	<script src="//dragonheaven.herokuapp.com/data/items.js?0.03301968417676271"></script>
	<script src="//dragonheaven.herokuapp.com/data/moves.js?0.23360676073047926"></script>
	<script src="//dragonheaven.herokuapp.com/data/abilities.js?0.3194867831037296"></script>
	<script src="//dragonheaven.herokuapp.com/data/teambuilder-tables.js?0.18218639709758322"></script>
	<script src="//dragonheaven.herokuapp.com/js/battle-tooltips.js?0.6495294390144171"></script>
	<script src="//dragonheaven.herokuapp.com/js/battle.js?0.8286707833318292"></script>
	<script src="/js/replay.js?c81925c8"></script>

</body></html>
<?php
}
