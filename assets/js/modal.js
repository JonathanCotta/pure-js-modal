function modal(trigger) {
    const modal = document.querySelector(".modal");

    const addClickEvent = (element, eventCallback) => document.querySelector(element).addEventListener("click", eventCallback);

    const modalToggle = () => modal.classList.toggle("modal--show");

    addClickEvent(trigger, modalToggle);
    addClickEvent(".modal__close", modalToggle);

    window.onclick = (event) => (event.target === modal) && modalToggle();
}
