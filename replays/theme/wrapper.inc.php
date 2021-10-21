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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.8780768705985531" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.4454122154047848" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.7168332512028894" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.5352070687947388" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.6563485369685835" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.2796512127716384" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.950634373726615"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.8687154551435474" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.9822176500646258">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.34533148884845266">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.73521472473363">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.6241249421554484">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.4349626659678274"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.10217486820927424"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.9274190180494255"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.4914786268828124"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.6403848171663924"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.609270843605449"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.10833706133877663"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.1080599557231483"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.933883778287357"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.9712984618339431"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.12059605560247766"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.1493258179437098"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.8585088118606035"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.5963806385717891"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.7324362960272126"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.5716000429691226"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.9101365512073147"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.030777631931211413"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.7080768767542498"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
