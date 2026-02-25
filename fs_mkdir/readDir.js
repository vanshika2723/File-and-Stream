import {readdir} from "fs/promises"

async function ReadDirectory() {
   const FOLDER="myfolder"
   
    try{
 const files=await readdir(FOLDER)
console.log(`File is '${FOLDER}'` ,files.length>0 ? files:'Empty folder')
    }
    catch(err)
    {
        console.log("Error while redaing",err)
    }
    
}
ReadDirectory()