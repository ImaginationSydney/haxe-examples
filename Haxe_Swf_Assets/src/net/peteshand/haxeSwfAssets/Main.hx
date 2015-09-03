package net.peteshand.haxeSwfAssets;

import openfl.display.Sprite;
import openfl.display.StageAlign;
import openfl.display.StageScaleMode;
import openfl.Lib;

/**
 * ...
 * @author P.J.Shand
 */
class Main extends Sprite 
{

	public function new() 
	{
		super();
		
		var clip:Sprite = new Mc_Assets();
        addChild (clip);
		clip.x = stage.stageWidth / 2;
		clip.y = stage.stageHeight / 2;
	}

}
