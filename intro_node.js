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

// const fs =require('fs')

// let fileindex=(pathtofile,index)=>{
  
//   return new Promise((resolve,reject)=>{

//         fs.readdir(pathtofile,(err,files)=>{
//                 if(err)
//                 {
//                     reject("Error occured while fetching files from Directory");
//                 }
//                 else
//                 {
//                     var name="",contstring="";
//                   for(let i=0;i<files.length;i++)
//                   {
//                       if(i==index)
//                       {  name=files[i];
//                           fs.readFile(files[i],(err,content)=>{

//                               if(err)
//                               {
//                                    reject("Error occured while fetching files from Directory");
//                               }
//                               else{
//                                    contstring = content.toString();
//                               }
//                           })
//                       }
//                   }
//                   let obj={
//                       data:name,
//                       filename:contstring
//                   }
//                   resolve(obj);
                  
//                 }

//         })        

//   })

// }

//  fileindex("./",2).then((res)=>{

//     console.log(res);
// }).catch((err)=>{
    
//     console.log(err);
// })

// let count= " this is me my first report is there";
//  let f=0;

//  for(let i=0;i<count.length;i++){
//      if(count[i]=='t')
//        f++;
//  }

//  console.log(f);

const walk = (path) => {
    return new Promise(async (resolve, reject) => {
        fs.readdir(path, { withFileTypes: true }, (error, files) => {
            if (error) {
                reject("Error");
            }
            resolve(
                files.map(async (file) => {
                    if (file.isDirectory()) {
                        return await walk(path + `/${file.name}`);
                    } else {
                        return file.name;
                    }
                })
            );
        });
    });
};

let readfile=(pathtofile)=>{
    
    return new Promise((resolve,reject)=>{
          fs.readdir(pathtofile,(err,files)=>{
                 
                 if(err)
                 {
                     reject("Error occured while reading directory");
                 }
                 else
                 { let arr=[]
 
                     files.forEach((el)=>{
                            if(!el.includes('.'))
                            {  
                                fs.readdir(el,(err,file)=>{
                                   if(err)
                                   {
                                       reject("Error occured while reading directory");
                                   }
                                   else{
                                       arr.push(file);
                                   }
                                }) 
 
                            }
                            else{
                                arr.push(el);
                            }
                     })
                     
                     resolve(arr);
                     
                 }
          })
    })
 
 }

 const path = require("path");

 function directoryName(name){

  return new Promise ( (resolve, reject) => {

    fs.readdir(name, (error,file1)=> {

      if(error)
        reject(error);
      else{  
          
          
           var count1=0;count2=0;
        for(var i=0; i<file1.length; i++){

          if((file1[i].split("."))[1]){
        
            count1++;     
          }
         
        }
      
        resolve(count1);
      }
        
    });
  });
}


const file = (name) => {
  return new Promise ((resolve,reject) => {

    fs.readdir(name, (error,file)=> {

      if(error)

        reject("Error occured while traversing directory");
      else{

           var count1=0;count2=0;

        for(var i=0; i<file.length; i++){

          if((file[i].split("."))[1]){
        
            count1++;     
          }
          else{
            var newpath = path.join(name,file[i]);

              directoryName(newpath).then(res=>{
                count1 =count1 + res;
              });
              

                count2++;
                
            
          }
        }
         var obj={
           countDir:count2,
           countFile: count1
         }

        resolve(obj);
      }
    });
  });
}; 