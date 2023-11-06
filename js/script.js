// Add scrolling functionality
window.addEventListener("scroll", function () {
    const divs = document.querySelectorAll("div[id]");
    const sidenavLinks = document.querySelectorAll(".sidenav a");
  
    divs.forEach((div, index) => {
      const rect = div.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        sidenavLinks.forEach((link) => link.classList.remove("active-link"));
        sidenavLinks[index].classList.add("active-link");
      }
    });
  });

//Define necessary constants
const lightboxes = document.querySelectorAll('.lightbox');
const closeLightbox = document.getElementById('close-lightbox');
const lightboxImages = document.querySelectorAll('.lightbox-image');
const lightboxTriggers = document.querySelectorAll('.photo-gallery img');

// Function to open the lightbox
function openLightbox(imageSrc) {
  lightboxImages.forEach((image) => {
    image.src = imageSrc;
  });

  lightboxes.forEach((lightbox) => {
    lightbox.style.display = 'flex';
  });
}

// Function to close the lightbox
function closeLightboxHandler() {
  lightboxes.forEach((lightbox) => {
    lightbox.style.display = 'none';
  });
}

// Add click event listeners to trigger the lightbox
lightboxTriggers.forEach((trigger, index) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    openLightbox(event.target.src);
  });
});

closeLightbox.addEventListener('click', closeLightboxHandler);

// Close the lightbox when clicking outside the image
lightboxes.forEach((lightbox) => {
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightboxHandler();
    }
  });
});

// Close the lightbox when pressing the "Escape" key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLightboxHandler();
  }
});