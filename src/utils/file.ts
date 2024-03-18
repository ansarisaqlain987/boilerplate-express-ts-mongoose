import { readdirSync } from "fs"
import path from "path";

const getFileNames = (folder: string) => {
    const filenames = readdirSync(folder);
    return filenames;
}

export default {
    getFileNames
}