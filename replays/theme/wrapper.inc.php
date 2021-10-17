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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.016840098290662908" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.6865566146991753" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.6247350221446688" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.7485224677725302" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.6671773841330437" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.5774785906662707" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.6275386334159769"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.8795265938884003" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.8370222560075664">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.29389232225945205">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.09005660305806207">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.4995436835220324">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.967750385086461"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.4068616481749008"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.9123569084442789"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.032508079854088434"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.2877800056772364"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.8719923043450106"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.517735012856201"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.877668825499097"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.949133704821977"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.15790250628344338"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.726245688037017"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.42357969186661837"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.42721661592611726"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.7126747031006699"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.7862544145470842"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.6181790686512523"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.864206259247505"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.8474666604594632"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.5427227686758436"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
