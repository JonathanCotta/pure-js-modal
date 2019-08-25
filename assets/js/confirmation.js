function confirmation(selector, callback) {

    document.querySelector(selector).addEventListener("click", confirmToggle); // abre o confirm
 
    document.querySelector("button[name='yes']").addEventListener("click", function () {
        confirmToggle();
        callback(true);       
    });

    document.querySelector("button[name='no']").addEventListener("click", function () {
        confirmToggle();
        callback(false);       
    });

    function confirmToggle() { // função para abrir e fechar confirm
        return document.querySelector(".confirmation").classList.toggle("modal--show");
    }
}