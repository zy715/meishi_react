import React from 'react'

var Health = React.createClass({
	render: function() {
		return(
				<div id="headL_wrap" style={{"position":"fixed","top":"0"}}>
					<div id="headL">
						<div className="headLeft">
							<img id="back" src="img/h1.png" />
						</div>
						<div className="headCenter">健康</div>
					</div>
				</div>
		)
	},
	componentDidMount:function(){
		$('#back').on('tap',function(){
			window.history.go(-1)
		})
	}
})
module.exports =Health;