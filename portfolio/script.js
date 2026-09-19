let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

function toggleMenu() {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    menuIcon.setAttribute('aria-expanded', navbar.classList.contains('active'));
}

function closeMenu() {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    menuIcon.setAttribute('aria-expanded', 'false');
}

menuIcon.onclick = toggleMenu;

menuIcon.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleMenu();
    }
});

document.querySelectorAll('.navbar a').forEach((link) => {
    link.addEventListener('click', closeMenu);
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        closeMenu();
    }
});

// Reveal a concise description without changing the height of each skill card.
document.querySelectorAll('.skill-card').forEach((card) => {
    const items = [...card.querySelectorAll('li[data-detail]')];
    const panel = card.querySelector('.skill-card-detail');

    if (!items.length || !panel) return;

    const detailTitle = panel.querySelector('span');
    const detailText = panel.querySelector('p');
    const defaultTitle = detailTitle.textContent;
    const defaultText = detailText.textContent;
    let changeTimer;

    const renderDetail = (title, text, activeItem = null) => {
        window.clearTimeout(changeTimer);
        items.forEach((item) => item.classList.toggle('is-active', item === activeItem));
        panel.classList.add('is-changing');

        changeTimer = window.setTimeout(() => {
            detailTitle.textContent = title;
            detailText.textContent = text;
            panel.classList.remove('is-changing');
        }, 80);
    };

    const showItemDetail = (item) => {
        renderDetail(item.textContent.trim(), item.dataset.detail, item);
    };

    const resetDetail = () => renderDetail(defaultTitle, defaultText);

    items.forEach((item) => {
        item.tabIndex = 0;
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `${item.textContent.trim()}: show experience detail`);
        item.addEventListener('mouseenter', () => showItemDetail(item));
        item.addEventListener('focus', () => showItemDetail(item));
        item.addEventListener('click', () => showItemDetail(item));
        item.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                showItemDetail(item);
            }
        });
    });

    card.addEventListener('mouseleave', () => {
        if (window.matchMedia('(hover: hover)').matches) resetDetail();
    });

    card.addEventListener('focusout', (event) => {
        if (!card.contains(event.relatedTarget)) resetDetail();
    });
});

// Typing animation with icons
document.addEventListener("DOMContentLoaded", function () {
    const words = [
        '<i class="fab fa-node-js"></i> NestJs Developer',
        '<i class="fab fa-laravel"></i> Laravel Developer',
        '<i class="fas fa-leaf"></i> Spring Boot Developer',
        '<i class="fas fa-user-graduate"></i> 5th-year ITE student',
    ];

    const typingTextElement = document.getElementById('typing-text');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];

        // Slice only the text part, not partial HTML tags
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = currentWord;
        const fullText = tempDiv.textContent; // Get pure text for typing

        let displayedText = fullText.substring(0, charIndex);

        // Preserve the icon
        const iconHTML = currentWord.substring(0, currentWord.indexOf(fullText));
        typingTextElement.innerHTML = iconHTML + displayedText;

        if (!isDeleting) {
            charIndex++;
        } else {
            charIndex--;
        }

        if (charIndex === fullText.length + 1) {
            isDeleting = true;
            setTimeout(type, 2000);
            return;
        }

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
            return;
        }

        const typingSpeed = isDeleting ? 70 : 120;
        setTimeout(type, typingSpeed);
    }

    type();
});
