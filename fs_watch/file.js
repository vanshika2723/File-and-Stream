import { watch } from "fs/promises";
import { writeFile } from "fs/promises";

const files = "MyFolder/text.txt";
const content = "hello pw";
async function WatchFile() {
  await writeFile(files, content, { flag: "w" });
  console.log(`Watching file:${files}`);

  for await (const event of watch(files)) {
    console.log(`${event.eventType.toUpperCase()}:${files}`);
  }
}

WatchFile().catch(console.error)
