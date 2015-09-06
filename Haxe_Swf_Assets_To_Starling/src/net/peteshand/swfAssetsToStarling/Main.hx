package net.peteshand.swfAssetsToStarling;
import openfl.display.Sprite;
import starling.core.Starling;
import starling.events.Event;
import starling.textures.RenderTexture;

/**
 * ...
 * @author P.J.Shand
 */
class Main extends Sprite 
{
	private var mStarling:Starling;
	
	public function new() 
	{
		super();
		
		Starling.multitouchEnabled = true; // for Multitouch Scene
		Starling.handleLostContext = true; // recommended everywhere when using AssetManager
		RenderTexture.optimizePersistentBuffers = true; // should be safe on Desktop

		mStarling = new Starling(StarlingRoot, stage, null, null, "auto", "baselineExtended");
		#if flash
			mStarling.antiAliasing = 4;
		#else
			mStarling.antiAliasing = 0;
		#end
		mStarling.simulateMultitouch = false;
		mStarling.addEventListener(starling.events.Event.ROOT_CREATED, function():Void
		{
			mStarling.start();
		});
	}
}
