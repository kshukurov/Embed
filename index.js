const navigationItems = document.querySelector('.nav-items')

navigationItems.addEventListener('click', function (e){
    e.preventDefault();
    if(e.target.getAttribute('class') === 'nav-link'){
        const id = e.target.getAttribute('href')
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        })
    }
})