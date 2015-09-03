package ;


import format.swf.lite.MovieClip;
import format.swf.lite.SWFLite;
import haxe.Unserializer;
import openfl.Assets;


class Mc_Assets extends MovieClip {
	
	
	public var mc_circle (default, null):openfl.display.MovieClip;
	public var mc_shape (default, null):openfl.display.MovieClip;
	public var mc_square (default, null):openfl.display.MovieClip;
	
	
	
	public function new () {
		
		if (!SWFLite.instances.exists ("libraries/assets/assets.dat")) {
			
			SWFLite.instances.set ("libraries/assets/assets.dat", SWFLite.unserialize (Assets.getText ("libraries/assets/assets.dat")));
			
		}
		
		var swfLite = SWFLite.instances.get ("libraries/assets/assets.dat");
		var symbol = swfLite.symbols.get (7);
		
		super (swfLite, cast symbol);
		
	}
	
	
	private function resolveClass (name:String):Class <Dynamic> {
		
		var value = Type.resolveClass (name);
		
		if (value == null) {
			
			#if flash
			value = Type.resolveClass (StringTools.replace (name, "openfl._legacy", "flash"));
			#else
			value = Type.resolveClass (StringTools.replace (name, "openfl._legacy", "openfl"));
			#end
			
		}
		
		return value;
		
	}
	
	
	private function resolveEnum (name:String):Enum <Dynamic> {
		
		var value = Type.resolveEnum (name);
		
		if (value == null) {
			
			#if flash
			value = Type.resolveEnum (StringTools.replace (name, "openfl._legacy", "flash"));
			#else
			value = Type.resolveEnum (StringTools.replace (name, "openfl._legacy", "openfl"));
			#end
			
		}
		
		#if flash
		
		if (value == null) {
			
			return cast Type.resolveClass (name);
			
		}
		
		#end
		
		return value;
		
	}
	
	
}