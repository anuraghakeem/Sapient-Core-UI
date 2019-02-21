function changeColor(newColor) {
    var elem = document.getElementsByClassName('para');
    for(i=0;i<elem.length;i++)
        elem[i].style.color = newColor;
  }

  function hello(){
    this.firstName = "Kiran";
  }

  hello();