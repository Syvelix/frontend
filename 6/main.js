const feedLbl = document.getElementById("feedback_lbl");
const feedback = document.getElementById("feedback_form");

function fbToggle()
{
    feedback.hidden = !feedback.hidden;
}

feedLbl.addEventListener('click', fbToggle);