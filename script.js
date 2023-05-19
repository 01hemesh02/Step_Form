
function function1(){
    let uname = document.getElementById('username').value;
    let position = document.getElementById('position').value;
    
    if(uname && position){
 
          document.getElementById("progress").style.width="33%";
          document.getElementById('first_step').style.display="none";
          document.getElementById('second_step').style.display="block";
         }
    else if(uname==""){
           alert("Please Enter first name");
         }     
    else if(position=="")   
         {
           alert("please Enter last name");    
         }
   }
 
   function Function1(){
          document.getElementById("progress").style.width="0%";
          document.getElementById('second_step').style.display="none";
          document.getElementById('first_step').style.display="block";    
   }
 
   function function2(){
    
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    if(phone && email){
 
         document.getElementById("progress").style.width="66%";
         document.getElementById('second_step').style.display="none";
         document.getElementById('Third_step').style.display="block";
 
       }
    else if(phone==""){
         alert("Please enter contact");
        }
    else if(email==""){
         alert("Please enter email");
        }    
 
   }
 
   function Function2(){
         document.getElementById("progress").style.width="33%";
         document.getElementById('Third_step').style.display="none";
         document.getElementById('second_step').style.display="block";
   }
 
   function function3(){
    
    let dob = document.getElementById('dob').value;
    let national = document.getElementById('ID').value;
    if(dob && national){
         document.getElementById("progress").style.width="100%";
         document.getElementById('Third_step').style.display="none";
         document.getElementById('fourth_step').style.display="block";
       }
    else if(dob==""){
         alert("Please enter dob");
        }
    else if(national==""){
         alert("Please enter Id");
        }
   }
 
   function Function3(){
        document.getElementById("progress").style.width="66%";
        document.getElementById('fourth_step').style.display="none";
        document.getElementById('Third_step').style.display="block";
   }
   function function4(){
     event.preventDefault();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if(password==''){
 
         alert('Please enter password');
 
       }
 
    else if(confirmPassword==''){
 
         alert('Please confirm your password');
 
       }
       
    else if(password != '' && confirmPassword != '')
       {
         if(password===confirmPassword){
 
         document.getElementById('fourth_step').style.display="none";
         document.getElementById('fifth-step').style.display="block";
         let txt =""
 
         txt += document.getElementById("username").value +"<br>";
         txt +=document.getElementById("position").value +"<br>";
         txt += document.getElementById("phone").value +"<br>";
         txt += document.getElementById("email").value +"<br>";
         txt += document.getElementById("dob").value +"<br>";
         txt += document.getElementById("ID").value +"<br>";
         txt += document.getElementById("password").value +"<br>";
         txt += document.getElementById("confirmPassword").value +"<br>";
         console.log(txt);
         document.getElementById("result").innerHTML=txt;
 
         }
         else{
           alert("please match your password...");
         }
       }     
 }
 