var React =require("react")
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
var First =React.createClass({
	getDefaultProps:function(){
		return{
			url:'js/list.json'
		}
	},
	getInitialState:function(){
		return{
			res:'',
			res1:'',
			res3:'1'
		}
	},
	
	componentWillMount:function(){
		var _this=this
		var arr=[];
		var arr1=[];
		$.ajax({
			url:_this.props.url,
			type:"get",
			dataType:"json",
			success:function(data){
				
				var arr2=localStorage.getItem("goodsid").split(",");
				for (var i=0;i<arr2.length;i++){
					arr.push(data[arr2[i]].title)
					arr1.push(data[arr2[i]].imgsrc)
//					
				}
				_this.setState({res:arr,res1:arr1})
				
			}	
		});
		
		
		
	},
	render:function(){
		var str=[]
//		console.log(this.state.res3);
		for(var i=0;i<this.state.res.length;i++){
			str.push(<div className="DetZ_div2"><img className="DetZ_img2" src={this.state.res1[i]}/><span className="DetZ_step">{i+1+"、"}{this.state.res[i]}</span></div>)
		}
		return(
			
			<div>
				<div>
					<header id="Fh_tc">我的</header>
					<section id="Fs_tc">
						<span className="fsp_tc"><img src="img/timg.jpg" style={{"width": "1rem","height": "1rem","borderRadius": "50%"}} /></span>
						<button className="fb_tc"><Link to="/register" className="fl_tc">注册</Link></button>
						<button className="fb2_tc"><Link to="/login" className="fl_tc">登录</Link></button>
					</section>
					
						{str}
					
					
					<footer className="fixfooter_lp">
						
						<div>
							<Link to='/home'  style={{'color':'#000'}}>
								<i className="iconfont icon-caipu"></i>
								<div>菜谱</div>
							</Link>
						</div>
						
						
						<div>
							<Link  to='/health' style={{'color':'#000'}}>
								<i className="iconfont icon-1"></i>
								<div>健康</div>
							</Link>
						</div>
						
						
						<div>
								
								<i className="iconfont icon-wode" style={{'color':'red'}}></i>
								<div style={{'color':'red'}}>我的</div>
							
						</div>
						
					</footer>
				</div>
			</div>)
	}
})
module.exports = First;