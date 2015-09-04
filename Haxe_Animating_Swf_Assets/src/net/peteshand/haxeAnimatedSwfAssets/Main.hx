package net.peteshand.haxeAnimatedSwfAssets;

import motion.easing.Quad;
import motion.MotionPath;
import openfl.display.FPS;
import openfl.display.Sprite;
import openfl.display.StageAlign;
import openfl.display.StageScaleMode;
import openfl.Lib;
import motion.Actuate;

/**
 * ...
 * @author P.J.Shand
 */
class Main extends Sprite 
{

	public function new() 
	{
		super();
		
		var clip = new Mc_Assets();
        addChild (clip);
		clip.x = stage.stageWidth / 2;
		clip.y = stage.stageHeight / 2;
		
		Actuate.tween (clip.mc_square, 1, { x: -100, y: 80 } ).ease (Quad.easeInOut).repeat().reflect ();
		Actuate.tween (clip.mc_circle, 0.8, { x: -50, y: -50 } ).ease (Quad.easeInOut).repeat().reflect ();
		Actuate.tween (clip.mc_shape, 0.9, { x: 80, y: -100 } ).ease (Quad.easeInOut).repeat().reflect ();
		
		var fps:FPS = new FPS(10, 10, 0xFFFFFF);
		addChild(fps);
	}
}

