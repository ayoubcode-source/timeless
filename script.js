// Sample Watch Data (Replace with your actual watch images & details)
const watches = [
    {
        name: "Classic Elegance",
        model: "CE-2024",
        image: "images/brown.jpeg",
        price: "199 DH",
        description: "A timeless piece with a brown leather strap.",
        whatsapp: "https://wa.me/212705182628?text=Hi,%20bghit%20nakhod%20hadi%20ejbatni%20the%20Classic%20Elegance%20(CE-2024)",
    },
    {
        name: "Classic elegance",
        model: "RG-2024",
        image: "images/black white watch.jpeg",
        price: "199 DH",
        whatsapp: "https://wa.me/212705182628?text=Hi,%20bghit%20nakhod%20hadi%20ejbatni%20the%20Classic%20Elegance%20(CE-2024)",
        description: "Luxurious finish for the elite."
    },
    {
        name: "classic elegance",
        model: "SP-2024",
        image: "images/2watches bw.jpeg",
        price: "370 DH",
        whatsapp: "https://wa.me/212705182628?text=Hi,%20bghit%20nakhod%20hadi%203jbatni%20the%20Classic%20Elegance%20(CE-2024)",
        description: "Built for adventure and durability."
    },
    // Add more watches here...
];

// Load watches into the gallery
const gallery = document.querySelector('.watch-gallery');

watches.forEach(watch => {
    const watchItem = document.createElement('div');
    watchItem.classList.add('watch-item');
    watchItem.innerHTML = `
        <img src="${watch.image}" alt="${watch.name}">
        <div class="watch-info">
            <h3>${watch.name}</h3>
            <p>${watch.model}</p>
            <p>${watch.description}</p>
            <p>${watch.price}</p>
            <a href="${watch.whatsapp}" class="whatsapp-btn" target="_blank">
                <i class="fab fa-whatsapp"></i> Buy Now
            </a>
        </div>
    `;
    gallery.appendChild(watchItem);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Replace hover effects with touch events for mobile
if ('ontouchstart' in window) {
  document.querySelectorAll('.watch-item').forEach(item => {
    item.style.cursor = 'pointer'; // Visual feedback
  });
}