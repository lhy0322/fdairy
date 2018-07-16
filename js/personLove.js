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
            for(var i=0;i<data.length;i++){
                if(data[i].food_img == null){
                    data[i].food_img="images/no_pic.png";
                }
                let html = 
                `
                <div class="col-xs-12 col-sm-3">
                <div class="new-box  col-xs-4 col-sm-12">
                    <img src="${data[i].shop_img}" class="img-responsive col-xs-4 col-sm-12" alt="Responsive image">
                    <h5 class="col-xs-7  col-sm-12">${data[i].shop_name}</h5>
                    <small class="col-xs-7 col-sm-12">新店开张，送代金券哦</small>
                    <div class="shop col-xs-7 col-sm-12">
                        <strong class="color2 money">￥${data[i].ave_price}</strong>
                        <small>已售
                            <span>${data[i].sold}</span>
                        </small>
                        <span  class="glyphicon glyphicon glyphicon-trash shanchu" aria-hidden="true" data='${data[i].shop_id}'> </span>
                    </div>
                </div>
            </div>

                `
                $('#lovebox').append(html)
            }
            
        },
        error: function (jqXHR) {//失败后执行的方法。
            console.log(jqXHR)
        },
    })

})