
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("booknow").style.display = "none";
  document.getElementById("popup1").style.visibility="visible";
  document.getElementById("popup1").style.opacity= 1;



}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("booknow").style.display = "block";
  document.getElementById("popup1").style.visibility="hidden";
  document.getElementById("popup1").style.opacity= 0;


}

// function openretalor(){
//   document.getElementById("popup2").style.display="block";
//   document.getElementById("aboutus").style.display="none";
//   document.getElementById("popup3").style.visibility="visible";
//   document.getElementById("popup3").style.opacity= 1;

// }    

// function closeretalor(){
//   document.getElementById("popup2").style.display="none";
//   document.getElementById("aboutus").style.display="block";
//   document.getElementById("popup3").style.visibility="hidden";
//   document.getElementById("popup3").style.opacity= 0;

// }

                           
                            
                            // When the user clicks the button, open the modal 
                             function show () {
                              document.getElementById("myModal").style.display = "block";
                            }
                            
                            function hide () {
                              document.getElementById("myModal").style.display = "none";
                            }
                            
                            // When the user clicks anywhere outside of the modal, close it
                            window.onclick = function(event) {
                              if (event.target ==document.getElementById("myModal") ) {
                                document.getElementById("myModal").style.display = "none";
                              }
                            }
                            
