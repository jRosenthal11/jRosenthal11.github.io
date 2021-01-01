import { Message, User } from "discord.js";
import { Queue } from "./Queue";
import { SongQueue } from "./SongQueue";

export interface Command {
    name: string;
    description: string;
    execute(commandArgs: CommandArgs): void;
}
export interface CommandArgs {
    songQueue: SongQueue;
    msg: Message;
    serverQueue: Queue;
    skipMsg: User[];
    totalVotes: number;
}