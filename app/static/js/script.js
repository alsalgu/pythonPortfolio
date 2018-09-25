$(document).ready(function () {

    function activeButton(button) {
        $(button).removeClass('embossBTN').addClass('embossBTN2');
    };

    function resetButtons() {
        $("#MStoolbar").find(".embossBTN2").each(function () {
            $(this).removeClass("embossBTN2").addClass('embossBTN')
        })
    };

    $("#MStoolbar").find(".eb").each(function () {
        $(this).on('click',function () {
            resetButtons();
            activeButton(this);
        })
    });
})