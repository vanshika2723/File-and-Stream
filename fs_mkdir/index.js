import {mkdir} from "fs/promises"

async function createDir() {
    const FOLDER="myfolder"
    try{
await mkdir(FOLDER,{recursive:true})
console.log(`Directory is :${FOLDER} is created`)

    }
    catch(err){
// console.log("error while creating ",err)
if(err.code=='EEXIST')
{
    console.log("Directory already exist")
}
    }
    
}

createDir()
