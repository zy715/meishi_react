
import React from 'react'
import ReactDom from 'react-dom'
import Health from './health.js'
import Recomend from './recomend.js'
import Dt from './dt.js'

class Zeng extends React.Component{
	render(){
		return(
			<div>
				<Health/>
				<Recomend/>
				<Dt/>
			</div>      
		)
	}
	
}

module.exports =Zeng;





