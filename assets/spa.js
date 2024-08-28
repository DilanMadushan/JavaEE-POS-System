$('#customerButton').on('click', function(){

    $('#customerSection').css({display:'block'});
    $('#itemSection').css({display:'none'});
    $('#orderSection').css({display:'none'});
    $('#cardSection').css({display:'none'});

});

$('#itemButton').on('click', function(){

    $('#itemSection').css({display:'block'});
    $('#customerSection').css({display:'none'});
    $('#orderSection').css({display:'none'});
    $('#cardSection').css({display:'none'});

});

$('#orderButton').on('click', function(){

    $('#orderSection').css({display:'block'});
    $('#customerSection').css({display:'none'});
    $('#itemSection').css({display:'none'});
    $('#cardSection').css({display:'none'});

});

$(document).ready(function(){
    $('#orderSection').css({display:'none'});
    $('#customerSection').css({display:'none'});
    $('#itemSection').css({display:'none'});
    $('#cardSection').css({display:'none'});
})


// $('#hambeger').on('click', function(){

//     $('#logo-sidebar').css('transform', 'none');

// });

// // $(document).on('click', function(event) {
    
// //     if (!$(event.target).closest('#logo-sidebar','#hambeger').length) {
        
// //         console.log("outside");
// //         $('#logo-sidebar').css({transform: 'translate(-260px, 0)'});
// //     }
// // });

// // $(document).on('click', function(event) {
// //     if (!$(event.target).closest('#hambeger').length) {
        
        
// //     }
// // });




