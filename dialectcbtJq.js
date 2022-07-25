var jq =  $.noConflict();
jq(document).ready( function(){
      jq("#nav-icon").click(function(){ jq("#nav-modal").fadeToggle(500); 
                                                         jq("#nav-modal").children().click(function(){  jq("#nav-modal").fadeOut(500);} );
                                                            } ) ;


                           } ) ;




          
                  





                                        