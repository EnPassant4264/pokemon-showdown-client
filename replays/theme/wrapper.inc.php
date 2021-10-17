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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.33039865105338273" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.7849916546363804" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.7777394482283717" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.7549268969710026" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.01421284953626567" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.03136680037699646" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.2206665518920954"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.9590565888185998" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.389019570516314">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.14920052146812157">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.6529067617376478">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.9052628756797587">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.41091300997154545"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.47080111039572725"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.7543183344768838"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.9476353279406746"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.7985669374134203"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.5499553318352017"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.5949444588793067"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.21445013693601522"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.9873384621061094"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.6017898694453934"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.5703161902726965"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.7800844683029236"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.21158997882099828"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.4267475142377508"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.8690062190336034"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.5635802909072813"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.9661048321931887"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.40449750451350397"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.04720194488372598"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
