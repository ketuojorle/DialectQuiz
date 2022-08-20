window.addEventListener("load",function(){
     //THE CODE FOR FRONT PAGE
     let LOADER = document.getElementById("page-loader");
     let QUIZBOX = document.getElementById("quizBox");
     let ContainerContent= document.getElementById("container-content");
     let BOARD= document.getElementById("blackboard");
     let DATEBOX = document.getElementById("date-container");

     let frontPageButton= document.createElement("DIV");
     frontPageButton.setAttribute("id", "frontend-button");
     frontPageButton.innerHTML = "Take Quiz";
     BOARD.appendChild(frontPageButton);
     frontPageButton.onclick = function(){window.location.href="homepage.html"; homePageLoading();};


     let greetingBox= document.getElementById("greeting");
     let ebuIntro = document.getElementById("ebu-intro");
     let dayOfTheMonth = new Date().getDate();
     let monthOfTheYear = new Date().getMonth();
     let Year = new Date().getFullYear();
     let dailyHour = new Date().getHours();
 
     if(dailyHour>=0 && dailyHour<12 ){greetingBox.innerHTML=`Hello, ewola Oruru! ( Hello, Good Morning! ) `; 
      }else if(dailyHour>=12 && dailyHour<16){greetingBox.innerHTML=`Hello, ewola ohoka! ( Hello, Good Afternoon! ) `;
      }else if(dailyHour>=16 && dailyHour<22 ){greetingBox.innerHTML=`Hello, ewola aneh! ( Hello, Good Evening! ) `;
      }else{greetingBox.innerHTML=`Hello, ka yire aneh? ( Hello, how are you tonight? ) `;}
     
      DATEBOX.innerHTML = `<strong>Date :  ${dayOfTheMonth} / ${monthOfTheYear + 1} / ${Year} </strong>`;
      let briefIntroduction;
      briefIntroduction= `My name is Martins Akpala. I will be your guide on this quiz. Ebu dialect is Igala language spoken 
                          by the people of Ebu town in Oshimili North Local Government Area of Delta State, Nigeria. It is
                          very easy to learn. Are you an indegene, can you read and write in the dialect? Test your competence.
                          Or you want to learn? Hmmm! very simple. At the end of the tutorial video and quiz, you WILL be able to
                          construct simple sentences in Ebu dialect. Just click the "Take Quiz" button below let us start.`;
                          
                  
    
    function blackboardIntro(){
          let introIndex=0;
          let speed =50;
          let typewriter;
          if(introIndex<briefIntroduction.length){
              typewriter = setInterval(function(){
              ebuIntro.innerHTML += briefIntroduction.charAt(introIndex);
              introIndex++;    
              },speed) ; 
              }else{clearInterval(typewriter);}
      
            }

    setTimeout(blackboardIntro,1000);

      let loadingDelay;
    function homePageLoading(){

     loadingDelay =setTimeout(loadHome,3000);
    function loadHome(){
      LOADER.style.display ="none";
      QUIZBOX.style.display = "block";
       
    }
    }







    } );