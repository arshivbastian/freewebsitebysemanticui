$(function(){
    var rel = $('body[rel]').attr('rel');
    $('#menu a:eq('+rel+'),#m_menu a:eq('+rel+')').addClass('active');

    $('#m_btn').click(function(){
        $('#m_menu').sidebar('toggle');
    });

    $('.pop').popup();

    $('.bodycontent .grid .button').hover(function() {
        $(this).transition('tada');
    });
    $('.bodycontent .specialmove img').mouseover(function() {
        $(this).transition('pulse');
    });

    $('.ui.inverted.violet.button').click(function() {
        $('.shape').shape('set next side', '.second.side').shape('flip up')
;
    });

    $('.ui.dimmable').dimmer({on: 'hover'});
     
    $('.portfoliobody .moving').mouseover(function() {
        $(this).transition('bounce');
    });

    $('.contactbody .ui.red.button').click(function(){
        $('.mini.modal.phone').modal('show');
    });
    $('.contactbody .ui.yellow.button').click(function(){
        $('.mini.modal.office').modal('show');
    });
    $('.contactbody .ui.green.button').click(function(){
        $('.fullscreen.modal.chat').modal('show');
    });
    $('.contactbody .ui.blue.button').click(function(){
        $('.fullscreen.modal.email').modal('show');
    });
    $('.ui.modal .actions>.red.button').click(function(){
        $('.modal').modal('hide');
    });
});