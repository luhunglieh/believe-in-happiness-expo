document.addEventListener('DOMContentLoaded', () => {
    const wrappers = document.querySelectorAll('.carousel-wrapper');

    wrappers.forEach(wrapper => {
        const container = wrapper.closest('.carousel-container');
        const slides = wrapper.querySelectorAll('.carousel-slide');
        const prevBtn = container.querySelector('.carousel-btn.prev');
        const nextBtn = container.querySelector('.carousel-btn.next');
        const pagination = container.querySelector('.carousel-pagination');

        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                wrapper.scrollTo({
                    left: wrapper.offsetWidth * index,
                    behavior: 'smooth'
                });
            });
            pagination.appendChild(dot);
        });

        const dots = pagination.querySelectorAll('.dot');

        const updateDots = () => {
            const index = Math.round(wrapper.scrollLeft / wrapper.offsetWidth);
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        };

        wrapper.addEventListener('scroll', updateDots);

        prevBtn.addEventListener('click', () => {
            wrapper.scrollBy({ left: -wrapper.offsetWidth, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            wrapper.scrollBy({ left: wrapper.offsetWidth, behavior: 'smooth' });
        });

        // Handle window resize
        window.addEventListener('resize', updateDots);
    });
});
