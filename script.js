document.addEventListener("DOMContentLoaded", () => {
    // Анимация появления элементов
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));

    const rabbitCount = 10;
    for (let i = 0; i < rabbitCount; i++) {
        const rabbit = document.createElement('img');
        rabbit.src = 'rabbit.png'; 
        rabbit.classList.add('rabbit');
        document.body.appendChild(rabbit);

        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        rabbit.style.left = `${randomX}px`;
        rabbit.style.top = `${randomY}px`;

        function moveRabbit() {
            const moveX = Math.random() * window.innerWidth;
            const moveY = Math.random() * window.innerHeight;
            rabbit.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }

        setInterval(moveRabbit, 3000);
    }
});