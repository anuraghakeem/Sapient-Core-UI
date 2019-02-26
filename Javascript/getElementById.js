function changeColor(newColor) {
    var elem = document.getElementsByClassName('para');
    // var elem = document.querySelector('para');
    for(i=0;i<elem.length;i++)
        elem[i].style.color = newColor;
  }

  function hello(){
    this.firstName = "Kiran";
  }

  hello();