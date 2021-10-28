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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.2928504901282385" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.8069140352121593" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.4164633671548559" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.972503705406655" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.9843851842082691" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.958956711708252" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.16422034961006182"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.889862565662159" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.35150558511749175">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.8513286578285926">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.9620364263040331">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.03700806515169219">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.5035904049189792"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.18212719590103932"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.7364649861046972"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.010412760423118117"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.41652665497477215"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.47149861638719903"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.3930705146432447"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.7484440373053729"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.2779286634695035"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.9385373634282965"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.2536591252032798"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.10226555658024172"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.8713609603299859"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.25381022960624455"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.17947395988898407"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.5858768191965784"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.5223394919709305"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.6281615125685029"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.868141768168474"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
