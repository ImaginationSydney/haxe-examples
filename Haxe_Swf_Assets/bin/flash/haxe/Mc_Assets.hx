package ; #if !flash


import format.swf.instance.MovieClip;
import format.SWF;
import openfl.Assets;


class Mc_Assets extends MovieClip {
	
	
	public function new () {
		
		if (!SWF.instances.exists ("libraries/assets/assets.swf")) {
			
			SWF.instances.set ("libraries/assets/assets.swf", new SWF (Assets.getBytes ("libraries/assets/assets.swf")));
			
		}
		
		var swf = SWF.instances.get ("libraries/assets/assets.swf");
		var symbol = swf.data.getCharacter (7);
		
		super (cast symbol);
		
	}
	
	
}


#else
@:bind @:native("Mc_Assets") class Mc_Assets extends flash.display.MovieClip {
	
	
	public function new () {
		
		super ();
		
	}
	
	
}
#end