<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

    <div>
        <strong> welcome,${sessionScope.user.email}! </strong>
    </div>
    this is success page!
    
       修改密码<br>
	<form action="${pageContext.request.contextPath }/user/checkModifyPassword.action" method="post">
		密码：<input type="password" name="password" /><br>
		新密码：<input type="password" name="newPassword" /><br>
		<input type="submit" value="提交"><br>
	</form><hr>	
	
	
		修改个人信息<br>
	<form action="${pageContext.request.contextPath }/user/checkUpdateUser.action" method="post">
		昵称：<input type="text" name="user_name" /><br>
		性别：<input type="text" name="sex" /><br>
		生日：<input type="text" name="brith" /><br>
		图片：<input type="text" name="src" /><br>
		<input type="submit" value="提交"><br>
	</form><hr>	

    <a href="${pageContext.request.contextPath }/user/anotherpage.action">点我跳到另一个页面</a>

    <form action="${pageContext.request.contextPath }/user/outLogin.action">
        <table>
            <tr>
                <td><input type="submit" value="退出登录"></td>
            </tr>
        </table>
    </form>
</body>
</html>