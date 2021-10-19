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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.4229514684259337" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.5408509703607605" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.831826948912457" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.7723607547794249" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.26428369567272636" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.3356570992558201" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.3819958528328502"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.6768339394530076" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.6788276886969089">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.44373016855950786">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.49221570900111056">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.057769656793286384">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.6422859228419393"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.1823839564272436"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.16818328286561623"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.8247412250430499"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.06531678539766328"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.22101473578128328"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.7956484423548031"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.9812439717520756"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.8383904575558347"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.2891275172994192"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.6484301357327893"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.3303800501898315"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.788342740730299"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.4768251065732325"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.2235990217822157"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.6060316376538064"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.49539635926191883"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.8810523769252319"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.3095314281014332"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
