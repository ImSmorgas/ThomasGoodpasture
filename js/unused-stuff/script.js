// 5
// Animated Elements
// AE 1s 5
document.addEventListener("DOMContentLoaded", function () {
    // Script for animated-element-1s
    const containerElementSlow = document.getElementById('5');
    const animatedElementsSlow = containerElementSlow.querySelectorAll('.animated-element-1s');

    const observerSlow = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting && !target.classList.contains('active')) {
                target.classList.add('active');
            } else if (!entry.isIntersecting && target.classList.contains('active')) {
                target.classList.remove('active');
                target.style.animation = 'none';
                void target.offsetWidth;
                target.style.animation = null;
            }
        });
    }, { threshold: 0.5 });

    animatedElementsSlow.forEach(element => {
        observerSlow.observe(element);
    });
});
// AE 2s 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-element-2s');

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
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AE 3s 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-element-3s');

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
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AE 4s 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-element-4s');

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
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AE 5s 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-element-5s');

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
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AE 6s 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-element-6s');

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
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AE OIMU
document.addEventListener("DOMContentLoaded", function () {
    // Script for opacity-in-move-up
    const targetElementMoveUp = document.getElementById('5');
    const h1ElementMoveUp = targetElementMoveUp.querySelector('.opacity-in-move-up');

    const startAnimationMoveUp = () => {
        h1ElementMoveUp.classList.add('active');
        h1ElementMoveUp.classList.remove('reset'); // Remove the reset class
        h1ElementMoveUp.style.animation = 'combinedAnimation 2s 1s ease-in-out forwards';
    };

    const stopAnimationMoveUp = () => {
        h1ElementMoveUp.classList.remove('active');
        h1ElementMoveUp.classList.add('reset'); // Add a class to reset the initial state
        h1ElementMoveUp.style.animation = 'none'; // Reset animation
        void h1ElementMoveUp.offsetWidth; // Trigger reflow for the next animation
        h1ElementMoveUp.style.animation = null; // Re-enable animation
    };

    const observerCallbackMoveUp = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.001) {
                stopAnimationMoveUp(); // Reset animations when id=5 is slightly visible
            }
            if (entry.isIntersecting && entry.intersectionRatio >= 1) {
                startAnimationMoveUp(); // Start animation once fully visible
            } else {
                stopAnimationMoveUp();
            }
        });
    };

    const observerMoveUp = new IntersectionObserver(observerCallbackMoveUp, { threshold: [0.001, 1] });

    observerMoveUp.observe(targetElementMoveUp);

    // Listen for visibility changes
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            stopAnimationMoveUp();
        }
    });
});
// AT 3s 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-3s');

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
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 3s gpa 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-3s-gpa');

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
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 3s Google 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');

    const animations = [
        { class: 'animated-text-3s-google-g1', color: '#0081ff', duration: 3 },
        { class: 'animated-text-3s-google-o1', color: '#ff3606', duration: 3.2 },
        { class: 'animated-text-3s-google-o2', color: '#ffbe00', duration: 3.4 },
        { class: 'animated-text-3s-google-g2', color: '#0081ff', duration: 3.6 },
        { class: 'animated-text-3s-google-l', color: '#00b323', duration: 3.8 },
        { class: 'animated-text-3s-google-e', color: '#ff3606', duration: 4 }
    ];

    animations.forEach(animation => {
        const animatedElements = containerElement.querySelectorAll('.' + animation.class);

        const keyframes = `
            0% { color: #fefefe; }
            50% { color: #fefefe; }
            100% { color: ${animation.color}; }
        `;

        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`@keyframes colorChange${animation.class} ${animation.duration}s ease-in-out 3s { ${keyframes} }`, styleSheet.cssRules.length);
        styleSheet.insertRule(`.${animation.class} { color: #fefefe; animation: none; }`, styleSheet.cssRules.length);

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const target = entry.target;

                if (entry.isIntersecting) {
                    if (!target.classList.contains('active')) {
                        // Element is entering the view
                        target.classList.add('active');
                        target.style.animation = `colorChange${animation.class} ${animation.duration}s ease-in-out 3s`;
                    }
                } else {
                    // Element is leaving the view
                    target.classList.remove('active');
                    target.style.animation = 'none'; // Reset animation when out of view
                }
            });
        }, { threshold: 1 });

        animatedElements.forEach(element => {
            observer.observe(element);

            element.addEventListener('animationiteration', () => {
                // Animation iteration event, remove 'active' class to restart animation
                element.classList.remove('active');
            });
        });
    });
});
// AT 4s css 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-4s-css');

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
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 4s html 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-4s-html');

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
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 4s js 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-4s-js');

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
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 4s ai 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-4s-ai');

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
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 4s aps 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-4s-aps');

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
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 4s app 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-4s-app');

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
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 4s axd 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-4s-axd');

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
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
// AT 4s Figma 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');

    const animations = [
        { class: 'animated-text-4s-figma-f', color: '#f14e1c', duration: 3 },
        { class: 'animated-text-4s-figma-i', color: '#a25aff', duration: 3.2 },
        { class: 'animated-text-4s-figma-g', color: '#0acf84', duration: 3.4 },
        { class: 'animated-text-4s-figma-m', color: '#ff7362', duration: 3.6 },
        { class: 'animated-text-4s-figma-a', color: '#19bcfe', duration: 3.8 }
    ];

    animations.forEach(animation => {
        const animatedElements = containerElement.querySelectorAll('.' + animation.class);

        const keyframes = `
            0% { color: #fefefe; }
            50% { color: #fefefe; }
            100% { color: ${animation.color}; }
        `;

        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`@keyframes colorChange${animation.class} ${animation.duration}s ease-in-out 4s { ${keyframes} }`, styleSheet.cssRules.length);
        styleSheet.insertRule(`.${animation.class} { color: #fefefe; animation: none; }`, styleSheet.cssRules.length);

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const target = entry.target;

                if (entry.isIntersecting) {
                    if (!target.classList.contains('active')) {
                        // Element is entering the view
                        target.classList.add('active');
                        target.style.animation = `colorChange${animation.class} ${animation.duration}s ease-in-out 4s`;
                    }
                } else {
                    // Element is leaving the view
                    target.classList.remove('active');
                    target.style.animation = 'none'; // Reset animation when out of view
                }
            });
        }, { threshold: 1 });

        animatedElements.forEach(element => {
            observer.observe(element);

            element.addEventListener('animationiteration', () => {
                // Animation iteration event, remove 'active' class to restart animation
                element.classList.remove('active');
            });
        });
    });
});
// AT 5s 5
document.addEventListener("DOMContentLoaded", function () {
    const containerElement = document.getElementById('5');
    const animatedElements = containerElement.querySelectorAll('.animated-text-5s');

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
    }, { threshold: 1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});