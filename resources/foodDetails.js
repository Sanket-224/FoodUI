function openFoodDetailsPage() {
//    $(document).ready(function() {
//        var recipe = localStorage.getItem("food");
//        document.getElementById("twotabsearchtextbox").value = recipe;
//    })
//    var recipe = localStorage.getItem("food");
//    document.getElementById("twotabsearchtextbox").value = recipe;


}

var getQueryString = function ( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};

$(document).ready(function() {

    $('#add-to-cart-button-custom').on('click', function(e) {
        window.location = "http://localhost:3000/third"
    });

    $('#sc-buy-box-ptc-button').on('click', function(e) {
        window.location = "http://localhost:3000/last"
    });
})