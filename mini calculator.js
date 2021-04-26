

function evenorodd() {
    num_1 = parseInt(document.getElementById('txt1').value);

    if(num_1 % 2 == 0) {
        console.log('It is even number');
        output = 'It is a Even number';
        document.getElementById("result 1").value=output;
    }
    else {
        console.log('It is odd number');
        output = 'It is a Odd number';
        document.getElementById("result 1").value=output;
    }
    return false;
}


function Palindrome()
{
    var rem, temp, final = 0;
    var number = parseInt(document.getElementById("txt1").value);

    temp = number;
    while(number>0)
    {
        rem = number%10;
        number = parseInt(number/10);
        final = final*10+rem;
       
    }
    if(final==temp)
    {
        console.log('It is palindrome');
        output = 'It is a  palindrome ';
document.getElementById("result 2").value=output;
   
    }
    else
    {
        console.log('It is not palindrome');
        output = 'It is a NOT palindrome ';
document.getElementById("result 2").value=output;
    }
    return false;
}


       // Function to check for prime number
       function checkPrime() {
              
        var n, i, flag = true;
          
        // Getting the value form the
        
        
        n = parseInt(document.getElementById("txt1").value);
       
        for (i = 2; i <= n - 1; i++)
            if (n % i == 0) {
                flag = false;
                break;
            }
              
        // Check and display output
        if (flag == true){
            console.log(n + " is prime");
            output="the number is prime";
            document.getElementById("result 3").value=output;
        }else{
            console.log(n + " is not prime");
            output="the number is not prime";
            document.getElementById("result 3").value=output;

        }
        return false;
    }


    function fib(){

                
                 
        var a=document.getElementById("txt1").value;
           var n = 0;
           var n1 = 1;
           var nn;
           var fb = "fibanacci sequence  = " ;
          
          
              fb += n + " , " ;
           
       for(var i=0;i<a;i++){
         console.log(n)
           
         nn=n+n1;
         n=n1;
         n1=nn;
         
         fb +=  n +" , " ,n1+ " "  ;
         document.getElementById("result 4").innerHTML = fb;
          
       }
       
       
        return false;
       
       }
  
    function miniCalculator(){
      
      
        evenorodd();
        Palindrome();
        checkPrime();
        fib();

    }