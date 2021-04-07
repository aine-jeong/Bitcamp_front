<%@page import="net.sf.json.JSONArray"%>
<%@page import="kr.or.bit.dto.Emp"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	Class.forName("oracle.jdbc.OracleDriver");
	Connection conn = null;
	conn = DriverManager.getConnection("jdbc:oracle:thin:@192.168.0.54:1521:xe","bituser","1004");

	Statement stmt = conn.createStatement();
	String sql = "SELECT empno, ename, sal, job, comm FROM emp";
	ResultSet rs = stmt.executeQuery(sql);
	
	//## POINT ##
	//DTO 객체에 데이터 담아야 변환된다

	//결과로 받은 데이터 Arraylist에 담기
	List<Emp> list = new ArrayList<>();
	
	while(rs.next()){
		Emp emp = new Emp();
		emp.setEmpno(rs.getInt("empno"));
		emp.setEname(rs.getString("ename"));
		emp.setSal(rs.getInt("sal"));
		emp.setJob(rs.getString("job"));
		emp.setComm(rs.getInt("comm"));
		
		list.add(emp);
	}
	////////////////////
	
	/* 
	for(Emp e : list) {
		System.out.println(e.toString());
	} 
	*/
	
	//list
	//[{}{}{}{}{}{}{}{}{}{}.... 14개]
	
	//배열안에 들어있는 것을 읽어다가 JSON객체로 만들어준당
	JSONArray jsonlist = JSONArray.fromObject(list);
	
	/*
	[{"comm":0,"empno":7369,"ename":"SMITH","job":"CLERK","sal":800},
	 {"comm":300,"empno":7499,"ename":"ALLEN","job":"SALESMAN","sal":1600},
	 {"comm":200,"empno":7521,"ename":"WARD","job":"SALESMAN","sal":1250},
	 {"comm":30,"empno":7566,"ename":"JONES","job":"MANAGER","sal":2975},
	 {"comm":300,"empno":7654,"ename":"MARTIN","job":"SALESMAN","sal":1250},
	 {"comm":0,"empno":7698,"ename":"BLAKE","job":"MANAGER","sal":2850},
	 {"comm":0,"empno":7782,"ename":"CLARK","job":"MANAGER","sal":2450},
	 {"comm":0,"empno":7788,"ename":"SCOTT","job":"ANALYST","sal":3000},
	 {"comm":3500,"empno":7839,"ename":"KING","job":"PRESIDENT","sal":5000},
	 {"comm":0,"empno":7844,"ename":"TURNER","job":"SALESMAN","sal":1500},
	 {"comm":0,"empno":7876,"ename":"ADAMS","job":"CLERK","sal":1100},
	 {"comm":0,"empno":7900,"ename":"JAMES","job":"CLERK","sal":950},
	 {"comm":0,"empno":7902,"ename":"FORD","job":"ANALYST","sal":3000},
	 {"comm":0,"empno":7934,"ename":"MILLER","job":"CLERK","sal":1300}]
	*/
	
	
	stmt.close();
	rs.close();
	conn.close();
	
%>

<%= jsonlist %>