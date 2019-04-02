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
//= require trix

const initialiseFunctions = ()=> {
    toggleContents()
    Trix.config.blockAttributes.default.tagName = 'p';
}

const toggleContents = () => {
    const toggleButton = document.querySelector(".contents__toggle")
    const collapsible = document.querySelector(".contents__collapsible")
    const toggleText = toggleButton.querySelector(".contents__toggle-title")
    toggleButton.addEventListener("click", ()=>{
        if(collapsible.classList.contains("contents__collapsible--visible")){
            collapsible.classList.remove("contents__collapsible--visible")
            toggleButton.classList.remove("contents__toggle--visible")
            toggleText.textContent = "Show contents"
        } else {
            collapsible.classList.add("contents__collapsible--visible")
            toggleButton.classList.add("contents__toggle--visible")
            toggleText.textContent = "Hide contents"
        }
    })
}

document.addEventListener("turbolinks:load", initialiseFunctions)

