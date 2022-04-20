const fs = require("fs"); //This imports the fileSystem module
const fileToRead = process.argv[2];
const fileToWrite = process.argv[3];
const baconRegx = /\bbacon\b/gi; //this is a regex looking for the word bacon using a word boundary

fs.readFile(fileToRead, "utf-8", (err, data) => {
	if (err) throw err;
	const result = data.replace(baconRegx, "test");
	const count = data.match(baconRegx).length;
	console.log(count);

	fs.writeFile(fileToWrite, result, (err) => {
		if (err) throw err;
		console.log("file Written");
	});
});

/* --- ANCHOR rework so that I can change the word found/change via command line --- */
