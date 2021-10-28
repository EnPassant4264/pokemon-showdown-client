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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.5125488158623517" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.02119721922951978" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.5099667333236457" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.7390030896332147" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.051458263096960444" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.1194483854767674" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.9630930298976577"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.47650153278139484" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.5290405788076764">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.5552191066992458">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.1683051746147881">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.5792190066772087">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.03571971806568364"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.3928006859160027"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.2230301297728301"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.24412195566581363"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.07047046228421983"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.8068175180799035"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.5747330559535655"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.6460168328109599"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.9092793308781484"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.05475464632692795"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.30857320513352016"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.25959313034823395"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.9087583889166864"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.5254333225644299"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.7486163161298194"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.5732800568911931"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.36369090550195793"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.6753627523946089"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.9534558085353877"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
