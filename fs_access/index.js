import fs from "fs/promises"


async function checkFilePermissioons(filepath) {
    try{
        await fs.access(filepath,fs.constants.F_OK)
        console.log(`${filepath} exists`)


          await fs.access(filepath,fs.constants.R_OK)
        console.log(`${filepath} is readable`)

          await fs.access(filepath,fs.constants.X_OK)
        console.log(`${filepath} executable`)

          await fs.access(filepath,fs.constants.W_OK)
        console.log(`${filepath} writeable`)
    }
    catch(err){
        console.log(`${filepath} not accessible`)
    }
}
checkFilePermissioons("example.txt")