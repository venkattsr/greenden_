//selecting sideNavbar, mainIcon
var sidenav = document.getElementById("sidenav")
var mainIcon = document.getElementById("mainicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})

closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})