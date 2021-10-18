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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.2513104902305159" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.14335668687770564" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.1321572387602752" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.3958704919528977" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.46023192318382966" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.5710857523165769" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.9521701429665697"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.8845132010110668" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.5262906062797221">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.6713994514237382">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.07392767058414251">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.39263711756161146">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.7908272427097072"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.5511883664485409"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.869941425446666"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.0924532730240919"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.8756846381361738"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.043011663724306315"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.021607986954207625"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.7162681491309404"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.11771758504554475"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.14899725436975708"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.79518818277482"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.9884969073964966"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.3325666653624668"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.15939611237865758"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.608571994188146"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.3106660826650125"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.009067396689315332"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.7437723817748274"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.8936093267805829"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
