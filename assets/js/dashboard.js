//topnav tooltip

//topnav hamburger menu

$(function () {
    $('#menu-btn').on("click", function () {

        $('#menu-toggle').css({"visibility": "visible"}).show('slide',{direction: 'left'},200);

      $('#wrapper').css({"margin-left": "20%","transition":".3s"});
  


    });
});
$(function () {
    $('#close-menu').on("click", function () {

   $('#menu-toggle').hide('slide',{direction: 'left'},200);
      $('#wrapper').css({"margin-left": "0","transition":".3s"});
   
        $('#menu-btn').css({"visibility":"visible","transition":"5s"});
        $('#top-nav-userinfo').append("");
    });
});
//Help SideBar toggle
$(function(){
    $("#help-sidebar").on("click", function(){
       $("#help-menu").css({"visibility":"visible"});
        
        $("#help-menu").show();
       $("#wrapper").css({"margin-right":"20%"});
      console.log("sidebar-clicked");

    
    });
});


//sortable grid area

$(function () {
    $("#messages").draggable({snap: true}).resizable({ghost:true},{animate: true}, {grid: 50}).sortable({revert: true}).sortable().disableSelection();
    $("#trending-events").draggable({snap: true}).resizable({ghost:true},{animate: true}, {grid: 50}).sortable({revert: true}).sortable().disableSelection();

});