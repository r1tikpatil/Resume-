var navMenuAnchorTags = document.querySelectorAll(".nav-list a")

for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId)
        var interval = setInterval(function () {
            var targetSectionCoordinate = targetSection.getBoundingClientRect();
            if (targetSectionCoordinate.top <= 0) {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        }, 20);
    });
}

var skillsContainer = document.getElementById('skills-list')
var progressBars = document.querySelectorAll('.skill-progress > div')
var animationDone = false;
window.addEventListener('scroll', checkScroll);

function initialiseBars() {
    for (let bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}

initialiseBars();

function checkScroll() {
    var coordinate = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinate.top <= window.innerHeight) {
        animationDone = true;
        fillbars();
    }
    else if (coordinate.top > window.innerHeight) {
        animationDone = false;
        initialiseBars();
    }
}



function fillbars() {
    for (let i = 0; i < progressBars.length; i++) {
        let targetWidth = progressBars[i].getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function () {
            if (currentWidth > targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            progressBars[i].style.width = currentWidth + '%';
        }, 4)
    }
}