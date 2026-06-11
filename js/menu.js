function menuMobile() {
    const burgerBtn = document.getElementById('mobile-burger-botao');
    const mobileNav = document.getElementById('mobile-nav-painel');
    const fecharBtn = document.getElementById('mobile-nav-fechar');

    if (burgerBtn && mobileNav) {
        burgerBtn.addEventListener('click', () => {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (fecharBtn && mobileNav) {
        fecharBtn.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Fechar ao clicar num link
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav) {
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

menuMobile();