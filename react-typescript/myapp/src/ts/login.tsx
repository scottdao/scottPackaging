import * as React from "react";
import {Link } from 'react-router-dom';
class Login extends React.Component<{},{}> {
    
  public state = {
		count:1
	};
  public componentDidMount(){
   }
  
  public render(){
// 	let loginQx:number = 1;
// 	console.log(loginQx);
	 return(
		<div>
		登录
		<Link to='./index'>进入首页</Link>
		
		</div>
	 )
 }
}

export default Login;