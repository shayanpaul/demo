$(function(){
MBP.scaleFix();
MBP.hideUrlBar();
$('#slider').cycle({
		timeout: 0,
		fx: 'scrollHorz',
		next: '#next',
		prev: '#prev',
		speed: 500,
		after: function(){
			var cimage = this.title;
                        var crel = $(this).attr('rel');
			$('.title').text(cimage);
                        $('.homeView').attr('id', crel);
                        
		} 
});

if($('.touch').length> 0){
	$("#slider").touchwipe({
 		wipeLeft: function() {
 	 		$("#slider").cycle("next");
 		},
 		wipeRight: function() {
 	 		$("#slider").cycle("prev");
        }
                
});
        	
 }
                
                var isTouch = (Modernizr.touch);
                if(!isTouch){
                     $(window).resize(function(){
                                if(window.innerWidth > window.innerHeight) {
                                      adjustmarginlandscape();      
                               }
                               else {
                                adjustmarginpotrait();
                               }
                     });
                }
                else {
					  window.addEventListener('orientationchange', handleOrientation, false);
					  function handleOrientation() {
									if(window.innerWidth > window.innerHeight) {
										   adjustmarginlandscape();      
									}
									else {
										adjustmarginpotrait();            
									}
						}              
                }
 
                

                
                function adjustmarginlandscape() {
                    $('.labitems').removeClass('no-margin', function(){
                             $('.labitems:nth-child(3n)').addClass('no-margin');  
                    });            
                }
                function adjustmarginpotrait() {
                    
                             $('.labitems:odd').addClass('no-margin');  
                                          
                }
                
                
                // current experiment code
                
                $(".bad, .good").on("touchstart",function(){
                    $(this).parent().hide(0, function(){
                          $('.thanksholder').fadeIn('fast', function(){
                                $('html, body').animate({
                                     scrollTop: $(".questionwrapper:first").offset().top
                                }, 2000);

                          });      
                    })            
                })
                
                $("#submitfeedback").deltatap(function(){
                       $(this).parents('.feedback').hide(0, function(){
                           $('.completed').fadeIn();
                           return false;
                       });
                       
                })
                
                
                // Beta stories code                
                $(".topics").deltatap(function(event){
                    event.stopPropagation();            
                    $('.topicsholder').fadeIn('fast');
                })
                
                
                $('.topicsholder, .topics').click(function(event){
                   event.stopPropagation();
                });
                
                             





})