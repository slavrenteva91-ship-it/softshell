(function () {
    var KEY = 'preferredLang';
    var stored = null;
    try { stored = localStorage.getItem(KEY); } catch (e) {}

    var path = location.pathname.replace(/\/index\.html$/, '/');
    if (path === '') path = '/';
    var isRu = path === '/ru' || path === '/ru/' || path.indexOf('/ru/') === 0;

    // Auto-detect once: send a Russian-language browser to the /ru/ version.
    // Never redirect away from an explicitly requested /ru/ URL.
    if (!stored && !isRu) {
        var list = navigator.languages || [navigator.language || ''];
        var wantsRu = list.some(function (l) { return /^ru\b/i.test(l); });
        if (wantsRu) {
            location.replace('/ru' + (path === '/' ? '/' : path) + location.search + location.hash);
            return;
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        var links = document.querySelectorAll('[data-set-lang]');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function () {
                try { localStorage.setItem(KEY, this.getAttribute('data-set-lang')); } catch (e) {}
            });
        }
    });
})();
