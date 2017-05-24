


var React = require('react')
var ReactDOM = require('react-dom')
import {Router,Route,IndexLink ,IndexRoute,hashHistory} from "react-router";

var Home = require('./home.js')
var Detail = require('./detail.js')
var First = require('./first.js')
var Register = require('./register.js')
var Login = require('./login.js')
var Health = require('./health.js')
var Star = require('./star.js')
var Hot = require('./hot.js')
var Caidan = require('./caidan.js')
var Tuijian = require('./tuijian.js')
var Zuire = require('./zuire.js')
var Zhuan = require('./zhuanti.js')

var Zeng = require('./liu_health.js')

var Component = React.createClass({
		render:function(){
		
			return (
				<div className='homz_box'>
					{this.props.children}
				</div>
			)
		},
		componentDidMount:function () {
			var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    
			    pagination: '.swiper-pagination',
			    autoplay:1500,
			    autoplayDisableOnInteraction:false,
			    speed:1000
  			});
  			
			var myScroll = new IScroll('.homz_Is',{
				click: true
			});
			
			setTimeout(function () {myScroll.refresh();}, 0);
 			$('.homz_Is').on("touchend",function () {
			if (myScroll.y>30) {
				alert("加载更多")
			}else if (myScroll.y<myScroll.maxScrollY-30) {
				alert("上拉刷新")
			}
			})
 		
		}
})

ReactDOM.render(<Router>
	<Route path="/" component={Component}>
		<IndexRoute component={Home}/>
		<Route path="/detail/:id" component={Detail}></Route>
		<Route path="/first" component={First}></Route>
		<Route path="/Register" component={Register}></Route>
		<Route path="/Login" component={Login}></Route>
		<Route path="/home" component={Home}></Route>
		<Route path="/health" component={Zeng}></Route>
		<Route path="/caidan" component={Caidan}>
			<IndexRoute component={Tuijian} />
			<Route path='/tuijian' component={Tuijian}></Route>
			<Route path='/zuire' component={Zuire}></Route>
		</Route>
		<Route path="/zhuan" component={Zhuan}></Route>
		<Route path="/star" component={Star}></Route>
		<Route path="/hot" component={Hot}></Route>

	</Route>
	
</Router>,document.getElementById("out"))
