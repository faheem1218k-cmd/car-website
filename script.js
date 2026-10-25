
"use strict";

/* =====================================
   FAHEEM MOTORS - SETTINGS
===================================== */

const DEALER = {
    name: "Faheem Motors",
    phoneDisplay: "03273341233",
    phoneLink: "923273341233",
    email: "faheem1218k@gmail.com"
};

// Car data: array of objects.
const cars = [
    {
        id: 1,
        name: "Toyota Corolla",
        price: 3850000,
        year: 2022,
        transmission: "Automatic",
        fuel: "Petrol",
        category: "Sedan",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=900&q=85",
        description: "A practical sedan for everyday driving and family journeys."
    },
    {
        id: 2,
        name: "Honda Civic",
        price: 8650000,
        year: 2023,
        transmission: "Automatic",
        fuel: "Petrol",
        category: "Sedan",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=85",
        description: "A stylish sedan with a sporty design and comfortable interior."
    },
    {
        id: 3,
        name: "Suzuki Swift",
        price: 3400000,
        year: 2022,
        transmission: "Automatic",
        fuel: "Petrol",
        category: "Hatchback",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=85",
        description: "A compact car suitable for everyday city driving."
    },
    {
        id: 4,
        name: "Toyota Fortuner",
        price: 14500000,
        year: 2023,
        transmission: "Automatic",
        fuel: "Diesel",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=85",
        description: "A spacious SUV for family trips and longer journeys."
    },
    {
        id: 5,
        name: "Kia Sportage",
        price: 9200000,
        year: 2023,
        transmission: "Automatic",
        fuel: "Petrol",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=85",
        description: "A modern SUV with a practical design and comfortable cabin."
    },
    {
        id: 6,
        name: "Hyundai Tucson",
        price: 8900000,
        year: 2022,
        transmission: "Automatic",
        fuel: "Petrol",
        category: "SUV",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=85",
        description: "A versatile SUV for daily commutes and family travel."
    },
    {
        id: 7,
        name: "Mercedes-Benz C-Class",
        price: 18500000,
        year: 2022,
        transmission: "Automatic",
        fuel: "Petrol",
        category: "Luxury",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=85",
        description: "A premium sedan with refined styling and a luxury-focused cabin."
    },
    {
        id: 8,
        name: "BMW 5 Series",
        price: 22500000,
        year: 2023,
        transmission: "Automatic",
        fuel: "Petrol",
        category: "Luxury",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=85",
        description: "An executive sedan with sophisticated styling."
    },
    {
        id: 9,
        name: "Porsche 911",
        price: 45000000,
        year: 2023,
        transmission: "Automatic",
        fuel: "Petrol",
        category: "Sports",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85",
        description: "A sports car with an iconic design and performance-focused engineering."
    }
];


/* =====================================
   1. HELPER FUNCTIONS
===================================== */

function getElement(id) {
    return document.getElementById(id);
}

function formatPrice(price) {
    return "PKR " + price.toLocaleString("en-PK");
}

let toastTimer;

function showToast(message) {
    const toast = getElement("toast");

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(function () {
        toast.classList.remove("show");
    }, 2800);
}


/* =====================================
   2. PAGE NAVIGATION
===================================== */

function showPage(pageName, updateHistory = true) {
    const validPages = ["home", "about", "car", "contact"];

    // if/else condition
    if (!validPages.includes(pageName)) {
        pageName = "home";
    }

    // Hide every page first.
    document.querySelectorAll(".page").forEach(function (page) {
        page.classList.remove("active-page");
    });

    // Show only the selected page.
    getElement(pageName).classList.add("active-page");

    // Highlight the correct navigation link.
    document.querySelectorAll(".nav-link").forEach(function (link) {
        link.classList.toggle(
            "active",
            link.dataset.page === pageName
        );
    });

    // Close the mobile menu.
    getElement("navMenu").classList.remove("open");
    getElement("menuToggle").textContent = "☰";

    // Update the browser URL.
    if (updateHistory && window.location.hash !== "#" + pageName) {
        history.pushState(null, "", "#" + pageName);
    }

    // Start the selected page at its top.
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Event bubbling: one listener handles all navigation links.
document.addEventListener("click", function (event) {
    const link = event.target.closest("[data-page]");

    if (!link) {
        return;
    }

    event.preventDefault();
    showPage(link.dataset.page);
});

// Browser Back and Forward buttons.
window.addEventListener("popstate", function () {
    const pageName = window.location.hash.slice(1) || "home";
    showPage(pageName, false);
});


/* =====================================
   3. MOBILE MENU
===================================== */

getElement("menuToggle").addEventListener("click", function () {
    const menu = getElement("navMenu");
    const isOpen = menu.classList.toggle("open");

    this.textContent = isOpen ? "✕" : "☰";
    this.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});


/* =====================================
   4. CREATE CARDS FROM THE ARRAY
===================================== */

function createCarCard(car) {
    return `
        <article class="car-card">
            <div class="car-image-wrap">
                <img
                    src="${car.image}"
                    alt="${car.name}"
                    loading="lazy"
                >
                <span class="car-badge">${car.category}</span>
            </div>

            <div class="car-info">
                <h3>${car.name}</h3>

                <div class="car-specs">
                    <span>${car.year}</span>
                    <span>${car.transmission}</span>
                    <span>${car.fuel}</span>
                </div>

                <p class="car-price">${formatPrice(car.price)}</p>
                <p class="car-phone">Mobile: ${DEALER.phoneDisplay}</p>

                <div class="car-actions">
                    <button
                        type="button"
                        class="btn btn-small btn-dark"
                        data-action="details"
                        data-id="${car.id}"
                    >
                        View Details
                    </button>

                    <button
                        type="button"
                        class="btn btn-small btn-primary"
                        data-action="order"
                        data-id="${car.id}"
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </article>
    `;
}

function renderCars(carList, containerId) {
    const container = getElement(containerId);

    container.innerHTML = carList.map(createCarCard).join("");
}

function showAllCars() {
    renderCars(cars, "carGrid");
    getElement("carCount").textContent = cars.length + " cars";
    getElement("noCars").hidden = true;
}

function showFeaturedCars() {
    renderCars(cars.slice(0, 3), "homeCars");
}


/* =====================================
   5. SEARCH AND PRICE FILTER
===================================== */

function filterCars() {
    const searchText = getElement("searchInput")
        .value.trim().toLowerCase();

    const priceRange = getElement("priceFilter").value;

    const filteredCars = cars.filter(function (car) {
        const matchesName = car.name
            .toLowerCase()
            .includes(searchText);

        let matchesPrice = true;

        if (priceRange === "under50") {
            matchesPrice = car.price < 5000000;
        } else if (priceRange === "50to100") {
            matchesPrice =
                car.price >= 5000000 &&
                car.price <= 10000000;
        } else if (priceRange === "over100") {
            matchesPrice = car.price > 10000000;
        }

        return matchesName && matchesPrice;
    });

    renderCars(filteredCars, "carGrid");

    getElement("carCount").textContent =
        filteredCars.length + " cars";

    getElement("noCars").hidden = filteredCars.length > 0;
}

getElement("searchInput").addEventListener("input", filterCars);
getElement("priceFilter").addEventListener("change", filterCars);


/* =====================================
   6. CAR DETAILS POPUP
===================================== */

function openCarDetails(carId) {
    const car = cars.find(function (item) {
        return item.id === Number(carId);
    });

    if (!car) {
        showToast("Car details not found.");
        return;
    }

    getElement("modalBody").innerHTML = `
        <img
            class="modal-car-image"
            src="${car.image}"
            alt="${car.name}"
        >

        <p class="eyebrow">${car.category} · ${car.year}</p>
        <h2>${car.name}</h2>

        <h3 class="car-price">${formatPrice(car.price)}</h3>

        <p><strong>Year:</strong> ${car.year}</p>
        <p><strong>Transmission:</strong> ${car.transmission}</p>
        <p><strong>Fuel:</strong> ${car.fuel}</p>
        <p><strong>Category:</strong> ${car.category}</p>
        <p>${car.description}</p>
        <p><strong>Mobile:</strong> ${DEALER.phoneDisplay}</p>

        <button
            type="button"
            class="btn btn-primary"
            data-action="order"
            data-id="${car.id}"
        >
            Inquire About This Car ↗
        </button>
    `;

    getElement("carModal").classList.add("open");
    getElement("carModal").setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeCarDetails() {
    getElement("carModal").classList.remove("open");
    getElement("carModal").setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

getElement("closeModal").addEventListener("click", closeCarDetails);

getElement("carModal").addEventListener("click", function (event) {
    if (event.target === this) {
        closeCarDetails();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeCarDetails();
    }
});


/* =====================================
   7. WHATSAPP ORDER INQUIRY
===================================== */

function sendWhatsApp(message) {
    const url =
        "https://wa.me/" +
        DEALER.phoneLink +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
}

function orderCar(carId) {
    const car = cars.find(function (item) {
        return item.id === Number(carId);
    });

    if (!car) {
        showPage("contact");
        return;
    }

    const message =
        `Assalam-o-Alaikum ${DEALER.name}!\n\n` +
        `I am interested in ${car.name}.\n` +
        `Listed price: ${formatPrice(car.price)}\n` +
        `Please confirm availability and arrange a test drive.\n\n` +
        `Thank you.`;

    sendWhatsApp(message);
}

// One delegated listener handles all car card buttons.
document.addEventListener("click", function (event) {
    const button = event.target.closest("[data-action]");

    if (!button) {
        return;
    }

    const action = button.dataset.action;
    const carId = button.dataset.id;

    if (action === "details") {
        openCarDetails(carId);
    } else if (action === "order") {
        orderCar(carId);
    }
});

// Main Order Now button at the bottom of the Cars page.
getElement("orderNow").addEventListener("click", function () {
    showPage("contact");
    showToast("Select a car and submit your inquiry.");
});


/* =====================================
   8. CONTACT FORM AND VALIDATION
===================================== */

function populateCarOptions() {
    const select = getElement("interestedCar");

    select.innerHTML =
        '<option value="">Select a car</option>' +
        cars.map(function (car) {
            return `
                <option value="${car.name}">
                    ${car.name} - ${formatPrice(car.price)}
                </option>
            `;
        }).join("");
}

getElement("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = getElement("customerName").value.trim();
    const email = getElement("customerEmail").value.trim();
    const phone = getElement("customerPhone").value.trim();
    const selectedCar = getElement("interestedCar").value;
    const inquiry = getElement("inquiryType").value;
    const message = getElement("customerMessage").value.trim();

    // Check required fields.
    if (!name || !email || !phone || !selectedCar) {
        showToast("Please fill in all required fields.");
        return;
    }

    // Check email format.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showToast("Please enter a valid email address.");
        return;
    }

    if (phone.replace(/\D/g, "").length < 7) {
        showToast("Please enter a valid phone number.");
        return;
    }

    const whatsappMessage =
        `New inquiry for ${DEALER.name}\n\n` +
        `Customer: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Car: ${selectedCar}\n` +
        `Inquiry: ${inquiry}\n` +
        `Message: ${message || "No additional message"}`;

    sendWhatsApp(whatsappMessage);
    showToast("Your inquiry is ready to send in WhatsApp.");
});


/* =====================================
   9. FOOTER YEAR
===================================== */

function updateFooterYear() {
    const year = new Date().getFullYear();

    document.querySelectorAll(".current-year").forEach(function (element) {
        element.textContent = year;
    });
}


/* =====================================
   10. INITIALIZE WEBSITE
===================================== */

function initWebsite() {
    showFeaturedCars();
    showAllCars();
    populateCarOptions();
    updateFooterYear();

    const initialPage = window.location.hash.slice(1);
    const validPages = ["home", "about", "car", "contact"];

    if (validPages.includes(initialPage)) {
        showPage(initialPage, false);
    } else {
        showPage("home", false);
    }

    console.log("Faheem Motors website is ready!");
}

// Run after the HTML document has loaded.
document.addEventListener("DOMContentLoaded", initWebsite);
