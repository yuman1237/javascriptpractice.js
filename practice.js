var first =(str)=>{
    
    var x= str.split(' ');
    var j='';
    j=x[0].charAt(0);
    for(var i=1;i<x.length;i++)
    {
        j=j +" "+ x[i].charAt(0); 
    }
    
   return j;
 }

 console.log(first("This is me"));


 var str1 ='hi there whatsup';

 console.log(str1[0]);


 var gtr =(str,chr,flag)=>
{

    
    
    if(str.search(chr)==-1)
    {
        return false;
    }

    if(str.search(chr))
    {
       var x= str.split(chr);


       if(flag===1)
       return x[0];
       else if(flag===2)
       return x[1];
    }
    
  
  

   
}

console.log(gtr("hey there you","p",2));


var vow=(str)=>{
  
    var v="";
  
    for(var i=0;i<str.length;i++)
    {
        if(str[i]=='a'|| str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'|| str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U')
        {
            v=v+str[i].toUpperCase();
        }
         else {
             v=v+str[i].toLowerCase();
         }
    }
  
    return v;
  
  }
  console.log(vow("kOnfinityaaaabboou"));


  
var gtf =(data,checkData)=>{
    
    let check = data.substr(data.length - checkData.length, data.length);
   
      if (check == checkData) {
          return true;
      } else {
          return false;
      }
  
  }


  var searching =(str,sub)=>{
 
    str1=str.toLowerCase();
  
    if(str1.search(sub)==-1)
    {
      return false;
    }
    
  
     else if(str1.search(sub))
     return true;
  
  }

  console.log(searching('This is AuTomaTic car','automatict'));


  var str1='abc';
  
  

  
  var  nextChar=(c,n)=> {
    var s='';
    for(let i=0;i<c.length;i++){
       if(c[i]===' ')
    { 
        s=s+" ";
      continue;
    }
     if(c[i]==='z')
     {
          s=s + String.fromCharCode('a'.charCodeAt(0) + (n-1));
          continue;
     }

   s=s + String.fromCharCode(c.charCodeAt(i) + n);
    }
return s;
}

console.log(nextChar('ey ye',5));


var  nextChar=(s,k)=> {
    var newS; 
    
      // iterate for every characters 
      for(let i=0; i<s.length; ++i) 
      { 
          // ASCII value 
          var val = s.charCodeAt(i)
              if(s[i]===' ')
      { 
          newS +=" ";
        continue;
      }
          // store the duplicate 
          var dup = k; 
       
          // if k-th ahead character exceed 'z' 
          if(val + k > 122){ 
              k -= (122-val); 
              k = k % 26; 
              newS += String.fromCharCode(96 + k); 
          } 
          else
              newS += String.fromCharCode(val + k); 
    
          k = dup; 
      } 
    
      // print the new string 
      return newS; 
  }

var num=(str,substr)=>{
  
   
  
    var x= str.split(" "),count=0;
    
  
    for(let i=0;i<x.length;i++)
    {
        if(x[i].includes(substr))
        {
            count++;
        }
    }
  
  
  return count;
  
     
  }
  
  console.log(num("Learn prograearnming anearnd start earn earning","earn"));
  

  var mul=(b1,b2)=>{
    b1=parseInt(b1,2);
    b2=parseInt(b2,2); 
  
    var d,f=1,m=0;
  
    while(b2!=0)
    {
         d= b2%10;
         if(d==1)
         {
              b1=b1*f;
              m=calc(b1,m);
         }
         else{
              b1=b1*f;
         }
         b2=b2/10;
         f=10;
    }
  
    return m.toString();
  
  }
  
  function calc(b1,b2){
       var i=0,remainder=0,result=0,sum=[];
    
       while(b1!=0 || b2!=0)
       { 
            sum[i++]=((b1%10 + b2%10+remainder)%2);
            remainder=((b1%10+b2%10+remainder)/2);
            b1=b1/10;
            b2=b2/10;
  
       }
     
      if(remainder!=0)
      {
           sum[i++]=remainder;
      }--i;
      while(i>=0)
      {
           result=result*10 +sum[i--];
      }
   return result;
  }

  console.log(mul('100','10'));


  function mul2(b1,b2)
  {  
      b1=parseInt(b1,2);
      b2=parseInt(b2,2);
     var r=b1*b2;
      return toBinary(r);
  }
  
  function toBinary(n){
    let binary = "";
    if (n < 0) {
      n = n >>> 0;
    }
    while(Math.ceil(n/2) > 0){
        binary = n%2 + binary;
        n = Math.floor(n/2);
    }
    return binary;
}
  console.log(mul2('100','10'));



  var mul=(b1,b2)=>{
    b1=parseInt(b1);
    b2=parseInt(b2);
  
    var d,f=1,m=0;
  
    while(b2!=0)
    {
         d= b2%10;
         if(d==1)
         {
              b1=b1*f;
              m=calc(b1,m);
         }
         else{
              b1=b1*f;
         }
         b2=b2/10;
         f=10;
    }
  
    return m.toString();
  
  }
  
  function calc(b1,b2){
       var i=0,remainder=0,result=0,sum=[];
    
       while(b1!=0 || b2!=0)
       { 
            sum[i++]=((b1%10 + b2%10+remainder)%2);
            remainder=((b1%10+b2%10+remainder)/2);
            b1=b1/10;
            b2=b2/10;
  
       }
     
      if(remainder!=0)
      {
           sum[i++]=remainder;
      }--i;
      while(i>=0)
      {
           result=result*10 +sum[i--];
      }
   return result;
  }
   
  function countSubStrings(string, subString) {
    //if string and sub-string is undefined then append it with blank strings as we are going to use string method.
    string += "";  
    subString += "";

    if (subString.length <= 0) return (string.length + 1);

    var count = 0, pos = 0, step = subString.length;

    while (true){
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++count;
            pos += step;
        } else{ 
           break;
        }
    }
    return count;
}