function getDeviceDependentEndValue(value) {
    const windowWidth = window.innerWidth;
    
    if (windowWidth >= 992) { 
      return value; //  (desktop)
    } else if (windowWidth >= 768) { // (md)
      return 200; //  (tablet)
    } else { //  (sm, xs)
      return 300; // (mobile)
    }
  }
  
  function getDeviceDependentStartScale() {
    const windowWidth = window.innerWidth;
    
    if (windowWidth >= 992) { 
      return 0.5; //  (desktop)
    } else { //  (sm, xs)
      return 0.8; // (mobile)
    }
}


function getDeviceDependentStartScaleRight() {
    const windowWidth = window.innerWidth;
  
    // Define breakpoints and corresponding start values (adjust as needed)
    if (windowWidth >= 992) { // Large screens (lg)
      return 200; // Start scaling at the beginning (desktop)
    } else if (windowWidth >= 768) { // Medium screens (md)
      return 100; // Start scaling slightly later (tablet)
    } else { // Small screens (sm, xs)
      return 170; // Start scaling even later (mobile)
    }
  }

export {
    getDeviceDependentEndValue, getDeviceDependentStartScale,
    getDeviceDependentStartScaleRight
  }