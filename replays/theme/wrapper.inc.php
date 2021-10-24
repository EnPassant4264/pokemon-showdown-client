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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.02409131745168147" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.3981826419689807" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.804184160243776" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.712470426377745" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.17305616660110146" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.920750670889926" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.8360147559984317"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.8426208393768915" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.08164955179031486">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.0380913962494116">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.6137277485029966">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.6625613259398948">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.005711938237378922"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.552148002058048"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.5434366498105312"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.5857558938207772"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.6573741094381877"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.7001573510937051"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.3177349912642842"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.6077833743717516"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.9021926132097169"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.143578690302125"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.8614727401847073"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.08216535172025807"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.8052488601044641"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.4690882727632384"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.8912728215087704"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.4457152998774354"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.08953398506111987"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.628767462460041"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.8262492891374036"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
