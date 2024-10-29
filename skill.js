document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll('.skill-bar span');
    const skillPercentages = document.querySelectorAll('.skill-percentage');

    skillBars.forEach((skillBar, index) => {
        const percentageText = skillPercentages[index].textContent.trim();
        const targetPercentage = parseInt(percentageText.slice(0, -1), 10); 
        skillBar.style.width = targetPercentage + '%'; 

        let currentPercentage = 0; 
        const interval = setInterval(() => {
            if (currentPercentage < targetPercentage) {
                currentPercentage++; 
                skillPercentages[index].textContent = currentPercentage + '%'; 
            } else {
                clearInterval(interval); 
            }
        }, 20); 
    });
});
