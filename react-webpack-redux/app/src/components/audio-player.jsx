import React, {Component} from 'react';
import Slider from './slider';
class AudioPlayer extends Component{
	constructor(props) {
	    super(props);
	    this.state={

	    }
	}
	render(){
	 let {refAudio, srcAudio} = this.props;
		return(<div>

				<audio 
				onTimeUpdate={() => {}} 
				onCanPlay={() => {
					console.log(222)
				}} 
				ref={(ref) => {
					if(ref)ref.src = ''
				}}
              	src={srcAudio} 
              	controls
              	onLoadedMetadata={() => {
              			console.log(111);
              	}}
              	/>
              	<div >播放</div>
              	<div>
	              	<div>
		              	<span>00:10</span>
		              	<Slider />
		              	<span>12:00</span>
	              	</div>
	              	<div>
	              		<span>图标</span>
	              		<span>音频进度条</span>
	              	</div>
              	</div>
            </div>);
	}
}

export default  AudioPlayer;

//module.exprots = AudioPlayer;