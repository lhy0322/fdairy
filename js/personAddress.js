$(function(){
    var userEmail = sessionStorage.getItem("email");
    console.log(userEmail);

    var addBox = function(){
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
                    $('#big-checkbox').empty();

                    for(var i=0;i<data.length;i++){
                        let html=
                        `
                        <label class="col-sm-11">
                            <input type="checkbox">
                            <div class="addre col-sm-12">
                                <p class="col-sm-12"><em>[默认地址]</em><span class="addName">${data[i].username}</span> <span class="addPhone">${data[i].tel}</span></p>
                                <p class="addAdd col-sm-9">${data[i].aress}</p>
                                <div class="col-sm-offset-10 col-sm-2">
                                    <button type="button" class="person-delete btn btn-default btn-block" data="${data[i].a_id}">删除</button>
                                </div>
                            </div>
                        </label>
                        `
                        $('#big-checkbox').prepend(html);
                    }
                }else{
                    console.log("aaaa");
                    $('#big-checkbox').empty()
                }
                $('.person-delete').each(function(index,itme){
                    $(itme).click(function(){
                        var a_id = $(itme).attr('data');
                        console.log(a_id);
                        $.ajax({ //jQuery中的ajax方法
                            type: "POST",
                            url: "user/checkDelAdress.action",
                            data:({
                                id:a_id
                            }),
                            dataType: "json",//数据类型是json
                            success: function (data) {
                                if(data){
                                    addBox();
                                }
                            },
                            error:function(data){
                                console.log(data)
                            }
                        })
                    })

                })
    
            },
            error: function (jqXHR) {//失败后执行的方法。
                console.log(jqXHR)
            },
        })
    
    }
    addBox();
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
                url: "user/checkAddAdress.action",
                data:({
                    email:userEmail,
                    username:oName,
                    tel:oPhone,
                    aress:oAddress
                }),
                dataType: "json",//数据类型是json
                success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
                    console.log(data);
                    if(data){
                        addBox();

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