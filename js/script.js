/* --- Side menu ---- */
// Adapted code from: Beatriz Cunha

// Variables
var toogleMenu = document.querySelectorAll('#menu-toggle'),
    wrapper    = document.querySelector('.wrapper'),
    close      = document.querySelectorAll('#close-menu');

// Action to open menu
// We use the for just to make the browser recognize the variable as a function 
for (var i = 0; i < toogleMenu.length; i++){
    //Opening
    toogleMenu[i].addEventListener('click', function(){
        wrapper.classList.add('show-menu');
    });
    //Clossing
    close[i].addEventListener('click', function(){
        wrapper.classList.remove('show-menu');
    });
}

/* --- Pages Navigator ---*/
var  pageNavigator = document.querySelectorAll('#page-navigator > li');
console.log(pageNavigator);
for (var i = 0; i < pageNavigator.length; i++){ 
    pageNavigator[i].addEventListener('click', function(){
        //pageNavigator[i].addClass('selected');
        console.log( pageNavigator[i]);
    });

}
