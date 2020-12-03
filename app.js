$(document).ready(function(){
   /* $(".item_container").mouseover((e)=>{
        //console.log("hovering");
            console.log($(this).find($(".hover_info_name")).prop("name"));

        
        $("#" + $(this).children($(".hover_info_name")).prop("name") + "").css({
            "display": "block",
            "opacity": "1",
            "transition" : "all 0.3s !important"
        })

    });
    $(".item_container").mouseleave((e) => {
        $("#" + $(this).children(".hover_info_name").prop("name") + "").css({
            "display": "none",
            "opacity": "0",
            "transition" : "all 0.3s !important"
        });
        
    });*/

    $("#item_container").mouseover(function(){
        console.log("hovering");
        $(".hover_info").css({
            "display": "block",
            "opacity": "1",
            "transition" : "all 0.3s !important"
        });

    });
    $("#item_container").mouseleave(function(){
        console.log("hovering");
        $(".hover_info").css({
            "display": "none",
            "opacity": "0",
            "transition" : "all 0.3s !important"
        });
        
    });

    $("#item_containe_1").mouseover(function(){
        console.log("hovering");
        $(".hover_info_1").css({
            "display": "block",
            "opacity": "1",
            "transition" : "all 0.3s !important"
        });

    });
    $("#item_container_1").mouseleave(function(){
        console.log("hovering");
        $(".hover_info_1").css({
            "display": "none",
            "opacity": "0",
            "transition" : "all 0.3s !important"
        });
        
    });

    $("#item_container_2").mouseover(function(){
        console.log("hovering");
        $(".hover_info_2").css({
            "display": "block",
            "opacity": "1",
            "transition" : "all 0.3s !important"
        });

    });
    $("#item_container_2").mouseleave(function(){
        console.log("hovering");
        $(".hover_info_2").css({
            "display": "none",
            "opacity": "0",
            "transition" : "all 0.3s !important"
        });
        
    });

    $("#item_container_3").mouseover(function(){
        console.log("hovering");
        $(".hover_info_3").css({
            "display": "block",
            "opacity": "1",
            "transition" : "all 0.3s !important"
        });

    });
    $("#item_container_3").mouseleave(function(){
        console.log("hovering");
        $(".hover_info_3").css({
            "display": "none",
            "opacity": "0",
            "transition" : "all 0.3s !important"
        });
        

        $("#item_container_4").mouseover(function(){
            console.log("hovering");
            $(".hover_info_4").css({
                "display": "block",
                "opacity": "1",
                "transition" : "all 0.3s !important"
            });
    
        });
        $("#item_container_4").mouseleave(function(){
            console.log("hovering");
            $(".hover_info_4").css({
                "display": "none",
                "opacity": "0",
                "transition" : "all 0.3s !important"
            });
            
        });

        $("#item_container_5").mouseover(function(){
            console.log("hovering");
            $(".hover_info_5").css({
                "display": "block",
                "opacity": "1",
                "transition" : "all 0.3s !important"
            });
    
        });
        $("#item_container_5").mouseleave(function(){
            console.log("hovering");
            $(".hover_info_5").css({
                "display": "none",
                "opacity": "0",
                "transition" : "all 0.3s !important"
            });
            
        });
    });

    $("#item_container_6").mouseover(function(){
        console.log("hovering");
        $(".hover_info_6").css({
            "display": "block",
            "opacity": "1",
            "transition" : "all 0.3s !important"
        });

    });
    $("#item_container_6").mouseleave(function(){
        console.log("hovering");
        $(".hover_info_6").css({
            "display": "none",
            "opacity": "0",
            "transition" : "all 0.3s !important"
        });
        
    });

    $("#item_container_7").mouseover(function(){
        console.log("hovering");
        $(".hover_info_7").css({
            "display": "block",
            "opacity": "1",
            "transition" : "all 0.3s !important"
        });

    });
    $("#item_container_7").mouseleave(function(){
        console.log("hovering");
        $(".hover_info_7").css({
            "display": "none",
            "opacity": "0",
            "transition" : "all 0.3s !important"
        });
        
    });

    $("#item_container_8").mouseover(function(){
        console.log("hovering");
        $(".hover_info_8").css({
            "display": "block",
            "opacity": "1",
            "transition" : "all 0.3s !important"
        });

    });
    $("#item_container_8").mouseleave(function(){
        console.log("hovering");
        $(".hover_info_8").css({
            "display": "none",
            "opacity": "0",
            "transition" : "all 0.3s !important"
        });
        
    });

    $("#item_container_9").mouseover(function(){
        console.log("hovering");
        $(".hover_info_9").css({
            "display": "block",
            "opacity": "1",
            "transition" : "all 0.3s !important"
        });

    });
    $("#item_container_9").mouseleave(function(){
        console.log("hovering");
        $(".hover_info_9").css({
            "display": "none",
            "opacity": "0",
            "transition" : "all 0.3s !important"
        });
        
    });

    $(".close_hover").click(()=>{
        $(".full_page_hover").css({
            "display":"none"
        })
    })


    $(".enlarge_img").click((e)=>{
        $("."+ e.target.name+"").css({
            "display":"block"
        })
    })



});


