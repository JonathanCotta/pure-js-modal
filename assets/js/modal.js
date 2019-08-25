function modal(trigger) {

    var md = document.querySelector(".modal");

    document.querySelector(trigger).addEventListener("click", modalToggle);

    document.querySelector(".modal__close").addEventListener("click", modalToggle);

    window.onclick = function (event) { 
        if (event.target === md)
            modalToggle();
    };

    function modalToggle() {
        return md.classList.toggle("modal--show");
    }
}