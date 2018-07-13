$(function(){
    var userEmail = sessionStorage.getItem("email");
    console.log(userEmail);

    $.ajax({ //jQuery中的ajax方法
        type: "POST",
        url: "user/viewAdress.action",
        data:({
            email:userEmail
        }),
        dataType: "json",//数据类型是json
        success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
            console.log(data);
            if(data != ''){
                for(var i=0;i<data.length;i++){
                    let html=
                    `
                    <label class="col-sm-11">
                        <input type="checkbox">
                        <div class="addre col-sm-12">
                            <p class="col-sm-12"><em>[默认地址]</em><span class="addName">小煜幂</span> <span class="addPhone">15889230098</span></p>
                            <p class="addAdd col-sm-9">湖南省湖南农业大学第十教学楼菜鸟驿站收</p>
                            <div class="col-sm-offset-10 col-sm-2">
                                <button type="submit" class="person-delete btn btn-default btn-block">删除</button>
                            </div>
                        </div>
                    </label>
                    `
                    $('#big-checkbox').prepend(html);
                }
            }else{
                console.log("aaaa")
                $('#big-checkbox').empty()
            }

        },
        error: function (jqXHR) {//失败后执行的方法。
            console.log(jqXHR)
        },
    })

     // 地址的表单
     $("#addressFrom").validate({
        debug: true, //调试模式取消submit的默认提交功能
        //errorClass: "label.error", //默认为错误的样式类为：error
        focusInvalid: false, //当为false时，验证无效时，没有焦点响应
        onkeyup: false,
        submitHandler: function(form){  //表单提交句柄,为一回调函数，带一个参数：form
        	var oName = $('[name=name]').val();
            // var oPlace = $('[name=place]').val();
            var oPhone = $('[name=phone]').val();
            var oAddress = $('[name=address]').val();
            console.log(oName)
            console.log(oPhone)
            console.log(oAddress)
            $.ajax({ //jQuery中的ajax方法
                type: "POST",
                url: "user/checkLogin.action",
                data:({
                    email:userEmail,
                    username:oName,
                    tel:oPhone,
                    address:oAddress
                }),
                dataType: "json",//数据类型是json
                success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
                    console.log(data);
                    if(data){
                        let html=
                        `
                        <label class="col-sm-11">
                            <input type="checkbox">
                            <div class="addre col-sm-12">
                                <p class="col-sm-12"><em>[默认地址]</em><span class="addName">${oName}</span> <span class="addPhone">${oPhone}</span></p>
                                <p class="addAdd col-sm-9">${oAddress}</p>
                                <div class="col-sm-offset-10 col-sm-2">
                                    <button type="submit" class="person-delete btn btn-default btn-block">删除</button>
                                </div>
                            </div>
                        </label>
                        `
                        $('#big-checkbox').prepend(html);

                        $("input").val("");
                        $("label.error").css("display","none");
                    }
                },
                error: function (jqXHR) {//失败后执行的方法。
                    console.log(jqXHR)
                },
            })
        },
        rules:{
            name:{
                required:true,
            },
            place:{
                required:true,
            },
            phone:{
                required:true,
            },
            address:{
                required:true,
            }
            
        },
        messages:{
            place:{
                required:"必填",
            },
            phone:{
                required:"必填",
            },
            address:{
                required:"必填",
            },
            name:{
                required:"必填",
            }
        }

    });
})