$(function () {
    $.ajax({ //jQuery中的ajax方法
        type: "POST",
        url: "user/checkDelLove.action",
        data:{
            email:userEmail,
            shop_id:data[index].shop_id
        },
        dataType: "json",//数据类型是json
        success: function (data) {
            console.log(data);
            alert("删除成功！")
            oLove();
        },
        error:function(error){
            console.log(error);
        }
    })    
})