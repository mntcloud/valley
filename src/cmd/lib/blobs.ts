import { Command } from "@cliffy/command";
import sdk from "~/sdk.ts"


const setBlobCmd = new Command()
    .name("set")
    .arguments("<name> <path>")
    .action(async (_: unknown, name: string, path: string) => {
        const stream = await Deno.readFile(path)

        await sdk.blobs.store(name, { body: stream.buffer })
    })

export const blobsCmd = new Command()
  .name("blobs")
  .description("Manage blobs")
  .command("list")
  .command("set", setBlobCmd)
  .command("get")
  .command("del")