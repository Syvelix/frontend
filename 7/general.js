const navBtn = document.getElementById("nav_button");
const navRefs = document.querySelectorAll("nav a");
const navStatusOpen = 'Меню';
const navStatusClose = 'Закрыть';
navMobileState = -0.99;
navPCState = -6;

const uniboxes = document.getElementsByClassName("unibox");

const unitables = document.getElementsByClassName("unitable");

const fun = document.getElementsByClassName("fun")[0];

const logo = document.querySelector(".stylebox img");

const intro = document.querySelector(".intro");

function changeDefaultOpacity(opacity)
{
    document.documentElement.style.setProperty('--default_opacity', opacity);
}

function changeMaxOpacity(opacity)
{
    document.documentElement.style.setProperty('--max_opacity', opacity);    
}

function changeDefaultSlide(slide)
{
    document.documentElement.style.setProperty('--default_slide', slide);
}

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

function pseudoSPA()
{
    logo.style.animationName = "rotateFull";
    logo.style.animationIterationCount = "infinite";
    logo.style.animationDuration = "0.8s";
    logo.style.animationDirection = "forwards";
    logo.style.animationPlayState = "running";

    intro.style.animationName = "zero_opacity";
    intro.style.animationPlayState = "running";

    for (const unibox of uniboxes)
    {
        unibox.style.animationName = "zero_opacity";
        unibox.style.animationPlayState = "running";       
    };

    for (const unitable of unitables)
    {
        unitable.style.animationName = "zero_opacity";
        unitable.style.animationPlayState = "running";       
    };

    fun.style.animationName = "zero_opacity";
    fun.style.animationPlayState = "running";    
    console.log("pseudo");
}

navBtn.addEventListener('click', switchNavState);
navBtn.addEventListener('click', switchNav);

navRefs.forEach(a => a.addEventListener('click', pseudoSPA))

setTimeout(() => changeDefaultOpacity(1), 1800);
setTimeout(() => changeDefaultSlide(0), 1300);