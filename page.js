window.onload = function () {
    const doorElement = document.getElementById('center-door');
    const leftDoor = document.getElementById('left-door');
    const behindDoor = document.getElementById('behind-door');
    const behindDoorStyle = getComputedStyle(behindDoor);
    const boat = document.getElementById('boat');
    const home = document.getElementById('home');
    const projects = document.getElementById('projects');
    const hobbies = document.getElementById('hobbies');
    const resume = document.getElementById('resume');

    const homeBtn = document.getElementById('home-button');
    const projectsBtn = document.getElementById('projects-button');
    const hobbiesBtn = document.getElementById('hobbies-button');
    const resumeBtn = document.getElementById('resume-button');

    leftDoor.addEventListener('transitionend', function (event) {
        doorElement.remove();
        if (behindDoorStyle.display !== 'none') {
            behindDoor.style.display = 'grid';
        }
    });
    const config = {
        attributes: true
    };
    homeBtn.addEventListener('click', (event) => {

        projects.style.visibility = 'collapse';
        hobbies.style.visibility = 'collapse';
        resume.style.visibility = 'collapse';
        home.style.visibility = 'visible';


        projects.style.display = 'none';
        hobbies.style.display = 'none';
        resume.style.display = 'none';
        home.style.display = 'grid';
    });
    projectsBtn.addEventListener('click', (event) => {

        projects.style.visibility = 'visible';
        hobbies.style.visibility = 'collapse';
        resume.style.visibility = 'collapse';
        home.style.visibility = 'collapse';


        projects.style.display = 'block';
        hobbies.style.display = 'none';
        resume.style.display = 'none';
        home.style.display = 'none';
    });
    resumeBtn.addEventListener('click', (event) => {

        projects.style.visibility = 'collapse';
        hobbies.style.visibility = 'collapse';
        resume.style.visibility = 'visible';
        home.style.visibility = 'collapse';

        projects.style.display = 'none';
        hobbies.style.display = 'none';
        resume.style.display = 'block';
        home.style.display = 'none';
    });
    hobbiesBtn.addEventListener('click', (event) => {

        projects.style.visibility = 'collapse';
        hobbies.style.visibility = 'visible';
        resume.style.visibility = 'collapse';
        home.style.visibility = 'collapse';


        projects.style.display = 'none';
        hobbies.style.display = 'block';
        resume.style.display = 'none';
        home.style.display = 'none';
    });

    const cb = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === 'attributes') {
                setTimeout(() => {
                    behindDoor.remove();
                    observer.disconnect();
                }, 6000);
            }
        }
    };
    const observer = new MutationObserver(cb);
    observer.observe(behindDoor, config);
};