$(function(){
    var sousu = $('.search').val()
    console.log(sousu);

    $('#search').click(function(){
        $.ajax({ //jQuery中的ajax方法
            type: "POST",
            url: "shop/queryShopByLike.action",
            data:{
                index:sousu
            },
            dataType: "json",//数据类型是json
            success: function (data) {
                $('#show_box').empty();
                if(data!=null){
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
                }else{
                    $('.no').css('display','block');
                    $('.fenye').css('display','none');                    
                }
            },
            error:function(error){
                console.log(error);
            }
        }) 
    })

})