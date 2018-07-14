$(function(){

    var userEmail = sessionStorage.getItem("email");
    console.log(userEmail);  

    $.ajax({ //jQuery中的ajax方法
        type: "POST",
        url: "shop/showShopTimeOne.action",
        // data:({
        //     oEmail:userEmail,
        // }),
        dataType: "json",//数据类型是json
        success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
            console.log(data);
            
        },
        error: function (jqXHR) {//失败后执行的方法。
            console.log(jqXHR)
        },
    })

})