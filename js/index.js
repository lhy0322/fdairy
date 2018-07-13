
//登录
$(".goin1").click(function(){
    $(".goLogin-bottom").show();
    $(".goLogin").show();
    $(".goregst").hide();
    $(".goregst-bottom").hide();
    $(".goForget").hide();
    $(".ok").hide();
    $("input").val("");
    $("label.error").css("display","none");
});
$(".goin").click(function(){
    $(".goLogin-bottom").show();
    $(".goLogin").show();
    $(".goregst").hide();
    $(".goregst-bottom").hide();
    $(".goForget").hide();
    $(".ok").hide();
    $("input").val("");
    $("input").removeClass("error")
    $("label.error").css("display","none");
});
//注册
$("#goto").click(function(){
    $(".goLogin-bottom").hide();
    $(".goLogin").hide();
    $(".goForget").hide();
    $(".ok").hide();
    $(".goregst").show();
    $(".goregst-bottom").show();
    $("input").val("");
    $("label.error").css("display","none");
});
//找回密码
$("#zhaohui").click(function(){
    $(".goLogin-bottom").hide();
    $(".goLogin").hide();
    $(".goForget").show();
    $(".ok").hide();
    $(".goregst").hide();
    $(".goregst-bottom").hide();
    $("input").val("");
    $("label.error").css("display","none");
});
//确认密码
$("#back").click(function(){

    // $(".goLogin-bottom").show();
    // $(".goLogin").show();
    // $(".goregst").hide();
    // $(".goregst-bottom").hide();
    // $(".goForget").hide();
    // $(".ok").hide();
    // $("input").val("");
    // $("label.error").css("display","none");

    // $(".goLogin-bottom").hide();
    // $(".goLogin").hide();
    // $(".goForget").hide();
    // $(".ok").show();
    // $(".goregst").hide();
    // $(".goregst-bottom").hide();
});
// //确认密码之后去登录
// $("#denglu").click(function(){
//     $(".goLogin-bottom").show();
//     $(".goLogin").show();
//     $(".goregst").hide();
//     $(".goregst-bottom").hide();
//     $(".goForget").hide();
//     $(".ok").hide();
// });
// --------------------------------------------------------------------------------------------
// $(document).ready(function(){
//     $("#loginForm").validate({
//         rules:{
//             email:{
//                 required:true,
//                 email:true
//             },
//             url:"url",
//             comment:"required",
//             valcode: {
//                 formula: "7+9"
//             }
//         }
//     });
// });
$(function(){
    //退出
    $(".ok-exit").click(function(){
        sessionStorage.removeItem("email");
        $('#myModal2').modal('hide')
        $("#name").css("display","none");
        $("#goin1").css("display","block");
    })

    //session
    var userEmail = sessionStorage.getItem("email");
    console.log(userEmail);
    if(userEmail != undefined){
        $("#name-name").html(userEmail);
        $("#name").css("display","block");
        $("#goin1").css("display","none");
    }else{
        console.log("kong")
    }

    // 登录的表单
    $("#loginForm").validate({
        debug: true, //调试模式取消submit的默认提交功能
        //errorClass: "label.error", //默认为错误的样式类为：error
        focusInvalid: false, //当为false时，验证无效时，没有焦点响应
        onkeyup: false,
        submitHandler: function(form){  //表单提交句柄,为一回调函数，带一个参数：form
        	var oEmail = $('[name=email]').val();
            var oPwd = $('[name=pwd]').val();
            console.log(oEmail)
            console.log(oPwd)   
            $("#mis").css("display","none");   
            $.ajax({ //jQuery中的ajax方法
                type: "POST",
                url: "user/checkLogin.action",
                data:({
                	email:oEmail,
                    password:oPwd
                }),
                dataType: "json",//数据类型是json
                success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
                    console.log(data);

                    sessionStorage.setItem("email",oEmail);

                    if(data){
                        $("#mis").css("display","none");
                        alert("登陆成功！")
                        $("#name-name").html(oEmail);
                        $('#myModal').modal('hide')

                        $(".ok").hide();
                        $("input").val("");
                        $("label.error").css("display","none");
                        
                        $("#name").css("display","block");
                        $("#goin1").css("display","none");

                        
                    }else {
                        $("#mis").css("display","block");
                    }
                },
                error: function (jqXHR) {//失败后执行的方法。
                    console.log(jqXHR)
                },
            })
              //  alert("提交表单");
              //  form.submit();   //提交表单
        },
        rules:{
            email:{
                required:true,
                email:true
            },
            pwd:{
                required:true,
                rangelength:[6,10]
            }
            // confirm_password:{
            //     equalTo:"#password"
            // }
        },
        messages:{
            email:{
                required:"必填",
                email:"E-Mail格式不正确"
            },
            pwd:{
                required: "不能为空",
                rangelength: "密码最小长度:6, 最大长度:10。"
            }
            // confirm_password:{
            //     equalTo:"两次密码输入不一致"
            // }
        }
        // success: function(label) {
        //     // label.removeClass("error").addClass("valid").text("Ok!")

        // }

    });
    //注册的表单
                    //判断是否被注册 获取验证码
    $("#getYan").click(function(){
        var oRegEmail = $('[name=regEmail]').val();
        $.ajax({ //jQuery中的ajax方法
            type: "POST",
            url: "user/checkEmailCode.action",
            data:({
                email:oRegEmail,
            }),
            dataType: "json",//数据类型是json
            success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
                console.log(data);
                if(!data){
                    $("#hasRegist").css("display","block");
                }else{
                    $("#hasRegist").css("display","none");
                }
            },
            error: function (jqXHR) {//失败后执行的方法。
                console.log(jqXHR)
            },
        })
    })

    $("#registForm").validate({
        debug: true, //调试模式取消submit的默认提交功能
        //errorClass: "label.error", //默认为错误的样式类为：error
        focusInvalid: false, //当为false时，验证无效时，没有焦点响应
        onkeyup: false,
        submitHandler: function(form){   //表单提交句柄,为一回调函数，带一个参数：form
            var oRegEmail = $('[name=regEmail]').val();
            var oRegPwd = $('[name=regPwd]').val();
            var oEmailYan =$('[name=emailYan]').val();
            console.log(oRegEmail);
            console.log(oRegPwd);
            console.log(oEmailYan);
            $.ajax({ //jQuery中的ajax方法
                type: "POST",
                url: "user/checkRegist.action",
                data:({
                	email:oRegEmail,
                    password:oRegPwd,
                    code:oEmailYan
                }),
                dataType: "json",//数据类型是json
                success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
                    console.log(data)
                    if(data){
                        $("#misYan").css("display","none");
                        alert("注册成功！")
                        $(".ok").hide();
                        $("input").val("");
                        $("label.error").css("display","none");
                        
                        $(".goLogin-bottom").show();
                        $(".goLogin").show();
                        $(".goregst").hide();
                        $(".goregst-bottom").hide();
                        $(".goForget").hide();
                        $(".ok").hide();
                        $("input").val("");
                        $("input").removeClass("error")
                        $("label.error").css("display","none");

                    }else {
                        $("#misYan").css("display","block");
                    }
                },
                error: function (jqXHR) {//失败后执行的方法。
                    console.log(jqXHR)
                },
            })
        },
        rules:{
            regEmail:{
                required:true,
                email:true
            },
            regPwd:{
                required:true,
                rangelength:[6,10]
            },
            emailYan:{
                required:true
            }
        },
        messages:{
            regEmail:{
                required:"必填",
                email:"E-Mail格式不正确"
            },
            regPwd:{
                required: "不能为空",
                rangelength: "密码最小长度:6, 最大长度:10。"
            },
            emailYan:{
                required:"必填"
            }
        },

    });
    //找回密码

    $("#forgetYan").click(function(){
        var oForgetEmail = $('[name=forgetEmail]').val();
        $.ajax({ //jQuery中的ajax方法
            type: "POST",
            url: "user/checkRebackCode.action",
            data:({
                email:oForgetEmail,
            }),
            dataType: "json",//数据类型是json
            success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
                console.log(data);
                if(!data){
                    $("#forgetRegist").css("display","block");
                }else{
                    $("#forgetRegist").css("display","none");
                }
            },
            error: function (jqXHR) {//失败后执行的方法。
                console.log(jqXHR)
            },
        })
    })

    $("#forgetForm").validate({
        debug: true, //调试模式取消submit的默认提交功能
        //errorClass: "label.error", //默认为错误的样式类为：error
        focusInvalid: false, //当为false时，验证无效时，没有焦点响应
        onkeyup: false,
        submitHandler: function(form){   //表单提交句柄,为一回调函数，带一个参数：form
            var oForgetEmail = $('[name=forgetEmail]').val();
            var oForgetpwd = $('[name=forgetpwd]').val();
            var oForgetYan =$('[name=forgetYan]').val();
            console.log(oForgetEmail);
            console.log(oForgetpwd);
            console.log(oForgetYan);
            $.ajax({ //jQuery中的ajax方法
                type: "POST",
                url: "user/checkReback.action",
                data:({
                	email:oForgetEmail,
                    newPassword:oForgetpwd,
                    code:oForgetYan
                }),
                dataType: "json",//数据类型是json
                success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
                    console.log(data)
                    if(data){
                        $("#cuowuYan").css("display","none");
                        alert("修改成功！")
                        $(".ok").hide();
                        $("input").val("");
                        $("label.error").css("display","none");
                        
                        $(".goLogin-bottom").show();
                        $(".goLogin").show();
                        $(".goregst").hide();
                        $(".goregst-bottom").hide();
                        $(".goForget").hide();
                        $(".ok").hide();
                        $("input").val("");
                        $("input").removeClass("error")
                        $("label.error").css("display","none");

                    }else {
                        $("#cuowuYan").css("display","block");
                    }
                },
                error: function (jqXHR) {//失败后执行的方法。
                    console.log(jqXHR)
                },
            })
            // alert("提交表单");
            // form.submit();   //提交表单
        },
        rules:{
            forgetEmail:{
                required:true,
                email:true
            },
            forgetpwd:{
                required:true,
                rangelength:[6,10]
            },
            confirm_pwd:{
                equalTo:"#forgetpwd"
            },
            forgetYan:{
                required:true,
            }

        },
        messages:{
            forgetEmail:{
                required:"必填",
                email:"E-Mail格式不正确"
            },
            forgetpwd:{
                required: "不能为空",
                rangelength: "密码最小长度:6, 最大长度:10。"
            },
            confirm_pwd:{
                equalTo:"两次密码输入不一致"
            },
            forgetYan:{
                required:"必填"
            },

        },
        // success: function(label) {
        //     // label.removeClass("error").addClass("valid").text("Ok!")

        // }

    });
    //重置密码
    // $("#reForm").validate({
    //     debug: true, //调试模式取消submit的默认提交功能
    //     //errorClass: "label.error", //默认为错误的样式类为：error
    //     focusInvalid: false, //当为false时，验证无效时，没有焦点响应
    //     onkeyup: false,
    //     submitHandler: function(form){   //表单提交句柄,为一回调函数，带一个参数：form
    //         alert("提交表单");
    //         form.submit();   //提交表单
    //     },
    //     rules:{
    //         repwd:{
    //             required:true,
    //             rangelength:[6,10]
    //         },
    //         confirm_password:{
    //             equalTo:"#repwd"
    //         }
    //     },
    //     messages:{
    //         repwd:{
    //             required: "不能为空",
    //             rangelength: "密码最小长度:6, 最大长度:10。"
    //         },
    //         confirm_password:{
    //             equalTo:"两次密码输入不一致"
    //         }
    //     },
    //     success: function(label) {
    //         // label.removeClass("error").addClass("valid").text("Ok!")

    //     }

    // });

});