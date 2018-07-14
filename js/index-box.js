$(function(){

    var userEmail = sessionStorage.getItem("email");
    console.log(userEmail);  
var shopbox = function(url,place){
    $.ajax({ //jQuery中的ajax方法
        type: "POST",
        url: url,
        dataType: "json",//数据类型是json
        success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
            
            console.log(data);
            if(data!=''){
                for(var i=0;i<data.length;i++){
                    let html = 
                    `
                    <div class="col-xs-6 col-sm-3">
                    <div class="new-box">
                        <a href="main.html">
                            <img src="${data[i].shop_img}" class="img-responsive images" alt="Responsive image">
                            <h5>${data[i].shop_name}</h5>
                            <small>新店开张，送代金券哦</small>
                            <div class="la">
                                <span>辣味等级</span>
                                <img src="images/la.png" class="img-responsive">
                            </div>
                            <div class="shop">
                                <strong class="color2 money">￥${data[i].avg_price}</strong>
                                <small>已售
                                    <span>${data[i].sold}</span>
                                </small>
                            </div>
                        </a>
                    </div>
                </div>
                    `
                    $(place).append(html)
                }
            }
        },
        error: function (jqXHR) {//失败后执行的方法。
            console.log(jqXHR)
        },
    })
}



    $("#more1").click(function(){
        shopbox("shop/showShopTimeTwo.action",'#shopBox1');
        $("#more1").css('display','none');
    })

    shopbox("shop/showShopTimeOne.action",'#shopBox1')

    // $.ajax({ //jQuery中的ajax方法
    //     type: "POST",
    //     url: "shop/showShopTimeOne.action",
    //     // data:({
    //     //     oEmail:userEmail,
    //     // }),
    //     dataType: "json",//数据类型是json
    //     success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
    //         console.log(data);
    //         if(data!=''){
    //             for(var i=0;i<data.length;i++){
    //                 let html = 
    //                 `
    //                 <div class="col-xs-6 col-sm-3">
    //                 <div class="new-box">
    //                     <a href="main.html">
    //                         <img src="${data[i].shop_img}" class="img-responsive images" alt="Responsive image">
    //                         <h5>${data[i].shop_name}</h5>
    //                         <small>新店开张，送代金券哦</small>
    //                         <div class="la">
    //                             <span>辣味等级</span>
    //                             <img src="images/la.png" class="img-responsive">
    //                         </div>
    //                         <div class="shop">
    //                             <strong class="color2 money">￥${data[i].avg_price}</strong>
    //                             <small>已售
    //                                 <span>${data[i].sold}</span>
    //                             </small>
    //                         </div>
    //                     </a>
    //                 </div>
    //             </div>
    //                 `
    //                 $('#shopBox1').append(html)
    //             }
    //         }
    //     },
    //     error: function (jqXHR) {//失败后执行的方法。
    //         console.log(jqXHR)
    //     },
    // })

})