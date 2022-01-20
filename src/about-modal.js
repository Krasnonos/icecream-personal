(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-info-modal-open]'),
        closeModalBtn: document.querySelector('[data-info-modal-close]'),
        modal: document.querySelector('[data-info-modal]'),
    };
    
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    
    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
    })();