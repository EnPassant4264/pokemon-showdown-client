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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.6325759743689634" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.13077730853358793" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.4720780813672387" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.028760954265242056" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.18904546643088382" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.383921782226033" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.04251901470585673"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.9540190233685126" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.682896174508915">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.9169346915237613">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.36081756287759936">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.9625151457831769">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.5413230809747192"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.5596474351886049"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.5857314542578698"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.5700641327289777"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.40502385967261634"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.959526898288295"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.916700657749111"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.4551394486541198"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.9218026948291094"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.4698145274210961"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.5644482391679082"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.6521757015996557"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.014277006115446467"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.6324939749759317"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.3378125374260357"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.08418987789774213"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.21074825060383673"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.026175040194341026"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.04101541323886293"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
