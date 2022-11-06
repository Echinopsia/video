import React from 'react'
import ReactPlayer from 'react-player/lazy';

export default function VideoPlayer(props) {
	return (
		<div className="videoplayer">
			<ReactPlayer 
	        	className="react-player" 
				width='100%'
				height="100%"
				url={props.url} 
	          	controls={true} 
          		style={{width: "100%", height: "100%"}}
          	/>		
		</div>
	)
}