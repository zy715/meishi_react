import React from 'react'



var Recomend = React.createClass({
	getDefaultProps:function(){
			return {
				res:'js/nav.json'
			}
		},
	getInitialState:function(){
		return{
			req:'', 
			res:''
		}
	},
	componentWillMount:function(){
		var _this=this;
		$.ajax({
			type:"get",
			url:this.props.res,
			async:true,
			dataType:'JSON',
			success:function(data){
				var data=JSON.parse(data);
				var str=[];
				var st=[];
								
				for(var key in data){
					str.push(data[key]['title']);
					st.push(data[key]['imgsrc']);
				}
				_this.setState({
					req:str,
					res:st
				})
			}
		});
	},
	render: function() {
		return(
			<div id="conL_wrap" >
				<div id="conL">
					<div className="conLnav" style={{"position":"fixed","top":"0.73rem","width":"100vw"}}>
						<ul>
							<li className="con_hover"><a>推荐</a></li>
							<li><a>常识</a></li>
							<li><a>瘦身</a></li>
							<li><a>母婴</a></li>
						</ul>
					</div>
					<List name={this.state.res} title={this.state.req} />
				</div>
			</div>
		)
	},
	componentDidMount:function(){
		$('conLnav li').on('tap',function(){
			console.log(this.index())
		})
	}
})

var List = React.createClass({
	render:function(){
		var obj=[];
		for(var i=0;i<this.props.name.length;i++){
			obj.push(<dl>
				<dd><p>{this.props.title[i]}</p><span>10分钟前</span></dd>
				<dt><img src={this.props.name[i]}/></dt>
				</dl>)
		}
		obj.sort(function(a,b){ return Math.random()>.5 ? -1 : 1;});
		return(
			<div id="conList_wrap">
						<div className="conList" style={{"marginTop":"1.43rem"}}>
							{obj}	
						</div>
			</div>
		)
	}
})
module.exports =Recomend;