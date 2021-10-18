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
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/font-awesome.css?0.7145610716140545" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/panels.css?0.6701012382392459" />
	<link rel="stylesheet" href="//randommons-server.herokuapp.com/theme/main.css?0.22830523880202636" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/battle.css?0.44830762000849433" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/replay.css?0.6444792655725853" />
	<link rel="stylesheet" href="//randommons.herokuapp.com/style/utilichart.css?0.3836378697572105" />

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
				<li><a class="button nav-first<?php if ($panels->tab === 'home') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/?0.8203160859609389"><img src="//randommons-server.herokuapp.com/images/pokemonshowdownbeta.png?0.8130504340267752" alt="Pok&eacute;mon Showdown! (beta)" /> Home</a></li>
				<li><a class="button<?php if ($panels->tab === 'pokedex') echo ' cur'; ?>" href="//dex.pokemonshowdown.com/?0.09948922477644806">Pok&eacute;dex</a></li>
				<li><a class="button<?php if ($panels->tab === 'replay') echo ' cur'; ?>" href="/?0.07808564353261649">Replays</a></li>
				<li><a class="button<?php if ($panels->tab === 'ladder') echo ' cur'; ?>" href="//randommons-server.herokuapp.com/ladder/?0.43002133284004196">Ladder</a></li>
				<li><a class="button nav-last" href="//randommons-server.herokuapp.com/forums/?0.23685446441739844">Forum</a></li>
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
	<script src="//randommons.herokuapp.com/js/lib/jquery-1.11.0.min.js?0.3245140321758775"></script>
	<script src="//randommons.herokuapp.com/js/lib/lodash.core.js?0.8670814867511905"></script>
	<script src="//randommons.herokuapp.com/js/lib/backbone.js?0.3946158792525405"></script>
	<script src="//dex.pokemonshowdown.com/js/panels.js?0.056276048804205336"></script>
<?php
}

function ThemeFooterTemplate() {
	global $panels;
?>
<?php $panels->scripts(); ?>

	<script src="//randommons.herokuapp.com/js/lib/jquery-cookie.js?0.5321616992989304"></script>
	<script src="//randommons.herokuapp.com/js/lib/html-sanitizer-minified.js?0.11413784111895042"></script>
	<script src="//randommons.herokuapp.com/js/battle-sound.js?0.4103785734865222"></script>
	<script src="//randommons.herokuapp.com/config/config.js?0.47362387787486293"></script>
	<script src="//randommons.herokuapp.com/js/battledata.js?0.47530381829063506"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini.js?0.3323543470028496"></script>
	<script src="//randommons.herokuapp.com/data/pokedex-mini-bw.js?0.3516600684940616"></script>
	<script src="//randommons.herokuapp.com/data/graphics.js?0.950472710773071"></script>
	<script src="//randommons.herokuapp.com/data/pokedex.js?0.6764339229536882"></script>
	<script src="//randommons.herokuapp.com/data/items.js?0.4479654044063801"></script>
	<script src="//randommons.herokuapp.com/data/moves.js?0.5602215905343766"></script>
	<script src="//randommons.herokuapp.com/data/abilities.js?0.7767651356354597"></script>
	<script src="//randommons.herokuapp.com/data/teambuilder-tables.js?0.38320638782407745"></script>
	<script src="//randommons.herokuapp.com/js/battle-tooltips.js?0.6043117337244022"></script>
	<script src="//randommons.herokuapp.com/js/battle.js?0.3059525149863531"></script>
	<script src="/js/replay.js?6887ea68"></script>

</body></html>
<?php
}
