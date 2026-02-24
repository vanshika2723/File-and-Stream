import fs from "fs";

fs.stat("example.txt", (err, stats) => {
  if (err) return console.log("error ", err);
  console.log("File Properties:");
  console.log(`Size:${stats.size} bytes`);
  console.log(`Created by:${stats.birthtime}`);
});
