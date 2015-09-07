package net.peteshand.swfAssetsToAway3D;

import away3d.containers.View3D;
import away3d.core.base.Geometry;
import away3d.entities.Mesh;
import com.imagination.texturePacker.api.convert.away3D.IAway3DPackage;
import com.imagination.texturePacker.impl.convert.away3D.Away3DConverter;
import com.imagination.texturePacker.impl.TexturePacker;
import motion.Actuate;
import motion.easing.Quad;
import openfl.display.Sprite;
import openfl.events.Event;
import openfl.events.MouseEvent;
import openfl.geom.Matrix3D;
import openfl.geom.Vector3D;

/**
 * ...
 * @author P.J.Shand
 */
class Main extends Sprite 
{
	private var _view:View3D;
	private var placement:Float = 0;
	var inactive:Sprite;
	var away3DPackage:IAway3DPackage;
	
	public function new() 
	{
		super();
		
		var clip:Sprite = new Mc_Assets();
        
		TexturePacker.TARGET_TEXTURE_SIZE.setTo(1024, 512);
		
		_view = new View3D();
		this.addChild(_view);
		#if flash
			_view.antiAlias = 4;
		#else
			_view.antiAlias = 0;
		#end
		//setup the camera
		_view.camera.z = -600;
		_view.camera.lookAt(new Vector3D());
		
		away3DPackage = Away3DConverter.parse(clip);
		_view.scene.addChild(away3DPackage.container);
		
		var bg:Mesh = away3DPackage.meshByName("mc_bg");
		bg.z += 20;
		adjustMeshAnchor(bg, 500);
		
		UpdatePositionZ();
		
		stage.addEventListener(MouseEvent.MOUSE_MOVE, OnMouseMove);
		stage.addEventListener(MouseEvent.CLICK, OnMouseClick);
		stage.addEventListener(Event.MOUSE_LEAVE, OnMouseLeave);
		
		addEventListener(Event.ENTER_FRAME, NextFrame);
		_view.render();
		
		inactive = new Sprite();
		inactive.graphics.beginFill(0x000000);
		inactive.graphics.drawRect(0, 0, stage.stageWidth, stage.stageHeight);
		addChild(inactive);
		inactive.alpha = 0.7;
	}
	
	private function OnMouseClick(e:MouseEvent):Void 
	{
		UpdatePositionZ();
	}
	
	function UpdatePositionZ() 
	{
		for (i in 1...21) 
		{
			var item:Mesh = away3DPackage.meshByName("mc_item" + i);
			Actuate.tween(item, 0.5, { z: -250 * Math.random() } ).ease(Quad.easeInOut);
		}
	}
	
	private function NextFrame(e:Event):Void 
	{
		removeEventListener(Event.ENTER_FRAME, NextFrame);
		_view.render();
	}
	
	private function OnMouseLeave(e:Event):Void 
	{
		inactive.alpha = 0.7;
		removeEventListener(Event.ENTER_FRAME, Update);
	}
	
	private function OnMouseMove(e:MouseEvent):Void 
	{
		inactive.alpha = 0;
		addEventListener(Event.ENTER_FRAME, Update);
	}
	
	private function Update(e:Event):Void 
	{
		_view.camera.x = stage.mouseX - (stage.stageWidth / 2);
		_view.camera.y = stage.mouseY - (stage.stageHeight / 2);
		_view.camera.lookAt(new Vector3D());
		_view.render();
	}
	
	public function adjustMeshAnchor(mesh:Mesh, offset:Int):Void {
		adjustGeoAnchor(mesh.geometry, offset);
		mesh.z += offset;
	}
	
	public function adjustGeoAnchor(geometry:Geometry, offset:Int):Void {
		var matrix:Matrix3D = new Matrix3D();
		matrix.appendTranslation(0, 0, -offset);
		for (subGeometry in geometry.subGeometries) 
		{	
			subGeometry.applyTransformation(matrix);
		}
	}
}
