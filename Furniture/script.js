document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const searchBtn = document.getElementById('search-btn');
    const cartBtn = document.getElementById('cart-btn');
    const loginBtn = document.getElementById('login-btn');
    const closer = document.getElementById('closer');

    const navbar = document.querySelector('.navbar');
    const searchForm = document.querySelector('.searchform');
    const shoppingCart = document.querySelector('.shopping-cart');
    const loginForm = document.querySelector('.login-form');

    // Toggle navbar
    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
        closer.style.display = 'block';
    });

    // Toggle search form
    searchBtn.addEventListener('click', () => {
        searchForm.classList.toggle('active');
        closer.style.display = 'block';
    });

    // Toggle shopping cart
    cartBtn.addEventListener('click', () => {
        shoppingCart.classList.toggle('active');
        closer.style.display = 'block';
    });

    // Toggle login form
    loginBtn.addEventListener('click', () => {
        loginForm.classList.toggle('active');
        closer.style.display = 'block';
    });

    // Close any open form/navbar
    closer.addEventListener('click', () => {
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        closer.style.display = 'none';
    });

    // Slider functionality
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.style.display = idx === index ? 'flex' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.getElementById('slide-next').addEventListener('click', nextSlide);
    document.getElementById('slide-prev').addEventListener('click', prevSlide);

    // Initialize the first slide
    showSlide(currentSlide);
});
