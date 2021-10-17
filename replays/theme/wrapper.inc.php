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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.8091603543856243" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.09787980153280262" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.5834340171131844" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.7914491029394424" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.7163957248596662" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.09143905833740962" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.6489149360316093"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.45372638353904726" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.5976726167015731">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.78967537314412">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.4936325761803255">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.533326892645791">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.47632927407974845"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.7819791107160348"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.12740404217523293"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.04288779305443846"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.06760218514189109"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.027797831530039563"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.6182078756709646"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.5024572731897163"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.20885147693582073"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.8536010306916235"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.19558845361587607"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.19197855596297986"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.020355823452743227"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.19677508170624747"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.2609144997013666"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.32698275294669776"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.3479928115419324"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.20909014304517304"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.0626569374482977"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
