$(function () {

    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    var shopId = GetQueryString("shopId");
    console.log(shopId);
    $.ajax({ //jQuery中的ajax方法
        type: "POST",
        url: "shop/checkShop.action",
        data:{
            shop_id:shopId
        },
        dataType: "json",//数据类型是json
        success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
            console.log(data);
            let html = 
            `
            <div class="row">
            <div class="top-left col-xs-12 col-sm-4">
                <img class=" img-circle col-xs-12 col-sm-4 col-sm-offset-3" src="${data.shop_img}">
                <div class="btn-1 col-xs-12 col-sm-12" >
                    <button type="button" class="btn-2 btn btn-info"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span> 喜欢</button>
                    <button type="button" class="btn-3 btn btn-info"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> 邀请</button>
                </div>
            </div>
            <div class="col-xs-12 col-sm-8">
                <h4 class="xiangqing1"><strong>${data.shop_name}</strong></h4>
                <h6 class="xiangqing">人均：<span class="money">￥${data.ave_price}</span> | 起送：<span>10元</span> | 配送：<span>1元</span></h6>
                <h5 class="xiangqing">综合评价 <span>${data.level}分</span></h5>
                <h5 class="xiangqing">店铺地址：<span>${data.address}</span></h5>
                <h5 class="xiangqing">配送速度 <span>${data.s_time}分钟</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="slow">慢</span> &nbsp;&nbsp;&nbsp;<span class="fast">中</span> &nbsp;&nbsp;&nbsp;<span class="slow">快</span></h5>
                <h5 class="xiangqing">营业时间：<span>07:00-23:55</span></h5>
            </div>
        </div>
            `
            $('.main').append(html)
        },
        error: function (jqXHR) {//失败后执行的方法。
            console.log(jqXHR)
        },
    })

    $.ajax({ //jQuery中的ajax方法
        type: "POST",
        url: "shop/showFood.action",
        data:{
            shop_id:shopId
        },
        dataType: "json",//数据类型是json
        success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
            console.log(data);
            for(var i=0;i<data.length;i++){
                let html = 
                `
                <div class="food-box col-xs-12 col-sm-12">
                <img alt="Responsive image" class="col-xs-4 col-sm-3 img-responsive" src="images/pic4.png" alt="">
                <div class="shopping col-xs-8 col-sm-9">
                    <h4><strong>花妹妹煲仔饭</strong> <small> 月售11102</small></h4>
                    <h6>人均：<span class="money">￥14</span> | 起送：<span>10元</span> | 配送：<span>1元</span></h6>
                    <h5>美味快餐：<span>送10元代金券</span></h5>
                    <h5>综合评价 <span>4.6分</span></h5>
                    <h5>配送速度 <span>36分钟</span></h5>
                    <button type="button" class="btn  btn-danger">加入订单</button>
                </div>
            </div>
                `
                $('#oFood').append(html)
            }
           
        },
        error: function (jqXHR) {//失败后执行的方法。
            console.log(jqXHR)
        },
    })

})
