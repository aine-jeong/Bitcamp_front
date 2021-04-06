<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	int no = Integer.parseInt(request.getParameter("no"));
	
	String strEx="";
	String[][] strArray = {
							{"컴퓨터","노트북","테블릿"},
							{"java" , "jquery" , "oracle"},
							{"AA" , "BB" , "CC"},
	                      };
	for(int i = 0 ; i < strArray.length;i++){
		if(i < strArray.length -1){
			strEx += strArray[no][i] + ",";
		}else{
			strEx += strArray[no][i];
		}
	}
%>
<%=strEx%>
<!-- 주석입니다 -->
<!-- preview와 Response의 차이 -->
<!-- 클라이언트에게 주석도 문자열로 해석될 수도 있음 (클라이언트가 주석을 읽을수도 있당!) -->
