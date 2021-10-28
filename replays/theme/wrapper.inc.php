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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.4616037141588405" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.8618789810309497" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.16307431608010314" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.2522023569527734" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.7787742234993664" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.8455208985718012" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.5397364595075189"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.7882097491821132" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.7173790877026263">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.5279093949558571">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.35177176192263926">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.5122009954490288">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.8562779436602508"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.05121056233221699"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.3842925672829467"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.3508500115379152"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.7250812659899692"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.4454605068428936"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.24258911123145377"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.14232962228642587"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.4376453657103869"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.18640512035589185"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.2693731911789694"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.7723513464252261"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.058534450685619355"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.8868448921947283"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.38925558995548615"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.9976472257613691"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.7266646804154386"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.840758987863673"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.044985222967348415"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
