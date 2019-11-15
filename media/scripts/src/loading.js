$$.loading = {};

$$.loading.showcover = (double) => {
    if(double === true) {
        $(".loadcover").addClass("show");
        $(".loadcover").addClass("double");
    } else {
        $(".loadcover").addClass("show");
        $(".loadcover").addClass("ring");
    }
};

$$.loading.hidecover = () => {
    $(".loadcover").removeClass("show");
    $(".loadcover").removeClass("double");
    $(".loadcover").removeClass("ring");
};