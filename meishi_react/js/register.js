var React =require("react")
import {Router, Route, Link, browserHistory} from 'react-router';

var Register =React.createClass({
	tap:function(){
		var str = this.refs.ipt.value;
		console.log(str)
		var str2 = this.refs.ipt2.value;
		console.log(str2)
		if(/^1[3|4|5|7|8][0-9]{9}$/ig.test(str)){
			if(!/^\s*$/ig.test(str2)){
				$.ajax({
					type:"post",
					url:"js/register.php",
					data:{"account":str,"secret":str2},
					dataType:'json',
					success:function(data){
						alert("注册成功")
					}
				})
			}else{
				alert("密码不能为空")
			}
		}else{
			alert("手机号格式不正确")
		}	
	},
	render:function(){
		return(
			<div>
				<div id="headL_wrap" style={{"position":"fixed","top":"0"}}>
					<div id="headL">
						<div className="headLeft">
							<img id="back" src="img/h1.png" />
						</div>
						<div className="headCenter">注册</div>
					</div>
				</div>
				<section id="content_tc" style={{"marginTop":"0.73rem"}}>
					<p className="p_tc">手机号免费注册,美食天下不会泄露你的手机号</p>
					<input type="text" placeholder="请输入你的手机号" className="ipt1_tc" ref="ipt"/>
					<br />
					<input type="text" placeholder="请输入你的密码" className="ipt2_tc" ref="ipt2"/>
					<br />
					<button className="ipt3_tc" onClick={this.tap}>下一步</button>
					<br />
					<input type="checkbox" checked="checked" className="cb_tc"/>  阅读并同意《美食天下》协议
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
module.exports = Register;