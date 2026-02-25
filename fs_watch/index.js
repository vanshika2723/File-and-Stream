import { watch, mkdir } from "fs/promises";
import fs from "fs";

const folder = "MyFolder";

async function WatchFolder() {
  await mkdir(folder, { recursive: true });
  console.log(`Watching folder:'${folder}'`);

  for await (const event of watch(folder)) {
    console.log(`${event.eventType.toUpperCase()}:${event.filename}`);
  }
}

WatchFolder().catch(console.error)
