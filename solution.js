document.getElementById('about').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.page').forEach(x => x.classList.add('hide'));
    document.querySelectorAll('.nav ul li a').forEach(x => x.classList.remove('new-color'));
    e.target.classList.add('new-color');
    document.querySelector('.about-page').classList.remove('hide');
});