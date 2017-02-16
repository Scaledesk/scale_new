/*................. navbar..............  */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.height = "15%";
    document.getElementById("mySidenav").style.transition = "all .4s ease";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
/*//............ nav bar.............. // */




/*
scroll down button on footer*/

$('.scroll-down').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 650 }, 900);
//                                       |    |
//                                       |    --- duration (milliseconds)
//                                       ---- distance from the top
});


/*scroll down button on banner end*/
