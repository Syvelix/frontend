const navBtn = document.getElementById("nav_button");

const navStatusOpen = 'Меню';
const navStatusClose = 'Закрыть';
navMobileState = -0.99;
navPCState = 0;


function switchNav()
{
    document.documentElement.style.setProperty('--nav_mobile_hidden', navMobileState);
    document.documentElement.style.setProperty('--nav_pc_hidden', navPCState)
}

function switchNavState()
{
    switch (navMobileState)
    {
        case 0:
            navMobileState = -0.99;
            navBtn.textContent = navStatusOpen;
            break;
        default:
            navMobileState = 0;
            navBtn.textContent = navStatusClose;
            break;
    }
    
    switch (navPCState)
    {
        case 0:
            navPCState = -6;
            navBtn.textContent = navStatusOpen;
            break;
        default:
            navPCState = 0;
            navBtn.textContent = navStatusClose;
            break;
    }
}

navBtn.addEventListener('click', switchNavState);
navBtn.addEventListener('click', switchNav);