/* =================================
   BOTÓN EXPLORAR
================================= */

const exploreButton =
    document.getElementById("exploreButton");


exploreButton.addEventListener("click", () => {

    document
        .getElementById("generos")
        .scrollIntoView({
            behavior: "smooth"
        });

});



/* =================================
   TARJETAS DE EJEMPLOS
================================= */

const openButtons =
    document.querySelectorAll(".open-card");


openButtons.forEach(button => {

    button.addEventListener("click", () => {

        const example =
            button.parentElement
                .querySelector(".card-example");


        const isOpen =
            example.classList.contains("show");


        /* Cerrar los demás */

        document
            .querySelectorAll(".card-example")
            .forEach(item => {

                item.classList.remove("show");

            });


        document
            .querySelectorAll(".open-card")
            .forEach(item => {

                item.textContent =
                    "Ver ejemplo";

            });


        /* Abrir el seleccionado */

        if (!isOpen) {

            example.classList.add("show");

            button.textContent =
                "Ocultar ejemplo";

        }

    });

});



/* =================================
   FILTROS
================================= */

const filters =
    document.querySelectorAll(".filter");


const cards =
    document.querySelectorAll(".card");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        const category =
            filter.getAttribute("data-filter");


        filters.forEach(item => {

            item.classList.remove("active");

        });


        filter.classList.add("active");


        cards.forEach(card => {

            const cardCategory =
                card.getAttribute(
                    "data-category"
                );


            if (
                category === "all" ||
                category === cardCategory
            ) {

                card.style.display =
                    "block";


                setTimeout(() => {

                    card.style.opacity =
                        "1";

                    card.style.transform =
                        "translateY(0)";

                }, 50);

            }

            else {

                card.style.opacity =
                    "0";

                card.style.transform =
                    "translateY(15px)";


                setTimeout(() => {

                    card.style.display =
                        "none";

                }, 300);

            }

        });

    });

});



/* =================================
   FRASE FINAL
================================= */

const quoteButton =
    document.getElementById(
        "quoteButton"
    );


const quote =
    document.getElementById(
        "quote"
    );


const quotes = [

    "“Un libro puede terminar, pero aquello que nos hizo sentir permanece.”",

    "“Entre una página y otra también existe un lugar para imaginar.”",

    "“Leer es abrir una puerta que no necesita llave.”",

    "“Algunas historias encuentran lectores. Otras encuentran un hogar.”",

    "“Las palabras también tienen alas.”"

];


quoteButton.addEventListener("click", () => {

    const randomIndex =
        Math.floor(
            Math.random() *
            quotes.length
        );


    quote.style.opacity =
        "0";


    setTimeout(() => {

        quote.textContent =
            quotes[randomIndex];


        quote.style.opacity =
            "1";

    }, 300);

});



/* =================================
   MARIPOSAS EXTRA
================================= */

const butterflySymbols = [

    "🦋",
    "🦋",
    "✦",
    "✧"

];


function createButterfly() {

    const butterfly =
        document.createElement("div");


    butterfly.classList.add(
        "butterfly"
    );


    butterfly.textContent =
        butterflySymbols[
            Math.floor(
                Math.random() *
                butterflySymbols.length
            )
        ];


    butterfly.style.left =
        Math.random() * 100 +
        "vw";


    butterfly.style.top =
        Math.random() * 100 +
        "vh";


    butterfly.style.fontSize =
        (
            12 +
            Math.random() * 16
        ) + "px";


    butterfly.style.opacity =
        0.2 +
        Math.random() * 0.4;


    butterfly.style.transition =
        "transform 12s linear, opacity 12s";


    document.body.appendChild(
        butterfly
    );


    setTimeout(() => {

        butterfly.style.transform =

            `translate(
                ${(Math.random() - 0.5) * 300}px,
                ${-300 - Math.random() * 400}px
            )
            rotate(${Math.random() * 360}deg)`;


        butterfly.style.opacity =
            "0";

    }, 100);


    setTimeout(() => {

        butterfly.remove();

    }, 12500);

}


setInterval(
    createButterfly,
    3500
);



/* =================================
   APARICIÓN AL HACER SCROLL
================================= */

const sections =
    document.querySelectorAll(

        ".card, " +
        ".situation, " +
        ".project-card, " +
        ".game-invitation, " +
        ".justice-visual, " +
        ".mini-illustration"

    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                        "1";


                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


sections.forEach(element => {

    element.style.opacity =
        "0";


    element.style.transform =
        "translateY(25px)";


    element.style.transition =
        "opacity 0.7s ease, " +
        "transform 0.7s ease";


    observer.observe(element);

});