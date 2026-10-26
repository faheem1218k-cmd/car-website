// Cars data - using array of objects as per JS knowledge
const cars = [
    {
        name: "Toyota Corolla",
        price: "PKR 4,500,000",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        phone: "03273341233"
    },
    {
        name: "Honda Civic",
        price: "PKR 6,200,000",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        phone: "03273341233"
    },
    {
        name: "Suzuki Alto",
        price: "PKR 2,800,000",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        phone: "03273341233"
    },
    {
        name: "Toyota Fortuner",
        price: "PKR 12,000,000",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        phone: "03273341233"
    },
    {
        name: "Honda City",
        price: "PKR 4,800,000",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        phone: "03273341233"
    },
    {
        name: "Kia Sportage",
        price: "PKR 8,500,000",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        phone: "03273341233"
    },
    {
        name: "Hyundai Tucson",
        price: "PKR 9,200,000",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        phone: "03273341233"
    },
    {
        name: "Toyota Hilux",
        price: "PKR 7,500,000",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        phone: "03273341233"
    },
    {
        name: "BMW 3 Series",
        price: "PKR 15,000,000",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        phone: "03273341233"
    }
];

// DOM Elements
const carsGrid = document.getElementById('cars-grid');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const orderNowBtn = document.getElementById('orderNowBtn');
const contactForm = document.getElementById('contactForm');

// Function to create car cards using loops and DOM manipulation
function displayCars() {
    // Clear existing
    carsGrid.innerHTML = '';
    
    // Loop through cars array
    cars.forEach(car => {
        // Create elements
        const card = document.createElement('div');
        card.className = 'car-card';
        
        const img = document.createElement('img');
        img.src = car.image;
        img.alt = car.name;
        
        const info = document.createElement('div');
        info.className = 'car-info';
        
        const name = document.createElement('h3');
        name.className = 'car-name';
        name.textContent = car.name;
        
        const price = document.createElement('p');
        price.className = 'car-price';
        price.textContent = car.price;
        
        const phone = document.createElement('p');
        phone.className = 'car-phone';
        phone.textContent = car.phone;
        
        // Append children
        info.appendChild(name);
        info.appendChild(price);
        info.appendChild(phone);
        
        card.appendChild(img);
        card.appendChild(info);
        
        carsGrid.appendChild(card);
    });
}

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Section control for page mode
const sections = document.querySelectorAll('.section');
const navLinkElements = document.querySelectorAll('.nav-link');

function showAllSections() {
    sections.forEach(section => {
        section.classList.remove('hidden');
    });
    // Scroll to top
    window.scrollTo(0, 0);
}

function showOnlySection(id) {
    sections.forEach(section => {
        if (section.id === id) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
    window.scrollTo(0, 0);
}

// Handle navigation clicks
navLinkElements.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href').substring(1); // remove #
        
        if (target === 'home') {
            showAllSections();
        } else {
            showOnlySection(target);
        }
        
        // Close mobile menu
        navLinks.classList.remove('active');
    });
});

// Also handle CTA button
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    showOnlySection('cars');
});

// Order Now button - simple alert using event
orderNowBtn.addEventListener('click', () => {
    alert('Thank you for your interest! Please contact us at 03273341233 to place your order.');
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    contactForm.reset();
});

// Smooth scroll is handled by CSS, but we can add more JS if needed
// Using setTimeout for a welcome message example
setTimeout(() => {
    console.log('Welcome to Faheem Motors!');
}, 1000);

// Initialize
displayCars();

// Example of using if-else for responsive check (simple)
function checkScreen() {
    if (window.innerWidth < 768) {
        console.log('Mobile view');
    } else {
        console.log('Desktop view');
    }
}
checkScreen();
window.addEventListener('resize', checkScreen);