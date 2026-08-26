// ========================================
// NatureX Official Website
// ========================================

console.log("NatureX website loaded successfully.");


document.addEventListener("DOMContentLoaded", () => {

    console.log("Restore. Protect. Inspire.");


    // ========================================
    // NAVIGATION
    // ========================================

    const navigationLinks =
        document.querySelectorAll("nav a");


    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            console.log(
                "NatureX navigation:",
                link.textContent.trim()
            );

        });

    });


    // ========================================
    // HERO NATURE SCENE
    // ========================================

    const natureScene =
        document.querySelector(".nature-scene");


    if (natureScene) {

        natureScene.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    natureScene.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const rotateY =
                    ((x / rect.width) - 0.5) * 4;


                const rotateX =
                    ((y / rect.height) - 0.5) * -4;


                natureScene.style.transform =
                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     scale(1.02)`;

            }
        );


        natureScene.addEventListener(
            "mouseleave",
            () => {

                natureScene.style.transform =
                    "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";

            }
        );

    }


    // ========================================
    // PROJECT CARD INTERACTION
    // ========================================

    const projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {

            console.log(
                "NatureX Project:",
                card.querySelector("h3")?.textContent
            );

        });

    });

});