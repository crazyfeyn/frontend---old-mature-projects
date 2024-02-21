let images = document.querySelectorAll(".slides img").forEach(function (el){
    el.onclick = function (){
      document.querySelector(".bg").src = el.src
    }
  })
  setInterval(() => {
    let $curr = document.querySelector('#slider1 input[type=radio]:checked'),
        $next = $curr.nextSibling;
        
    if (!$next.length) {
      $next = document.querySelector('#slider1 input[type=radio]').firstChild;
    }
    $next.setAttribute('checked', true);
  }, 3000);