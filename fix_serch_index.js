const { readFile, writeFile } = require("fs/promises");

const FILENAME = "./site/search/search_index.json";

// Read file and parse json

(async () => {
  const fData = await readFile(FILENAME, "utf8");
  const data = JSON.parse(fData);

  // save JSON to file
  const json = JSON.stringify(data, null, 2);
  await writeFile(FILENAME, json);

  console.log("Done.");
})();
