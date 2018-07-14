$(function(){
    // $("input[type='radio']:checked").val();
    // console.log($("input[type='radio']:checked").val());
    $("#personForm").validate({
        debug: true, //调试模式取消submit的默认提交功能
        //errorClass: "label.error", //默认为错误的样式类为：error
        focusInvalid: false, //当为false时，验证无效时，没有焦点响应
        onkeyup: false,
        submitHandler: function(form){//表单提交句柄,为一回调函数，带一个参数：form
            var userEmail = sessionStorage.getItem("email");
            console.log(userEmail);  
            var oPic = "";
        	var oNiName = $('[name=niName]').val();
            var oSex = $("input[type='radio']:checked").val();
            var oBirth = $('[name=birth]').val();
            console.log(oNiName)
            console.log(oPic)
            console.log(oSex)
            console.log(oBirth)
            $.ajax({ //jQuery中的ajax方法
                type: "POST",
                url: "user/checkUpdateUser.action",
                data:({
                    oEmail:userEmail,
                    user_name:oNiName,
                    src:oPic,
                    sex:oSex,
                    brith:oBirth
                }),
                dataType: "json",//数据类型是json
                success: function (data) {//如果成功获得了值执行的方法，目的是为了让用户知道执行的操作成功了。
                    console.log(data);
                    if(data){
                        $("input").val("");
                        $(".tijiao").val("提交");
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