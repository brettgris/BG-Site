import React,{Component} from 'react';
import gsap from 'gsap';
import $ from 'jquery';

class MarqueeIcon extends Component{
	constructor(props){
		super(props);

		this.tl = {};
		this.items = {};
		this.to = null;

		this.state = {
			animate: false
		}

		this.inAnimate = this.inAnimate.bind(this);
		this.outAnimate = this.outAnimate.bind(this);
	}

	componentDidMount(){
		CSSPlugin.defaultTransformPerspective = 500;
		this.items = $('.first span, .last span');
		this.tl = new TimelineLite();

		TweenLite.to ( $('.marqueecopy'), .01, { scaleX: .9, scaleY:.9 } );
		this.items.each(function(){
			TweenLite.to( $(this), .01, { top: (Math.random()*1000)-500, left: (Math.random()*1000)-500, opacity: 0, rotationY:(Math.random()*360)-180, rotationX:(Math.random()*360)-180, rotationZ:(Math.random()*360)-180 } );
		})
		this.to = setTimeout(this.inAnimate, 1000);
	}


	inAnimate(){
		this.tl = new TimelineLite();
		this.tl.staggerTo( this.items, .75, {top:0,left:0,opacity:1, rotationY:0, rotationX:0, rotationZ:0, ease: Power1.easeOut}, .1);
		this.tl.to ( $('.marqueecopy'), .5, { scaleX: 1, scaleY: 1, delay: .5, ease: Power1.easeOut } );
		this.tl.call( function(){
			$('#firstname').html("BRETT");
			$('#lastname').html("GRISINGER");
		}.bind(this) );
	}

	outAnimate(){
		this.tl = new TimelineLite();
		this.tl.call();

		this.tl.to ( $('.marqueecopy'), .5, { scaleX: .9, scaleY: .9, delay: (Math.random()*5)+10, className:"-=superShadow", ease: Power1.easeIn } );
		var items = this.items;
		this.tl.call(function(){
			items.each(function(i){
				TweenLite.to( $(this), .75, { top: (Math.random()*1000)-500, left: (Math.random()*1000)-500, opacity: 0, rotationY:(Math.random()*360)-180, rotationX:(Math.random()*360)-180, rotationZ:(Math.random()*360)-180,  delay: i*.1, ease: Power1.easeIn} );
			})
		})
	}

	componentWillUnmount(){
		clearTimeout(this.to);
	}

	render(){
		var animate = (this.state.animate) ? " animate" : "";

		return (
			<div className="header">
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2">
						<h1 className={"marqueecopy center hidden-xs"+animate}>
							<div id="firstname" className="first">
								<span>B</span>
								<span>R</span>
								<span>E</span>
								<span>T</span>
								<span>T</span>
							</div>
							<div id="lastname" className="last">
								<span>G</span>
								<span>R</span>
								<span>I</span>
								<span>S</span>
								<span>I</span>
								<span>N</span>
								<span>G</span>
								<span>E</span>
								<span>R</span>
							</div>
						</h1>
					</div>
				</div>
			</div>
		);
	}
};

export default MarqueeIcon;
