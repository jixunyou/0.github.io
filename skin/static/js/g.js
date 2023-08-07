$(function () {
    //zoom
    $(window).resize(function () {
        $('[zoom-width][zoom-heigh]:visible').each(function () { $(this).height($(this).width() * parseInt($(this).attr('zoom-heigh')) / parseInt($(this).attr('zoom-width'))); });
    }).resize();
    //end


    //menu
    $('.daohang .menu,.nav .close').click(function () {
        var n = $('.nav');
        n.hasClass('show') ? n.removeClass('show') : n.addClass('show');
        return false;
    });
    //end



});