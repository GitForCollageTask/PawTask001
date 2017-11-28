$(function(){
    $('.searchTerm').on("focus blur", function(){   
      $(this).parent().toggleClass("expanded collapsed");
       $(this).siblings('.suggestionBox').toggle();
      });
  });