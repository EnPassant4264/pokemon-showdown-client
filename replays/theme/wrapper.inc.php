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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.18448737504268742" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.1810125650973078" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.5300298365115157" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.4625633803880653" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.9321663526216672" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.5418816890750688" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.125849636353754"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.45809040953884295" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.04247467204813771">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.6577021888331513">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.33462619370206115">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.9262690622902208">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.6342805748965759"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.02247527742128641"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.4262020339866046"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.8092064447472482"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.33336138324521936"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.5371356103550629"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.260854556257305"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.7554030465627812"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.19379123403866783"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.2774690054176887"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.4014701919268435"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.2674147364372137"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.22968233772540403"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.5415404979637959"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.28898620306554945"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.44747730429870636"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.863870370350291"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.07203015585311467"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.1479433675011761"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
