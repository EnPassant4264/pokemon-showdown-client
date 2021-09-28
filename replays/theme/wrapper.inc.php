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
	<link rel="stylesheet" href="//dragonheaven.herokuapp.com/style/font-awesome.css?0.44385208812526944" />
	<link rel="stylesheet" href="//dragonheavenserver.herokuapp.com/theme/panels.css?0.8579671633596269" />
	<link rel="stylesheet" href="//dragonheavenserver.herokuapp.com/theme/main.css?0.5769665510010173" />
	<link rel="stylesheet" href="//dragonheaven.herokuapp.com/style/battle.css?0.9590305972752395" />
	<link rel="stylesheet" href="//dragonheaven.herokuapp.com/style/replay.css?0.8006548484565277" />
	<link rel="stylesheet" href="//dragonheaven.herokuapp.com/style/utilichart.css?0.9854306900843082" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//dragonheavenserver.herokuapp.com/?0.5385951666755757"><img src="//dragonheavenserver.herokuapp.com/images/pokemonshowdownbeta.png?0.90096659353359" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.8927531893417526">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.1101830145820708">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//dragonheavenserver.herokuapp.com/ladder/?0.5802640226681863">Ladder</a></li>
				<li><a class="button nav-last" href="//dragonheavenserver.herokuapp.com/forums/?0.7821474375710842">Forum</a></li>
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
	<script src="//dragonheaven.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.5921110860695622"></script>
	<script src="//dragonheaven.herokuapp.com/js/lib/lodash.core.js?0.23082034509822447"></script>
	<script src="//dragonheaven.herokuapp.com/js/lib/backbone.js?0.3107688292170736"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.09151248818107804"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//dragonheaven.herokuapp.com/js/lib/jquery-cookie.js?0.20352809735335353"></script>
	<script src="//dragonheaven.herokuapp.com/js/lib/html-sanitizer-minified.js?0.3382448506892022"></script>
	<script src="//dragonheaven.herokuapp.com/js/battle-sound.js?0.9339954320298494"></script>
	<script src="//dragonheaven.herokuapp.com/config/config.js?0.14374728373086176"></script>
	<script src="//dragonheaven.herokuapp.com/js/battledata.js?0.524804270621156"></script>
	<script src="//dragonheaven.herokuapp.com/data/pokedex-mini.js?0.05127724246606791"></script>
	<script src="//dragonheaven.herokuapp.com/data/pokedex-mini-bw.js?0.7151450200088334"></script>
	<script src="//dragonheaven.herokuapp.com/data/graphics.js?0.9000952673955471"></script>
	<script src="//dragonheaven.herokuapp.com/data/pokedex.js?0.6281982593621622"></script>
	<script src="//dragonheaven.herokuapp.com/data/items.js?0.8835722974269329"></script>
	<script src="//dragonheaven.herokuapp.com/data/moves.js?0.22503739385228316"></script>
	<script src="//dragonheaven.herokuapp.com/data/abilities.js?0.9575782038999863"></script>
	<script src="//dragonheaven.herokuapp.com/data/teambuilder-tables.js?0.5792040047108775"></script>
	<script src="//dragonheaven.herokuapp.com/js/battle-tooltips.js?0.487211241322699"></script>
	<script src="//dragonheaven.herokuapp.com/js/battle.js?0.8614329344017939"></script>
	<script src="/js/replay.js?c81925c8"></script>

</body></html>
<?php
}
