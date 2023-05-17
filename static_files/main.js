
const  hiddenMenu = document.getElementById("hiddenMenu");

document
  .getElementById("menuButton")
  .addEventListener("click", showMenu);


function showMenu (){

  const { classList } = hiddenMenu;

  if (classList.contains('HideMenu')) {

    classList.add("ShowMenu");
    classList.remove("HideMenu");

  } else {
    classList.remove("ShowMenu");
    classList.add("HideMenu");

  }
}

