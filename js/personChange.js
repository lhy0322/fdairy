$(function(){
    // //退出
    // $(".ok-exit").click(function(){
    //     sessionStorage.removeItem("email");
    //     $('#myModal2').modal('hide')
    //     $("#name").css("display","none");
    //     $("#goin1").css("display","block");
    // })

    //session
    var userEmail = sessionStorage.getItem("email");
    console.log(userEmail);
    // if(userEmail != undefined){
    //     $("#name-name").html(userEmail);
    //     $("#name").css("display","block");
    //     $("#goin1").css("display","none");
    //     $(".personal p").html(userEmail+"的小厨房");
    // }else{
    //     console.log("kong")
    // }
    $("#personPwd").validate({
        debug: true, //调试模式取消submit的默认提交功能
        //errorClass: "label.error", //默认为错误的样式类为：error
        focusInvalid: false, //当为false时，验证无效时，没有焦点响应
        onkeyup: false,
        submitHandler: function(form){   //表单提交句柄,为一回调函数，带一个参数：form
            var oOldPwd = $('[name=oldPwd]').val();
            var oNewPwd = $('[name=newPwd]').val();
            console.log(oOldPwd);
            console.log(oNewPwd);
            $.ajax({ //jQuery中的ajax方法
                type: "POST",
                url: "user/checkModifyPassword.action",
                data:({
                	email:userEmail,
                    oldPassword:oOldPwd,
                    newPassword:oNewPwd
                }),
                dataType: "json",//数据类型是json
                success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
                    console.log(data)
                    if(data){
                        alert("修改成功！")
                        $("#mis").css("display","none");
                        $("input").val("");
                        $("input").removeClass("error")
                        $("label.error").css("display","none");

                    }else {
                        $("#mis").css("display","block");
                    }
                },
                error: function (jqXHR) {//失败后执行的方法。
                    console.log(jqXHR)
                },
            })
        },
        rules:{
            oldPwd:{
                required:true,
            },
            newPwd:{
                required:true,
                rangelength:[6,10]
            },
            yesPwd:{
                equalTo:"#newPwd"
            }

        },
        messages:{
            oldPwd:{
                required:"必填",
            },
            newPwd:{
                required: "不能为空",
                rangelength: "密码最小长度:6, 最大长度:10。"
            },
            yesPwd:{
                equalTo:"两次密码输入不一致"
            }

        },
    });


})