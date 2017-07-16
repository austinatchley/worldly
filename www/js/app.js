// Define Dom7
var $$ = Dom7;
 
// Init App
var myApp = new Framework7({});
 
// Init View
var view1 = myApp.addView('.view-main', {
    // Don't worry about that Material doesn't support it
    // F7 will just ignore it for Material theme
    dynamicNavbar: true
});

var like_val0 = 10, like_val1 = 46, like_val2 = 4;

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

$$('#like-val0').html(' ' + like_val0);
$$('#like-val1').html(' ' + like_val1);
$$('#like-val2').html(' ' + like_val2);
// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page
    myApp.alert('Page Init', 'About');
})

$$('#like0').on('click', function(e){
    $$('#like-val0').html(++like_val0);
});

$$('#like1').on('click', function(e){
    $$('#like-val1').html(++like_val1);
});

$$('#like2').on('click', function(e){
    $$('#like-val2').html(++like_val2);
});