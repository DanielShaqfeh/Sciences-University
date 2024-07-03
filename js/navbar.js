document.addEventListener('DOMContentLoaded', function () {
    // Items inside toggle menu hidden attribute
    var offcanvasNavbar = document.getElementById('offcanvasNavbar');
    var hiddenLink = document.getElementById('hidden-link');
    offcanvasNavbar.addEventListener('shown.bs.offcanvas', function () { 
      hiddenLink.removeAttribute('hidden'); //when small screen the other items apppears
    });
    offcanvasNavbar.addEventListener('hidden.bs.offcanvas', function () {
      hiddenLink.setAttribute('hidden', true); 
    });
    
    // Make clicked item the active one 
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.forEach(function (navItem) {
          navItem.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
    
    // Search icon form when clicked 
    var searchIcon = document.getElementById('searchIcon');
    var searchForm = document.getElementById('searchForm');
  
    searchIcon.addEventListener('click', function (event) {
      event.preventDefault();
      searchForm.classList.toggle('show');
    });
  });

  
  