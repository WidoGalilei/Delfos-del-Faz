const a = document.querySelector('a')

a.addEventListener('click', function(e) {
    window.location.hash = '#DE'


    window.location="./Appartments.html" + window.location.hash

    
});
    