package net.peteshand.swfAssetsToStarling;

import com.imagination.texturePacker.api.convert.starling.IStarlingPackage;
import com.imagination.texturePacker.impl.convert.starling.StarlingConverter;
import openfl.events.MouseEvent;
import starling.core.Starling;
import starling.display.Sprite;
import starling.display.Sprite3D;
import starling.events.Event;

/**
 * ...
 * @author P.J.Shand
 */
class StarlingRoot extends Sprite
{
	var starlingPackage:IStarlingPackage;
	var container:Sprite3D;

	public function new() 
	{
		super();
		
		addEventListener(Event.ADDED_TO_STAGE, OnAdd);
	}
	
	private function OnAdd(e:Event):Void 
	{
		removeEventListener(Event.ADDED_TO_STAGE, OnAdd);
		
		container = new Sprite3D();
		container.x = stage.stageWidth / 2;
		container.y = stage.stageHeight / 2;
		addChild(container);
		
		var clip = new Mc_Assets();
		
		starlingPackage = StarlingConverter.parse(clip);
		container.addChild(starlingPackage.container);
		
		Starling.current.nativeStage.addEventListener(MouseEvent.MOUSE_MOVE, OnMouseMove);
	}
	
	private function OnMouseMove(e:MouseEvent):Void 
	{
		container.rotationY = ((Starling.current.nativeStage.mouseX / stage.stageWidth) - 0.5) * Math.PI * -0.5;
		container.rotationX = ((Starling.current.nativeStage.mouseY / stage.stageHeight) - 0.5) * Math.PI * 0.5;
	}
}