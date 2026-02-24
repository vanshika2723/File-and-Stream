
import {readFileSync} from "fs"

console.log("Reading file application")

try{
const file1=readFileSync('example.txt','utf8')
console.log("file1 data:",file1)
}
catch(err){
console.log("Error Reading file",err)
}