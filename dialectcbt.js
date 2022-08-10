



          
       window.addEventListener("load",function(){
 
        let siteName =document.getElementById(" website-name" );
        siteName.onclick = function() {  window.location.reload(true); };
        let NAVICON= document.getElementById("nav-icon" );
        let NAVMODAL = document.getElementById("nav-modal");
        let NAVCLOSE = document.getElementById("nav-close");
        NAVCLOSE.onclick = function() {NAVMODAL.style.display="none" ;};
        let NAVTOINSTRUCTION = document.getElementById("navToInstruction");
        NAVTOINSTRUCTION.onclick = function() { renderInstructions(); NAVMODAL.style.display="none" ;};
        let QUIZBOX = document.getElementById("quizBox");

        let MENUBUTTONFORQUIZ = document.getElementById("menuButton-forQuiz");
        MENUBUTTONFORQUIZ.addEventListener('click', renderInstructions);

        let questionContainer = document.getElementById("questionContainer");
        let TOTESTPARA = document.getElementById("totestinstruction");
        let PROGRESSBAR= document.getElementById("progress-bar");
        let  tableHidder = document.getElementById("table-hidder") ; 
        let TABLE = document.getElementById("mytable"); 
        let dialectVideo;
        let answerView = document.getElementById("ANSDISPLAY");
        let ANSCLOSE = document.getElementById("ansClose"); 

       
        
        NAVICON.addEventListener('click', toggleNavmodal);                         
         function toggleNavmodal(){
        
            if(NAVMODAL.style.display==="none"){
                NAVMODAL.style.display="block" ;
            }else{NAVMODAL.style.display="none" ;}
           
              }

             
         
         //THE CODE BELOW CREATES BUTTON THAT RENDERS TEST INSTRUCTION AFTER THE WINDOW HAS LOADED

               let testInstructionButton = document.createElement("INPUT");
               testInstructionButton.setAttribute("type","button" );
               testInstructionButton.setAttribute("value","Take Quiz" );
               testInstructionButton.setAttribute("id","testBtn" );
               TOTESTPARA.appendChild(testInstructionButton);
               testInstructionButton.onclick =  function(){ renderInstructions(); NAVMODAL.style.display = "none";} ;

                            function renderInstructions(){      // THIS FUNCTION RENDERS THE TEST INSTRUCTION
                                                                            questionContainer.innerHTML= testInstruction;
                                                                            testInstructionButton.setAttribute("value","Read the instructions? Let's go!" );
                                                                            if(testInstructionButton.value = "Read the instructions? Let's go!"){
                                                                                                                                                                                       testInstructionButton.onclick =  function(){
                                                                                                                                                                         TOTESTPARA.removeChild( testInstructionButton);
                                                                                                                                                                          renderQuestion();
                                                                                                                                                                                        testTimer();
                                                             
                                                                                                                                                                                                                                                            };  
                                                                                                                                                                                         }      
                                                                                  } 

                                                                  
                                                
                       
         
             

 

     function displaytable(){ 
                                            
                                           tableHidder.style.display ="block";
                                           ANSCLOSE.onclick = function(){ tableHidder.style.display = "none";}; 
                             
                                          }
         
    
                 let Row;
                 let rowCount , tableValues ,TD ;
          
     function createTableRow(){
                  rowCount = TABLE.rows.length;
                  Row = TABLE.insertRow(rowCount);
                  let tableValues = [ (q+1) , selectedChoice, COMMENT ];
                  for( let c = 0 ; c <  tableValues.length; c++){
                        TD = document.createElement("TD");
                        TD.innerHTML = tableValues[c] ;
                        Row.appendChild( TD) ;
                      
                                                             }
                                                    } 
               
           

            
        let q=0;
        let choices;
        let testButton=   document.getElementById("testButton");
        let timerBox =document.getElementById("timer");
        let stopWatch =document.getElementById("stop-watch");
        let sumbitButton;
        let HEADER =document.getElementById("header") ;
        
        let testInstruction =  ' <center><iframe  id="lectureVideo" src="https://www.youtube.com/embed/b5EToqFCx2c?autoplay = 0" ></iframe> </center> <br> '+
        " <p style= 'text-align:justify;'>Kindly adhere to instructions below before you commence the <span class='blue'>40</span>multiple options quiz for <span class='blue'>4</span> minutes for optimal performance. <br>" +
             "<b>Instructions:</b><br>" +
           "1. Watch the short <b>Tutorial video</b> for more knowledge .<br> "  +
             "2. Click on the above red button to start.<br> " +
             "3. Select the option of your choice by clicking on the radio button. Then hit the green <b>NEXT</b> " +
                 " to proceed to next question.<br> " +
             "4. Should you get stuck in any question, waste no time as you are time bound. " +
     "Hit the <b>NEXT</b> button to proceed to next question. <br>" +
     "<b>Note:You can't go back to previous question(s)</b><br >" +
             "5. If you are unable to complete the test before the duration, you will be automatically logged out.<br> " +
             "6. Then click <b>Check your score</b> button to view your answer sheet.<br> " +
             "7. If you want to repeat the test, click <b>Go back home or Repeat Test. </b> Although, " +
                 "you are eligible to take the test as many times as you wish. <br> "+ 
                 "<b>Good luck!</b> <br> " +
          "</p>";
                  
                        

          let  Questions= [["Ebu is in which Local Government Area of Delta State?","Oshimili South","Aniocha North","Oshimili North","C"],
                       ["Choose the odd quarter here","Ogboghere","Amoni","Amole","A"],
                       ["Anegbeh is to Ugbolo while Ighogah is to-----?","Ekpechor","Okwuru","Iyagoshimili","B"],
                       ["Ebu is made up of how many villages","8","9","10","B"],
                       ["Transversing Ebu from Illah to Ukala-Okwute, orderly arrange these villages in Ebu","Ekpechor, Uchebe, Ugbolo","Ugbolo,Ekpechor, Uchebe","Ekpechor, Ugbolo, Uchebe","C"],
                       ["Choose the odd item","Irokonojo","Ugbolo","Aganike","A"],
                       ["Who is the current king of Ebu town","HRH. Onu Paul Ojore Opili","HRH. Onu Paul Ojornugwa Opili","HRH. Onu Paul Odilile Opili","C"],
                       ["Which of these is a grand finale","Ogwu festival","Olu festival","Ojor festival","B"],
                       ["The following are homographs in Ebu except","Oil","Water","Me(<small>pronoun</small>)","A"],
                       ["Which of these pairs have common boundary","Okwuru and Uchebe","Ugbolo and Uchebe","Ekpechor and Aganike","A"],
                       ["What is the name of this animal in Ebu","ala","ahuwo","ewo","C"],
                       ["What is the name of this animal in Ebu","ukwunor","efa","ayiya","A"],
                       ["What is the name of this animal in Ebu","ukwunor","efa","igbaniko","B"],
                       ["What is the name of this animal in Ebu","ela-unwa","ahuwo","atu","A"],
                       ["What is the name of this animal in Ebu","uchecheh","akoto","abia","C"],
                       ["What is the name of this animal in Ebu","igogba","akokwa","akikor","C"],
                       ["What is the name of this animal in Ebu","atu","ela-unwa","ahuwo","A"],
                       ["What is the name of this animal in Ebu","ehkor","odumu","ehta","B"],
                       ["What is the name of this animal in Ebu","ehta","ehkor","odumu","B"],
                       ["What is the name of this in Ebu","akporko","otie","ogili","A"],
                       ["What is the name of this  in Ebu","ikachi","uchu","udukwu","B"],
                       ["What is the name of this  in Ebu","igili","apapa","olomu","C"], 
                       ["Which of these is odd","Oja Model Primary School","Omoka Primary School","Ubueni Primary School","B"],
                       ["What is <span class='skyblue'><i>ogwu mu-eji</i></span> mayu <span class='skyblue'><i>ela</i></span>","29","209","49","C"],
                       [" <span class='skyblue'><i>Ogwu mu-elu</i></span> is what?","25","100","205","B"],
                       ["Which of these towns is not an immediate neighbour to Ebu","Onicha-olona","Illah","Iyelen","A"],
                       ["Evaluate <big>5</big><small>(1/5)</small> + <span class='skyblue'><i>Elu</i></span> ","15","10","6","C"],
                       ["The following are located in Ebu except -----","A General Hospital","A Polytechnic","A Police Station","B"],
                       ["The Onu of Ebu is produced by which village","Ekpechor","Ugbolo","Ogor","C"],
                       ["Orderly name these in Ebu dialect <small><i>first, second, third, fourth, fifth</i></small>","<i>onka, eji, eta, ele,   elu</i>","<i>ekinye,ekeji, eketa, ekele, ekelu</i>","<i>eyonka, eyomeji, eyometa, eyomele, eyomelu</i>","B"],
                       ["What is the synonym of <span class='skyblue'><i>ku mai deh?</i></span>","<i>ku weh chei?</i>","<i>ku chu odu eleh?</i>","<i>ku weh jeh</i>","B"],
                       ["<span class='skyblue'><i>You</i></span>(2nd person singular pronoun) is called ----- in Ebu","<i>awa</i>","<i>uwe</i>","<i>ama</i>","B"],                        
                       ["<span class='skyblue'><i>You</i></span>(2nd person plural pronoun) is called ----- in Ebu","<i>eme</i>","<i>ama</i>","<i>awa</i>","A"],     
                       ["<span class='skyblue'><i>We</i></span>(1st  person plural pronoun(subject)) is called ----- in Ebu","<i>ama</i>","<i>awa</i>","<i>eme</i>","B"],
                       ["Choose the odd item","Agbado","Ugah","Ekpeh","A"],
                       ["Simplify (<span class='skyblue'><i>egwe-elu</i></span>)2 + <span class='skyblue'><i>ogwu</i></span>  ","152","105","50","C"],
                       ["<span class='skyblue'><i>Onka</i></span> means -----?","11","1","21","B"],
                       ["<span class='skyblue'><i>Egwa-onka</i></span> means -----?","Eleven","Seven","One","A"],
                       ["<span class='skyblue'><i>Ogwu-mu-eji</i></span> means -----?","20 + 2","20 x 2","20 x 20","B"],
                       ["<span class='skyblue'><i>Ogwu-mayu-eji</i></span> means -----?","22","40","20 - 2","A"]
                       ];
                     //<span class="skyblue"><i></i></span> ["Q5","A5","B5","C5","A"],   THIS FOR FUTURE USE, TO SAVE TIME WRITING ANOTHER CODE
               
           
          let QLen=Questions.length;

     function  renderQuestion(){      // THIS FUNCTION PRESENTS THE QUESTIONS
        let chA;
        let chB;
        let chC;
        let question;
        let questionContainer= document.getElementById("questionContainer");
        question=Questions[q][0];
        chA=Questions[q][1]; 
        chB=Questions[q][2];
        chC=Questions[q][3];
        questionContainer.innerHTML= "<h4>"+question+ "</h4> <br>";
        questionContainer.innerHTML+= ` <legend><label for="optionA"> <input type='radio' value='A' id="optionA" name='choices'/> <b>A:</b>  ${chA} </label> </legend><br>`;
        questionContainer.innerHTML+= ` <legend><label for="optionB"><input type='radio' value='B' id="optionB" name='choices'/> <b>B:</b>  ${chB}  </label> </legend><br>`;
        questionContainer.innerHTML+= ` <legend><label for="optionC"><input type='radio' value='C' id="optionC" name='choices'/> <b>C:</b>  ${chC}  </label> </legend><br>`; 
        PROGRESSBAR.innerHTML = " Question<span class='blue' >"  +   (q +1 ) +  "</span> of <span class='blue' > " + QLen  + " </span>Questions";
                                                            
        showAnimals();                   // THIS FUNCTION PRESENTS ANIMALS AND OTHER ITEMS PICTURES
        goTonextQuestion();          // THIS FUNCTION CREATES NEXT QUESTION BUTTON
        
                  }
               
  
  
        // THIS CODE BELOW TO CREAT BUTTON TO NEXT QUESTION
              let nextQuestionButton;
   function goTonextQuestion(){
        nextQuestionButton=document.createElement('INPUT');
        nextQuestionButton.setAttribute('type','button');
        nextQuestionButton.setAttribute('value','  NEXT >');
        nextQuestionButton.setAttribute('id','nextButton');
        nextQuestionButton.onclick = function(){checkAnswer(); displayPercent();  performanceDetails();} ;
        questionContainer.appendChild(nextQuestionButton ) ;  
                 
                                      }
       

          
       let selectedChoice;
       let COMMENT = [ 'wrong', 'right' ];
      
   function checkAnswer(){
        let i;
        choices=document.getElementsByName('choices');          
        for ( i=0; i<choices.length; i++){  
        if(choices[i].checked){
           selectedChoice=choices[i].value;  
           createTableRow();
           if(selectedChoice==Questions[q][4]){ addMark() ; 
                                            TABLE.rows[rowCount].cells[2].innerHTML=  "<span class='glyphicon glyphicon-ok'  style='color:green; font-size:15px; font-weight:lighter;' ></span>" ;
                                            
                                                         }  
        else{ TABLE.rows[rowCount].cells[2].innerHTML="<span class='glyphicon glyphicon-remove'  style='color:red; font-size:15px; font-weight:lighter' ></span>";
                                                         }

    
                        
                                                 }
                       
                                 }
        
         q++;        
         renderQuestion();
   
                     }   //END OF CHECK ANSWER FUNCTION
                                                   
     
        var add=(function () {
        var correctScore=0;
        return function () {correctScore+=1; 
        return correctScore; };
              })();
      
        function addMark(){
        document.getElementById("score").value =add();}

         
       function displayPercent(){
         var MARK=document.getElementById("score").value;
         var percen= (MARK/QLen)*100;
         var approximate=percen.toFixed(0);
         document.getElementById("Percent").value= approximate + "%";
         var Remark= " ";
         if(approximate<=50){Remark="Hmmmm! Poor Performance!";}
         else{if(approximate<=60 ){Remark="Average Performance!";}
               else{if(approximate<=70){Remark="Good Performance!";}
                    else{if(approximate<=90){Remark="Very Good Performance!";}
                          else{if(approximate>=91){Remark="Wow! Excellent Performance!";}}}}}
         document.getElementById("remark").innerHTML = Remark;
         
              }
                  
                 

                 
           function performanceDetails(){
                       let attemptedQstn = TABLE.rows.length;
                       let unattemptedQstn = QLen - attemptedQstn ;
                       document.getElementById("attempted").value = attemptedQstn;
                       document.getElementById("unattempted").value = unattemptedQstn;
                                                                  }
                                      
             
                 
                  let animalsContainer , imagePix ;
                 let  k=0;	
           function showAnimals(){
                   
                                          //\
                 let imagePixSrc=[ "AnimalsPix/Goat.jpg",       
                                   "AnimalsPix/Cow.jpg",
                                   "AnimalsPix/Bufallow.jpg",
                                   "AnimalsPix/Deer.jpg",
                                   "AnimalsPix/Dog.jpg",
                                   "AnimalsPix/Cock.jpg",
                                   "AnimalsPix/Antelope.jpg",
                                   "AnimalsPix/Lion.jpg",
                                   "AnimalsPix/Tiger.jpg",
                                   "AnimalsPix/Pepper.jpg",
                                   "AnimalsPix/Yam.jpg",
                                   "AnimalsPix/Orange.jpg"
                                 ]; 

                       
        
                //THIS FUNCTION CREATES APPEND IMAGES AT CERTAIN QUESTIONS NUMBERS

             if(q>9) {  
                  
                 animalsContainer =document.createElement('DIV');
                 animalsContainer.setAttribute("id", "animals-container");
                 questionContainer.appendChild(animalsContainer);
        
                 //THIS IS TO LOOP THROUGH THE IMAGES

                      if(k>=  imagePixSrc.length){k=0;}  
                     else{   
                          imagePix=document.createElement('IMG');
                          imagePix.setAttribute("id", "animals-images" );
                          imagePix.src=imagePixSrc[k];
                          imagePix.style.width="390px";
                          imagePix.style.height="340px";
                          imagePix.style.position="absolute"; 
                          imagePix.style.margin="auto";
                          animalsContainer.appendChild(imagePix);
                          k++;
                             }
                         }
                           
      
           if(q>21){
           questionContainer.removeChild( animalsContainer);
           k=0; }

           }   // END OF SHOW ANIMALS FUNCTION
    
                                         
        
       // THE CODE TO START TIMER WHEN QUESTION IS RENDERED
      
       function testTimer(){
        let s=60;
        let m= 3;
        let secLabel="secs";
        let minLabel="mins";
        let t;
        
       
        function stopTime(){clearInterval(t);} 
                 
        function TimeCount(){  
         // let test1 = document.getElementById("mypara1");  
          stopWatch.innerHTML ="Remaining Time:" +m+minLabel+" " +s + secLabel +"";
          s--;
         if(s<=1){secLabel="sec";} else{if(s>1 &&s<=60){secLabel=secLabel;}}
         if(m<=1){minLabel="min";}else{minLabel=minLabel;}
         if(s==0){m=m - 1; s=60; }
                        else{m=m; }

       if(s < 10) { stopWatch.innerHTML ="Remaining Time:" +m+minLabel +" " + "0"+s + secLabel +""; } // this to maintain double second digits  or secinds to count in tens
                    else{stopWatch.innerHTML ="Remaining Time:" +m+minLabel+" " +s + secLabel +""; }
         
       if(m < 0 && q < QLen){
                  stopTime();
                  stopWatch.innerHTML = " ";
                  PROGRESSBAR.innerHTML = "";
                  questionContainer.innerHTML="<h4><b style='color:red;'>OOOooops!</b><br>TIME OVER</h4><h1>Thanks for taking the Test</h1>" ;
                  questionContainer.style.textAlign="center";
                  questionContainer.style.minHeight =`${400}px`;
                  questionContainer.style.border="0px solid grey";
                  QUIZBOX.style.backgroundColor="#336699";
                  TOTESTPARA.appendChild( testInstructionButton);
                   testInstructionButton.setAttribute("value"," Check Your Score");
                   testInstructionButton.onclick= function(){ questionContainer.innerHTML =" ";
                                                                                     
                                                                                     displaytable();
                                                                                     questionContainer.appendChild(tableHidder);
                                                                                     tableHidder.style.marginLeft = "25%";
                                                                                    
                                                                                     tableHidder.style.width = "500px";
                                                                                     testInstructionButton.setAttribute("value","Go back home or Repeat Test");
                                                                                     testInstructionButton.onclick = function(){window.location.reload(true); };
                                                                                     };
                 
                                                    }
                  
                                                                              
           if(m>-1&& q>=QLen){
                           stopTime(); 
                           PROGRESSBAR.innerHTML = "";
                           stopWatch.innerHTML="<h4>You have completed the test</h4>";
                           stopWatch.style.textAlign="center";
                           questionContainer.style.minHeight =`${400}px`;
                           questionContainer.innerHTML="<h1>Thanks for taking the <br> Test</h1>";
                           questionContainer.style.textAlign="center";
                           questionContainer.style.border="0px solid grey";
                           QUIZBOX.style.backgroundColor= "#336699";
                           TOTESTPARA.appendChild( testInstructionButton);
                           testInstructionButton.setAttribute("value"," Check Your Score");
                           testInstructionButton.onclick= function(){ questionContainer.innerHTML =" ";
                                                                                     
                                                                                     displaytable();
                                                                                     questionContainer.appendChild(tableHidder);
                                                                                     tableHidder.style.marginLeft = "25%";
                                                                                     tableHidder.style.width = "500px";
                                                                                     testInstructionButton.setAttribute("value","Go back home or Repeat Test");
                                                                                     testInstructionButton.onclick = function(){window.location.reload(true); };
                                                                                     };
                 
             
                                                         }
                  
                                      }  // END OF  TIMECOUNT FUNCTION
                         
          
                             t=setInterval(TimeCount,1000);

                            }       // END OF  STOPWATCH FUNCTION
              

        
                
                        //CODE FOR AFFILIATE PRODUCTS IMAGE INTERCHANGE
                       let imgIndex =0;  
                       let infoIndex=0;
                       let anchorIndex=0;
                             
                       
                       let advertContainer=document.getElementById("fade-advert");
                       let productLink=document.getElementById("link");
                       let goodsCaption = document.getElementById('goods-caption');
                       let figureElement = document.getElementById('figElem')

                       let productImage=document.createElement('IMG');
                       productImage.setAttribute("class", "affiliateProductImage");

                       let imgDiv = document.createElement('DIV');
                       imgDiv.setAttribute('id','affiliate-imageDiv');

                       let buyButton=document.createElement('INPUT');
                       buyButton.setAttribute('type','button');
                       buyButton.setAttribute('value','BUY It NOW');
                       buyButton.setAttribute('id','buyNowBtn'); 

                       let goodsName = document.createElement('DIV');
                       goodsName.setAttribute('id','goodsname');


      function affiliateMarket(){
         let imgUrl=[  "AffiliateGoods/intellectivepc20k.jpg",
                       "AffiliateGoods/kswiss13-709k.jpg",
                       "AffiliateGoods/awwgirl6-5kk.jpg",
                       "AffiliateGoods/lenovo15-6-148k.jpg",
                       "AffiliateGoods/backpack7-5k.jpg",
                       "AffiliateGoods/1009serieswatch9-5k.jpg",
                       "AffiliateGoods/flaskheater6k.jpg",
                       "AffiliateGoods/nonstick16-5k.jpg",
                       "AffiliateGoods/spiderman10-5k.jpg",
                       "AffiliateGoods/mensneakersblack6-5k.jpg",
                       "AffiliateGoods/kikiclipper11k.jpg",
                       "AffiliateGoods/ktablet27k.jpg",
                       "AffiliateGoods/3in1hbag7k.jpg",
                       "AffiliateGoods/backpackxpandable17k.jpg"
                        ]; 
          
          

            let productInfo=[
                                         ' Intellective computer for kids<br> &#8358;20,000  <s>&#8358;35,000</s> ',
                                          'K-Swiss Female Canvas <br> &#8358;13,709  <s>&#8358;16,218</s> ',
                                          'AWW Girl Dress Shoe <br> &#8358;6,500  <s>&#8358;8,000</s>',
                                          'Lenovo Ideapad-15.6"-Intel <br> &#8358;148,000',
                                          'Waterproof Antitheft Usb Bag <br> &#8358;7,500 ', 
                                          '1009Series 5 Waterproof Smart..<br> &#8358;9,500  <s>&#8358;18,000</s> ', 
                                          'Food Flask with Electric Heater <br> &#8358;6,000  <s>&#8358;9,800</s>',
                                          'NonStick Pot Set 4-Pieces<br> &#8358;16,500  <s>&#8358;18,000</s>',
                                          `Spiderman Boys' Canvas <br> &#8358;10,500`,
                                          `Men's Sneakers-Black <br> &#8358;6,500 `,
                                          'KiKi Reachargeable Clipper 2000mAh <br> &#8358;11,000  <s>&#8358;15,000</s>',
                                          'Kids Educational Tablet-7" 8GB WIFI <br> &#8358;27,000',
                                          'Fashion Home 3 In 1 Ladies Hand Bag ...<br> &#8358;7,000',
                                          `Men's Backpack Waterproof Expandable ...<br> &#8358;17,000 `
                                         ];                     
      
               let anchorHref=[ ' https://www.konga.com/product/intellective-computer-for-kids-5758196?k_id=Martins2016  ',
                                           ' https://www.konga.com/product/k-swiss-female-canvas-3804133?k_id=Martins2016 ',
                                           ' https://www.konga.com/product/aww-girl-dress-shoe-5523745?k_id=Martins2016  ',
                                           ' https://www.konga.com/product/lenovo-ideapad-15-6-intel-celeron-4gb-ram-1tb-hdd-win-10-5736876?k_id=Martins2016 ',
                                           'https://www.konga.com/product/17-inch-waterproof-anti-theft-laptop-backpack-with-usb-port-4795738?k_id=Martins2016 ',
                                           'https://www.konga.com/product/1009-series-5-waterproof-smart-watch-5-5771396?k_id=Martins2016 ',
                                           'https://www.konga.com/product/food-flask-with-electric-heater-5504519?k_id=Martins2016 ',
                                           'https://www.konga.com/product/nonstick-pot-set-4-pieces-4837461?k_id=Martins2016  ',
                                           'https://www.konga.com/product/marvel-spiderman-boys-canvas-sneakers-shoes-black-5077844?k_id=Martins2016 ',
                                           'https://www.konga.com/product/mens-sneakers-black-5620056?k_id=Martins2016  ',
                                           'https://www.konga.com/product/kiki-rechargeable-clipper-2000mah-lithium-battery-5231969?k_id=Martins2016',
                                           'https://www.konga.com/product/kids-educational-tablet-7-8gb-wifi-5360552?k_id=Martins2016',
                                           'https://www.konga.com/product/fashion-house-3-in-1-ladies-handbag-32and2-red-4464149?k_id=Martins2016',
                                           'https://www.konga.com/product/mens-backpack-waterproof-expandable-usb-charging-backpack-17-3-inch-5626334?k_id=Martins2016'
                                              
                                             ]; 
       
                                             
        function displayProducts(){ //THIS FUNCTION LOOPS THROUG ANY NUMBER OF IMAGES ARRAY EVERY 4SECONDS
             if(imgIndex>=imgUrl.length) {
             imgIndex= 1;
             productImage.src = imgUrl[imgIndex -1];
             }                                  
             else{
                productImage.src = imgUrl[imgIndex];
                  imgDiv.appendChild(productImage);
                  advertContainer.appendChild(imgDiv);                      
                  imgIndex++;
                
                          }

                          

                          
          if(infoIndex>=productInfo.length){ 
                                            infoIndex= 1;
                                            goodsName.innerHTML=productInfo[infoIndex - 1];
                                        }else{goodsName.innerHTML=productInfo[infoIndex];
                                              advertContainer.appendChild(goodsName);
                                              //goodsCaption.appendChild(buyButton);
                                              //figureElement.appendChild(buyButton);
                                              advertContainer.appendChild(buyButton);
                                              infoIndex++;
                                             }

          if(anchorIndex>=anchorHref.length) {
                                              anchorIndex= 1;
                                              productLink.href=anchorHref[anchorIndex - 1];
                                             } else{productLink.href=anchorHref[anchorIndex];
                                                    anchorIndex++; }
                     
                                                        }  //END displayProducts FUNCTION
   
               let changeImage = setInterval( displayProducts,5000);
                                       
                                             }  //END CROSS FADDING FUNCTION


          
                let affiliateAdvert = setTimeout( affiliateMarket,500);
         
               

                //THIS CODE IS FOR TYPING EFFECT
                 
        /*        
                
              let dataPrice =document.getElementById("netbiz");  
            function movingCharacters(){
                 let AdvertCharacters=` MTN 1GB = 250NGN MTN 2GB = 500<br>; MTN 3GB = 1000`;
                 let i =0;
                 let speed = 100;
            
                 
                 
                if(i < AdvertCharacters.length){
                    let move = setInterval(function(){
                    dataPrice.innerHTML += AdvertCharacters.charAt(i);
                    i++;
                    },speed); 
                            }else{clearTimeout(move);}
                    
                    
                          }
                setTimeout(movingCharacters,1000);
        */
                
            
              //CODE FOR NETBIZ FADE-IN FADE-OUT 
            
              let dataBreakdown = ['1GB <span style="color:green;font-weight:bold;"> = </span> &#8358; 250',  '2GB <span style="color:green;font-weight:bold;"> = </span> &#8358; 500',  '3GB <span style="color:green;font-weight:bold;"> = </span> &#8358; 750',  '30Days Validity','TopUp Now!', '<span style="color:steelblue;">DStv</span> Subs.',  'GO<span style="color:green;">tv</span> Subs.',  '<span style="color:black;"> StarTimes</span> Subs.',  'Subscribe Now!'];

              let DATACOST = document.getElementById('data-cost');
              let databreakdownIndex = 0;

              let networkLogoImage = ['NetbizPhoto/mtnlogo.jpg', 'NetbizPhoto/glologo.jpg', 'NetbizPhoto/airtellogo.png','NetbizPhoto/9mobilelogo.jpg','NetbizPhoto/dstvlogo.png','NetbizPhoto/gotvlogo.png','NetbizPhoto/startimelogo.jpg'];
              let logoImageElem = document.getElementById("network-logo");
              let networkLogoImageIndex= 0;

              function netbizAdvert(){
              if(databreakdownIndex >= dataBreakdown.length){databreakdownIndex = 1;
                         DATACOST.innerHTML = dataBreakdown[databreakdownIndex - 1] ;
                  }else{
                    DATACOST.innerHTML = dataBreakdown[databreakdownIndex] ;
                    databreakdownIndex++;
                  } 
            }

            setInterval(netbizAdvert,2000);

             function swapLogo(){
                if(networkLogoImageIndex >= networkLogoImage.length){networkLogoImageIndex =1; 
                    logoImageElem.src = networkLogoImage[networkLogoImageIndex - 1];
                    
                }else{logoImageElem.src = networkLogoImage[networkLogoImageIndex];
                     networkLogoImageIndex++; }
             }
             setInterval(swapLogo,1000);
             



                //THIS CODE IS ABOUT THE PEOPLE OF EBU TOWN

                let whoAreEbus = `
           <article>
                <p><b>Ebu</b> is a town located in <b>Oshimili-North LGA</b> of <b>Delta State</b>. It is bounded at the north by <b>Odohkpe</b>, <b>Nzam, Igberoh</b> all in Anambra State with river Niger forming natural boundary.
                To the south, it has boundaries with <b>Ezi, Akwukwu-Igbo, Ukala-okwute</b>. To the east, we have <b>Illah</b> as a neighbour with river <b>Iyi-ukwu</b> as a natural boundary. To the west, we have <b>Iyenlen</b> and <b>Illushi</b>, both in Edo state with river <b>utor</b> as natural boundary.</p>
                <p>It is about twenty-five minutes drive from the state capital, <b>Asaba</b>.<br />It can be accessed from the south-western part of Nigeria via <b>Issele-ukwu</b> junction of the <b>Benin-Onitcha</b> express road, through<b> Onicha-olona&gt;&gt;&gt;Ukala-ukpunor&gt;&gt;&gt;Ezi&gt;&gt;&gt;Ukala-okwute</b> route.<br />
                From the nothern part of the country, it can be reached through<b> Uromi&gt;&gt;&gt;Ubiaja&gt;&gt;&gt;Iyelen</b> route.
                From the south-eastern part, through<b> Asaba&gt;&gt;&gt;Ugbolu&gt;&gt;&gt;Illah road</b>.</p>
           </article>

           <article>
                <p>History have it that they have their root from <span class="steel"><b>Idah</b></span> in <b>Kogi State</b>. That they migrated from there over a thousand years ago to settle in the present location. However, there is a twist to the myth. According to a source, i was told that a man called <b>Ubueni</b> is the father of Ebu people that he came from Benin in Edo State. That he was married to an Idah woman that gave him two sons: <b>Okemeje</b> and<b> Iyekpeti</b>.
                That the former gave birth to Ekpechor, Orgor and Iyagoshimili. While the latter gave birth to: Okwuru, Uchebe, Ugbolo, Amomaogele, Aganike, and Oke. This second story leaves some questions begging for answers.</p>
                <ol style="color:red; font-family:verdana; text-align:left;">
                     <li>Why do Ebus don&#39;t speak Benin dialect since Ubueni is from Benin?</li>
                     <li>How come Ubueni&#39;s wife&#39;s dialect which is igala gained dominance over that of the man that ubueni&#39;s two sons couldn&#39;t speak their father&#39;s dialect if not that Ebu migrated from Idah?</li>
                </ol>
                According to <b>Nigerian Peoples and Culture</b> a GST course authored by Prof. Eddey Eraigbe et al of the Department of History, University of Benin. Ebu Town in Delta State was mentioned as a migrant from igala land.<br />
                Their dialect is called <span class="steel"><b>Oluu</b></span> otherwise called<span class="steel"><b> Igala language</b></span>.<br />
                They could therefore be described as <i>Igala-speaking Delta-Ibos</i>. Nevertheless, <i>oluu</i> is currently suffering from modernization and modifications in the hands of present generation of Ebu. Parents blend igbo and igala words while communicating with their children. A path which the children are also toeing. Perhaps, due to the hybrid nature of the people. For it is now becoming difficult to comprehend when someone from core igala language towns like Idah, Uneme, Ayingba, Ankpa speaks. <i>Oluu</i> is gradually beign eroded from Ebu land.
                <p>The people are peace loving, hardworking, receptive and accommodating. Because of these, parents from other neigbouring communities such as Odohkpe, Igberor, Nzam all in Anambra State and Illushi, Iyelen both in Edo State handover their children to their Ebu counterpart to be trained. A practice which has boost the cordial relationship of the town with its neighbours.<br />
                Also, Ebu have been accommodating strangers especially from the south-eastern part of the country by giving them virgin fertile forest for farming and settlement. Ekpechor village has about two camps. The <i>Ezewilo</i> and <i>Onini</i> camps. So also have other villages.</p>
           </article>
             
           <article>
                <p><span class="steel"><b>Villages</b></span><br />
                <b>Ebu</b> town is made up of nine villages. They are: Orgor, Ekpechor, Uchebeh, Okwuru, Ugboloh, Amoma-ogele, Iyagoshimili, Aganike, Oke. Of these, Orgor is the only village that produces the king of the land. And the king is called<span class="steel"><b> Onu Ebu</b></span> ie <i>King of Ebu</i>.The current king is HRM. <b>Onu Paul OPILI</b>. Other villages have their kings but are subjects to <i>Onu Ebu</i>.That of Ekpechor for example is called <i>Igweh Ekpechor</i>, Uchebe&#39;s <i>Ojoko Uchebe</i>.<br />
                These villages have different greetings perhaps for easy identification.<br /> Men from Ekpechor for instance are greeted <i>Akpa</i> while their women are greeted <i>Egba</i>.<br />
                For Ugbolo; men are greeted <i>Akpa</i>, the women; <i>Anegbe</i>.<br />
                Okwuru, men are greeted <i>Okakwu</i> while the women are greeted <i>Igoga</i>.<br />
                Uchebe, men are addressed as <i>Ojoko</i> while their women are addressed as <i>Odua</i>. So do other villages have their unique greetings.<br />
                The villages are further subdivided into quarters<br />
                Ekpechor for example has four quarters namely; Amoni, Amokale, Amole and Ogbeoji.</p>
            </article> 
            
            <article>
                <p><span class="steel"><b>Occupation</b></span><br />
                Becuase of the arable vegetation, most of the men that are rural dwellers are predominantly successful farmers while some are into teaching and trading.<br />
                The women are not left out as some have farms .But they are mostly into petty trading.<br />
                Their major crops are: yam, cassava, maize, cocoa-yam, castor, sugar cane. They take these to every four days markets(ie every ekeh day) markets namely: aja-iloh, aja-ega(river side market) for sale. While some do go ekeh-umuteh in Illah.</p>
            </article>
             
           <article>
                <p><span class="steel"><b>Schools</b></span><br />
                There are two famous secondary schools . They are <b>St. Paul&#39;s Grammar School</b> whose uniform is white upon brown with over 2000 students. <b>Gateway to Success Secondary School</b>( a private school) is the other with white upon black uniform. Not as populated as the its counterpart.<br />
                The primary schools are <b>Oja Model Primary School</b> whose uniform is white upon skyblue and <b>Ubueni Primary School</b> with a white upon black uniform.</p>
            </article>

            <article>
                <p><span class="steel"><b>Health</b></span> In the area of health, there is General Hospital located in Ekpechor village and a primary health center in Oke-kekele.</p>
            </article>
            
            <article>
                <p><span class="steel"><b>Religion</b></span><br />
                The people are mainly Christians while minority are traditional worshippers. There is <b>St. Theresa&#39;s Catholic Church</b> located on the hill of Amomaogele village other pentecostal churches such as: <b>The Redeem, Winners Chapel, Christ Embassy, God&#39;s Kingdom Society, The Assembly of God</b>, etc,</p>
            </article>

            <article>
                <p>Although, beign eroded by christianity because is percieved by the current civilised generation as idolatory and waste of resources, they have rich cultural heritage. They have cultural dance groups like: Ebu wonder, akwunuchenu, ugo, otikpopko, igbama. All aforementioned
                 have masquerades. Others without masquerades are otu-agwuba of Chief Nwabuzor Achije of amokale, otu-ubomu of late Mr. Ikekele of amokale, otu-akwete of late Mr Ikem Etemah of ogbeoji, otu-akwete of late Chief John Awoh of Amoni all in Ekpechor village. While we have similar groups in other villages. Their annual cultural festival kick-starts with</p>
            </article> 
            
            <article>
                <p><span class="steel"><small>Ojor festival</small></span><br />
                This marks the commencement of the annual festival. As the name implies, <span class="steel">Ojor</span> which means <span class="steel">Almighty God</span> is festival to commit the communities into the hands of God Almighty for protection, peace , and fruitful harvest. Every village fixes a convenient date for the celebration, but all falls into the month of July/August. They prepare pounded yam with Egusi or orgborlor soup that is fully stocked with smoked fish and bush meats.</p>
           </article>
           
           <articles>
                <p><span class="steel"><small>Utu festival</small></span><br />
                It is a new yam festival.It is celebrated in three stages.<br />
                First, the Onwordi family in Iyagoshimili village. Secondly, the <i>Olu-utu</i>(great farmers) chieftancy holders celebrate 4days after Onwordi family&#39;s. Thirdly is the general public&#39;s which takes place three days after the olu-utu&#39;s. It is celebrated simultanously in the whole villages. The traditional believers prepare food and take it to their farms to offer prayers to their ancestors for protection and fruitful harvest. While the once that are too old to go farm do theirs in the local palace called <i>atakpa-ogwa</i><br />
                This new yam festival marks the beginning of traditional wresting. A day after the celebration, people don&#39;t go to farm. Should they go, is only inspection of farm and traps. Hard work is prohibited for the believe their ancestors visiting their farms to take the food and wines offered the previous day.</p>
            </articles>
            
            <article
                <p><span class="steel"><small>Ane(land) festival</small></span><br />
                This comes up 16days after the utu festival and it marks the commencement of the <i>ofogoli</i> masquerades dance. On this day, elders in the villages converge at the village square to offer prayers and sacrifices to their ancestors to watch over them in their land. On this day, the youth group called <i>odifu</i> in the various villages clears the arena of the village while the senior youth group called <i>otu-egbe</i> from each of the nine villages converge at the town&#39;s arena called <i>ilo Ebu</i> located in orgoh village to tidy up the the area where norminated elders from the nine villages will converge for prayers and sacrifices.</p>
            </article>

            <article>     
                <p><span class="steel"><small>Utor festival</small></span><br />
                Eight days after <i>ane festival</i> is the festival. The chief priest of river utor god visits the shrine at <i>ilo Ebu</i> to appease the god and offering of sacrifices. It is celebrated in every traditional believer&#39;s home with ppounded yam and orgborlor or okra soup(ie draw soups only). The feast climax the end of traditional wresting.</p>
             </article>
             
             <article>
                <p><span class="steel"><small>Ebor Akikor festival</small></span><br />
                This feast comes a day after <i>utor&#39;s</i>. It still feast of prayers and sacrifices to their ancestors at the local palace. The women gather at <i>atakpa-ogwa</i>. Each with a live cock(<i>akikor</i>) which the slutter, roast for food. The feast marks the end of <i>ofogoli</i> masquerade dance. The masquerades gathered together to perform by the road side a joint performance called <i>ukwe</i>.</p>
            </article>
            
            <article>
                <p><span class="steel"><small>Ibe-ata and Ibe-iye feasts</small></span><br />
                These succeed <i>Ebor Akikor</i> 8 and 9days respectively. They are respectively dedicated to their fore fathers and mothers. They offer prayers a, food and drinks at local palaces.</p>
            </article>
            
            <article>
                <p><span class="steel"><small>Ubi festival</small></span><br />
                This comes up a day after <i>Ibe-iye</i> feast. In the morning of the day, women all over the town that are traditional believers match down to the town&#39;s arena with wood fire chanting prayers that sickness, diseases and quarrels should vacate the land as the feast being celebrated.<br />
                In the evening of that day comes traditional music carnival which used to be celebrated by only by Aganike and Iyagoshimili villages. But ever since the former bought the right to be celebrating <i>olu</i> festival from Ekpechor village, it ceased being a participant. Currently, it&#39;s being solely celebrated by Iyagoshimili village.<br />
                The carnival which lasts for hours, commences orgoh village end of the arena which deemed the head of the arena and ends at the other extreme where the arena intercepts the only express road transversing the town. They showcase their cultural and artistic heritage.</p>
            </article>
            
            <article>
                <p><span class="steel"><small>Ogwu festival</small></span><br />
                This takes place 16days after <i>Ubi</i>. The festival is satirical as thieves, fornicators and aldulterers in the town are being exposed and mocked in songs accompanied with sounds from traditional drums called <i>okonga</i>. This last for 9days. Every village celebrates the festival.</p>
            </article>
            
            <article>
                <p><span class="steel"><small>Ikenga festival</small></span><br />
                This is a day of assembling of ikenga(carved caricatures which they say is their personal gods) in local palaces. This takes place 2days after the commencement of <i>ogwu</i> festival. On this day, the <i>Ojogwu</i> group(warriors) dressed in red caps upon white robe dance from one local palace to another in the various villages with arrows.</p>
            </article>
            
            <article>
                <p><span class="steel"><small>Ujei festival</small></span><br />
                This comes 4days after <i>ikenga</i> feast has been celebrated. The youth group called <i>odifu</i> dance around the community from one local palace to the other with wrappers tied round their waists, drumming local gongs called <i>ekwe</i> which is carved from bamboo.<br />
                In the morning of that day, every village <i>odifu</i> group dance to <i>utor</i> shrine located in the town&#39;s arena. This lasts just a day.</p>
             </article>
             
             <article>
                <p><span class="steel"><small>11. Echi cutting festival</small></span><br />
                This marks the end of <i>ogwu</i> festival. It is a day of carnival at the town&#39;s arena. All the villages present their kings and perform <i>enu</i> traditional dance before the kings.<br />
                The hunters in the town(<i>otu-ajore</i>) do a joint dance performance . Rendering the air with sounds of local gun shots.</p>
            </article>
            
            <article>
                <p><span class="steel"><small>Olu festival</small></span><br />
                The festival which lasts for 5days climax the annual festival. It kicks-off a day after echi feast. Different age groups called <i>otu-orgbor</i> dance round the village even a night before the day the village celebrates the festival.<br />
                It is a traditional dance carnival. It is first celebrated by the villages in this sequence: Ekpechor, Uchebeh, Okemuokwuru, Ugbolo, Aganike. While the remaining village don&#39;t participate. The reason not known to me.</p>
            </article>    
                
             `;    
     
     
     
                                      } );         // END OF WINDOW CODE               
                                    



                             
             
                        
     

     
