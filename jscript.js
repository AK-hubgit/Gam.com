// function myFunction() {
//     myVar = setTimeout(function(){
//         document.getElementById("loader").style.display = "none";
//         document.querySelector("#totalbody").style.display = "block";
//         }, 3000);
// }


// onmouseover="orange(this)" onmouseout="normal(this)" onmousemove="vanish(this)" 
// function orange(x) {
//     x.style.color = "orange";
//     // x.style.hover.display = "none";
// }
// function normal(x) {
//     x.style.color = "navy" ;
// }
// function vanish(x) {
//     x.style.animate({color}) = "orange";
// }





// $(document).ready(function(){
//     $(".Ahide").on({
//       mouseenter: function(){
//         $(".contentA").css("display", "none")
//       },  
//       mouseenter: function(){
//         $(".contenta").css("display", "block")
//       },  
//       mouseleave: function(){
//         $(".contenta").css("display", "none")
//       },
//       mouseleave: function(){
//         $(".contentA").css("display", "block")
//       }
//     });
//   });


  
// $(document).ready(function(){
//     $(".Ahide").mouseenter(function(){
//       $(this).hide(),
//       $(".Ahide").mouseleave(function(){
//         $(this).show();
//       });
//     });
//   });
// $(document).ready(function(){
//     $(".Phide").mouseenter(function(){
//       $(this).hide(),
//       $(".Phide").mouseleave(function(){
//         $(this).show();
//       });
//     });
//   });

// $(document).ready(function(){
//     $(".Ihide").mouseenter(function(){
//       $(this).hide(),
//       $(".Ihide").mouseleave(function(){
//         $(this).show();
//       });
//     });
//   });


// window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%" ;
// }



$(document).ready(function(){
    $(".Ahide").mouseenter(function(){
      $(".contentA").hide(function(){
        $(".contenta").show(function(){
          $(".contenta").mouseleave(function(){
            $(".contenta").hide(function(){
               $(".contentA").show(function(){
               $(".Ahide").show()
            });
          });
        });
        });
      });
  });
});
// $(document).ready(function(){
//     $(".Ahide").mouseenter(function(){
//       $(".contentA").hide(function(){
//         $(".contenta").show()
//       }),
//       $(".contenta").mouseleave(function(){
//         $(".contenta").hide(function(){
//            $(".contentA").show(function(){
//            $(".Ahide").show()
//         })
//       });
//     });
//   });
// });
$(document).ready(function(){
    $(".Phide").mouseenter(function(){
      $(".contentP").hide(function(){
        $(".contentp").show()
      }),
      $(".contentp").mouseleave(function(){
        $(".contentp").hide(function(){
           $(".contentP").show(function(){
           $(".Phide").show()
        })
      });
    });
  });
});
$(document).ready(function(){
    $(".Ihide").mouseenter(function(){
      $(".contentI").hide(function(){
        $(".contenti").show()
      }),
      $(".contenti").mouseleave(function(){
        $(".contenti").hide(function(){
           $(".contentI").show(function(){
           $(".Ihide").show()
        })
      });
    });
  });
});













                                // FORM VALIDATION
                              
const form = document.querySelector('#form')
const Username = document.querySelector('#Username')
const Email = document.querySelector('#Email')
const Password = document.querySelector('#Password')
const cpassword = document.querySelector('#cpassword')

/*
1.FORM =
submit,eventlistner.(e){receiving event as parameter}
e.preventDefault{prevernting form submission before validation}
CREATE BELOW FUNCTIONS
0.1 validatInputs(){
    const val =  Username.value.trim
}
0.2 setSuccess()
0.3 setError()
*/
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validatInputs();
})
function validatInputs() {
    const UsernameVal =  Username.value.trim()
    const EmailVal =  Email.value.trim()
    const PasswordVal =  Password.value.trim()
    const cpasswordVal =  cpassword.value.trim()

    if(UsernameVal===''){
        setError(Username,"username is required")
    }
    else{
        setSuccess(Username)
    }

    if(EmailVal===''){
        setError(Email,'Email id is required')
    }
    else if (!validateEmail(Email)){
        setError(Email,'please enter a valid E-mail id')
    }
    else{
        setSuccess(Email)
    }

    if(PasswordVal===''){
        setError(Password,'password is required')
    }
    else if (PasswordVal.length<8){
        setError(Password,'password must be 8 characters long')
    }
    else{
        setSuccess(Password)
    }

    
    if(cpasswordVal===''){
        setError(cpassword,'confirm password is required')
    }
    else if (cpasswordVal!==PasswordVal){
        setError(cpassword,'confirm password does not match')
    }
    else {
        setSuccess(cpassword)
    }

}

function setError(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText=message;
    inputGroup.classList.add("success")
    inputGroup.classList.remove("error")
}
function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText=' ';
    inputGroup.classList.add("error")
    inputGroup.classList.remove("success")
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };










  //                                        AJAX request

// $(document).ready(function(){
//   $("#ajaxbutton").click(function(){
//     $("#AJAXcontent").load("ajax2.txt");
//   });
// });

// $(document).ready(function(){
//   $("#ajaxbutton").click(function(){
//     $("#AJAXcontent").load("ajax.txt", function(responseTxt, statusTxt, xhr){
//       if(statusTxt == "success")
//         alert("External content loaded successfully!");
//       if(statusTxt == "error")
//         alert("Error: " + xhr.status + ": " + xhr.statusText);
//     });
//   });
// });

// $(document).ready(function(){
//   $("#button").click(function(){
//     $("#div1").load("ajax.txt", function loadDoc(_responseTxt, statusTxt, xhr) {
//         if (statusTxt == "success")
//           alert("External content loaded successfully!");
//         if (statusTxt == "error")
//           alert("Error: " + xhr.status + ": " + xhr.statusText);
//       });
//   });
// });


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector(".demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax.txt", true);
  xhttp.send();
}








