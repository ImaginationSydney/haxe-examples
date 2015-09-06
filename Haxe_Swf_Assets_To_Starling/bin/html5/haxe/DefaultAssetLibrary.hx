package;


import haxe.Timer;
import haxe.Unserializer;
import lime.app.Preloader;
import lime.audio.AudioSource;
import lime.audio.openal.AL;
import lime.audio.AudioBuffer;
import lime.graphics.Image;
import lime.system.ThreadPool;
import lime.text.Font;
import lime.utils.ByteArray;
import lime.utils.UInt8Array;
import lime.Assets;

#if sys
import sys.FileSystem;
#end

#if (js && html5)
import lime.net.URLLoader;
import lime.net.URLRequest;
#elseif flash
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.Loader;
import flash.events.Event;
import flash.media.Sound;
import flash.net.URLLoader;
import flash.net.URLRequest;
#end


class DefaultAssetLibrary extends AssetLibrary {
	
	
	public var className (default, null) = new Map <String, Dynamic> ();
	public var path (default, null) = new Map <String, String> ();
	public var type (default, null) = new Map <String, AssetType> ();
	
	private var lastModified:Float;
	private var threadPool:ThreadPool;
	private var timer:Timer;
	
	
	public function new () {
		
		super ();
		
		#if (openfl && !flash)
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		#end
		
		#if flash
		
		className.set ("swf/assets.swf", __ASSET__swf_assets_swf);
		type.set ("swf/assets.swf", AssetType.BINARY);
		className.set ("libraries/assets/12.png", __ASSET__libraries_assets_12_png);
		type.set ("libraries/assets/12.png", AssetType.IMAGE);
		className.set ("libraries/assets/15.png", __ASSET__libraries_assets_15_png);
		type.set ("libraries/assets/15.png", AssetType.IMAGE);
		className.set ("libraries/assets/18.png", __ASSET__libraries_assets_18_png);
		type.set ("libraries/assets/18.png", AssetType.IMAGE);
		className.set ("libraries/assets/21.png", __ASSET__libraries_assets_21_png);
		type.set ("libraries/assets/21.png", AssetType.IMAGE);
		className.set ("libraries/assets/24.png", __ASSET__libraries_assets_24_png);
		type.set ("libraries/assets/24.png", AssetType.IMAGE);
		className.set ("libraries/assets/27.png", __ASSET__libraries_assets_27_png);
		type.set ("libraries/assets/27.png", AssetType.IMAGE);
		className.set ("libraries/assets/3.png", __ASSET__libraries_assets_3_png);
		type.set ("libraries/assets/3.png", AssetType.IMAGE);
		className.set ("libraries/assets/30.png", __ASSET__libraries_assets_30_png);
		type.set ("libraries/assets/30.png", AssetType.IMAGE);
		className.set ("libraries/assets/33.png", __ASSET__libraries_assets_33_png);
		type.set ("libraries/assets/33.png", AssetType.IMAGE);
		className.set ("libraries/assets/36.png", __ASSET__libraries_assets_36_png);
		type.set ("libraries/assets/36.png", AssetType.IMAGE);
		className.set ("libraries/assets/39.png", __ASSET__libraries_assets_39_png);
		type.set ("libraries/assets/39.png", AssetType.IMAGE);
		className.set ("libraries/assets/42.png", __ASSET__libraries_assets_42_png);
		type.set ("libraries/assets/42.png", AssetType.IMAGE);
		className.set ("libraries/assets/45.png", __ASSET__libraries_assets_45_png);
		type.set ("libraries/assets/45.png", AssetType.IMAGE);
		className.set ("libraries/assets/48.png", __ASSET__libraries_assets_48_png);
		type.set ("libraries/assets/48.png", AssetType.IMAGE);
		className.set ("libraries/assets/51.png", __ASSET__libraries_assets_51_png);
		type.set ("libraries/assets/51.png", AssetType.IMAGE);
		className.set ("libraries/assets/54.png", __ASSET__libraries_assets_54_png);
		type.set ("libraries/assets/54.png", AssetType.IMAGE);
		className.set ("libraries/assets/57.png", __ASSET__libraries_assets_57_png);
		type.set ("libraries/assets/57.png", AssetType.IMAGE);
		className.set ("libraries/assets/6.png", __ASSET__libraries_assets_6_png);
		type.set ("libraries/assets/6.png", AssetType.IMAGE);
		className.set ("libraries/assets/60.png", __ASSET__libraries_assets_60_png);
		type.set ("libraries/assets/60.png", AssetType.IMAGE);
		className.set ("libraries/assets/9.png", __ASSET__libraries_assets_9_png);
		type.set ("libraries/assets/9.png", AssetType.IMAGE);
		className.set ("libraries/assets/assets.dat", __ASSET__libraries_assets_assets_dat);
		type.set ("libraries/assets/assets.dat", AssetType.TEXT);
		className.set ("libraries/assets.json", __ASSET__libraries_assets_json);
		type.set ("libraries/assets.json", AssetType.TEXT);
		
		
		#elseif html5
		
		var id;
		id = "swf/assets.swf";
		path.set (id, id);
		
		type.set (id, AssetType.BINARY);
		id = "libraries/assets/12.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/15.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/18.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/21.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/24.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/27.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/3.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/30.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/33.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/36.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/39.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/42.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/45.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/48.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/51.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/54.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/57.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/6.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/60.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/9.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "libraries/assets/assets.dat";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "libraries/assets.json";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		
		
		var assetsPrefix = ApplicationMain.config.assetsPrefix;
		if (assetsPrefix != null) {
			for (k in path.keys()) {
				path.set(k, assetsPrefix + path[k]);
			}
		}
		
		#else
		
		#if (windows || mac || linux)
		
		var useManifest = false;
		
		className.set ("swf/assets.swf", __ASSET__swf_assets_swf);
		type.set ("swf/assets.swf", AssetType.BINARY);
		
		className.set ("libraries/assets/12.png", __ASSET__libraries_assets_12_png);
		type.set ("libraries/assets/12.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/15.png", __ASSET__libraries_assets_15_png);
		type.set ("libraries/assets/15.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/18.png", __ASSET__libraries_assets_18_png);
		type.set ("libraries/assets/18.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/21.png", __ASSET__libraries_assets_21_png);
		type.set ("libraries/assets/21.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/24.png", __ASSET__libraries_assets_24_png);
		type.set ("libraries/assets/24.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/27.png", __ASSET__libraries_assets_27_png);
		type.set ("libraries/assets/27.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/3.png", __ASSET__libraries_assets_3_png);
		type.set ("libraries/assets/3.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/30.png", __ASSET__libraries_assets_30_png);
		type.set ("libraries/assets/30.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/33.png", __ASSET__libraries_assets_33_png);
		type.set ("libraries/assets/33.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/36.png", __ASSET__libraries_assets_36_png);
		type.set ("libraries/assets/36.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/39.png", __ASSET__libraries_assets_39_png);
		type.set ("libraries/assets/39.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/42.png", __ASSET__libraries_assets_42_png);
		type.set ("libraries/assets/42.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/45.png", __ASSET__libraries_assets_45_png);
		type.set ("libraries/assets/45.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/48.png", __ASSET__libraries_assets_48_png);
		type.set ("libraries/assets/48.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/51.png", __ASSET__libraries_assets_51_png);
		type.set ("libraries/assets/51.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/54.png", __ASSET__libraries_assets_54_png);
		type.set ("libraries/assets/54.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/57.png", __ASSET__libraries_assets_57_png);
		type.set ("libraries/assets/57.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/6.png", __ASSET__libraries_assets_6_png);
		type.set ("libraries/assets/6.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/60.png", __ASSET__libraries_assets_60_png);
		type.set ("libraries/assets/60.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/9.png", __ASSET__libraries_assets_9_png);
		type.set ("libraries/assets/9.png", AssetType.IMAGE);
		
		className.set ("libraries/assets/assets.dat", __ASSET__libraries_assets_assets_dat);
		type.set ("libraries/assets/assets.dat", AssetType.TEXT);
		
		className.set ("libraries/assets.json", __ASSET__libraries_assets_json);
		type.set ("libraries/assets.json", AssetType.TEXT);
		
		
		if (useManifest) {
			
			loadManifest ();
			
			if (Sys.args ().indexOf ("-livereload") > -1) {
				
				var path = FileSystem.fullPath ("manifest");
				lastModified = FileSystem.stat (path).mtime.getTime ();
				
				timer = new Timer (2000);
				timer.run = function () {
					
					var modified = FileSystem.stat (path).mtime.getTime ();
					
					if (modified > lastModified) {
						
						lastModified = modified;
						loadManifest ();
						
						if (eventCallback != null) {
							
							eventCallback (this, "change");
							
						}
						
					}
					
				}
				
			}
			
		}
		
		#else
		
		loadManifest ();
		
		#end
		#end
		
	}
	
	
	private function createThreadPool ():Void {
		
		threadPool = new ThreadPool (0, 2);
		threadPool.doWork.add (function (id, data) {
			
			data.result = data.getMethod (id);
			threadPool.sendComplete (data.handler, data);
			
		});
		threadPool.onComplete.add (function (id, data) {
			
			data.handler (data.result);
			
		});
		
	}
	
	
	public override function exists (id:String, type:String):Bool {
		
		var requestedType = type != null ? cast (type, AssetType) : null;
		var assetType = this.type.get (id);
		
		if (assetType != null) {
			
			if (assetType == requestedType || ((requestedType == SOUND || requestedType == MUSIC) && (assetType == MUSIC || assetType == SOUND))) {
				
				return true;
				
			}
			
			#if flash
			
			if (requestedType == BINARY && (assetType == BINARY || assetType == TEXT || assetType == IMAGE)) {
				
				return true;
				
			} else if (requestedType == null || path.exists (id)) {
				
				return true;
				
			}
			
			#else
			
			if (requestedType == BINARY || requestedType == null || (assetType == BINARY && requestedType == TEXT)) {
				
				return true;
				
			}
			
			#end
			
		}
		
		return false;
		
	}
	
	
	public override function getAudioBuffer (id:String):AudioBuffer {
		
		#if flash
		
		var buffer = new AudioBuffer ();
		buffer.src = cast (Type.createInstance (className.get (id), []), Sound);
		return buffer;
		
		#elseif html5
		
		return null;
		//return new Sound (new URLRequest (path.get (id)));
		
		#else
		
		if (className.exists(id)) return AudioBuffer.fromBytes (cast (Type.createInstance (className.get (id), []), ByteArray));
		else return AudioBuffer.fromFile (path.get (id));
		
		#end
		
	}
	
	
	public override function getBytes (id:String):ByteArray {
		
		#if flash
		
		switch (type.get (id)) {
			
			case TEXT, BINARY:
				
				return cast (Type.createInstance (className.get (id), []), ByteArray);
			
			case IMAGE:
				
				var bitmapData = cast (Type.createInstance (className.get (id), []), BitmapData);
				return bitmapData.getPixels (bitmapData.rect);
			
			default:
				
				return null;
			
		}
		
		return cast (Type.createInstance (className.get (id), []), ByteArray);
		
		#elseif html5
		
		var bytes:ByteArray = null;
		var loader = Preloader.loaders.get (path.get (id));
		
		if (loader == null) {
			
			return null;
			
		}
		
		var data = loader.data;
		
		if (Std.is (data, String)) {
			
			bytes = new ByteArray ();
			bytes.writeUTFBytes (data);
			
		} else if (Std.is (data, ByteArray)) {
			
			bytes = cast data;
			
		} else {
			
			bytes = null;
			
		}
		
		if (bytes != null) {
			
			bytes.position = 0;
			return bytes;
			
		} else {
			
			return null;
		}
		
		#else
		
		if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), ByteArray);
		else return ByteArray.readFile (path.get (id));
		
		#end
		
	}
	
	
	public override function getFont (id:String):Font {
		
		#if flash
		
		var src = Type.createInstance (className.get (id), []);
		
		var font = new Font (src.fontName);
		font.src = src;
		return font;
		
		#elseif html5
		
		return cast (Type.createInstance (className.get (id), []), Font);
		
		#else
		
		if (className.exists (id)) {
			
			var fontClass = className.get (id);
			return cast (Type.createInstance (fontClass, []), Font);
			
		} else {
			
			return Font.fromFile (path.get (id));
			
		}
		
		#end
		
	}
	
	
	public override function getImage (id:String):Image {
		
		#if flash
		
		return Image.fromBitmapData (cast (Type.createInstance (className.get (id), []), BitmapData));
		
		#elseif html5
		
		return Image.fromImageElement (Preloader.images.get (path.get (id)));
		
		#else
		
		if (className.exists (id)) {
			
			var fontClass = className.get (id);
			return cast (Type.createInstance (fontClass, []), Image);
			
		} else {
			
			return Image.fromFile (path.get (id));
			
		}
		
		#end
		
	}
	
	
	/*public override function getMusic (id:String):Dynamic {
		
		#if flash
		
		return cast (Type.createInstance (className.get (id), []), Sound);
		
		#elseif openfl_html5
		
		//var sound = new Sound ();
		//sound.__buffer = true;
		//sound.load (new URLRequest (path.get (id)));
		//return sound;
		return null;
		
		#elseif html5
		
		return null;
		//return new Sound (new URLRequest (path.get (id)));
		
		#else
		
		return null;
		//if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), Sound);
		//else return new Sound (new URLRequest (path.get (id)), null, true);
		
		#end
		
	}*/
	
	
	public override function getPath (id:String):String {
		
		//#if ios
		
		//return SystemPath.applicationDirectory + "/assets/" + path.get (id);
		
		//#else
		
		return path.get (id);
		
		//#end
		
	}
	
	
	public override function getText (id:String):String {
		
		#if html5
		
		var bytes:ByteArray = null;
		var loader = Preloader.loaders.get (path.get (id));
		
		if (loader == null) {
			
			return null;
			
		}
		
		var data = loader.data;
		
		if (Std.is (data, String)) {
			
			return cast data;
			
		} else if (Std.is (data, ByteArray)) {
			
			bytes = cast data;
			
		} else {
			
			bytes = null;
			
		}
		
		if (bytes != null) {
			
			bytes.position = 0;
			return bytes.readUTFBytes (bytes.length);
			
		} else {
			
			return null;
		}
		
		#else
		
		var bytes = getBytes (id);
		
		if (bytes == null) {
			
			return null;
			
		} else {
			
			return bytes.readUTFBytes (bytes.length);
			
		}
		
		#end
		
	}
	
	
	public override function isLocal (id:String, type:String):Bool {
		
		var requestedType = type != null ? cast (type, AssetType) : null;
		
		#if flash
		
		//if (requestedType != AssetType.MUSIC && requestedType != AssetType.SOUND) {
			
			return className.exists (id);
			
		//}
		
		#end
		
		return true;
		
	}
	
	
	public override function list (type:String):Array<String> {
		
		var requestedType = type != null ? cast (type, AssetType) : null;
		var items = [];
		
		for (id in this.type.keys ()) {
			
			if (requestedType == null || exists (id, type)) {
				
				items.push (id);
				
			}
			
		}
		
		return items;
		
	}
	
	
	public override function loadAudioBuffer (id:String, handler:AudioBuffer -> Void):Void {
		
		#if (flash)
		
		if (path.exists (id)) {
			
			var soundLoader = new Sound ();
			soundLoader.addEventListener (Event.COMPLETE, function (event) {
				
				var audioBuffer:AudioBuffer = new AudioBuffer();
				audioBuffer.src = event.currentTarget;
				handler (audioBuffer);
				
			});
			
			soundLoader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getAudioBuffer (id));
			
		}
		
		#else
		
		handler (getAudioBuffer (id));
		
		#end
		
	}
	
	
	public override function loadBytes (id:String, handler:ByteArray -> Void):Void {
		
		#if flash
		
		if (path.exists (id)) {
			
			var loader = new URLLoader ();
			loader.addEventListener (Event.COMPLETE, function (event:Event) {
				
				var bytes = new ByteArray ();
				bytes.writeUTFBytes (event.currentTarget.data);
				bytes.position = 0;
				
				handler (bytes);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getBytes (id));
			
		}
		
		#elseif html5
		
		if (path.exists (id)) {
			
			var loader = new URLLoader ();
			loader.dataFormat = BINARY;
			loader.onComplete.add (function (_):Void {
				
				handler (loader.data);
				
			});
			
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getBytes (id));
			
		}
		
		#else
		
		if (threadPool == null) {
			
			createThreadPool ();
			
		}
		
		threadPool.queue (id, { handler: handler, getMethod: getBytes });
		
		#end
		
	}
	
	
	public override function loadImage (id:String, handler:Image -> Void):Void {
		
		#if flash
		
		if (path.exists (id)) {
			
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event:Event) {
				
				var bitmapData = cast (event.currentTarget.content, Bitmap).bitmapData;
				handler (Image.fromBitmapData (bitmapData));
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getImage (id));
			
		}
		
		#elseif html5
		
		if (path.exists (id)) {
			
			var image = new js.html.Image ();
			image.onload = function (_):Void {
				
				handler (Image.fromImageElement (image));
				
			}
			image.src = path.get (id);
			
		} else {
			
			handler (getImage (id));
			
		}
		
		#else
		
		if (threadPool == null) {
			
			createThreadPool ();
			
		}
		
		threadPool.queue (id, { handler: handler, getMethod: getImage });
		
		#end
		
	}
	
	
	#if (!flash && !html5)
	private function loadManifest ():Void {
		
		try {
			
			#if blackberry
			var bytes = ByteArray.readFile ("app/native/manifest");
			#elseif tizen
			var bytes = ByteArray.readFile ("../res/manifest");
			#elseif emscripten
			var bytes = ByteArray.readFile ("assets/manifest");
			#elseif (mac && java)
			var bytes = ByteArray.readFile ("../Resources/manifest");
			#elseif ios
			var bytes = ByteArray.readFile ("assets/manifest");
			#else
			var bytes = ByteArray.readFile ("manifest");
			#end
			
			if (bytes != null) {
				
				bytes.position = 0;
				
				if (bytes.length > 0) {
					
					var data = bytes.readUTFBytes (bytes.length);
					
					if (data != null && data.length > 0) {
						
						var manifest:Array<Dynamic> = Unserializer.run (data);
						
						for (asset in manifest) {
							
							if (!className.exists (asset.id)) {
								
								#if ios
								path.set (asset.id, "assets/" + asset.path);
								#else
								path.set (asset.id, asset.path);
								#end
								type.set (asset.id, cast (asset.type, AssetType));
								
							}
							
						}
						
					}
					
				}
				
			} else {
				
				trace ("Warning: Could not load asset manifest (bytes was null)");
				
			}
		
		} catch (e:Dynamic) {
			
			trace ('Warning: Could not load asset manifest (${e})');
			
		}
		
	}
	#end
	
	
	/*public override function loadMusic (id:String, handler:Dynamic -> Void):Void {
		
		#if (flash || html5)
		
		//if (path.exists (id)) {
			
		//	var loader = new Loader ();
		//	loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
				
		//		handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
		//	});
		//	loader.load (new URLRequest (path.get (id)));
			
		//} else {
			
			handler (getMusic (id));
			
		//}
		
		#else
		
		handler (getMusic (id));
		
		#end
		
	}*/
	
	
	public override function loadText (id:String, handler:String -> Void):Void {
		
		#if html5
		
		if (path.exists (id)) {
			
			var loader = new URLLoader ();
			loader.onComplete.add (function (_):Void {
				
				handler (loader.data);
				
			});
			
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getText (id));
			
		}
		
		#else
		
		var callback = function (bytes:ByteArray):Void {
			
			if (bytes == null) {
				
				handler (null);
				
			} else {
				
				handler (bytes.readUTFBytes (bytes.length));
				
			}
			
		}
		
		loadBytes (id, callback);
		
		#end
		
	}
	
	
}


#if !display
#if flash

@:keep @:bind #if display private #end class __ASSET__swf_assets_swf extends null { }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_12_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_15_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_18_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_21_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_24_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_27_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_3_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_30_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_33_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_36_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_39_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_42_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_45_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_48_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_51_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_54_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_57_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_6_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_60_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_9_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_assets_dat extends null { }
@:keep @:bind #if display private #end class __ASSET__libraries_assets_json extends null { }


#elseif html5


























#else



#if (windows || mac || linux || cpp)


@:file("swf/assets.swf") #if display private #end class __ASSET__swf_assets_swf extends lime.utils.ByteArray {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/12.png") #if display private #end class __ASSET__libraries_assets_12_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/15.png") #if display private #end class __ASSET__libraries_assets_15_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/18.png") #if display private #end class __ASSET__libraries_assets_18_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/21.png") #if display private #end class __ASSET__libraries_assets_21_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/24.png") #if display private #end class __ASSET__libraries_assets_24_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/27.png") #if display private #end class __ASSET__libraries_assets_27_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/3.png") #if display private #end class __ASSET__libraries_assets_3_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/30.png") #if display private #end class __ASSET__libraries_assets_30_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/33.png") #if display private #end class __ASSET__libraries_assets_33_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/36.png") #if display private #end class __ASSET__libraries_assets_36_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/39.png") #if display private #end class __ASSET__libraries_assets_39_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/42.png") #if display private #end class __ASSET__libraries_assets_42_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/45.png") #if display private #end class __ASSET__libraries_assets_45_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/48.png") #if display private #end class __ASSET__libraries_assets_48_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/51.png") #if display private #end class __ASSET__libraries_assets_51_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/54.png") #if display private #end class __ASSET__libraries_assets_54_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/57.png") #if display private #end class __ASSET__libraries_assets_57_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/6.png") #if display private #end class __ASSET__libraries_assets_6_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/60.png") #if display private #end class __ASSET__libraries_assets_60_png extends lime.graphics.Image {}
@:image("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/9.png") #if display private #end class __ASSET__libraries_assets_9_png extends lime.graphics.Image {}
@:file("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets/assets.dat") #if display private #end class __ASSET__libraries_assets_assets_dat extends lime.utils.ByteArray {}
@:file("C:/_projects/HaxeExamples/haxe-examples/Haxe_Swf_Assets_To_Starling/bin/html5/obj/libraries/assets.json") #if display private #end class __ASSET__libraries_assets_json extends lime.utils.ByteArray {}



#end
#end

#if (openfl && !flash)

#end

#end