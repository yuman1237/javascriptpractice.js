// const path = require("path"); 

 

// let fib=(pathtofile,pos, str)=>{
//     let finaljoin="";  
// if(pos=="start")
//  {
//      finaljoin =path.join(str,pathtofile);
//  }
// else if(pos=="end")
// {
//     finaljoin=path.join(pathtofile,str);
// }

// return obj={
//      base_name : path.basename(pathtofile),
//      dir_name : path.dirname(pathtofile),
//      finaljoin: finaljoin
//          }

// }
// //console.log(fib("/home/mayank_banga/Konfinity/madi.txt","start","hey"));

// let path1 = "/home/mayank_banga";
// let path2 = "Konfinity";
// let path3 = "manual.txt";

// // joining the 3 paths mentioned above

// let final_path = path.join(path1, path2, path3);

// // printing the combined path
// console.log(final_path);
// const fs = require("fs")

// var file_prop=(filename)=>{
        
//         return new Promise((resolve,reject)=>{
              
//             fs.readdir(filename, (error, files) => {
//                   if (error) {
//                     // checking whether any error occurs while reading directory
//                     reject(error); // if an error occurs then throw that error
//                   } else {
//                     resolve(files); // if error did not occur the print the list of files.
//                   }
                
//             })

//         })

// }


// file_prop('').then((res)=>{
//     console.log(res);
// });

const fs =require('fs')

let fileindex=(pathtofile,index)=>{
  
  return new Promise((resolve,reject)=>{

        fs.readdir(pathtofile,(err,files)=>{
                if(err)
                {
                    reject("Error occured while fetching files from Directory");
                }
                else
                {
                    var name="",contstring="";
                  for(let i=0;i<files.length;i++)
                  {
                      if(i==index)
                      {  name=files[i];
                          fs.readFile(files[i],(err,content)=>{

                              if(err)
                              {
                                   reject("Error occured while fetching files from Directory");
                              }
                              else{
                                   contstring = content.toString();
                              }
                          })
                      }
                  }
                  let obj={
                      data:name,
                      filename:contstring
                  }
                  resolve(obj);
                  
                }

        })        

  })

}

fileindex("javascriptpractice.js",2).then((res)=>{

    console.log(res);
}).catch((err)=>{
    
    console.log(err);
})