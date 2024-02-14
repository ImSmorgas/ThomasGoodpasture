$(document).ready(function () {
    // Background Animations
    gsap.to('#bg-c1', {
        xPercent: 400,
        yPercent: 500,
        duration: 45,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    });

    gsap.to('#bg-c2', {
        xPercent: -400,
        yPercent: -500,
        duration: 25,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    });

    gsap.to('#bg-c3', {
        yPercent: 500,
        duration: 55,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    });

    gsap.to('#bg-c4', {
        yPercent: -600,
        duration: 35,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    });

    gsap.to('#bg-c5', {
        duration: 75,
        ease: 'none',
        repeat: -1,
        motionPath: {
            path: [
                { x: 10, y: 0 },
                { x: 0, y: 10 },
                { x: -10, y: 0 },
                { x: 0, y: -10 },
            ],
            align: '#bg-c5',
            autoRotate: true,
        },
    });

    

    // Cursor Follower
    const cursorFollower = document.getElementById('bg-ci');

    $(document).on('mousemove', function (event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const svgElement = document.querySelector('.bg');
        const svgRect = svgElement.getBoundingClientRect();
        const viewBox = svgElement.viewBox.baseVal;

        const scaleX = viewBox.width / svgRect.width;
        const scaleY = viewBox.height / svgRect.height;

        const offsetX = (mouseX - svgRect.left) * scaleX;
        const offsetY = (mouseY - svgRect.top) * scaleY;

        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        const duration = isSafari ? 0.0 : 0.3;

        gsap.to(cursorFollower, {
            x: offsetX,
            y: offsetY,
            duration: duration,
            ease: 'power2.out',
        });
    });

    const viewBoxScale = 1;
    // Set viewBox dimensions to be twice the size of the screen
    const svgElement = document.querySelector('.bg');
    const existingLeft = parseFloat(getComputedStyle(svgElement).left); // Get the existing left value
    svgElement.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
    svgElement.style.position = 'absolute';
    svgElement.style.top = '0';
    svgElement.style.left = `0`; // Adjust based on scroll position
    
    // Update the width and height of the filter based on the screen size (doubled)
    const filterElement = document.getElementById('colormatrix');
    filterElement.setAttribute('width', window.innerWidth);
    filterElement.setAttribute('height', window.innerHeight);

    // Update the filter when the window is resized
    window.addEventListener('resize', () => {
        filterElement.setAttribute('width', window.innerWidth);
        filterElement.setAttribute('height', window.innerHeight);
    });
});
