let switcherlis = document.querySelectorAll(".switcher li");
switcherlis.forEach((li) => {
    li.addEventListener("click", removeActive);
});
function removeActive() {
    switcherlis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add ("active", "rounded-pill");
});
}
// manage imges
(function (){
    let buttons = document.querySelectorAll('.BTN')
    let storeImages = document.querySelectorAll('.store-item')
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
          e.preventDefault()
          let filter = e.target.dataset.filter
          storeImages.forEach((item) => {
           if (filter === 'All'){
              item.style.display ='block';
           } else{
            if (item.classList.contains(filter)) {
                item.style.display ='block';
               } else {
        item.style .display ='none';
                 }
               }
           })
       })
    })
})();