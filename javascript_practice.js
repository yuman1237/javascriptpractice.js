console.log("hello world! , are you there!!");
//document.write("this is document")
var name ="yuman"
console.log(name);
var a;
var b= 2;
a="this is me "+4;
c=a+b;

console.log(c);

var mystar=" hi there everyone \"this is qouted\" now on"


console.log(mystar);

console.log("A"+"B"+"C");
console.log("konfinity "+"mailing"+" maya");
console.log("Print","mailing","maya");
var s1=5;
console.log("Compare",s1==5);
console.log("Compare",s1=='5');
console.log("Compare",s1==='5');

var firstname  = "ankush";

var letter =firstname[2];   

console.log("the letter is "+letter);
const real = [4,5.6,-6.9,42,5,8.54,-2];
const squareList =(arr)=>{
    const squredIntegers =arr.filter(num=>Number.isInteger(num) && num >0).map(x=> x*x);
    return squredIntegers;
} 

const squaredIntegers =squareList(real);
console.log(squaredIntegers); 

console.log(this);

 var obj ={
     firstname:"yuman",
     lastname:"nasim",
     dob: "28/10/1997",
     courList: [],
     buycourse: function (coursename)
     {
         this.courList.push(coursename);
     }, 
     getCourseCount: function ()
     {
          return  `${firstname} is enrolled in total of ${this.courList.length} courses`;  
     }
 }  

 console.table(obj);



//console.log(range(90,3));

var positon =(arr,initial,final)=>{
 

    var x= arr[initial];

    for(let i=initial;i<final;i++)
    {
       arr[i-1]=arr[i];
        
    }

    arr[final]=x;

    return arr;




}


//console.log(positon([10,20,30,40,50],0,2));



var pos =(arr,n)=>{
  
    //arr.sort();
//    var j=0;
//     for(let i=array.length-1;i>=0;i--)
//     {
//       arr[j]=array[i];
//       j++;
//     }
     
     
     return arr.sort();
  
  }

 // console.log(pos([43,56,23,89,88,90,99,652],4));

  function swap(arr, firstIndex, secondIndex){
    var temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
    }
    function bubbleSortAlgo(arraaytest){
    var len = arraaytest.length,
    i, j, stop;
    for (i=0; i < len; i++){
    for (j=0, stop=len-i; j < stop; j++){
    if (arraaytest[j] > arraaytest[j+1]){
    swap(arraaytest, j, j+1);
    }
    }
    

    }return arraaytest.reverse();
    }
    //console.log(bubbleSortAlgo([43,56,23,89,88,90,99,652]));


    var duplicate=(arr1,arr2)=>{
        
        var  length= arr1.length + arr2.length,arr3=[];
        
        for(let i=0;i<arr1.length;i++)
        {
             arr3[i]= arr1[i];
        }
        for(let i=0,j=arr1.length;i<arr2.length,j<length;i++,j++)
        {
            arr3[j]=arr2[i];
        }
      
          
          arr3.sort();
         var j=0;
         
          for(let i=0;i<length;i++)
          {
            if(arr3[i]!==arr3[i+1])
            {
             arr1[j++]=arr3[i];
            }
          }
     return arr1;
        
     }

console.log(duplicate([1,54,23,65,2],[78,65,43,23,1]));

var reaarange=(arr)=>{
    var temp=[];
   
    
      var small = 0, large = arr.length - 1;
   
      var flag = true;
   
  
      for (let i = 0; i < arr.length; i++) {
          if (flag)
              temp[i] = arr[large--];
          else
              temp[i] = arr[small++];
   
          flag = !flag;
      }
  
  
  
  return temp;
  }

  console.log(reaarange([1,3,4,5,6,8,9,8]))



  var target =(arr,n)=>
{  
    var count=0,arr1=[];
  for(var i=0;i<arr.length;i++)
  {
      for(var j=i+1;j<arr.length;j++)
      {
          if((arr[i]+arr[j]) === n)
          {
               arr1.push(i,j);

                     
          }
      }
      

    
  }
 
 if(arr1.length !==0)
    return arr1;

else 
  return false;


}

console.log(target([1,2,3,4,5,6],6));


var reaarange=(arr)=>{
 
    var arr =arr.sort();
 
   var temp=[];

 
   var small = 0, large = arr.length - 1;


   var flag = true;


   for (var i = 0; i < arr.length; i++) {
       if (flag)
       temp[i] = arr[small++];
           
       else
          temp[i] = arr[large--];

       flag = !flag;
   }


 
   return temp;


}
console.log(reaarange([2,4,7,1,3,8,9]));