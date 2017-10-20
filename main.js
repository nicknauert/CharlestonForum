  document.querySelector("#aboutLink").addEventListener("click", function(e){
    document.querySelector('.section-1').scrollIntoView({ 
        behavior: 'smooth' 
      });
  })

  document.querySelector("#sponsorsLink").addEventListener("click", function(e){
    document.querySelector('.section-2').scrollIntoView({ 
        behavior: 'smooth' 
      });
  })

  document.querySelector("#eventLink").addEventListener("click", function(e){
    document.querySelector('.video').scrollIntoView({ 
        behavior: 'smooth' 
      });
  })

  document.querySelector("#digitalForumLink").addEventListener("click", function(e){
    document.querySelector('.video-section-info').scrollIntoView({ 
        behavior: 'smooth' 
      });
  })

  document.querySelector(".emailSubmitBtn").addEventListener("click", function(evt){
    evt.preventDefault();
    //send
  })