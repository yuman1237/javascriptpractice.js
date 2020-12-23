// var sammy = {
//     first_name: "Sammy",
//     last_name: "Shark",
//     online: true
//   };

 // console.log(JSON.stringify(sammy))

 var _=require("lodash");
 function ob(arr) {
  var prop1 = [], prop2 = [];
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].readingStatus === true) {
      prop1.push(arr[i].title, arr[i].author);
    }
    else if (arr[i].readingStatus === false) {
      prop2.push(arr[i].title, arr[i].author);
    }
  }

  obj.prop1 = prop1;
  obj.prop2 = prop2;

  return obj;

}

 var library = [
  {
      title:"the Book" ,
      author:"yumna" ,
      readingStatus: true
  },
  {
      title:"this is joke" ,
      author:"ismail" ,
      readingStatus: false
  },
  ];

 // console.log(ob(library));


  var ob2=(obj)=>{
   var  prop1=[];
   var  prop2=0;
    var obj1={} ;
    
    for(let i=0;i<obj.length;i++)
    {
        if(obj[i].id && obj[i].id!="undefined")
        {
            prop1.push(obj[i]);
        }
        else if(obj[i].id=="undefined")
        {
            prop2++;
        }
        else{
            prop2++;
        }
    }

    obj1.prop1=prop1;
    obj1.prop2=prop2;
    return obj1;
    
    }
    var arr123 = [
        { id: 15 },
        { id: -1 },
        { id: 0 },
        { id: 3 },
        { id: 12.2 },
        {},
        { id: null },
        { id: NaN },
        { id: "undefined" }
      ];

  //  console.log(ob2(arr123));

// var ob123= ()=>{
    
    
    
     
     
//       if (obj1.steps <= 1) 
//            return obj1.steps; 
   
//           return ob123(obj1.steps - 1) + ob123(obj1.steps  - 3); 
         
//      //  console.log(obj1.ability[0]);
   
//      }
     
//    function countWays(s) 
//    { 
//        return ob123(s + 1); 
//    } 
   
   ob1 = {
      steps: 4,
      ability: [1, 3]
    };
    
   // console.log(countWays(ob1));
 //ob123(ob1);


//  const traverse = (obj) => {
   
//   var x;
//  for (let k in obj) {
//    if (obj[k] && typeof obj[k] ==='object') {
//     //console.log( obj[k].name);
//     x+=obj[k].contents+'\n';
//     traverse(obj[k]);
  
//  }
// return x;
// }

//  }



 
  function task14(obj){
    var res = "";
    for(var element in obj){

        if(obj[element]&&typeof(obj[element])==="object")
            res +=task14(obj[element]);
        else
            res += obj[element] + "\n"; 

    }
return res;
}

//console.log(task14(data1));

var data1 = {
    name: "root",
    contents: [
      {
        name: "A",
        contents: [
          {
            name: "fileA1",
            contents: ["Hello!"]
          }
        ]
      },
      {
        name: "B",
        contents: [
          {
            name: "dirB1",
            contents: [
              {
                name: "fileB1.1",
                contents: ["Hello!"]
              }
            ]
          }
        ]
      }
    ]
  };
  
  function dfs(data){
    console.log(data.name || data)
    if(!data.contents){
      return
    }
     data.contents.map(obj => dfs(obj))
  }
  
  dfs(data1);
// var sum =(obj)=>{

//   var sum=0;
// for(k in obj)
// {
//   if(obj[k].isForceUser)
//   {
//     sum+= obj[k].shootingScore + obj[k].pilotingScore;
//   }
// }
// return sum;

// }





// var personnel = [
//   {
//     id: 5,
//     name: "Luke Skywalker",
//     pilotingScore: 98,
//     shootingScore: 56,
//     isForceUser: true
//   },
//   {
//     id: 82,
//     name: "Sabine Wren",
//     pilotingScore: 73,
//     shootingScore: 99,
//     isForceUser: false
//   }
// ];

//console.log(sum(personnel));



// var car = [
//     {
//       title: "buy meal",
//       isDone: false
//     },
//     {
//       title: "come office on time",
//       isDone: true
//     },
//     {
//       title: ["BMW", "Mercedez", "maruti"],
//       isDone: true
//     }
//   ];
//   var Car =(obj)=>{

//     var arr=[];
     
//      for(k in obj)
//      {
//          if(obj[k].isDone)
//          {
//             arr.push(obj[k].title);
//          }
    
//      }
//      return arr.flat();
//     }

   //console.log(Car(car));


// var r8=(obj)=>
// {
  
//   for(k in obj)
//   {
//       if(obj[k].isDone)
//       {
//           if(obj[k].title[1][0].id===01)
//           {
//               return obj[k].title[1][0].name;
//           }
//       }
//   }


// }
// var car1 = [
//     {
//       title: "buy meal",
//       isDone: false
//     },
//     {
//       title: "come office on time",
//       isDone: false
//     },
//     {
//       title: ["BMW", [{ id: 01, name: "R8" }, { id: 02, name: "r7" }], "maruti"],
//       isDone: true
//     }
//   ];
 // console.log(r8(car1));


//  var duplicate=(obj)=>{
    
//   var arr=[];
//   isPresent=false;
   
//    if(obj.servings.length==0)
//    return 0;
   
//    for(let i=0;i<obj.servings.length;i++)
//    {
//        for(let j=i+1;j<obj.servings.length;j++)
//        {
//            if(obj.servings[i]===obj.servings[j])
//             {  
//                if(arr.includes(obj.servings[i]))
//                {
//                   break;
//                }
//             else
//               {  arr.push(obj.servings[i]);
//                 isPresent=true;
//               }
//             }
//        }
//    }

//    if(isPresent)
//    return arr;
// }

//module.exports=duplicate;



// var recipe = {
//   title: "mole",
//   servings: [2, 5, 7, 9,7,9, 6, 9,5, 4, 4],
//   ingredients: ["cumin", "cinnamon", "cocoa"]
// };

//console.log(duplicate(recipe));


// var pattern=(rows,str1)=>{
       

//   var obj={
//     rows:rows,
//     str1:str1,
//     pyramid:function(rows,str1)
//     {  
//       var str3="";
//         for (let i = 1; i <= rows; i++)
//           {
              
//               for (let j = rows; j > i; j--)
//               {
//                   str3+=" ";
//               }
             
//               for (let k = 1; k <= (i * 2) - 1; k++)
//               {
//                   str3+=str1;
//               }
//               str3+="\n";
//           }
//       return str3;
//     },
  
//    diamond: function(rows,str1)
//    {   
//         var i,j,str3="";
//         for(i=0;i<rows;i++)
//         {
//             for( j=rows-2;j>=i;j--)
//             {
//                 str3+=" ";
//             }
//             for(j=0;j<=i;j++)
//             {
//               str3+=str1+" ";
//             }
//             str3+="\n";
  
//         }
//           for( i=0;i<rows;i++)
//         { 
  
//              for(j=0;j<i;j++)
//             {
//                 str3+=" ";
//             }
//             for( j=rows-1;j>=i;j--)
//             {
//                 str3+=str1+" ";
//             }
           
//             str3+="\n";
  
//         }
  
//      return str3;
//    }  
  
  
//   }
  
//   return obj.diamond(3,"*");
  
// }

 // console.log(pattern(3,"8"));
 //console.log(" this is me\n hi there")


  
var ob=(obj1)=>{
 
  if (obj1.steps <= 1) 
       return obj1.steps; 

      return ob( obj1.ability[0]- 1) + ob(obj1.ability[1]  - 2); 
     
   

 }
 
function countWays(s) 
{ 
   return ob(s + 1); 
} 

ob1 = {
    steps: 4,
    ability: [1, 3]
  };
 console.log(ob(ob1));  


  