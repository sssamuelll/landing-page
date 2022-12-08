$( document ).ready(function() {
    var flag = false;
    $(document).scroll(function(){
        if($(document).scrollTop() > 43){
            $(".site-header").css("position","fixed");
            $(".site-header").css("top","0px");
        }else{
            $(".site-header").css("position","absolute");
            $(".site-header").css("top","44px");   
        }
    });

    //Flag selector
    $(document).click(function(event) { 
        var $target = $(event.target);
        if(!$target.closest("[class='dropbtn']").length) {
          if (flag == true) {
            flag = false;
            $("[id='dropdown-content']").removeClass("dropdown-on-content");
            $("[id='dropdown-content']").addClass("dropdown-off-content");
          }
        }
      });
  
      $("[class='dropbtn']").click(function() {
        if (flag == false) {
          flag = true;
          $("[id='dropdown-content']").removeClass("dropdown-off-content");
          $("[id='dropdown-content']").addClass("dropdown-on-content");
          
        } else if (flag == true) {
          flag = false;
          $("[id='dropdown-content']").removeClass("dropdown-on-content");
          $("[id='dropdown-content']").addClass("dropdown-off-content");
        }
      });
});