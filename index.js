document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        const modalId = this.dataset.modal;
        document.getElementById(`modal-${modalId}`).style.display = 'flex';
    });
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        this.parentElement.parentElement.style.display = 'none';
    });
});

window.onclick = function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};
