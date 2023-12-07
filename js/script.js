document.addEventListener("DOMContentLoaded", () => {
    let sharedPageIndex = 0;

    slide = (direction, containerId) => {
        const container = document.getElementById(containerId);
        const pages = container.children;

        // Calculate totalPages dynamically
        const totalPages = pages.length;

        if (direction === 'next' && sharedPageIndex < totalPages - 1) {
            sharedPageIndex++;
        }

        if (direction === 'prev' && sharedPageIndex > 0) {
            sharedPageIndex--;
        }

        if (direction === 'down' && containerId === 'pages1') {
            const currentPageClass = pages[sharedPageIndex].classList[1];

            if (currentPageClass === 'one') {
                const pages2Container = document.getElementById('pages2');
                const pageFour = document.querySelector('.page.four');
                smoothVerticalScroll(pageFour, 1500); // Adjust the duration
                return;
            }

            if (currentPageClass === 'two') {
                const pages2Container = document.getElementById('pages2');
                const pageFive = document.querySelector('.page.five');
                smoothVerticalScroll(pageFive, 1500); // Adjust the duration
                return;
            }

            if (currentPageClass === 'three') {
                const pages2Container = document.getElementById('pages2');
                const pageSix = document.querySelector('.page.six');
                smoothVerticalScroll(pageSix, 1500); // Adjust the duration
                return;
            }
        }

        if (direction === 'up' && containerId === 'pages2') {
            const currentPageClass = pages[sharedPageIndex].classList[1];

            if (currentPageClass === 'four') {
                const pages1Container = document.getElementById('pages1');
                const pageOne = document.querySelector('.page.one');
                smoothVerticalScroll(pageOne, 1500); // Adjust the duration
                return;
            }

            if (currentPageClass === 'five') {
                const pages1Container = document.getElementById('pages1');
                const pageTwo = document.querySelector('.page.two');
                smoothVerticalScroll(pageTwo, 1500); // Adjust the duration
                return;
            }

            if (currentPageClass === 'six') {
                const pages1Container = document.getElementById('pages1');
                const pageThree = document.querySelector('.page.three');
                smoothVerticalScroll(pageThree, 1500); // Adjust the duration
                return;
            }
        }

        const translateX = -sharedPageIndex * 33.33333333333333333;

        container.style.transform = `translateX(${translateX}%)`;

        const otherContainerId = containerId === 'pages1' ? 'pages2' : 'pages1';
        const otherContainer = document.getElementById(otherContainerId);
        otherContainer.style.transform = `translateX(${translateX}%)`;
    };

    const smoothVerticalScroll = (element, duration) => {
        const yOffset = 0; // Adjust the vertical offset as needed
        const targetY = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        const initialY = window.pageYOffset;
        const distance = targetY - initialY;
        const startTime = performance.now();

        const easeInOutQuad = (time, start, change, duration) => {
            time /= duration / 2;
            if (time < 1) return change / 2 * time * time + start;
            time--;
            return -change / 2 * (time * (time - 2) - 1) + start;
        };

        const animateScroll = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            window.scrollTo(0, easeInOutQuad(elapsedTime, initialY, distance, duration));

            if (elapsedTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    slide('next', 'pages1');
});
// Animated Elements
document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll('.animated-element-slow');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                target.classList.remove('active');
                target.style.animation = 'none'; // Reset animation when out of view
                void target.offsetWidth; // Trigger reflow for the next animation
                target.style.animation = null; // Re-enable animation
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll('.animated-element-slower');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                target.classList.remove('active');
                target.style.animation = 'none'; // Reset animation when out of view
                void target.offsetWidth; // Trigger reflow for the next animation
                target.style.animation = null; // Re-enable animation
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll('.animated-element-slowest');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                // Element is entering the view
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                // Element is leaving the view
                target.classList.remove('active');
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll('.animated-element-no-move');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                target.classList.remove('active');
                target.style.animation = 'none'; // Reset animation when out of view
                void target.offsetWidth; // Trigger reflow for the next animation
                target.style.animation = null; // Re-enable animation
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll('.animated-element-slow');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                target.classList.remove('active');
                target.style.animation = 'none'; // Reset animation when out of view
                void target.offsetWidth; // Trigger reflow for the next animation
                target.style.animation = null; // Re-enable animation
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.button-animated-horizontal');
    let hasAnimated = false;

    const resetAnimation = () => {
        button.style.animation = 'none'; // Reset animation
        void button.offsetWidth; // Trigger reflow for the next animation
        button.style.animation = null; // Re-enable animation
    };

    const startAnimation = () => {
        button.classList.add('button-animated-horizontal');
        hasAnimated = true;

        // Stop the animation after 9 seconds
        setTimeout(() => {
            stopAnimation();
        }, 9000);
    };

    const stopAnimation = () => {
        button.classList.remove('button-animated-horizontal');
        resetAnimation();
        hasAnimated = false;
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
                startAnimation();
            } else if (!entry.isIntersecting && hasAnimated) {
                stopAnimation();
            }
        });
    };

    // Set up Intersection Observer
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.01 });

    // Observe the button
    observer.observe(button);
});



document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.button-animated-vertical');

    buttons.forEach(button => {
        let hasAnimated = false;

        const resetAnimation = () => {
            button.style.animation = 'none'; // Reset animation
            void button.offsetWidth; // Trigger reflow for the next animation
            button.style.animation = null; // Re-enable animation
        };

        const startAnimation = () => {
            button.classList.add('button-animated-vertical');
            hasAnimated = true;

            // Stop the animation after 9 seconds
            setTimeout(() => {
                stopAnimation();
            }, 9000);
        };

        const stopAnimation = () => {
            button.classList.remove('button-animated-vertical');
            resetAnimation();
            hasAnimated = false;
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    startAnimation();
                } else if (!entry.isIntersecting && hasAnimated) {
                    stopAnimation();
                }
            });
        };

        // Set up Intersection Observer
        const observer = new IntersectionObserver(observerCallback, { threshold: 0.01 });

        // Observe the button
        observer.observe(button);

        // Remove the animation class and reset animation on page load
        resetAnimation();
    });
});


// Animated Elements