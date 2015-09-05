package net.peteshand.swfAssetsToAway3D;

import away3d.containers.View3D;
import away3d.core.base.CompactSubGeometry;
import away3d.core.base.Geometry;
import away3d.core.base.ISubGeometry;
import away3d.entities.Mesh;
import away3d.materials.ColorMaterial;
import away3d.primitives.CubeGeometry;
import com.imagination.texturePacker.api.convert.away3D.IAway3DPackage;
import com.imagination.texturePacker.api.IAtlasPackage;
import com.imagination.texturePacker.impl.convert.Convert;
import com.imagination.texturePacker.impl.TexturePacker;
import openfl.display.Bitmap;
import openfl.display.Sprite;
import openfl.events.Event;
import openfl.geom.Matrix3D;
import openfl.geom.Vector3D;
import openfl.Lib;
import openfl.Vector;

/**
 * ...
 * @author P.J.Shand
 */
class Main extends Sprite 
{
	private var _view:View3D;
	private var placement:Float = 0;
	
	public function new() 
	{
		super();
		
		var clip:Sprite = new Mc_Assets();
        
		TexturePacker.TARGET_TEXTURE_SIZE.setTo(1024, 512);
		//TexturePacker.AUTO_INCREASE_TEXTURE_SIZE = true;
		//TexturePacker.debug = true;
		
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
		
		var away3DPackage:IAway3DPackage = Convert.toAway3D(clip);
		_view.scene.addChild(away3DPackage.container);
		
		var bg:Mesh = away3DPackage.meshByName("mc_bg");
		bg.z += 20;
		adjustMeshAnchor(bg, 500);
		
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
		/*geometry.subGeometries.forEach(function(item:CompactSubGeometry, index:Int, vector:Vector<ISubGeometry>):Void {
			item.applyTransformation(matrix);
		});*/
	}
}
