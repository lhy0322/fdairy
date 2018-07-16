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
    
    //菜色
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
                if(data[i].food_img == null){
                    data[i].food_img="images/no_pic.png";
                }

                let html = 
                `
                <div class="food-box col-xs-12 col-sm-12">
                <img alt="Responsive image" class="col-xs-4 col-sm-3 img-responsive" src="${data[i].food_img}" alt="">
                <div class="shopping col-xs-8 col-sm-9">
                    <h4><strong>${data[i].food_name}</strong></h4>
                    <h5>美味快餐：<span>送10元代金券</span></h5>
                    <div class="shop">
                    <strong class="color2 money">￥${data[i].now_price}</strong>
                    <small>已售
                        <span>${data[i].sold_count}</span>
                    </small>
                </div>
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
    //评论
    //时间戳转日期格式
    
    function getLocalTime(nS) {   
        return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');   
     }  
    $.ajax({ //jQuery中的ajax方法
        type: "POST",
        url: "shop/showComment.action",
        data:{
            shop_id:shopId
        },
        dataType: "json",//数据类型是json
        success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
            console.log(data);
            for(var i=0;i<data.length;i++){
                // data[i].create_time = getLocalTime(data[i].create_time);

                
                function formatDate(date) {
                    dates = date.split("/");
                    if(dates.length == 3) {
                        if(dates[1].length == 1) {
                            dates[1] = "0" + dates[1];
                        }
                        if (dates[2].length == 1) {
                            dates[2] = "0" + dates[2];
                        }
                        date = dates.join("-");
                        return date;
                    } else {
                        return null;
                    }
                }
                function parseTime(timestamp) {
                    var date = new Date(parseInt(timestamp)).toLocaleDateString();
                　　//输出结果为2016/8/9
                    date = formatDate(date);
                　　//输出结果为2016-08-09，满足YYYY-MM-DD格式要求
                    return date;
                }
                data[i].create_time = formatDate(data[i].create_time);
                let html = 
                `
                <div class="food-box col-xs-12 col-sm-12">
                <img alt="Responsive image" class="col-xs-3 col-sm-1 img-responsive" src="images/name.jpg" alt="">
                <div class="shopping col-xs-9 col-sm-9">
                    <p>${data[i].commenter}</p>
                    <p>${data[i].content}</p>
                </div>
                <div class="shopping col-xs-offset-5  col-sm-offset-0 col-xs-7 col-sm-2">
                    <p class="col-xs-9 col-sm-offset-0 col-sm-12">${data[i].create_time}</p>
                    <!- <p class="col-xs-2 col-sm-12 good"><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> </p> -->
                </div>
            </div>
                `
                $('#talk').append(html)
            }
           
        },
        error: function (jqXHR) {//失败后执行的方法。
            console.log(jqXHR)
        },
    })

})
