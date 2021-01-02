y=[1,2,3,4];

console.log(...y);
console.log(y);



function createQuote(quote, callback){ 
      var myQuote = "Like I always say, " + quote;
      callback(myQuote); // 2
    };
    
    function logQuote(quote){
      console.log(quote);
    };
    
    createQuote("eat your vegetables!", logQuote); 


    var callback = function() {
            console.log("Hello World!");
        }
        
        setTimeout(callback, 1000);

        var array1 = ['a', 'b', 'c'];
        array1.forEach(function(element) {
              console.log(element);
            });
            

            var fs = require("fs");

fs.readFile("helper.txt", function(err, data) {
  if (err) return console.error(err);
  else console.log(data.toString());
});



var division=(num1,num2,callback)=>{
    
      if(num2!=0)
      {
         var res=num1/num2;
         return callback("no error",res); 
      }
    //   else{
    //     var  res=null;
    //       return callback("num2 shouldn't be zero",res);
    //   }
  
  }
  
  var callback=(err,result)=>{
      if(result==null)
       return err;
  
       else{
           return result;
       }
  
  }

  console.log(division(4,4,callback));



var add=(x,y)=>{
    return x+y;
    }
var sub=(x,y)=>{
 return x-y;
}


var calc=(x,y,callback)=>{
  
  if(callback==add)
  return add(x,y);

  else{
      return sub(x,y);
  }
}

console.log(calc(6,5,sub));

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

console.log(filter10(arr123));
console.log(arr123);

Promise                  
A Promise structure has 2 parts
First part
create the Promise and define the success/

let promise1 = new Promise( (resolve, reject) => {

    let dataReceivedSuccessfully = false;
    if (!dataReceivedSuccessfully)
      resolve('Data Available!');
    if (dataReceivedSuccessfully)
      reject('Data Corrupted!');
    })
    
    //Second part
    //define the actions for when the conditions are fulfilled
    
      promise1.then( (message) => {
       console.log(message);
       }).catch( (message) => {
          console.log(message);
    })


let s="Hello";

let hello=(x)=>{
   
   return new Promise((reslove,reject)=>{
          if(x=="Hello")
           reslove(x+" World!");
           else
            reject("Bye!");
   })
}


hello(s).then((res)=>{
       console.log(res);
 }) .catch((err)=>{
     console.log(err);
 })


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


let loadData= async (value)=>{
     
    if(value>0)
    {
  var obj={
      data:value
  } 
  return obj;
    }
    else{
        throw new Error("Value must be greater than 0");
    }

}

loadData(-34).then((e)=>{
    console.log(e);
}).catch((e)=>{
    console.log(e.message)
})
let str1=(str)=>{

    return new Promise((resolve)=>{
             setTimeout(()=>{
             resolve(str);
             },1000) 
            });
 
 }
 
 
 let f1= async (str)=>{
    const x= await str1(str);    
    return x;
 }
 
 f1("done!").then((e)=>{
     console.log(e);
 })
let func1=(st)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
      resolve(st);
    },5000)
})
  }
  
  let func2=(st)=>{
    
      return st; 
  }
  
  let concatenated= async(str1,str2)=>{
      var st1="",st="";
    st=await func1(str1);
    
    st1=func2(str2);
    
    
   
    return st+st1;
  }
  

  concatenated("hi","hello").then((s)=>{
   console.log(s);
  });
function doubleAfter2Seconds(x) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(x * 2);
        }, 2000);
      });
    }
    
    async function addAsync(x, y, z) {
      const a = await doubleAfter2Seconds(x);
      const b = await doubleAfter2Seconds(y);
      const c = await doubleAfter2Seconds(z);
      return a + b + c;
    }
    
    addAsync(100, 200, 300).then(sum => {
      console.log(sum);
    });
let arr1=[];

var insert=(ch)=>{
    if(arr1.includes(ch))
    return;
    else{
  return new Promise((resolve,reject)=>{
       setTimeout(()=>{
            resolve(arr1.push(ch));
       },1000);
  })
}
}

var adding= async (arr)=>{
     for(let i=0;i<arr.length;i++)
     {
          await insert(arr[i]);
     }
   
}

adding( [
      1, 1, 2, 2, 3, 3,4, 4, 5, 5, 6, 6, 7]).then(()=>arr1);


function *naturalnum() {
    let i=1;
     while(true)
{
    yield i++;
}
}


var obj = naturalnum();
x=1;
while (x<=50) {
  console.log(obj.next());
x++;
}


function *generatorFn(num){
     
    while(num>=0)
    { yield num;
     num--;}


}

var rever = generatorFn(45);
i=45
while(i>=0)
{console.log(rever.next());
i--;}

function* fib(num) {
    var num1=0; 
    var num2=1; 
    var sum; 
 
    if(num==0)
    {
        yield num1;
    }
 if(num==1)
    {
        yield num2;
    }
    else{
   
    for (let i = 2; i < num; i++)  
    { 
        sum=num1+num2; 
        num1=num2; 
        num2=sum; 
    } 
    yield num2;
    }
}

for(let i=0;i<25;i++)
{
    var on= fib(i);
    console.log(on.next());
// }

function* filter(array) {
      let arry = array;
      let i = 0;
      while (i < 3) {
        arry[i] = 0;
        yield arry;
        i++;
      }
    }
    
    gen = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
   
    for (let num of gen) {
      console.log(num);
    }
    

function* filter(array) {
      let arry = array;
      let i = 0;

   for(let i=0;i<arry.length;i++)
     
   
    }
    
    var arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    gen = filter(arr);
    
  console.log(gen.next());
 
