let searchField = document.querySelector(".search-field");
let searchInput = document.getElementById("search-input");
let mainContainer = document.querySelector("main-container");
let searchClearTxt = document.getElementById('search-clear');

let deliveryTimeContainer = document.getElementById('delivery-schedule');
let deliverySlot = document.getElementById('delivery-slots');

let mobileMenuIcon = document.getElementById('mobile-icon');
let mobileMenu = document.getElementById('mobile-menu-container');
let mobileMenuMain = document.getElementById('mobile-menu-main');



/*Mobile Menu */
document.addEventListener('click',(e)=>{
    let target = e.target;
    if(target==searchInput){
        searchField.classList.add('search-active');
    }else{
        searchField.classList.remove('search-active');
    }

    if(target==mobileMenuIcon || target==mobileMenuMain){
        
        mobileMenu.classList.remove('inactive')
        document.body.classList.add("stop-scrolling");
    }else{
       
        mobileMenu.classList.add('inactive');
        document.body.classList.remove("stop-scrolling");
    }
})

/*Clear input value*/
searchClearTxt.addEventListener('click',()=>{
    searchInput.value=null;
})

/*Delivery Slots*/
deliveryTimeContainer.addEventListener('click',()=>{
    deliverySlot.classList.toggle('active-slot');
    
})

