 const option=document.querySelector(".option");

option.addEventListener('click',function (e){
    // console.log(e.target);
    if(e.target.classList.contains("correct")){

        e.target.style.backgroundColor="green";

        }else {
            e.target.style.backgroundColor="red";

            document.querySelector("correct").style.backgroundColor="green";
        }
    
    });
