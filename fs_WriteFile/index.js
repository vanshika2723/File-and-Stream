import fs from "fs/promises"

const content="this is file 1";
const content1="this is file 2";
const content2="this is file 3";

async function  createFile() {
    try{
       await fs.writeFile('file1.txt',content)
       console.log("file1 created")
       await fs.writeFile('file2.txt',content1)
       console.log("file2 created")
       await fs.writeFile('file3.txt',content2)
       console.log("file3 created")
    }
    catch(err){
        console.log("error occured during create a file",err)
    }
    console.log("file created successfully")
}

createFile()