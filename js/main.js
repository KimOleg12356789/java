$(document).ready(function(){

   




});





const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});






let triggersModal = document.querySelectorAll(".js-show-modal");
      let modals = document.querySelectorAll(".js-modal");

      function closeModal() {
        modals.forEach(modal => {
          if (modal.classList.contains("is-open")) {
            modal.classList.remove("is-open");
          }
        });
      }


      modals.forEach(modal => {
        modal.addEventListener("click", function (event) {
          const isOutside = !event.target.closest(".modal__inner");
          const isCloseButton = event.target.matches(".js-close-modal");
          if (isCloseButton || isOutside) {
            closeModal();
          }
        });
      });

      triggersModal.forEach((button) =>
      button.addEventListener("click", function (e) {
        e.preventDefault();
        let modalID = this.dataset.modal;
        console.log(modalID);
        modals.forEach(function (modal) {
          if (modal.dataset.modal == modalID) {
            modal.classList.add("is-open");
          }
        });
      }));