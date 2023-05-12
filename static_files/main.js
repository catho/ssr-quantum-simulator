
const  Menu = document.getElementById("HiddenMenu");

document
  .querySelector("#ShowMenuButton")
  .addEventListener("click", MakeVisible);


function MakeVisible (){

  if (Menu.classList.contains('HideMenu')) {

    Menu.classList.add("ShowMenu");
    Menu.classList.remove("HideMenu");

  } else {
    Menu.classList.remove("ShowMenu");
    Menu.classList.add("HideMenu");

  }
}

