import React from 'react'

var Zhuan = React.createClass({
	render: function() {
		var str=[]
		for(var i=0;i<this.state.res.length;i++){
			str.push(<dl>
						<dt><img src={this.state.res1[i]}/></dt>
						<dd>{this.state.res[i]}</dd>
					</dl>)

		}
		
		
		
		
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
				
				
				
				<div id="ZhuanCon">
					{str}
				</div>
				
				
				
			</div>
		)
	},
	componentDidMount:function(){
		$('#back').on('tap',function(){
			window.history.go(-1)
		})
	},
	getInitialState:function(){
		return{
			res:'',
			res1:''
		}
	},
	componentWillMount:function(){
		var _this=this
		$.ajax({
			url:"js/special.json",
			type:"get",
			dataType:"json",
			success:function(data){

				var arr=[]
				var arr1=[]
				for (var i in data){
					arr.push(data[i].title)
					arr1.push(data[i].imgsrc)
					_this.setState({res:arr,res1:arr1})
				}
				
			}	
		});
	}
})
module.exports = Zhuan;