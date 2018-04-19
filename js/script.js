$(function(){
    var rel = $('body[rel]').attr('rel');
    $('#menu a:eq('+rel+'),#m_menu a:eq('+rel+')').addClass('active');

    $('#m_btn').click(function(){
        $('#m_menu').sidebar('toggle');
    });

    $('.pop').popup();

    $('.bodycontent .grid .button').hover(function() {
        $('.bodycontent .grid .button').transition('tada');
    });
    $('.bodycontent .specialmove img').hover(function() {
        $('.bodycontent .specialmove img').transition('pulse');
    });

    $('.ui.inverted.violet.button').click(function() {
        $('.shape').shape('set next side', '.second.side').shape('flip up')
;
    });

    $('.ui.dimmable').dimmer({on: 'hover'});
        
});