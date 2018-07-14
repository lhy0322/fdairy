$(function(){

    $.ajax({ //jQuery中的ajax方法
        type: "POST",
        url: "user/checkUpdateUser.action",
        data:({
            oEmail:userEmail,
            user_name:oNiName,
            src:oPic,
            sex:oSex,
            brith:oBirth
        }),
        dataType: "json",//数据类型是json
        success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
            console.log(data);
            if(data){
                $("input").val("");
                $(".tijiao").val("提交");
                $("label.error").css("display","none");
            }
        },
        error: function (jqXHR) {//失败后执行的方法。
            console.log(jqXHR)
        },
    })

})