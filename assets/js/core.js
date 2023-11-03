(function() {
    const menuItems = document.querySelectorAll("header.site-header > nav > ul > li:not(.separator) > a");

    menuItems.forEach((menuItem) => {
        if (menuItem.getAttribute('href') === window.location.pathname) {
            menuItem.classList.add('active');
        }
    });
})();