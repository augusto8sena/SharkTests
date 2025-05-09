
       
        document.querySelectorAll('.flip-card').forEach(card => {
            let isFlipped = false;
            
            card.addEventListener('click', function() {
                isFlipped = !isFlipped;
                this.classList.toggle('flipped', isFlipped);
            });

            card.addEventListener('mouseenter', function() {
                if(!isFlipped) {
                    this.style.transform = 'translateY(-5px)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                if(!isFlipped) {
                    this.style.transform = 'none';
                }
            });
        });

         // Smooth scroll para navegação
         document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const section = document.querySelector(this.getAttribute('href'));
                section.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Exceção para o link do logo
        document.querySelector('nav a[target="_blank"]').addEventListener('click', function(e) {
            e.stopPropagation(); // Permite abrir link externo normalmente
        });

         // Ativação dos GIFs no hover
    document.querySelectorAll('.image-card img').forEach(img => {
        // Pré-carrega os GIFs
        const gif = new Image();
        gif.src = img.dataset.gif;

        // Eventos de hover
        img.parentElement.addEventListener('mouseenter', function() {
            img.src = img.dataset.gif;
        });

        img.parentElement.addEventListener('mouseleave', function() {
            img.src = img.dataset.static;
        });
    });

    // Pausa GIFs quando não estão visíveis
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.querySelectorAll('.image-card img').forEach(img => {
                img.src = img.dataset.static;
            });
        }
    });
        // Script para flip cards
        document.querySelectorAll('.flip-card').forEach(card => {
            card.addEventListener('click', function() {
                this.classList.toggle('flipped');
            });

            // Manter hover apenas quando não estiver flipado
            card.addEventListener('mouseenter', function() {
                if(!this.classList.contains('flipped')) {
                    this.querySelector('.team-card').style.transform = 'translateY(-5px)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                this.querySelector('.team-card').style.transform = 'none';
            });
        });
   
        const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});