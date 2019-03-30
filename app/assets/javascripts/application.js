// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


document.addEventListener("turbolinks:load", ()=> {
    toggleContents()
})


const toggleContents = () => {
    const toggleButton = document.querySelector(".contents__toggle")
    const list = document.querySelector(".contents__list")
    const toggleText = toggleButton.querySelector(".contents__toggle-title")
    toggleButton.addEventListener("click", ()=>{
        if(list.classList.contains("contents__list--visible")){
            list.classList.remove("contents__list--visible")
            toggleButton.classList.remove("contents__toggle--visible")
            toggleText.textContent = "Show contents"
        } else {
            list.classList.add("contents__list--visible")
            toggleButton.classList.add("contents__toggle--visible")
            toggleText.textContent = "Hide contents"
        }
    })
}
