import React from "react"

var Zuire=React.createClass({
	getDefaultProps:function(){
		return{
			url:'js/nav.json'
		}
	},
	getInitialState:function(){
		return{
			res:'',
			res1:'',
			res2:''
		}
	},
	componentWillMount:function(){
		var _this=this
		$.ajax({
			url:_this.props.url,
			type:"get",
			dataType:"json",
			success:function(data){

				var arr=[]
				var arr1=[]
				var arr2=[]
				for (var i in data){

					arr.push(data[i].title)
					arr1.push(data[i].imgsrc)
					arr2.push(data[i].con)
					_this.setState({res:arr,res1:arr1,res2:arr2})
				}
				
			}	
		});
	},
	render:function(){
		var str=[]
		for(var i=0;i<this.state.res.length;i++){
			str.push(<div className='TuiZ_box'>
					<div className="TuiZ_div">
						<img className='TuiZ_img' src={this.state.res1[i]}/>
						<div className='TuiZ_div2'>
							<h4>{this.state.res[i]}</h4>
							<p>{this.state.res2[i]}</p>
						</div>
					</div>
				</div>)

		}
		str.sort(function(a,b){ return Math.random()>.5 ? -1 : 1;});

		return(
			<div style={{'margin-top':'1rem'}}>
				{str}
			</div>
		)
	}
})
module.exports = Zuire;
