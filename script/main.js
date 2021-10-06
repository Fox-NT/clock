const hoursArrow = document.querySelector('#clock-hours');
const minutesArrow = document.querySelector('#clock-minutes');
const secondsArrow = document.querySelector('#clock-seconds');

const hoursText = document.querySelector('#text-hours');
const minutesText = document.querySelector('#text-minutes');
const dayText = document.querySelector('#date-day');
const weekText = document.querySelector('#date-week');
const monthText = document.querySelector('#date-month');
const yearText = document.querySelector('#date-year');
const dots = document.querySelector('.text__dots');

const btn = document.querySelector('.button__theme');

let currentTheme = '';

const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декбря'];
const days = ['Понедельник', 'Вторник', 'Среда', 'Четвер', 'Пятница', 'Суббота', 'Воскресенте'];


function date() {
    const date = new Date();

    const hh = date.getHours();
    const mm = date.getMinutes();
    const day = date.getDate();
    const week = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    console.log(date.getDay())
    hoursText.innerHTML = hh >= 10 ? hh : '0'+ hh;
    minutesText.innerHTML = mm >= 10 ? mm : '0'+ mm;

    weekText.innerHTML = days[week];

    dayText.innerHTML = day;
    monthText.innerHTML = months[month];
    yearText.innerHTML = year;

    dots.classList.toggle('off');
}

function clock() {
    const date = new Date();

    const hh = date.getHours()*30;
    const mm = date.getMinutes()*6;
    const ss = date.getSeconds()*6;

    hoursArrow.style.transform = `rotate(${hh+mm/12}deg)`;
    minutesArrow.style.transform = `rotate(${mm}deg)`;
    secondsArrow.style.transform = `rotate(${ss}deg)`;
}

const selectedTheme = localStorage.getItem('selected-theme')

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']('dark-theme')
}

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        btn.innerHTML = '<i class="fas fa-sun"></i>'
        currentTheme = 'dark';
    } else {
        btn.innerHTML = '<i class="fas fa-moon"></i>'
        currentTheme = 'light';
    }

    localStorage.setItem('selected-theme', currentTheme);
})

setInterval(date, 1000);
setInterval(clock, 1000);

