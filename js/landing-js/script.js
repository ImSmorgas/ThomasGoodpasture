$(document).ready(function () {
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

    // Handle download button click
    $('.download-button').on('click', function (event) {
        event.preventDefault();
        var downloadLink = $('.download-button').attr('href');
        var fileName = 'Goodpasture_Thomas_Resume';
        saveAs(downloadLink, fileName);
    });
});
