// MENU toggler
const navToggler = document.querySelector(".nav__toggler");
const nav = document.querySelector(".nav");
navToggler.addEventListener("click",(e)=>{
  nav.classList.toggle("nav__expand");
})

// SIDEBAR toggler
const sidebarSearch = document.querySelector(".sidebar__search-filter");
const containerSidebar= document.querySelector(".container__sidebar");
sidebarSearch.addEventListener("click",(e)=>{
  containerSidebar.classList.toggle("sidebar__expand");
})