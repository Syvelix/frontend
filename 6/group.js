const sideBtn = document.getElementById("lessons_schedule_btn");
const week1 = document.getElementById("week1");
const week2 = document.getElementById("week2");

side = 3;

function side_buttoning()
{
    side < 3 ? side += 1 : side = 1;

    switch (side)
    {
        case 1:
            week1.hidden = false;
            week2.hidden = true;
            sideBtn.textContent = "Первая неделя";
            break;
        case 2:
            week1.hidden = true;
            week2.hidden = false;
            sideBtn.textContent = "Вторая неделя";
            break;
        case 3:
            week1.hidden = false;
            week2.hidden = false;
            sideBtn.textContent = "Обе недели";
            break;
        default:
            sideBtn.textContent = "???";

    }
}

sideBtn.addEventListener('click', side_buttoning);