document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const supports = document.startViewTransition;
        if (!supports) return; // old browsers: do nothing special
        const target = link.getAttribute('href');
        if (!target || target === '#') return;
        e.preventDefault();
        document.startViewTransition(() => {
            location.hash = target;
        });
    });
});