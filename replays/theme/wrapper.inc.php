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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.817981214469653" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.5291831636188093" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.1762034273783284" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.06935247575602332" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.8818191128744126" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.8752939777565196" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.23926713919579634"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.4059703027562416" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.9605464559486243">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.7974993428858259">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.5067736769365343">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.21354335324191576">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.38304982572841806"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.9681443737302851"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.870839750031924"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.836361527058731"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.935542929705057"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.5948001896626633"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.5505917052665179"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.47476141771537117"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.8928256118272746"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.4279947208862016"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.9709384970158206"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.9310756303690457"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.8654918425113522"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.09151984968030269"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.614926736610329"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.22690697762454182"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.10317179424669831"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.9717624004599625"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.6592344392265317"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
