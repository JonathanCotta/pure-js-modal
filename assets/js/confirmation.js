function confirmation(selector, callback) {
    const addClickEvent = (element, eventCallback) => document.querySelector(element).addEventListener("click", eventCallback);

    const confirmToggle = () => document.querySelector(".confirmation").classList.toggle("modal--show");

    addClickEvent(selector, confirmToggle);

    addClickEvent("button[name='yes']", () => {
        confirmToggle();
        callback(true);
    });

    addClickEvent("button[name='no']", () => {
        confirmToggle();
        callback(false);
    })
}
