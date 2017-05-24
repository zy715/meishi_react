import React from 'react'

import {Router,Route,IndexLink ,IndexRoute,hashHistory,Link} from "react-router";

var Dt = React.createClass({
	render: function() {
		return(
			<footer style={{"position":"fixed","bottom":"0","width":"100vw"}}>
					
					<div>
						<Link to='/home'  style={{'color':'#000'}}>
							<i className="iconfont icon-caipu"></i>
							<div>菜谱</div>
						</Link>
					</div>
					
					
					<div>
						<Link to='/health'  style={{'color':'red'}}>
							<i className="iconfont icon-1"></i>
							<div>健康</div>
						</Link>
					</div>
					
					
					<div>
						<Link   to='/first' style={{'color':'#000'}}>
							<i className="iconfont icon-wode" ></i>
							<div>我的</div>
						</Link>
					</div>
					
				</footer>

		)
	}
})
module.exports =Dt;