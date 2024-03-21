import { readdirSync } from "fs"
import path from "path";

export const getFileNames = (folder: string) => {
    const filenames = readdirSync(folder);
    return filenames;
}
