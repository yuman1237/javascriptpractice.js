// y=[1,2,3,4];

// console.log(...y);
// console.log(y);



// function createQuote(quote, callback){ 
//       var myQuote = "Like I always say, " + quote;
//       callback(myQuote); // 2
//     };
    
//     function logQuote(quote){
//       console.log(quote);
//     };
    
//     createQuote("eat your vegetables!", logQuote); 


//     var callback = function() {
//             console.log("Hello World!");
//         }
        
//         setTimeout(callback, 1000);

//         var array1 = ['a', 'b', 'c'];
//         array1.forEach(function(element) {
//               console.log(element);
//             });
            

//             var fs = require("fs");

// fs.readFile("helper.txt", function(err, data) {
//   if (err) return console.error(err);
//   else console.log(data.toString());
// });



// var division=(num1,num2,callback)=>{
    
//       if(num2!=0)
//       {
//          var res=num1/num2;
//          return callback("no error",res); 
//       }
//     //   else{
//     //     var  res=null;
//     //       return callback("num2 shouldn't be zero",res);
//     //   }
  
//   }
  
//   var callback=(err,result)=>{
//       if(result==null)
//        return err;
  
//        else{
//            return result;
//        }
  
//   }

//   console.log(division(4,4,callback));



// var add=(x,y)=>{
//     return x+y;
//     }
// var sub=(x,y)=>{
//  return x-y;
// }


// var calc=(x,y,callback)=>{
  
//   if(callback==add)
//   return add(x,y);

//   else{
//       return sub(x,y);
//   }
// }

// console.log(calc(6,5,sub));

// const posts = [{ title: 'Post one' , body:'This is post one' }];

// console.log(posts);

// var createPost=(post)=>{
//      posts.push(post);
//      return posts;

// }
// setTimeout(createPost, 2000);


// var getPost=()=>{
//     return posts.pop();
// }
// setTimeout(getPost, 1000);


// console.log(createPost({ title: 'Post one' , body:'This is post one' }));
// console.log(createPost({ title: 'Post one' , body:'This is post one' }));

// console.log(createPost({ title: 'Post one' , body:'This is post one' }));

// console.log(getPost({ title: 'Post one' , body:'This is post one' }));

var arr123 = [1, 2, 3, 4, 5, 6, 5, 5, 5, 1, 2, 2, 10, 10, 12, 10, 10, 1, 1, 1, 10];

var filter10=(arr)=>{
    let  arr1=[];
    
   for(let i=0;i<arr.length;i++)
     {if(arr[i]!=10)
      arr1.push(arr[i]);}

  
 return arr1;
}

var filter5=(arr)=>{
 
       let arr1=[];

       for(let i=0;i<arr.length;i++)
       {if(arr[i]!=5)
        arr1.push(arr[i]);}
  

  return arr1;
}

var filter=(arr,callback)=>{
if(callback==filter10)
 return filter10(arr);

 else
 return filter5(arr);

}

// console.log(filter10(arr123));
// console.log(arr123);

// Promise                  
// A Promise structure has 2 parts
//First part
//create the Promise and define the success/

// let promise1 = new Promise( (resolve, reject) => {

//     let dataReceivedSuccessfully = false;
//     if (!dataReceivedSuccessfully)
//       resolve('Data Available!');
//     if (dataReceivedSuccessfully)
//       reject('Data Corrupted!');
//     })
    
//     //Second part
//     //define the actions for when the conditions are fulfilled
    
//       promise1.then( (message) => {
//        console.log(message);
//        }).catch( (message) => {
//           console.log(message);
//     })


// let s="Hello";

// let hello=(x)=>{
   
//    return new Promise((reslove,reject)=>{
//           if(x=="Hello")
//            reslove(x+" World!");
//            else
//             reject("Bye!");
//    })
// }


// hello(s).then((res)=>{
//        console.log(res);
//  }) .catch((err)=>{
//      console.log(err);
//  })


let erro=(x)=>{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             
             if(x==false)
             {
                resolve("No error!");
             }
             else{
                 reject("Error occured!");
             }
         },1000);
    })
}


erro(false)
.then(res=> {console.log(res)})
.catch(err=>{console.log(err)});





var fs = require("fs");

function readFile(a) {
  return new Promise(function(resolve, reject) {
    fs.readFile(a,(err, data) => {
    
      if (err) {
        reject("No file found");
      } else {
        resolve(data.toString()); 
      }
    });
  });
}

readFile("helper.txt")
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

