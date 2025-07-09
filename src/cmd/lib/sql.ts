import { Command } from "@cliffy/command";
import sdk from "~/sdk.ts"


const sqlExecuteCmd = new Command()
    .name("exec")
    .arguments("<query>")
    .action(async (_: unknown, query: string) => {
        const resp = await sdk.sqlite.execute({
          statement: query
        })

        console.log(resp)
    })

export const sqlCmd = new Command()
  .name("sql")
  .description("Manage SQLite")
  .command("exec", sqlExecuteCmd) 