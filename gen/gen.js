var fs = require('graceful-fs');
var util = require('util');

function requireNoCache(pathSpec) {
	delete require.cache[require.resolve(pathSpec)];
	return require(pathSpec);
}

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

const Pokedex = requireNoCache('./pokedex.js').Pokedex;
const FormatsData = requireNoCache('./formats-data.js').FormatsData;
var modPrint = '';
fs.readdirSync("./mods/").forEach((folder) => {
	fs.readdirSync("./mods/" + folder + '/').forEach((file) => {
		if (file == 'pokedex.js') {
			fs.readFileSync("./mods/" + folder + '/' + file, 'utf-8').split('\n').forEach(function(line){
				if (!line.includes('\t\t') && line.includes(' : {')) line = line.replace(' : {', ': {\n');
				if (!line.includes('\t\t') && line.includes(': {')) modPrint += line.replace(': {', folder + ': {\n');
				else if (line.includes('name: ')) modPrint += line.replace('",', '-' + toTitleCase(folder) + '",\n');
				else modPrint += line + '\n';
			})
			fs.writeFileSync("./mods/" + folder + '/pokedex-' + folder + '.js', modPrint);
			modPrint = '';
			var mod = requireNoCache("./mods/" + folder + '/pokedex-' + folder + '.js').Pokedex;
			Object.assign(Pokedex, mod);
		}
		if (file == 'formats-data.js') {
			fs.readFileSync("./mods/" + folder + '/' + file, 'utf-8').split('\n').forEach(function(line){
				if (!line.includes('\t\t') && line.includes(' : {')) line = line.replace(' : {', ': {\n');
				if (!line.includes('\t\t') && line.includes(': {')) modPrint += line.replace(': {', folder + ': {\n');
				else if (line.includes('tier: ')) modPrint += line.replace(': "', ': "' + toTitleCase(folder) + ' ') + '\n';
				else modPrint += line + '\n';
			})
			fs.writeFileSync("./mods/" + folder + '/formats-data-' + folder + '.js', modPrint);
			modPrint = '';
			var mod = requireNoCache("./mods/" + folder + '/formats-data-' + folder + '.js').FormatsData;
			Object.assign(FormatsData, mod);
		}
	})
})
fs.writeFileSync('smashdex.js', util.inspect(Pokedex));
fs.writeFileSync('smashformats.js', util.inspect(FormatsData));