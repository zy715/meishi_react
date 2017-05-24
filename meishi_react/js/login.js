var React =require("react")
import {Router, Route, Link, browserHistory} from 'react-router';

var Login =React.createClass({
	tap:function(){
		var str3 = this.refs.ipt3.value;
		var str4 = this.refs.ipt4.value;
	
		$.ajax({
				type:"post",
				url:"js/login.php",
				data:{"user":str3,"pwd":str4},
				dataType:'json',
				success:function(data){
					if(data!="0") {
                        alert("欢迎："+data+"，登录");
                  		
                    }else{
                        alert("用户名或者密码错误！！！请输入正确的用户名或者密码!!!");
                    }
				}
			})
		},
	render:function(){
		return(
			<div>
				<div id="headL_wrap" style={{"position":"fixed","top":"0"}}>
					<div id="headL">
						<div className="headLeft">
							<img id="back" src="img/h1.png" />
						</div>
						<div className="headCenter">登录</div>
					</div>
				</div>
				<section id="Ls_tc" style={{"marginTop":"0.73rem"}}>
					<input type="text" placeholder="请输入手机号/昵称" className="Lp_tc" ref="ipt3"/>
					<br />
					<input type="text" placeholder="请输入密码" className="Lp2_tc" ref="ipt4"/>
					<br />
					<Link to="/home"><button className="Lp3_tc" onClick={this.tap}>登录</button></Link>
					<br />
					<a href="#" className="La_tc">忘记密码?</a>
				</section>
			</div>
		)
	},
	componentDidMount:function(){
		$('.headLeft').on('tap',function(){
			window.history.go(-1);
		})
	}
})
module.exports = Login;