/**
 * FIINE.VN - MAIN JAVASCRIPT LOGIC
 * Navigation, Modals, Animated Headlines, Accordions
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initAnimatedWords();
  initFAQAccordion();
  initModals();
  initMobileMenu();
});

// Sticky Header
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Animated Word Cycle in Hero Title ("doanh nghiệp" / "đội nhóm")
function initAnimatedWords() {
  const wordElem = document.getElementById('animatedWord');
  if (!wordElem) return;

  const words = ['doanh nghiệp', 'đội nhóm', 'phòng ban', 'startup'];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % words.length;
    wordElem.style.opacity = '0';
    wordElem.style.transform = 'translateY(8px)';
    
    setTimeout(() => {
      wordElem.textContent = words[index];
      wordElem.style.opacity = '1';
      wordElem.style.transform = 'translateY(0)';
    }, 250);
  }, 2800);
}

// FAQ Accordion
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other items
      faqItems.forEach(i => i.classList.remove('active'));

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Modal Popups System
function initModals() {
  // Demo Modal Trigger
  const demoBtns = document.querySelectorAll('.btn-open-demo');
  const demoModal = document.getElementById('demoModal');

  // Auth Modal Trigger (Login/Register)
  const loginBtns = document.querySelectorAll('.btn-open-login');
  const registerBtns = document.querySelectorAll('.btn-open-register');
  const authModal = document.getElementById('authModal');
  const authTitle = document.getElementById('authModalTitle');

  // Video Modal
  const videoCards = document.querySelectorAll('.video-card');
  const videoModal = document.getElementById('videoModal');
  const iframeElem = document.getElementById('youtubeIframe');

  // Open Demo Modal
  demoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (demoModal) demoModal.classList.add('active');
    });
  });

  // Open Auth Modal
  loginBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof openLoginGateway === 'function') {
        openLoginGateway('client', 'login');
      } else if (authModal) {
        if (authTitle) authTitle.textContent = 'Đăng nhập vào Hệ thống';
        authModal.classList.add('active');
      }
    });
  });

  registerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof openLoginGateway === 'function') {
        openLoginGateway('client', 'register');
      } else if (authModal) {
        if (authTitle) authTitle.textContent = 'Đăng ký tài khoản Hệ thống';
        authModal.classList.add('active');
      }
    });
  });

  // Open Video Lightbox
  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const videoUrl = card.getAttribute('data-video-url');
      if (videoModal && iframeElem && videoUrl) {
        iframeElem.src = videoUrl + '?autoplay=1';
        videoModal.classList.add('active');
      }
    });
  });

  // Close Modals
  const closeBtns = document.querySelectorAll('.modal-close, .modal-overlay');
  closeBtns.forEach(elem => {
    elem.addEventListener('click', (e) => {
      if (e.target === elem || elem.classList.contains('modal-close')) {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
        if (iframeElem) iframeElem.src = '';
      }
    });
  });
}

// Mobile Navigation Drawer Toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNavDrawer');

  if (toggleBtn && mobileNav) {
    toggleBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
  }
}