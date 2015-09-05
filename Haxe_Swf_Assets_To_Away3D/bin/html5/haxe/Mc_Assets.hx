package ;


import format.swf.lite.MovieClip;
import format.swf.lite.SWFLite;
import haxe.Unserializer;
import openfl.Assets;


class Mc_Assets extends MovieClip {
	
	
	public var mc_bg (default, null):openfl.display.MovieClip;
	public var mc_item1 (default, null):openfl.display.MovieClip;
	public var mc_item2 (default, null):openfl.display.MovieClip;
	public var mc_item3 (default, null):openfl.display.MovieClip;
	public var mc_item4 (default, null):openfl.display.MovieClip;
	public var mc_item5 (default, null):openfl.display.MovieClip;
	public var mc_item6 (default, null):openfl.display.MovieClip;
	public var mc_item7 (default, null):openfl.display.MovieClip;
	public var mc_item8 (default, null):openfl.display.MovieClip;
	public var mc_item9 (default, null):openfl.display.MovieClip;
	public var mc_item10 (default, null):openfl.display.MovieClip;
	public var mc_item11 (default, null):openfl.display.MovieClip;
	public var mc_item12 (default, null):openfl.display.MovieClip;
	public var mc_item13 (default, null):openfl.display.MovieClip;
	public var mc_item14 (default, null):openfl.display.MovieClip;
	public var mc_item15 (default, null):openfl.display.MovieClip;
	public var mc_item16 (default, null):openfl.display.MovieClip;
	public var mc_item17 (default, null):openfl.display.MovieClip;
	public var mc_item18 (default, null):openfl.display.MovieClip;
	public var mc_item19 (default, null):openfl.display.MovieClip;
	public var mc_item20 (default, null):openfl.display.MovieClip;
	
	
	
	public function new () {
		
		if (!SWFLite.instances.exists ("libraries/assets/assets.dat")) {
			
			SWFLite.instances.set ("libraries/assets/assets.dat", SWFLite.unserialize (Assets.getText ("libraries/assets/assets.dat")));
			
		}
		
		var swfLite = SWFLite.instances.get ("libraries/assets/assets.dat");
		var symbol = swfLite.symbols.get (63);
		
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