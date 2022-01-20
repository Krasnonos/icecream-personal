(() => {
    const refs = {
        openModalBtn: document.querySelector('[info-data-modal-open]'),
        closeModalBtn: document.querySelector('[info-data-modal-close]'),
        modal: document.querySelector('[info-data-modal]'),
    };
    
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    
    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
    })();