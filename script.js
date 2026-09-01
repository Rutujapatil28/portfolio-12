// ================= TYPING EFFECT =================

const words = [
    "Web Developer",
    "Web Designer",
    "Student",
    "Creative Developer"
];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const typing =
        document.getElementById("typing");

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typing.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1200
            );

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex ===
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 70 : 120
    );
}


typeEffect();



// ================= DARK / LIGHT MODE =================

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "light"
        );


        if (
            document.body.classList.contains(
                "light"
            )
        ) {

            themeBtn.textContent = "☀️";

            document.body.style.background =
                "#f1f5f9";

            document.body.style.color =
                "#0f172a";

        } else {

            themeBtn.textContent = "🌙";

            document.body.style.background =
                "#020617";

            document.body.style.color =
                "white";
        }

    }
);



// ================= CONTACT FORM =================

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value;


        alert(
            "Thank you " +
            name +
            "! Your message has been submitted."
        );


        contactForm.reset();

    }
);



// ================= TOP BUTTON =================

const topBtn =
    document.getElementById(
        "topBtn"
    );


window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 300
        ) {

            topBtn.style.display =
                "block";

        } else {

            topBtn.style.display =
                "none";
        }

    }
);


topBtn.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);
