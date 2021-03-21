<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<% 
//이 페이지가 서버에서 실행된다
//action="Ex08_login.jsp" -> 서버가 가지고 있는 Ex08_login.jsp 페이지를 실행하겠다.

//요청 주소: 192.168.0.54:8090/WebClient/Ex08_login.jsp?txtuserid= ... & txtpwd=...

	String id = request.getParameter("txtuserid");
	String pwd = request.getParameter("txtpwd");

	//그 다음 작업은 마음대로~~
	//DB에 insert, select 하거나 파일처리 하거나 등등..
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	서버에서 확인 후 Client에게 다시 전달하기<br>
	<%=id %> <hr> <!-- %= : 서버의 내용을 client에게 전달하고, write하겠다. -->
	<%=pwd %>
</body>
</html>