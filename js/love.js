$(function () {

    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    var fen = GetQueryString("fen");
    var oFen = '';
    console.log(fen);
    if(fen == "0"){
        oFen = '生鲜果蔬'
    }else if(fen == "1"){
        oFen = '汉堡披萨'
    }else if(fen == "2"){
        oFen = '家常菜'
    }else if(fen == "3"){
        oFen = '包子粥铺'
    }else if(fen == "4"){
        oFen = '麻辣烫'
    }else if(fen == "5"){
        oFen = '甜点饮品'
    }else{
        oFen = '';
    }
    console.log(oFen);
    if(oFen == ''){
        $.ajax({ //jQuery中的ajax方法
            type: "POST",
            url: "shop/queryClassify.action",
            dataType: "json",//数据类型是json
            success: function (data) {
                $('#show_box').empty();
                console.log(data);
                for(var i=0;i<data.length;i++){
                    let html = 
                    `
                    <div class="food-box col-xs-12 col-sm-12">
                    <a href="main.html?shopId=${data[i].shop_id}">
                    <img alt="Responsive image" class="col-xs-3 col-sm-3 img-responsive" src="${data[i].shop_img}" alt="">
                    <div class="col-xs-9 col-sm-9">
                        <h4>
                            <strong>${data[i].shop_name}</strong>
                            <small>月售 ${data[i].sold}</small>
                        </h4>
                        <h6>人均：
                            <span class="money">￥${data[i].ave_price}</span> | 起送：
                            <span>10元</span> | 配送：
                            <span>1元</span>
                        </h6>
                        <h5>店铺地址
                            <span>${data[i].address}</span>
                        </h5>
                        <h5>综合评价
                            <span class="color5">${data[i].level}分</span>
                        </h5>
                        <h5>配送速度
                            <span class="color2">36分钟</span>
                        </h5>
                        <h5>辣度等级
                            <span class="color6">中辣</span>
                        </h5>
                        <h5>停车公告
                            <span class="color2">收费停车</span>
                        </h5>
                    </div>
                    </a>
                </div>
                    `
                    $('#show_box').append(html);
                }
            },
            error:function(error){
                console.log(error);
            }
        })  
    }else{
        $.ajax({ //jQuery中的ajax方法
            type: "POST",
            url: "shop/queryClassify.action",
            data:{
                classify:oFen
            },
            dataType: "json",//数据类型是json
            success: function (data) {
                $('#show_box').empty();
                console.log(data);
                for(var i=0;i<data.length;i++){
                    let html = 
                    `
                    <div class="food-box col-xs-12 col-sm-12">
                    <a href="main.html?shopId=${data[i].shop_id}">
                    <img alt="Responsive image" class="col-xs-3 col-sm-3 img-responsive" src="${data[i].shop_img}" alt="">
                    <div class="col-xs-9 col-sm-9">
                        <h4>
                            <strong>${data[i].shop_name}</strong>
                            <small>月售 ${data[i].sold}</small>
                        </h4>
                        <h6>人均：
                            <span class="money">￥${data[i].ave_price}</span> | 起送：
                            <span>10元</span> | 配送：
                            <span>1元</span>
                        </h6>
                        <h5>店铺地址
                            <span>${data[i].address}</span>
                        </h5>
                        <h5>综合评价
                            <span class="color5">${data[i].level}分</span>
                        </h5>
                        <h5>配送速度
                            <span class="color2">36分钟</span>
                        </h5>
                        <h5>辣度等级
                            <span class="color6">中辣</span>
                        </h5>
                        <h5>停车公告
                            <span class="color2">收费停车</span>
                        </h5>
                    </div>
                    </a>
                </div>
                    `
                    $('#show_box').append(html);
                }
            },
            error:function(error){
                console.log(error);
            }
        })  
    }
      
})