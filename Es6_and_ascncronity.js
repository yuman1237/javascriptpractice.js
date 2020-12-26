y=[1,2,3,4];

console.log(...y);
console.log(y);



// function createQuote(quote, callback){ 
//       var myQuote = "Like I always say, " + quote;
//       callback(myQuote); // 2
//     };
    
//     function logQuote(quote){
//       console.log(quote);
//     };
    
//     createQuote("eat your vegetables!", logQuote); 


    // var callback = function() {
    //         console.log("Hello World!");
    //     }
        
    //     setTimeout(callback, 1000);

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

const posts = [{ title: 'Post one' , body:'This is post one' }];

console.log(posts);

var createPost=(post)=>{
     posts.push(post);
     return posts;

}
setTimeout(createPost, 2000);


var getPost=()=>{
    return posts.pop();
}
setTimeout(getPost, 1000);


console.log(createPost({ title: 'Post one' , body:'This is post one' }));
console.log(createPost({ title: 'Post one' , body:'This is post one' }));

console.log(createPost({ title: 'Post one' , body:'This is post one' }));

console.log(getPost({ title: 'Post one' , body:'This is post one' }));

