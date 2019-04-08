
const launchDialog = () => {
    const openButton = document.querySelector(".links__new-link")
    const dialog = document.querySelector(".new-link-dialog")
    dialogPolyfill.registerDialog(dialog);
    
    console.log(dialog)

    openButton.addEventListener("click", ()=>{
        dialog.showModal()
    })
}