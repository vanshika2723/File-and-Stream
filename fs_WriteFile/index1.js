import {appendFile} from "fs/promises"

async function appendToFile() {
    try{
await appendFile('file1.txt',"/n This is new data ")
console.log("content append to file1")

    }
     catch(err){
        console.log("error occured While append a file",err)
    }
    console.log("file data added successfully")
    
}
appendToFile()