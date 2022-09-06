
const buttonOpen = document.querySelector('.delete')
buttonOpen.addEventListener('click', () => {

    const allModal = document.querySelector('.modalDeleteAll')
    const closeModal = document.querySelector('.modelaDelte')

    allModal.style.display = 'block'
    closeModal.style.display = 'block'
 
})

const buttonClone = document.querySelector('.close')
buttonClone.addEventListener('click', () => {

    const allModal = document.querySelector('.modalDeleteAll')
    const closeModal = document.querySelector('.modelaDelte')

    allModal.style.display = 'none'
    closeModal.style.display = 'none'
})
