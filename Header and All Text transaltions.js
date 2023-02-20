
    // Contact information toggle

        const contactInfo = document.querySelector('#showContact')

        function toggleContactInfo() {

            contactInfo.classList.toggle('contactDropDown')
            contactInfo.classList.toggle('contactDropDownHide')
        }

        document.querySelector("#buttonPhonelink").addEventListener('click', toggleContactInfo)


    // Change lenguage of content and buttons


        const rooms = document.querySelector('#rooms')
        const galeria = document.querySelector('#galeria')
        const food = document.querySelector('#food')
        const live = document.querySelector('#live')
        const booking = document.querySelector('#booking')

        const APh2 = document.querySelector('#AppRuralH2')
        const text1 = document.querySelector('#text1')
        const text2 = document.querySelector('#text2')

        const concertH3 = document.querySelector('#ConcertH3')
        const concertText = document.querySelector('#concertText')

        const artH3 = document.querySelector('#artH3')
        const artText = document.querySelector('#artText')

        const mapH3 = document.querySelector('#mapH3')
        const mapText = document.querySelector('#mapText')

        const ContactFooterLink = document.querySelector('#ContactFooterLink')

        const followUs = document.querySelector('#followUs')

        const resButton = document.querySelector('#resButton')


        // Default is in Spanish

            // Hamburger/ Menu

            rooms.textContent = "Apartmentos"
            galeria.textContent = 'Galeria'
            food.textContent = 'Restaurante Y Bar'
            live.textContent = 'Conciertos y Eventos'
            booking.textContent = 'Reservar Ahora'

            resButton.textContent = 'Reservar Ahora'

            // Introduction Section

                APh2.textContent = 'Apartamento Rural';
                text1.textContent = 'Ofrecemos 3 apartamenos retirados para disfrutar tranquilidad y armonia. Tanto en pareja como en familia. ';
                text2.textContent = 'Todos los appartamentos son ensuit con cocina propia.Disponemos de piscina excusiva para clientes, restaurante, un muy amplio Parking,tambien apto para caravanas.Y encantados de recibir mascotas';

            // Concert Section

                concertH3.textContent = 'Nuestros conciertos';
                concertText.textContent = 'Tenemos esporadicamente conciertos y Jam sessions ';

            // Art Section

                artH3.textContent = 'Exposicion de obras de arte';
                artText.textContent = '{Arte}';

            // MiniMap Section
                
                mapH3.textContent = 'Como encontrarnos';
                mapText.textContent = 'Nos encontramos a tan solo a 5 minutos de Mojacar Pueblo y a 10 min de la Playa'

            // Reservation Button

                resButton.textContent = 'Book Now';
                followUs.textContent = 'Siguenos en:';      
                ContactFooterLink.textContent = 'Contacta con nosotros';


        
        // Depending on the hash lenaguage will be changed

        if (window.location.hash) {

            // English

                if (window.location.hash === '#EN') {
                    
                    document.querySelector('#EN').selected = true


                // Hamburger/ Menu

                    rooms.textContent = "Apartments"
                    galeria.textContent = 'Gallery'
                    food.textContent = 'Restaurant and Bar'
                    live.textContent = 'Concerts and Events'
                    booking.textContent = 'Book Now'
                

                // Introduction Section

                    APh2.textContent = '';
                    text1.textContent = '';
                    text2.textContent = '';

                // Concert Section

                    concertH3.textContent = '';
                    concertText.textContent = '';

                // Art Section

                    artH3.textContent = '';
                    artText.textContent = '';

                // MiniMap Section
                    
                    mapH3.textContent = '';
                    mapText.textContent = ''

                // Reservation Button

                    resButton.textContent = 'Book Now';
                    ContactFooterLink.textContent = '';
                    followUs.textContent = '';
                } 
                
            // German 
                
                
                else if (window.location.hash === '#DE') {

                    document.querySelector('#DE').selected = true


                // Hamburger/ Menu

                    rooms.textContent = "Appartements"
                    galeria.textContent = 'Galerie'
                    food.textContent = 'Restaurant und Bar'
                    live.textContent = 'Konzerte und Veranstaltungen'
                    booking.textContent = 'Jetzt Reservieren'
                

                // Introduction Section

                    APh2.textContent = '';
                    text1.textContent = '';
                    text2.textContent = '';

                // Concert Section

                    concertH3.textContent = '';
                    concertText.textContent = '';

                // Art Section

                    artH3.textContent = '';
                    artText.textContent = '';

                // MiniMap Section
                    
                    mapH3.textContent = '';
                    mapText.textContent = ''

                // Reservation Button

                    resButton.textContent = 'Jetzt Reservieren'
                    ContactFooterLink.textContent = '';
                    followUs.textContent = '';
                } 
                
            // French
                
                
                else if (window.location.hash === '#FR') {

                    document.querySelector('#FR').selected = true


                // Hamburger/ Menu

                    rooms.textContent = "Appartements"
                    galeria.textContent = 'Galerie'
                    food.textContent = 'Restaurant et Bar'
                    live.textContent = 'Concerts et événements'
                    booking.textContent = 'Réserve Maintenant'
                

                // Introduction Section

                    APh2.textContent = '';
                    text1.textContent = '';
                    text2.textContent = '';

                // Concert Section

                    concertH3.textContent = '';
                    concertText.textContent = '';

                // Art Section

                    artH3.textContent = '';
                    artText.textContent = '';

                // MiniMap Section
                    
                    mapH3.textContent = '';
                    mapText.textContent = ''

                // Reservation Button

                    resButton.textContent = 'Réserve Maintenant';
                    ContactFooterLink.textContent = '';
                    followUs.textContent = '';
                }
            }
        


