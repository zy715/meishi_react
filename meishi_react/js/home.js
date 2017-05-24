var React = require('react')
var List = require('./list')

import {Router,Route,IndexLink ,IndexRoute,hashHistory,Link} from "react-router";


var Home = React.createClass({
		render:function () {
			return(
			<div className='homz_root'>
				<div className='homz_head'>
					美食天下
				</div>
				<div className='homz_Is'>
					<div>
						<div className='homz_search'>
							<div className='homz_swrap'>
								<input type="text" name="" className='homz_ipt1' placeholder="搜索食材、菜谱"/>
								<input type="submit" name="" id="" value="搜索"/>
							</div>
						</div>
						<div className="swiper-container">
						    <div className="swiper-wrapper">
						        <div className="swiper-slide"><img src="img/home2.jpg"/></div>
							    <div className="swiper-slide"><img src="img/home3.jpg"/></div>
							    <div className="swiper-slide"><img src="img/home4.jpg"/></div>
							    <div className="swiper-slide"><img src="img/home5.jpg"/></div>
						    </div>
						    <div className="swiper-pagination"></div>
						    
						</div>
						<div className="homz_list">
							<div><Link to='/caidan'><img src="img/home6.png"/><p>专题</p></Link></div>
							<div><Link to='/zhuan'><img src="img/home7.png"/><p>菜单</p></Link></div>
							<div><Link to='/star'><img src="img/home8.png"/><p>明星菜谱</p></Link></div>
							<div><Link to='/hot'><img src="img/home9.png"/><p>一周热门</p></Link></div>
						</div>
						<section>
							<List/>
						</section>
					</div>
				</div>
				<footer>
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
			var myScroll = new IScroll('.homz_Is',{
				click: true
			});
			
			setTimeout(function () {myScroll.refresh();}, 0);
		}
		
	})

module.exports = Home;