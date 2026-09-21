document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('navToggle');
    var header = document.querySelector('header');
    if (!toggle || !header) return;

    toggle.addEventListener('click', function () {
        var isOpen = header.classList.toggle('nav-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    header.querySelectorAll('nav a').forEach(function (link) {
        link.addEventListener('click', function () {
            header.classList.remove('nav-open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
});
