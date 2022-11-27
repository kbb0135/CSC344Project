const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click',function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});



function myFunction() { 
    document.getElementById("DropDown").classList.toggle("show");
}
window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-conetent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.setting')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  /*
  function darkmode() {
   
    document.body.classList.add("dark");

  }

  function lightmode() {
   
    document.body.classList.remove("dark");

  }

  checkDarkmode();
  
  function enableLightMode(){

    document.body.classList.remove("dark");

    localStorage.darkMode = false;

  }

  function enableDarkMode(){

    document.body.classList.add("dark");

    localStorage.darkMode = true;

  }

  function checkDarkMode(){

    if(localStorage.darkMode){

      document.body.classList.add("dark");

    }

    else{

      document.body.classList.remove("dark");

    }

  }*/

  /*Dark-Mode Feature*/
  const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.00000001s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#2E3440;',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
 