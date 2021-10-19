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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.7419845604113438" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.7548802558816241" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.8719647694166297" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.9324201274245818" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.5972935750071644" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.8644755683295735" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.5020236694886322"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.30085290260881137" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.9269260320785209">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.9360208883025853">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.8544568831161443">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.45922079713974306">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.20149464749489376"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.07197634338706438"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.834180349696755"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.018266649590493955"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.40063425511169415"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.5506120840258306"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.9712101308874816"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.38413740229451143"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.09010023526102229"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.7148865173893175"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.3829139182725443"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.06747314532169257"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.13249961410480915"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.1919153936029505"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.2966753669184248"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.46913850437522187"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.13627625304892965"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.918351494654972"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.23443567286000477"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
