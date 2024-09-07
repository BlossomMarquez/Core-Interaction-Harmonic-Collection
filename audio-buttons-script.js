    let vid = document.getElementById("myVideo");
    
    function getVolume() { 
      alert(vid.volume);
    } 
      
    function setNoVolume() {
      vid.volume = 0.0;
    }

    function setHalfVolume() { 
      vid.volume = 0.2;
    } 
      
    function setFullVolume() { 
      vid.volume = 1.0;
    } 
