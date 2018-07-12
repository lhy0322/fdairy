<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

    <div>
        <strong> ${sessionScope.user.email}!!!!! </strong>
    </div>
    
     添加收货地址<br>
	<form action="${pageContext.request.contextPath }/user/checkAddAdress.action" method="post">
		姓名：<input type="text" name="username" /><br>
		电话：<input type="text" name="tel" /><br>
		地区：<input type="text" name="area" /><br>
		地址：<input type="text" name="aress" /><br>
		<input type="submit" value="提交"><br>
		

    <form action="${pageContext.request.contextPath }/user/outLogin.action">
        <table>
            <tr>
                <td><input type="submit" value="退出登录" ></td>
            </tr>
        </table>
    </form>
</body>
</html>