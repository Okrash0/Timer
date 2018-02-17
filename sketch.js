var w = 1;

function notifyMe() {

  var m = 20;
  var s = 0;
  var i = true;

  if (w == 1) {
  var refreshIntervalId = setInterval(function() {
  
  s -= 1;
  
  
  if (s <= 0 && m > 0) {
    m -= 1;
    s = 59;
  }
  
  else if (m <= 0 && s <= 0 && i === true) {
    
  i = false;
  m = 5;
    
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
  }

  
  // Let's check whether notification permissions have alredy been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Time's up (20)");
  }
  
  
  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied' || Notification.permission === "default") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Time's up (20)");
      }
    });
  }
}

  else if (m <= 0 && s <= 0 && i === false) {
    
  i = true;
  m = 20;
    
  
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
  }

  
  else if (Notification.permission === "granted") {
  
    notification = new Notification("Time's up (5)");
  }
  
  
  
  else if (Notification.permission !== 'denied' || Notification.permission === "default") {
    Notification.requestPermission(function (permission) {
    
      if (permission === "granted") {
        var notification = new Notification("Time's up (5)");
      }
    });
  }
}

  document.getElementById('timer').innerHTML = m + ':' + s;
  }, 10);
  }
  w = -1;
}

