        function toggleMenu() {
            const toggler = document.querySelector('.menu-toggle');
            const menu = document.getElementById('navMenu');
            menu.classList.toggle('active');
            toggler.classList.toggle('menu-rotate');
        }
