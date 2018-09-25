$(document).ready(function () {

    function activeButton(button) {
        $(button).removeClass('embossBTN').addClass('embossBTN2');
    };

    function resetButtons() {
        $("#MStoolbar").find(".embossBTN2").each(function () {
            $(this).removeClass("embossBTN2").addClass('embossBTN')
        });
        $('#MScanvas').find('.paint').each(function(){
            $(this).addClass('d-none');
        });
    };

    $("#MStoolbar").find(".eb").each(function () {
        $(this).on('click',function () {
            var eID = '.' + $(this).attr('id');
            resetButtons();
            activeButton(this);
            $(eID).removeClass('d-none');
            console.log(eID)
        })
    });
})