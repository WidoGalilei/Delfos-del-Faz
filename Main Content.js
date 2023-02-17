// Arrow pictures movement

    let imageToggle = 0;

    // All pintures of imagesCarusel ("add here and in array if changes in future")

        const imag1 = document.querySelector('#imag1');
        const imag2 = document.querySelector('#imag2');
        const imag3 = document.querySelector('#imag3');


        const allPicturesInToggle = [imag1,imag2,imag3];


    // Loop thtroug all Images and give them "show" or "hide" class

        function classChangeToggle() {

            for (let index = 0; index < allPicturesInToggle.length; index++) {

                const element = allPicturesInToggle[index];

                if (index === imageToggle) {
                    element.classList = 'showPicture';

                } else {
                    element.classList = 'hidePicture';
                }
            }

        }

    // functions to move to next or prev. pictures
        
        function moveRicht() {
            if (imageToggle >= 0 && imageToggle < allPicturesInToggle.length - 1) {
                imageToggle++
                classChangeToggle() 
            }
        }

        function moveLeft() {
            if (imageToggle > 0 && imageToggle < allPicturesInToggle.length) {
                imageToggle--
                classChangeToggle() 
            }
        }

        document.querySelector('#buttonLeft').addEventListener('click', moveLeft)
        document.querySelector('#buttonRight').addEventListener('click', moveRicht)


    // Run it ones to set the first image
        classChangeToggle()


// Text and information

    // Wellcome spin and change letters-leanguage

        greetingCounter = 0;

        const greetingsList = ['Bienvenidos', '어서오십시오', 'Herzlich willkommen', 'Bienvenue','Ben arrivato','いらっしゃいませ']

        const myFonts = ['Covered By Your Grace','Gloria Hallelujah','Homemade Apple','Permanent Marker','Rock Salt']


    // funtion that changes the lenguage

        function showNhide(){

            const wellcomeLetterConatiner = document.querySelector('#WellcomeLetters');

            const randomNum = Math.floor(Math.random() * 6);

            wellcomeLetterConatiner.style.fontFamily = myFonts[randomNum];
            
            wellcomeLetterConatiner.textContent = greetingsList[greetingCounter];


            if (greetingCounter < 7){
                greetingCounter++;
            }
            if(greetingCounter === 6){
                greetingCounter = 0;
            }

        }

    // set a timer of 10 sec 
        // setInterval(showNhide, 10000)

    // run it once at page opening
        showNhide()

    //Horizontal animation off concert pictures

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add('horizontalAnimation')
            }
            // } else {
            //     entry.target.classList.remove('horizontalAnimation')
            // }

        })
    })

    const concertPictures = document.querySelectorAll('.liveMusicPics');
    concertPictures.forEach((pic) => observer.observe(pic));

