import path from "path"


const folder="documents"
const filename="report.txt"


//path.join

const filepath=path.join(folder,filename)
console.log("Joined path",filepath)

//path.format


const formattedpath=path.format({
    dir:folder,
    name:'summary',
    ext:'pdf'

})

console.log("Formatted path:",formattedpath)