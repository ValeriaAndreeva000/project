// Кнопка смены темы
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    if (document.body.classList.contains('dark')) {
        themeBtn.textContent = '☀️ Светлая тема';
    } else {
        themeBtn.textContent = '🌙 Сменить тему';
    }
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});