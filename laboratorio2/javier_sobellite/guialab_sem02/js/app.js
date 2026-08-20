"use strict";


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* ==========================================
           AÑO ACTUAL
           ========================================== */

        const yearElement =
            document.querySelector(
                "[data-current-year]"
            );


        /* ==========================================
           MENSAJE DE ESTADO
           ========================================== */

        const statusElement =
            document.querySelector(
                "#estado-registro"
            );


        /* ==========================================
           BOTONES DE TALLERES
           ========================================== */

        const workshopButtons =
            document.querySelectorAll(
                "[data-taller]"
            );


        /* ==========================================
           ACTUALIZAR AÑO
           ========================================== */

        if (yearElement) {

            yearElement.textContent =
                String(
                    new Date().getFullYear()
                );

        }


        /* ==========================================
           COMPROBAR MENSAJE
           ========================================== */

        if (!statusElement) {

            return;

        }


        /* ==========================================
           EVENTOS DE LOS BOTONES
           ========================================== */

        workshopButtons.forEach(
            (button) => {


                button.addEventListener(
                    "click",
                    () => {


                        const workshopName =
                            button.dataset.taller ??
                            "el taller seleccionado";


                        statusElement.textContent =
                            `Has elegido ${workshopName}. ` +
                            `El registro de esta práctica es simulado.`;


                        statusElement.classList.remove(
                            "d-none"
                        );

                    }
                );

            }
        );

    }
);