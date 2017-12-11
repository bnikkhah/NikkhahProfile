$(document).ready(function(){
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
        $(".content.quote").append("<blockquote class='notification is-light'>" + a[0].content + "</blockquote>" + "<p>— " + a[0].title + "</p>")
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
    });

    // $(window).scroll(function(e){
    //     $('html, body').animate({
    //         scrollTop: $(this).parent().next().offset().top
    //     }, 600);
    // })
    
    // $('button.navbar-burger').on('click', function(){
    //     $(this).toggleClass('is-active')
    //     $('.navbar-menu').toggleClass('is-active');
    // })
})