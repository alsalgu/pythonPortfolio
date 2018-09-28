$(document).ready(function () {

    $('#loading-wrap').remove();
    $('#body').removeClass('noflow');

    function activeButton(button) {
        $(button).removeClass('embossBTN').addClass('embossBTN2');
    };

    function resetButtons() {
        $("#MStoolbar").find(".embossBTN2").each(function () {
            $(this).removeClass("embossBTN2").addClass('embossBTN')
        });
        $('#MSPaint').find('.paint').each(function () {
            $(this).addClass('d-none');
        });
    };

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $("#MStoolbar").find(".eb").each(function () {
        $(this).on('click', function () {
            var eID = '.' + $(this).attr('id');
            resetButtons();
            activeButton(this);
            $(eID).removeClass('d-none');
        })
    });


    var current_page = ""
    var page_cat = ""

    if (window.location.pathname != "/") {
        var pathname = window.location.pathname.substring(1);
        pathname = pathname.replace(/\//g, '-');
        current_page = "#" + pathname;
        page_cat = window.location.pathname.split('/')
    } else {
        current_page = "#home";
    }

    $(current_page).addClass('active');
    $("#" + page_cat[1]).addClass('active');
})