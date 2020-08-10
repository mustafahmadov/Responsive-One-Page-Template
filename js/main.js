$(document).ready(function(){
    $(window).on('scroll',function(){
            if($(this).scrollTop()>150){
                $('.navbar').addClass('scrolled shadow-lg');
                $('.nav-link').addClass('scrolled-a');
                $('.navbar-brand').addClass('scrolled-logo');
                
            }
            else{
                $('.navbar').removeClass('scrolled');;
                $('.navbar').removeClass('scrolled shadow-lg');
                $('.nav-link').removeClass('scrolled-a');
                $('.navbar-brand').removeClass('scrolled-logo');
            }
        })
    //     let list = document.getElementsByClassName(".portfolio-item");
    //         for(let i=0;i<list.length;i++){
    //             list[i].addEventListener("onmouseover",function(){
    //                 let hoverList = document.getElementsByClassName(".portfolio-item-hover");
    //                 for(let j=0;j<hoverList.length;j++){
    //                     hoverList[j].style.display="block";
    //                 }
    //             })
    //         }
        $(".portfolio-item").hover(function() {
            $(this).children(".portfolio-item-hover").toggleClass("d-block");
        });
    })
