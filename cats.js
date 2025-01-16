const eyes = document.querySelectorAll('.eye');
const pupils = document.querySelectorAll('.pupil');

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    eyes.forEach((eye, index) => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const angle = Math.atan2(clientY - eyeCenterY, clientX - eyeCenterX);
        const maxDistance = (rect.width / 2) - (pupils[index].offsetWidth / 2);

        const pupilX = Math.cos(angle) * maxDistance;
        const pupilY = Math.sin(angle) * maxDistance;

        pupils[index].style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});