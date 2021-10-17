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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.5791776081984186" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.03778796933015394" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.8186781762563649" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.5059903085646404" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.4972270947584885" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.3822705294566522" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.6894412855200145"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.14953183750297283" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.788861080905982">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.3439855239019196">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.6172505691534491">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.892716662263823">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.6183369032921242"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.101612136119414"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.22826871189954767"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.4738369403091922"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.9790657430541869"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.242085664563088"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.8631075749465509"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.8529556073898557"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.29407326034507064"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.3452714427563981"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.4827067147588504"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.7409108422532114"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.6556367137988139"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.1661012400837374"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.19335171402311935"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.4387146736070535"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.6985266152230933"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.9799543881146215"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.7417352152671572"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
