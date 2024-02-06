document.addEventListener("DOMContentLoaded", function() {
    // Scroll to the section with ID #2 on page load without animation
    const section2 = document.getElementById('2');
    if (section2) {
        section2.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
});
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

    document.addEventListener('mousemove', (event) => {
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

    const viewBoxScale = 0.5;
    // Set viewBox dimensions to be twice the size of the screen
    const svgElement = document.querySelector('.bg');
    svgElement.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
    // Update the width and height of the filter based on the screen size (doubled)
    const filterElement = document.getElementById('colormatrix');
    filterElement.setAttribute('width', window.innerWidth);
    filterElement.setAttribute('height', window.innerHeight);
    // Update the filter when the window is resized
    window.addEventListener('resize', () => {
        filterElement.setAttribute('width', window.innerWidth);
        filterElement.setAttribute('height', window.innerHeight);
    });

    // Lightbox Initialization
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': 'Image %1 of %2',
        'disableScrolling': true,
    });

    // Add download button after Lightbox is initialized
    console.log('Adding download button');
    $('.lb-container').append('<a href="images/Goodpasture_Thomas_Resume.png" class="download-button">Download</a>');

    // Update the download link when a new image is shown
    lightbox.option({
        'afterShow': function (lightbox) {
            console.log('Updating download button href:', lightbox.currentImage.href);
            $('.download-button').attr('href', lightbox.currentImage.href);
        }
    });

    // Add styling to the download button
    $('.download-button').css({
        'display': 'block',
        'padding': '10px',
        'background-color': '#023471',
        'color': '#fff',
        'text-decoration': 'none',
        'margin-top': '10px',
        'border-radius': '5px',
        'width': '30%',
        'height': '30px',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'text-align': 'center',
        'line-height': '10px',
    });
   $('.download-button').on('click', function (event) {
        event.preventDefault();
        var downloadLink = $('.download-button').attr('href');
        var fileName = 'Goodpasture_Thomas_Resume';
        saveAs(downloadLink, fileName);
    });
});