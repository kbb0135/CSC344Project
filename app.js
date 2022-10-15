const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click',function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
function myFunction() { 
    document.getElementById("DropDown").classList.toggle("show");
}
windows.onclick = function(event) {
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
