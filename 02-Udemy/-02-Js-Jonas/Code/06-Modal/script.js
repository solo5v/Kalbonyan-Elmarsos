'use strict';
// class = "show-modal" btnsOpenModal
// class = "overlay " overlay
// class = "modal" modal
// class = "close-modal""  // closing btn

const btnsOpenModal = document.querySelectorAll(".show-modal");
const closIngBtn    = document.querySelector(".close-modal");
const overlay       = document.querySelector(".overlay");
const modal         = document.querySelector('.modal');

const openModel = function () {
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
}

const closeModal = function () {
    overlay.classList.add('hidden');
    modal.classList.add("hidden");
}

  for (let i =0; i < btnsOpenModal.length; i++)  //LOOPING FOR btnsOFmodal
      btnsOpenModal[i].addEventListener("click", openModel);

      closIngBtn.addEventListener("click", closeModal);
      overlay.addEventListener("click", closeModal);


  // KEYBOARD EVENT
  document.addEventListener("keydown", function(e) {

    e.key === "Escape" && !modal.classList.contains("hidden")? 
                          closeModal()  : "";
  });

