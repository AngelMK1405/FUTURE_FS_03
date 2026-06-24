// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// DARK MODE
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (current < target) {
            counter.innerText = current + increment;
            setTimeout(updateCounter, 25);
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});

// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const sections = document.querySelectorAll(".section, .card, .price-card, .trainer-card");

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// PRICING TOGGLE
const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");

const basicPrice = document.querySelector(".basic-price");
const premiumPrice = document.querySelector(".premium-price");
const elitePrice = document.querySelector(".elite-price");

monthlyBtn.addEventListener("click", () => {
    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");

    basicPrice.textContent = "₹1499";
    premiumPrice.textContent = "₹2999";
    elitePrice.textContent = "₹5999";
});

yearlyBtn.addEventListener("click", () => {
    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    basicPrice.textContent = "₹14999";
    premiumPrice.textContent = "₹29999";
    elitePrice.textContent = "₹59999";
});

// CONTACT FORM VALIDATION
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        e.preventDefault();
        alert("Please fill all fields.");
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        e.preventDefault();
        alert("Please enter a valid email.");
        return;
    }
});