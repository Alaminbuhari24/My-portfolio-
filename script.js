document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.portfolio-page');
    const exploreBtn = document.querySelector('.change-page-btn');

    // Handle Page Switching Transitions
    function switchPage(targetPageId) {
        // Remove active state from all pages and links
        pages.forEach(page => page.classList.remove('active'));
        navItems.forEach(item => item.classList.remove('active'));

        // Activate targeted page element
        const targetPage = document.getElementById(targetPageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Highlight matching sidebar control element
        const activeNav = document.querySelector(`.nav-item[data-target="${targetPageId}"]`);
        if (activeNav) {
            activeNav.classList.add('active');
        }

        // Scroll back smoothly to the top of view window
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Attach click events to nav sidebar elements
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            switchPage(target);
        });
    });

    // Wire up home hero call-to-action redirect button
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const target = exploreBtn.getAttribute('data-target');
            switchPage(target);
        });
    }
});
