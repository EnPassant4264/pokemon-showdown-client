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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.5063889483594286" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.9166865267464246" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.8641851796752162" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.920723659983842" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.8980221540758324" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.46637922209069393" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.30491600770409155"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.7825449636413284" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.6776982746810423">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.19558946380024356">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.3942900875699329">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.9558052580352654">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.4702589401226578"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.29131338296884746"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.25919681073675216"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.42967884485245955"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.39385250744502853"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.008609657686639238"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.8282494186126894"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.7477511657942595"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.7552237111137534"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.8501759356001335"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.9790234427532423"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.12387803043031398"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.6408078973703488"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.11438532497688136"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.4372268722761614"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.43807900068993644"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.590147320574042"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.865375188527415"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.9650615144432733"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
