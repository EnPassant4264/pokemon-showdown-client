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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.6092003339289418" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.7568423310883416" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.3142637062253322" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.061403348131681135" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.3544486786536165" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.5550429649054398" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.669060051407564"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.4674870162232836" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.08594701202366384">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.37922418151222725">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.9281562094399134">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.005180782574273568">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.3258182702712076"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.8272176394238244"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.4769134496944354"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.7166087770047953"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.6276702200044293"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.720276556780522"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.2617847154882289"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.4375231915066802"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.6012150845144035"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.18282875751372596"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.7330772935207033"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.19663055575985489"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.4380836458202446"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.26813423951544424"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.8809977569822394"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.8574921482534985"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.7015677139068504"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.3491000166464009"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.9260548389701457"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
