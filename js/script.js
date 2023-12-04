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
                pageFour.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }

            if (currentPageClass === 'two') {
                const pages2Container = document.getElementById('pages2');
                const pageFive = document.querySelector('.page.five');
                pageFive.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }

            if (currentPageClass === 'three') {
                const pages2Container = document.getElementById('pages2');
                const pageSix = document.querySelector('.page.six');
                pageSix.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
        }

        if (direction === 'up' && containerId === 'pages2') {
            const currentPageClass = pages[sharedPageIndex].classList[1];

            if (currentPageClass === 'four') {
                const pages1Container = document.getElementById('pages1');
                const pageOne = document.querySelector('.page.one');
                pageOne.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }

            if (currentPageClass === 'five') {
                const pages1Container = document.getElementById('pages1');
                const pageTwo = document.querySelector('.page.two');
                pageTwo.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }

            if (currentPageClass === 'six') {
                const pages1Container = document.getElementById('pages1');
                const pageThree = document.querySelector('.page.three');
                pageThree.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
        }

        const translateX = -sharedPageIndex * 33.33333333333333333;

        container.style.transform = `translateX(${translateX}%)`;

        const otherContainerId = containerId === 'pages1' ? 'pages2' : 'pages1';
        const otherContainer = document.getElementById(otherContainerId);
        otherContainer.style.transform = `translateX(${translateX}%)`;
    };

    slide('next', 'pages1');
});
