(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Snowing4_atlas_1", frames: [[0,0,1920,1080]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.naturegf05526dae_1920 = function() {
	this.initialize(ss["Snowing4_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.snow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRARQgHgGAAgLQAAgKAHgHQAHgHAKAAQALAAAGAHQAIAHAAAKQAAALgIAGQgGAIgLAAQgKAAgHgIg");
	this.shape.setTransform(2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snow, new cjs.Rectangle(0,0,5,5), null);


// stage content:
(lib.Snowing4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		let root = this;
		
		const numberOfSnow = 500;
		let speed=3;
		let myRotation=0;
		let ychange=0;
		let xchange=0;
		
		const snows = [];
		const snowsdirection = [];
		//var stageWidth = stage.canvas.width; //1920
		//var stageHeight = stage.canvas.height; //1080
		
		for (i = 0; i < numberOfSnow; i++) {
			var _snow = new lib.snow();
			_snow.x = Math.floor(Math.random()*960);
			_snow.y = Math.floor(Math.random()*540);
			_snow.alpha = Math.random();
			snows.push(_snow);
			snowsdirection.push(Math.round(Math.random()*360));
			root.addChild(_snow);
		}
		
		createjs.Ticker.on("tick",snowsMove);
		function snowsMove() {
			for (let i=0;i<numberOfSnow;i++){
				v = snows[i];
				d = snowsdirection[i];
				if (d<180) d+=(Math.round(Math.random()*30-15));			
				else if (d<270) d+=(Math.round(Math.random()*30-20));
				else d+=(Math.round(Math.random()*30-10));
				if (d<0) d+=360;
				if (d>=360) d-=360;
				snowsdirection[i]=d;
				v.alpha += Math.random()*0.4-0.2;
				if (v.alpha>=1) v.alpha=1;
				if (v.alpha<0) v.alpha=0;
				xchange = (Math.cos((Math.PI/180)*d))*speed;
				ychange = (Math.sin((Math.PI/180)*d))*speed;
				v.x+=xchange;
				v.y+=ychange;		
				if (v.x<0) v.x+=960;
				if (v.x>=960) v.x-=960;
				if (v.y<0) v.y+=540;
				if (v.y>=540) v.y-=540;
			}	
		}
		
		/*
		var speed:Number = 6;
		
		var myRotation:Number = 0;
		var ychange:Number;
		var xchange:Number;
		addEventListener(Event.ENTER_FRAME, fl_moveParticle);
		function fl_moveParticle(evt:Event):void
		{
			myRotation = myRotation + (Math.round(Math.random()*30-15));
			ychange = (Math.cos((Math.PI/180)*myRotation))*speed;
			xchange = (Math.sin((Math.PI/180)*myRotation))*speed;
			if (x<0) { x = 320; }
			if (x>320) { x = 0; }
			if (y<0) { y = 240; }
			if (y>240) { y = 0; }
			y = y-ychange;
			x = x+xchange;
			rotation = myRotation;
		}
		*/
		
		
		
		//this.addChild(snow1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.naturegf05526dae_1920();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480,270,480,270);
// library properties:
lib.properties = {
	id: '57BF2A82D93840178076BA767F8C3343',
	width: 960,
	height: 540,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/Snowing4_atlas_1.png?1670904760538", id:"Snowing4_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['57BF2A82D93840178076BA767F8C3343'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;