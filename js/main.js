$(function () {

    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    var shopId = GetQueryString(shopId);
    console.log(shopId);
    $.ajax({ //jQuery中的ajax方法
        type: "POST",
        url: url,
        data:{
            shop_id:shopId
        },
        dataType: "json",//数据类型是json
        success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
            console.log(data);
        },
        error: function (jqXHR) {//失败后执行的方法。
            console.log(jqXHR)
        },
    })

})
