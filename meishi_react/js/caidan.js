import React from "react"
import ReactDOM from "react-dom"
import Tuijian from "./tuijian.js"
import Zuire from "./zuire.js"
import {Router,Route,Link,browserHistory, IndexRoute} from "react-router"


var Caidan=React.createClass({
	getInitialState:function(){
		return{
			borderBottom:'1px solid #fff'
		}
	},
	tap:function(){
		this.setState({borderBottom:'1px solid #f00'})
	},
	render:function(){
		return(
			<div>
				<div id="headL_wrap" style={{"position":"fixed","top":"0"}}>
					<div id="headL">
						<div className="headLeft">
							<img id="back" src="img/h1.png" />
						</div>
						<div className="headCenter">健康</div>
						<div className="headRight">
							<img src="img/h2.png"/>
						</div>
					</div>
				</div>
				<div className='CaiZ_tab' style={{'height':'auto','overflow':'hidden','marginTop':'0.73rem'}}>
					<Link onClick={this.tap} style={this.state} className='CaiZ_tab1' to='/tuijian'>推荐</Link>
					<Link className='CaiZ_tab2' to='/zuire'>最热</Link>
					{this.props.children}
				</div>
				<footer style={{'position':'fixed','bottom':'0','width':"100%"}}>
					<div>
						<i className="iconfont icon-caipu" style={{"color":"red"}}></i>
						<div style={{"color":"red"}}>菜谱</div>
					</div>
					<div>
						<Link  to='/health' style={{'color':'#000'}}>
							<i className="iconfont icon-1"></i>
							<div>健康</div>
						</Link>
					</div>
				
					<div>
						<Link to='/first'  className='link' style={{"color":"#000"}}>
							<i className="iconfont icon-wode" ></i>
							<div>我的</div>
						</Link>
					</div>
					
				</footer>
			</div>
		)
	},
	componentDidMount:function(){
		$('#back').on('tap',function(){
			window.history.go(-1)
		})
	}
})
module.exports = Caidan
