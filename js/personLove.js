$(function(){
    var userEmail = sessionStorage.getItem("email");
    console.log(userEmail);

    $.ajax({ //jQuery中的ajax方法
        type: "POST",
        url: "user/showLove.action",
        data:{
            email:userEmail
        },
        dataType: "json",//数据类型是json
        success: function (data) {
            console.log(data);
            
        },
        error: function (jqXHR) {//失败后执行的方法。
            console.log(jqXHR)
        },
    })

})