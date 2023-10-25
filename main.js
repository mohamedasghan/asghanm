//show menu
const showMENU = (toggleID, navID) => {
    const toggle = document.getElementById(toggleID),
     nav = document.getElementById(navID)

     if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        });
     }

}
showMENU('nav_toggle', 'nav_menu')
//active and non active
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))
function linkaction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('.active')
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n =>n.addEventListener('click' , linkaction))