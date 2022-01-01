import { readFileSync, writeFileSync } from 'fs';
const filesToCopy = [
	{ source: './src/Card.js', destination: './dist/Card.js' },
	{ source: './exporter.js', destination: './dist/exporter.js' }
]

filesToCopy.forEach( (file) => {
	const inputFile = readFileSync(file.source);
	writeFileSync(file.destination, inputFile);
	console.log(`...wrote ${file.source} to ${file.destination}`);
});
console.log('Done!');
