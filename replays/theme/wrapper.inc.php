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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.031112711403112225" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.31786419514334674" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.5372305955667547" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.49586434949178915" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.620842386781046" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.00033961238159774254" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.689104101883744"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.5257772462908852" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.14018023995361695">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.4432621989444623">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.3435531879809506">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.4433212689894528">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.33403628461734836"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.5169386419745718"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.7052734370114822"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.06191816880003165"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.40297292009282604"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.38680589755932493"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.05416882501331832"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.6753952215607406"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.7403184309321424"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.15269961508678365"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.7447201182210914"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.08804912083820526"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.9695997611133711"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.29731555405575416"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.9518175458095286"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.38440798123769726"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.3611001734163346"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.8558764332031568"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.03957230471600881"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
