var primaryLogoLocation = document.getElementById('logo');
var finalLogoLocation = primaryLogoLocation.getBoundingClientRect().bottom + window.pageYOffset;
window.onscroll = function logoWidth() {
    if (primaryLogoLocation.classList.contains('fixed-logo') && window.pageYOffset < finalLogoLocation) {
        primaryLogoLocation.classList.remove('fixed-logo');
    } 
    else if (window.pageYOffset > finalLogoLocation) {
        primaryLogoLocation.classList.add('fixed-logo');
    }
};