
var React = require('react')


var Detail=React.createClass({
	getDefaultProps:function(){
		return{
			url:'js/list.json'
		}
	},
	getInitialState:function(){
		return{
			res:'',
			res1:'',
			res2:'',
			res3:''
		}
	},
	componentWillMount:function(){
		var _this=this
		$.ajax({
			url:_this.props.url,
			type:"get",
			dataType:"json",
			success:function(data){
				var arr=null;
				var arr1="";
				var arr2=null;
				var arr3="";
				
				arr=data[_this.props.params.id].imgsrcgroup
				arr1+=data[_this.props.params.id].imgsrc
				arr2=data[_this.props.params.id].textgroup
				arr3+=data[_this.props.params.id].title
				
				_this.setState({res:arr,res1:arr1,res2:arr2,res3:arr3})
			}	
		});
	},
	render:function(){
		var str=[]
		for(var i=0;i<this.state.res.length;i++){
			str.push(<div className="DetZ_div2"><img className="DetZ_img2" src={this.state.res[i]}/><span className="DetZ_step">{i+1+"、"}{this.state.res2[i]}</span></div>)
		}
		return(
			<div>
				<div id="headL_wrap" style={{"position":"fixed","top":"0"}}>
					<div id="headL">
						<div className="headLeft">
							<img id="back" src="img/h1.png" />
						</div>
						<div className="headCenter">{this.state.res3}</div>
					</div>
				</div>
				
				<div className="DetZ_div"><img className="DetZ_img1" src={this.state.res1}/><h4>{this.state.res3}</h4>
					<p><img src="img/yuan.gif"/>步骤与贴士</p>
					<div className='DetZ_shoucang'><img src="img/shoucang.gif"/>
						<div>收藏</div>
					</div>
					{str}
				</div>
			</div>
		)
	},
	componentDidMount:function(){
		var _this=this
		$('.headLeft').on('tap',function(){
			window.history.go(-1)
		})
		
		$('.DetZ_shoucang').on('tap',function(){
			
			if(localStorage.getItem("goodsid")!=null){
				var arr=localStorage.getItem("goodsid").split(",");
				console.log(arr)
			}else{
				var arr=[];
			}
			
			if (arr.indexOf(_this.props.params.id)==-1) {
				arr.push(_this.props.params.id);
			}

			
			localStorage.setItem("goodsid",arr)
			
			
		})

	}
})

module.exports = Detail;

