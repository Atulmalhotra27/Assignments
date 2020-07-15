
function myFunction() 
{
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log(username,password);
  document.getElementById("username").value="";
  document.getElementById("password").value="";
}
