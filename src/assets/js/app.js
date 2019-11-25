$(function () {
    $(".component-carousel").owlCarousel({
        items: 4,
        dots: true,
        mouseDrag: false
    });


    $('[data-toggle="tooltip"]').tooltip();

    setTimeout(function () {
        if ($(".eq-height-hook").length) {
            var hookHeight = $(".eq-height-hook .dashboard-item").outerHeight();
            $(".row-eq-height:not(.eq-height-hook) .dashboard-item").css('height', '100%');
            $('.row-eq-height').height(hookHeight);
        }
    }, 1000);


    $('.datatable').dataTable();


});