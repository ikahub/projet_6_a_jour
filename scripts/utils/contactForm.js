function displayModal() {
    const modal = document.querySelector(".contact_btn");
    modal.addEventListener('click', function(){
        const formDiv = document.getElementById("contact_modal")
        formDiv.style.display = "block";
    })
}

function closeModal() {
    const modalCross = document.getElementById("modal_cross");
    const formDiv = document.getElementById("contact_modal");
    modalCross.addEventListener('click', function(){
        formDiv.style.display = "none";
    })
}



