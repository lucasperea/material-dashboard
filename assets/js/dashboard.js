$(function(){
    $('#menu-btn').on("click",function(){
        $('#menu-toggle').toggle('slide', {direction: 'left'}, 200);
         $('#wrapper').toggleClass('wrapper', 200);
         
    }); 
});
$(function(){
    $('#help-sidebar').on("click",function(){
        $('#help-menu').show('slide', {direction: 'right'}, 200);
         
         
    }); 
});


