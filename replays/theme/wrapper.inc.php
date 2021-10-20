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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.8967188430437265" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.6310540870572323" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.5285285428655631" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.40380433277241656" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.38731068522001566" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.2157923221954814" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.5046336451621356"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.4377087085094289" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.7528146736331733">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.468800757412851">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.044931852833306696">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.49196398930978913">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.653105952428106"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.03856120404067065"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.1657512804962129"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.4540118386713048"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.013772054491796526"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.14181701277751846"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.7077868669168255"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.5064976293761503"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.19650197347390996"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.39508126245427255"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.8405625225401467"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.8512335325962772"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.0695259715595904"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.8650274376051414"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.36859864875823223"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.2959012728795549"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.888950224060661"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.5509355242108578"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.13778487493579172"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
