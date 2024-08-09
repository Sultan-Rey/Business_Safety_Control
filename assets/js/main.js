jQuery(document).ready(function($) {
  "use strict";
  window.addEventListener('resize', function(e){
    if(this.window.innerWidth>992){
      document.getElementById("sidebar").style.display="flex";
      //e.preventDefault();
    }else{
      document.getElementById("sidebar").style.display="none";
    }
  });
  

});

function openNavmd() {  
  
  if($('.toggle-btn-md').html()== '☰'){
    document.getElementById("toggle-btn").innerHTML="&times;";
  document.getElementById("sidebar").style.display="flex";
  $('#content').css('overflow-x','auto');
}else{
  document.getElementById("toggle-btn").innerHTML="☰";
  document.getElementById("sidebar").style.display="none";
}
}
