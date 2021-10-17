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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.8384857105819348" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.5834418234564493" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.2578318128288064" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.5213921452608075" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.8160649647787825" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.09513179110026404" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.7836017609395818"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.5294367481436408" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.9618500141239141">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.21512058685945368">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.09459398366521166">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.2840768581304358">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.7154960518903044"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.7491917909802224"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.32500497802213335"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.7391376876054847"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.02616070617232613"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.37203739803201663"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.546100595155987"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.8431323781387916"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.06713429708384666"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.3015704805946693"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.909743870129837"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.6059925849354415"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.4779465243266312"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.31059762043107897"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.2948318117485462"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.8583278503539762"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.7921039285254041"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.8384555316752087"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.9081981126763794"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
