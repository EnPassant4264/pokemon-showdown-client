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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.597012971496284" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.4329693971958861" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.8640036784015717" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.6428333629895537" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.8832801113048541" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.4308645915063507" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.19852575590142973"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.2983071882086057" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.05540268897613676">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.8484409578382979">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.8016705634792085">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.8931993174512258">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.034274832034195235"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.931061864926829"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.29273100775792504"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.012103754887109464"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.9194229406825345"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.7149585929028366"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.019208353336944706"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.8623177330843186"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.758656037093093"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.7772278599731668"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.888649452335202"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.5253307390864972"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.6294043977432269"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.8749505247113001"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.40265156039179617"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.5629661273965068"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.7801237333277102"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.20008771334031716"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.561234531523326"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
