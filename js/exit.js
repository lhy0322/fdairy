$(function(){
    //退出
    $(".ok-exit").click(function(){
        sessionStorage.removeItem("email");

        $('#myModal2').modal('hide')
        $("#name").css("display","none");
        $("#goin1").css("display","block");
    })

    //session
    var userEmail = sessionStorage.getItem("email");
    console.log(userEmail);
    if(userEmail != undefined){
        $("#name-name").html(userEmail);
        $("#name").css("display","block");
        $("#goin1").css("display","none");
        
    }else{
        console.log("kong")
    }
})