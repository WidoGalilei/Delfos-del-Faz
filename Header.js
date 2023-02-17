
    // Contact information toggle

        const contactInfo = document.querySelector('#showContact')

        function toggleContactInfo() {

            contactInfo.classList.toggle('contactDropDown')
            contactInfo.classList.toggle('contactDropDownHide')
        }

        document.querySelector(".buttonPhonelink").addEventListener('click', toggleContactInfo)


    // Change lenguage of content and buttons

        const rooms = document.querySelector('#rooms')
        const galeria = document.querySelector('#galeria')
        const food = document.querySelector('#food')
        const live = document.querySelector('#live')
        const booking = document.querySelector('#booking')

        const resButton = document.querySelector('#resButton')


        // Default is in Spanish

        rooms.textContent = "Apartmentos"
        galeria.textContent = 'Galeria'
        food.textContent = 'Restaurante Y Bar'
        live.textContent = 'Conciertos y Eventos'
        booking.textContent = 'Reservar Ahora'

        resButton.textContent = 'Reservar Ahora'

        
        // Depending on the hash lenaguage will be changed

        if (window.location.hash) {
            if (window.location.hash === '#EN') {
                
                document.querySelector('#EN').selected = true

                rooms.textContent = "Apartments"
                galeria.textContent = 'Gallery'
                food.textContent = 'Restaurant and Bar'
                live.textContent = 'Concerts and Events'
                booking.textContent = 'Book Now'

                resButton.textContent = 'Book Now'

            } else if (window.location.hash === '#DE') {

                document.querySelector('#DE').selected = true

                rooms.textContent = "Appartements"
                galeria.textContent = 'Galerie'
                food.textContent = 'Restaurant und Bar'
                live.textContent = 'Konzerte und Veranstaltungen'
                booking.textContent = 'Jetzt Reservieren'

                resButton.textContent = 'Jetzt Reservieren'

            } else if (window.location.hash === '#FR') {

                document.querySelector('#FR').selected = true

                rooms.textContent = "Appartements"
                galeria.textContent = 'Galerie'
                food.textContent = 'Restaurant et Bar'
                live.textContent = 'Concerts et événements'
                booking.textContent = 'Réserve Maintenant'

                resButton.textContent = 'Réserve Maintenant'
        }}
        

    // Hide reservation Button when drop down menu is shown

    const menuCheckBox = document.querySelector('#menu-toggle')
    
    menuCheckBox.addEventListener('click', () =>{
        if (resButton.style.display === 'none'){
            resButton.style.display = 'flex'
        } else {
            resButton.style.display = 'none'
        }
    })