package net.peteshand.realtimeTexturePacker;

import com.imagination.texturePacker.api.IAtlasPackage;
import com.imagination.texturePacker.impl.TexturePacker;
import openfl.display.Bitmap;
import openfl.display.Sprite;
import openfl.Lib;

/**
 * ...
 * @author P.J.Shand
 */
class Main extends Sprite 
{
	private var placement:Float = 0;
	
	public function new() 
	{
		super();
		
		var clip:Sprite = new Mc_Assets();
        
		TexturePacker.TARGET_TEXTURE_SIZE.setTo(256, 256);
		TexturePacker.AUTO_INCREASE_TEXTURE_SIZE = true;
		TexturePacker.debug = true;
		
		var texturePacker = new TexturePacker();
		for (i in 0...clip.numChildren) 
		{
			texturePacker.add(clip.getChildAt(i));
		}
		var atlasPackage:IAtlasPackage = texturePacker.pack();
		
		showSpriteSheets(atlasPackage);
	}
	
	private function showSpriteSheets(atlasPackage:IAtlasPackage) 
	{
		var bitmap:Bitmap = new Bitmap(atlasPackage.bitmapData);
		bitmap.scaleX = bitmap.scaleY = 0.5;
		bitmap.x = placement;
		addChild(bitmap);
		placement += bitmap.width + 2;
		
		if (atlasPackage.next != null) {
			showSpriteSheets(atlasPackage.next);
		}
	}
}
