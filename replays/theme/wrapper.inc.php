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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.8172202440772092" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.008110307257166882" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.4509541542921498" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.4126333113532732" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.935263986580295" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.38786576945184437" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.007902688412181558"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.8869424472802296" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.695150770709617">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.3943172944893589">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.7623494966785562">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.8953408314517979">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.4291208143233052"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.6705391571301946"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.6659927871301867"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.3625046448358864"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.6606128661334023"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.045671700677638816"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.14628392824354175"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.3464847162555418"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.9905802609126799"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.24025566533353837"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.06809780815357813"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.07724919876126957"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.9129977128804352"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.7390971515736178"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.9417434509841518"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.03326669552084649"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.46813351580537743"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.47967982554064403"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.5531757476405694"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
