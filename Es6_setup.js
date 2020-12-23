// let obj = {things: 3};
// let addThings = function(a, b, c){
//  return this.things + a + b + c;
// };
// let arr = [5,4,6,5,6];
// //console.log( addThings.apply(obj, arr) );

// var numberSystem={

//     numberData: {
//         primeNumbers:19,
//         fibonacci: 6
//     },
//     sum_prime_number:function()
//     {
//       checkPrime=( numberToCheck)=>
//     {
//         if(numberToCheck == 1) {
//             return false;
//         }
//         for ( i = 2; i*i <= numberToCheck; i++) {
//             if (numberToCheck % i == 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
    
//         var sum = 0;
//         for (let i = this.numberData.primeNumbers-1; i >= 2; i--) {
    
        
//          isPrime = checkPrime(i);
//             if (isPrime) {
     
        
//                 sum = sum + i;
//             }
//         }
//         return sum;
    
//     } ,
    
    
//     fibonacci_Nth_term: function()
//     {
//       if (this.numberData.fibonacci<= 1) 
//                 return this.numberData.fibonacci; 
    
                
//             return fibonacci_Nth_term(this.numberData.fibonacci - 1) + fibonacci_Nth_term(this.numberData.fibonacci - 2); 
//     }
    
    
//     }
//console.log(numberSystem.fibonacci_Nth_term());

// fibonacci_Nth_term=(numberData)=>
// {
//   if (numberData<= 1) 
//             return numberData; 

            
//         return fibonacci_Nth_term(numberData - 1) + fibonacci_Nth_term(numberData - 2); 
// }

// console.log(fibonacci_Nth_term(6));

//let x="25yrs";

//console.log(parseInt(x));


// function jobAssurance(name,age,gender,experience){
     
//     this.name= (gender=='M') ? "Mr. "+name :"Mrs. "+name;
    
//     this.age=parseInt(age);
//     this.gender=gender;
//     this.experience=parseInt(experience);
 
//   this.isEligible=function(){
//     if (this.age>17)
//     return true ;
//     else 
//     return false;
//   };
//  this.isExperienced=function(){
  
//  if(this.experience>4)
//  return true;
 
//  else
//  return false;
//  };
//  this.getStatus=function(){
 
//     if(this.isEligible()&& this.isExperienced())
//     return "Congratulation "+this.name+", your job is assured";
 
//  else
//      return "Sorry "+this.name+", we can not assure your job";
  
 
//  };
  
//  }
// var x=new jobAssurance("ramesh","25yrs","M","5yrs");

// // console.log(x.isEligible());
// console.log(x.isExperienced());

// // console.log(x.getStatus());
// class Person{
   
//      Name=[];
//     constructor(Name=[],age,gender,interests)
//     {
//         this.Name[0]=Name[0];
//         this.Name[1]=Name[1];
//         this.name=this.Name[0]+" "+this.Name[1];
//         this.age=age;
//         this.gender=gender;
//         this.interests=interests;
//     }
  
//     Bio(){
//         return `${this.name} is ${this.age} years old.They like ${this.interests}`;
//     }
   
//      Greeting(){
//          return `Hi! I'm ${this.name}.`;
//      }
  
//   }
  
//var person = new Person(["yuman","nasim"],12,"M","sports");
// var person = new Person(Name=["yuman","nasim"],12,"M","sports");
// console.log(person.Bio());
// console.log(person.Greeting());

//var arr123=[[1,2,3,8,1,2], [54,26,14,54], [81,4,6,84]];

//console.log(arr123);


// var duplicate=(obj)=>{
    
//       var arr=[10][10];
//       isPresent=false;
       
//        if(obj.length==0)
//        return 0;
//        for(let k=0;k<obj.length;k++)
//        {
//        for(let i=0;i<obj[k].length;i++)
//        {
//            for(let j=i+1;j<obj[k].length;j++)
//            {
//                if(obj[k][i]===obj[k][j])
//                 {  
                 
//                    arr[k][i].push(obj[k][i]);
//                     isPresent=true;
                
//                 }
//            }
//        }
//        }
//        if(isPresent)
//        return arr;
//     }

   // console.log(duplicate(arr123));
  // const m = 4;
// const  n = 5; // Note 2nd dimention is not relevant here
// let arr7 = [];
// for (var i = 0; i < m; i++) {
//   arr7[i] = [i];
// }
// console.log(arr7);



// var arr123=[[1,2,3,8,1,2], [54,26,14,54], [81,4,6,84]];


// function removeDuplicates(arr){
// 	const uniq = new Set()
  
// 	return arr.filter(el => {
//   	if(!uniq.has(el)){
//     	uniq.add(el)
//       return true
//     }
//   })


// }


// var x=(arr)=>
// {
    
// var arr1=  arr.map((sub_arr, i) => (
//     removeDuplicates(sub_arr)
//     )
//     );
//     let myMap=new  Map();
//     for(let i=0;i<arr1.length;i++)
//     {
//         myMap.set(i,arr1[i]);
//     }
//     return myMap;
// }

// console.log(x(arr123));


// function power( x, y) 
//     { 
//         if( y == 0) 
//             return 1; 
//         if (y%2 == 0) 
//             return power(x, y/2)*power(x, y/2); 
//         return x*power(x, y/2)*power(x, y/2); 
//     } 
  
    
// function order(x) 
//     { 
//          x=toString(x); 
//         return x.length; 
//     } 
  
   
//   function Armstrong (x) 
//     { 
//         let n = order(x); 
//         let temp=x, sum=0; 
//         while (temp!=0) 
//         { 
//             let r = temp%10; 
//             sum = sum + power(r,n); 
//             temp = temp/10; 
//         } 
  
//         // If satisfies Armstrong condition 
//         return (sum == x); 
//     } 








// console.log(arr.forEach(el => {
//   if (map23[el] == true || map23[el] == false) {
//     delete map[el]
//   } else {

//     map[el] = Armstrong(el);
//   }
// }));

// var map23= { 0: true, 
//     1 :true,
//      10 : false,
//       19 : false, 
//       370 : true };
// var arr=[10,407];

// var map45= arr.map((el)=>
// {
//     if (map23[el] == true || map23[el] == false) {
//             delete map23[el];
             
//           } 
          
//      else {
        
//             map23[el] = Armstrong(el);
//           }
//           return map23;
//      });

// console.log(map45);


// let keys=[1,2,3,4,5,6,7];
// let values1=[11,22,33,44,55,66,77];
// let to_delete=4;

// // // let map123= new Map();
// // //  map123 = {};
// // // let map1={};

// // // keys.forEach((el,i) => {

// // // 	if (el !== to_delete){
// // //   	map123[el] =  values1[i];
// // //   }
// // //   else{
// // //       map1[el]=values1[i];
// // //   }
      
// // // });
// var arr1=[];
// var map145=new Map();
// var map14=new Map();

//  for(let i=0;i<keys.length;i++)
//  {   
//     if(keys[i]!=to_delete)
//     map145.set(keys[i],values1[i]);
    
   

//  }
//  for(let i=0;i<keys.length;i++)
//  {   
//     if(keys[i]!=to_delete)
//     arr1.push(keys[i]);
   

//  }
 
// // console.log(Object.keys(map123).length);
// // console.log(Object.values(map1));
// for(let i=0;i<keys.length;i++)
//  {   
//     if(keys[i]==to_delete)
//     map14.set(keys[i],values1[i]);
   

//  }
// str="";
// for(let i=0;i<keys.length;i++)
// { 
//     if(keys[i]!=keys[keys.length-1])
//     {
//        str+= keys[i]+":"+values1[i]+"\n";
//     }
//     else
//     str+= keys[i]+":"+values1[i];
// }
// console.log(map145);
// console.log(map145.size);
// console.log(map14.get(to_delete));
// console.log(arr1);
// console.log(str);

// let array = [[1,2,3,8,1,2], [54,26,14,54], [81,4,6,84]];

// var removeDup=(array)=>{
 
//     let myMap =new Map();
//    let arr=[][100];
//     for(let i=0;i<array.length;i++)
//     {  
        
//         for(let j=0;j<array[i].length;j++)
//         { 
//             for(let k=j+1;k<array[i].length;k++)
//             {  
            
//                 if(array[i][j]===array[i][k])
//                 { 
            
//                         arr[i][j]=array[i][j];
                    
//                 }
//             }
//         }
//     }

  
//     for(let i=0;i<arr.length;i++)
//     {
//         myMap.set(i,arr[i]);
//     }
 
    

 
//    return myMap;

// }





function isArmstrong (x)
{   let z=x.toString();
 
    let n = z.length; 
  
    let temp=x, sum=0; 
    while (temp) 
    { 
        let r = temp%10; 
        sum = sum + Math.pow(r,n); 
        temp = parseInt(temp/10); 
    } 

    
    return (sum == x); 
} 
//console.log(isArmstrong(153));

var map23=new Map();
 map23.set(0, true);
 map23.set(1, true); 
 map23.set(10, false); 
 map23.set(19, false); 
 map23.set(370, true); 

   
var arr=[10,19,407,153,675];



    arr.forEach((e)=>{
           if(map23.has(e))
           {
               map23.delete(e);
           }
        else{
            map23.set(e,isArmstrong(e));
        }
    })

console.log(map23);