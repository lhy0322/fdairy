$(function () {

    var userEmail = sessionStorage.getItem("email");
    console.log(userEmail);
    var shopbox1 = function (url, place) {
        $.ajax({ //jQuery中的ajax方法
            type: "POST",
            url: url,
            dataType: "json",//数据类型是json
            success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。

                console.log(data);
                if (data != '') {
                    for (var i = 0; i < data.length; i++) {
                        let html =
                            `
                    <div class="col-xs-6 col-sm-3 box">
                    <div class="new-box">
                        <a href="main.html?shopId=${data[i].shop_id}">
                            <img src="${data[i].shop_img}" class="img-responsive images" alt="Responsive image">
                            <h5>${data[i].shop_name}</h5>
                            <small>新店开张，送代金券哦</small>
                            <div class="la">
                                <span>辣味等级</span>
                                <img src="images/la.png" class="img-responsive">
                            </div>
                            <div class="shop">
                                <strong class="color2 money">￥${data[i].ave_price}</strong>
                                <small>已售 
                                    <span> ${data[i].sold}</span>
                                </small>
                            </div>
                        </a>
                    </div>
                </div>
                    `
                        $(place).append(html)
                    }

                }
                var $container = $('#shopBox1');
                $container.imagesLoaded(function() {
                    $container.masonry({
                            itemSelector: '.box',
                            gutter: 0,
                            isAnimated: true,
                        });
                 });
            },
            error: function (jqXHR) {//失败后执行的方法。
                console.log(jqXHR)
            },
        })
    }
    var shopbox2 = function (url, place) {
        $.ajax({ //jQuery中的ajax方法
            type: "POST",
            url: url,
            dataType: "json",//数据类型是json
            success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。

                console.log(data);
                if (data != '') {
                    for (var i = 0; i < data.length; i++) {
                        let html =
                            `

                    <div class="col-xs-6 col-sm-3">
                    <div class="new-box">
                    <a href="main.html?shopId=${data[i].shop_id}">
                        <img src="${data[i].shop_img}" class="img-responsive" alt="Responsive image">
                        <h5>${data[i].shop_name}</h5>
                        <h6>新店开张，送代金券哦</h6>
                        <h6>配送时间
                            <span> ${data[i].s_time}分钟</span>
                        </h6>
                        <div class="shop">
                            <strong class="color2 money">￥${data[i].ave_price}</strong>
                            <small>已售
                                <span> ${data[i].sold}</span>
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

    var shopbox2 = function (url, place) {
        $.ajax({ //jQuery中的ajax方法
            type: "POST",
            url: url,
            dataType: "json",//数据类型是json
            success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。

                console.log(data);
                if (data != '') {
                    for (var i = 0; i < data.length; i++) {
                        let html =
                            `

                    <div class="col-xs-6 col-sm-3">
                    <div class="new-box">
                    <a href="main.html?shopId=${data[i].shop_id}">
                        <img src="${data[i].shop_img}" class="img-responsive" alt="Responsive image">
                        <h5>${data[i].shop_name}</h5>
                        <h6>新店开张，送代金券哦</h6>
                        <h6>配送时间
                            <span> ${data[i].s_time}分钟</span>
                        </h6>
                        <div class="shop">
                            <strong class="color2 money">￥${data[i].ave_price}</strong>
                            <small>已售
                                <span> ${data[i].sold}</span>
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

    var shopbox3 = function (url, place) {
        $.ajax({ //jQuery中的ajax方法
            type: "POST",
            url: url,
            dataType: "json",//数据类型是json
            success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。

                console.log(data);
                if (data != '') {
                    for (var i = 0; i < data.length; i++) {
                        let html =
                            `
                    <div class="col-xs-6 col-sm-3">
                    <div class="new-box">
                    <a href="main.html?shopId=${data[i].shop_id}">
                        <img src="${data[i].shop_img}" class="img-responsive" alt="Responsive image">
                        <h5>${data[i].shop_name}</h5>
                        <h6>新店开张，送代金券哦</h6>
                        <h6>综合评价
                            <span> ${data[i].level}分</span>
                        </h6>
                        <div class="shop">
                            <strong class="color2 money">￥${data[i].ave_price}</strong>
                            <small>已售
                                <span> ${data[i].sold}</span>
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

    shopbox1("shop/showShopTimeOne.action", '#shopBox1');
    $("#more1").click(function () {
        shopbox1("shop/showShopTimeTwo.action", '#shopBox1');
        $("#more1").css('display', 'none');
    })

    shopbox2("shop/showShopDistanceOne.action", '#shopBox2');
    $("#more2").click(function () {
        shopbox2("shop/showShopDistanceTwo.action", '#shopBox2');
        $("#more2").css('display', 'none');
    })

    shopbox3("shop/showShopLevelOne.action", '#shopBox3');
    $("#more3").click(function () {
        shopbox3("shop/showShopLevelTwo.action", '#shopBox3');
        $("#more3").css('display', 'none');
    })



})