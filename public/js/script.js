$(function () {

    //starting ripples
    $('#mainbg').ripples(
        {
            interactive: false
        }
    );


    setInterval(function () {

        $('#mainbg').ripples('drop',50,50,20,0.08);

    },10000);

});