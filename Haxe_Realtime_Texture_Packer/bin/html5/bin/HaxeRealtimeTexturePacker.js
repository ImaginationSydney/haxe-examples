(function ($hx_exports) { "use strict";
$hx_exports.openfl = $hx_exports.openfl || {};
$hx_exports.lime = $hx_exports.lime || {};
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { };
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.config = null;
ApplicationMain.preloader = null;
ApplicationMain.create = function() {
	var app = new openfl.display.Application();
	app.create(ApplicationMain.config);
	var display = new NMEPreloader();
	ApplicationMain.preloader = new openfl.display.Preloader(display);
	app.setPreloader(ApplicationMain.preloader);
	ApplicationMain.preloader.onComplete.add(ApplicationMain.init);
	ApplicationMain.preloader.create(ApplicationMain.config);
	var urls = [];
	var types = [];
	urls.push("swf/assets.swf");
	types.push("BINARY");
	urls.push("libraries/assets/12.png");
	types.push("IMAGE");
	urls.push("libraries/assets/15.png");
	types.push("IMAGE");
	urls.push("libraries/assets/18.png");
	types.push("IMAGE");
	urls.push("libraries/assets/21.png");
	types.push("IMAGE");
	urls.push("libraries/assets/24.png");
	types.push("IMAGE");
	urls.push("libraries/assets/27.png");
	types.push("IMAGE");
	urls.push("libraries/assets/3.png");
	types.push("IMAGE");
	urls.push("libraries/assets/30.png");
	types.push("IMAGE");
	urls.push("libraries/assets/33.png");
	types.push("IMAGE");
	urls.push("libraries/assets/36.png");
	types.push("IMAGE");
	urls.push("libraries/assets/39.png");
	types.push("IMAGE");
	urls.push("libraries/assets/42.png");
	types.push("IMAGE");
	urls.push("libraries/assets/45.png");
	types.push("IMAGE");
	urls.push("libraries/assets/48.png");
	types.push("IMAGE");
	urls.push("libraries/assets/51.png");
	types.push("IMAGE");
	urls.push("libraries/assets/54.png");
	types.push("IMAGE");
	urls.push("libraries/assets/57.png");
	types.push("IMAGE");
	urls.push("libraries/assets/6.png");
	types.push("IMAGE");
	urls.push("libraries/assets/60.png");
	types.push("IMAGE");
	urls.push("libraries/assets/9.png");
	types.push("IMAGE");
	urls.push("libraries/assets/assets.dat");
	types.push("TEXT");
	urls.push("libraries/assets.json");
	types.push("TEXT");
	if(ApplicationMain.config.assetsPrefix != null) {
		var _g1 = 0;
		var _g = urls.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(types[i] != "FONT") urls[i] = ApplicationMain.config.assetsPrefix + urls[i];
		}
	}
	ApplicationMain.preloader.load(urls,types);
	var result = app.exec();
};
ApplicationMain.init = function() {
	var loaded = 0;
	var total = 0;
	var library_onLoad = function(__) {
		loaded++;
		if(loaded == total) ApplicationMain.start();
	};
	ApplicationMain.preloader = null;
	total++;
	openfl.Assets.loadLibrary("assets",library_onLoad);
	if(total == 0) ApplicationMain.start();
};
ApplicationMain.main = function() {
	ApplicationMain.config = { build : "108", company : "P.J.Shand", file : "HaxeRealtimeTexturePacker", fps : 60, name : "Haxe_Realtime_Texture_Packer", orientation : "", packageName : "net.peteshand.realtimeTexturePacker.HaxeRealtimeTexturePacker", version : "1.0.0", windows : [{ antialiasing : 0, background : 0, borderless : false, depthBuffer : false, display : 0, fullscreen : false, hardware : true, height : 0, parameters : "{}", resizable : true, stencilBuffer : true, title : "Haxe_Realtime_Texture_Packer", vsync : false, width : 0, x : null, y : null}]};
};
ApplicationMain.start = function() {
	var hasMain = false;
	var entryPoint = Type.resolveClass("net.peteshand.realtimeTexturePacker.Main");
	var _g = 0;
	var _g1 = Type.getClassFields(entryPoint);
	while(_g < _g1.length) {
		var methodName = _g1[_g];
		++_g;
		if(methodName == "main") {
			hasMain = true;
			break;
		}
	}
	lime.Assets.initialize();
	if(hasMain) Reflect.callMethod(entryPoint,Reflect.field(entryPoint,"main"),[]); else {
		var instance = Type.createInstance(DocumentClass,[]);
	}
	openfl.Lib.current.stage.dispatchEvent(new openfl.events.Event(openfl.events.Event.RESIZE,false,false));
};
var openfl = {};
openfl.events = {};
openfl.events.IEventDispatcher = function() { };
$hxClasses["openfl.events.IEventDispatcher"] = openfl.events.IEventDispatcher;
openfl.events.IEventDispatcher.__name__ = ["openfl","events","IEventDispatcher"];
openfl.events.EventDispatcher = function(target) {
	if(target != null) this.__targetDispatcher = target;
};
$hxClasses["openfl.events.EventDispatcher"] = openfl.events.EventDispatcher;
openfl.events.EventDispatcher.__name__ = ["openfl","events","EventDispatcher"];
openfl.events.EventDispatcher.__interfaces__ = [openfl.events.IEventDispatcher];
openfl.events.EventDispatcher.__sortByPriority = function(l1,l2) {
	if(l1.priority == l2.priority) return 0; else if(l1.priority > l2.priority) return -1; else return 1;
};
openfl.events.EventDispatcher.prototype = {
	addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		if(this.__eventMap == null) {
			this.__dispatching = new haxe.ds.StringMap();
			this.__eventMap = new haxe.ds.StringMap();
			this.__newEventMap = new haxe.ds.StringMap();
		}
		if(!this.__eventMap.exists(type)) {
			var list = new Array();
			list.push(new openfl.events._EventDispatcher.Listener(listener,useCapture,priority));
			this.__eventMap.set(type,list);
		} else {
			var list1;
			if(this.__dispatching.get(type) == true) {
				if(!this.__newEventMap.exists(type)) {
					var _this = this.__eventMap.get(type);
					list1 = _this.slice();
					this.__newEventMap.set(type,list1);
				} else list1 = this.__newEventMap.get(type);
			} else list1 = this.__eventMap.get(type);
			var _g1 = 0;
			var _g = list1.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(Reflect.compareMethods(list1[i].callback,listener)) return;
			}
			list1.push(new openfl.events._EventDispatcher.Listener(listener,useCapture,priority));
			list1.sort(openfl.events.EventDispatcher.__sortByPriority);
		}
	}
	,dispatchEvent: function(event) {
		if(this.__targetDispatcher != null) event.target = this.__targetDispatcher; else event.target = this;
		return this.__dispatchEvent(event);
	}
	,hasEventListener: function(type) {
		if(this.__eventMap == null) return false;
		if(this.__dispatching.get(type) == true && this.__newEventMap.exists(type)) return this.__newEventMap.get(type).length > 0; else return this.__eventMap.exists(type);
	}
	,removeEventListener: function(type,listener,capture) {
		if(capture == null) capture = false;
		if(this.__eventMap == null) return;
		var list = this.__eventMap.get(type);
		if(list == null) return;
		var dispatching = this.__dispatching.get(type) == true;
		if(dispatching) {
			if(!this.__newEventMap.exists(type)) {
				var _this = this.__eventMap.get(type);
				list = _this.slice();
				this.__newEventMap.set(type,list);
			} else list = this.__newEventMap.get(type);
		}
		var _g1 = 0;
		var _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].match(listener,capture)) {
				list.splice(i,1);
				break;
			}
		}
		if(!dispatching) {
			if(list.length == 0) this.__eventMap.remove(type);
			if(!this.__eventMap.iterator().hasNext()) {
				this.__eventMap = null;
				this.__newEventMap = null;
			}
		}
	}
	,__dispatchEvent: function(event) {
		if(this.__eventMap == null || event == null) return false;
		var type = event.type;
		var list;
		if(this.__dispatching.get(type) == true) {
			list = this.__newEventMap.get(type);
			if(list == null) return false;
			list = list.slice();
		} else {
			list = this.__eventMap.get(type);
			if(list == null) return false;
			this.__dispatching.set(type,true);
		}
		if(event.target == null) {
			if(this.__targetDispatcher != null) event.target = this.__targetDispatcher; else event.target = this;
		}
		event.currentTarget = this;
		var capture = event.eventPhase == openfl.events.EventPhase.CAPTURING_PHASE;
		var index = 0;
		var listener;
		while(index < list.length) {
			listener = list[index];
			if(listener.useCapture == capture) {
				listener.callback(event);
				if(event.__isCancelledNow) break;
			}
			if(listener == list[index]) index++;
		}
		if(this.__newEventMap != null && this.__newEventMap.exists(type)) {
			var list1 = this.__newEventMap.get(type);
			if(list1.length > 0) this.__eventMap.set(type,list1); else this.__eventMap.remove(type);
			if(!this.__eventMap.iterator().hasNext()) {
				this.__eventMap = null;
				this.__newEventMap = null;
			} else this.__newEventMap.remove(type);
		}
		this.__dispatching.set(event.type,false);
		return true;
	}
	,__class__: openfl.events.EventDispatcher
};
openfl.display = {};
openfl.display.IBitmapDrawable = function() { };
$hxClasses["openfl.display.IBitmapDrawable"] = openfl.display.IBitmapDrawable;
openfl.display.IBitmapDrawable.__name__ = ["openfl","display","IBitmapDrawable"];
openfl.display.IBitmapDrawable.prototype = {
	__class__: openfl.display.IBitmapDrawable
};
openfl.display.DisplayObject = function() {
	this.__maskCached = false;
	openfl.events.EventDispatcher.call(this);
	this.__alpha = 1;
	this.__rotation = 0;
	this.__scaleX = 1;
	this.__scaleY = 1;
	this.__visible = true;
	this.__x = 0;
	this.__y = 0;
	this.__worldAlpha = 1;
	this.__worldTransform = new openfl.geom.Matrix();
	this.__rotationCache = 0;
	this.__rotationSine = 0;
	this.__rotationCosine = 1;
	this.__worldColorTransform = new openfl.geom.ColorTransform();
	this.set_name("instance" + ++openfl.display.DisplayObject.__instanceCount);
};
$hxClasses["openfl.display.DisplayObject"] = openfl.display.DisplayObject;
openfl.display.DisplayObject.__name__ = ["openfl","display","DisplayObject"];
openfl.display.DisplayObject.__interfaces__ = [openfl.display.IBitmapDrawable];
openfl.display.DisplayObject.__super__ = openfl.events.EventDispatcher;
openfl.display.DisplayObject.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	getBounds: function(targetCoordinateSpace) {
		var matrix = this.__getTransform();
		if(targetCoordinateSpace != null) {
			matrix = new openfl.geom.Matrix(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			matrix.concat(targetCoordinateSpace.__worldTransform.clone().invert());
		}
		var bounds = new openfl.geom.Rectangle();
		this.__getBounds(bounds,matrix);
		return bounds;
	}
	,globalToLocal: function(pos) {
		pos = pos.clone();
		this.__getTransform().__transformInversePoint(pos);
		return pos;
	}
	,__broadcast: function(event,notifyChilden) {
		if(this.__eventMap != null && this.hasEventListener(event.type)) {
			var result = openfl.events.EventDispatcher.prototype.__dispatchEvent.call(this,event);
			if(event.__isCancelled) return true;
			return result;
		}
		return false;
	}
	,__dispatchEvent: function(event) {
		var result = openfl.events.EventDispatcher.prototype.__dispatchEvent.call(this,event);
		if(event.__isCancelled) return true;
		if(event.bubbles && this.parent != null && this.parent != this) {
			event.eventPhase = openfl.events.EventPhase.BUBBLING_PHASE;
			if(event.target == null) event.target = this;
			this.parent.__dispatchEvent(event);
		}
		return result;
	}
	,__enterFrame: function() {
	}
	,__getBounds: function(rect,matrix) {
		if(this.__graphics != null) this.__graphics.__getBounds(rect,matrix);
	}
	,__getCursor: function() {
		return null;
	}
	,__getInteractive: function(stack) {
		return false;
	}
	,__getTransform: function() {
		if(this.__transformDirty || openfl.display.DisplayObject.__worldTransformDirty > 0) {
			var list = [];
			var current = this;
			var transformDirty = this.__transformDirty;
			if(this.parent == null) {
				if(transformDirty) this.__update(true,false);
			} else while(current.parent != null) {
				list.push(current);
				current = current.parent;
				if(current.__transformDirty) transformDirty = true;
			}
			if(transformDirty) {
				var i = list.length;
				while(--i >= 0) list[i].__update(true,false);
			}
		}
		return this.__worldTransform;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(this.__graphics != null) {
			if(!this.get_visible() || this.__isMask) return false;
			if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) return false;
			if(this.__graphics.__hitTest(x,y,shapeFlag,this.__getTransform())) {
				if(stack != null && !interactiveOnly) stack.push(this);
				return true;
			}
		}
		return false;
	}
	,__hitTestMask: function(x,y) {
		if(this.__graphics != null) {
			if(this.__graphics.__hitTest(x,y,true,this.__getTransform())) return true;
		}
		return false;
	}
	,__renderCairo: function(renderSession) {
		if(this.__graphics != null) openfl._internal.renderer.cairo.CairoShape.render(this,renderSession);
	}
	,__renderCairoMask: function(renderSession) {
		if(this.__graphics != null) openfl._internal.renderer.cairo.CairoGraphics.renderMask(this.__graphics,renderSession);
	}
	,__renderCanvas: function(renderSession) {
		if(this.__graphics != null) openfl._internal.renderer.canvas.CanvasShape.render(this,renderSession);
	}
	,__renderCanvasMask: function(renderSession) {
		if(this.__graphics != null) openfl._internal.renderer.canvas.CanvasGraphics.renderMask(this.__graphics,renderSession);
	}
	,__renderDOM: function(renderSession) {
		if(this.__graphics != null) openfl._internal.renderer.dom.DOMShape.render(this,renderSession);
	}
	,__renderGL: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.__graphics != null) {
			if(this.__graphics.__hardware) openfl._internal.renderer.opengl.utils.GraphicsRenderer.render(this,renderSession); else {
				openfl._internal.renderer.canvas.CanvasGraphics.render(this.__graphics,renderSession);
				openfl._internal.renderer.opengl.GLRenderer.renderBitmap(this,renderSession);
			}
		}
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			if(this.stage != null) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED_FROM_STAGE,false,false));
			this.stage = stage;
			if(stage != null) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE,false,false));
		}
	}
	,__setRenderDirty: function() {
		if(!this.__renderDirty) {
			this.__renderDirty = true;
			openfl.display.DisplayObject.__worldRenderDirty++;
		}
	}
	,__setTransformDirty: function() {
		if(!this.__transformDirty) {
			this.__transformDirty = true;
			openfl.display.DisplayObject.__worldTransformDirty++;
		}
	}
	,__update: function(transformOnly,updateChildren,maskGraphics) {
		this.__renderable = this.get_visible() && this.get_scaleX() != 0 && this.get_scaleY() != 0 && !this.__isMask;
		if(this.get_rotation() != this.__rotationCache) {
			this.__rotationCache = this.get_rotation();
			var radians = this.get_rotation() * (Math.PI / 180);
			this.__rotationSine = Math.sin(radians);
			this.__rotationCosine = Math.cos(radians);
		}
		var sr = this.get_scrollRect();
		if(this.parent != null) {
			var parentTransform = this.parent.__worldTransform;
			var a00 = this.__rotationCosine * this.get_scaleX();
			var a01 = this.__rotationSine * this.get_scaleX();
			var a10 = -this.__rotationSine * this.get_scaleY();
			var a11 = this.__rotationCosine * this.get_scaleY();
			var b00 = parentTransform.a;
			var b01 = parentTransform.b;
			var b10 = parentTransform.c;
			var b11 = parentTransform.d;
			if(this.__worldTransform == null) this.__worldTransform = new openfl.geom.Matrix();
			this.__worldTransform.a = a00 * b00 + a01 * b10;
			this.__worldTransform.b = a00 * b01 + a01 * b11;
			this.__worldTransform.c = a10 * b00 + a11 * b10;
			this.__worldTransform.d = a10 * b01 + a11 * b11;
			this.__worldTransform.tx = this.get_x() * b00 + this.get_y() * b10 + parentTransform.tx;
			this.__worldTransform.ty = this.get_x() * b01 + this.get_y() * b11 + parentTransform.ty;
			if(sr != null) {
				if(this.__worldTransform.a != 1 || this.__worldTransform.b != 0 || this.__worldTransform.c != 0 || this.__worldTransform.d != 1) sr.__transform(sr,this.__worldTransform); else {
					this.__worldTransform.tx = (this.get_x() - sr.x) * b00 + (this.get_y() - sr.y) * b10 + parentTransform.tx;
					this.__worldTransform.ty = (this.get_x() - sr.x) * b01 + (this.get_y() - sr.y) * b11 + parentTransform.ty;
				}
			}
			if(this.__isMask) this.__maskCached = false;
		} else {
			this.__worldTransform.a = this.__rotationCosine * this.get_scaleX();
			this.__worldTransform.c = -this.__rotationSine * this.get_scaleY();
			this.__worldTransform.b = this.__rotationSine * this.get_scaleX();
			this.__worldTransform.d = this.__rotationCosine * this.get_scaleY();
			this.__worldTransform.tx = this.get_x();
			this.__worldTransform.ty = this.get_y();
			if(sr != null) {
				if(this.__worldTransform.a != 1 || this.__worldTransform.b != 0 || this.__worldTransform.c != 0 || this.__worldTransform.d != 1) sr.__transform(sr,this.__worldTransform); else {
					this.__worldTransform.tx = this.get_x() - this.get_scrollRect().x;
					this.__worldTransform.ty = this.get_y() - this.get_scrollRect().y;
				}
			}
		}
		if(updateChildren && this.__transformDirty) {
			this.__transformDirty = false;
			openfl.display.DisplayObject.__worldTransformDirty--;
		}
		if(!transformOnly && this.__mask != null && !this.__mask.__maskCached) {
			if(this.__maskGraphics == null) this.__maskGraphics = new openfl.display.Graphics();
			this.__maskGraphics.clear();
			this.__mask.__update(true,true,this.__maskGraphics);
			this.__mask.__maskCached = true;
		}
		if(maskGraphics != null) this.__updateMask(maskGraphics);
		if(!transformOnly) {
			if(!this.__worldColorTransform.__equals(this.get_transform().get_colorTransform())) this.__worldColorTransform = this.get_transform().get_colorTransform().__clone();
			if(this.parent != null) {
				this.__worldAlpha = this.get_alpha() * this.parent.__worldAlpha;
				this.__worldColorTransform.__combine(this.parent.__worldColorTransform);
				if(this.blendMode == null || this.blendMode == openfl.display.BlendMode.NORMAL) this.__blendMode = this.parent.__blendMode;
			} else this.__worldAlpha = this.get_alpha();
			if(updateChildren && this.__renderDirty) this.__renderDirty = false;
		}
	}
	,__updateChildren: function(transformOnly) {
		this.__renderable = this.get_visible() && this.get_scaleX() != 0 && this.get_scaleY() != 0 && !this.__isMask;
		if(!this.__renderable && !this.__isMask) return;
		this.__worldAlpha = this.get_alpha();
		if(this.__transformDirty) {
			this.__transformDirty = false;
			openfl.display.DisplayObject.__worldTransformDirty--;
		}
	}
	,__updateMask: function(maskGraphics) {
		if(this.__graphics != null) {
			maskGraphics.__commands.push(openfl.display.DrawCommand.OverrideMatrix(this.__worldTransform));
			maskGraphics.__commands = maskGraphics.__commands.concat(this.__graphics.__commands);
			maskGraphics.set___dirty(true);
			maskGraphics.__visible = true;
			if(maskGraphics.__bounds == null) maskGraphics.__bounds = new openfl.geom.Rectangle();
			this.__graphics.__getBounds(maskGraphics.__bounds,openfl.geom.Matrix.__identity);
		}
	}
	,get_alpha: function() {
		return this.__alpha;
	}
	,set_alpha: function(value) {
		if(value > 1.0) value = 1.0;
		if(value != this.__alpha) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
		}
		return this.__alpha = value;
	}
	,set_filters: function(value) {
		return value;
	}
	,get_height: function() {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		return bounds.height * this.get_scaleY();
	}
	,get_mask: function() {
		return this.__mask;
	}
	,set_mask: function(value) {
		if(value != this.__mask) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
		}
		if(this.__mask != null) {
			this.__mask.__isMask = false;
			this.__mask.__maskCached = false;
			this.__mask.__setTransformDirty();
			this.__mask.__setRenderDirty();
			this.__maskGraphics = null;
		}
		if(value != null) value.__isMask = true;
		return this.__mask = value;
	}
	,get_mouseX: function() {
		if(this.stage != null) return this.__getTransform().__transformInverseX(this.stage.__mouseX,this.stage.__mouseY);
		return 0;
	}
	,get_mouseY: function() {
		if(this.stage != null) return this.__getTransform().__transformInverseY(this.stage.__mouseX,this.stage.__mouseY);
		return 0;
	}
	,get_name: function() {
		return this.__name;
	}
	,set_name: function(value) {
		return this.__name = value;
	}
	,get_rotation: function() {
		return this.__rotation;
	}
	,set_rotation: function(value) {
		if(value != this.__rotation) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__rotation = value;
	}
	,get_scaleX: function() {
		return this.__scaleX;
	}
	,set_scaleX: function(value) {
		if(value != this.__scaleX) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__scaleX = value;
	}
	,get_scaleY: function() {
		return this.__scaleY;
	}
	,set_scaleY: function(value) {
		if(this.__scaleY != value) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__scaleY = value;
	}
	,get_scrollRect: function() {
		if(this.__scrollRect == null) return null;
		return this.__scrollRect.clone();
	}
	,get_transform: function() {
		if(this.__transform == null) this.__transform = new openfl.geom.Transform(this);
		return this.__transform;
	}
	,get_visible: function() {
		return this.__visible;
	}
	,set_visible: function(value) {
		if(value != this.__visible) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
		}
		return this.__visible = value;
	}
	,get_width: function() {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		return bounds.width * this.get_scaleX();
	}
	,get_x: function() {
		return this.__x;
	}
	,set_x: function(value) {
		if(value != this.__x) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__x = value;
	}
	,get_y: function() {
		return this.__y;
	}
	,set_y: function(value) {
		if(value != this.__y) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__y = value;
	}
	,__class__: openfl.display.DisplayObject
	,__properties__: {set_y:"set_y",get_y:"get_y",set_x:"set_x",get_x:"get_x",get_width:"get_width",set_visible:"set_visible",get_visible:"get_visible",get_transform:"get_transform",get_scrollRect:"get_scrollRect",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_rotation:"set_rotation",get_rotation:"get_rotation",set_name:"set_name",get_name:"get_name",get_mouseY:"get_mouseY",get_mouseX:"get_mouseX",set_mask:"set_mask",get_mask:"get_mask",get_height:"get_height",set_filters:"set_filters",set_alpha:"set_alpha",get_alpha:"get_alpha"}
});
openfl.display.InteractiveObject = function() {
	openfl.display.DisplayObject.call(this);
	this.doubleClickEnabled = false;
	this.mouseEnabled = true;
	this.needsSoftKeyboard = false;
	this.__tabEnabled = false;
	this.tabIndex = -1;
};
$hxClasses["openfl.display.InteractiveObject"] = openfl.display.InteractiveObject;
openfl.display.InteractiveObject.__name__ = ["openfl","display","InteractiveObject"];
openfl.display.InteractiveObject.__super__ = openfl.display.DisplayObject;
openfl.display.InteractiveObject.prototype = $extend(openfl.display.DisplayObject.prototype,{
	__getInteractive: function(stack) {
		if(stack != null) {
			stack.push(this);
			if(this.parent != null) this.parent.__getInteractive(stack);
		}
		return true;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled) return false;
		return openfl.display.DisplayObject.prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly);
	}
	,get_tabEnabled: function() {
		return this.__tabEnabled;
	}
	,__class__: openfl.display.InteractiveObject
	,__properties__: $extend(openfl.display.DisplayObject.prototype.__properties__,{get_tabEnabled:"get_tabEnabled"})
});
openfl.display.DisplayObjectContainer = function() {
	openfl.display.InteractiveObject.call(this);
	this.mouseChildren = true;
	this.__children = new Array();
	this.__removedChildren = new Array();
};
$hxClasses["openfl.display.DisplayObjectContainer"] = openfl.display.DisplayObjectContainer;
openfl.display.DisplayObjectContainer.__name__ = ["openfl","display","DisplayObjectContainer"];
openfl.display.DisplayObjectContainer.__super__ = openfl.display.InteractiveObject;
openfl.display.DisplayObjectContainer.prototype = $extend(openfl.display.InteractiveObject.prototype,{
	addChild: function(child) {
		if(child != null) {
			if(child.parent != null) child.parent.removeChild(child);
			this.__children.push(child);
			child.parent = this;
			if(this.stage != null) child.__setStageReference(this.stage);
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
			var event = new openfl.events.Event(openfl.events.Event.ADDED,true);
			event.target = child;
			child.__dispatchEvent(event);
		}
		return child;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__children[index];
		return null;
	}
	,removeChild: function(child) {
		if(child != null && child.parent == this) {
			if(this.stage != null) child.__setStageReference(null);
			child.parent = null;
			HxOverrides.remove(this.__children,child);
			this.__removedChildren.push(child);
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
			child.__dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED,true));
		}
		return child;
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.removeChild(this.__children[index]);
		return null;
	}
	,__broadcast: function(event,notifyChilden) {
		if(event.target == null) event.target = this;
		var result = openfl.display.InteractiveObject.prototype.__broadcast.call(this,event,notifyChilden);
		if(!event.__isCancelled && notifyChilden) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__broadcast(event,true);
				if(event.__isCancelled) return true;
			}
		}
		return result;
	}
	,__enterFrame: function() {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__enterFrame();
		}
	}
	,__getBounds: function(rect,matrix) {
		openfl.display.InteractiveObject.prototype.__getBounds.call(this,rect,matrix);
		if(this.__children.length == 0) return;
		var matrixCache = null;
		if(matrix != null) {
			matrixCache = this.__worldTransform;
			this.__worldTransform = matrix;
			this.__updateChildren(true);
		}
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_scaleX() == 0 || child.get_scaleY() == 0 || child.__isMask) continue;
			child.__getBounds(rect,child.__worldTransform);
		}
		if(matrix != null) {
			this.__worldTransform = matrixCache;
			this.__updateChildren(true);
		}
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled && !this.mouseChildren) return false;
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) return false;
		if(this.get_scrollRect() != null && !this.get_scrollRect().containsPoint(this.globalToLocal(new openfl.geom.Point(x,y)))) return false;
		var i = this.__children.length;
		if(interactiveOnly) {
			if(stack == null || !this.mouseChildren) {
				while(--i >= 0) if(this.__children[i].__hitTest(x,y,shapeFlag,null,true)) {
					if(stack != null) stack.push(this);
					return true;
				}
			} else if(stack != null) {
				var length = stack.length;
				var interactive = false;
				var hitTest = false;
				while(--i >= 0) {
					interactive = this.__children[i].__getInteractive(null);
					if(interactive || this.mouseEnabled && !hitTest) {
						if(this.__children[i].__hitTest(x,y,shapeFlag,stack,true)) {
							hitTest = true;
							if(interactive) break;
						}
					}
				}
				if(hitTest) {
					stack.splice(length,0,this);
					return true;
				}
			}
		} else while(--i >= 0) this.__children[i].__hitTest(x,y,shapeFlag,stack,false);
		return false;
	}
	,__hitTestMask: function(x,y) {
		var i = this.__children.length;
		while(--i >= 0) if(this.__children[i].__hitTestMask(x,y)) return true;
		return false;
	}
	,__renderCairo: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		openfl.display.InteractiveObject.prototype.__renderCairo.call(this,renderSession);
		if(this.get_scrollRect() != null) renderSession.maskManager.pushRect(this.get_scrollRect(),this.__worldTransform);
		if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderCairo(renderSession);
		}
		if(this.__removedChildren.length > 0) this.__removedChildren.splice(0,this.__removedChildren.length);
		if(this.__mask != null) renderSession.maskManager.popMask();
		if(this.get_scrollRect() != null) renderSession.maskManager.popMask();
	}
	,__renderCairoMask: function(renderSession) {
		if(this.__graphics != null) openfl._internal.renderer.cairo.CairoGraphics.renderMask(this.__graphics,renderSession);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderCairoMask(renderSession);
		}
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		openfl.display.InteractiveObject.prototype.__renderCanvas.call(this,renderSession);
		if(this.get_scrollRect() != null) renderSession.maskManager.pushRect(this.get_scrollRect(),this.__worldTransform);
		if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderCanvas(renderSession);
		}
		if(this.__removedChildren.length > 0) this.__removedChildren.splice(0,this.__removedChildren.length);
		if(this.__mask != null) renderSession.maskManager.popMask();
		if(this.get_scrollRect() != null) renderSession.maskManager.popMask();
	}
	,__renderCanvasMask: function(renderSession) {
		if(this.__graphics != null) openfl._internal.renderer.canvas.CanvasGraphics.renderMask(this.__graphics,renderSession);
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		renderSession.context.rect(0,0,bounds.width,bounds.height);
	}
	,__renderDOM: function(renderSession) {
		openfl.display.InteractiveObject.prototype.__renderDOM.call(this,renderSession);
		if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderDOM(renderSession);
		}
		var _g2 = 0;
		var _g11 = this.__removedChildren;
		while(_g2 < _g11.length) {
			var orphan = _g11[_g2];
			++_g2;
			if(orphan.stage == null) orphan.__renderDOM(renderSession);
		}
		if(this.__removedChildren.length > 0) this.__removedChildren.splice(0,this.__removedChildren.length);
		if(this.__mask != null) renderSession.maskManager.popMask();
	}
	,__renderGL: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.get_scrollRect() != null) {
			renderSession.spriteBatch.stop();
			var m = this.__worldTransform.clone();
			var clip = openfl.geom.Rectangle.__temp;
			this.get_scrollRect().__transform(clip,m);
			clip.y = renderSession.renderer.height - clip.y - clip.height;
			renderSession.spriteBatch.start(clip);
		}
		var masked = this.__mask != null && this.__maskGraphics != null && this.__maskGraphics.__commands.length > 0;
		if(masked) {
			renderSession.spriteBatch.stop();
			renderSession.maskManager.pushMask(this);
			renderSession.spriteBatch.start();
		}
		openfl.display.InteractiveObject.prototype.__renderGL.call(this,renderSession);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderGL(renderSession);
		}
		if(masked) {
			renderSession.spriteBatch.stop();
			renderSession.maskManager.popMask();
			renderSession.spriteBatch.start();
		}
		if(this.get_scrollRect() != null) {
			renderSession.spriteBatch.stop();
			renderSession.spriteBatch.start();
		}
		if(this.__removedChildren.length > 0) this.__removedChildren.splice(0,this.__removedChildren.length);
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			if(this.stage != null) this.__dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED_FROM_STAGE,false,false));
			this.stage = stage;
			if(stage != null) this.__dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE,false,false));
			if(this.__children != null) {
				var _g = 0;
				var _g1 = this.__children;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					child.__setStageReference(stage);
				}
			}
		}
	}
	,__update: function(transformOnly,updateChildren,maskGraphics) {
		openfl.display.InteractiveObject.prototype.__update.call(this,transformOnly,updateChildren,maskGraphics);
		if(!this.__renderable && !this.__isMask) return;
		if(updateChildren) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__update(transformOnly,true,maskGraphics);
			}
		}
	}
	,__updateChildren: function(transformOnly) {
		openfl.display.InteractiveObject.prototype.__updateChildren.call(this,transformOnly);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__update(transformOnly,true);
		}
	}
	,get_numChildren: function() {
		return this.__children.length;
	}
	,__class__: openfl.display.DisplayObjectContainer
	,__properties__: $extend(openfl.display.InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
openfl.display.Sprite = function() {
	openfl.display.DisplayObjectContainer.call(this);
	this.buttonMode = false;
	this.useHandCursor = true;
	this.loaderInfo = openfl.display.LoaderInfo.create(null);
};
$hxClasses["openfl.display.Sprite"] = openfl.display.Sprite;
openfl.display.Sprite.__name__ = ["openfl","display","Sprite"];
openfl.display.Sprite.__super__ = openfl.display.DisplayObjectContainer;
openfl.display.Sprite.prototype = $extend(openfl.display.DisplayObjectContainer.prototype,{
	__getCursor: function() {
		if(this.buttonMode && this.useHandCursor) return lime.ui.MouseCursor.POINTER; else return null;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled && !this.mouseChildren) return false;
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) return false;
		if(openfl.display.DisplayObjectContainer.prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly)) return interactiveOnly; else if((!interactiveOnly || this.mouseEnabled) && this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__getTransform())) {
			if(stack != null) stack.push(this);
			return true;
		}
		return false;
	}
	,__hitTestMask: function(x,y) {
		if(openfl.display.DisplayObjectContainer.prototype.__hitTestMask.call(this,x,y)) return true; else if(this.__graphics != null && this.__graphics.__hitTest(x,y,true,this.__getTransform())) return true;
		return false;
	}
	,get_graphics: function() {
		if(this.__graphics == null) {
			this.__graphics = new openfl.display.Graphics();
			this.__graphics.__owner = this;
		}
		return this.__graphics;
	}
	,get_tabEnabled: function() {
		return this.__tabEnabled || this.buttonMode;
	}
	,__class__: openfl.display.Sprite
	,__properties__: $extend(openfl.display.DisplayObjectContainer.prototype.__properties__,{get_graphics:"get_graphics"})
});
var net = {};
net.peteshand = {};
net.peteshand.realtimeTexturePacker = {};
net.peteshand.realtimeTexturePacker.Main = function() {
	this.placement = 0;
	openfl.display.Sprite.call(this);
	var clip = new Mc_Assets();
	com.imagination.texturePacker.impl.TexturePacker.TARGET_TEXTURE_SIZE.setTo(256,256);
	com.imagination.texturePacker.impl.TexturePacker.AUTO_INCREASE_TEXTURE_SIZE = true;
	com.imagination.texturePacker.impl.TexturePacker.debug = true;
	var texturePacker = new com.imagination.texturePacker.impl.TexturePacker();
	var _g1 = 0;
	var _g = clip.get_numChildren();
	while(_g1 < _g) {
		var i = _g1++;
		texturePacker.add(clip.getChildAt(i));
	}
	var atlasPackage = texturePacker.pack();
	this.showSpriteSheets(atlasPackage);
};
$hxClasses["net.peteshand.realtimeTexturePacker.Main"] = net.peteshand.realtimeTexturePacker.Main;
net.peteshand.realtimeTexturePacker.Main.__name__ = ["net","peteshand","realtimeTexturePacker","Main"];
net.peteshand.realtimeTexturePacker.Main.__super__ = openfl.display.Sprite;
net.peteshand.realtimeTexturePacker.Main.prototype = $extend(openfl.display.Sprite.prototype,{
	showSpriteSheets: function(atlasPackage) {
		var bitmap = new openfl.display.Bitmap(atlasPackage.get_bitmapData());
		bitmap.set_scaleX(bitmap.set_scaleY(0.5));
		bitmap.set_x(this.placement);
		this.addChild(bitmap);
		this.placement += bitmap.get_width() + 2;
		if(atlasPackage.get_next() != null) this.showSpriteSheets(atlasPackage.get_next());
	}
	,__class__: net.peteshand.realtimeTexturePacker.Main
});
var DocumentClass = function() {
	openfl.Lib.current.addChild(this);
	net.peteshand.realtimeTexturePacker.Main.call(this);
	this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE,false,false));
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = net.peteshand.realtimeTexturePacker.Main;
DocumentClass.prototype = $extend(net.peteshand.realtimeTexturePacker.Main.prototype,{
	__class__: DocumentClass
});
var lime = {};
lime.AssetLibrary = function() {
};
$hxClasses["lime.AssetLibrary"] = lime.AssetLibrary;
lime.AssetLibrary.__name__ = ["lime","AssetLibrary"];
lime.AssetLibrary.prototype = {
	exists: function(id,type) {
		return false;
	}
	,getBytes: function(id) {
		return null;
	}
	,getImage: function(id) {
		return null;
	}
	,getText: function(id) {
		var bytes = this.getBytes(id);
		if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
	}
	,isLocal: function(id,type) {
		return true;
	}
	,load: function(handler) {
		handler(this);
	}
	,loadImage: function(id,handler) {
		handler(this.getImage(id));
	}
	,unload: function() {
	}
	,__class__: lime.AssetLibrary
};
var DefaultAssetLibrary = function() {
	this.type = new haxe.ds.StringMap();
	this.path = new haxe.ds.StringMap();
	lime.AssetLibrary.call(this);
	var id;
	id = "swf/assets.swf";
	this.path.set(id,id);
	this.type.set(id,"BINARY");
	id = "libraries/assets/12.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/15.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/18.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/21.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/24.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/27.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/3.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/30.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/33.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/36.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/39.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/42.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/45.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/48.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/51.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/54.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/57.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/6.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/60.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/9.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "libraries/assets/assets.dat";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "libraries/assets.json";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	var assetsPrefix = ApplicationMain.config.assetsPrefix;
	if(assetsPrefix != null) {
		var $it0 = this.path.keys();
		while( $it0.hasNext() ) {
			var k = $it0.next();
			var value = assetsPrefix + this.path.get(k);
			this.path.set(k,value);
		}
	}
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = ["DefaultAssetLibrary"];
DefaultAssetLibrary.__super__ = lime.AssetLibrary;
DefaultAssetLibrary.prototype = $extend(lime.AssetLibrary.prototype,{
	exists: function(id,type) {
		var requestedType;
		if(type != null) requestedType = js.Boot.__cast(type , String); else requestedType = null;
		var assetType = this.type.get(id);
		if(assetType != null) {
			if(assetType == requestedType || (requestedType == "SOUND" || requestedType == "MUSIC") && (assetType == "MUSIC" || assetType == "SOUND")) return true;
			if(requestedType == "BINARY" || requestedType == null || assetType == "BINARY" && requestedType == "TEXT") return true;
		}
		return false;
	}
	,getBytes: function(id) {
		var bytes = null;
		var loader;
		var key = this.path.get(id);
		loader = lime.app.Preloader.loaders.get(key);
		if(loader == null) return null;
		var data = loader.data;
		if(typeof(data) == "string") {
			bytes = new lime.utils.ByteArray();
			bytes.writeUTFBytes(data);
		} else if(js.Boot.__instanceof(data,lime.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes;
		} else return null;
	}
	,getImage: function(id) {
		return lime.graphics.Image.fromImageElement((function($this) {
			var $r;
			var key = $this.path.get(id);
			$r = lime.app.Preloader.images.get(key);
			return $r;
		}(this)));
	}
	,getText: function(id) {
		var bytes = null;
		var loader;
		var key = this.path.get(id);
		loader = lime.app.Preloader.loaders.get(key);
		if(loader == null) return null;
		var data = loader.data;
		if(typeof(data) == "string") return data; else if(js.Boot.__instanceof(data,lime.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes.readUTFBytes(bytes.length);
		} else return null;
	}
	,isLocal: function(id,type) {
		var requestedType;
		if(type != null) requestedType = js.Boot.__cast(type , String); else requestedType = null;
		return true;
	}
	,loadImage: function(id,handler) {
		if(this.path.exists(id)) {
			var image = new Image();
			image.onload = function(_) {
				handler(lime.graphics.Image.fromImageElement(image));
			};
			image.src = this.path.get(id);
		} else handler(this.getImage(id));
	}
	,__class__: DefaultAssetLibrary
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,__class__: EReg
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
};
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var $it0 = $iterator(it)();
		while( $it0.hasNext() ) {
			var _ = $it0.next();
			n++;
		}
	} else {
		var $it1 = $iterator(it)();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(pred(x)) n++;
		}
	}
	return n;
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,__class__: List
};
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
Math.__name__ = ["Math"];
openfl.display.MovieClip = function() {
	openfl.display.Sprite.call(this);
	this.__currentFrame = 0;
	this.__currentLabels = [];
	this.__totalFrames = 0;
	this.enabled = true;
};
$hxClasses["openfl.display.MovieClip"] = openfl.display.MovieClip;
openfl.display.MovieClip.__name__ = ["openfl","display","MovieClip"];
openfl.display.MovieClip.__super__ = openfl.display.Sprite;
openfl.display.MovieClip.prototype = $extend(openfl.display.Sprite.prototype,{
	__class__: openfl.display.MovieClip
});
var format = {};
format.swf = {};
format.swf.lite = {};
format.swf.lite.MovieClip = function(swf,symbol) {
	openfl.display.MovieClip.call(this);
	this.swf = swf;
	this.symbol = symbol;
	if(!format.swf.lite.MovieClip.initialized) {
		format.swf.lite.MovieClip.clips = new Array();
		format.swf.lite.MovieClip.initialized = true;
	}
	this.__currentFrame = 1;
	this.__totalFrames = symbol.frames.length;
	this.update();
	if(this.__totalFrames > 1) {
		openfl.Lib.current.stage.addEventListener(openfl.events.Event.ENTER_FRAME,format.swf.lite.MovieClip.stage_onEnterFrame);
		this.play();
	}
};
$hxClasses["format.swf.lite.MovieClip"] = format.swf.lite.MovieClip;
format.swf.lite.MovieClip.__name__ = ["format","swf","lite","MovieClip"];
format.swf.lite.MovieClip.clips = null;
format.swf.lite.MovieClip.initialized = null;
format.swf.lite.MovieClip.stage_onEnterFrame = function(event) {
	var _g = 0;
	var _g1 = format.swf.lite.MovieClip.clips;
	while(_g < _g1.length) {
		var clip = _g1[_g];
		++_g;
		clip.enterFrame();
	}
};
format.swf.lite.MovieClip.__super__ = openfl.display.MovieClip;
format.swf.lite.MovieClip.prototype = $extend(openfl.display.MovieClip.prototype,{
	createShape: function(symbol) {
		var shape = new openfl.display.Shape();
		var graphics = shape.get_graphics();
		var _g = 0;
		var _g1 = symbol.commands;
		while(_g < _g1.length) {
			var command = _g1[_g];
			++_g;
			switch(command[1]) {
			case 1:
				var alpha = command[3];
				var color = command[2];
				graphics.beginFill(color,alpha);
				break;
			case 0:
				var smooth = command[5];
				var repeat = command[4];
				var matrix = command[3];
				var bitmapID = command[2];
				var bitmap = this.swf.symbols.get(bitmapID);
				if(bitmap != null && bitmap.path != "") {
					var bitmapData = openfl.Assets.getBitmapData(bitmap.path);
					graphics.beginBitmapFill(bitmapData,matrix,repeat,smooth);
				}
				break;
			case 2:
				var focalPointRatio = command[9];
				var interpolationMethod = command[8];
				var spreadMethod = command[7];
				var matrix1 = command[6];
				var ratios = command[5];
				var alphas = command[4];
				var colors = command[3];
				var fillType = command[2];
				graphics.beginGradientFill(fillType,colors,alphas,ratios,matrix1,spreadMethod,interpolationMethod,focalPointRatio);
				break;
			case 3:
				var anchorY = command[5];
				var anchorX = command[4];
				var controlY = command[3];
				var controlX = command[2];
				graphics.curveTo(controlX,controlY,anchorX,anchorY);
				break;
			case 4:
				graphics.endFill();
				break;
			case 5:
				var miterLimit = command[9];
				var joints = command[8];
				var caps = command[7];
				var scaleMode = command[6];
				var pixelHinting = command[5];
				var alpha1 = command[4];
				var color1 = command[3];
				var thickness = command[2];
				if(thickness != null) graphics.lineStyle(thickness,color1,alpha1,pixelHinting,scaleMode,caps,joints,miterLimit); else graphics.lineStyle();
				break;
			case 6:
				var y = command[3];
				var x = command[2];
				graphics.lineTo(x,y);
				break;
			case 7:
				var y1 = command[3];
				var x1 = command[2];
				graphics.moveTo(x1,y1);
				break;
			}
		}
		return shape;
	}
	,enterFrame: function() {
		if(this.lastUpdate == this.__currentFrame) {
			this.__currentFrame++;
			if(this.__currentFrame > this.__totalFrames) this.__currentFrame = 1;
		}
		this.update();
	}
	,placeObject: function(displayObject,frameObject) {
		if(frameObject.name != null) displayObject.set_name(frameObject.name);
		if(frameObject.matrix != null) {
			displayObject.get_transform().set_matrix(frameObject.matrix);
			if(js.Boot.__instanceof(displayObject,format.swf.lite.DynamicTextField)) {
				var _g = displayObject;
				_g.set_x(_g.get_x() + displayObject.symbol.x);
				var _g1 = displayObject;
				_g1.set_y(_g1.get_y() + displayObject.symbol.y);
			}
		}
		if(frameObject.colorTransform != null) displayObject.get_transform().set_colorTransform(frameObject.colorTransform);
		if(frameObject.filters != null) {
			var filters = [];
			var _g2 = 0;
			var _g11 = frameObject.filters;
			while(_g2 < _g11.length) {
				var filter = _g11[_g2];
				++_g2;
				switch(filter[1]) {
				case 0:
					var quality = filter[4];
					var blurY = filter[3];
					var blurX = filter[2];
					filters.push(new openfl.filters.BlurFilter(blurX,blurY,quality));
					break;
				case 1:
					var matrix = filter[2];
					filters.push(new openfl.filters.ColorMatrixFilter(matrix));
					break;
				case 2:
					var hideObject = filter[12];
					var knockout = filter[11];
					var inner = filter[10];
					var quality1 = filter[9];
					var strength = filter[8];
					var blurY1 = filter[7];
					var blurX1 = filter[6];
					var alpha = filter[5];
					var color = filter[4];
					var angle = filter[3];
					var distance = filter[2];
					filters.push(new openfl.filters.DropShadowFilter(distance,angle,color,alpha,blurX1,blurY1,strength,quality1,inner,knockout,hideObject));
					break;
				case 3:
					var knockout1 = filter[9];
					var inner1 = filter[8];
					var quality2 = filter[7];
					var strength1 = filter[6];
					var blurY2 = filter[5];
					var blurX2 = filter[4];
					var alpha1 = filter[3];
					var color1 = filter[2];
					filters.push(new openfl.filters.GlowFilter(color1,alpha1,blurX2,blurY2,strength1,quality2,inner1,knockout1));
					break;
				}
			}
			displayObject.set_filters(filters);
		}
		Reflect.setField(this,displayObject.get_name(),displayObject);
	}
	,play: function() {
		if(!this.playing && this.__totalFrames > 1) {
			this.playing = true;
			format.swf.lite.MovieClip.clips.push(this);
		}
	}
	,renderFrame: function(index) {
		var frame = this.symbol.frames[index];
		var mask = null;
		var maskObject = null;
		var _g = 0;
		var _g1 = frame.objects;
		while(_g < _g1.length) {
			var object = _g1[_g];
			++_g;
			if(this.swf.symbols.exists(object.id)) {
				var symbol = this.swf.symbols.get(object.id);
				var displayObject = null;
				if(js.Boot.__instanceof(symbol,format.swf.lite.symbols.SpriteSymbol)) displayObject = new format.swf.lite.MovieClip(this.swf,symbol); else if(js.Boot.__instanceof(symbol,format.swf.lite.symbols.ShapeSymbol)) displayObject = this.createShape(symbol); else if(js.Boot.__instanceof(symbol,format.swf.lite.symbols.BitmapSymbol)) displayObject = new openfl.display.Bitmap(openfl.Assets.getBitmapData((js.Boot.__cast(symbol , format.swf.lite.symbols.BitmapSymbol)).path),openfl.display.PixelSnapping.AUTO,true); else if(js.Boot.__instanceof(symbol,format.swf.lite.symbols.DynamicTextSymbol)) displayObject = new format.swf.lite.DynamicTextField(this.swf,symbol); else if(js.Boot.__instanceof(symbol,format.swf.lite.symbols.StaticTextSymbol)) displayObject = new format.swf.lite.StaticTextField(this.swf,symbol);
				if(displayObject != null) {
					this.placeObject(displayObject,object);
					if(mask != null) {
						if(mask.clipDepth < object.depth) mask = null; else displayObject.set_mask(maskObject);
					} else displayObject.set_mask(null);
					if(object.clipDepth != 0) {
						mask = object;
						displayObject.set_visible(false);
						maskObject = displayObject;
					}
					this.addChild(displayObject);
				}
			}
		}
	}
	,update: function() {
		if(this.__currentFrame != this.lastUpdate) {
			var _g1 = 0;
			var _g = this.get_numChildren();
			while(_g1 < _g) {
				var i = _g1++;
				var child = this.getChildAt(0);
				if(js.Boot.__instanceof(child,format.swf.lite.MovieClip)) child.stop();
				this.removeChildAt(0);
			}
			var frameIndex = this.__currentFrame - 1;
			if(frameIndex > -1) this.renderFrame(frameIndex);
		}
		this.lastUpdate = this.__currentFrame;
	}
	,__class__: format.swf.lite.MovieClip
});
var Mc_Assets = function() {
	if(!format.swf.lite.SWFLite.instances.exists("libraries/assets/assets.dat")) {
		var value = format.swf.lite.SWFLite.unserialize(openfl.Assets.getText("libraries/assets/assets.dat"));
		format.swf.lite.SWFLite.instances.set("libraries/assets/assets.dat",value);
	}
	var swfLite = format.swf.lite.SWFLite.instances.get("libraries/assets/assets.dat");
	var symbol = swfLite.symbols.get(63);
	format.swf.lite.MovieClip.call(this,swfLite,symbol);
};
$hxClasses["Mc_Assets"] = Mc_Assets;
Mc_Assets.__name__ = ["Mc_Assets"];
Mc_Assets.__super__ = format.swf.lite.MovieClip;
Mc_Assets.prototype = $extend(format.swf.lite.MovieClip.prototype,{
	__class__: Mc_Assets
});
var NMEPreloader = function() {
	openfl.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 7;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 2;
	this.outline = new openfl.display.Sprite();
	this.outline.get_graphics().beginFill(color,0.07);
	this.outline.get_graphics().drawRect(0,0,width,height);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new openfl.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = openfl.display.Sprite;
NMEPreloader.prototype = $extend(openfl.display.Sprite.prototype,{
	getBackgroundColor: function() {
		return 0;
	}
	,getHeight: function() {
		var height = 0;
		if(height > 0) return height; else return openfl.Lib.current.stage.stageHeight;
	}
	,getWidth: function() {
		var width = 0;
		if(width > 0) return width; else return openfl.Lib.current.stage.stageWidth;
	}
	,onInit: function() {
	}
	,onLoaded: function() {
		this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
	}
	,onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded = 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,__class__: NMEPreloader
});
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
};
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	add: function(x) {
		this.b += Std.string(x);
	}
	,addSub: function(s,pos,len) {
		if(len == null) this.b += HxOverrides.substr(s,pos,null); else this.b += HxOverrides.substr(s,pos,len);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&quot;").join("\"").split("&#039;").join("'").split("&amp;").join("&");
};
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
};
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
};
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	HxOverrides.remove(a,"__name__");
	HxOverrides.remove(a,"__interfaces__");
	HxOverrides.remove(a,"__properties__");
	HxOverrides.remove(a,"__super__");
	HxOverrides.remove(a,"prototype");
	return a;
};
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = js.Boot.getClass(v);
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
var XmlType = $hxClasses["XmlType"] = { __ename__ : ["XmlType"], __constructs__ : [] };
var Xml = function() {
};
$hxClasses["Xml"] = Xml;
Xml.__name__ = ["Xml"];
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.ProcessingInstruction = null;
Xml.Document = null;
Xml.parse = function(str) {
	return haxe.xml.Parser.parse(str);
};
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new haxe.ds.StringMap();
	r.set_nodeName(name);
	return r;
};
Xml.createPCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.set_nodeValue(data);
	return r;
};
Xml.createCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.set_nodeValue(data);
	return r;
};
Xml.createComment = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.set_nodeValue(data);
	return r;
};
Xml.createDocType = function(data) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.set_nodeValue(data);
	return r;
};
Xml.createProcessingInstruction = function(data) {
	var r = new Xml();
	r.nodeType = Xml.ProcessingInstruction;
	r.set_nodeValue(data);
	return r;
};
Xml.createDocument = function() {
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
};
Xml.prototype = {
	get_nodeName: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName;
	}
	,set_nodeName: function(n) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName = n;
	}
	,set_nodeValue: function(v) {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue = v;
	}
	,set: function(att,value) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		this._attributes.set(att,value);
	}
	,exists: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.exists(att);
	}
	,addChild: function(x) {
		if(this._children == null) throw "bad nodetype";
		if(x._parent != null) HxOverrides.remove(x._parent._children,x);
		x._parent = this;
		this._children.push(x);
	}
	,__class__: Xml
	,__properties__: {set_nodeValue:"set_nodeValue",set_nodeName:"set_nodeName",get_nodeName:"get_nodeName"}
};
var com = {};
com.imagination = {};
com.imagination.texturePacker = {};
com.imagination.texturePacker.api = {};
com.imagination.texturePacker.api.IAtlasPackage = function() { };
$hxClasses["com.imagination.texturePacker.api.IAtlasPackage"] = com.imagination.texturePacker.api.IAtlasPackage;
com.imagination.texturePacker.api.IAtlasPackage.__name__ = ["com","imagination","texturePacker","api","IAtlasPackage"];
com.imagination.texturePacker.api.IAtlasPackage.prototype = {
	__class__: com.imagination.texturePacker.api.IAtlasPackage
};
com.imagination.texturePacker.api.ITexturePacker = function() { };
$hxClasses["com.imagination.texturePacker.api.ITexturePacker"] = com.imagination.texturePacker.api.ITexturePacker;
com.imagination.texturePacker.api.ITexturePacker.__name__ = ["com","imagination","texturePacker","api","ITexturePacker"];
com.imagination.texturePacker.api.placement = {};
com.imagination.texturePacker.api.placement.IPlacement = function() { };
$hxClasses["com.imagination.texturePacker.api.placement.IPlacement"] = com.imagination.texturePacker.api.placement.IPlacement;
com.imagination.texturePacker.api.placement.IPlacement.__name__ = ["com","imagination","texturePacker","api","placement","IPlacement"];
com.imagination.texturePacker.api.placement.IPlacement.prototype = {
	__class__: com.imagination.texturePacker.api.placement.IPlacement
};
com.imagination.texturePacker.api.sheet = {};
com.imagination.texturePacker.api.sheet.ISheet = function() { };
$hxClasses["com.imagination.texturePacker.api.sheet.ISheet"] = com.imagination.texturePacker.api.sheet.ISheet;
com.imagination.texturePacker.api.sheet.ISheet.__name__ = ["com","imagination","texturePacker","api","sheet","ISheet"];
com.imagination.texturePacker.api.sheet.ISheet.prototype = {
	__class__: com.imagination.texturePacker.api.sheet.ISheet
};
com.imagination.texturePacker.impl = {};
com.imagination.texturePacker.impl.AtlasPackage = function(bmdWidth,bmdHeight,xmlString,n) {
	this._next = n;
	this._bitmapData = new openfl.display.BitmapData(bmdWidth,bmdHeight,true,2236962);
	this._xml = Xml.parse(xmlString);
};
$hxClasses["com.imagination.texturePacker.impl.AtlasPackage"] = com.imagination.texturePacker.impl.AtlasPackage;
com.imagination.texturePacker.impl.AtlasPackage.__name__ = ["com","imagination","texturePacker","impl","AtlasPackage"];
com.imagination.texturePacker.impl.AtlasPackage.__interfaces__ = [com.imagination.texturePacker.api.IAtlasPackage];
com.imagination.texturePacker.impl.AtlasPackage.prototype = {
	get_bitmapData: function() {
		return this._bitmapData;
	}
	,get_next: function() {
		return this._next;
	}
	,__class__: com.imagination.texturePacker.impl.AtlasPackage
	,__properties__: {get_next:"get_next",get_bitmapData:"get_bitmapData"}
};
openfl.geom = {};
openfl.geom.Point = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
$hxClasses["openfl.geom.Point"] = openfl.geom.Point;
openfl.geom.Point.__name__ = ["openfl","geom","Point"];
openfl.geom.Point.prototype = {
	clone: function() {
		return new openfl.geom.Point(this.x,this.y);
	}
	,setTo: function(xa,ya) {
		this.x = xa;
		this.y = ya;
	}
	,__toLimeVector2: function() {
		return new lime.math.Vector2(this.x,this.y);
	}
	,__class__: openfl.geom.Point
};
com.imagination.texturePacker.impl.TexturePacker = function() {
	this.sources = (function($this) {
		var $r;
		var this1;
		this1 = new openfl.VectorData();
		{
			var this2;
			this2 = new Array(0);
			this1.data = this2;
		}
		this1.length = 0;
		this1.fixed = false;
		$r = this1;
		return $r;
	}(this));
};
$hxClasses["com.imagination.texturePacker.impl.TexturePacker"] = com.imagination.texturePacker.impl.TexturePacker;
com.imagination.texturePacker.impl.TexturePacker.__name__ = ["com","imagination","texturePacker","impl","TexturePacker"];
com.imagination.texturePacker.impl.TexturePacker.__interfaces__ = [com.imagination.texturePacker.api.ITexturePacker];
com.imagination.texturePacker.impl.TexturePacker.prototype = {
	add: function(source) {
		var this1 = this.sources;
		if(!this1.fixed) {
			this1.length++;
			if(this1.data.length < this1.length) {
				var data;
				var this2;
				this2 = new Array(this1.data.length + 10);
				data = this2;
				haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,data,0,this1.data.length);
				this1.data = data;
			}
			this1.data[this1.length - 1] = source;
		}
		this1.length;
	}
	,pack: function() {
		var sheet = new com.imagination.texturePacker.impl.sheet.Sheet();
		var _g1 = 0;
		var _g = this.sources.length;
		while(_g1 < _g) {
			var i = _g1++;
			sheet.add(this.sources.data[i]);
		}
		return sheet.pack();
	}
	,__class__: com.imagination.texturePacker.impl.TexturePacker
};
com.imagination.texturePacker.impl.math = {};
com.imagination.texturePacker.impl.math.PowerOf2 = function() { };
$hxClasses["com.imagination.texturePacker.impl.math.PowerOf2"] = com.imagination.texturePacker.impl.math.PowerOf2;
com.imagination.texturePacker.impl.math.PowerOf2.__name__ = ["com","imagination","texturePacker","impl","math","PowerOf2"];
com.imagination.texturePacker.impl.math.PowerOf2.next = function(value) {
	var p = 1;
	while((function($this) {
		var $r;
		var aNeg = value < 0;
		var bNeg = p < 0;
		$r = aNeg != bNeg?aNeg:value > p;
		return $r;
	}(this))) p = p << 1;
	return p;
};
com.imagination.texturePacker.impl.placement = {};
com.imagination.texturePacker.impl.placement.Placement = function(areaRect) {
	this.areaRect = areaRect;
};
$hxClasses["com.imagination.texturePacker.impl.placement.Placement"] = com.imagination.texturePacker.impl.placement.Placement;
com.imagination.texturePacker.impl.placement.Placement.__name__ = ["com","imagination","texturePacker","impl","placement","Placement"];
com.imagination.texturePacker.impl.placement.Placement.__interfaces__ = [com.imagination.texturePacker.api.placement.IPlacement];
com.imagination.texturePacker.impl.placement.Placement.prototype = {
	get_x: function() {
		return this.areaRect.x;
	}
	,get_y: function() {
		return this.areaRect.y;
	}
	,get_width: function() {
		return this.areaRect.width;
	}
	,get_height: function() {
		return this.areaRect.height;
	}
	,place: function(source) {
		var _w;
		var _h;
		if(js.Boot.__instanceof(source,openfl.display.DisplayObject)) {
			_w = (js.Boot.__cast(source , openfl.display.DisplayObject)).get_width();
			_h = (js.Boot.__cast(source , openfl.display.DisplayObject)).get_height();
		} else if(js.Boot.__instanceof(source,openfl.display.BitmapData)) {
			_w = (js.Boot.__cast(source , openfl.display.BitmapData)).width;
			_h = (js.Boot.__cast(source , openfl.display.BitmapData)).height;
		} else {
			_w = Reflect.getProperty(source,"width");
			_h = Reflect.getProperty(source,"height");
		}
		var objectRect;
		if(js.Boot.__instanceof(source,openfl.display.Shape)) objectRect = new openfl.geom.Rectangle(0,0,_w,_h); else objectRect = Reflect.getProperty(source,"rect");
		if(objectRect == null) objectRect = new openfl.geom.Rectangle(0,0,_w,_h);
		if(objectRect.width < this.get_width() && objectRect.height < this.get_height()) return new openfl.geom.Rectangle(this.get_x(),this.get_y(),_w,_h); else return null;
	}
	,__class__: com.imagination.texturePacker.impl.placement.Placement
	,__properties__: {get_height:"get_height",get_width:"get_width",get_y:"get_y",get_x:"get_x"}
};
openfl.utils = {};
openfl.utils.Dictionary = function(weakKeys) {
	if(weakKeys == null) weakKeys = false;
};
$hxClasses["openfl.utils.Dictionary"] = openfl.utils.Dictionary;
openfl.utils.Dictionary.__name__ = ["openfl","utils","Dictionary"];
openfl.utils.Dictionary.prototype = {
	__class__: openfl.utils.Dictionary
};
com.imagination.texturePacker.impl.sheet = {};
com.imagination.texturePacker.impl.sheet.IBitmapDrawableObject = function(source) {
	this.source = source;
	this._width = Reflect.getProperty(source,"width");
	this._height = Reflect.getProperty(source,"height");
	if(Reflect.getProperty(source,"name") != null) this._name = Reflect.getProperty(source,"name");
	this._bounds = new openfl.geom.Rectangle(0,0,this._width,this._height);
	if(js.Boot.__instanceof(source,openfl.display.DisplayObject)) {
		var d;
		d = js.Boot.__cast(source , openfl.display.DisplayObject);
		this._bounds = d.getBounds(d);
	}
	if(Object.prototype.hasOwnProperty.call(source,"getBounds")) {
		var getBoundsFunc = Reflect.getProperty(source,"getBounds");
		this._bounds = getBoundsFunc(source);
	}
	if(Reflect.getProperty(com.imagination.texturePacker.impl.sheet.IBitmapDrawableObject.ref,"source") == null) {
		if(this._name != null) Reflect.setProperty(com.imagination.texturePacker.impl.sheet.IBitmapDrawableObject.ref,"source",this._name); else {
			var value = Math.floor(Math.random() * 100000000);
			Reflect.setProperty(com.imagination.texturePacker.impl.sheet.IBitmapDrawableObject.ref,"source",value);
		}
	}
};
$hxClasses["com.imagination.texturePacker.impl.sheet.IBitmapDrawableObject"] = com.imagination.texturePacker.impl.sheet.IBitmapDrawableObject;
com.imagination.texturePacker.impl.sheet.IBitmapDrawableObject.__name__ = ["com","imagination","texturePacker","impl","sheet","IBitmapDrawableObject"];
com.imagination.texturePacker.impl.sheet.IBitmapDrawableObject.prototype = {
	get_width: function() {
		return this._width;
	}
	,get_height: function() {
		return this._height;
	}
	,get_id: function() {
		return Reflect.getProperty(com.imagination.texturePacker.impl.sheet.IBitmapDrawableObject.ref,"source");
	}
	,get_bounds: function() {
		return this._bounds;
	}
	,__class__: com.imagination.texturePacker.impl.sheet.IBitmapDrawableObject
	,__properties__: {get_bounds:"get_bounds",get_id:"get_id",get_height:"get_height",get_width:"get_width"}
};
com.imagination.texturePacker.impl.sheet.Sheet = function() {
	this.bitmapSize = new openfl.geom.Point();
	this.placements = (function($this) {
		var $r;
		var this1;
		this1 = new openfl.VectorData();
		{
			var this2;
			this2 = new Array(0);
			this1.data = this2;
		}
		this1.length = 0;
		this1.fixed = false;
		$r = this1;
		return $r;
	}(this));
	this.sources = (function($this) {
		var $r;
		var this1;
		this1 = new openfl.VectorData();
		{
			var this2;
			this2 = new Array(0);
			this1.data = this2;
		}
		this1.length = 0;
		this1.fixed = false;
		$r = this1;
		return $r;
	}(this));
	this.minRect = new openfl.geom.Rectangle();
	this.bitmapSize.setTo(com.imagination.texturePacker.impl.TexturePacker.TARGET_TEXTURE_SIZE.x,com.imagination.texturePacker.impl.TexturePacker.TARGET_TEXTURE_SIZE.y);
	this.createPlacement();
};
$hxClasses["com.imagination.texturePacker.impl.sheet.Sheet"] = com.imagination.texturePacker.impl.sheet.Sheet;
com.imagination.texturePacker.impl.sheet.Sheet.__name__ = ["com","imagination","texturePacker","impl","sheet","Sheet"];
com.imagination.texturePacker.impl.sheet.Sheet.__interfaces__ = [com.imagination.texturePacker.api.sheet.ISheet];
com.imagination.texturePacker.impl.sheet.Sheet.prototype = {
	createPlacement: function() {
		var this1 = this.placements;
		var x = new com.imagination.texturePacker.impl.placement.Placement(new openfl.geom.Rectangle(com.imagination.texturePacker.impl.TexturePacker.framePadding,com.imagination.texturePacker.impl.TexturePacker.framePadding,this.bitmapSize.x - com.imagination.texturePacker.impl.TexturePacker.framePadding * 2,this.bitmapSize.y - com.imagination.texturePacker.impl.TexturePacker.framePadding * 2));
		if(!this1.fixed) {
			this1.length++;
			if(this1.data.length < this1.length) {
				var data;
				var this2;
				this2 = new Array(this1.data.length + 10);
				data = this2;
				haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,data,0,this1.data.length);
				this1.data = data;
			}
			this1.data[this1.length - 1] = x;
		}
		this1.length;
	}
	,add: function(source) {
		var this1 = this.sources;
		var x = new com.imagination.texturePacker.impl.sheet.IBitmapDrawableObject(source);
		if(!this1.fixed) {
			this1.length++;
			if(this1.data.length < this1.length) {
				var data;
				var this2;
				this2 = new Array(this1.data.length + 10);
				data = this2;
				haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,data,0,this1.data.length);
				this1.data = data;
			}
			this1.data[this1.length - 1] = x;
		}
		this1.length;
	}
	,pack: function() {
		var unsuccessfullyItems;
		var this1;
		this1 = new openfl.VectorData();
		var this2;
		this2 = new Array(0);
		this1.data = this2;
		this1.length = 0;
		this1.fixed = false;
		unsuccessfullyItems = this1;
		var this3 = this.sources;
		var array = haxe.ds._Vector.Vector_Impl_.toArray(this3.data);
		array.sort($bind(this,this.SortSourceHeight));
		var vec;
		var this4;
		this4 = new Array(array.length);
		vec = this4;
		var _g1 = 0;
		var _g = array.length;
		while(_g1 < _g) {
			var i = _g1++;
			vec[i] = array[i];
		}
		this3.data = vec;
		this.checkSize();
		if(com.imagination.texturePacker.impl.TexturePacker.debug) this.tempBmd = new openfl.display.BitmapData(this.bitmapSize.x | 0,this.bitmapSize.y | 0,true,570490624); else this.tempBmd = new openfl.display.BitmapData(this.bitmapSize.x | 0,this.bitmapSize.y | 0,true,0);
		this.xmlString = "";
		this.xmlString += "<TextureAtlas imagePath=\"\">";
		var _g11 = 0;
		var _g2 = this.sources.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			var unsuccessfully = this.place(this.sources.data[i1]);
			if(unsuccessfully != null) {
				if(!unsuccessfullyItems.fixed) {
					unsuccessfullyItems.length++;
					if(unsuccessfullyItems.data.length < unsuccessfullyItems.length) {
						var data;
						var this5;
						this5 = new Array(unsuccessfullyItems.data.length + 10);
						data = this5;
						haxe.ds._Vector.Vector_Impl_.blit(unsuccessfullyItems.data,0,data,0,unsuccessfullyItems.data.length);
						unsuccessfullyItems.data = data;
					}
					unsuccessfullyItems.data[unsuccessfullyItems.length - 1] = unsuccessfully;
				}
				unsuccessfullyItems.length;
			}
		}
		this.xmlString += "</TextureAtlas>";
		var bmdWidth = com.imagination.texturePacker.impl.math.PowerOf2.next(this.minRect.width | 0);
		var bmdHeight = com.imagination.texturePacker.impl.math.PowerOf2.next(this.minRect.height | 0);
		this.atlasPackage = new com.imagination.texturePacker.impl.AtlasPackage(bmdWidth,bmdHeight,this.xmlString,this.atlasPackage);
		this.atlasPackage.get_bitmapData().copyPixels(this.tempBmd,this.atlasPackage.get_bitmapData().rect,this.atlasPackage.get_bitmapData().rect.get_topLeft());
		this.tempBmd.dispose();
		this.tempBmd = null;
		if(unsuccessfullyItems.length > 0) {
			var this6;
			this6 = new openfl.VectorData();
			var this7;
			this7 = new Array(0);
			this6.data = this7;
			this6.length = 0;
			this6.fixed = false;
			this.placements = this6;
			this.sources = unsuccessfullyItems;
			this.minRect = new openfl.geom.Rectangle();
			this.createPlacement();
			this.pack();
		}
		return this.atlasPackage;
	}
	,checkSize: function() {
		if(com.imagination.texturePacker.impl.TexturePacker.AUTO_INCREASE_TEXTURE_SIZE == false) return;
		var _g1 = 0;
		var _g = this.sources.length;
		while(_g1 < _g) {
			var j = _g1++;
			var newMax = new openfl.geom.Point(Std["int"](this.sources.data[j].get_width()),Std["int"](this.sources.data[j].get_height()));
			if(newMax.x > this.bitmapSize.x) {
				var this1 = com.imagination.texturePacker.impl.math.PowerOf2.next(newMax.x | 0);
				var $int = this1;
				if($int < 0) newMax.x = 4294967296.0 + $int; else newMax.x = $int + 0.0;
				this.bitmapSize.x = newMax.x;
			}
			if(newMax.y > this.bitmapSize.y) {
				var this2 = com.imagination.texturePacker.impl.math.PowerOf2.next(newMax.y | 0);
				var int1 = this2;
				if(int1 < 0) newMax.y = 4294967296.0 + int1; else newMax.y = int1 + 0.0;
				this.bitmapSize.y = newMax.y;
			}
		}
	}
	,SortSourceHeight: function(itemA,itemB) {
		if(itemA.get_height() < itemB.get_height()) return 1; else if(itemA.get_height() > itemB.get_height()) return -1; else return 0;
	}
	,place: function(sourceObject) {
		var bounds = sourceObject.get_bounds();
		if(js.Boot.__instanceof(sourceObject,openfl.display.DisplayObject)) {
			var sourceDisplayObject = sourceObject;
			bounds = sourceDisplayObject.getBounds(sourceDisplayObject.parent);
		}
		if(sourceObject.get_width() > sourceObject.get_height()) {
			var this1 = this.placements;
			var array = haxe.ds._Vector.Vector_Impl_.toArray(this1.data);
			array.sort($bind(this,this.SortWidth));
			var vec;
			var this2;
			this2 = new Array(array.length);
			vec = this2;
			var _g1 = 0;
			var _g = array.length;
			while(_g1 < _g) {
				var i = _g1++;
				vec[i] = array[i];
			}
			this1.data = vec;
		} else {
			var this3 = this.placements;
			var array1 = haxe.ds._Vector.Vector_Impl_.toArray(this3.data);
			array1.sort($bind(this,this.SortHeight));
			var vec1;
			var this4;
			this4 = new Array(array1.length);
			vec1 = this4;
			var _g11 = 0;
			var _g2 = array1.length;
			while(_g11 < _g2) {
				var i1 = _g11++;
				vec1[i1] = array1[i1];
			}
			this3.data = vec1;
		}
		var _g12 = 0;
		var _g3 = this.placements.length;
		while(_g12 < _g3) {
			var i2 = _g12++;
			var placement = this.placements.data[i2];
			var placementRect = placement.place(sourceObject.source);
			if(placementRect != null) {
				var matrix = new openfl.geom.Matrix();
				matrix.tx = placementRect.x - bounds.x;
				matrix.ty = placementRect.y - bounds.y;
				this.xmlString += "<SubTexture name=\"" + sourceObject.get_id() + "\" x=\"" + Math.round(placementRect.x) + "\" y=\"" + Math.round(placementRect.y) + "\" width=\"" + Math.round(placementRect.width) + "\" height=\"" + Math.round(placementRect.height) + "\" pivotX=\"" + Math.round(bounds.x) + "\" pivotY=\"" + Math.round(bounds.y) + "\"/>";
				if(this.minRect.width < Math.round(placementRect.x) + Math.round(placementRect.width + com.imagination.texturePacker.impl.TexturePacker.objectPadding)) this.minRect.width = Math.round(placementRect.x) + Math.round(placementRect.width + com.imagination.texturePacker.impl.TexturePacker.objectPadding);
				if(this.minRect.height < Math.round(placementRect.y) + Math.round(placementRect.height + com.imagination.texturePacker.impl.TexturePacker.objectPadding)) this.minRect.height = Math.round(placementRect.y) + Math.round(placementRect.height + com.imagination.texturePacker.impl.TexturePacker.objectPadding);
				if(com.imagination.texturePacker.impl.TexturePacker.debug) {
					var rect = new openfl.display.Shape();
					rect.get_graphics().lineStyle(3,-65536);
					rect.get_graphics().beginFill(16711680,0.1);
					rect.get_graphics().drawRect(Math.round(placementRect.x),Math.round(placementRect.y),Math.round(placementRect.width),Math.round(placementRect.height));
					this.tempBmd.draw(rect);
					rect = null;
				}
				this.tempBmd.draw(sourceObject.source,matrix,null,null,null,true);
				var this5 = this.placements;
				var pos = i2;
				var len = 1;
				if(pos < 0) pos += this5.length;
				if(pos + len > this5.length) len = this5.length - pos;
				if(len < 0) len = 0;
				var vectorData = new openfl.VectorData();
				vectorData.length = len;
				vectorData.fixed = false;
				var this6;
				this6 = new Array(len);
				vectorData.data = this6;
				haxe.ds._Vector.Vector_Impl_.blit(this5.data,pos,vectorData.data,0,len);
				if(len > 0) {
					this5.length -= len;
					haxe.ds._Vector.Vector_Impl_.blit(this5.data,pos + len,this5.data,pos,this5.length - pos);
				}
				vectorData;
				var this7 = this.placements;
				var x = new com.imagination.texturePacker.impl.placement.Placement(new openfl.geom.Rectangle(placement.get_x() + placementRect.width + com.imagination.texturePacker.impl.TexturePacker.objectPadding,placement.get_y(),placement.get_width() - placementRect.width - com.imagination.texturePacker.impl.TexturePacker.objectPadding,placementRect.height + com.imagination.texturePacker.impl.TexturePacker.objectPadding));
				if(!this7.fixed) {
					this7.length++;
					if(this7.data.length < this7.length) {
						var data;
						var this8;
						this8 = new Array(this7.data.length + 10);
						data = this8;
						haxe.ds._Vector.Vector_Impl_.blit(this7.data,0,data,0,this7.data.length);
						this7.data = data;
					}
					this7.data[this7.length - 1] = x;
				}
				this7.length;
				var this9 = this.placements;
				var x1 = new com.imagination.texturePacker.impl.placement.Placement(new openfl.geom.Rectangle(placement.get_x(),placement.get_y() + placementRect.height + com.imagination.texturePacker.impl.TexturePacker.objectPadding,placement.get_width(),placement.get_height() - placementRect.height - com.imagination.texturePacker.impl.TexturePacker.objectPadding));
				if(!this9.fixed) {
					this9.length++;
					if(this9.data.length < this9.length) {
						var data1;
						var this10;
						this10 = new Array(this9.data.length + 10);
						data1 = this10;
						haxe.ds._Vector.Vector_Impl_.blit(this9.data,0,data1,0,this9.data.length);
						this9.data = data1;
					}
					this9.data[this9.length - 1] = x1;
				}
				this9.length;
				return null;
			}
		}
		if(sourceObject.get_width() <= this.bitmapSize.x && sourceObject.get_height() <= this.bitmapSize.y) return sourceObject;
		return null;
	}
	,SortWidth: function(itemA,itemB) {
		if(itemA.get_width() < itemB.get_width()) return -1; else if(itemA.get_width() > itemB.get_width()) return 1; else return 0;
	}
	,SortHeight: function(itemA,itemB) {
		if(itemA.get_height() < itemB.get_height()) return -1; else if(itemA.get_height() > itemB.get_height()) return 1; else return 0;
	}
	,__class__: com.imagination.texturePacker.impl.sheet.Sheet
};
format.swf.exporters = {};
format.swf.exporters.core = {};
format.swf.exporters.core.FilterType = $hxClasses["format.swf.exporters.core.FilterType"] = { __ename__ : ["format","swf","exporters","core","FilterType"], __constructs__ : ["BlurFilter","ColorMatrixFilter","DropShadowFilter","GlowFilter"] };
format.swf.exporters.core.FilterType.BlurFilter = function(blurX,blurY,quality) { var $x = ["BlurFilter",0,blurX,blurY,quality]; $x.__enum__ = format.swf.exporters.core.FilterType; $x.toString = $estr; return $x; };
format.swf.exporters.core.FilterType.ColorMatrixFilter = function(matrix) { var $x = ["ColorMatrixFilter",1,matrix]; $x.__enum__ = format.swf.exporters.core.FilterType; $x.toString = $estr; return $x; };
format.swf.exporters.core.FilterType.DropShadowFilter = function(distance,angle,color,alpha,blurX,blurY,strength,quality,inner,knockout,hideObject) { var $x = ["DropShadowFilter",2,distance,angle,color,alpha,blurX,blurY,strength,quality,inner,knockout,hideObject]; $x.__enum__ = format.swf.exporters.core.FilterType; $x.toString = $estr; return $x; };
format.swf.exporters.core.FilterType.GlowFilter = function(color,alpha,blurX,blurY,strength,quality,inner,knockout) { var $x = ["GlowFilter",3,color,alpha,blurX,blurY,strength,quality,inner,knockout]; $x.__enum__ = format.swf.exporters.core.FilterType; $x.toString = $estr; return $x; };
format.swf.exporters.core.ShapeCommand = $hxClasses["format.swf.exporters.core.ShapeCommand"] = { __ename__ : ["format","swf","exporters","core","ShapeCommand"], __constructs__ : ["BeginBitmapFill","BeginFill","BeginGradientFill","CurveTo","EndFill","LineStyle","LineTo","MoveTo"] };
format.swf.exporters.core.ShapeCommand.BeginBitmapFill = function(bitmap,matrix,repeat,smooth) { var $x = ["BeginBitmapFill",0,bitmap,matrix,repeat,smooth]; $x.__enum__ = format.swf.exporters.core.ShapeCommand; $x.toString = $estr; return $x; };
format.swf.exporters.core.ShapeCommand.BeginFill = function(color,alpha) { var $x = ["BeginFill",1,color,alpha]; $x.__enum__ = format.swf.exporters.core.ShapeCommand; $x.toString = $estr; return $x; };
format.swf.exporters.core.ShapeCommand.BeginGradientFill = function(fillType,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) { var $x = ["BeginGradientFill",2,fillType,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio]; $x.__enum__ = format.swf.exporters.core.ShapeCommand; $x.toString = $estr; return $x; };
format.swf.exporters.core.ShapeCommand.CurveTo = function(controlX,controlY,anchorX,anchorY) { var $x = ["CurveTo",3,controlX,controlY,anchorX,anchorY]; $x.__enum__ = format.swf.exporters.core.ShapeCommand; $x.toString = $estr; return $x; };
format.swf.exporters.core.ShapeCommand.EndFill = ["EndFill",4];
format.swf.exporters.core.ShapeCommand.EndFill.toString = $estr;
format.swf.exporters.core.ShapeCommand.EndFill.__enum__ = format.swf.exporters.core.ShapeCommand;
format.swf.exporters.core.ShapeCommand.LineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) { var $x = ["LineStyle",5,thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit]; $x.__enum__ = format.swf.exporters.core.ShapeCommand; $x.toString = $estr; return $x; };
format.swf.exporters.core.ShapeCommand.LineTo = function(x,y) { var $x = ["LineTo",6,x,y]; $x.__enum__ = format.swf.exporters.core.ShapeCommand; $x.toString = $estr; return $x; };
format.swf.exporters.core.ShapeCommand.MoveTo = function(x,y) { var $x = ["MoveTo",7,x,y]; $x.__enum__ = format.swf.exporters.core.ShapeCommand; $x.toString = $estr; return $x; };
openfl.text = {};
openfl.text.TextField = function() {
	openfl.display.InteractiveObject.call(this);
	this.__caretIndex = -1;
	this.__graphics = new openfl.display.Graphics();
	this.__textEngine = new openfl._internal.text.TextEngine(this);
	this.__layoutDirty = true;
	this.__tabEnabled = true;
	if(openfl.text.TextField.__defaultTextFormat == null) {
		openfl.text.TextField.__defaultTextFormat = new openfl.text.TextFormat("Times New Roman",12,0,false,false,false,"","",openfl.text.TextFormatAlign.LEFT,0,0,0,0);
		openfl.text.TextField.__defaultTextFormat.blockIndent = 0;
		openfl.text.TextField.__defaultTextFormat.bullet = false;
		openfl.text.TextField.__defaultTextFormat.letterSpacing = 0;
		openfl.text.TextField.__defaultTextFormat.kerning = false;
	}
	this.__textFormat = openfl.text.TextField.__defaultTextFormat.clone();
	this.__textEngine.textFormatRanges.push(new openfl._internal.text.TextFormatRange(this.__textFormat,0,0));
	this.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.this_onMouseDown));
};
$hxClasses["openfl.text.TextField"] = openfl.text.TextField;
openfl.text.TextField.__name__ = ["openfl","text","TextField"];
openfl.text.TextField.__defaultTextFormat = null;
openfl.text.TextField.__super__ = openfl.display.InteractiveObject;
openfl.text.TextField.prototype = $extend(openfl.display.InteractiveObject.prototype,{
	getCharBoundaries: function(charIndex) {
		if(charIndex < 0 || charIndex > this.__textEngine.text.length - 1) return null;
		this.__updateLayout();
		var _g = 0;
		var _g1 = this.__textEngine.layoutGroups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			if(charIndex >= group.startIndex && charIndex <= group.endIndex) {
				var x = group.offsetX;
				var _g3 = 0;
				var _g2 = charIndex - group.startIndex;
				while(_g3 < _g2) {
					var i = _g3++;
					x += group.advances[i];
				}
				return new openfl.geom.Rectangle(x,group.offsetY,group.advances[charIndex - group.startIndex],group.ascent + group.descent);
			}
		}
		return null;
	}
	,replaceSelectedText: function(value) {
		if(value == "" && this.__selectionIndex == this.__caretIndex) return;
		var startIndex;
		if(this.__caretIndex < this.__selectionIndex) startIndex = this.__caretIndex; else startIndex = this.__selectionIndex;
		var endIndex;
		if(this.__caretIndex > this.__selectionIndex) endIndex = this.__caretIndex; else endIndex = this.__selectionIndex;
		this.replaceText(startIndex,endIndex,value);
		this.__caretIndex = startIndex + value.length;
		this.__selectionIndex = this.__caretIndex;
	}
	,replaceText: function(beginIndex,endIndex,newText) {
		if(endIndex < beginIndex || beginIndex < 0 || endIndex > this.__textEngine.text.length || newText == null) return;
		this.__textEngine.text = this.__textEngine.text.substring(0,beginIndex) + newText + this.__textEngine.text.substring(endIndex);
		var offset = newText.length - (endIndex - beginIndex);
		var i = 0;
		var range;
		while(i < this.__textEngine.textFormatRanges.length) {
			range = this.__textEngine.textFormatRanges[i];
			if(range.start <= beginIndex && range.end >= endIndex) {
				range.end += offset;
				i++;
			} else if(range.start >= beginIndex && range.end <= endIndex) {
				this.__textEngine.textFormatRanges.splice(i,1);
				offset -= range.end - range.start;
			} else if(range.start > beginIndex && range.start <= endIndex) {
				range.start += offset;
				i++;
			} else i++;
		}
		this.__dirty = true;
		this.__layoutDirty = true;
	}
	,__getBounds: function(rect,matrix) {
		this.__updateLayout();
		var bounds = openfl.geom.Rectangle.__temp;
		this.__textEngine.bounds.__transform(bounds,matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__getCursor: function() {
		if(this.__textEngine.selectable) return lime.ui.MouseCursor.TEXT; else return null;
	}
	,__getPosition: function(x,y) {
		this.__updateLayout();
		x += this.get_scrollH();
		var _g1 = 0;
		var _g = this.get_scrollV() - 1;
		while(_g1 < _g) {
			var i = _g1++;
			y += this.__textEngine.lineHeights[i];
		}
		if(y > this.__textEngine.textHeight) y = this.__textEngine.textHeight;
		var firstGroup = true;
		var group;
		var nextGroup;
		var _g11 = 0;
		var _g2 = this.__textEngine.layoutGroups.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			group = this.__textEngine.layoutGroups[i1];
			if(i1 < this.__textEngine.layoutGroups.length - 1) nextGroup = this.__textEngine.layoutGroups[i1 + 1]; else nextGroup = null;
			if(firstGroup) {
				if(y < group.offsetY) y = group.offsetY;
				if(x < group.offsetX) x = group.offsetX;
				firstGroup = false;
			}
			if(y >= group.offsetY && y <= group.offsetY + group.height || nextGroup == null) {
				if(x >= group.offsetX && x <= group.offsetX + group.width || (nextGroup == null || nextGroup.lineIndex != group.lineIndex)) {
					var advance = 0.0;
					var _g3 = 0;
					var _g21 = group.advances.length;
					while(_g3 < _g21) {
						var i2 = _g3++;
						advance += group.advances[i2];
						if(x <= group.offsetX + advance) {
							if(x <= group.offsetX + (advance - group.advances[i2]) + group.advances[i2] / 2) return group.startIndex + i2; else if(group.startIndex + i2 < group.endIndex) return group.startIndex + i2 + 1; else return group.endIndex;
						}
					}
					return group.endIndex;
				}
			}
		}
		return this.__textEngine.text.length;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled) return false;
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) return false;
		this.__getTransform();
		this.__updateLayout();
		var px = this.__worldTransform.__transformInverseX(x,y);
		var py = this.__worldTransform.__transformInverseY(x,y);
		if(this.__textEngine.bounds.contains(px,py)) {
			if(stack != null) stack.push(this);
			return true;
		}
		return false;
	}
	,__hitTestMask: function(x,y) {
		this.__getTransform();
		this.__updateLayout();
		var px = this.__worldTransform.__transformInverseX(x,y);
		var py = this.__worldTransform.__transformInverseY(x,y);
		if(this.__textEngine.bounds.contains(px,py)) return true;
		return false;
	}
	,__renderCairo: function(renderSession) {
		openfl._internal.renderer.cairo.CairoTextField.render(this,renderSession);
		openfl.display.InteractiveObject.prototype.__renderCairo.call(this,renderSession);
	}
	,__renderCanvas: function(renderSession) {
		openfl._internal.renderer.canvas.CanvasTextField.render(this,renderSession);
		if(this.__textEngine.antiAliasType == openfl.text.AntiAliasType.ADVANCED && this.__textEngine.gridFitType == openfl.text.GridFitType.PIXEL) {
			var smoothingEnabled = renderSession.context.imageSmoothingEnabled;
			if(smoothingEnabled) {
				renderSession.context.mozImageSmoothingEnabled = false;
				renderSession.context.msImageSmoothingEnabled = false;
				renderSession.context.imageSmoothingEnabled = false;
			}
			openfl.display.InteractiveObject.prototype.__renderCanvas.call(this,renderSession);
			if(smoothingEnabled) {
				renderSession.context.mozImageSmoothingEnabled = true;
				renderSession.context.msImageSmoothingEnabled = true;
				renderSession.context.imageSmoothingEnabled = true;
			}
		} else openfl.display.InteractiveObject.prototype.__renderCanvas.call(this,renderSession);
	}
	,__renderDOM: function(renderSession) {
		openfl._internal.renderer.dom.DOMTextField.render(this,renderSession);
	}
	,__renderGL: function(renderSession) {
		openfl._internal.renderer.canvas.CanvasTextField.render(this,renderSession);
		openfl._internal.renderer.opengl.GLRenderer.renderBitmap(this,renderSession,this.__textEngine.antiAliasType != openfl.text.AntiAliasType.ADVANCED || this.__textEngine.gridFitType != openfl.text.GridFitType.PIXEL);
	}
	,__startCursorTimer: function() {
		this.__cursorTimer = haxe.Timer.delay($bind(this,this.__startCursorTimer),600);
		this.__showCursor = !this.__showCursor;
		this.__dirty = true;
	}
	,__startTextInput: function() {
		if(this.__caretIndex < 0) {
			this.__caretIndex = this.__textEngine.text.length;
			this.__selectionIndex = this.__caretIndex;
		}
		if(this.stage != null) {
			this.stage.window.backend.setEnableTextEvents(true);
			if(!this.__inputEnabled) {
				this.stage.window.backend.setEnableTextEvents(true);
				if(!this.stage.window.onTextInput.has($bind(this,this.window_onTextInput))) {
					this.stage.window.onTextInput.add($bind(this,this.window_onTextInput));
					this.stage.window.onKeyDown.add($bind(this,this.window_onKeyDown));
				}
				this.__inputEnabled = true;
				this.__startCursorTimer();
			}
		}
	}
	,__stopCursorTimer: function() {
		if(this.__cursorTimer != null) {
			this.__cursorTimer.stop();
			this.__cursorTimer = null;
		}
		if(this.__showCursor) {
			this.__showCursor = false;
			this.__dirty = true;
		}
	}
	,__stopTextInput: function() {
		if(this.__inputEnabled && this.stage != null) {
			this.stage.window.backend.setEnableTextEvents(false);
			this.stage.window.onTextInput.remove($bind(this,this.window_onTextInput));
			this.stage.window.onKeyDown.remove($bind(this,this.window_onKeyDown));
			this.__inputEnabled = false;
			this.__stopCursorTimer();
		}
	}
	,__updateLayout: function() {
		if(this.__layoutDirty) {
			this.__textEngine.update();
			if(this.__textEngine.autoSize != openfl.text.TextFieldAutoSize.NONE) {
				var cacheWidth = this.__textEngine.width;
				var cacheHeight = this.__textEngine.height;
				var _g = this.__textEngine.autoSize;
				switch(_g[1]) {
				case 1:case 3:case 0:
					if(!this.__textEngine.wordWrap) this.__textEngine.width = this.__textEngine.textWidth + 4;
					this.__textEngine.height = this.__textEngine.textHeight + 4;
					break;
				default:
				}
				if(this.__textEngine.width != cacheWidth) {
					var _g1 = this.__textEngine.autoSize;
					switch(_g1[1]) {
					case 3:
						var _g11 = this;
						_g11.set_x(_g11.get_x() + (cacheWidth - this.__textEngine.width));
						break;
					case 0:
						var _g12 = this;
						_g12.set_x(_g12.get_x() + (cacheWidth - this.__textEngine.width) / 2);
						break;
					default:
					}
				}
				this.__textEngine.getBounds();
			}
			this.__layoutDirty = false;
		}
	}
	,set_border: function(value) {
		if(value != this.__textEngine.border) this.__dirty = true;
		return this.__textEngine.border = value;
	}
	,set_defaultTextFormat: function(value) {
		this.__textFormat.__merge(value);
		this.__layoutDirty = true;
		this.__dirty = true;
		return value;
	}
	,set_displayAsPassword: function(value) {
		if(value != this.__textEngine.displayAsPassword) {
			this.__dirty = true;
			this.__layoutDirty = true;
		}
		return this.__textEngine.displayAsPassword = value;
	}
	,set_embedFonts: function(value) {
		return this.__textEngine.embedFonts = value;
	}
	,get_height: function() {
		this.__updateLayout();
		return this.__textEngine.height;
	}
	,set_height: function(value) {
		if(this.get_scaleY() != 1 || value != this.__textEngine.height) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			this.__dirty = true;
			this.__layoutDirty = true;
		}
		this.set_scaleY(1);
		return this.__textEngine.height = value;
	}
	,get_htmlText: function() {
		return this.__textEngine.text;
	}
	,set_htmlText: function(value) {
		if(!this.__isHTML || this.__textEngine.text != value) {
			this.__dirty = true;
			this.__layoutDirty = true;
		}
		this.__isHTML = true;
		if(this.__div == null) {
			value = new EReg("<br>","g").replace(value,"\n");
			value = new EReg("<br/>","g").replace(value,"\n");
			var segments = value.split("<font");
			if(segments.length == 1) {
				value = new EReg("<.*?>","g").replace(value,"");
				if(this.__textEngine.textFormatRanges.length > 1) this.__textEngine.textFormatRanges.splice(1,this.__textEngine.textFormatRanges.length - 1);
				var range = this.__textEngine.textFormatRanges[0];
				range.format = this.__textFormat;
				range.start = 0;
				range.end = value.length;
				return this.__textEngine.text = value;
			} else {
				this.__textEngine.textFormatRanges.splice(0,this.__textEngine.textFormatRanges.length);
				value = "";
				var _g = 0;
				while(_g < segments.length) {
					var segment = segments[_g];
					++_g;
					if(segment == "") continue;
					var closeFontIndex = segment.indexOf("</font>");
					if(closeFontIndex > -1) {
						var start = segment.indexOf(">") + 1;
						var end = closeFontIndex;
						var format = this.__textFormat.clone();
						var faceIndex = segment.indexOf("face=");
						var colorIndex = segment.indexOf("color=");
						var sizeIndex = segment.indexOf("size=");
						if(faceIndex > -1 && faceIndex < start) {
							var len = segment.indexOf("\"",faceIndex);
							format.font = HxOverrides.substr(segment,faceIndex + 6,len);
						}
						if(colorIndex > -1 && colorIndex < start) format.color = Std.parseInt("0x" + HxOverrides.substr(segment,colorIndex + 8,6));
						if(sizeIndex > -1 && sizeIndex < start) format.size = Std.parseInt((function($this) {
							var $r;
							var len1 = segment.indexOf("\"",sizeIndex);
							$r = HxOverrides.substr(segment,sizeIndex + 6,len1);
							return $r;
						}(this)));
						var sub = segment.substring(start,end);
						sub = new EReg("<.*?>","g").replace(sub,"");
						this.__textEngine.textFormatRanges.push(new openfl._internal.text.TextFormatRange(format,value.length,value.length + sub.length));
						value += sub;
						if(closeFontIndex + 7 < segment.length) {
							sub = HxOverrides.substr(segment,closeFontIndex + 7,null);
							this.__textEngine.textFormatRanges.push(new openfl._internal.text.TextFormatRange(this.__textFormat,value.length,value.length + sub.length));
							value += sub;
						}
					} else {
						this.__textEngine.textFormatRanges.push(new openfl._internal.text.TextFormatRange(this.__textFormat,value.length,value.length + segment.length));
						value += segment;
					}
				}
			}
		}
		return this.__textEngine.text = value;
	}
	,set_multiline: function(value) {
		if(value != this.__textEngine.multiline) {
			this.__dirty = true;
			this.__layoutDirty = true;
		}
		return this.__textEngine.multiline = value;
	}
	,get_scrollH: function() {
		return this.__textEngine.scrollH;
	}
	,get_scrollV: function() {
		return this.__textEngine.scrollV;
	}
	,get_selectable: function() {
		return this.__textEngine.selectable;
	}
	,set_selectable: function(value) {
		if(value != this.__textEngine.selectable && this.get_type() == openfl.text.TextFieldType.INPUT) {
			if(this.stage != null && this.stage.get_focus() == this) this.__startTextInput(); else if(!value) this.__stopTextInput();
		}
		return this.__textEngine.selectable = value;
	}
	,set_text: function(value) {
		if(this.__isHTML || this.__textEngine.text != value) {
			this.__dirty = true;
			this.__layoutDirty = true;
		} else return value;
		if(this.__textEngine.textFormatRanges.length > 1) this.__textEngine.textFormatRanges.splice(1,this.__textEngine.textFormatRanges.length - 1);
		var range = this.__textEngine.textFormatRanges[0];
		range.format = this.__textFormat;
		range.start = 0;
		range.end = value.length;
		this.__isHTML = false;
		return this.__textEngine.text = value;
	}
	,get_type: function() {
		return this.__textEngine.type;
	}
	,get_width: function() {
		this.__updateLayout();
		return this.__textEngine.width;
	}
	,set_width: function(value) {
		if(this.get_scaleX() != 1 || this.__textEngine.width != value) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			this.__dirty = true;
			this.__layoutDirty = true;
		}
		this.set_scaleX(1);
		return this.__textEngine.width = value;
	}
	,set_wordWrap: function(value) {
		if(value != this.__textEngine.wordWrap) {
			this.__dirty = true;
			this.__layoutDirty = true;
		}
		return this.__textEngine.wordWrap = value;
	}
	,stage_onMouseMove: function(event) {
		if(this.stage == null) return;
		if(this.__textEngine.selectable && this.__selectionIndex >= 0) {
			this.__updateLayout();
			var position = this.__getPosition(this.get_mouseX(),this.get_mouseY());
			if(position != this.__caretIndex) {
				this.__caretIndex = position;
				this.__dirty = true;
			}
		}
	}
	,stage_onMouseUp: function(event) {
		if(this.stage == null) return;
		this.stage.removeEventListener(openfl.events.MouseEvent.MOUSE_MOVE,$bind(this,this.stage_onMouseMove));
		this.stage.removeEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.stage_onMouseUp));
		if(this.stage.get_focus() == this) {
			this.__getTransform();
			this.__updateLayout();
			var px = this.__worldTransform.__transformInverseX(this.get_x(),this.get_y());
			var py = this.__worldTransform.__transformInverseY(this.get_x(),this.get_y());
			var upPos = this.__getPosition(this.get_mouseX(),this.get_mouseY());
			var leftPos;
			var rightPos;
			leftPos = Std["int"](Math.min(this.__selectionIndex,upPos));
			rightPos = Std["int"](Math.max(this.__selectionIndex,upPos));
			this.__selectionIndex = leftPos;
			this.__caretIndex = rightPos;
			if(this.__inputEnabled) {
				this.this_onFocusIn(null);
				this.__stopCursorTimer();
				this.__startCursorTimer();
			}
		}
	}
	,this_onFocusIn: function(event) {
		if(this.get_selectable() && this.get_type() == openfl.text.TextFieldType.INPUT && this.stage != null && this.stage.get_focus() == this) this.__startTextInput();
	}
	,this_onMouseDown: function(event) {
		if(!this.get_selectable()) return;
		this.__updateLayout();
		this.__caretIndex = this.__getPosition(this.get_mouseX(),this.get_mouseY());
		this.__selectionIndex = this.__caretIndex;
		this.__dirty = true;
		this.stage.addEventListener(openfl.events.MouseEvent.MOUSE_MOVE,$bind(this,this.stage_onMouseMove));
		this.stage.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.stage_onMouseUp));
	}
	,window_onKeyDown: function(key,modifier) {
		switch(key) {
		case 8:
			if(this.__selectionIndex == this.__caretIndex && this.__caretIndex > 0) this.__selectionIndex = this.__caretIndex - 1;
			if(this.__selectionIndex != this.__caretIndex) {
				this.replaceSelectedText("");
				this.__selectionIndex = this.__caretIndex;
				this.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE,true));
			}
			break;
		case 127:
			if(this.__selectionIndex == this.__caretIndex && this.__caretIndex < this.__textEngine.text.length) this.__selectionIndex = this.__caretIndex + 1;
			if(this.__selectionIndex != this.__caretIndex) {
				this.replaceSelectedText("");
				this.__selectionIndex = this.__caretIndex;
				this.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE,true));
			}
			break;
		case 1073741904:
			if(lime.ui._KeyModifier.KeyModifier_Impl_.get_shiftKey(modifier)) {
				if(this.__caretIndex > 0) this.__caretIndex--;
			} else {
				if(this.__selectionIndex == this.__caretIndex) {
					if(this.__caretIndex > 0) this.__caretIndex--;
				} else this.__caretIndex = Std["int"](Math.min(this.__caretIndex,this.__selectionIndex));
				this.__selectionIndex = this.__caretIndex;
			}
			this.__stopCursorTimer();
			this.__startCursorTimer();
			break;
		case 1073741903:
			if(lime.ui._KeyModifier.KeyModifier_Impl_.get_shiftKey(modifier)) {
				if(this.__caretIndex < this.__textEngine.text.length) this.__caretIndex++;
			} else {
				if(this.__selectionIndex == this.__caretIndex) {
					if(this.__caretIndex < this.__textEngine.text.length) this.__caretIndex++;
				} else this.__caretIndex = Std["int"](Math.max(this.__caretIndex,this.__selectionIndex));
				this.__selectionIndex = this.__caretIndex;
			}
			this.__stopCursorTimer();
			this.__startCursorTimer();
			break;
		case 99:
			if(modifier == 64 || modifier == 128) lime.system.Clipboard.set_text(this.__textEngine.text.substring(this.__caretIndex,this.__selectionIndex));
			break;
		case 120:
			if(modifier == 64 || modifier == 128) {
				lime.system.Clipboard.set_text(this.__textEngine.text.substring(this.__caretIndex,this.__selectionIndex));
				if(this.__caretIndex != this.__selectionIndex) {
					this.replaceSelectedText("");
					this.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE,true));
				}
			}
			break;
		case 118:
			if(modifier == 64 || modifier == 128) {
				var text = lime.system.Clipboard.get_text();
				if(text != null) this.replaceSelectedText(text); else this.replaceSelectedText("");
				this.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE,true));
			}
			break;
		default:
		}
	}
	,window_onTextInput: function(value) {
		this.replaceSelectedText(value);
		this.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE,true));
	}
	,__class__: openfl.text.TextField
	,__properties__: $extend(openfl.display.InteractiveObject.prototype.__properties__,{set_wordWrap:"set_wordWrap",get_type:"get_type",set_text:"set_text",set_selectable:"set_selectable",get_selectable:"get_selectable",get_scrollV:"get_scrollV",get_scrollH:"get_scrollH",set_multiline:"set_multiline",set_htmlText:"set_htmlText",get_htmlText:"get_htmlText",set_embedFonts:"set_embedFonts",set_displayAsPassword:"set_displayAsPassword",set_defaultTextFormat:"set_defaultTextFormat",set_border:"set_border"})
});
format.swf.lite.DynamicTextField = function(swf,symbol) {
	openfl.text.TextField.call(this);
	this.swf = swf;
	this.symbol = symbol;
	this.set_width(symbol.width);
	this.set_height(symbol.height);
	this.set_multiline(symbol.multiline);
	this.set_wordWrap(symbol.wordWrap);
	this.set_displayAsPassword(symbol.password);
	this.set_border(symbol.border);
	this.set_selectable(symbol.selectable);
	var format = new openfl.text.TextFormat();
	if(symbol.color != null) format.color = symbol.color & 16777215;
	format.size = symbol.fontHeight / 20 | 0;
	var font = swf.symbols.get(symbol.fontID);
	if(font != null) {
	}
	format.font = symbol.fontName;
	var found = false;
	var _g = format.font;
	if(_g == null) found = true; else switch(_g) {
	case "_sans":case "_serif":case "_typewriter":case "":
		found = true;
		break;
	default:
		var _g1 = 0;
		var _g2 = openfl.text.Font.enumerateFonts();
		while(_g1 < _g2.length) {
			var font1 = _g2[_g1];
			++_g1;
			if(font1.name == format.font) {
				found = true;
				break;
			}
		}
	}
	if(found) this.set_embedFonts(true); else console.log("Warning: Could not find required font \"" + format.font + "\", it has not been embedded");
	if(symbol.align != null) {
		if(symbol.align == "center") format.align = openfl.text.TextFormatAlign.CENTER; else if(symbol.align == "right") format.align = openfl.text.TextFormatAlign.RIGHT; else if(symbol.align == "justify") format.align = openfl.text.TextFormatAlign.JUSTIFY;
		format.leftMargin = symbol.leftMargin / 20 | 0;
		format.rightMargin = symbol.rightMargin / 20 | 0;
		format.indent = symbol.indent / 20 | 0;
		format.leading = symbol.leading / 20 | 0;
	}
	this.set_defaultTextFormat(format);
	var plain = new EReg("</p>","g").replace(symbol.text,"\n");
	plain = new EReg("<br>","g").replace(plain,"\n");
	plain = new EReg("<.*?>","g").replace(plain,"");
	this.set_text(StringTools.htmlUnescape(plain));
};
$hxClasses["format.swf.lite.DynamicTextField"] = format.swf.lite.DynamicTextField;
format.swf.lite.DynamicTextField.__name__ = ["format","swf","lite","DynamicTextField"];
format.swf.lite.DynamicTextField.__super__ = openfl.text.TextField;
format.swf.lite.DynamicTextField.prototype = $extend(openfl.text.TextField.prototype,{
	__class__: format.swf.lite.DynamicTextField
});
format.swf.lite.SWFLite = function() {
	this.symbols = new haxe.ds.IntMap();
};
$hxClasses["format.swf.lite.SWFLite"] = format.swf.lite.SWFLite;
format.swf.lite.SWFLite.__name__ = ["format","swf","lite","SWFLite"];
format.swf.lite.SWFLite.resolveClass = function(name) {
	var value = Type.resolveClass(name);
	if(value == null) value = Type.resolveClass(StringTools.replace(name,"openfl._legacy","openfl"));
	if(value == null) value = Type.resolveClass(StringTools.replace(name,"openfl._v2","openfl"));
	return value;
};
format.swf.lite.SWFLite.resolveEnum = function(name) {
	var value = Type.resolveEnum(name);
	if(value == null) value = Type.resolveEnum(StringTools.replace(name,"openfl._legacy","openfl"));
	if(value == null) value = Type.resolveEnum(StringTools.replace(name,"openfl._v2","openfl"));
	return value;
};
format.swf.lite.SWFLite.unserialize = function(data) {
	if(data == null) return null;
	var unserializer = new haxe.Unserializer(data);
	unserializer.setResolver({ resolveClass : format.swf.lite.SWFLite.resolveClass, resolveEnum : format.swf.lite.SWFLite.resolveEnum});
	return unserializer.unserialize();
};
format.swf.lite.SWFLite.prototype = {
	createButton: function(className) {
		return null;
	}
	,createMovieClip: function(className) {
		if(className == null) className = "";
		if(className == "") return new format.swf.lite.MovieClip(this,this.root); else {
			var $it0 = this.symbols.iterator();
			while( $it0.hasNext() ) {
				var symbol = $it0.next();
				if(symbol.className == className) {
					if(js.Boot.__instanceof(symbol,format.swf.lite.symbols.SpriteSymbol)) return new format.swf.lite.MovieClip(this,symbol);
				}
			}
		}
		return null;
	}
	,getBitmapData: function(className) {
		var $it0 = this.symbols.iterator();
		while( $it0.hasNext() ) {
			var symbol = $it0.next();
			if(symbol.className == className) {
				if(js.Boot.__instanceof(symbol,format.swf.lite.symbols.BitmapSymbol)) {
					var bitmap = symbol;
					return openfl.Assets.getBitmapData(bitmap.path);
				}
			}
		}
		return null;
	}
	,hasSymbol: function(className) {
		var $it0 = this.symbols.iterator();
		while( $it0.hasNext() ) {
			var symbol = $it0.next();
			if(symbol.className == className) return true;
		}
		return false;
	}
	,serialize: function() {
		var serializer = new haxe.Serializer();
		serializer.useCache = true;
		serializer.serialize(this);
		return serializer.toString();
	}
	,__class__: format.swf.lite.SWFLite
};
openfl.AssetLibrary = function() {
	lime.AssetLibrary.call(this);
};
$hxClasses["openfl.AssetLibrary"] = openfl.AssetLibrary;
openfl.AssetLibrary.__name__ = ["openfl","AssetLibrary"];
openfl.AssetLibrary.__super__ = lime.AssetLibrary;
openfl.AssetLibrary.prototype = $extend(lime.AssetLibrary.prototype,{
	__class__: openfl.AssetLibrary
});
format.swf.lite.SWFLiteLibrary = function(id) {
	openfl.AssetLibrary.call(this);
	if(id != null) this.swf = format.swf.lite.SWFLite.unserialize(openfl.Assets.getText(id));
};
$hxClasses["format.swf.lite.SWFLiteLibrary"] = format.swf.lite.SWFLiteLibrary;
format.swf.lite.SWFLiteLibrary.__name__ = ["format","swf","lite","SWFLiteLibrary"];
format.swf.lite.SWFLiteLibrary.__super__ = openfl.AssetLibrary;
format.swf.lite.SWFLiteLibrary.prototype = $extend(openfl.AssetLibrary.prototype,{
	exists: function(id,type) {
		if(id == "" && type == "MOVIE_CLIP") return true;
		if(type == "IMAGE" || type == "MOVIE_CLIP") return this.swf.hasSymbol(id);
		return false;
	}
	,getImage: function(id) {
		return lime.graphics.Image.fromBitmapData(this.swf.getBitmapData(id));
	}
	,getMovieClip: function(id) {
		return this.swf.createMovieClip(id);
	}
	,load: function(handler) {
		var _g = this;
		var paths = [];
		var bitmap;
		var $it0 = this.swf.symbols.iterator();
		while( $it0.hasNext() ) {
			var symbol = $it0.next();
			if(js.Boot.__instanceof(symbol,format.swf.lite.symbols.BitmapSymbol)) {
				bitmap = symbol;
				paths.push(bitmap.path);
			}
		}
		if(paths.length == 0) handler(this); else {
			var loaded = 0;
			var onLoad = function(_) {
				loaded++;
				if(loaded == paths.length) handler(_g);
			};
			var _g1 = 0;
			while(_g1 < paths.length) {
				var path = paths[_g1];
				++_g1;
				openfl.Assets.loadBitmapData(path,onLoad);
			}
		}
	}
	,unload: function() {
		var bitmap;
		var $it0 = this.swf.symbols.iterator();
		while( $it0.hasNext() ) {
			var symbol = $it0.next();
			if(js.Boot.__instanceof(symbol,format.swf.lite.symbols.BitmapSymbol)) {
				bitmap = symbol;
				openfl.Assets.cache.removeBitmapData(bitmap.path);
			}
		}
	}
	,__class__: format.swf.lite.SWFLiteLibrary
});
openfl.display.Shape = function() {
	openfl.display.DisplayObject.call(this);
};
$hxClasses["openfl.display.Shape"] = openfl.display.Shape;
openfl.display.Shape.__name__ = ["openfl","display","Shape"];
openfl.display.Shape.__super__ = openfl.display.DisplayObject;
openfl.display.Shape.prototype = $extend(openfl.display.DisplayObject.prototype,{
	get_graphics: function() {
		if(this.__graphics == null) {
			this.__graphics = new openfl.display.Graphics();
			this.__graphics.__owner = this;
		}
		return this.__graphics;
	}
	,__class__: openfl.display.Shape
	,__properties__: $extend(openfl.display.DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
format.swf.lite.StaticTextField = function(swf,symbol) {
	openfl.display.Shape.call(this);
	this.symbol = symbol;
	if(symbol.records != null) {
		var font = null;
		var color = 16777215;
		var x = symbol.matrix.tx;
		var y = symbol.matrix.ty;
		var _g = 0;
		var _g1 = symbol.records;
		while(_g < _g1.length) {
			var record = _g1[_g];
			++_g;
			if(record.fontID != null) font = swf.symbols.get(record.fontID);
			if(record.offsetX != null) x = symbol.matrix.tx + record.offsetX * 0.05;
			if(record.offsetY != null) y = symbol.matrix.ty + record.offsetY * 0.05;
			if(record.color != null) color = record.color;
			if(font != null) {
				var scale = record.fontHeight / 1024 * 0.05;
				var index;
				var code;
				var _g3 = 0;
				var _g2 = record.glyphs.length;
				while(_g3 < _g2) {
					var i = _g3++;
					index = record.glyphs[i];
					this.renderGlyph(font,index,color,scale,x,y);
					x += record.advances[i] * 0.05;
				}
			}
		}
	}
};
$hxClasses["format.swf.lite.StaticTextField"] = format.swf.lite.StaticTextField;
format.swf.lite.StaticTextField.__name__ = ["format","swf","lite","StaticTextField"];
format.swf.lite.StaticTextField.__super__ = openfl.display.Shape;
format.swf.lite.StaticTextField.prototype = $extend(openfl.display.Shape.prototype,{
	renderGlyph: function(font,character,color,scale,offsetX,offsetY) {
		var _g = 0;
		var _g1 = font.glyphs[character];
		while(_g < _g1.length) {
			var command = _g1[_g];
			++_g;
			switch(command[1]) {
			case 1:
				var alpha = command[3];
				this.get_graphics().beginFill(color & 16777215,(color >> 24 & 255) / 255);
				break;
			case 3:
				var anchorY = command[5];
				var anchorX = command[4];
				var controlY = command[3];
				var controlX = command[2];
				this.get_graphics().curveTo(controlX * scale + offsetX,controlY * scale + offsetY,anchorX * scale + offsetX,anchorY * scale + offsetY);
				break;
			case 4:
				this.get_graphics().endFill();
				break;
			case 5:
				var miterLimit = command[9];
				var joints = command[8];
				var caps = command[7];
				var scaleMode = command[6];
				var pixelHinting = command[5];
				var alpha1 = command[4];
				var color1 = command[3];
				var thickness = command[2];
				if(thickness != null) this.get_graphics().lineStyle(thickness,color1,alpha1,pixelHinting,scaleMode,caps,joints,miterLimit); else this.get_graphics().lineStyle();
				break;
			case 6:
				var y = command[3];
				var x = command[2];
				this.get_graphics().lineTo(x * scale + offsetX,y * scale + offsetY);
				break;
			case 7:
				var y1 = command[3];
				var x1 = command[2];
				this.get_graphics().moveTo(x1 * scale + offsetX,y1 * scale + offsetY);
				break;
			default:
			}
		}
	}
	,__class__: format.swf.lite.StaticTextField
});
format.swf.lite.symbols = {};
format.swf.lite.symbols.SWFSymbol = function() {
};
$hxClasses["format.swf.lite.symbols.SWFSymbol"] = format.swf.lite.symbols.SWFSymbol;
format.swf.lite.symbols.SWFSymbol.__name__ = ["format","swf","lite","symbols","SWFSymbol"];
format.swf.lite.symbols.SWFSymbol.prototype = {
	__class__: format.swf.lite.symbols.SWFSymbol
};
format.swf.lite.symbols.BitmapSymbol = function() {
	format.swf.lite.symbols.SWFSymbol.call(this);
};
$hxClasses["format.swf.lite.symbols.BitmapSymbol"] = format.swf.lite.symbols.BitmapSymbol;
format.swf.lite.symbols.BitmapSymbol.__name__ = ["format","swf","lite","symbols","BitmapSymbol"];
format.swf.lite.symbols.BitmapSymbol.__super__ = format.swf.lite.symbols.SWFSymbol;
format.swf.lite.symbols.BitmapSymbol.prototype = $extend(format.swf.lite.symbols.SWFSymbol.prototype,{
	__class__: format.swf.lite.symbols.BitmapSymbol
});
format.swf.lite.symbols.DynamicTextSymbol = function() {
	format.swf.lite.symbols.SWFSymbol.call(this);
};
$hxClasses["format.swf.lite.symbols.DynamicTextSymbol"] = format.swf.lite.symbols.DynamicTextSymbol;
format.swf.lite.symbols.DynamicTextSymbol.__name__ = ["format","swf","lite","symbols","DynamicTextSymbol"];
format.swf.lite.symbols.DynamicTextSymbol.__super__ = format.swf.lite.symbols.SWFSymbol;
format.swf.lite.symbols.DynamicTextSymbol.prototype = $extend(format.swf.lite.symbols.SWFSymbol.prototype,{
	__class__: format.swf.lite.symbols.DynamicTextSymbol
});
format.swf.lite.symbols.FontSymbol = function() {
	format.swf.lite.symbols.SWFSymbol.call(this);
};
$hxClasses["format.swf.lite.symbols.FontSymbol"] = format.swf.lite.symbols.FontSymbol;
format.swf.lite.symbols.FontSymbol.__name__ = ["format","swf","lite","symbols","FontSymbol"];
format.swf.lite.symbols.FontSymbol.__super__ = format.swf.lite.symbols.SWFSymbol;
format.swf.lite.symbols.FontSymbol.prototype = $extend(format.swf.lite.symbols.SWFSymbol.prototype,{
	__class__: format.swf.lite.symbols.FontSymbol
});
format.swf.lite.symbols.ShapeSymbol = function() {
	format.swf.lite.symbols.SWFSymbol.call(this);
};
$hxClasses["format.swf.lite.symbols.ShapeSymbol"] = format.swf.lite.symbols.ShapeSymbol;
format.swf.lite.symbols.ShapeSymbol.__name__ = ["format","swf","lite","symbols","ShapeSymbol"];
format.swf.lite.symbols.ShapeSymbol.__super__ = format.swf.lite.symbols.SWFSymbol;
format.swf.lite.symbols.ShapeSymbol.prototype = $extend(format.swf.lite.symbols.SWFSymbol.prototype,{
	__class__: format.swf.lite.symbols.ShapeSymbol
});
format.swf.lite.symbols.SpriteSymbol = function() {
	format.swf.lite.symbols.SWFSymbol.call(this);
	this.frames = new Array();
};
$hxClasses["format.swf.lite.symbols.SpriteSymbol"] = format.swf.lite.symbols.SpriteSymbol;
format.swf.lite.symbols.SpriteSymbol.__name__ = ["format","swf","lite","symbols","SpriteSymbol"];
format.swf.lite.symbols.SpriteSymbol.__super__ = format.swf.lite.symbols.SWFSymbol;
format.swf.lite.symbols.SpriteSymbol.prototype = $extend(format.swf.lite.symbols.SWFSymbol.prototype,{
	__class__: format.swf.lite.symbols.SpriteSymbol
});
format.swf.lite.symbols.StaticTextSymbol = function() {
	format.swf.lite.symbols.SWFSymbol.call(this);
};
$hxClasses["format.swf.lite.symbols.StaticTextSymbol"] = format.swf.lite.symbols.StaticTextSymbol;
format.swf.lite.symbols.StaticTextSymbol.__name__ = ["format","swf","lite","symbols","StaticTextSymbol"];
format.swf.lite.symbols.StaticTextSymbol.__super__ = format.swf.lite.symbols.SWFSymbol;
format.swf.lite.symbols.StaticTextSymbol.prototype = $extend(format.swf.lite.symbols.SWFSymbol.prototype,{
	__class__: format.swf.lite.symbols.StaticTextSymbol
});
format.swf.lite.symbols.StaticTextRecord = function() {
};
$hxClasses["format.swf.lite.symbols.StaticTextRecord"] = format.swf.lite.symbols.StaticTextRecord;
format.swf.lite.symbols.StaticTextRecord.__name__ = ["format","swf","lite","symbols","StaticTextRecord"];
format.swf.lite.symbols.StaticTextRecord.prototype = {
	__class__: format.swf.lite.symbols.StaticTextRecord
};
format.swf.lite.timeline = {};
format.swf.lite.timeline.Frame = function() {
	this.objects = new Array();
};
$hxClasses["format.swf.lite.timeline.Frame"] = format.swf.lite.timeline.Frame;
format.swf.lite.timeline.Frame.__name__ = ["format","swf","lite","timeline","Frame"];
format.swf.lite.timeline.Frame.prototype = {
	__class__: format.swf.lite.timeline.Frame
};
format.swf.lite.timeline.FrameObject = function() { };
$hxClasses["format.swf.lite.timeline.FrameObject"] = format.swf.lite.timeline.FrameObject;
format.swf.lite.timeline.FrameObject.__name__ = ["format","swf","lite","timeline","FrameObject"];
format.swf.lite.timeline.FrameObject.prototype = {
	__class__: format.swf.lite.timeline.FrameObject
};
var haxe = {};
haxe.Serializer = function() {
	this.buf = new StringBuf();
	this.cache = new Array();
	this.useCache = haxe.Serializer.USE_CACHE;
	this.useEnumIndex = haxe.Serializer.USE_ENUM_INDEX;
	this.shash = new haxe.ds.StringMap();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe.Serializer;
haxe.Serializer.__name__ = ["haxe","Serializer"];
haxe.Serializer.prototype = {
	toString: function() {
		return this.buf.b;
	}
	,serializeString: function(s) {
		var x = this.shash.get(s);
		if(x != null) {
			this.buf.b += "R";
			if(x == null) this.buf.b += "null"; else this.buf.b += "" + x;
			return;
		}
		this.shash.set(s,this.scount++);
		this.buf.b += "y";
		s = encodeURIComponent(s);
		if(s.length == null) this.buf.b += "null"; else this.buf.b += "" + s.length;
		this.buf.b += ":";
		if(s == null) this.buf.b += "null"; else this.buf.b += "" + s;
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0;
		var _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += "r";
				if(i == null) this.buf.b += "null"; else this.buf.b += "" + i;
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeFields: function(v) {
		var _g = 0;
		var _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += "g";
	}
	,serialize: function(v) {
		{
			var _g = Type["typeof"](v);
			switch(_g[1]) {
			case 0:
				this.buf.b += "n";
				break;
			case 1:
				var v1 = v;
				if(v1 == 0) {
					this.buf.b += "z";
					return;
				}
				this.buf.b += "i";
				if(v1 == null) this.buf.b += "null"; else this.buf.b += "" + v1;
				break;
			case 2:
				var v2 = v;
				if(Math.isNaN(v2)) this.buf.b += "k"; else if(!Math.isFinite(v2)) if(v2 < 0) this.buf.b += "m"; else this.buf.b += "p"; else {
					this.buf.b += "d";
					if(v2 == null) this.buf.b += "null"; else this.buf.b += "" + v2;
				}
				break;
			case 3:
				if(v) this.buf.b += "t"; else this.buf.b += "f";
				break;
			case 6:
				var c = _g[2];
				if(c == String) {
					this.serializeString(v);
					return;
				}
				if(this.useCache && this.serializeRef(v)) return;
				switch(c) {
				case Array:
					var ucount = 0;
					this.buf.b += "a";
					var l = v.length;
					var _g1 = 0;
					while(_g1 < l) {
						var i = _g1++;
						if(v[i] == null) ucount++; else {
							if(ucount > 0) {
								if(ucount == 1) this.buf.b += "n"; else {
									this.buf.b += "u";
									if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
								}
								ucount = 0;
							}
							this.serialize(v[i]);
						}
					}
					if(ucount > 0) {
						if(ucount == 1) this.buf.b += "n"; else {
							this.buf.b += "u";
							if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
						}
					}
					this.buf.b += "h";
					break;
				case List:
					this.buf.b += "l";
					var v3 = v;
					var $it0 = v3.iterator();
					while( $it0.hasNext() ) {
						var i1 = $it0.next();
						this.serialize(i1);
					}
					this.buf.b += "h";
					break;
				case Date:
					var d = v;
					this.buf.b += "v";
					this.buf.add(HxOverrides.dateStr(d));
					break;
				case haxe.ds.StringMap:
					this.buf.b += "b";
					var v4 = v;
					var $it1 = v4.keys();
					while( $it1.hasNext() ) {
						var k = $it1.next();
						this.serializeString(k);
						this.serialize(v4.get(k));
					}
					this.buf.b += "h";
					break;
				case haxe.ds.IntMap:
					this.buf.b += "q";
					var v5 = v;
					var $it2 = v5.keys();
					while( $it2.hasNext() ) {
						var k1 = $it2.next();
						this.buf.b += ":";
						if(k1 == null) this.buf.b += "null"; else this.buf.b += "" + k1;
						this.serialize(v5.get(k1));
					}
					this.buf.b += "h";
					break;
				case haxe.ds.ObjectMap:
					this.buf.b += "M";
					var v6 = v;
					var $it3 = v6.keys();
					while( $it3.hasNext() ) {
						var k2 = $it3.next();
						var id = Reflect.field(k2,"__id__");
						Reflect.deleteField(k2,"__id__");
						this.serialize(k2);
						k2.__id__ = id;
						this.serialize(v6.h[k2.__id__]);
					}
					this.buf.b += "h";
					break;
				case haxe.io.Bytes:
					var v7 = v;
					var i2 = 0;
					var max = v7.length - 2;
					var charsBuf = new StringBuf();
					var b64 = haxe.Serializer.BASE64;
					while(i2 < max) {
						var b1 = v7.get(i2++);
						var b2 = v7.get(i2++);
						var b3 = v7.get(i2++);
						charsBuf.add(b64.charAt(b1 >> 2));
						charsBuf.add(b64.charAt((b1 << 4 | b2 >> 4) & 63));
						charsBuf.add(b64.charAt((b2 << 2 | b3 >> 6) & 63));
						charsBuf.add(b64.charAt(b3 & 63));
					}
					if(i2 == max) {
						var b11 = v7.get(i2++);
						var b21 = v7.get(i2++);
						charsBuf.add(b64.charAt(b11 >> 2));
						charsBuf.add(b64.charAt((b11 << 4 | b21 >> 4) & 63));
						charsBuf.add(b64.charAt(b21 << 2 & 63));
					} else if(i2 == max + 1) {
						var b12 = v7.get(i2++);
						charsBuf.add(b64.charAt(b12 >> 2));
						charsBuf.add(b64.charAt(b12 << 4 & 63));
					}
					var chars = charsBuf.b;
					this.buf.b += "s";
					if(chars.length == null) this.buf.b += "null"; else this.buf.b += "" + chars.length;
					this.buf.b += ":";
					if(chars == null) this.buf.b += "null"; else this.buf.b += "" + chars;
					break;
				default:
					if(this.useCache) this.cache.pop();
					if(v.hxSerialize != null) {
						this.buf.b += "C";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						v.hxSerialize(this);
						this.buf.b += "g";
					} else {
						this.buf.b += "c";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						this.serializeFields(v);
					}
				}
				break;
			case 4:
				if(this.useCache && this.serializeRef(v)) return;
				this.buf.b += "o";
				this.serializeFields(v);
				break;
			case 7:
				var e = _g[2];
				if(this.useCache) {
					if(this.serializeRef(v)) return;
					this.cache.pop();
				}
				if(this.useEnumIndex) this.buf.b += "j"; else this.buf.b += "w";
				this.serializeString(Type.getEnumName(e));
				if(this.useEnumIndex) {
					this.buf.b += ":";
					this.buf.b += Std.string(v[1]);
				} else this.serializeString(v[0]);
				this.buf.b += ":";
				var l1 = v.length;
				this.buf.b += Std.string(l1 - 2);
				var _g11 = 2;
				while(_g11 < l1) {
					var i3 = _g11++;
					this.serialize(v[i3]);
				}
				if(this.useCache) this.cache.push(v);
				break;
			case 5:
				throw "Cannot serialize function";
				break;
			default:
				throw "Cannot serialize " + Std.string(v);
			}
		}
	}
	,__class__: haxe.Serializer
};
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe.Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
};
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0;
	var _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe.Unserializer.prototype = {
	setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_1) {
			return null;
		}}; else this.resolver = r;
	}
	,get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!(typeof(k) == "string")) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.get(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
		var _g = this.get(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.get(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = decodeURIComponent(s.split("+").join(" "));
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c1 = this.buf.charCodeAt(this.pos);
				if(c1 == 104) {
					this.pos++;
					break;
				}
				if(c1 == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n1 = this.readDigits();
			if(n1 < 0 || n1 >= this.cache.length) throw "Invalid reference";
			return this.cache[n1];
		case 82:
			var n2 = this.readDigits();
			if(n2 < 0 || n2 >= this.scache.length) throw "Invalid string reference";
			return this.scache[n2];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o1 = Type.createEmptyInstance(cl);
			this.cache.push(o1);
			this.unserializeObject(o1);
			return o1;
		case 119:
			var name1 = this.unserialize();
			var edecl = this.resolver.resolveEnum(name1);
			if(edecl == null) throw "Enum not found " + name1;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name2 = this.unserialize();
			var edecl1 = this.resolver.resolveEnum(name2);
			if(edecl1 == null) throw "Enum not found " + name2;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl1)[index];
			if(tag == null) throw "Unknown enum index " + name2 + "@" + index;
			var e1 = this.unserializeEnum(edecl1,tag);
			this.cache.push(e1);
			return e1;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf1 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe.ds.StringMap();
			this.cache.push(h);
			var buf2 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s1 = this.unserialize();
				h.set(s1,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h1 = new haxe.ds.IntMap();
			this.cache.push(h1);
			var buf3 = this.buf;
			var c2 = this.get(this.pos++);
			while(c2 == 58) {
				var i = this.readDigits();
				h1.set(i,this.unserialize());
				c2 = this.get(this.pos++);
			}
			if(c2 != 104) throw "Invalid IntMap format";
			return h1;
		case 77:
			var h2 = new haxe.ds.ObjectMap();
			this.cache.push(h2);
			var buf4 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s2 = this.unserialize();
				h2.set(s2,this.unserialize());
			}
			this.pos++;
			return h2;
		case 118:
			var d;
			var s3 = HxOverrides.substr(this.buf,this.pos,19);
			d = HxOverrides.strDate(s3);
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len1 = this.readDigits();
			var buf5 = this.buf;
			if(this.get(this.pos++) != 58 || this.length - this.pos < len1) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i1 = this.pos;
			var rest = len1 & 3;
			var size;
			size = (len1 >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i1 + (len1 - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i1 < max) {
				var c11 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c21 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c11 << 2 | c21 >> 4);
				var c3 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c21 << 4 | c3 >> 2);
				var c4 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c3 << 6 | c4);
			}
			if(rest >= 2) {
				var c12 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c22 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c12 << 2 | c22 >> 4);
				if(rest == 3) {
					var c31 = codes[StringTools.fastCodeAt(buf5,i1++)];
					bytes.set(bpos++,c22 << 4 | c31 >> 2);
				}
			}
			this.pos += len1;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name3 = this.unserialize();
			var cl1 = this.resolver.resolveClass(name3);
			if(cl1 == null) throw "Class not found " + name3;
			var o2 = Type.createEmptyInstance(cl1);
			this.cache.push(o2);
			o2.hxUnserialize(this);
			if(this.get(this.pos++) != 103) throw "Invalid custom data";
			return o2;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,__class__: haxe.Unserializer
};
haxe.ds = {};
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,__class__: haxe.ds.IntMap
};
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe.ds.ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,__class__: haxe.ds.ObjectMap
};
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,__class__: haxe.ds.StringMap
};
haxe.ds._Vector = {};
haxe.ds._Vector.Vector_Impl_ = function() { };
$hxClasses["haxe.ds._Vector.Vector_Impl_"] = haxe.ds._Vector.Vector_Impl_;
haxe.ds._Vector.Vector_Impl_.__name__ = ["haxe","ds","_Vector","Vector_Impl_"];
haxe.ds._Vector.Vector_Impl_.blit = function(src,srcPos,dest,destPos,len) {
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		dest[destPos + i] = src[srcPos + i];
	}
};
haxe.ds._Vector.Vector_Impl_.toArray = function(this1) {
	var a = new Array();
	var len = this1.length;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		a[i] = this1[i];
	}
	return a;
};
haxe.io = {};
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
};
haxe.io.Bytes.prototype = {
	get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,__class__: haxe.io.Bytes
};
haxe.io.Eof = function() { };
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
};
haxe.io.Path = function(path) {
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else this.dir = null;
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
$hxClasses["haxe.io.Path"] = haxe.io.Path;
haxe.io.Path.__name__ = ["haxe","io","Path"];
haxe.io.Path.withoutExtension = function(path) {
	var s = new haxe.io.Path(path);
	s.ext = null;
	return s.toString();
};
haxe.io.Path.prototype = {
	toString: function() {
		return (this.dir == null?"":this.dir + (this.backslash?"\\":"/")) + this.file + (this.ext == null?"":"." + this.ext);
	}
	,__class__: haxe.io.Path
};
haxe.xml = {};
haxe.xml.Parser = function() { };
$hxClasses["haxe.xml.Parser"] = haxe.xml.Parser;
haxe.xml.Parser.__name__ = ["haxe","xml","Parser"];
haxe.xml.Parser.parse = function(str) {
	var doc = Xml.createDocument();
	haxe.xml.Parser.doParse(str,0,doc);
	return doc;
};
haxe.xml.Parser.doParse = function(str,p,parent) {
	if(p == null) p = 0;
	var xml = null;
	var state = 1;
	var next = 1;
	var aname = null;
	var start = 0;
	var nsubs = 0;
	var nbrackets = 0;
	var c = str.charCodeAt(p);
	var buf = new StringBuf();
	while(!(c != c)) {
		switch(state) {
		case 0:
			switch(c) {
			case 10:case 13:case 9:case 32:
				break;
			default:
				state = next;
				continue;
			}
			break;
		case 1:
			switch(c) {
			case 60:
				state = 0;
				next = 2;
				break;
			default:
				start = p;
				state = 13;
				continue;
			}
			break;
		case 13:
			if(c == 60) {
				var child = Xml.createPCData(buf.b + HxOverrides.substr(str,start,p - start));
				buf = new StringBuf();
				parent.addChild(child);
				nsubs++;
				state = 0;
				next = 2;
			} else if(c == 38) {
				buf.addSub(str,start,p - start);
				state = 18;
				next = 13;
				start = p + 1;
			}
			break;
		case 17:
			if(c == 93 && str.charCodeAt(p + 1) == 93 && str.charCodeAt(p + 2) == 62) {
				var child1 = Xml.createCData(HxOverrides.substr(str,start,p - start));
				parent.addChild(child1);
				nsubs++;
				p += 2;
				state = 1;
			}
			break;
		case 2:
			switch(c) {
			case 33:
				if(str.charCodeAt(p + 1) == 91) {
					p += 2;
					if(HxOverrides.substr(str,p,6).toUpperCase() != "CDATA[") throw "Expected <![CDATA[";
					p += 5;
					state = 17;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) == 68 || str.charCodeAt(p + 1) == 100) {
					if(HxOverrides.substr(str,p + 2,6).toUpperCase() != "OCTYPE") throw "Expected <!DOCTYPE";
					p += 8;
					state = 16;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) != 45 || str.charCodeAt(p + 2) != 45) throw "Expected <!--"; else {
					p += 2;
					state = 15;
					start = p + 1;
				}
				break;
			case 63:
				state = 14;
				start = p;
				break;
			case 47:
				if(parent == null) throw "Expected node name";
				start = p + 1;
				state = 0;
				next = 10;
				break;
			default:
				state = 3;
				start = p;
				continue;
			}
			break;
		case 3:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(p == start) throw "Expected node name";
				xml = Xml.createElement(HxOverrides.substr(str,start,p - start));
				parent.addChild(xml);
				state = 0;
				next = 4;
				continue;
			}
			break;
		case 4:
			switch(c) {
			case 47:
				state = 11;
				nsubs++;
				break;
			case 62:
				state = 9;
				nsubs++;
				break;
			default:
				state = 5;
				start = p;
				continue;
			}
			break;
		case 5:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				var tmp;
				if(start == p) throw "Expected attribute name";
				tmp = HxOverrides.substr(str,start,p - start);
				aname = tmp;
				if(xml.exists(aname)) throw "Duplicate attribute";
				state = 0;
				next = 6;
				continue;
			}
			break;
		case 6:
			switch(c) {
			case 61:
				state = 0;
				next = 7;
				break;
			default:
				throw "Expected =";
			}
			break;
		case 7:
			switch(c) {
			case 34:case 39:
				state = 8;
				start = p;
				break;
			default:
				throw "Expected \"";
			}
			break;
		case 8:
			if(c == str.charCodeAt(start)) {
				var val = HxOverrides.substr(str,start + 1,p - start - 1);
				xml.set(aname,val);
				state = 0;
				next = 4;
			}
			break;
		case 9:
			p = haxe.xml.Parser.doParse(str,p,xml);
			start = p;
			state = 1;
			break;
		case 11:
			switch(c) {
			case 62:
				state = 1;
				break;
			default:
				throw "Expected >";
			}
			break;
		case 12:
			switch(c) {
			case 62:
				if(nsubs == 0) parent.addChild(Xml.createPCData(""));
				return p;
			default:
				throw "Expected >";
			}
			break;
		case 10:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(start == p) throw "Expected node name";
				var v = HxOverrides.substr(str,start,p - start);
				if(v != parent.get_nodeName()) throw "Expected </" + parent.get_nodeName() + ">";
				state = 0;
				next = 12;
				continue;
			}
			break;
		case 15:
			if(c == 45 && str.charCodeAt(p + 1) == 45 && str.charCodeAt(p + 2) == 62) {
				parent.addChild(Xml.createComment(HxOverrides.substr(str,start,p - start)));
				p += 2;
				state = 1;
			}
			break;
		case 16:
			if(c == 91) nbrackets++; else if(c == 93) nbrackets--; else if(c == 62 && nbrackets == 0) {
				parent.addChild(Xml.createDocType(HxOverrides.substr(str,start,p - start)));
				state = 1;
			}
			break;
		case 14:
			if(c == 63 && str.charCodeAt(p + 1) == 62) {
				p++;
				var str1 = HxOverrides.substr(str,start + 1,p - start - 2);
				parent.addChild(Xml.createProcessingInstruction(str1));
				state = 1;
			}
			break;
		case 18:
			if(c == 59) {
				var s = HxOverrides.substr(str,start,p - start);
				if(s.charCodeAt(0) == 35) {
					var i;
					if(s.charCodeAt(1) == 120) i = Std.parseInt("0" + HxOverrides.substr(s,1,s.length - 1)); else i = Std.parseInt(HxOverrides.substr(s,1,s.length - 1));
					buf.add(String.fromCharCode(i));
				} else if(!haxe.xml.Parser.escapes.exists(s)) buf.b += Std.string("&" + s + ";"); else buf.add(haxe.xml.Parser.escapes.get(s));
				start = p + 1;
				state = next;
			}
			break;
		}
		c = StringTools.fastCodeAt(str,++p);
	}
	if(state == 1) {
		start = p;
		state = 13;
	}
	if(state == 13) {
		if(p != start || nsubs == 0) parent.addChild(Xml.createPCData(buf.b + HxOverrides.substr(str,start,p - start)));
		return p;
	}
	throw "Unexpected end";
};
var js = {};
js.Boot = function() { };
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js.Boot.__nativeClassName(o);
		if(name != null) return js.Boot.__resolveNativeClass(name);
		return null;
	}
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js.Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
};
js.Boot.__nativeClassName = function(o) {
	var name = js.Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js.Boot.__isNativeObj = function(o) {
	return js.Boot.__nativeClassName(o) != null;
};
js.Boot.__resolveNativeClass = function(name) {
	return (Function("return typeof " + name + " != \"undefined\" ? " + name + " : null"))();
};
lime.AssetCache = function() {
	this.enabled = true;
	this.audio = new haxe.ds.StringMap();
	this.font = new haxe.ds.StringMap();
	this.image = new haxe.ds.StringMap();
};
$hxClasses["lime.AssetCache"] = lime.AssetCache;
lime.AssetCache.__name__ = ["lime","AssetCache"];
lime.AssetCache.prototype = {
	clear: function(prefix) {
		if(prefix == null) {
			this.audio = new haxe.ds.StringMap();
			this.font = new haxe.ds.StringMap();
			this.image = new haxe.ds.StringMap();
		} else {
			var keys = this.audio.keys();
			while( keys.hasNext() ) {
				var key = keys.next();
				if(StringTools.startsWith(key,prefix)) this.audio.remove(key);
			}
			var keys1 = this.font.keys();
			while( keys1.hasNext() ) {
				var key1 = keys1.next();
				if(StringTools.startsWith(key1,prefix)) this.font.remove(key1);
			}
			var keys2 = this.image.keys();
			while( keys2.hasNext() ) {
				var key2 = keys2.next();
				if(StringTools.startsWith(key2,prefix)) this.image.remove(key2);
			}
		}
	}
	,__class__: lime.AssetCache
};
lime.Assets = function() { };
$hxClasses["lime.Assets"] = lime.Assets;
lime.Assets.__name__ = ["lime","Assets"];
lime.Assets.getImage = function(id,useCache) {
	if(useCache == null) useCache = true;
	lime.Assets.initialize();
	if(useCache && lime.Assets.cache.enabled && lime.Assets.cache.image.exists(id)) {
		var image = lime.Assets.cache.image.get(id);
		if(lime.Assets.isValidImage(image)) return image;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"IMAGE")) {
			if(library.isLocal(symbolName,"IMAGE")) {
				var image1 = library.getImage(symbolName);
				if(useCache && lime.Assets.cache.enabled) lime.Assets.cache.image.set(id,image1);
				return image1;
			} else console.log("[Assets] Image asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[Assets] There is no Image asset with an ID of \"" + id + "\"");
	} else console.log("[Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
};
lime.Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return lime.Assets.libraries.get(name);
};
lime.Assets.getText = function(id) {
	lime.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"TEXT")) {
			if(library.isLocal(symbolName,"TEXT")) return library.getText(symbolName); else console.log("[Assets] String asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[Assets] There is no String asset with an ID of \"" + id + "\"");
	} else console.log("[Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
};
lime.Assets.initialize = function() {
	if(!lime.Assets.initialized) {
		lime.Assets.registerLibrary("default",new DefaultAssetLibrary());
		lime.Assets.initialized = true;
	}
};
lime.Assets.isValidImage = function(buffer) {
	return true;
};
lime.Assets.loadImage = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	lime.Assets.initialize();
	if(useCache && lime.Assets.cache.enabled && lime.Assets.cache.image.exists(id)) {
		var image = lime.Assets.cache.image.get(id);
		if(lime.Assets.isValidImage(image)) {
			handler(image);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"IMAGE")) {
			if(useCache && lime.Assets.cache.enabled) library.loadImage(symbolName,function(image1) {
				lime.Assets.cache.image.set(id,image1);
				handler(image1);
			}); else library.loadImage(symbolName,handler);
			return;
		} else console.log("[Assets] There is no Image asset with an ID of \"" + id + "\"");
	} else console.log("[Assets] There is no asset library named \"" + libraryName + "\"");
	handler(null);
};
lime.Assets.loadLibrary = function(name,handler) {
	lime.Assets.initialize();
	var data = lime.Assets.getText("libraries/" + name + ".json");
	if(data != null && data != "") {
		var info = JSON.parse(data);
		var library = Type.createInstance(Type.resolveClass(info.type),info.args);
		lime.Assets.libraries.set(name,library);
		library.eventCallback = lime.Assets.library_onEvent;
		library.load(handler);
		return;
	} else console.log("[Assets] There is no asset library named \"" + name + "\"");
	handler(null);
};
lime.Assets.registerLibrary = function(name,library) {
	if(lime.Assets.libraries.exists(name)) lime.Assets.unloadLibrary(name);
	if(library != null) library.eventCallback = lime.Assets.library_onEvent;
	lime.Assets.libraries.set(name,library);
};
lime.Assets.unloadLibrary = function(name) {
	lime.Assets.initialize();
	var library = lime.Assets.libraries.get(name);
	if(library != null) {
		lime.Assets.cache.clear(name + ":");
		library.unload();
		library.eventCallback = null;
	}
	lime.Assets.libraries.remove(name);
};
lime.Assets.library_onEvent = function(library,type) {
	if(type == "change") lime.Assets.cache.clear();
};
lime._backend = {};
lime._backend.html5 = {};
lime._backend.html5.HTML5Application = function(parent) {
	this.parent = parent;
	this.currentUpdate = 0;
	this.lastUpdate = 0;
	this.nextUpdate = 0;
	this.framePeriod = -1;
	lime.audio.AudioManager.init();
};
$hxClasses["lime._backend.html5.HTML5Application"] = lime._backend.html5.HTML5Application;
lime._backend.html5.HTML5Application.__name__ = ["lime","_backend","html5","HTML5Application"];
lime._backend.html5.HTML5Application.prototype = {
	convertKeyCode: function(keyCode) {
		if(keyCode >= 65 && keyCode <= 90) return keyCode + 32;
		switch(keyCode) {
		case 16:
			return 1073742049;
		case 17:
			return 1073742048;
		case 18:
			return 1073742050;
		case 20:
			return 1073741881;
		case 144:
			return 1073741907;
		case 37:
			return 1073741904;
		case 38:
			return 1073741906;
		case 39:
			return 1073741903;
		case 40:
			return 1073741905;
		case 45:
			return 1073741897;
		case 46:
			return 127;
		case 36:
			return 1073741898;
		case 35:
			return 1073741901;
		case 33:
			return 1073741899;
		case 34:
			return 1073741902;
		case 112:
			return 1073741882;
		case 113:
			return 1073741883;
		case 114:
			return 1073741884;
		case 115:
			return 1073741885;
		case 116:
			return 1073741886;
		case 117:
			return 1073741887;
		case 118:
			return 1073741888;
		case 119:
			return 1073741889;
		case 120:
			return 1073741890;
		case 121:
			return 1073741891;
		case 122:
			return 1073741892;
		case 123:
			return 1073741893;
		case 124:
			return 1073741928;
		case 125:
			return 1073741929;
		case 126:
			return 1073741930;
		case 186:
			return 59;
		case 187:
			return 61;
		case 188:
			return 44;
		case 189:
			return 45;
		case 190:
			return 46;
		case 191:
			return 47;
		case 192:
			return 96;
		case 219:
			return 91;
		case 220:
			return 92;
		case 221:
			return 93;
		case 222:
			return 39;
		}
		return keyCode;
	}
	,create: function(config) {
	}
	,exec: function() {
		window.addEventListener("keydown",$bind(this,this.handleKeyEvent),false);
		window.addEventListener("keyup",$bind(this,this.handleKeyEvent),false);
		window.addEventListener("focus",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("blur",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("resize",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("beforeunload",$bind(this,this.handleWindowEvent),false);
		
			var lastTime = 0;
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
			}
			
			if (!window.requestAnimationFrame)
				window.requestAnimationFrame = function(callback, element) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
					  timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
			
			if (!window.cancelAnimationFrame)
				window.cancelAnimationFrame = function(id) {
					clearTimeout(id);
				};
			
			window.requestAnimFrame = window.requestAnimationFrame;
		;
		this.lastUpdate = new Date().getTime();
		this.handleApplicationEvent();
		return 0;
	}
	,exit: function() {
	}
	,handleApplicationEvent: function(__) {
		this.currentUpdate = new Date().getTime();
		if(this.currentUpdate >= this.nextUpdate) {
			this.deltaTime = this.currentUpdate - this.lastUpdate;
			var listeners = this.parent.onUpdate.listeners;
			var repeat = this.parent.onUpdate.repeat;
			var i = 0;
			while(i < listeners.length) {
				listeners[i](this.deltaTime | 0);
				if(!repeat[i]) this.parent.onUpdate.remove(listeners[i]); else i++;
			}
			if(this.parent.renderers[0] != null) {
				var listeners1 = this.parent.renderers[0].onRender.listeners;
				var repeat1 = this.parent.renderers[0].onRender.repeat;
				var i1 = 0;
				while(i1 < listeners1.length) {
					listeners1[i1]();
					if(!repeat1[i1]) this.parent.renderers[0].onRender.remove(listeners1[i1]); else i1++;
				}
				this.parent.renderers[0].flip();
			}
			if(this.framePeriod < 0) {
				this.nextUpdate = this.currentUpdate;
				this.nextUpdate = this.currentUpdate;
			} else this.nextUpdate = this.currentUpdate + this.framePeriod;
			this.lastUpdate = this.currentUpdate;
		}
		window.requestAnimationFrame($bind(this,this.handleApplicationEvent));
	}
	,handleKeyEvent: function(event) {
		if(this.parent.windows[0] != null) {
			var keyCode = this.convertKeyCode(event.keyCode != null?event.keyCode:event.which);
			var modifier;
			modifier = (event.shiftKey?3:0) | (event.ctrlKey?192:0) | (event.altKey?768:0) | (event.metaKey?3072:0);
			if(event.type == "keydown") {
				var listeners = this.parent.windows[0].onKeyDown.listeners;
				var repeat = this.parent.windows[0].onKeyDown.repeat;
				var i = 0;
				while(i < listeners.length) {
					listeners[i](keyCode,modifier);
					if(!repeat[i]) this.parent.windows[0].onKeyDown.remove(listeners[i]); else i++;
				}
			} else {
				var listeners1 = this.parent.windows[0].onKeyUp.listeners;
				var repeat1 = this.parent.windows[0].onKeyUp.repeat;
				var i1 = 0;
				while(i1 < listeners1.length) {
					listeners1[i1](keyCode,modifier);
					if(!repeat1[i1]) this.parent.windows[0].onKeyUp.remove(listeners1[i1]); else i1++;
				}
			}
		}
	}
	,handleWindowEvent: function(event) {
		if(this.parent.windows[0] != null) {
			var _g = event.type;
			switch(_g) {
			case "focus":
				var listeners = this.parent.windows[0].onFocusIn.listeners;
				var repeat = this.parent.windows[0].onFocusIn.repeat;
				var i = 0;
				while(i < listeners.length) {
					listeners[i]();
					if(!repeat[i]) this.parent.windows[0].onFocusIn.remove(listeners[i]); else i++;
				}
				var listeners1 = this.parent.windows[0].onActivate.listeners;
				var repeat1 = this.parent.windows[0].onActivate.repeat;
				var i1 = 0;
				while(i1 < listeners1.length) {
					listeners1[i1]();
					if(!repeat1[i1]) this.parent.windows[0].onActivate.remove(listeners1[i1]); else i1++;
				}
				break;
			case "blur":
				var listeners2 = this.parent.windows[0].onFocusOut.listeners;
				var repeat2 = this.parent.windows[0].onFocusOut.repeat;
				var i2 = 0;
				while(i2 < listeners2.length) {
					listeners2[i2]();
					if(!repeat2[i2]) this.parent.windows[0].onFocusOut.remove(listeners2[i2]); else i2++;
				}
				var listeners3 = this.parent.windows[0].onDeactivate.listeners;
				var repeat3 = this.parent.windows[0].onDeactivate.repeat;
				var i3 = 0;
				while(i3 < listeners3.length) {
					listeners3[i3]();
					if(!repeat3[i3]) this.parent.windows[0].onDeactivate.remove(listeners3[i3]); else i3++;
				}
				break;
			case "resize":
				var cacheWidth = this.parent.windows[0].__width;
				var cacheHeight = this.parent.windows[0].__height;
				this.parent.windows[0].backend.handleResize();
				if(this.parent.windows[0].__width != cacheWidth || this.parent.windows[0].__height != cacheHeight) {
					var listeners4 = this.parent.windows[0].onResize.listeners;
					var repeat4 = this.parent.windows[0].onResize.repeat;
					var i4 = 0;
					while(i4 < listeners4.length) {
						listeners4[i4](this.parent.windows[0].__width,this.parent.windows[0].__height);
						if(!repeat4[i4]) this.parent.windows[0].onResize.remove(listeners4[i4]); else i4++;
					}
				}
				break;
			case "beforeunload":
				var listeners5 = this.parent.windows[0].onClose.listeners;
				var repeat5 = this.parent.windows[0].onClose.repeat;
				var i5 = 0;
				while(i5 < listeners5.length) {
					listeners5[i5]();
					if(!repeat5[i5]) this.parent.windows[0].onClose.remove(listeners5[i5]); else i5++;
				}
				break;
			}
		}
	}
	,setFrameRate: function(value) {
		if(value >= 60) this.framePeriod = -1; else if(value > 0) this.framePeriod = 1000 / value; else this.framePeriod = 1000;
		return value;
	}
	,__class__: lime._backend.html5.HTML5Application
};
lime._backend.html5.HTML5Mouse = function() { };
$hxClasses["lime._backend.html5.HTML5Mouse"] = lime._backend.html5.HTML5Mouse;
lime._backend.html5.HTML5Mouse.__name__ = ["lime","_backend","html5","HTML5Mouse"];
lime._backend.html5.HTML5Mouse.__cursor = null;
lime._backend.html5.HTML5Mouse.__hidden = null;
lime._backend.html5.HTML5Mouse.set_cursor = function(value) {
	if(lime._backend.html5.HTML5Mouse.__cursor != value) {
		if(!lime._backend.html5.HTML5Mouse.__hidden) {
			var _g = 0;
			var _g1 = lime.app.Application.current.windows;
			while(_g < _g1.length) {
				var $window = _g1[_g];
				++_g;
				switch(value[1]) {
				case 0:
					$window.backend.element.style.cursor = "default";
					break;
				case 1:
					$window.backend.element.style.cursor = "crosshair";
					break;
				case 3:
					$window.backend.element.style.cursor = "move";
					break;
				case 4:
					$window.backend.element.style.cursor = "pointer";
					break;
				case 5:
					$window.backend.element.style.cursor = "nesw-resize";
					break;
				case 6:
					$window.backend.element.style.cursor = "ns-resize";
					break;
				case 7:
					$window.backend.element.style.cursor = "nwse-resize";
					break;
				case 8:
					$window.backend.element.style.cursor = "ew-resize";
					break;
				case 9:
					$window.backend.element.style.cursor = "text";
					break;
				case 10:
					$window.backend.element.style.cursor = "wait";
					break;
				case 11:
					$window.backend.element.style.cursor = "wait";
					break;
				default:
					$window.backend.element.style.cursor = "auto";
				}
			}
		}
		lime._backend.html5.HTML5Mouse.__cursor = value;
	}
	return lime._backend.html5.HTML5Mouse.__cursor;
};
lime._backend.html5.HTML5Renderer = function(parent) {
	this.parent = parent;
};
$hxClasses["lime._backend.html5.HTML5Renderer"] = lime._backend.html5.HTML5Renderer;
lime._backend.html5.HTML5Renderer.__name__ = ["lime","_backend","html5","HTML5Renderer"];
lime._backend.html5.HTML5Renderer.prototype = {
	create: function() {
		this.createContext();
		{
			var _g = this.parent.context;
			switch(_g[1]) {
			case 0:
				this.parent.window.backend.canvas.addEventListener("webglcontextlost",$bind(this,this.handleEvent),false);
				this.parent.window.backend.canvas.addEventListener("webglcontextrestored",$bind(this,this.handleEvent),false);
				break;
			default:
			}
		}
	}
	,createContext: function() {
		if(this.parent.window.backend.div != null) {
			this.parent.context = lime.graphics.RenderContext.DOM(this.parent.window.backend.div);
			this.parent.type = lime.graphics.RendererType.DOM;
		} else if(this.parent.window.backend.canvas != null) {
			var webgl = null;
			if(webgl == null) {
				this.parent.context = lime.graphics.RenderContext.CANVAS(this.parent.window.backend.canvas.getContext("2d"));
				this.parent.type = lime.graphics.RendererType.CANVAS;
			} else {
				webgl = WebGLDebugUtils.makeDebugContext(webgl);
				lime.graphics.opengl.GL.context = webgl;
				this.parent.context = lime.graphics.RenderContext.OPENGL(lime.graphics.opengl.GL.context);
				this.parent.type = lime.graphics.RendererType.OPENGL;
			}
		}
	}
	,flip: function() {
	}
	,handleEvent: function(event) {
		var _g = event.type;
		switch(_g) {
		case "webglcontextlost":
			event.preventDefault();
			this.parent.context = null;
			var listeners = this.parent.onContextLost.listeners;
			var repeat = this.parent.onContextLost.repeat;
			var i = 0;
			while(i < listeners.length) {
				listeners[i]();
				if(!repeat[i]) this.parent.onContextLost.remove(listeners[i]); else i++;
			}
			break;
		case "webglcontextrestored":
			this.createContext();
			var listeners1 = this.parent.onContextRestored.listeners;
			var repeat1 = this.parent.onContextRestored.repeat;
			var i1 = 0;
			while(i1 < listeners1.length) {
				listeners1[i1](this.parent.context);
				if(!repeat1[i1]) this.parent.onContextRestored.remove(listeners1[i1]); else i1++;
			}
			break;
		default:
		}
	}
	,__class__: lime._backend.html5.HTML5Renderer
};
lime._backend.html5.HTML5Window = function(parent) {
	this.unusedTouchesPool = new List();
	this.currentTouches = new haxe.ds.IntMap();
	this.parent = parent;
	if(parent.config != null && Object.prototype.hasOwnProperty.call(parent.config,"element")) this.element = parent.config.element;
};
$hxClasses["lime._backend.html5.HTML5Window"] = lime._backend.html5.HTML5Window;
lime._backend.html5.HTML5Window.__name__ = ["lime","_backend","html5","HTML5Window"];
lime._backend.html5.HTML5Window.textInput = null;
lime._backend.html5.HTML5Window.prototype = {
	close: function() {
		this.parent.application.removeWindow(this.parent);
	}
	,create: function(application) {
		this.setWidth = this.parent.__width;
		this.setHeight = this.parent.__height;
		this.parent.id = lime._backend.html5.HTML5Window.windowID++;
		if(js.Boot.__instanceof(this.element,HTMLCanvasElement)) this.canvas = this.element; else this.canvas = window.document.createElement("canvas");
		if(this.canvas != null) {
			var style = this.canvas.style;
			style.setProperty("-webkit-transform","translateZ(0)",null);
			style.setProperty("transform","translateZ(0)",null);
		} else if(this.div != null) {
			var style1 = this.div.style;
			style1.setProperty("-webkit-transform","translate3D(0,0,0)",null);
			style1.setProperty("transform","translate3D(0,0,0)",null);
			style1.position = "relative";
			style1.overflow = "hidden";
			style1.setProperty("-webkit-user-select","none",null);
			style1.setProperty("-moz-user-select","none",null);
			style1.setProperty("-ms-user-select","none",null);
			style1.setProperty("-o-user-select","none",null);
		}
		if(this.parent.__width == 0 && this.parent.__height == 0) {
			if(this.element != null) {
				this.parent.set_width(this.element.clientWidth);
				this.parent.set_height(this.element.clientHeight);
			} else {
				this.parent.set_width(window.innerWidth);
				this.parent.set_height(window.innerHeight);
			}
			this.parent.set_fullscreen(true);
		}
		if(this.canvas != null) {
			this.canvas.width = this.parent.__width;
			this.canvas.height = this.parent.__height;
		} else {
			this.div.style.width = this.parent.__width + "px";
			this.div.style.height = this.parent.__height + "px";
		}
		this.handleResize();
		if(this.element != null) {
			if(this.canvas != null) {
				if(this.element != this.canvas) this.element.appendChild(this.canvas);
			} else this.element.appendChild(this.div);
			var events = ["mousedown","mouseenter","mouseleave","mousemove","mouseup","wheel"];
			var _g = 0;
			while(_g < events.length) {
				var event = events[_g];
				++_g;
				this.element.addEventListener(event,$bind(this,this.handleMouseEvent),true);
			}
			window.document.addEventListener("dragstart",function(e) {
				if(e.target.nodeName.toLowerCase() == "img") {
					e.preventDefault();
					return false;
				}
				return true;
			},false);
			this.element.addEventListener("touchstart",$bind(this,this.handleTouchEvent),true);
			this.element.addEventListener("touchmove",$bind(this,this.handleTouchEvent),true);
			this.element.addEventListener("touchend",$bind(this,this.handleTouchEvent),true);
		}
	}
	,handleFocusEvent: function(event) {
		if(this.enableTextEvents) haxe.Timer.delay(function() {
			lime._backend.html5.HTML5Window.textInput.focus();
		},20);
	}
	,handleInputEvent: function(event) {
		if(lime._backend.html5.HTML5Window.textInput.value != "") {
			var listeners = this.parent.onTextInput.listeners;
			var repeat = this.parent.onTextInput.repeat;
			var i = 0;
			while(i < listeners.length) {
				listeners[i](lime._backend.html5.HTML5Window.textInput.value);
				if(!repeat[i]) this.parent.onTextInput.remove(listeners[i]); else i++;
			}
			lime._backend.html5.HTML5Window.textInput.value = "";
		}
	}
	,handleMouseEvent: function(event) {
		var x = 0.0;
		var y = 0.0;
		if(event.type != "wheel") {
			if(this.element != null) {
				if(this.canvas != null) {
					var rect = this.canvas.getBoundingClientRect();
					x = (event.clientX - rect.left) * (this.parent.__width / rect.width);
					y = (event.clientY - rect.top) * (this.parent.__height / rect.height);
				} else if(this.div != null) {
					var rect1 = this.div.getBoundingClientRect();
					x = event.clientX - rect1.left;
					y = event.clientY - rect1.top;
				} else {
					var rect2 = this.element.getBoundingClientRect();
					x = (event.clientX - rect2.left) * (this.parent.__width / rect2.width);
					y = (event.clientY - rect2.top) * (this.parent.__height / rect2.height);
				}
			} else {
				x = event.clientX;
				y = event.clientY;
			}
			var _g = event.type;
			switch(_g) {
			case "mousedown":
				var listeners = this.parent.onMouseDown.listeners;
				var repeat = this.parent.onMouseDown.repeat;
				var i = 0;
				while(i < listeners.length) {
					listeners[i](x,y,event.button);
					if(!repeat[i]) this.parent.onMouseDown.remove(listeners[i]); else i++;
				}
				break;
			case "mouseenter":
				var listeners1 = this.parent.onEnter.listeners;
				var repeat1 = this.parent.onEnter.repeat;
				var i1 = 0;
				while(i1 < listeners1.length) {
					listeners1[i1]();
					if(!repeat1[i1]) this.parent.onEnter.remove(listeners1[i1]); else i1++;
				}
				break;
			case "mouseleave":
				var listeners2 = this.parent.onLeave.listeners;
				var repeat2 = this.parent.onLeave.repeat;
				var i2 = 0;
				while(i2 < listeners2.length) {
					listeners2[i2]();
					if(!repeat2[i2]) this.parent.onLeave.remove(listeners2[i2]); else i2++;
				}
				break;
			case "mouseup":
				var listeners3 = this.parent.onMouseUp.listeners;
				var repeat3 = this.parent.onMouseUp.repeat;
				var i3 = 0;
				while(i3 < listeners3.length) {
					listeners3[i3](x,y,event.button);
					if(!repeat3[i3]) this.parent.onMouseUp.remove(listeners3[i3]); else i3++;
				}
				break;
			case "mousemove":
				var listeners4 = this.parent.onMouseMove.listeners;
				var repeat4 = this.parent.onMouseMove.repeat;
				var i4 = 0;
				while(i4 < listeners4.length) {
					listeners4[i4](x,y);
					if(!repeat4[i4]) this.parent.onMouseMove.remove(listeners4[i4]); else i4++;
				}
				break;
			default:
			}
		} else {
			var listeners5 = this.parent.onMouseWheel.listeners;
			var repeat5 = this.parent.onMouseWheel.repeat;
			var i5 = 0;
			while(i5 < listeners5.length) {
				listeners5[i5](event.deltaX,-event.deltaY);
				if(!repeat5[i5]) this.parent.onMouseWheel.remove(listeners5[i5]); else i5++;
			}
		}
	}
	,handleResize: function() {
		var stretch = this.parent.__fullscreen || this.setWidth == 0 && this.setHeight == 0;
		if(this.element != null && (this.div == null || this.div != null && stretch)) {
			if(stretch) {
				if(this.parent.__width != this.element.clientWidth || this.parent.__height != this.element.clientHeight) {
					this.parent.set_width(this.element.clientWidth);
					this.parent.set_height(this.element.clientHeight);
					if(this.canvas != null) {
						if(this.element != this.canvas) {
							this.canvas.width = this.element.clientWidth;
							this.canvas.height = this.element.clientHeight;
						}
					} else {
						this.div.style.width = this.element.clientWidth + "px";
						this.div.style.height = this.element.clientHeight + "px";
					}
				}
			} else {
				var scaleX = this.element.clientWidth / this.setWidth;
				var scaleY = this.element.clientHeight / this.setHeight;
				var currentRatio = scaleX / scaleY;
				var targetRatio = Math.min(scaleX,scaleY);
				if(this.canvas != null) {
					if(this.element != this.canvas) {
						this.canvas.style.width = this.setWidth * targetRatio + "px";
						this.canvas.style.height = this.setHeight * targetRatio + "px";
						this.canvas.style.marginLeft = (this.element.clientWidth - this.setWidth * targetRatio) / 2 + "px";
						this.canvas.style.marginTop = (this.element.clientHeight - this.setHeight * targetRatio) / 2 + "px";
					}
				} else {
					this.div.style.width = this.setWidth * targetRatio + "px";
					this.div.style.height = this.setHeight * targetRatio + "px";
					this.div.style.marginLeft = (this.element.clientWidth - this.setWidth * targetRatio) / 2 + "px";
					this.div.style.marginTop = (this.element.clientHeight - this.setHeight * targetRatio) / 2 + "px";
				}
			}
		}
	}
	,handleTouchEvent: function(event) {
		event.preventDefault();
		var rect = null;
		if(this.element != null) {
			if(this.canvas != null) rect = this.canvas.getBoundingClientRect(); else if(this.div != null) rect = this.div.getBoundingClientRect(); else rect = this.element.getBoundingClientRect();
		}
		var _g = 0;
		var _g1 = event.changedTouches;
		while(_g < _g1.length) {
			var data = _g1[_g];
			++_g;
			var x = 0.0;
			var y = 0.0;
			if(rect != null) {
				x = (data.clientX - rect.left) * (this.parent.__width / rect.width);
				y = (data.clientY - rect.top) * (this.parent.__height / rect.height);
			} else {
				x = data.clientX;
				y = data.clientY;
			}
			var _g2 = event.type;
			switch(_g2) {
			case "touchstart":
				var touch = this.unusedTouchesPool.pop();
				if(touch == null) touch = new lime.ui.Touch(x / this.setWidth,y / this.setHeight,data.identifier,0,0,data.force,this.parent.id); else {
					touch.x = x / this.setWidth;
					touch.y = y / this.setHeight;
					touch.id = data.identifier;
					touch.dx = 0;
					touch.dy = 0;
					touch.pressure = data.force;
					touch.device = this.parent.id;
				}
				this.currentTouches.set(data.identifier,touch);
				var listeners = lime.ui.Touch.onStart.listeners;
				var repeat = lime.ui.Touch.onStart.repeat;
				var i = 0;
				while(i < listeners.length) {
					listeners[i](touch);
					if(!repeat[i]) lime.ui.Touch.onStart.remove(listeners[i]); else i++;
				}
				if(data == event.touches[0]) {
					var listeners1 = this.parent.onMouseDown.listeners;
					var repeat1 = this.parent.onMouseDown.repeat;
					var i1 = 0;
					while(i1 < listeners1.length) {
						listeners1[i1](x,y,0);
						if(!repeat1[i1]) this.parent.onMouseDown.remove(listeners1[i1]); else i1++;
					}
				}
				break;
			case "touchend":
				var touch1 = this.currentTouches.get(data.identifier);
				if(touch1 != null) {
					var cacheX = touch1.x;
					var cacheY = touch1.y;
					touch1.x = x / this.setWidth;
					touch1.y = y / this.setHeight;
					touch1.dx = touch1.x - cacheX;
					touch1.dy = touch1.y - cacheY;
					touch1.pressure = data.force;
					var listeners2 = lime.ui.Touch.onEnd.listeners;
					var repeat2 = lime.ui.Touch.onEnd.repeat;
					var i2 = 0;
					while(i2 < listeners2.length) {
						listeners2[i2](touch1);
						if(!repeat2[i2]) lime.ui.Touch.onEnd.remove(listeners2[i2]); else i2++;
					}
					this.currentTouches.remove(data.identifier);
					this.unusedTouchesPool.add(touch1);
					if(data == event.touches[0]) {
						var listeners3 = this.parent.onMouseUp.listeners;
						var repeat3 = this.parent.onMouseUp.repeat;
						var i3 = 0;
						while(i3 < listeners3.length) {
							listeners3[i3](x,y,0);
							if(!repeat3[i3]) this.parent.onMouseUp.remove(listeners3[i3]); else i3++;
						}
					}
				}
				break;
			case "touchmove":
				var touch2 = this.currentTouches.get(data.identifier);
				if(touch2 != null) {
					var cacheX1 = touch2.x;
					var cacheY1 = touch2.y;
					touch2.x = x / this.setWidth;
					touch2.y = y / this.setHeight;
					touch2.dx = touch2.x - cacheX1;
					touch2.dy = touch2.y - cacheY1;
					touch2.pressure = data.force;
					var listeners4 = lime.ui.Touch.onMove.listeners;
					var repeat4 = lime.ui.Touch.onMove.repeat;
					var i4 = 0;
					while(i4 < listeners4.length) {
						listeners4[i4](touch2);
						if(!repeat4[i4]) lime.ui.Touch.onMove.remove(listeners4[i4]); else i4++;
					}
					if(data == event.touches[0]) {
						var listeners5 = this.parent.onMouseMove.listeners;
						var repeat5 = this.parent.onMouseMove.repeat;
						var i5 = 0;
						while(i5 < listeners5.length) {
							listeners5[i5](x,y);
							if(!repeat5[i5]) this.parent.onMouseMove.remove(listeners5[i5]); else i5++;
						}
					}
				}
				break;
			default:
			}
		}
	}
	,resize: function(width,height) {
	}
	,setEnableTextEvents: function(value) {
		if(value) {
			if(lime._backend.html5.HTML5Window.textInput == null) {
				lime._backend.html5.HTML5Window.textInput = window.document.createElement("input");
				lime._backend.html5.HTML5Window.textInput.type = "text";
				lime._backend.html5.HTML5Window.textInput.style.position = "absolute";
				lime._backend.html5.HTML5Window.textInput.style.opacity = "0";
				lime._backend.html5.HTML5Window.textInput.style.color = "transparent";
				lime._backend.html5.HTML5Window.textInput.value = "";
				lime._backend.html5.HTML5Window.textInput.autocapitalize = "off";
				lime._backend.html5.HTML5Window.textInput.autocorrect = "off";
				lime._backend.html5.HTML5Window.textInput.autocomplete = "off";
				lime._backend.html5.HTML5Window.textInput.style.left = "0px";
				lime._backend.html5.HTML5Window.textInput.style.top = "50%";
				if(new EReg("(iPad|iPhone|iPod).*OS 8_","gi").match(window.navigator.userAgent)) {
					lime._backend.html5.HTML5Window.textInput.style.fontSize = "0px";
					lime._backend.html5.HTML5Window.textInput.style.width = "0px";
					lime._backend.html5.HTML5Window.textInput.style.height = "0px";
				} else {
					lime._backend.html5.HTML5Window.textInput.style.width = "1px";
					lime._backend.html5.HTML5Window.textInput.style.height = "1px";
				}
				lime._backend.html5.HTML5Window.textInput.style.pointerEvents = "none";
				lime._backend.html5.HTML5Window.textInput.style.zIndex = "-10000000";
				window.document.body.appendChild(lime._backend.html5.HTML5Window.textInput);
			}
			if(!this.enableTextEvents) {
				lime._backend.html5.HTML5Window.textInput.addEventListener("input",$bind(this,this.handleInputEvent),true);
				lime._backend.html5.HTML5Window.textInput.addEventListener("blur",$bind(this,this.handleFocusEvent),true);
			}
			lime._backend.html5.HTML5Window.textInput.focus();
		} else if(lime._backend.html5.HTML5Window.textInput != null) {
			lime._backend.html5.HTML5Window.textInput.removeEventListener("input",$bind(this,this.handleInputEvent),true);
			lime._backend.html5.HTML5Window.textInput.removeEventListener("blur",$bind(this,this.handleFocusEvent),true);
			lime._backend.html5.HTML5Window.textInput.blur();
		}
		return this.enableTextEvents = value;
	}
	,setFullscreen: function(value) {
		return false;
	}
	,__class__: lime._backend.html5.HTML5Window
};
lime.app = {};
lime.app.IModule = function() { };
$hxClasses["lime.app.IModule"] = lime.app.IModule;
lime.app.IModule.__name__ = ["lime","app","IModule"];
lime.app.IModule.prototype = {
	__class__: lime.app.IModule
};
lime.app.Module = function() {
	this.onExit = new lime.app.Event();
};
$hxClasses["lime.app.Module"] = lime.app.Module;
lime.app.Module.__name__ = ["lime","app","Module"];
lime.app.Module.__interfaces__ = [lime.app.IModule];
lime.app.Module.prototype = {
	onGamepadAxisMove: function(gamepad,axis,value) {
	}
	,onGamepadButtonDown: function(gamepad,button) {
	}
	,onGamepadButtonUp: function(gamepad,button) {
	}
	,onGamepadConnect: function(gamepad) {
	}
	,onGamepadDisconnect: function(gamepad) {
	}
	,onKeyDown: function(window,keyCode,modifier) {
	}
	,onKeyUp: function(window,keyCode,modifier) {
	}
	,onModuleExit: function(code) {
	}
	,onMouseDown: function(window,x,y,button) {
	}
	,onMouseMove: function(window,x,y) {
	}
	,onMouseMoveRelative: function(window,x,y) {
	}
	,onMouseUp: function(window,x,y,button) {
	}
	,onMouseWheel: function(window,deltaX,deltaY) {
	}
	,onPreloadComplete: function() {
	}
	,onPreloadProgress: function(loaded,total) {
	}
	,onRenderContextLost: function(renderer) {
	}
	,onRenderContextRestored: function(renderer,context) {
	}
	,onTextEdit: function(window,text,start,length) {
	}
	,onTextInput: function(window,text) {
	}
	,onTouchEnd: function(touch) {
	}
	,onTouchMove: function(touch) {
	}
	,onTouchStart: function(touch) {
	}
	,onWindowActivate: function(window) {
	}
	,onWindowClose: function(window) {
	}
	,onWindowCreate: function(window) {
	}
	,onWindowDeactivate: function(window) {
	}
	,onWindowEnter: function(window) {
	}
	,onWindowFocusIn: function(window) {
	}
	,onWindowFocusOut: function(window) {
	}
	,onWindowFullscreen: function(window) {
	}
	,onWindowLeave: function(window) {
	}
	,onWindowMove: function(window,x,y) {
	}
	,onWindowMinimize: function(window) {
	}
	,onWindowResize: function(window,width,height) {
	}
	,onWindowRestore: function(window) {
	}
	,render: function(renderer) {
	}
	,update: function(deltaTime) {
	}
	,__class__: lime.app.Module
};
lime.app.Application = function() {
	this.onUpdate = new lime.app.Event();
	lime.app.Module.call(this);
	if(lime.app.Application.current == null) lime.app.Application.current = this;
	this.modules = new Array();
	this.renderers = new Array();
	this.windows = new Array();
	this.windowByID = new haxe.ds.IntMap();
	this.backend = new lime._backend.html5.HTML5Application(this);
	this.onExit.add($bind(this,this.onModuleExit));
	this.onUpdate.add($bind(this,this.update));
	lime.ui.Gamepad.onConnect.add($bind(this,this.onGamepadConnect));
	lime.ui.Touch.onStart.add($bind(this,this.onTouchStart));
	lime.ui.Touch.onMove.add($bind(this,this.onTouchMove));
	lime.ui.Touch.onEnd.add($bind(this,this.onTouchEnd));
};
$hxClasses["lime.app.Application"] = lime.app.Application;
lime.app.Application.__name__ = ["lime","app","Application"];
lime.app.Application.current = null;
lime.app.Application.__super__ = lime.app.Module;
lime.app.Application.prototype = $extend(lime.app.Module.prototype,{
	addModule: function(module) {
		this.modules.push(module);
		if(this.windows.length > 0) {
			var _g = 0;
			var _g1 = this.windows;
			while(_g < _g1.length) {
				var $window = _g1[_g];
				++_g;
				module.onWindowCreate($window);
			}
			if(this.preloader == null || this.preloader.complete) module.onPreloadComplete();
		}
	}
	,addRenderer: function(renderer) {
		renderer.onRender.add((function(f,a1) {
			return function() {
				return f(a1);
			};
		})($bind(this,this.render),renderer));
		renderer.onContextLost.add((function(f1,a11) {
			return function() {
				return f1(a11);
			};
		})($bind(this,this.onRenderContextLost),renderer));
		renderer.onContextRestored.add((function(f2,a12) {
			return function(a2) {
				return f2(a12,a2);
			};
		})($bind(this,this.onRenderContextRestored),renderer));
		this.renderers.push(renderer);
	}
	,createWindow: function(window) {
		window.onActivate.add((function(f,a1) {
			return function() {
				return f(a1);
			};
		})($bind(this,this.onWindowActivate),window));
		window.onClose.add((function(f1,a11) {
			return function() {
				return f1(a11);
			};
		})($bind(this,this.onWindowClose),window));
		window.onCreate.add((function(f2,a12) {
			return function() {
				return f2(a12);
			};
		})($bind(this,this.onWindowCreate),window));
		window.onDeactivate.add((function(f3,a13) {
			return function() {
				return f3(a13);
			};
		})($bind(this,this.onWindowDeactivate),window));
		window.onEnter.add((function(f4,a14) {
			return function() {
				return f4(a14);
			};
		})($bind(this,this.onWindowEnter),window));
		window.onFocusIn.add((function(f5,a15) {
			return function() {
				return f5(a15);
			};
		})($bind(this,this.onWindowFocusIn),window));
		window.onFocusOut.add((function(f6,a16) {
			return function() {
				return f6(a16);
			};
		})($bind(this,this.onWindowFocusOut),window));
		window.onFullscreen.add((function(f7,a17) {
			return function() {
				return f7(a17);
			};
		})($bind(this,this.onWindowFullscreen),window));
		window.onKeyDown.add((function(f8,a18) {
			return function(a2,a3) {
				return f8(a18,a2,a3);
			};
		})($bind(this,this.onKeyDown),window));
		window.onKeyUp.add((function(f9,a19) {
			return function(a21,a31) {
				return f9(a19,a21,a31);
			};
		})($bind(this,this.onKeyUp),window));
		window.onLeave.add((function(f10,a110) {
			return function() {
				return f10(a110);
			};
		})($bind(this,this.onWindowLeave),window));
		window.onMinimize.add((function(f11,a111) {
			return function() {
				return f11(a111);
			};
		})($bind(this,this.onWindowMinimize),window));
		window.onMouseDown.add((function(f12,a112) {
			return function(x,y,a22) {
				return f12(a112,x,y,a22);
			};
		})($bind(this,this.onMouseDown),window));
		window.onMouseMove.add((function(f13,a113) {
			return function(x1,y1) {
				return f13(a113,x1,y1);
			};
		})($bind(this,this.onMouseMove),window));
		window.onMouseMoveRelative.add((function(f14,a114) {
			return function(x2,y2) {
				return f14(a114,x2,y2);
			};
		})($bind(this,this.onMouseMoveRelative),window));
		window.onMouseUp.add((function(f15,a115) {
			return function(x3,y3,a23) {
				return f15(a115,x3,y3,a23);
			};
		})($bind(this,this.onMouseUp),window));
		window.onMouseWheel.add((function(f16,a116) {
			return function(a24,a32) {
				return f16(a116,a24,a32);
			};
		})($bind(this,this.onMouseWheel),window));
		window.onMove.add((function(f17,a117) {
			return function(x4,y4) {
				return f17(a117,x4,y4);
			};
		})($bind(this,this.onWindowMove),window));
		window.onResize.add((function(f18,a118) {
			return function(a25,a33) {
				return f18(a118,a25,a33);
			};
		})($bind(this,this.onWindowResize),window));
		window.onRestore.add((function(f19,a119) {
			return function() {
				return f19(a119);
			};
		})($bind(this,this.onWindowRestore),window));
		window.onTextEdit.add((function(f20,a120) {
			return function(a26,a34,a4) {
				return f20(a120,a26,a34,a4);
			};
		})($bind(this,this.onTextEdit),window));
		window.onTextInput.add((function(f21,a121) {
			return function(a27) {
				return f21(a121,a27);
			};
		})($bind(this,this.onTextInput),window));
		if(window.renderer == null) {
			var renderer = new lime.graphics.Renderer(window);
			this.addRenderer(renderer);
		}
		window.create(this);
		this.windows.push(window);
		this.windowByID.set(window.id,window);
		var listeners = window.onCreate.listeners;
		var repeat = window.onCreate.repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i]();
			if(!repeat[i]) window.onCreate.remove(listeners[i]); else i++;
		}
	}
	,exec: function() {
		lime.app.Application.current = this;
		return this.backend.exec();
	}
	,onGamepadAxisMove: function(gamepad,axis,value) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onGamepadAxisMove(gamepad,axis,value);
		}
	}
	,onGamepadButtonDown: function(gamepad,button) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onGamepadButtonDown(gamepad,button);
		}
	}
	,onGamepadButtonUp: function(gamepad,button) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onGamepadButtonUp(gamepad,button);
		}
	}
	,onGamepadConnect: function(gamepad) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onGamepadConnect(gamepad);
		}
		gamepad.onAxisMove.add((function(f,a1) {
			return function(a2,a3) {
				return f(a1,a2,a3);
			};
		})($bind(this,this.onGamepadAxisMove),gamepad));
		gamepad.onButtonDown.add((function(f1,a11) {
			return function(a21) {
				return f1(a11,a21);
			};
		})($bind(this,this.onGamepadButtonDown),gamepad));
		gamepad.onButtonUp.add((function(f2,a12) {
			return function(a22) {
				return f2(a12,a22);
			};
		})($bind(this,this.onGamepadButtonUp),gamepad));
		gamepad.onDisconnect.add((function(f3,a13) {
			return function() {
				return f3(a13);
			};
		})($bind(this,this.onGamepadDisconnect),gamepad));
	}
	,onGamepadDisconnect: function(gamepad) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onGamepadDisconnect(gamepad);
		}
	}
	,onKeyDown: function(window,keyCode,modifier) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onKeyDown(window,keyCode,modifier);
		}
	}
	,onKeyUp: function(window,keyCode,modifier) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onKeyUp(window,keyCode,modifier);
		}
	}
	,onModuleExit: function(code) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onModuleExit(code);
		}
		this.backend.exit();
	}
	,onMouseDown: function(window,x,y,button) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseDown(window,x,y,button);
		}
	}
	,onMouseMove: function(window,x,y) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseMove(window,x,y);
		}
	}
	,onMouseMoveRelative: function(window,x,y) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseMoveRelative(window,x,y);
		}
	}
	,onMouseUp: function(window,x,y,button) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseUp(window,x,y,button);
		}
	}
	,onMouseWheel: function(window,deltaX,deltaY) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseWheel(window,deltaX,deltaY);
		}
	}
	,onPreloadComplete: function() {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onPreloadComplete();
		}
	}
	,onPreloadProgress: function(loaded,total) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onPreloadProgress(loaded,total);
		}
	}
	,onRenderContextLost: function(renderer) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onRenderContextLost(renderer);
		}
	}
	,onRenderContextRestored: function(renderer,context) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onRenderContextRestored(renderer,context);
		}
	}
	,onTextEdit: function(window,text,start,length) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTextEdit(window,text,start,length);
		}
	}
	,onTextInput: function(window,text) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTextInput(window,text);
		}
	}
	,onTouchEnd: function(touch) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTouchEnd(touch);
		}
	}
	,onTouchMove: function(touch) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTouchMove(touch);
		}
	}
	,onTouchStart: function(touch) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTouchStart(touch);
		}
	}
	,onWindowActivate: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowActivate(window);
		}
	}
	,onWindowClose: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowClose(window);
		}
		this.removeWindow(window);
	}
	,onWindowCreate: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowCreate(window);
		}
	}
	,onWindowDeactivate: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowDeactivate(window);
		}
	}
	,onWindowEnter: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowEnter(window);
		}
	}
	,onWindowFocusIn: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowFocusIn(window);
		}
	}
	,onWindowFocusOut: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowFocusOut(window);
		}
	}
	,onWindowFullscreen: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowFullscreen(window);
		}
	}
	,onWindowLeave: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowLeave(window);
		}
	}
	,onWindowMinimize: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowMinimize(window);
		}
	}
	,onWindowMove: function(window,x,y) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowMove(window,x,y);
		}
	}
	,onWindowResize: function(window,width,height) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowResize(window,width,height);
		}
	}
	,onWindowRestore: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowRestore(window);
		}
	}
	,removeWindow: function(window) {
		if(window != null && this.windowByID.exists(window.id)) {
			HxOverrides.remove(this.windows,window);
			this.windowByID.remove(window.id);
			window.close();
			if(this.windows[0] == window) this.window = null;
		}
	}
	,render: function(renderer) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.render(renderer);
		}
	}
	,setPreloader: function(preloader) {
		if(this.preloader != null) {
			this.preloader.onProgress.remove($bind(this,this.onPreloadProgress));
			this.preloader.onComplete.remove($bind(this,this.onPreloadComplete));
		}
		this.preloader = preloader;
		if(preloader.complete) this.onPreloadComplete(); else {
			preloader.onProgress.add($bind(this,this.onPreloadProgress));
			preloader.onComplete.add($bind(this,this.onPreloadComplete));
		}
	}
	,update: function(deltaTime) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.update(deltaTime);
		}
	}
	,__class__: lime.app.Application
});
lime.app.Event = function() {
	this.listeners = new Array();
	this.priorities = new Array();
	this.repeat = new Array();
};
$hxClasses["lime.app.Event"] = lime.app.Event;
lime.app.Event.__name__ = ["lime","app","Event"];
lime.app.Event.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.priorities[i]) {
				this.listeners.splice(i,0,listener);
				this.priorities.splice(i,0,priority);
				this.repeat.splice(i,0,!once);
				return;
			}
		}
		this.listeners.push(listener);
		this.priorities.push(priority);
		this.repeat.push(!once);
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) return true;
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.listeners[i],listener)) {
			this.listeners.splice(i,1);
			this.priorities.splice(i,1);
			this.repeat.splice(i,1);
		}
	}
	,__class__: lime.app.Event
};
lime.app.Preloader = function() {
	this.total = 0;
	this.loaded = 0;
	this.onProgress = new lime.app.Event();
	this.onComplete = new lime.app.Event();
	this.onProgress.add($bind(this,this.update));
};
$hxClasses["lime.app.Preloader"] = lime.app.Preloader;
lime.app.Preloader.__name__ = ["lime","app","Preloader"];
lime.app.Preloader.prototype = {
	create: function(config) {
	}
	,load: function(urls,types) {
		var url = null;
		var _g1 = 0;
		var _g = urls.length;
		while(_g1 < _g) {
			var i = _g1++;
			url = urls[i];
			var _g2 = types[i];
			switch(_g2) {
			case "IMAGE":
				var image = new Image();
				lime.app.Preloader.images.set(url,image);
				image.onload = $bind(this,this.image_onLoad);
				image.src = url;
				this.total++;
				break;
			case "BINARY":
				var loader = new lime.net.URLLoader();
				loader.set_dataFormat(lime.net.URLLoaderDataFormat.BINARY);
				lime.app.Preloader.loaders.set(url,loader);
				this.total++;
				break;
			case "TEXT":
				var loader1 = new lime.net.URLLoader();
				lime.app.Preloader.loaders.set(url,loader1);
				this.total++;
				break;
			case "FONT":
				this.total++;
				this.loadFont(url);
				break;
			default:
			}
		}
		var $it0 = lime.app.Preloader.loaders.keys();
		while( $it0.hasNext() ) {
			var url1 = $it0.next();
			var loader2 = lime.app.Preloader.loaders.get(url1);
			loader2.onComplete.add($bind(this,this.loader_onComplete));
			loader2.load(new lime.net.URLRequest(url1));
		}
		if(this.total == 0) this.start();
	}
	,loadFont: function(font) {
		var _g = this;
		if(window.document.fonts && window.document.fonts.load) window.document.fonts.load("1em '" + font + "'").then(function(_) {
			_g.loaded++;
			var listeners = _g.onProgress.listeners;
			var repeat = _g.onProgress.repeat;
			var i = 0;
			while(i < listeners.length) {
				listeners[i](_g.loaded,_g.total);
				if(!repeat[i]) _g.onProgress.remove(listeners[i]); else i++;
			}
			if(_g.loaded == _g.total) _g.start();
		}); else {
			var node = window.document.createElement("span");
			node.innerHTML = "giItT1WQy@!-/#";
			var style = node.style;
			style.position = "absolute";
			style.left = "-10000px";
			style.top = "-10000px";
			style.fontSize = "300px";
			style.fontFamily = "sans-serif";
			style.fontVariant = "normal";
			style.fontStyle = "normal";
			style.fontWeight = "normal";
			style.letterSpacing = "0";
			window.document.body.appendChild(node);
			var width = node.offsetWidth;
			style.fontFamily = "'" + font + "', sans-serif";
			var interval = null;
			var found = false;
			var checkFont = function() {
				if(node.offsetWidth != width) {
					if(!found) {
						found = true;
						return false;
					}
					_g.loaded++;
					if(interval != null) window.clearInterval(interval);
					node.parentNode.removeChild(node);
					node = null;
					var listeners1 = _g.onProgress.listeners;
					var repeat1 = _g.onProgress.repeat;
					var i1 = 0;
					while(i1 < listeners1.length) {
						listeners1[i1](_g.loaded,_g.total);
						if(!repeat1[i1]) _g.onProgress.remove(listeners1[i1]); else i1++;
					}
					if(_g.loaded == _g.total) _g.start();
					return true;
				}
				return false;
			};
			if(!checkFont()) interval = window.setInterval(checkFont,50);
		}
	}
	,start: function() {
		this.complete = true;
		var listeners = this.onComplete.listeners;
		var repeat = this.onComplete.repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i]();
			if(!repeat[i]) this.onComplete.remove(listeners[i]); else i++;
		}
	}
	,update: function(loaded,total) {
	}
	,image_onLoad: function(_) {
		this.loaded++;
		var listeners = this.onProgress.listeners;
		var repeat = this.onProgress.repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](this.loaded,this.total);
			if(!repeat[i]) this.onProgress.remove(listeners[i]); else i++;
		}
		if(this.loaded == this.total) this.start();
	}
	,loader_onComplete: function(loader) {
		this.loaded++;
		var listeners = this.onProgress.listeners;
		var repeat = this.onProgress.repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](this.loaded,this.total);
			if(!repeat[i]) this.onProgress.remove(listeners[i]); else i++;
		}
		if(this.loaded == this.total) this.start();
	}
	,__class__: lime.app.Preloader
};
lime.audio = {};
lime.audio.ALAudioContext = function() { };
$hxClasses["lime.audio.ALAudioContext"] = lime.audio.ALAudioContext;
lime.audio.ALAudioContext.__name__ = ["lime","audio","ALAudioContext"];
lime.audio.ALCAudioContext = function() { };
$hxClasses["lime.audio.ALCAudioContext"] = lime.audio.ALCAudioContext;
lime.audio.ALCAudioContext.__name__ = ["lime","audio","ALCAudioContext"];
lime.audio.AudioBuffer = function() { };
$hxClasses["lime.audio.AudioBuffer"] = lime.audio.AudioBuffer;
lime.audio.AudioBuffer.__name__ = ["lime","audio","AudioBuffer"];
lime.audio.AudioContext = $hxClasses["lime.audio.AudioContext"] = { __ename__ : ["lime","audio","AudioContext"], __constructs__ : ["OPENAL","HTML5","WEB","FLASH","CUSTOM"] };
lime.audio.AudioContext.OPENAL = function(alc,al) { var $x = ["OPENAL",0,alc,al]; $x.__enum__ = lime.audio.AudioContext; $x.toString = $estr; return $x; };
lime.audio.AudioContext.HTML5 = function(context) { var $x = ["HTML5",1,context]; $x.__enum__ = lime.audio.AudioContext; $x.toString = $estr; return $x; };
lime.audio.AudioContext.WEB = function(context) { var $x = ["WEB",2,context]; $x.__enum__ = lime.audio.AudioContext; $x.toString = $estr; return $x; };
lime.audio.AudioContext.FLASH = function(context) { var $x = ["FLASH",3,context]; $x.__enum__ = lime.audio.AudioContext; $x.toString = $estr; return $x; };
lime.audio.AudioContext.CUSTOM = function(data) { var $x = ["CUSTOM",4,data]; $x.__enum__ = lime.audio.AudioContext; $x.toString = $estr; return $x; };
lime.audio.AudioManager = function() { };
$hxClasses["lime.audio.AudioManager"] = lime.audio.AudioManager;
lime.audio.AudioManager.__name__ = ["lime","audio","AudioManager"];
lime.audio.AudioManager.context = null;
lime.audio.AudioManager.init = function(context) {
	if(lime.audio.AudioManager.context == null) {
		if(context == null) try {
			window.AudioContext = window.AudioContext || window.webkitAudioContext;;
			lime.audio.AudioManager.context = lime.audio.AudioContext.WEB(new AudioContext ());
		} catch( e ) {
			lime.audio.AudioManager.context = lime.audio.AudioContext.HTML5(new lime.audio.HTML5AudioContext());
		} else lime.audio.AudioManager.context = context;
	}
};
lime.audio.FlashAudioContext = function() { };
$hxClasses["lime.audio.FlashAudioContext"] = lime.audio.FlashAudioContext;
lime.audio.FlashAudioContext.__name__ = ["lime","audio","FlashAudioContext"];
lime.audio.HTML5AudioContext = function() {
};
$hxClasses["lime.audio.HTML5AudioContext"] = lime.audio.HTML5AudioContext;
lime.audio.HTML5AudioContext.__name__ = ["lime","audio","HTML5AudioContext"];
lime.audio.HTML5AudioContext.prototype = {
	__class__: lime.audio.HTML5AudioContext
};
lime.graphics = {};
lime.graphics.ConsoleRenderContext = function() { };
$hxClasses["lime.graphics.ConsoleRenderContext"] = lime.graphics.ConsoleRenderContext;
lime.graphics.ConsoleRenderContext.__name__ = ["lime","graphics","ConsoleRenderContext"];
lime.graphics.FlashRenderContext = function() { };
$hxClasses["lime.graphics.FlashRenderContext"] = lime.graphics.FlashRenderContext;
lime.graphics.FlashRenderContext.__name__ = ["lime","graphics","FlashRenderContext"];
lime.graphics.Image = function(buffer,offsetX,offsetY,width,height,color,type) {
	if(height == null) height = -1;
	if(width == null) width = -1;
	if(offsetY == null) offsetY = 0;
	if(offsetX == null) offsetX = 0;
	this.offsetX = offsetX;
	this.offsetY = offsetY;
	this.width = width;
	this.height = height;
	if(type == null) {
		if(lime.app.Application.current != null && lime.app.Application.current.renderers[0] != null) {
			var _g = lime.app.Application.current.renderers[0].context;
			switch(_g[1]) {
			case 2:case 1:
				this.type = lime.graphics.ImageType.CANVAS;
				break;
			case 3:
				this.type = lime.graphics.ImageType.FLASH;
				break;
			default:
				this.type = lime.graphics.ImageType.DATA;
			}
		} else this.type = lime.graphics.ImageType.DATA;
	} else this.type = type;
	if(buffer == null) {
		if(width > 0 && height > 0) {
			var _g1 = this.type;
			switch(_g1[1]) {
			case 0:
				this.buffer = new lime.graphics.ImageBuffer(null,width,height);
				lime.graphics.utils.ImageCanvasUtil.createCanvas(this,width,height);
				if(color != null) this.fillRect(new lime.math.Rectangle(0,0,width,height),color);
				break;
			case 1:
				this.buffer = new lime.graphics.ImageBuffer((function($this) {
					var $r;
					var elements = width * height * 4;
					var this1;
					if(elements != null) this1 = new Uint8Array(elements); else this1 = null;
					$r = this1;
					return $r;
				}(this)),width,height);
				if(color != null) this.fillRect(new lime.math.Rectangle(0,0,width,height),color);
				break;
			case 2:
				break;
			default:
			}
		}
	} else this.__fromImageBuffer(buffer);
};
$hxClasses["lime.graphics.Image"] = lime.graphics.Image;
lime.graphics.Image.__name__ = ["lime","graphics","Image"];
lime.graphics.Image.fromBitmapData = function(bitmapData) {
	if(bitmapData == null) return null;
	var buffer = new lime.graphics.ImageBuffer(null,bitmapData.width,bitmapData.height);
	buffer.__srcBitmapData = bitmapData;
	return new lime.graphics.Image(buffer);
};
lime.graphics.Image.fromCanvas = function(canvas) {
	if(canvas == null) return null;
	var buffer = new lime.graphics.ImageBuffer(null,canvas.width,canvas.height);
	buffer.set_src(canvas);
	return new lime.graphics.Image(buffer);
};
lime.graphics.Image.fromImageElement = function(image) {
	if(image == null) return null;
	var buffer = new lime.graphics.ImageBuffer(null,image.width,image.height);
	buffer.set_src(image);
	return new lime.graphics.Image(buffer);
};
lime.graphics.Image.prototype = {
	clone: function() {
		if(this.buffer != null) {
			if(this.type == lime.graphics.ImageType.CANVAS && this.buffer.__srcImage == null) {
				lime.graphics.utils.ImageCanvasUtil.convertToCanvas(this);
				lime.graphics.utils.ImageCanvasUtil.sync(this);
				this.buffer.data = null;
				this.buffer.__srcImageData = null;
			}
			var image = new lime.graphics.Image(this.buffer.clone(),this.offsetX,this.offsetY,this.width,this.height,null,this.type);
			image.dirty = this.dirty;
			return image;
		} else return new lime.graphics.Image(null,this.offsetX,this.offsetY,this.width,this.height,null,this.type);
	}
	,copyChannel: function(sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
		sourceRect = this.__clipRect(sourceRect);
		if(this.buffer == null || sourceRect == null) return;
		if(destChannel == lime.graphics.ImageChannel.ALPHA && !this.get_transparent()) return;
		if(sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceImage.width) sourceRect.width = sourceImage.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceImage.height) sourceRect.height = sourceImage.height - sourceRect.y;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.copyChannel(this,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageDataUtil.copyChannel(this,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
			break;
		case 2:
			var srcChannel;
			switch(sourceChannel[1]) {
			case 0:
				srcChannel = 1;
				break;
			case 1:
				srcChannel = 2;
				break;
			case 2:
				srcChannel = 4;
				break;
			case 3:
				srcChannel = 8;
				break;
			}
			var dstChannel;
			switch(destChannel[1]) {
			case 0:
				dstChannel = 1;
				break;
			case 1:
				dstChannel = 2;
				break;
			case 2:
				dstChannel = 4;
				break;
			case 3:
				dstChannel = 8;
				break;
			}
			sourceRect.offset(sourceImage.offsetX,sourceImage.offsetY);
			destPoint.offset(this.offsetX,this.offsetY);
			this.buffer.__srcBitmapData.copyChannel(sourceImage.buffer.get_src(),sourceRect.__toFlashRectangle(),destPoint.__toFlashPoint(),srcChannel,dstChannel);
			break;
		default:
		}
	}
	,copyPixels: function(sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(this.buffer == null || sourceImage == null) return;
		if(sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(this.width <= 0 || this.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceImage.width) sourceRect.width = sourceImage.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceImage.height) sourceRect.height = sourceImage.height - sourceRect.y;
		if(sourceRect.x < 0) {
			sourceRect.width += sourceRect.x;
			sourceRect.x = 0;
		}
		if(sourceRect.y < 0) {
			sourceRect.height += sourceRect.y;
			sourceRect.y = 0;
		}
		if(destPoint.x + sourceRect.width > this.width) sourceRect.width = this.width - destPoint.x;
		if(destPoint.y + sourceRect.height > this.height) sourceRect.height = this.height - destPoint.y;
		if(destPoint.x < 0) {
			sourceRect.width += destPoint.x;
			sourceRect.x = -destPoint.x;
			destPoint.x = 0;
		}
		if(destPoint.y < 0) {
			sourceRect.height += destPoint.y;
			sourceRect.y = -destPoint.y;
			destPoint.y = 0;
		}
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.convertToCanvas(this);
			lime.graphics.utils.ImageCanvasUtil.copyPixels(this,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageCanvasUtil.convertToData(sourceImage);
			lime.graphics.utils.ImageDataUtil.copyPixels(this,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha);
			break;
		case 2:
			sourceRect.offset(sourceImage.offsetX,sourceImage.offsetY);
			destPoint.offset(this.offsetX,this.offsetY);
			if(alphaImage != null && alphaPoint != null) alphaPoint.offset(alphaImage.offsetX,alphaImage.offsetY);
			this.buffer.__srcBitmapData.copyPixels(sourceImage.buffer.__srcBitmapData,sourceRect.__toFlashRectangle(),destPoint.__toFlashPoint(),alphaImage != null?alphaImage.buffer.get_src():null,alphaPoint != null?alphaPoint.__toFlashPoint():null,mergeAlpha);
			break;
		default:
		}
	}
	,fillRect: function(rect,color,format) {
		rect = this.__clipRect(rect);
		if(this.buffer == null || rect == null) return;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.fillRect(this,rect,color,format);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageDataUtil.fillRect(this,rect,color,format);
			break;
		case 2:
			rect.offset(this.offsetX,this.offsetY);
			var argb;
			switch(format) {
			case 1:
				argb = color;
				break;
			case 2:
				var bgra = color;
				var argb1 = 0;
				argb1 = (bgra & 255 & 255) << 24 | (bgra >> 8 & 255 & 255) << 16 | (bgra >> 16 & 255 & 255) << 8 | bgra >> 24 & 255 & 255;
				argb = argb1;
				break;
			default:
				var rgba = color;
				var argb2 = 0;
				argb2 = (rgba & 255 & 255) << 24 | (rgba >> 24 & 255 & 255) << 16 | (rgba >> 16 & 255 & 255) << 8 | rgba >> 8 & 255 & 255;
				argb = argb2;
			}
			this.buffer.__srcBitmapData.fillRect(rect.__toFlashRectangle(),argb);
			break;
		default:
		}
	}
	,__clipRect: function(r) {
		if(r == null) return null;
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= this.width) {
			r.width -= r.x + r.width - this.width;
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= this.height) {
			r.height -= r.y + r.height - this.height;
			if(r.height <= 0) return null;
		}
		return r;
	}
	,__fromImageBuffer: function(buffer) {
		this.buffer = buffer;
		if(buffer != null) {
			if(this.width == -1) this.width = buffer.width;
			if(this.height == -1) this.height = buffer.height;
		}
	}
	,get_data: function() {
		if(this.buffer.data == null && this.buffer.width > 0 && this.buffer.height > 0) {
			lime.graphics.utils.ImageCanvasUtil.convertToCanvas(this);
			lime.graphics.utils.ImageCanvasUtil.sync(this);
			lime.graphics.utils.ImageCanvasUtil.createImageData(this);
		}
		return this.buffer.data;
	}
	,get_format: function() {
		return this.buffer.format;
	}
	,set_format: function(value) {
		if(this.buffer.format != value) {
			var _g = this.type;
			switch(_g[1]) {
			case 1:
				lime.graphics.utils.ImageDataUtil.setFormat(this,value);
				break;
			default:
			}
		}
		return this.buffer.format = value;
	}
	,get_powerOfTwo: function() {
		return this.buffer.width != 0 && (this.buffer.width & ~this.buffer.width + 1) == this.buffer.width && (this.buffer.height != 0 && (this.buffer.height & ~this.buffer.height + 1) == this.buffer.height);
	}
	,get_premultiplied: function() {
		return this.buffer.premultiplied;
	}
	,set_premultiplied: function(value) {
		if(value && !this.buffer.premultiplied) {
			var _g = this.type;
			switch(_g[1]) {
			case 1:
				lime.graphics.utils.ImageCanvasUtil.convertToData(this);
				lime.graphics.utils.ImageDataUtil.multiplyAlpha(this);
				break;
			default:
			}
		} else if(!value && this.buffer.premultiplied) {
			var _g1 = this.type;
			switch(_g1[1]) {
			case 1:
				lime.graphics.utils.ImageCanvasUtil.convertToData(this);
				lime.graphics.utils.ImageDataUtil.unmultiplyAlpha(this);
				break;
			default:
			}
		}
		return value;
	}
	,get_rect: function() {
		return new lime.math.Rectangle(0,0,this.width,this.height);
	}
	,get_src: function() {
		if(this.buffer.__srcCanvas == null) lime.graphics.utils.ImageCanvasUtil.convertToCanvas(this);
		return this.buffer.get_src();
	}
	,get_transparent: function() {
		if(this.buffer == null) return false;
		return this.buffer.transparent;
	}
	,set_transparent: function(value) {
		if(this.buffer == null) return false;
		return this.buffer.transparent = value;
	}
	,__class__: lime.graphics.Image
	,__properties__: {set_transparent:"set_transparent",get_transparent:"get_transparent",get_src:"get_src",get_rect:"get_rect",set_premultiplied:"set_premultiplied",get_premultiplied:"get_premultiplied",get_powerOfTwo:"get_powerOfTwo",set_format:"set_format",get_format:"get_format",get_data:"get_data"}
};
lime.graphics.ImageBuffer = function(data,width,height,bitsPerPixel,format) {
	if(bitsPerPixel == null) bitsPerPixel = 32;
	if(height == null) height = 0;
	if(width == null) width = 0;
	this.data = data;
	this.width = width;
	this.height = height;
	this.bitsPerPixel = bitsPerPixel;
	if(format == null) this.format = 0; else this.format = format;
	this.transparent = true;
};
$hxClasses["lime.graphics.ImageBuffer"] = lime.graphics.ImageBuffer;
lime.graphics.ImageBuffer.__name__ = ["lime","graphics","ImageBuffer"];
lime.graphics.ImageBuffer.prototype = {
	clone: function() {
		var buffer = new lime.graphics.ImageBuffer(this.data,this.width,this.height,this.bitsPerPixel);
		if(this.data != null) {
			var elements = this.data.byteLength;
			var this1;
			if(elements != null) this1 = new Uint8Array(elements); else this1 = null;
			buffer.data = this1;
			var copy;
			var view = this.data;
			var this2;
			if(view != null) this2 = new Uint8Array(view); else this2 = null;
			copy = this2;
			buffer.data.set(copy);
		} else if(this.__srcImageData != null) {
			buffer.__srcCanvas = window.document.createElement("canvas");
			buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
			buffer.__srcCanvas.width = this.__srcImageData.width;
			buffer.__srcCanvas.height = this.__srcImageData.height;
			buffer.__srcImageData = buffer.__srcContext.createImageData(this.__srcImageData.width,this.__srcImageData.height);
			var copy1 = new Uint8ClampedArray(this.__srcImageData.data);
			buffer.__srcImageData.data.set(copy1);
		} else if(this.__srcCanvas != null) {
			buffer.__srcCanvas = window.document.createElement("canvas");
			buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
			buffer.__srcCanvas.width = this.__srcCanvas.width;
			buffer.__srcCanvas.height = this.__srcCanvas.height;
			buffer.__srcContext.drawImage(this.__srcCanvas,0,0);
		} else buffer.__srcImage = this.__srcImage;
		buffer.bitsPerPixel = this.bitsPerPixel;
		buffer.format = this.format;
		buffer.premultiplied = this.premultiplied;
		buffer.transparent = this.transparent;
		return buffer;
	}
	,get_src: function() {
		if(this.__srcImage != null) return this.__srcImage;
		return this.__srcCanvas;
	}
	,set_src: function(value) {
		if(js.Boot.__instanceof(value,Image)) this.__srcImage = value; else if(js.Boot.__instanceof(value,HTMLCanvasElement)) {
			this.__srcCanvas = value;
			this.__srcContext = this.__srcCanvas.getContext("2d");
		}
		return value;
	}
	,get_stride: function() {
		return this.width * 4;
	}
	,__class__: lime.graphics.ImageBuffer
	,__properties__: {get_stride:"get_stride",set_src:"set_src",get_src:"get_src"}
};
lime.graphics.ImageChannel = $hxClasses["lime.graphics.ImageChannel"] = { __ename__ : ["lime","graphics","ImageChannel"], __constructs__ : ["RED","GREEN","BLUE","ALPHA"] };
lime.graphics.ImageChannel.RED = ["RED",0];
lime.graphics.ImageChannel.RED.toString = $estr;
lime.graphics.ImageChannel.RED.__enum__ = lime.graphics.ImageChannel;
lime.graphics.ImageChannel.GREEN = ["GREEN",1];
lime.graphics.ImageChannel.GREEN.toString = $estr;
lime.graphics.ImageChannel.GREEN.__enum__ = lime.graphics.ImageChannel;
lime.graphics.ImageChannel.BLUE = ["BLUE",2];
lime.graphics.ImageChannel.BLUE.toString = $estr;
lime.graphics.ImageChannel.BLUE.__enum__ = lime.graphics.ImageChannel;
lime.graphics.ImageChannel.ALPHA = ["ALPHA",3];
lime.graphics.ImageChannel.ALPHA.toString = $estr;
lime.graphics.ImageChannel.ALPHA.__enum__ = lime.graphics.ImageChannel;
lime.graphics.ImageType = $hxClasses["lime.graphics.ImageType"] = { __ename__ : ["lime","graphics","ImageType"], __constructs__ : ["CANVAS","DATA","FLASH","CUSTOM"] };
lime.graphics.ImageType.CANVAS = ["CANVAS",0];
lime.graphics.ImageType.CANVAS.toString = $estr;
lime.graphics.ImageType.CANVAS.__enum__ = lime.graphics.ImageType;
lime.graphics.ImageType.DATA = ["DATA",1];
lime.graphics.ImageType.DATA.toString = $estr;
lime.graphics.ImageType.DATA.__enum__ = lime.graphics.ImageType;
lime.graphics.ImageType.FLASH = ["FLASH",2];
lime.graphics.ImageType.FLASH.toString = $estr;
lime.graphics.ImageType.FLASH.__enum__ = lime.graphics.ImageType;
lime.graphics.ImageType.CUSTOM = ["CUSTOM",3];
lime.graphics.ImageType.CUSTOM.toString = $estr;
lime.graphics.ImageType.CUSTOM.__enum__ = lime.graphics.ImageType;
lime.graphics.RenderContext = $hxClasses["lime.graphics.RenderContext"] = { __ename__ : ["lime","graphics","RenderContext"], __constructs__ : ["OPENGL","CANVAS","DOM","FLASH","CAIRO","CONSOLE","CUSTOM","NONE"] };
lime.graphics.RenderContext.OPENGL = function(gl) { var $x = ["OPENGL",0,gl]; $x.__enum__ = lime.graphics.RenderContext; $x.toString = $estr; return $x; };
lime.graphics.RenderContext.CANVAS = function(context) { var $x = ["CANVAS",1,context]; $x.__enum__ = lime.graphics.RenderContext; $x.toString = $estr; return $x; };
lime.graphics.RenderContext.DOM = function(element) { var $x = ["DOM",2,element]; $x.__enum__ = lime.graphics.RenderContext; $x.toString = $estr; return $x; };
lime.graphics.RenderContext.FLASH = function(stage) { var $x = ["FLASH",3,stage]; $x.__enum__ = lime.graphics.RenderContext; $x.toString = $estr; return $x; };
lime.graphics.RenderContext.CAIRO = function(cairo) { var $x = ["CAIRO",4,cairo]; $x.__enum__ = lime.graphics.RenderContext; $x.toString = $estr; return $x; };
lime.graphics.RenderContext.CONSOLE = function(context) { var $x = ["CONSOLE",5,context]; $x.__enum__ = lime.graphics.RenderContext; $x.toString = $estr; return $x; };
lime.graphics.RenderContext.CUSTOM = function(data) { var $x = ["CUSTOM",6,data]; $x.__enum__ = lime.graphics.RenderContext; $x.toString = $estr; return $x; };
lime.graphics.RenderContext.NONE = ["NONE",7];
lime.graphics.RenderContext.NONE.toString = $estr;
lime.graphics.RenderContext.NONE.__enum__ = lime.graphics.RenderContext;
lime.graphics.Renderer = function(window) {
	this.onRender = new lime.app.Event();
	this.onContextRestored = new lime.app.Event();
	this.onContextLost = new lime.app.Event();
	this.window = window;
	this.backend = new lime._backend.html5.HTML5Renderer(this);
	this.window.renderer = this;
};
$hxClasses["lime.graphics.Renderer"] = lime.graphics.Renderer;
lime.graphics.Renderer.__name__ = ["lime","graphics","Renderer"];
lime.graphics.Renderer.prototype = {
	create: function() {
		this.backend.create();
	}
	,flip: function() {
		this.backend.flip();
	}
	,__class__: lime.graphics.Renderer
};
lime.graphics.RendererType = $hxClasses["lime.graphics.RendererType"] = { __ename__ : ["lime","graphics","RendererType"], __constructs__ : ["OPENGL","CANVAS","DOM","FLASH","CAIRO","CONSOLE","CUSTOM"] };
lime.graphics.RendererType.OPENGL = ["OPENGL",0];
lime.graphics.RendererType.OPENGL.toString = $estr;
lime.graphics.RendererType.OPENGL.__enum__ = lime.graphics.RendererType;
lime.graphics.RendererType.CANVAS = ["CANVAS",1];
lime.graphics.RendererType.CANVAS.toString = $estr;
lime.graphics.RendererType.CANVAS.__enum__ = lime.graphics.RendererType;
lime.graphics.RendererType.DOM = ["DOM",2];
lime.graphics.RendererType.DOM.toString = $estr;
lime.graphics.RendererType.DOM.__enum__ = lime.graphics.RendererType;
lime.graphics.RendererType.FLASH = ["FLASH",3];
lime.graphics.RendererType.FLASH.toString = $estr;
lime.graphics.RendererType.FLASH.__enum__ = lime.graphics.RendererType;
lime.graphics.RendererType.CAIRO = ["CAIRO",4];
lime.graphics.RendererType.CAIRO.toString = $estr;
lime.graphics.RendererType.CAIRO.__enum__ = lime.graphics.RendererType;
lime.graphics.RendererType.CONSOLE = ["CONSOLE",5];
lime.graphics.RendererType.CONSOLE.toString = $estr;
lime.graphics.RendererType.CONSOLE.__enum__ = lime.graphics.RendererType;
lime.graphics.RendererType.CUSTOM = ["CUSTOM",6];
lime.graphics.RendererType.CUSTOM.toString = $estr;
lime.graphics.RendererType.CUSTOM.__enum__ = lime.graphics.RendererType;
lime.graphics.cairo = {};
lime.graphics.cairo.Cairo = function() { };
$hxClasses["lime.graphics.cairo.Cairo"] = lime.graphics.cairo.Cairo;
lime.graphics.cairo.Cairo.__name__ = ["lime","graphics","cairo","Cairo"];
lime.graphics.cairo.Cairo.prototype = {
	arc: function(xc,yc,radius,angle1,angle2) {
	}
	,clip: function() {
	}
	,curveTo: function(x1,y1,x2,y2,x3,y3) {
	}
	,fill: function() {
	}
	,identityMatrix: function() {
	}
	,lineTo: function(x,y) {
	}
	,moveTo: function(x,y) {
	}
	,newPath: function() {
	}
	,paint: function() {
	}
	,paintWithAlpha: function(alpha) {
	}
	,popGroupToSource: function() {
	}
	,pushGroup: function() {
	}
	,rectangle: function(x,y,width,height) {
	}
	,restore: function() {
	}
	,save: function() {
	}
	,setSourceRGB: function(r,g,b) {
	}
	,get_currentPoint: function() {
		return null;
	}
	,get_hasCurrentPoint: function() {
		return false;
	}
	,set_matrix: function(value) {
		return value;
	}
	,set_source: function(value) {
		return value;
	}
	,__class__: lime.graphics.cairo.Cairo
	,__properties__: {set_source:"set_source",set_matrix:"set_matrix",get_hasCurrentPoint:"get_hasCurrentPoint",get_currentPoint:"get_currentPoint"}
};
lime.graphics.cairo._CairoImageSurface = {};
lime.graphics.cairo._CairoImageSurface.CairoImageSurface_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoImageSurface.CairoImageSurface_Impl_"] = lime.graphics.cairo._CairoImageSurface.CairoImageSurface_Impl_;
lime.graphics.cairo._CairoImageSurface.CairoImageSurface_Impl_.__name__ = ["lime","graphics","cairo","_CairoImageSurface","CairoImageSurface_Impl_"];
lime.graphics.cairo._CairoImageSurface.CairoImageSurface_Impl_.fromImage = function(image) {
	return null;
};
lime.graphics.cairo._CairoPattern = {};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoPattern.CairoPattern_Impl_"] = lime.graphics.cairo._CairoPattern.CairoPattern_Impl_;
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.__name__ = ["lime","graphics","cairo","_CairoPattern","CairoPattern_Impl_"];
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.__properties__ = {set_filter:"set_filter"}
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.createForSurface = function(surface) {
	return 0;
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.destroy = function(this1) {
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.set_filter = function(this1,value) {
	return value;
};
lime.graphics.cairo._CairoSurface = {};
lime.graphics.cairo._CairoSurface.CairoSurface_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoSurface.CairoSurface_Impl_"] = lime.graphics.cairo._CairoSurface.CairoSurface_Impl_;
lime.graphics.cairo._CairoSurface.CairoSurface_Impl_.__name__ = ["lime","graphics","cairo","_CairoSurface","CairoSurface_Impl_"];
lime.graphics.cairo._CairoSurface.CairoSurface_Impl_.flush = function(this1) {
};
lime.graphics.opengl = {};
lime.graphics.opengl.GL = function() { };
$hxClasses["lime.graphics.opengl.GL"] = lime.graphics.opengl.GL;
lime.graphics.opengl.GL.__name__ = ["lime","graphics","opengl","GL"];
lime.graphics.opengl.GL.context = null;
lime.graphics.utils = {};
lime.graphics.utils.ImageCanvasUtil = function() { };
$hxClasses["lime.graphics.utils.ImageCanvasUtil"] = lime.graphics.utils.ImageCanvasUtil;
lime.graphics.utils.ImageCanvasUtil.__name__ = ["lime","graphics","utils","ImageCanvasUtil"];
lime.graphics.utils.ImageCanvasUtil.convertToCanvas = function(image) {
	var buffer = image.buffer;
	if(buffer.__srcImage != null) {
		if(buffer.__srcCanvas == null) {
			lime.graphics.utils.ImageCanvasUtil.createCanvas(image,buffer.__srcImage.width,buffer.__srcImage.height);
			buffer.__srcContext.drawImage(buffer.__srcImage,0,0);
		}
		buffer.__srcImage = null;
	} else if(buffer.data != null && buffer.__srcCanvas == null) {
		lime.graphics.utils.ImageCanvasUtil.createCanvas(image,buffer.width,buffer.height);
		lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	}
};
lime.graphics.utils.ImageCanvasUtil.convertToData = function(image) {
	if(image.buffer.data == null) {
		lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
		lime.graphics.utils.ImageCanvasUtil.sync(image);
		lime.graphics.utils.ImageCanvasUtil.createImageData(image);
		image.buffer.__srcCanvas = null;
		image.buffer.__srcContext = null;
	}
};
lime.graphics.utils.ImageCanvasUtil.copyChannel = function(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(sourceImage);
	lime.graphics.utils.ImageCanvasUtil.createImageData(sourceImage);
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	lime.graphics.utils.ImageDataUtil.copyChannel(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
};
lime.graphics.utils.ImageCanvasUtil.copyPixels = function(image,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha) {
	if(mergeAlpha == null) mergeAlpha = false;
	if(destPoint == null || destPoint.x >= image.width || destPoint.y >= image.height || sourceRect == null || sourceRect.width <= 0 || sourceRect.height <= 0) return;
	if(alphaImage != null && alphaImage.get_transparent()) {
		if(alphaPoint == null) alphaPoint = new lime.math.Vector2();
		var tempData = image.clone();
		tempData.copyChannel(alphaImage,new lime.math.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new lime.math.Vector2(sourceRect.x,sourceRect.y),lime.graphics.ImageChannel.ALPHA,lime.graphics.ImageChannel.ALPHA);
		sourceImage = tempData;
	}
	lime.graphics.utils.ImageCanvasUtil.sync(image);
	if(!mergeAlpha) {
		if(image.get_transparent() && sourceImage.get_transparent()) image.buffer.__srcContext.clearRect(destPoint.x + image.offsetX,destPoint.y + image.offsetY,sourceRect.width + image.offsetX,sourceRect.height + image.offsetY);
	}
	lime.graphics.utils.ImageCanvasUtil.sync(sourceImage);
	if(sourceImage.buffer.get_src() != null) image.buffer.__srcContext.drawImage(sourceImage.buffer.get_src(),sourceRect.x + sourceImage.offsetX | 0,sourceRect.y + sourceImage.offsetY | 0,sourceRect.width | 0,sourceRect.height | 0,destPoint.x + image.offsetX | 0,destPoint.y + image.offsetY | 0,sourceRect.width | 0,sourceRect.height | 0);
};
lime.graphics.utils.ImageCanvasUtil.createCanvas = function(image,width,height) {
	var buffer = image.buffer;
	if(buffer.__srcCanvas == null) {
		buffer.__srcCanvas = window.document.createElement("canvas");
		buffer.__srcCanvas.width = width;
		buffer.__srcCanvas.height = height;
		if(!image.get_transparent()) {
			if(!image.get_transparent()) buffer.__srcCanvas.setAttribute("moz-opaque","true");
			buffer.__srcContext = buffer.__srcCanvas.getContext ("2d", { alpha: false });
		} else buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
		buffer.__srcContext.mozImageSmoothingEnabled = false;
		buffer.__srcContext.webkitImageSmoothingEnabled = false;
		buffer.__srcContext.imageSmoothingEnabled = false;
	}
};
lime.graphics.utils.ImageCanvasUtil.createImageData = function(image) {
	var buffer = image.buffer;
	if(buffer.__srcImageData == null) {
		if(buffer.data == null) buffer.__srcImageData = buffer.__srcContext.getImageData(0,0,buffer.width,buffer.height); else {
			buffer.__srcImageData = buffer.__srcContext.createImageData(buffer.width,buffer.height);
			buffer.__srcImageData.data.set(buffer.data);
		}
		var elements = buffer.__srcImageData.data.buffer;
		var this1;
		if(elements != null) this1 = new Uint8Array(elements); else this1 = null;
		buffer.data = this1;
	}
};
lime.graphics.utils.ImageCanvasUtil.fillRect = function(image,rect,color,format) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.sync(image);
	if(rect.x == 0 && rect.y == 0 && rect.width == image.width && rect.height == image.height) {
		if(image.get_transparent() && (color & 255) == 0) {
			image.buffer.__srcCanvas.width = image.buffer.width;
			return;
		}
	}
	var r;
	var g;
	var b;
	var a;
	if(format == 1) {
		r = color >> 16 & 255;
		g = color >> 8 & 255;
		b = color & 255;
		if(image.get_transparent()) a = color >> 24 & 255; else a = 255;
	} else {
		r = color >> 24 & 255;
		g = color >> 16 & 255;
		b = color >> 8 & 255;
		if(image.get_transparent()) a = color & 255; else a = 255;
	}
	image.buffer.__srcContext.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
	image.buffer.__srcContext.fillRect(rect.x + image.offsetX,rect.y + image.offsetY,rect.width + image.offsetX,rect.height + image.offsetY);
};
lime.graphics.utils.ImageCanvasUtil.sync = function(image) {
	if(image.dirty && image.buffer.__srcImageData != null && image.type != lime.graphics.ImageType.DATA) {
		image.buffer.__srcContext.putImageData(image.buffer.__srcImageData,0,0);
		image.buffer.data = null;
		image.dirty = false;
	}
};
lime.graphics.utils.ImageDataUtil = function() { };
$hxClasses["lime.graphics.utils.ImageDataUtil"] = lime.graphics.utils.ImageDataUtil;
lime.graphics.utils.ImageDataUtil.__name__ = ["lime","graphics","utils","ImageDataUtil"];
lime.graphics.utils.ImageDataUtil.copyChannel = function(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
	var destIdx;
	switch(destChannel[1]) {
	case 0:
		destIdx = 0;
		break;
	case 1:
		destIdx = 1;
		break;
	case 2:
		destIdx = 2;
		break;
	case 3:
		destIdx = 3;
		break;
	}
	var srcIdx;
	switch(sourceChannel[1]) {
	case 0:
		srcIdx = 0;
		break;
	case 1:
		srcIdx = 1;
		break;
	case 2:
		srcIdx = 2;
		break;
	case 3:
		srcIdx = 3;
		break;
	}
	var srcData = sourceImage.buffer.data;
	var destData = image.buffer.data;
	if(srcData == null || destData == null) return;
	var srcView = new lime.graphics.utils._ImageDataUtil.ImageDataView(sourceImage,sourceRect);
	var destView = new lime.graphics.utils._ImageDataUtil.ImageDataView(image,new lime.math.Rectangle(destPoint.x,destPoint.y,srcView.width,srcView.height));
	var srcFormat = sourceImage.buffer.format;
	var destFormat = image.buffer.format;
	var srcPremultiplied = sourceImage.buffer.premultiplied;
	var destPremultiplied = image.buffer.premultiplied;
	var srcPosition;
	var destPosition;
	var srcPixel;
	var destPixel;
	var value = 0;
	var _g1 = 0;
	var _g = destView.height;
	while(_g1 < _g) {
		var y = _g1++;
		srcPosition = srcView.offset + srcView.stride * y;
		destPosition = destView.offset + destView.stride * y;
		var _g3 = 0;
		var _g2 = destView.width;
		while(_g3 < _g2) {
			var x = _g3++;
			switch(srcFormat) {
			case 2:
				srcPixel = (srcData[srcPosition + 2] & 255) << 24 | (srcData[srcPosition + 1] & 255) << 16 | (srcData[srcPosition] & 255) << 8 | srcData[srcPosition + 3] & 255;
				break;
			case 0:
				srcPixel = (srcData[srcPosition] & 255) << 24 | (srcData[srcPosition + 1] & 255) << 16 | (srcData[srcPosition + 2] & 255) << 8 | srcData[srcPosition + 3] & 255;
				break;
			case 1:
				srcPixel = (srcData[srcPosition + 1] & 255) << 24 | (srcData[srcPosition + 2] & 255) << 16 | (srcData[srcPosition + 3] & 255) << 8 | srcData[srcPosition] & 255;
				break;
			}
			if(srcPremultiplied) {
				if((srcPixel & 255) != 0 && (srcPixel & 255) != 255) {
					lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (srcPixel & 255);
					var r;
					var idx = Math.round((srcPixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
					r = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx];
					var g;
					var idx1 = Math.round((srcPixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
					g = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx1];
					var b;
					var idx2 = Math.round((srcPixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
					b = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx2];
					srcPixel = (r & 255) << 24 | (g & 255) << 16 | (b & 255) << 8 | srcPixel & 255 & 255;
				}
			}
			switch(destFormat) {
			case 2:
				destPixel = (destData[destPosition + 2] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition] & 255) << 8 | destData[destPosition + 3] & 255;
				break;
			case 0:
				destPixel = (destData[destPosition] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition + 2] & 255) << 8 | destData[destPosition + 3] & 255;
				break;
			case 1:
				destPixel = (destData[destPosition + 1] & 255) << 24 | (destData[destPosition + 2] & 255) << 16 | (destData[destPosition + 3] & 255) << 8 | destData[destPosition] & 255;
				break;
			}
			if(destPremultiplied) {
				if((destPixel & 255) != 0 && (destPixel & 255) != 255) {
					lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (destPixel & 255);
					var r1;
					var idx3 = Math.round((destPixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
					r1 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx3];
					var g1;
					var idx4 = Math.round((destPixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
					g1 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx4];
					var b1;
					var idx5 = Math.round((destPixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
					b1 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx5];
					destPixel = (r1 & 255) << 24 | (g1 & 255) << 16 | (b1 & 255) << 8 | destPixel & 255 & 255;
				}
			}
			switch(srcIdx) {
			case 0:
				value = srcPixel >> 24 & 255;
				break;
			case 1:
				value = srcPixel >> 16 & 255;
				break;
			case 2:
				value = srcPixel >> 8 & 255;
				break;
			case 3:
				value = srcPixel & 255;
				break;
			}
			switch(destIdx) {
			case 0:
				destPixel = (value & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
				value;
				break;
			case 1:
				destPixel = (destPixel >> 24 & 255 & 255) << 24 | (value & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
				value;
				break;
			case 2:
				destPixel = (destPixel >> 24 & 255 & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (value & 255) << 8 | destPixel & 255 & 255;
				value;
				break;
			case 3:
				destPixel = (destPixel >> 24 & 255 & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | value & 255;
				value;
				break;
			}
			if(destPremultiplied) {
				if((destPixel & 255) == 0) {
					if(destPixel != 0) destPixel = 0;
				} else if((destPixel & 255) != 255) {
					lime.math.color._RGBA.RGBA_Impl_.a16 = lime.math.color._RGBA.RGBA_Impl_.__alpha16[destPixel & 255];
					destPixel = ((destPixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 24 | ((destPixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 16 | ((destPixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 8 | destPixel & 255 & 255;
				}
			}
			switch(destFormat) {
			case 2:
				destData[destPosition] = destPixel >> 8 & 255;
				destData[destPosition + 1] = destPixel >> 16 & 255;
				destData[destPosition + 2] = destPixel >> 24 & 255;
				destData[destPosition + 3] = destPixel & 255;
				break;
			case 0:
				destData[destPosition] = destPixel >> 24 & 255;
				destData[destPosition + 1] = destPixel >> 16 & 255;
				destData[destPosition + 2] = destPixel >> 8 & 255;
				destData[destPosition + 3] = destPixel & 255;
				break;
			case 1:
				destData[destPosition] = destPixel & 255;
				destData[destPosition + 1] = destPixel >> 24 & 255;
				destData[destPosition + 2] = destPixel >> 16 & 255;
				destData[destPosition + 3] = destPixel >> 8 & 255;
				break;
			}
			srcPosition += 4;
			destPosition += 4;
		}
	}
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.copyPixels = function(image,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha) {
	if(mergeAlpha == null) mergeAlpha = false;
	var sourceData = sourceImage.buffer.data;
	var destData = image.buffer.data;
	if(sourceData == null || destData == null) return;
	var sourceView = new lime.graphics.utils._ImageDataUtil.ImageDataView(sourceImage,sourceRect);
	var destView = new lime.graphics.utils._ImageDataUtil.ImageDataView(image,new lime.math.Rectangle(destPoint.x,destPoint.y,sourceView.width,sourceView.height));
	var sourceFormat = sourceImage.buffer.format;
	var destFormat = image.buffer.format;
	var sourcePremultiplied = sourceImage.buffer.premultiplied;
	var destPremultiplied = image.buffer.premultiplied;
	var sourcePosition;
	var destPosition;
	var sourcePixel;
	if(!mergeAlpha || !sourceImage.get_transparent()) {
		var _g1 = 0;
		var _g = destView.height;
		while(_g1 < _g) {
			var y = _g1++;
			sourcePosition = sourceView.offset + sourceView.stride * y;
			destPosition = destView.offset + destView.stride * y;
			var _g3 = 0;
			var _g2 = destView.width;
			while(_g3 < _g2) {
				var x = _g3++;
				switch(sourceFormat) {
				case 2:
					sourcePixel = (sourceData[sourcePosition + 2] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
					break;
				case 0:
					sourcePixel = (sourceData[sourcePosition] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition + 2] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
					break;
				case 1:
					sourcePixel = (sourceData[sourcePosition + 1] & 255) << 24 | (sourceData[sourcePosition + 2] & 255) << 16 | (sourceData[sourcePosition + 3] & 255) << 8 | sourceData[sourcePosition] & 255;
					break;
				}
				if(sourcePremultiplied) {
					if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
						lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (sourcePixel & 255);
						var r;
						var idx = Math.round((sourcePixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
						r = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx];
						var g;
						var idx1 = Math.round((sourcePixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
						g = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx1];
						var b;
						var idx2 = Math.round((sourcePixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
						b = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx2];
						sourcePixel = (r & 255) << 24 | (g & 255) << 16 | (b & 255) << 8 | sourcePixel & 255 & 255;
					}
				}
				if(destPremultiplied) {
					if((sourcePixel & 255) == 0) {
						if(sourcePixel != 0) sourcePixel = 0;
					} else if((sourcePixel & 255) != 255) {
						lime.math.color._RGBA.RGBA_Impl_.a16 = lime.math.color._RGBA.RGBA_Impl_.__alpha16[sourcePixel & 255];
						sourcePixel = ((sourcePixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 24 | ((sourcePixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 16 | ((sourcePixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 8 | sourcePixel & 255 & 255;
					}
				}
				switch(destFormat) {
				case 2:
					destData[destPosition] = sourcePixel >> 8 & 255;
					destData[destPosition + 1] = sourcePixel >> 16 & 255;
					destData[destPosition + 2] = sourcePixel >> 24 & 255;
					destData[destPosition + 3] = sourcePixel & 255;
					break;
				case 0:
					destData[destPosition] = sourcePixel >> 24 & 255;
					destData[destPosition + 1] = sourcePixel >> 16 & 255;
					destData[destPosition + 2] = sourcePixel >> 8 & 255;
					destData[destPosition + 3] = sourcePixel & 255;
					break;
				case 1:
					destData[destPosition] = sourcePixel & 255;
					destData[destPosition + 1] = sourcePixel >> 24 & 255;
					destData[destPosition + 2] = sourcePixel >> 16 & 255;
					destData[destPosition + 3] = sourcePixel >> 8 & 255;
					break;
				}
				sourcePosition += 4;
				destPosition += 4;
			}
		}
	} else {
		var sourceAlpha;
		var destAlpha;
		var oneMinusSourceAlpha;
		var blendAlpha;
		var destPixel;
		if(alphaImage == null) {
			var _g11 = 0;
			var _g4 = destView.height;
			while(_g11 < _g4) {
				var y1 = _g11++;
				sourcePosition = sourceView.offset + sourceView.stride * y1;
				destPosition = destView.offset + destView.stride * y1;
				var _g31 = 0;
				var _g21 = destView.width;
				while(_g31 < _g21) {
					var x1 = _g31++;
					switch(sourceFormat) {
					case 2:
						sourcePixel = (sourceData[sourcePosition + 2] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
						break;
					case 0:
						sourcePixel = (sourceData[sourcePosition] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition + 2] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
						break;
					case 1:
						sourcePixel = (sourceData[sourcePosition + 1] & 255) << 24 | (sourceData[sourcePosition + 2] & 255) << 16 | (sourceData[sourcePosition + 3] & 255) << 8 | sourceData[sourcePosition] & 255;
						break;
					}
					if(sourcePremultiplied) {
						if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
							lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (sourcePixel & 255);
							var r1;
							var idx3 = Math.round((sourcePixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							r1 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx3];
							var g1;
							var idx4 = Math.round((sourcePixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							g1 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx4];
							var b1;
							var idx5 = Math.round((sourcePixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							b1 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx5];
							sourcePixel = (r1 & 255) << 24 | (g1 & 255) << 16 | (b1 & 255) << 8 | sourcePixel & 255 & 255;
						}
					}
					switch(destFormat) {
					case 2:
						destPixel = (destData[destPosition + 2] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition] & 255) << 8 | destData[destPosition + 3] & 255;
						break;
					case 0:
						destPixel = (destData[destPosition] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition + 2] & 255) << 8 | destData[destPosition + 3] & 255;
						break;
					case 1:
						destPixel = (destData[destPosition + 1] & 255) << 24 | (destData[destPosition + 2] & 255) << 16 | (destData[destPosition + 3] & 255) << 8 | destData[destPosition] & 255;
						break;
					}
					if(destPremultiplied) {
						if((destPixel & 255) != 0 && (destPixel & 255) != 255) {
							lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (destPixel & 255);
							var r2;
							var idx6 = Math.round((destPixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							r2 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx6];
							var g2;
							var idx7 = Math.round((destPixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							g2 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx7];
							var b2;
							var idx8 = Math.round((destPixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							b2 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx8];
							destPixel = (r2 & 255) << 24 | (g2 & 255) << 16 | (b2 & 255) << 8 | destPixel & 255 & 255;
						}
					}
					sourceAlpha = (sourcePixel & 255) / 255.0;
					destAlpha = (destPixel & 255) / 255.0;
					oneMinusSourceAlpha = 1 - sourceAlpha;
					blendAlpha = sourceAlpha + destAlpha * oneMinusSourceAlpha;
					if(blendAlpha == 0) destPixel = 0; else {
						var value;
						var idx9 = Math.round(((sourcePixel >> 24 & 255) * sourceAlpha + (destPixel >> 24 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha);
						value = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx9];
						destPixel = (value & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
						value;
						var value1;
						var idx10 = Math.round(((sourcePixel >> 16 & 255) * sourceAlpha + (destPixel >> 16 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha);
						value1 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx10];
						destPixel = (destPixel >> 24 & 255 & 255) << 24 | (value1 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
						value1;
						var value2;
						var idx11 = Math.round(((sourcePixel >> 8 & 255) * sourceAlpha + (destPixel >> 8 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha);
						value2 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx11];
						destPixel = (destPixel >> 24 & 255 & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (value2 & 255) << 8 | destPixel & 255 & 255;
						value2;
						var value3;
						var idx12 = Math.round(blendAlpha * 255.0);
						value3 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx12];
						destPixel = (destPixel >> 24 & 255 & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | value3 & 255;
						value3;
					}
					if(destPremultiplied) {
						if((destPixel & 255) == 0) {
							if(destPixel != 0) destPixel = 0;
						} else if((destPixel & 255) != 255) {
							lime.math.color._RGBA.RGBA_Impl_.a16 = lime.math.color._RGBA.RGBA_Impl_.__alpha16[destPixel & 255];
							destPixel = ((destPixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 24 | ((destPixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 16 | ((destPixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 8 | destPixel & 255 & 255;
						}
					}
					switch(destFormat) {
					case 2:
						destData[destPosition] = destPixel >> 8 & 255;
						destData[destPosition + 1] = destPixel >> 16 & 255;
						destData[destPosition + 2] = destPixel >> 24 & 255;
						destData[destPosition + 3] = destPixel & 255;
						break;
					case 0:
						destData[destPosition] = destPixel >> 24 & 255;
						destData[destPosition + 1] = destPixel >> 16 & 255;
						destData[destPosition + 2] = destPixel >> 8 & 255;
						destData[destPosition + 3] = destPixel & 255;
						break;
					case 1:
						destData[destPosition] = destPixel & 255;
						destData[destPosition + 1] = destPixel >> 24 & 255;
						destData[destPosition + 2] = destPixel >> 16 & 255;
						destData[destPosition + 3] = destPixel >> 8 & 255;
						break;
					}
					sourcePosition += 4;
					destPosition += 4;
				}
			}
		} else {
			if(alphaPoint == null) alphaPoint = new lime.math.Vector2();
			var alphaData = alphaImage.buffer.data;
			var alphaFormat = alphaImage.buffer.format;
			var alphaPremultiplied = alphaImage.buffer.premultiplied;
			var alphaView = new lime.graphics.utils._ImageDataUtil.ImageDataView(alphaImage,new lime.math.Rectangle(alphaPoint.x,alphaPoint.y,destView.width,destView.height));
			var alphaPosition;
			var alphaPixel;
			var _g12 = 0;
			var _g5 = alphaView.height;
			while(_g12 < _g5) {
				var y2 = _g12++;
				sourcePosition = sourceView.offset + sourceView.stride * y2;
				destPosition = destView.offset + destView.stride * y2;
				alphaPosition = alphaView.offset + alphaView.stride * y2;
				var _g32 = 0;
				var _g22 = alphaView.width;
				while(_g32 < _g22) {
					var x2 = _g32++;
					switch(sourceFormat) {
					case 2:
						sourcePixel = (sourceData[sourcePosition + 2] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
						break;
					case 0:
						sourcePixel = (sourceData[sourcePosition] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition + 2] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
						break;
					case 1:
						sourcePixel = (sourceData[sourcePosition + 1] & 255) << 24 | (sourceData[sourcePosition + 2] & 255) << 16 | (sourceData[sourcePosition + 3] & 255) << 8 | sourceData[sourcePosition] & 255;
						break;
					}
					if(sourcePremultiplied) {
						if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
							lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (sourcePixel & 255);
							var r3;
							var idx13 = Math.round((sourcePixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							r3 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx13];
							var g3;
							var idx14 = Math.round((sourcePixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							g3 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx14];
							var b3;
							var idx15 = Math.round((sourcePixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							b3 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx15];
							sourcePixel = (r3 & 255) << 24 | (g3 & 255) << 16 | (b3 & 255) << 8 | sourcePixel & 255 & 255;
						}
					}
					switch(destFormat) {
					case 2:
						destPixel = (destData[destPosition + 2] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition] & 255) << 8 | destData[destPosition + 3] & 255;
						break;
					case 0:
						destPixel = (destData[destPosition] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition + 2] & 255) << 8 | destData[destPosition + 3] & 255;
						break;
					case 1:
						destPixel = (destData[destPosition + 1] & 255) << 24 | (destData[destPosition + 2] & 255) << 16 | (destData[destPosition + 3] & 255) << 8 | destData[destPosition] & 255;
						break;
					}
					if(destPremultiplied) {
						if((destPixel & 255) != 0 && (destPixel & 255) != 255) {
							lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (destPixel & 255);
							var r4;
							var idx16 = Math.round((destPixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							r4 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx16];
							var g4;
							var idx17 = Math.round((destPixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							g4 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx17];
							var b4;
							var idx18 = Math.round((destPixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							b4 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx18];
							destPixel = (r4 & 255) << 24 | (g4 & 255) << 16 | (b4 & 255) << 8 | destPixel & 255 & 255;
						}
					}
					switch(alphaFormat) {
					case 2:
						alphaPixel = (alphaData[alphaPosition + 2] & 255) << 24 | (alphaData[alphaPosition + 1] & 255) << 16 | (alphaData[alphaPosition] & 255) << 8 | alphaData[alphaPosition + 3] & 255;
						break;
					case 0:
						alphaPixel = (alphaData[alphaPosition] & 255) << 24 | (alphaData[alphaPosition + 1] & 255) << 16 | (alphaData[alphaPosition + 2] & 255) << 8 | alphaData[alphaPosition + 3] & 255;
						break;
					case 1:
						alphaPixel = (alphaData[alphaPosition + 1] & 255) << 24 | (alphaData[alphaPosition + 2] & 255) << 16 | (alphaData[alphaPosition + 3] & 255) << 8 | alphaData[alphaPosition] & 255;
						break;
					}
					if(alphaPremultiplied) {
						if((alphaPixel & 255) != 0 && (alphaPixel & 255) != 255) {
							lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (alphaPixel & 255);
							var r5;
							var idx19 = Math.round((alphaPixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							r5 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx19];
							var g5;
							var idx20 = Math.round((alphaPixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							g5 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx20];
							var b5;
							var idx21 = Math.round((alphaPixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							b5 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx21];
							alphaPixel = (r5 & 255) << 24 | (g5 & 255) << 16 | (b5 & 255) << 8 | alphaPixel & 255 & 255;
						}
					}
					sourceAlpha = (alphaPixel & 255) / 255;
					destAlpha = (destPixel & 255) / 255;
					oneMinusSourceAlpha = 1 - sourceAlpha;
					blendAlpha = sourceAlpha + destAlpha * oneMinusSourceAlpha;
					if(blendAlpha == 0) destPixel = 0; else {
						var value4;
						var idx22 = Math.round(((sourcePixel >> 24 & 255) * sourceAlpha + (destPixel >> 24 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha);
						value4 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx22];
						destPixel = (value4 & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
						value4;
						var value5;
						var idx23 = Math.round(((sourcePixel >> 16 & 255) * sourceAlpha + (destPixel >> 16 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha);
						value5 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx23];
						destPixel = (destPixel >> 24 & 255 & 255) << 24 | (value5 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
						value5;
						var value6;
						var idx24 = Math.round(((sourcePixel >> 8 & 255) * sourceAlpha + (destPixel >> 8 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha);
						value6 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx24];
						destPixel = (destPixel >> 24 & 255 & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (value6 & 255) << 8 | destPixel & 255 & 255;
						value6;
						var value7;
						var idx25 = Math.round(blendAlpha * 255.0);
						value7 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx25];
						destPixel = (destPixel >> 24 & 255 & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | value7 & 255;
						value7;
					}
					if(destPremultiplied) {
						if((destPixel & 255) == 0) {
							if(destPixel != 0) destPixel = 0;
						} else if((destPixel & 255) != 255) {
							lime.math.color._RGBA.RGBA_Impl_.a16 = lime.math.color._RGBA.RGBA_Impl_.__alpha16[destPixel & 255];
							destPixel = ((destPixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 24 | ((destPixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 16 | ((destPixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 8 | destPixel & 255 & 255;
						}
					}
					switch(destFormat) {
					case 2:
						destData[destPosition] = destPixel >> 8 & 255;
						destData[destPosition + 1] = destPixel >> 16 & 255;
						destData[destPosition + 2] = destPixel >> 24 & 255;
						destData[destPosition + 3] = destPixel & 255;
						break;
					case 0:
						destData[destPosition] = destPixel >> 24 & 255;
						destData[destPosition + 1] = destPixel >> 16 & 255;
						destData[destPosition + 2] = destPixel >> 8 & 255;
						destData[destPosition + 3] = destPixel & 255;
						break;
					case 1:
						destData[destPosition] = destPixel & 255;
						destData[destPosition + 1] = destPixel >> 24 & 255;
						destData[destPosition + 2] = destPixel >> 16 & 255;
						destData[destPosition + 3] = destPixel >> 8 & 255;
						break;
					}
					sourcePosition += 4;
					destPosition += 4;
				}
			}
		}
	}
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.fillRect = function(image,rect,color,format) {
	var fillColor;
	switch(format) {
	case 1:
		var argb = color;
		var rgba = 0;
		rgba = (argb >> 16 & 255 & 255) << 24 | (argb >> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >> 24 & 255 & 255;
		fillColor = rgba;
		break;
	case 2:
		var bgra = color;
		var rgba1 = 0;
		rgba1 = (bgra >> 8 & 255 & 255) << 24 | (bgra >> 16 & 255 & 255) << 16 | (bgra >> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		fillColor = rgba1;
		break;
	default:
		fillColor = color;
	}
	if(!image.get_transparent()) {
		fillColor = (fillColor >> 24 & 255 & 255) << 24 | (fillColor >> 16 & 255 & 255) << 16 | (fillColor >> 8 & 255 & 255) << 8 | 255;
		255;
	}
	var data = image.buffer.data;
	if(data == null) return;
	var format1 = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	var dataView = new lime.graphics.utils._ImageDataUtil.ImageDataView(image,rect);
	var row;
	var _g1 = 0;
	var _g = dataView.height;
	while(_g1 < _g) {
		var y = _g1++;
		row = dataView.offset + dataView.stride * y;
		var _g3 = 0;
		var _g2 = dataView.width;
		while(_g3 < _g2) {
			var x = _g3++;
			var offset = row + x * 4;
			if(premultiplied) {
				if((fillColor & 255) == 0) {
					if(fillColor != 0) fillColor = 0;
				} else if((fillColor & 255) != 255) {
					lime.math.color._RGBA.RGBA_Impl_.a16 = lime.math.color._RGBA.RGBA_Impl_.__alpha16[fillColor & 255];
					fillColor = ((fillColor >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 24 | ((fillColor >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 16 | ((fillColor >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 8 | fillColor & 255 & 255;
				}
			}
			switch(format1) {
			case 2:
				data[offset] = fillColor >> 8 & 255;
				data[offset + 1] = fillColor >> 16 & 255;
				data[offset + 2] = fillColor >> 24 & 255;
				data[offset + 3] = fillColor & 255;
				break;
			case 0:
				data[offset] = fillColor >> 24 & 255;
				data[offset + 1] = fillColor >> 16 & 255;
				data[offset + 2] = fillColor >> 8 & 255;
				data[offset + 3] = fillColor & 255;
				break;
			case 1:
				data[offset] = fillColor & 255;
				data[offset + 1] = fillColor >> 24 & 255;
				data[offset + 2] = fillColor >> 16 & 255;
				data[offset + 3] = fillColor >> 8 & 255;
				break;
			}
		}
	}
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.multiplyAlpha = function(image) {
	var data = image.buffer.data;
	if(data == null || !image.buffer.transparent) return;
	var format = image.buffer.format;
	var length = data.length / 4 | 0;
	var pixel;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		var offset = i * 4;
		switch(format) {
		case 2:
			pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
			break;
		case 0:
			pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
			break;
		case 1:
			pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
			break;
		}
		var offset1 = i * 4;
		if((pixel & 255) == 0) {
			if(pixel != 0) pixel = 0;
		} else if((pixel & 255) != 255) {
			lime.math.color._RGBA.RGBA_Impl_.a16 = lime.math.color._RGBA.RGBA_Impl_.__alpha16[pixel & 255];
			pixel = ((pixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 24 | ((pixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 16 | ((pixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 8 | pixel & 255 & 255;
		}
		switch(format) {
		case 2:
			data[offset1] = pixel >> 8 & 255;
			data[offset1 + 1] = pixel >> 16 & 255;
			data[offset1 + 2] = pixel >> 24 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		case 0:
			data[offset1] = pixel >> 24 & 255;
			data[offset1 + 1] = pixel >> 16 & 255;
			data[offset1 + 2] = pixel >> 8 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		case 1:
			data[offset1] = pixel & 255;
			data[offset1 + 1] = pixel >> 24 & 255;
			data[offset1 + 2] = pixel >> 16 & 255;
			data[offset1 + 3] = pixel >> 8 & 255;
			break;
		}
	}
	image.buffer.premultiplied = true;
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.setFormat = function(image,format) {
	var data = image.buffer.data;
	if(data == null) return;
	var index;
	var a16;
	var length = data.length / 4 | 0;
	var r1;
	var g1;
	var b1;
	var a1;
	var r2;
	var g2;
	var b2;
	var a2;
	var r;
	var g;
	var b;
	var a;
	var _g = image.get_format();
	switch(_g) {
	case 0:
		r1 = 0;
		g1 = 1;
		b1 = 2;
		a1 = 3;
		break;
	case 1:
		r1 = 1;
		g1 = 2;
		b1 = 3;
		a1 = 0;
		break;
	case 2:
		r1 = 2;
		g1 = 1;
		b1 = 0;
		a1 = 3;
		break;
	}
	switch(format) {
	case 0:
		r2 = 0;
		g2 = 1;
		b2 = 2;
		a2 = 3;
		break;
	case 1:
		r2 = 1;
		g2 = 2;
		b2 = 3;
		a2 = 0;
		break;
	case 2:
		r2 = 2;
		g2 = 1;
		b2 = 0;
		a2 = 3;
		break;
	}
	var _g1 = 0;
	while(_g1 < length) {
		var i = _g1++;
		index = i * 4;
		r = data[index + r1];
		g = data[index + g1];
		b = data[index + b1];
		a = data[index + a1];
		data[index + r2] = r;
		data[index + g2] = g;
		data[index + b2] = b;
		data[index + a2] = a;
	}
	image.buffer.format = format;
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.unmultiplyAlpha = function(image) {
	var data = image.buffer.data;
	if(data == null) return;
	var format = image.buffer.format;
	var length = data.length / 4 | 0;
	var pixel;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		var offset = i * 4;
		switch(format) {
		case 2:
			pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
			break;
		case 0:
			pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
			break;
		case 1:
			pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
			break;
		}
		if((pixel & 255) != 0 && (pixel & 255) != 255) {
			lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (pixel & 255);
			var r;
			var idx = Math.round((pixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
			r = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx];
			var g;
			var idx1 = Math.round((pixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
			g = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx1];
			var b;
			var idx2 = Math.round((pixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
			b = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx2];
			pixel = (r & 255) << 24 | (g & 255) << 16 | (b & 255) << 8 | pixel & 255 & 255;
		}
		var offset1 = i * 4;
		switch(format) {
		case 2:
			data[offset1] = pixel >> 8 & 255;
			data[offset1 + 1] = pixel >> 16 & 255;
			data[offset1 + 2] = pixel >> 24 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		case 0:
			data[offset1] = pixel >> 24 & 255;
			data[offset1 + 1] = pixel >> 16 & 255;
			data[offset1 + 2] = pixel >> 8 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		case 1:
			data[offset1] = pixel & 255;
			data[offset1 + 1] = pixel >> 24 & 255;
			data[offset1 + 2] = pixel >> 16 & 255;
			data[offset1 + 3] = pixel >> 8 & 255;
			break;
		}
	}
	image.buffer.premultiplied = false;
	image.dirty = true;
};
lime.graphics.utils._ImageDataUtil = {};
lime.graphics.utils._ImageDataUtil.ImageDataView = function(image,rect) {
	this.image = image;
	if(rect == null) this.rect = image.get_rect(); else {
		if(rect.x < 0) rect.x = 0;
		if(rect.y < 0) rect.y = 0;
		if(rect.x + rect.width > image.width) rect.width = image.width - rect.x;
		if(rect.y + rect.height > image.height) rect.height = image.height - rect.y;
		if(rect.width < 0) rect.width = 0;
		if(rect.height < 0) rect.height = 0;
		this.rect = rect;
	}
	this.stride = image.buffer.get_stride();
	this.x = Math.ceil(this.rect.x);
	this.y = Math.ceil(this.rect.y);
	this.width = Math.floor(this.rect.width);
	this.height = Math.floor(this.rect.height);
	this.offset = this.stride * (this.y + image.offsetY) + (this.x + image.offsetX) * 4;
};
$hxClasses["lime.graphics.utils._ImageDataUtil.ImageDataView"] = lime.graphics.utils._ImageDataUtil.ImageDataView;
lime.graphics.utils._ImageDataUtil.ImageDataView.__name__ = ["lime","graphics","utils","_ImageDataUtil","ImageDataView"];
lime.graphics.utils._ImageDataUtil.ImageDataView.prototype = {
	__class__: lime.graphics.utils._ImageDataUtil.ImageDataView
};
lime.math = {};
lime.math.Matrix3 = function(a,b,c,d,tx,ty) {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(d == null) d = 1;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 1;
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
};
$hxClasses["lime.math.Matrix3"] = lime.math.Matrix3;
lime.math.Matrix3.__name__ = ["lime","math","Matrix3"];
lime.math.Matrix3.prototype = {
	__class__: lime.math.Matrix3
};
lime.math.Rectangle = function(x,y,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["lime.math.Rectangle"] = lime.math.Rectangle;
lime.math.Rectangle.__name__ = ["lime","math","Rectangle"];
lime.math.Rectangle.prototype = {
	offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,__toFlashRectangle: function() {
		return null;
	}
	,__class__: lime.math.Rectangle
};
lime.math.Vector2 = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
$hxClasses["lime.math.Vector2"] = lime.math.Vector2;
lime.math.Vector2.__name__ = ["lime","math","Vector2"];
lime.math.Vector2.prototype = {
	offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,__toFlashPoint: function() {
		return null;
	}
	,__class__: lime.math.Vector2
};
lime.math.color = {};
lime.math.color._RGBA = {};
lime.math.color._RGBA.RGBA_Impl_ = function() { };
$hxClasses["lime.math.color._RGBA.RGBA_Impl_"] = lime.math.color._RGBA.RGBA_Impl_;
lime.math.color._RGBA.RGBA_Impl_.__name__ = ["lime","math","color","_RGBA","RGBA_Impl_"];
lime.math.color._RGBA.RGBA_Impl_.__alpha16 = null;
lime.math.color._RGBA.RGBA_Impl_.__clamp = null;
lime.math.color._RGBA.RGBA_Impl_.a16 = null;
lime.math.color._RGBA.RGBA_Impl_.unmult = null;
lime.net = {};
lime.net.URLLoader = function(request) {
	this.onSecurityError = new lime.app.Event();
	this.onProgress = new lime.app.Event();
	this.onOpen = new lime.app.Event();
	this.onIOError = new lime.app.Event();
	this.onHTTPStatus = new lime.app.Event();
	this.onComplete = new lime.app.Event();
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.set_dataFormat(lime.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["lime.net.URLLoader"] = lime.net.URLLoader;
lime.net.URLLoader.__name__ = ["lime","net","URLLoader"];
lime.net.URLLoader.prototype = {
	getData: function() {
		return null;
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,registerEvents: function(subject) {
		var _g = this;
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.__onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s;
			try {
				s = subject.status;
			} catch( e ) {
				s = null;
			}
			if(s == undefined) s = null;
			if(s != null) {
				var listeners = self.onHTTPStatus.listeners;
				var repeat = self.onHTTPStatus.repeat;
				var i = 0;
				while(i < listeners.length) {
					listeners[i](_g,s);
					if(!repeat[i]) self.onHTTPStatus.remove(listeners[i]); else i++;
				}
			}
			if(s != null && s >= 200 && s < 400) self.__onData(subject.response); else if(s == null) {
				var listeners1 = self.onIOError.listeners;
				var repeat1 = self.onIOError.repeat;
				var i1 = 0;
				while(i1 < listeners1.length) {
					listeners1[i1](_g,"Failed to connect or resolve host");
					if(!repeat1[i1]) self.onIOError.remove(listeners1[i1]); else i1++;
				}
			} else if(s == 12029) {
				var listeners2 = self.onIOError.listeners;
				var repeat2 = self.onIOError.repeat;
				var i2 = 0;
				while(i2 < listeners2.length) {
					listeners2[i2](_g,"Failed to connect to host");
					if(!repeat2[i2]) self.onIOError.remove(listeners2[i2]); else i2++;
				}
			} else if(s == 12007) {
				var listeners3 = self.onIOError.listeners;
				var repeat3 = self.onIOError.repeat;
				var i3 = 0;
				while(i3 < listeners3.length) {
					listeners3[i3](_g,"Unknown host");
					if(!repeat3[i3]) self.onIOError.remove(listeners3[i3]); else i3++;
				}
			} else if(s == 0) {
				var listeners4 = self.onIOError.listeners;
				var repeat4 = self.onIOError.repeat;
				var i4 = 0;
				while(i4 < listeners4.length) {
					listeners4[i4](_g,"Unable to make request (may be blocked due to cross-domain permissions)");
					if(!repeat4[i4]) self.onIOError.remove(listeners4[i4]); else i4++;
				}
				var listeners5 = self.onSecurityError.listeners;
				var repeat5 = self.onSecurityError.repeat;
				var i5 = 0;
				while(i5 < listeners5.length) {
					listeners5[i5](_g,"Unable to make request (may be blocked due to cross-domain permissions)");
					if(!repeat5[i5]) self.onSecurityError.remove(listeners5[i5]); else i5++;
				}
			} else {
				var listeners6 = self.onIOError.listeners;
				var repeat6 = self.onIOError.repeat;
				var i6 = 0;
				while(i6 < listeners6.length) {
					listeners6[i6](_g,"Http Error #" + subject.status);
					if(!repeat6[i6]) self.onIOError.remove(listeners6[i6]); else i6++;
				}
			}
		};
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,lime.utils.ByteArray)) {
			var data1 = data;
			var _g = this.dataFormat;
			switch(_g[1]) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,lime.net.URLVariables)) {
			var data2 = data;
			var _g1 = 0;
			var _g11 = Reflect.fields(data2);
			while(_g1 < _g11.length) {
				var p = _g11[_g1];
				++_g1;
				if(uri.length != 0) uri += "&";
				uri += encodeURIComponent(p) + "=" + StringTools.urlEncode(Reflect.field(data2,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open("GET",url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(js.Boot.__cast(method , String),url,true);
		} catch( e ) {
			var listeners = this.onIOError.listeners;
			var repeat = this.onIOError.repeat;
			var i = 0;
			while(i < listeners.length) {
				listeners[i](this,e.toString());
				if(!repeat[i]) this.onIOError.remove(listeners[i]); else i++;
			}
			return;
		}
		var _g2 = this.dataFormat;
		switch(_g2[1]) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g3 = 0;
		while(_g3 < requestHeaders.length) {
			var header = requestHeaders[_g3];
			++_g3;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		var listeners1 = this.onOpen.listeners;
		var repeat1 = this.onOpen.repeat;
		var i1 = 0;
		while(i1 < listeners1.length) {
			listeners1[i1](this);
			if(!repeat1[i1]) this.onOpen.remove(listeners1[i1]); else i1++;
		}
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,__onData: function(_) {
		var content = this.getData();
		var _g = this.dataFormat;
		switch(_g[1]) {
		case 0:
			this.data = lime.utils.ByteArray.__ofBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var listeners = this.onComplete.listeners;
		var repeat = this.onComplete.repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](this);
			if(!repeat[i]) this.onComplete.remove(listeners[i]); else i++;
		}
	}
	,__onProgress: function(event) {
		this.bytesLoaded = event.loaded;
		this.bytesTotal = event.total;
		var listeners = this.onProgress.listeners;
		var repeat = this.onProgress.repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](this,this.bytesLoaded,this.bytesTotal);
			if(!repeat[i]) this.onProgress.remove(listeners[i]); else i++;
		}
	}
	,set_dataFormat: function(inputVal) {
		if(inputVal == lime.net.URLLoaderDataFormat.BINARY && !Reflect.hasField(window,"ArrayBuffer")) this.dataFormat = lime.net.URLLoaderDataFormat.TEXT; else this.dataFormat = inputVal;
		return this.dataFormat;
	}
	,__class__: lime.net.URLLoader
	,__properties__: {set_dataFormat:"set_dataFormat"}
};
lime.net.URLLoaderDataFormat = $hxClasses["lime.net.URLLoaderDataFormat"] = { __ename__ : ["lime","net","URLLoaderDataFormat"], __constructs__ : ["BINARY","TEXT","VARIABLES"] };
lime.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
lime.net.URLLoaderDataFormat.BINARY.toString = $estr;
lime.net.URLLoaderDataFormat.BINARY.__enum__ = lime.net.URLLoaderDataFormat;
lime.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
lime.net.URLLoaderDataFormat.TEXT.toString = $estr;
lime.net.URLLoaderDataFormat.TEXT.__enum__ = lime.net.URLLoaderDataFormat;
lime.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
lime.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
lime.net.URLLoaderDataFormat.VARIABLES.__enum__ = lime.net.URLLoaderDataFormat;
lime.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = "GET";
	this.contentType = null;
};
$hxClasses["lime.net.URLRequest"] = lime.net.URLRequest;
lime.net.URLRequest.__name__ = ["lime","net","URLRequest"];
lime.net.URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == "GET" || this.data == null) return res;
		if(typeof(this.data) == "string" || js.Boot.__instanceof(this.data,lime.utils.ByteArray)) {
			res = res.slice();
			res.push(new lime.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,__class__: lime.net.URLRequest
};
lime.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["lime.net.URLRequestHeader"] = lime.net.URLRequestHeader;
lime.net.URLRequestHeader.__name__ = ["lime","net","URLRequestHeader"];
lime.net.URLRequestHeader.prototype = {
	__class__: lime.net.URLRequestHeader
};
lime.net.URLVariables = function() { };
$hxClasses["lime.net.URLVariables"] = lime.net.URLVariables;
lime.net.URLVariables.__name__ = ["lime","net","URLVariables"];
lime.system = {};
lime.system.Clipboard = function() { };
$hxClasses["lime.system.Clipboard"] = lime.system.Clipboard;
lime.system.Clipboard.__name__ = ["lime","system","Clipboard"];
lime.system.Clipboard.__properties__ = {set_text:"set_text",get_text:"get_text"}
lime.system.Clipboard.get_text = function() {
	return null;
};
lime.system.Clipboard.set_text = function(value) {
	return null;
};
lime.system.System = function() { };
$hxClasses["lime.system.System"] = lime.system.System;
lime.system.System.__name__ = ["lime","system","System"];
lime.system.System.embed = $hx_exports.lime.embed = function(element,width,height,background,assetsPrefix) {
	var htmlElement = null;
	if(typeof(element) == "string") htmlElement = window.document.getElementById(js.Boot.__cast(element , String)); else if(element == null) htmlElement = window.document.createElement("div"); else htmlElement = element;
	var color = null;
	if(background != null) {
		background = StringTools.replace(background,"#","");
		if(background.indexOf("0x") > -1) color = Std.parseInt(background); else color = Std.parseInt("0x" + background);
	}
	if(width == null) width = 0;
	if(height == null) height = 0;
	ApplicationMain.config.windows[0].background = color;
	ApplicationMain.config.windows[0].element = htmlElement;
	ApplicationMain.config.windows[0].width = width;
	ApplicationMain.config.windows[0].height = height;
	ApplicationMain.config.assetsPrefix = assetsPrefix;
	ApplicationMain.create();
};
lime.system.System.getTimer = function() {
	return new Date().getTime();
};
lime.text = {};
lime.text.Font = function() { };
$hxClasses["lime.text.Font"] = lime.text.Font;
lime.text.Font.__name__ = ["lime","text","Font"];
lime.text.Font.prototype = {
	__class__: lime.text.Font
};
lime.ui = {};
lime.ui.Gamepad = function() {
	this.onDisconnect = new lime.app.Event();
	this.onButtonUp = new lime.app.Event();
	this.onButtonDown = new lime.app.Event();
	this.onAxisMove = new lime.app.Event();
};
$hxClasses["lime.ui.Gamepad"] = lime.ui.Gamepad;
lime.ui.Gamepad.__name__ = ["lime","ui","Gamepad"];
lime.ui.Gamepad.prototype = {
	__class__: lime.ui.Gamepad
};
lime.ui._KeyModifier = {};
lime.ui._KeyModifier.KeyModifier_Impl_ = function() { };
$hxClasses["lime.ui._KeyModifier.KeyModifier_Impl_"] = lime.ui._KeyModifier.KeyModifier_Impl_;
lime.ui._KeyModifier.KeyModifier_Impl_.__name__ = ["lime","ui","_KeyModifier","KeyModifier_Impl_"];
lime.ui._KeyModifier.KeyModifier_Impl_.__properties__ = {get_shiftKey:"get_shiftKey",get_metaKey:"get_metaKey",get_ctrlKey:"get_ctrlKey",get_altKey:"get_altKey"}
lime.ui._KeyModifier.KeyModifier_Impl_.get_altKey = function(this1) {
	return (this1 & 256) > 0 || (this1 & 512) > 0;
};
lime.ui._KeyModifier.KeyModifier_Impl_.get_ctrlKey = function(this1) {
	return (this1 & 64) > 0 || (this1 & 128) > 0;
};
lime.ui._KeyModifier.KeyModifier_Impl_.get_metaKey = function(this1) {
	return (this1 & 1024) > 0 || (this1 & 2048) > 0;
};
lime.ui._KeyModifier.KeyModifier_Impl_.get_shiftKey = function(this1) {
	return (this1 & 1) > 0 || (this1 & 2) > 0;
};
lime.ui.Mouse = function() { };
$hxClasses["lime.ui.Mouse"] = lime.ui.Mouse;
lime.ui.Mouse.__name__ = ["lime","ui","Mouse"];
lime.ui.Mouse.__properties__ = {set_cursor:"set_cursor"}
lime.ui.Mouse.set_cursor = function(value) {
	return lime._backend.html5.HTML5Mouse.set_cursor(value);
};
lime.ui.MouseCursor = $hxClasses["lime.ui.MouseCursor"] = { __ename__ : ["lime","ui","MouseCursor"], __constructs__ : ["ARROW","CROSSHAIR","DEFAULT","MOVE","POINTER","RESIZE_NESW","RESIZE_NS","RESIZE_NWSE","RESIZE_WE","TEXT","WAIT","WAIT_ARROW","CUSTOM"] };
lime.ui.MouseCursor.ARROW = ["ARROW",0];
lime.ui.MouseCursor.ARROW.toString = $estr;
lime.ui.MouseCursor.ARROW.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.CROSSHAIR = ["CROSSHAIR",1];
lime.ui.MouseCursor.CROSSHAIR.toString = $estr;
lime.ui.MouseCursor.CROSSHAIR.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.DEFAULT = ["DEFAULT",2];
lime.ui.MouseCursor.DEFAULT.toString = $estr;
lime.ui.MouseCursor.DEFAULT.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.MOVE = ["MOVE",3];
lime.ui.MouseCursor.MOVE.toString = $estr;
lime.ui.MouseCursor.MOVE.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.POINTER = ["POINTER",4];
lime.ui.MouseCursor.POINTER.toString = $estr;
lime.ui.MouseCursor.POINTER.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.RESIZE_NESW = ["RESIZE_NESW",5];
lime.ui.MouseCursor.RESIZE_NESW.toString = $estr;
lime.ui.MouseCursor.RESIZE_NESW.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.RESIZE_NS = ["RESIZE_NS",6];
lime.ui.MouseCursor.RESIZE_NS.toString = $estr;
lime.ui.MouseCursor.RESIZE_NS.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.RESIZE_NWSE = ["RESIZE_NWSE",7];
lime.ui.MouseCursor.RESIZE_NWSE.toString = $estr;
lime.ui.MouseCursor.RESIZE_NWSE.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.RESIZE_WE = ["RESIZE_WE",8];
lime.ui.MouseCursor.RESIZE_WE.toString = $estr;
lime.ui.MouseCursor.RESIZE_WE.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.TEXT = ["TEXT",9];
lime.ui.MouseCursor.TEXT.toString = $estr;
lime.ui.MouseCursor.TEXT.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.WAIT = ["WAIT",10];
lime.ui.MouseCursor.WAIT.toString = $estr;
lime.ui.MouseCursor.WAIT.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.WAIT_ARROW = ["WAIT_ARROW",11];
lime.ui.MouseCursor.WAIT_ARROW.toString = $estr;
lime.ui.MouseCursor.WAIT_ARROW.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.CUSTOM = ["CUSTOM",12];
lime.ui.MouseCursor.CUSTOM.toString = $estr;
lime.ui.MouseCursor.CUSTOM.__enum__ = lime.ui.MouseCursor;
lime.ui.Touch = function(x,y,id,dx,dy,pressure,device) {
	this.x = x;
	this.y = y;
	this.id = id;
	this.dx = dx;
	this.dy = dy;
	this.pressure = pressure;
	this.device = device;
};
$hxClasses["lime.ui.Touch"] = lime.ui.Touch;
lime.ui.Touch.__name__ = ["lime","ui","Touch"];
lime.ui.Touch.prototype = {
	__class__: lime.ui.Touch
};
lime.ui.Window = function(config) {
	this.onTextInput = new lime.app.Event();
	this.onTextEdit = new lime.app.Event();
	this.onRestore = new lime.app.Event();
	this.onResize = new lime.app.Event();
	this.onMove = new lime.app.Event();
	this.onMouseWheel = new lime.app.Event();
	this.onMouseUp = new lime.app.Event();
	this.onMouseMoveRelative = new lime.app.Event();
	this.onMouseMove = new lime.app.Event();
	this.onMouseDown = new lime.app.Event();
	this.onMinimize = new lime.app.Event();
	this.onLeave = new lime.app.Event();
	this.onKeyUp = new lime.app.Event();
	this.onKeyDown = new lime.app.Event();
	this.onFullscreen = new lime.app.Event();
	this.onFocusOut = new lime.app.Event();
	this.onFocusIn = new lime.app.Event();
	this.onEnter = new lime.app.Event();
	this.onDeactivate = new lime.app.Event();
	this.onCreate = new lime.app.Event();
	this.onClose = new lime.app.Event();
	this.onActivate = new lime.app.Event();
	this.config = config;
	this.__width = 0;
	this.__height = 0;
	this.__fullscreen = false;
	this.__x = 0;
	this.__y = 0;
	this.__title = "";
	this.id = -1;
	if(config != null) {
		if(Object.prototype.hasOwnProperty.call(config,"width")) this.__width = config.width;
		if(Object.prototype.hasOwnProperty.call(config,"height")) this.__height = config.height;
		if(Object.prototype.hasOwnProperty.call(config,"x")) this.__x = config.x;
		if(Object.prototype.hasOwnProperty.call(config,"y")) this.__y = config.y;
		if(Object.prototype.hasOwnProperty.call(config,"fullscreen")) this.__fullscreen = config.fullscreen;
		if(Object.prototype.hasOwnProperty.call(config,"title")) this.__title = config.title;
	}
	this.backend = new lime._backend.html5.HTML5Window(this);
};
$hxClasses["lime.ui.Window"] = lime.ui.Window;
lime.ui.Window.__name__ = ["lime","ui","Window"];
lime.ui.Window.prototype = {
	close: function() {
		this.backend.close();
	}
	,create: function(application) {
		this.application = application;
		this.backend.create(application);
		if(this.renderer != null) this.renderer.create();
	}
	,resize: function(width,height) {
		this.backend.resize(width,height);
		this.__width = width;
		this.__height = height;
	}
	,set_fullscreen: function(value) {
		return this.__fullscreen = this.backend.setFullscreen(value);
	}
	,set_height: function(value) {
		this.resize(this.__width,value);
		return this.__height;
	}
	,set_width: function(value) {
		this.resize(value,this.__height);
		return this.__width;
	}
	,__class__: lime.ui.Window
	,__properties__: {set_width:"set_width",set_height:"set_height",set_fullscreen:"set_fullscreen"}
};
lime.utils = {};
lime.utils.ByteArray = function(size) {
	if(size == null) size = 0;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	if(size > 0) this.allocated = size;
	this.___resizeBuffer(this.allocated);
	this.set_length(this.allocated);
};
$hxClasses["lime.utils.ByteArray"] = lime.utils.ByteArray;
lime.utils.ByteArray.__name__ = ["lime","utils","ByteArray"];
lime.utils.ByteArray.__ofBuffer = function(buffer) {
	var bytes = new lime.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
};
lime.utils.ByteArray.prototype = {
	readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var data = this.data;
			var c = data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | data.getUint8(this.position++) & 127);
			} else {
				var c21 = data.getUint8(this.position++);
				var c3 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c21 & 127) << 12 | c3 << 6 & 127 | data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure * 2) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		var data = this.data;
		data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0;
		var _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,__get: function(pos) {
		return this.data.getInt8(pos);
	}
	,___resizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,set_length: function(value) {
		if(this.allocated < value) this.___resizeBuffer(this.allocated = Std["int"](Math.max(value,this.allocated * 2))); else if(this.allocated > value * 2) this.___resizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,__class__: lime.utils.ByteArray
	,__properties__: {set_length:"set_length"}
};
openfl.IAssetCache = function() { };
$hxClasses["openfl.IAssetCache"] = openfl.IAssetCache;
openfl.IAssetCache.__name__ = ["openfl","IAssetCache"];
openfl.IAssetCache.prototype = {
	__class__: openfl.IAssetCache
};
openfl.AssetCache = function() {
	this.__enabled = true;
	this.bitmapData = new haxe.ds.StringMap();
	this.font = new haxe.ds.StringMap();
	this.sound = new haxe.ds.StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl.AssetCache;
openfl.AssetCache.__name__ = ["openfl","AssetCache"];
openfl.AssetCache.__interfaces__ = [openfl.IAssetCache];
openfl.AssetCache.prototype = {
	getBitmapData: function(id) {
		return this.bitmapData.get(id);
	}
	,hasBitmapData: function(id) {
		return this.bitmapData.exists(id);
	}
	,removeBitmapData: function(id) {
		return this.bitmapData.remove(id);
	}
	,setBitmapData: function(id,bitmapData) {
		this.bitmapData.set(id,bitmapData);
	}
	,get_enabled: function() {
		return this.__enabled;
	}
	,__class__: openfl.AssetCache
	,__properties__: {get_enabled:"get_enabled"}
};
openfl.Assets = function() { };
$hxClasses["openfl.Assets"] = openfl.Assets;
openfl.Assets.__name__ = ["openfl","Assets"];
openfl.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	if(useCache && openfl.Assets.cache.get_enabled() && openfl.Assets.cache.hasBitmapData(id)) {
		var bitmapData = openfl.Assets.cache.getBitmapData(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) return bitmapData;
	}
	var image = lime.Assets.getImage(id,false);
	if(image != null) {
		var bitmapData1 = openfl.display.BitmapData.fromImage(image);
		if(useCache && openfl.Assets.cache.get_enabled()) openfl.Assets.cache.setBitmapData(id,bitmapData1);
		return bitmapData1;
	}
	return null;
};
openfl.Assets.getText = function(id) {
	return lime.Assets.getText(id);
};
openfl.Assets.isValidBitmapData = function(bitmapData) {
	return bitmapData != null && bitmapData.image != null;
	return true;
};
openfl.Assets.loadBitmapData = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	if(useCache && openfl.Assets.cache.get_enabled() && openfl.Assets.cache.hasBitmapData(id)) {
		var bitmapData = openfl.Assets.cache.getBitmapData(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) {
			handler(bitmapData);
			return;
		}
	}
	lime.Assets.loadImage(id,function(image) {
		if(image != null) {
			var bitmapData1 = openfl.display.BitmapData.fromImage(image);
			if(useCache && openfl.Assets.cache.get_enabled()) openfl.Assets.cache.setBitmapData(id,bitmapData1);
			handler(bitmapData1);
		}
	},false);
};
openfl.Assets.loadLibrary = function(name,handler) {
	lime.Assets.loadLibrary(name,handler);
};
openfl.display.LoaderInfo = function() {
	openfl.events.EventDispatcher.call(this);
	this.applicationDomain = openfl.system.ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["openfl.display.LoaderInfo"] = openfl.display.LoaderInfo;
openfl.display.LoaderInfo.__name__ = ["openfl","display","LoaderInfo"];
openfl.display.LoaderInfo.create = function(loader) {
	var loaderInfo = new openfl.display.LoaderInfo();
	loaderInfo.uncaughtErrorEvents = new openfl.events.UncaughtErrorEvents();
	if(loader != null) loaderInfo.loader = loader; else loaderInfo.url = openfl.display.LoaderInfo.__rootURL;
	return loaderInfo;
};
openfl.display.LoaderInfo.__super__ = openfl.events.EventDispatcher;
openfl.display.LoaderInfo.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	__class__: openfl.display.LoaderInfo
});
openfl.system = {};
openfl.system.ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = openfl.system.ApplicationDomain.currentDomain;
};
$hxClasses["openfl.system.ApplicationDomain"] = openfl.system.ApplicationDomain;
openfl.system.ApplicationDomain.__name__ = ["openfl","system","ApplicationDomain"];
openfl.system.ApplicationDomain.prototype = {
	__class__: openfl.system.ApplicationDomain
};
openfl.events.UncaughtErrorEvents = function(target) {
	openfl.events.EventDispatcher.call(this,target);
};
$hxClasses["openfl.events.UncaughtErrorEvents"] = openfl.events.UncaughtErrorEvents;
openfl.events.UncaughtErrorEvents.__name__ = ["openfl","events","UncaughtErrorEvents"];
openfl.events.UncaughtErrorEvents.__super__ = openfl.events.EventDispatcher;
openfl.events.UncaughtErrorEvents.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	__class__: openfl.events.UncaughtErrorEvents
});
openfl.geom.Matrix = function(a,b,c,d,tx,ty) {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(d == null) d = 1;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 1;
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
};
$hxClasses["openfl.geom.Matrix"] = openfl.geom.Matrix;
openfl.geom.Matrix.__name__ = ["openfl","geom","Matrix"];
openfl.geom.Matrix.prototype = {
	clone: function() {
		return new openfl.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.ty = this.tx * m.b + this.ty * m.d + m.ty;
		this.tx = tx1;
	}
	,copyFrom: function(sourceMatrix) {
		this.a = sourceMatrix.a;
		this.b = sourceMatrix.b;
		this.c = sourceMatrix.c;
		this.d = sourceMatrix.d;
		this.tx = sourceMatrix.tx;
		this.ty = sourceMatrix.ty;
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.tx = 0;
		this.ty = 0;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.tx = -this.tx;
			this.ty = -this.ty;
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.ty = -this.b * this.tx - this.d * this.ty;
			this.tx = tx1;
		}
		return this;
	}
	,scale: function(sx,sy) {
		this.a *= sx;
		this.b *= sy;
		this.c *= sx;
		this.d *= sy;
		this.tx *= sx;
		this.ty *= sy;
	}
	,to3DString: function(roundPixels) {
		if(roundPixels == null) roundPixels = false;
		if(roundPixels) return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + (this.tx | 0) + ", " + (this.ty | 0) + ", 0, 1)"; else return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", 0, 1)";
	}
	,transformPoint: function(pos) {
		return new openfl.geom.Point(pos.x * this.a + pos.y * this.c + this.tx,pos.x * this.b + pos.y * this.d + this.ty);
	}
	,translate: function(dx,dy) {
		this.tx += dx;
		this.ty += dy;
	}
	,toArray: function(transpose) {
		if(transpose == null) transpose = false;
		if(this.__array == null) {
			var this1;
			this1 = new Float32Array(9);
			this.__array = this1;
		}
		if(transpose) {
			this.__array[0] = this.a;
			this.__array[1] = this.b;
			this.__array[2] = 0;
			this.__array[3] = this.c;
			this.__array[4] = this.d;
			this.__array[5] = 0;
			this.__array[6] = this.tx;
			this.__array[7] = this.ty;
			this.__array[8] = 1;
		} else {
			this.__array[0] = this.a;
			this.__array[1] = this.c;
			this.__array[2] = this.tx;
			this.__array[3] = this.b;
			this.__array[4] = this.d;
			this.__array[5] = this.ty;
			this.__array[6] = 0;
			this.__array[7] = 0;
			this.__array[8] = 1;
		}
		return this.__array;
	}
	,__toMatrix3: function() {
		return new lime.math.Matrix3(this.a,this.b,this.c,this.d,this.tx,this.ty);
	}
	,__transformInversePoint: function(point) {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			point.x = -this.tx;
			point.y = -this.ty;
		} else {
			var px = 1.0 / norm * (this.c * (this.ty - point.y) + this.d * (point.x - this.tx));
			point.y = 1.0 / norm * (this.a * (point.y - this.ty) + this.b * (this.tx - point.x));
			point.x = px;
		}
	}
	,__transformInverseX: function(px,py) {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) return -this.tx; else return 1.0 / norm * (this.c * (this.ty - py) + this.d * (px - this.tx));
	}
	,__transformInverseY: function(px,py) {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) return -this.ty; else return 1.0 / norm * (this.a * (py - this.ty) + this.b * (this.tx - px));
	}
	,__class__: openfl.geom.Matrix
};
openfl.geom.ColorTransform = function(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset) {
	if(alphaOffset == null) alphaOffset = 0;
	if(blueOffset == null) blueOffset = 0;
	if(greenOffset == null) greenOffset = 0;
	if(redOffset == null) redOffset = 0;
	if(alphaMultiplier == null) alphaMultiplier = 1;
	if(blueMultiplier == null) blueMultiplier = 1;
	if(greenMultiplier == null) greenMultiplier = 1;
	if(redMultiplier == null) redMultiplier = 1;
	this.redMultiplier = redMultiplier;
	this.greenMultiplier = greenMultiplier;
	this.blueMultiplier = blueMultiplier;
	this.alphaMultiplier = alphaMultiplier;
	this.redOffset = redOffset;
	this.greenOffset = greenOffset;
	this.blueOffset = blueOffset;
	this.alphaOffset = alphaOffset;
};
$hxClasses["openfl.geom.ColorTransform"] = openfl.geom.ColorTransform;
openfl.geom.ColorTransform.__name__ = ["openfl","geom","ColorTransform"];
openfl.geom.ColorTransform.prototype = {
	__combine: function(ct) {
		this.redMultiplier *= ct.redMultiplier;
		this.greenMultiplier *= ct.greenMultiplier;
		this.blueMultiplier *= ct.blueMultiplier;
		this.alphaMultiplier *= ct.alphaMultiplier;
		this.redOffset += ct.redOffset;
		this.greenOffset += ct.greenOffset;
		this.blueOffset += ct.blueOffset;
		this.alphaOffset += ct.alphaOffset;
	}
	,__equals: function(ct,skipAlphaMultiplier) {
		if(skipAlphaMultiplier == null) skipAlphaMultiplier = false;
		return ct != null && this.redMultiplier == ct.redMultiplier && this.greenMultiplier == ct.greenMultiplier && this.blueMultiplier == ct.blueMultiplier && (skipAlphaMultiplier || this.alphaMultiplier == ct.alphaMultiplier) && this.redOffset == ct.redOffset && this.greenOffset == ct.greenOffset && this.blueOffset == ct.blueOffset && this.alphaOffset == ct.alphaOffset;
	}
	,__clone: function() {
		return new openfl.geom.ColorTransform(this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset);
	}
	,__class__: openfl.geom.ColorTransform
};
openfl.Lib = function() { };
$hxClasses["openfl.Lib"] = openfl.Lib;
openfl.Lib.__name__ = ["openfl","Lib"];
openfl.Lib.application = null;
openfl.Lib.embed = $hx_exports.openfl.embed = function(elementName,width,height,background,assetsPrefix) {
	lime.system.System.embed(elementName,width,height,background,assetsPrefix);
};
openfl.Lib.getTimer = function() {
	return lime.system.System.getTimer();
};
openfl.Lib.notImplemented = function(api) {
	if(!openfl.Lib.__sentWarnings.exists(api)) {
		openfl.Lib.__sentWarnings.set(api,true);
		console.log("Warning: " + api + " is not implemented");
	}
};
openfl.VectorData = function() {
	this.length = 0;
};
$hxClasses["openfl.VectorData"] = openfl.VectorData;
openfl.VectorData.__name__ = ["openfl","VectorData"];
openfl.VectorData.prototype = {
	__class__: openfl.VectorData
};
openfl._internal = {};
openfl._internal.renderer = {};
openfl._internal.renderer.AbstractMaskManager = function(renderSession) {
	this.renderSession = renderSession;
};
$hxClasses["openfl._internal.renderer.AbstractMaskManager"] = openfl._internal.renderer.AbstractMaskManager;
openfl._internal.renderer.AbstractMaskManager.__name__ = ["openfl","_internal","renderer","AbstractMaskManager"];
openfl._internal.renderer.AbstractMaskManager.prototype = {
	pushMask: function(mask) {
	}
	,pushRect: function(rect,transform) {
	}
	,popMask: function() {
	}
	,__class__: openfl._internal.renderer.AbstractMaskManager
};
openfl._internal.renderer.AbstractRenderer = function(width,height) {
	this.width = width;
	this.height = height;
};
$hxClasses["openfl._internal.renderer.AbstractRenderer"] = openfl._internal.renderer.AbstractRenderer;
openfl._internal.renderer.AbstractRenderer.__name__ = ["openfl","_internal","renderer","AbstractRenderer"];
openfl._internal.renderer.AbstractRenderer.prototype = {
	render: function(stage) {
	}
	,resize: function(width,height) {
	}
	,__class__: openfl._internal.renderer.AbstractRenderer
};
openfl._internal.renderer.GraphicsPaths = function() { };
$hxClasses["openfl._internal.renderer.GraphicsPaths"] = openfl._internal.renderer.GraphicsPaths;
openfl._internal.renderer.GraphicsPaths.__name__ = ["openfl","_internal","renderer","GraphicsPaths"];
openfl._internal.renderer.GraphicsPaths.ellipse = function(points,x,y,rx,ry,segmentCount) {
	var seg = Math.PI * 2 / segmentCount;
	var _g1 = 0;
	var _g = segmentCount + 1;
	while(_g1 < _g) {
		var i = _g1++;
		points.push(x + Math.sin(seg * i) * rx);
		points.push(y + Math.cos(seg * i) * ry);
	}
};
openfl._internal.renderer.GraphicsPaths.cubicCurveTo = function(points,cx,cy,cx2,cy2,x,y) {
	var n = 20;
	var dt = 0;
	var dt2 = 0;
	var dt3 = 0;
	var t2 = 0;
	var t3 = 0;
	var fromX = points[points.length - 2];
	var fromY = points[points.length - 1];
	var px = 0;
	var py = 0;
	var tmp = 0;
	var _g1 = 1;
	var _g = n + 1;
	while(_g1 < _g) {
		var i = _g1++;
		tmp = i / n;
		dt = 1 - tmp;
		dt2 = dt * dt;
		dt3 = dt2 * dt;
		t2 = tmp * tmp;
		t3 = t2 * tmp;
		px = dt3 * fromX + 3 * dt2 * tmp * cx + 3 * dt * t2 * cx2 + t3 * x;
		py = dt3 * fromY + 3 * dt2 * tmp * cy + 3 * dt * t2 * cy2 + t3 * y;
		points.push(px);
		points.push(py);
	}
};
openfl._internal.renderer.GraphicsPaths.curveTo = function(points,cx,cy,x,y) {
	var xa = 0;
	var ya = 0;
	var n = 20;
	var fromX = points[points.length - 2];
	var fromY = points[points.length - 1];
	var px = 0;
	var py = 0;
	var tmp = 0;
	var _g1 = 1;
	var _g = n + 1;
	while(_g1 < _g) {
		var i = _g1++;
		tmp = i / n;
		xa = fromX + (cx - fromX) * tmp;
		ya = fromY + (cy - fromY) * tmp;
		px = xa + (cx + (x - cx) * tmp - xa) * tmp;
		py = ya + (cy + (y - cy) * tmp - ya) * tmp;
		points.push(px);
		points.push(py);
	}
};
openfl._internal.renderer.GraphicsPaths.roundRectangle = function(points,x,y,width,height,rx,ry) {
	var xe = x + width;
	var ye = y + height;
	var cx1 = -rx + rx * openfl._internal.renderer.GraphicsPaths.SIN45;
	var cx2 = -rx + rx * openfl._internal.renderer.GraphicsPaths.TAN22;
	var cy1 = -ry + ry * openfl._internal.renderer.GraphicsPaths.SIN45;
	var cy2 = -ry + ry * openfl._internal.renderer.GraphicsPaths.TAN22;
	points.push(xe);
	points.push(ye - ry);
	openfl._internal.renderer.GraphicsPaths.curveTo(points,xe,ye + cy2,xe + cx1,ye + cy1);
	openfl._internal.renderer.GraphicsPaths.curveTo(points,xe + cx2,ye,xe - rx,ye);
	points.push(x + rx);
	points.push(ye);
	openfl._internal.renderer.GraphicsPaths.curveTo(points,x - cx2,ye,x - cx1,ye + cy1);
	openfl._internal.renderer.GraphicsPaths.curveTo(points,x,ye + cy2,x,ye - ry);
	points.push(x);
	points.push(y + ry);
	openfl._internal.renderer.GraphicsPaths.curveTo(points,x,y - cy2,x - cx1,y - cy1);
	openfl._internal.renderer.GraphicsPaths.curveTo(points,x - cx2,y,x + rx,y);
	points.push(xe - rx);
	points.push(y);
	openfl._internal.renderer.GraphicsPaths.curveTo(points,xe + cx2,y,xe + cx1,y - cy1);
	openfl._internal.renderer.GraphicsPaths.curveTo(points,xe,y - cy2,xe,y + ry);
	points.push(xe);
	points.push(ye - ry);
};
openfl._internal.renderer.PolyK = function() { };
$hxClasses["openfl._internal.renderer.PolyK"] = openfl._internal.renderer.PolyK;
openfl._internal.renderer.PolyK.__name__ = ["openfl","_internal","renderer","PolyK"];
openfl._internal.renderer.PolyK.triangulate = function(tgs,p) {
	var sign = true;
	var n = p.length >> 1;
	if(n < 3) return [];
	var avl;
	var _g = [];
	var _g1 = 0;
	while(_g1 < n) {
		var i = _g1++;
		_g.push(i);
	}
	avl = _g;
	var i1 = 0;
	var al = n;
	var earFound = false;
	while(al > 3) {
		var i0 = avl[i1 % al];
		var i11 = avl[(i1 + 1) % al];
		var i2 = avl[(i1 + 2) % al];
		var ax = p[2 * i0];
		var ay = p[2 * i0 + 1];
		var bx = p[2 * i11];
		var by = p[2 * i11 + 1];
		var cx = p[2 * i2];
		var cy = p[2 * i2 + 1];
		earFound = false;
		if(openfl._internal.renderer.PolyK._convex(ax,ay,bx,by,cx,cy,sign)) {
			earFound = true;
			var _g11 = 0;
			while(_g11 < al) {
				var j = _g11++;
				var vi = avl[j];
				if(vi == i0 || vi == i11 || vi == i2) continue;
				if(openfl._internal.renderer.PolyK._PointInTriangle(p[2 * vi],p[2 * vi + 1],ax,ay,bx,by,cx,cy)) {
					earFound = false;
					break;
				}
			}
		}
		if(earFound) {
			tgs.push(i0);
			tgs.push(i11);
			tgs.push(i2);
			avl.splice((i1 + 1) % al,1);
			al--;
			i1 = 0;
		} else if(i1++ > 3 * al) {
			if(sign) {
				tgs = [];
				var _g12 = [];
				var _g2 = 0;
				while(_g2 < n) {
					var k = _g2++;
					_g12.push(k);
				}
				avl = _g12;
				i1 = 0;
				al = n;
				sign = false;
			} else {
				console.log("Warning: shape too complex to fill");
				return [];
			}
		}
	}
	tgs.push(avl[0]);
	tgs.push(avl[1]);
	tgs.push(avl[2]);
	return tgs;
};
openfl._internal.renderer.PolyK._PointInTriangle = function(px,py,ax,ay,bx,by,cx,cy) {
	var v0x = cx - ax | 0;
	var v0y = cy - ay | 0;
	var v1x = bx - ax | 0;
	var v1y = by - ay | 0;
	var v2x = px - ax | 0;
	var v2y = py - ay | 0;
	var dot00 = v0x * v0x + v0y * v0y;
	var dot01 = v0x * v1x + v0y * v1y;
	var dot02 = v0x * v2x + v0y * v2y;
	var dot11 = v1x * v1x + v1y * v1y;
	var dot12 = v1x * v2x + v1y * v2y;
	var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
	var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
	var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
	return u >= 0 && v >= 0 && u + v < 1;
};
openfl._internal.renderer.PolyK._convex = function(ax,ay,bx,by,cx,cy,sign) {
	return (ay - by) * (cx - bx) + (bx - ax) * (cy - by) >= 0 == sign;
};
openfl._internal.renderer.RenderSession = function() {
};
$hxClasses["openfl._internal.renderer.RenderSession"] = openfl._internal.renderer.RenderSession;
openfl._internal.renderer.RenderSession.__name__ = ["openfl","_internal","renderer","RenderSession"];
openfl._internal.renderer.RenderSession.prototype = {
	__class__: openfl._internal.renderer.RenderSession
};
openfl._internal.renderer.cairo = {};
openfl._internal.renderer.cairo.CairoBitmap = function() { };
$hxClasses["openfl._internal.renderer.cairo.CairoBitmap"] = openfl._internal.renderer.cairo.CairoBitmap;
openfl._internal.renderer.cairo.CairoBitmap.__name__ = ["openfl","_internal","renderer","cairo","CairoBitmap"];
openfl._internal.renderer.cairo.CairoBitmap.render = function(bitmap,renderSession) {
	if(!bitmap.__renderable || bitmap.__worldAlpha <= 0) return;
	var cairo = renderSession.cairo;
	if(bitmap.bitmapData != null && bitmap.bitmapData.__isValid) {
		if(bitmap.__mask != null) renderSession.maskManager.pushMask(bitmap.__mask);
		var transform = bitmap.__worldTransform;
		var scrollRect = bitmap.get_scrollRect();
		if(renderSession.roundPixels) {
			var matrix = transform.__toMatrix3();
			matrix.tx = Math.round(matrix.tx);
			matrix.ty = Math.round(matrix.ty);
			cairo.set_matrix(matrix);
		} else cairo.set_matrix(transform.__toMatrix3());
		var surface = bitmap.bitmapData.getSurface();
		if(surface != null) {
			var pattern = lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.createForSurface(surface);
			lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.set_filter(pattern,bitmap.smoothing?1:3);
			if(scrollRect != null) {
				cairo.pushGroup();
				cairo.set_source(pattern);
				cairo.newPath();
				cairo.rectangle(scrollRect.x,scrollRect.y,scrollRect.width,scrollRect.height);
				cairo.fill();
				cairo.popGroupToSource();
			} else cairo.set_source(pattern);
			if(bitmap.__worldAlpha == 1) cairo.paint(); else cairo.paintWithAlpha(bitmap.__worldAlpha);
			lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.destroy(pattern);
		}
		if(bitmap.__mask != null) renderSession.maskManager.popMask();
	}
};
openfl._internal.renderer.cairo.CairoGraphics = function() { };
$hxClasses["openfl._internal.renderer.cairo.CairoGraphics"] = openfl._internal.renderer.cairo.CairoGraphics;
openfl._internal.renderer.cairo.CairoGraphics.__name__ = ["openfl","_internal","renderer","cairo","CairoGraphics"];
openfl._internal.renderer.cairo.CairoGraphics.cairo = null;
openfl._internal.renderer.cairo.CairoGraphics.drawRoundRect = function(x,y,width,height,rx,ry) {
	if(ry == -1) ry = rx;
	rx *= 0.5;
	ry *= 0.5;
	if(rx > width / 2) rx = width / 2;
	if(ry > height / 2) ry = height / 2;
	var xe = x + width;
	var ye = y + height;
	var cx1 = -rx + rx * openfl._internal.renderer.cairo.CairoGraphics.SIN45;
	var cx2 = -rx + rx * openfl._internal.renderer.cairo.CairoGraphics.TAN22;
	var cy1 = -ry + ry * openfl._internal.renderer.cairo.CairoGraphics.SIN45;
	var cy2 = -ry + ry * openfl._internal.renderer.cairo.CairoGraphics.TAN22;
	openfl._internal.renderer.cairo.CairoGraphics.cairo.moveTo(xe,ye - ry);
	openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(xe,ye + cy2,xe + cx1,ye + cy1);
	openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(xe + cx2,ye,xe - rx,ye);
	openfl._internal.renderer.cairo.CairoGraphics.cairo.lineTo(x + rx,ye);
	openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(x - cx2,ye,x - cx1,ye + cy1);
	openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(x,ye + cy2,x,ye - ry);
	openfl._internal.renderer.cairo.CairoGraphics.cairo.lineTo(x,y + ry);
	openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(x,y - cy2,x - cx1,y - cy1);
	openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(x - cx2,y,x + rx,y);
	openfl._internal.renderer.cairo.CairoGraphics.cairo.lineTo(xe - rx,y);
	openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(xe + cx2,y,xe + cx1,y - cy1);
	openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(xe,y - cy2,xe,y + ry);
	openfl._internal.renderer.cairo.CairoGraphics.cairo.lineTo(xe,ye - ry);
};
openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo = function(cx,cy,x,y) {
	var current = null;
	if(!openfl._internal.renderer.cairo.CairoGraphics.cairo.get_hasCurrentPoint()) {
		openfl._internal.renderer.cairo.CairoGraphics.cairo.moveTo(cx,cy);
		current = new lime.math.Vector2(cx,cy);
	} else current = openfl._internal.renderer.cairo.CairoGraphics.cairo.get_currentPoint();
	var cx1 = current.x + 0.66666666666666663 * (cx - current.x);
	var cy1 = current.y + 0.66666666666666663 * (cy - current.y);
	var cx2 = x + 0.66666666666666663 * (cx - x);
	var cy2 = y + 0.66666666666666663 * (cy - y);
	openfl._internal.renderer.cairo.CairoGraphics.cairo.curveTo(cx1,cy1,cx2,cy2,x,y);
};
openfl._internal.renderer.cairo.CairoGraphics.renderMask = function(graphics,renderSession) {
	if(graphics.__commands.length != 0) {
		var cairo = renderSession.cairo;
		var positionX = 0.0;
		var positionY = 0.0;
		var offsetX = 0;
		var offsetY = 0;
		var _g = 0;
		var _g1 = graphics.__commands;
		while(_g < _g1.length) {
			var command = _g1[_g];
			++_g;
			switch(command[1]) {
			case 3:
				var y = command[7];
				var x = command[6];
				var cy2 = command[5];
				var cy1 = command[4];
				var cx2 = command[3];
				var cx1 = command[2];
				cairo.curveTo(cx1 - offsetX,cy1 - offsetY,cx2 - offsetX,cy2 - offsetY,x - offsetX,y - offsetY);
				positionX = x;
				positionY = y;
				break;
			case 4:
				var y1 = command[5];
				var x1 = command[4];
				var cy = command[3];
				var cx = command[2];
				openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(cx - offsetX,cy - offsetY,x1 - offsetX,y1 - offsetY);
				positionX = x1;
				positionY = y1;
				break;
			case 5:
				var radius = command[4];
				var y2 = command[3];
				var x2 = command[2];
				cairo.arc(x2 - offsetX,y2 - offsetY,radius,0,Math.PI * 2);
				break;
			case 6:
				var height = command[5];
				var width = command[4];
				var y3 = command[3];
				var x3 = command[2];
				x3 -= offsetX;
				y3 -= offsetY;
				var kappa = .5522848;
				var ox = width / 2 * kappa;
				var oy = height / 2 * kappa;
				var xe = x3 + width;
				var ye = y3 + height;
				var xm = x3 + width / 2;
				var ym = y3 + height / 2;
				cairo.moveTo(x3,ym);
				cairo.curveTo(x3,ym - oy,xm - ox,y3,xm,y3);
				cairo.curveTo(xm + ox,y3,xe,ym - oy,xe,ym);
				cairo.curveTo(xe,ym + oy,xm + ox,ye,xm,ye);
				cairo.curveTo(xm - ox,ye,x3,ym + oy,x3,ym);
				break;
			case 7:
				var height1 = command[5];
				var width1 = command[4];
				var y4 = command[3];
				var x4 = command[2];
				cairo.rectangle(x4 - offsetX,y4 - offsetY,width1,height1);
				break;
			case 8:
				var ry = command[7];
				var rx = command[6];
				var height2 = command[5];
				var width2 = command[4];
				var y5 = command[3];
				var x5 = command[2];
				openfl._internal.renderer.cairo.CairoGraphics.drawRoundRect(x5 - offsetX,y5 - offsetY,width2,height2,rx,ry);
				break;
			case 15:
				var y6 = command[3];
				var x6 = command[2];
				cairo.lineTo(x6 - offsetX,y6 - offsetY);
				positionX = x6;
				positionY = y6;
				break;
			case 16:
				var y7 = command[3];
				var x7 = command[2];
				cairo.moveTo(x7 - offsetX,y7 - offsetY);
				positionX = x7;
				positionY = y7;
				break;
			default:
			}
		}
	}
};
openfl._internal.renderer.cairo.CairoMaskManager = function(renderSession) {
	openfl._internal.renderer.AbstractMaskManager.call(this,renderSession);
};
$hxClasses["openfl._internal.renderer.cairo.CairoMaskManager"] = openfl._internal.renderer.cairo.CairoMaskManager;
openfl._internal.renderer.cairo.CairoMaskManager.__name__ = ["openfl","_internal","renderer","cairo","CairoMaskManager"];
openfl._internal.renderer.cairo.CairoMaskManager.__super__ = openfl._internal.renderer.AbstractMaskManager;
openfl._internal.renderer.cairo.CairoMaskManager.prototype = $extend(openfl._internal.renderer.AbstractMaskManager.prototype,{
	pushMask: function(mask) {
		var cairo = this.renderSession.cairo;
		cairo.save();
		var transform = mask.__getTransform();
		cairo.set_matrix(transform.__toMatrix3());
		cairo.newPath();
		mask.__renderCairoMask(this.renderSession);
		cairo.clip();
	}
	,pushRect: function(rect,transform) {
		var cairo = this.renderSession.cairo;
		cairo.save();
		cairo.set_matrix(new lime.math.Matrix3(transform.a,transform.c,transform.b,transform.d,transform.tx,transform.ty));
		cairo.newPath();
		cairo.rectangle(rect.x,rect.y,rect.width,rect.height);
		cairo.clip();
	}
	,popMask: function() {
		this.renderSession.cairo.restore();
	}
	,__class__: openfl._internal.renderer.cairo.CairoMaskManager
});
openfl._internal.renderer.cairo.CairoRenderer = function(width,height,cairo) {
	openfl._internal.renderer.AbstractRenderer.call(this,width,height);
	this.cairo = cairo;
	this.renderSession = new openfl._internal.renderer.RenderSession();
	this.renderSession.cairo = cairo;
	this.renderSession.roundPixels = true;
	this.renderSession.renderer = this;
	this.renderSession.maskManager = new openfl._internal.renderer.cairo.CairoMaskManager(this.renderSession);
};
$hxClasses["openfl._internal.renderer.cairo.CairoRenderer"] = openfl._internal.renderer.cairo.CairoRenderer;
openfl._internal.renderer.cairo.CairoRenderer.__name__ = ["openfl","_internal","renderer","cairo","CairoRenderer"];
openfl._internal.renderer.cairo.CairoRenderer.__super__ = openfl._internal.renderer.AbstractRenderer;
openfl._internal.renderer.cairo.CairoRenderer.prototype = $extend(openfl._internal.renderer.AbstractRenderer.prototype,{
	render: function(stage) {
		this.cairo.identityMatrix();
		if(stage.__clearBeforeRender) {
			this.cairo.setSourceRGB(stage.__colorSplit[0],stage.__colorSplit[1],stage.__colorSplit[2]);
			this.cairo.paint();
		}
		stage.__renderCairo(this.renderSession);
	}
	,__class__: openfl._internal.renderer.cairo.CairoRenderer
});
openfl._internal.renderer.cairo.CairoShape = function() { };
$hxClasses["openfl._internal.renderer.cairo.CairoShape"] = openfl._internal.renderer.cairo.CairoShape;
openfl._internal.renderer.cairo.CairoShape.__name__ = ["openfl","_internal","renderer","cairo","CairoShape"];
openfl._internal.renderer.cairo.CairoShape.render = function(shape,renderSession) {
};
openfl._internal.renderer.cairo.CairoTextField = function() { };
$hxClasses["openfl._internal.renderer.cairo.CairoTextField"] = openfl._internal.renderer.cairo.CairoTextField;
openfl._internal.renderer.cairo.CairoTextField.__name__ = ["openfl","_internal","renderer","cairo","CairoTextField"];
openfl._internal.renderer.cairo.CairoTextField.render = function(textField,renderSession) {
};
openfl._internal.renderer.canvas = {};
openfl._internal.renderer.canvas.CanvasBitmap = function() { };
$hxClasses["openfl._internal.renderer.canvas.CanvasBitmap"] = openfl._internal.renderer.canvas.CanvasBitmap;
openfl._internal.renderer.canvas.CanvasBitmap.__name__ = ["openfl","_internal","renderer","canvas","CanvasBitmap"];
openfl._internal.renderer.canvas.CanvasBitmap.render = function(bitmap,renderSession) {
	if(!bitmap.__renderable || bitmap.__worldAlpha <= 0) return;
	var context = renderSession.context;
	if(bitmap.bitmapData != null && bitmap.bitmapData.__isValid) {
		if(bitmap.__mask != null) renderSession.maskManager.pushMask(bitmap.__mask);
		bitmap.bitmapData.__sync();
		context.globalAlpha = bitmap.__worldAlpha;
		var transform = bitmap.__worldTransform;
		var scrollRect = bitmap.get_scrollRect();
		if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		if(!bitmap.smoothing) {
			context.mozImageSmoothingEnabled = false;
			context.msImageSmoothingEnabled = false;
			context.imageSmoothingEnabled = false;
		}
		if(scrollRect == null) context.drawImage(bitmap.bitmapData.image.get_src(),0,0); else context.drawImage(bitmap.bitmapData.image.get_src(),scrollRect.x,scrollRect.y,scrollRect.width,scrollRect.height,scrollRect.x,scrollRect.y,scrollRect.width,scrollRect.height);
		if(!bitmap.smoothing) {
			context.mozImageSmoothingEnabled = true;
			context.msImageSmoothingEnabled = true;
			context.imageSmoothingEnabled = true;
		}
		if(bitmap.__mask != null) renderSession.maskManager.popMask();
	}
};
openfl._internal.renderer.canvas.CanvasGraphics = function() { };
$hxClasses["openfl._internal.renderer.canvas.CanvasGraphics"] = openfl._internal.renderer.canvas.CanvasGraphics;
openfl._internal.renderer.canvas.CanvasGraphics.__name__ = ["openfl","_internal","renderer","canvas","CanvasGraphics"];
openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill = null;
openfl._internal.renderer.canvas.CanvasGraphics.bitmapRepeat = null;
openfl._internal.renderer.canvas.CanvasGraphics.bounds = null;
openfl._internal.renderer.canvas.CanvasGraphics.graphics = null;
openfl._internal.renderer.canvas.CanvasGraphics.hasFill = null;
openfl._internal.renderer.canvas.CanvasGraphics.hasStroke = null;
openfl._internal.renderer.canvas.CanvasGraphics.hitTesting = null;
openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix = null;
openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix = null;
openfl._internal.renderer.canvas.CanvasGraphics.context = null;
openfl._internal.renderer.canvas.CanvasGraphics.closePath = function() {
	if(openfl._internal.renderer.canvas.CanvasGraphics.context.strokeStyle == null) return;
	openfl._internal.renderer.canvas.CanvasGraphics.context.closePath();
	openfl._internal.renderer.canvas.CanvasGraphics.context.stroke();
	openfl._internal.renderer.canvas.CanvasGraphics.context.beginPath();
};
openfl._internal.renderer.canvas.CanvasGraphics.createBitmapFill = function(bitmap,bitmapRepeat) {
	bitmap.__sync();
	return openfl._internal.renderer.canvas.CanvasGraphics.context.createPattern(bitmap.image.get_src(),bitmapRepeat?"repeat":"no-repeat");
	return null;
};
openfl._internal.renderer.canvas.CanvasGraphics.createGradientPattern = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	var gradientFill = null;
	switch(type[1]) {
	case 0:
		if(matrix == null) matrix = new openfl.geom.Matrix();
		var point = matrix.transformPoint(new openfl.geom.Point(1638.4,0));
		gradientFill = openfl._internal.renderer.canvas.CanvasGraphics.context.createRadialGradient(matrix.tx,matrix.ty,0,matrix.tx,matrix.ty,(point.x - matrix.tx) / 2);
		break;
	case 1:
		var matrix1;
		if(matrix != null) matrix1 = matrix; else matrix1 = new openfl.geom.Matrix();
		var point1 = matrix1.transformPoint(new openfl.geom.Point(-819.2,0));
		var point2 = matrix1.transformPoint(new openfl.geom.Point(819.2,0));
		gradientFill = openfl._internal.renderer.canvas.CanvasGraphics.context.createLinearGradient(point1.x,point1.y,point2.x,point2.y);
		break;
	}
	var _g1 = 0;
	var _g = colors.length;
	while(_g1 < _g) {
		var i = _g1++;
		var rgb = colors[i];
		var alpha = alphas[i];
		var r = (rgb & 16711680) >>> 16;
		var g = (rgb & 65280) >>> 8;
		var b = rgb & 255;
		var ratio = ratios[i] / 255;
		if(ratio < 0) ratio = 0;
		if(ratio > 1) ratio = 1;
		gradientFill.addColorStop(ratio,"rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")");
	}
	return gradientFill;
};
openfl._internal.renderer.canvas.CanvasGraphics.createTempPatternCanvas = function(bitmap,repeat,width,height) {
	var canvas = window.document.createElement("canvas");
	var context = canvas.getContext("2d");
	canvas.width = width;
	canvas.height = height;
	context.fillStyle = context.createPattern(bitmap.image.get_src(),repeat?"repeat":"no-repeat");
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(0,height);
	context.lineTo(width,height);
	context.lineTo(width,0);
	context.lineTo(0,0);
	context.closePath();
	if(!openfl._internal.renderer.canvas.CanvasGraphics.hitTesting) context.fill();
	return canvas;
};
openfl._internal.renderer.canvas.CanvasGraphics.drawRoundRect = function(x,y,width,height,rx,ry) {
	if(ry == -1) ry = rx;
	rx *= 0.5;
	ry *= 0.5;
	if(rx > width / 2) rx = width / 2;
	if(ry > height / 2) ry = height / 2;
	var xe = x + width;
	var ye = y + height;
	var cx1 = -rx + rx * openfl._internal.renderer.canvas.CanvasGraphics.SIN45;
	var cx2 = -rx + rx * openfl._internal.renderer.canvas.CanvasGraphics.TAN22;
	var cy1 = -ry + ry * openfl._internal.renderer.canvas.CanvasGraphics.SIN45;
	var cy2 = -ry + ry * openfl._internal.renderer.canvas.CanvasGraphics.TAN22;
	openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(xe,ye - ry);
	openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(xe,ye + cy2,xe + cx1,ye + cy1);
	openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(xe + cx2,ye,xe - rx,ye);
	openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(x + rx,ye);
	openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(x - cx2,ye,x - cx1,ye + cy1);
	openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(x,ye + cy2,x,ye - ry);
	openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(x,y + ry);
	openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(x,y - cy2,x - cx1,y - cy1);
	openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(x - cx2,y,x + rx,y);
	openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(xe - rx,y);
	openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(xe + cx2,y,xe + cx1,y - cy1);
	openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(xe,y - cy2,xe,y + ry);
	openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(xe,ye - ry);
};
openfl._internal.renderer.canvas.CanvasGraphics.endFill = function() {
	openfl._internal.renderer.canvas.CanvasGraphics.context.beginPath();
	openfl._internal.renderer.canvas.CanvasGraphics.playCommands(openfl._internal.renderer.canvas.CanvasGraphics.fillCommands,false);
	openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.splice(0,openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.length);
};
openfl._internal.renderer.canvas.CanvasGraphics.endStroke = function() {
	openfl._internal.renderer.canvas.CanvasGraphics.context.beginPath();
	openfl._internal.renderer.canvas.CanvasGraphics.playCommands(openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands,true);
	openfl._internal.renderer.canvas.CanvasGraphics.context.closePath();
	openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.splice(0,openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.length);
};
openfl._internal.renderer.canvas.CanvasGraphics.hitTest = function(graphics,x,y) {
	if(!graphics.__visible || graphics.__commands.length == 0 || openfl._internal.renderer.canvas.CanvasGraphics.bounds == null || openfl._internal.renderer.canvas.CanvasGraphics.bounds.width <= 0 || openfl._internal.renderer.canvas.CanvasGraphics.bounds.height <= 0) {
		graphics.__canvas = null;
		graphics.__context = null;
		graphics.__bitmap = null;
		return false;
	} else {
		openfl._internal.renderer.canvas.CanvasGraphics.hitTesting = true;
		x -= openfl._internal.renderer.canvas.CanvasGraphics.bounds.x;
		y -= openfl._internal.renderer.canvas.CanvasGraphics.bounds.y;
		if(graphics.__canvas == null) {
			graphics.__canvas = window.document.createElement("canvas");
			graphics.__context = graphics.__canvas.getContext("2d");
		}
		openfl._internal.renderer.canvas.CanvasGraphics.context = graphics.__context;
		openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.splice(0,openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.length);
		openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.splice(0,openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.length);
		openfl._internal.renderer.canvas.CanvasGraphics.hasFill = false;
		openfl._internal.renderer.canvas.CanvasGraphics.hasStroke = false;
		openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill = null;
		openfl._internal.renderer.canvas.CanvasGraphics.bitmapRepeat = false;
		openfl._internal.renderer.canvas.CanvasGraphics.context.beginPath();
		var _g = 0;
		var _g1 = graphics.__commands;
		while(_g < _g1.length) {
			var command = _g1[_g];
			++_g;
			switch(command[1]) {
			case 3:case 4:case 15:case 16:
				openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.push(command);
				openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.push(command);
				break;
			case 12:case 14:case 13:
				openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.push(command);
				break;
			case 11:
				openfl._internal.renderer.canvas.CanvasGraphics.endFill();
				openfl._internal.renderer.canvas.CanvasGraphics.endStroke();
				if(openfl._internal.renderer.canvas.CanvasGraphics.hasFill && openfl._internal.renderer.canvas.CanvasGraphics.context.isPointInPath(x,y)) return true;
				if(openfl._internal.renderer.canvas.CanvasGraphics.hasStroke && openfl._internal.renderer.canvas.CanvasGraphics.context.isPointInStroke(x,y)) return true;
				openfl._internal.renderer.canvas.CanvasGraphics.hasFill = false;
				openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill = null;
				break;
			case 0:case 1:case 2:
				openfl._internal.renderer.canvas.CanvasGraphics.endFill();
				openfl._internal.renderer.canvas.CanvasGraphics.endStroke();
				if(openfl._internal.renderer.canvas.CanvasGraphics.hasFill && openfl._internal.renderer.canvas.CanvasGraphics.context.isPointInPath(x,y)) return true;
				if(openfl._internal.renderer.canvas.CanvasGraphics.hasStroke && openfl._internal.renderer.canvas.CanvasGraphics.context.isPointInStroke(x,y)) return true;
				openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.push(command);
				openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.push(command);
				break;
			case 5:case 6:case 7:case 8:
				openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.push(command);
				openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.push(command);
				break;
			default:
			}
		}
		if(openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.length > 0) openfl._internal.renderer.canvas.CanvasGraphics.endFill();
		if(openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.length > 0) openfl._internal.renderer.canvas.CanvasGraphics.endStroke();
		if(openfl._internal.renderer.canvas.CanvasGraphics.hasFill && openfl._internal.renderer.canvas.CanvasGraphics.context.isPointInPath(x,y)) return true;
		if(openfl._internal.renderer.canvas.CanvasGraphics.hasStroke && openfl._internal.renderer.canvas.CanvasGraphics.context.isPointInStroke(x,y)) return true;
	}
	return false;
};
openfl._internal.renderer.canvas.CanvasGraphics.normalizeUVT = function(uvt,skipT) {
	if(skipT == null) skipT = false;
	var max = Math.NEGATIVE_INFINITY;
	var tmp = Math.NEGATIVE_INFINITY;
	var len = uvt.length;
	var _g1 = 1;
	var _g = len + 1;
	while(_g1 < _g) {
		var t = _g1++;
		if(skipT && t % 3 == 0) continue;
		tmp = uvt.data[t - 1];
		if(max < tmp) max = tmp;
	}
	var result;
	var this1;
	this1 = new openfl.VectorData();
	var this2;
	this2 = new Array(0);
	this1.data = this2;
	this1.length = 0;
	this1.fixed = false;
	result = this1;
	var _g11 = 1;
	var _g2 = len + 1;
	while(_g11 < _g2) {
		var t1 = _g11++;
		if(skipT && t1 % 3 == 0) continue;
		if(!result.fixed) {
			result.length++;
			if(result.data.length < result.length) {
				var data;
				var this3;
				this3 = new Array(result.data.length + 10);
				data = this3;
				haxe.ds._Vector.Vector_Impl_.blit(result.data,0,data,0,result.data.length);
				result.data = data;
			}
			result.data[result.length - 1] = uvt.data[t1 - 1] / max;
		}
		result.length;
	}
	return { max : max, uvt : result};
};
openfl._internal.renderer.canvas.CanvasGraphics.playCommands = function(commands,stroke) {
	if(stroke == null) stroke = false;
	openfl._internal.renderer.canvas.CanvasGraphics.bounds = openfl._internal.renderer.canvas.CanvasGraphics.graphics.__bounds;
	var offsetX = openfl._internal.renderer.canvas.CanvasGraphics.bounds.x;
	var offsetY = openfl._internal.renderer.canvas.CanvasGraphics.bounds.y;
	var positionX = 0.0;
	var positionY = 0.0;
	var closeGap = false;
	var startX = 0.0;
	var startY = 0.0;
	var _g = 0;
	while(_g < commands.length) {
		var command = commands[_g];
		++_g;
		switch(command[1]) {
		case 3:
			var y = command[7];
			var x = command[6];
			var cy2 = command[5];
			var cx2 = command[4];
			var cy1 = command[3];
			var cx1 = command[2];
			openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(cx1 - offsetX,cy1 - offsetY,cx2 - offsetX,cy2 - offsetY,x - offsetX,y - offsetY);
			break;
		case 4:
			var y1 = command[5];
			var x1 = command[4];
			var cy = command[3];
			var cx = command[2];
			openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(cx - offsetX,cy - offsetY,x1 - offsetX,y1 - offsetY);
			break;
		case 5:
			var radius = command[4];
			var y2 = command[3];
			var x2 = command[2];
			openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(x2 - offsetX + radius,y2 - offsetY);
			openfl._internal.renderer.canvas.CanvasGraphics.context.arc(x2 - offsetX,y2 - offsetY,radius,0,Math.PI * 2,true);
			break;
		case 6:
			var height = command[5];
			var width = command[4];
			var y3 = command[3];
			var x3 = command[2];
			x3 -= offsetX;
			y3 -= offsetY;
			var kappa = .5522848;
			var ox = width / 2 * kappa;
			var oy = height / 2 * kappa;
			var xe = x3 + width;
			var ye = y3 + height;
			var xm = x3 + width / 2;
			var ym = y3 + height / 2;
			openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(x3,ym);
			openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(x3,ym - oy,xm - ox,y3,xm,y3);
			openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(xm + ox,y3,xe,ym - oy,xe,ym);
			openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
			openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(xm - ox,ye,x3,ym + oy,x3,ym);
			break;
		case 8:
			var ry = command[7];
			var rx = command[6];
			var height1 = command[5];
			var width1 = command[4];
			var y4 = command[3];
			var x4 = command[2];
			openfl._internal.renderer.canvas.CanvasGraphics.drawRoundRect(x4 - offsetX,y4 - offsetY,width1,height1,rx,ry);
			break;
		case 15:
			var y5 = command[3];
			var x5 = command[2];
			openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(x5 - offsetX,y5 - offsetY);
			positionX = x5;
			positionY = y5;
			break;
		case 16:
			var y6 = command[3];
			var x6 = command[2];
			openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(x6 - offsetX,y6 - offsetY);
			positionX = x6;
			positionY = y6;
			closeGap = true;
			startX = x6;
			startY = y6;
			break;
		case 12:
			var miterLimit = command[9];
			var joints = command[8];
			var caps = command[7];
			var scaleMode = command[6];
			var pixelHinting = command[5];
			var alpha = command[4];
			var color = command[3];
			var thickness = command[2];
			if(stroke && openfl._internal.renderer.canvas.CanvasGraphics.hasStroke) {
				openfl._internal.renderer.canvas.CanvasGraphics.context.closePath();
				if(!openfl._internal.renderer.canvas.CanvasGraphics.hitTesting) openfl._internal.renderer.canvas.CanvasGraphics.context.stroke();
				openfl._internal.renderer.canvas.CanvasGraphics.context.beginPath();
			}
			openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(positionX - offsetX,positionY - offsetY);
			if(thickness == null) openfl._internal.renderer.canvas.CanvasGraphics.hasStroke = false; else {
				openfl._internal.renderer.canvas.CanvasGraphics.context.lineWidth = thickness;
				if(joints == null) openfl._internal.renderer.canvas.CanvasGraphics.context.lineJoin = "round"; else openfl._internal.renderer.canvas.CanvasGraphics.context.lineJoin = Std.string(joints).toLowerCase();
				if(caps == null) openfl._internal.renderer.canvas.CanvasGraphics.context.lineCap = "round"; else switch(caps[1]) {
				case 0:
					openfl._internal.renderer.canvas.CanvasGraphics.context.lineCap = "butt";
					break;
				default:
					openfl._internal.renderer.canvas.CanvasGraphics.context.lineCap = Std.string(caps).toLowerCase();
				}
				if(miterLimit == null) openfl._internal.renderer.canvas.CanvasGraphics.context.miterLimit = 3; else openfl._internal.renderer.canvas.CanvasGraphics.context.miterLimit = miterLimit;
				if(alpha == 1 || alpha == null) if(color == null) openfl._internal.renderer.canvas.CanvasGraphics.context.strokeStyle = "#000000"; else openfl._internal.renderer.canvas.CanvasGraphics.context.strokeStyle = "#" + StringTools.hex(color & 16777215,6); else {
					var r = (color & 16711680) >>> 16;
					var g = (color & 65280) >>> 8;
					var b = color & 255;
					if(color == null) openfl._internal.renderer.canvas.CanvasGraphics.context.strokeStyle = "#000000"; else openfl._internal.renderer.canvas.CanvasGraphics.context.strokeStyle = "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
				}
				openfl._internal.renderer.canvas.CanvasGraphics.hasStroke = true;
			}
			break;
		case 14:
			var focalPointRatio = command[9];
			var interpolationMethod = command[8];
			var spreadMethod = command[7];
			var matrix = command[6];
			var ratios = command[5];
			var alphas = command[4];
			var colors = command[3];
			var type = command[2];
			if(stroke && openfl._internal.renderer.canvas.CanvasGraphics.hasStroke) openfl._internal.renderer.canvas.CanvasGraphics.closePath();
			openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(positionX - offsetX,positionY - offsetY);
			openfl._internal.renderer.canvas.CanvasGraphics.context.strokeStyle = openfl._internal.renderer.canvas.CanvasGraphics.createGradientPattern(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
			openfl._internal.renderer.canvas.CanvasGraphics.hasStroke = true;
			break;
		case 13:
			var smooth = command[5];
			var repeat = command[4];
			var matrix1 = command[3];
			var bitmap = command[2];
			if(stroke && openfl._internal.renderer.canvas.CanvasGraphics.hasStroke) openfl._internal.renderer.canvas.CanvasGraphics.closePath();
			openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(positionX - offsetX,positionY - offsetY);
			openfl._internal.renderer.canvas.CanvasGraphics.context.strokeStyle = openfl._internal.renderer.canvas.CanvasGraphics.createBitmapFill(bitmap,repeat);
			openfl._internal.renderer.canvas.CanvasGraphics.hasStroke = true;
			break;
		case 0:
			var smooth1 = command[5];
			var repeat1 = command[4];
			var matrix2 = command[3];
			var bitmap1 = command[2];
			openfl._internal.renderer.canvas.CanvasGraphics.context.fillStyle = openfl._internal.renderer.canvas.CanvasGraphics.createBitmapFill(bitmap1,true);
			openfl._internal.renderer.canvas.CanvasGraphics.hasFill = true;
			if(matrix2 != null) {
				openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix = matrix2;
				openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix = new openfl.geom.Matrix(matrix2.a,matrix2.b,matrix2.c,matrix2.d,matrix2.tx,matrix2.ty);
				openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.invert();
			} else {
				openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix = null;
				openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix = null;
			}
			break;
		case 1:
			var alpha1 = command[3];
			var rgb = command[2];
			if(alpha1 < 0.005) openfl._internal.renderer.canvas.CanvasGraphics.hasFill = false; else {
				if(alpha1 == 1) openfl._internal.renderer.canvas.CanvasGraphics.context.fillStyle = "#" + StringTools.hex(rgb,6); else {
					var r1 = (rgb & 16711680) >>> 16;
					var g1 = (rgb & 65280) >>> 8;
					var b1 = rgb & 255;
					openfl._internal.renderer.canvas.CanvasGraphics.context.fillStyle = "rgba(" + r1 + ", " + g1 + ", " + b1 + ", " + alpha1 + ")";
				}
				openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill = null;
				openfl._internal.renderer.canvas.CanvasGraphics.hasFill = true;
			}
			break;
		case 2:
			var focalPointRatio1 = command[9];
			var interpolationMethod1 = command[8];
			var spreadMethod1 = command[7];
			var matrix3 = command[6];
			var ratios1 = command[5];
			var alphas1 = command[4];
			var colors1 = command[3];
			var type1 = command[2];
			openfl._internal.renderer.canvas.CanvasGraphics.context.fillStyle = openfl._internal.renderer.canvas.CanvasGraphics.createGradientPattern(type1,colors1,alphas1,ratios1,matrix3,spreadMethod1,interpolationMethod1,focalPointRatio1);
			openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill = null;
			openfl._internal.renderer.canvas.CanvasGraphics.hasFill = true;
			break;
		case 7:
			var height2 = command[5];
			var width2 = command[4];
			var y7 = command[3];
			var x7 = command[2];
			var optimizationUsed = false;
			if(openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill != null) {
				var st = 0;
				var sr = 0;
				var sb = 0;
				var sl = 0;
				var canOptimizeMatrix = true;
				if(openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix != null) {
					if(openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix.b != 0 || openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix.c != 0) canOptimizeMatrix = false; else {
						var stl = openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.transformPoint(new openfl.geom.Point(x7,y7));
						var sbr = openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.transformPoint(new openfl.geom.Point(x7 + width2,y7 + height2));
						st = stl.y;
						sl = stl.x;
						sb = sbr.y;
						sr = sbr.x;
					}
				} else {
					st = y7;
					sl = x7;
					sb = y7 + height2;
					sr = x7 + width2;
				}
				if(canOptimizeMatrix && st >= 0 && sl >= 0 && sr <= openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill.width && sb <= openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill.height) {
					optimizationUsed = true;
					if(!openfl._internal.renderer.canvas.CanvasGraphics.hitTesting) openfl._internal.renderer.canvas.CanvasGraphics.context.drawImage(openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill.image.get_src(),sl,st,sr - sl,sb - st,x7 - offsetX,y7 - offsetY,width2,height2);
				}
			}
			if(!optimizationUsed) openfl._internal.renderer.canvas.CanvasGraphics.context.rect(x7 - offsetX,y7 - offsetY,width2,height2);
			break;
		default:
		}
	}
	if(stroke && openfl._internal.renderer.canvas.CanvasGraphics.hasStroke) {
		if(openfl._internal.renderer.canvas.CanvasGraphics.hasFill && closeGap) openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(startX - offsetX,startY - offsetY);
		if(!openfl._internal.renderer.canvas.CanvasGraphics.hitTesting) openfl._internal.renderer.canvas.CanvasGraphics.context.stroke();
	}
	if(!stroke) {
		if(openfl._internal.renderer.canvas.CanvasGraphics.hasFill || openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill != null) {
			openfl._internal.renderer.canvas.CanvasGraphics.context.translate(-openfl._internal.renderer.canvas.CanvasGraphics.bounds.x,-openfl._internal.renderer.canvas.CanvasGraphics.bounds.y);
			if(openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix != null) {
				openfl._internal.renderer.canvas.CanvasGraphics.context.transform(openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix.a,openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix.b,openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix.c,openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix.d,openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix.tx,openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix.ty);
				if(!openfl._internal.renderer.canvas.CanvasGraphics.hitTesting) openfl._internal.renderer.canvas.CanvasGraphics.context.fill();
				openfl._internal.renderer.canvas.CanvasGraphics.context.transform(openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.a,openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.b,openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.c,openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.d,openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.tx,openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.ty);
			} else if(!openfl._internal.renderer.canvas.CanvasGraphics.hitTesting) openfl._internal.renderer.canvas.CanvasGraphics.context.fill();
			openfl._internal.renderer.canvas.CanvasGraphics.context.translate(openfl._internal.renderer.canvas.CanvasGraphics.bounds.x,openfl._internal.renderer.canvas.CanvasGraphics.bounds.y);
			openfl._internal.renderer.canvas.CanvasGraphics.context.closePath();
		}
	}
};
openfl._internal.renderer.canvas.CanvasGraphics.render = function(graphics,renderSession) {
	if(graphics.__dirty) {
		openfl._internal.renderer.canvas.CanvasGraphics.hitTesting = false;
		openfl._internal.renderer.canvas.CanvasGraphics.graphics = graphics;
		openfl._internal.renderer.canvas.CanvasGraphics.bounds = graphics.__bounds;
		if(!graphics.__visible || graphics.__commands.length == 0 || openfl._internal.renderer.canvas.CanvasGraphics.bounds == null || openfl._internal.renderer.canvas.CanvasGraphics.bounds.width <= 0 || openfl._internal.renderer.canvas.CanvasGraphics.bounds.height <= 0) {
			graphics.__canvas = null;
			graphics.__context = null;
			graphics.__bitmap = null;
		} else {
			if(graphics.__canvas == null) {
				graphics.__canvas = window.document.createElement("canvas");
				graphics.__context = graphics.__canvas.getContext("2d");
			}
			openfl._internal.renderer.canvas.CanvasGraphics.context = graphics.__context;
			graphics.__canvas.width = Math.ceil(openfl._internal.renderer.canvas.CanvasGraphics.bounds.width);
			graphics.__canvas.height = Math.ceil(openfl._internal.renderer.canvas.CanvasGraphics.bounds.height);
			openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.splice(0,openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.length);
			openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.splice(0,openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.length);
			openfl._internal.renderer.canvas.CanvasGraphics.hasFill = false;
			openfl._internal.renderer.canvas.CanvasGraphics.hasStroke = false;
			openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill = null;
			openfl._internal.renderer.canvas.CanvasGraphics.bitmapRepeat = false;
			var _g = 0;
			var _g1 = graphics.__commands;
			try {
				while(_g < _g1.length) {
					var command = _g1[_g];
					++_g;
					switch(command[1]) {
					case 3:case 4:case 15:case 16:
						openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.push(command);
						openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.push(command);
						break;
					case 11:
						openfl._internal.renderer.canvas.CanvasGraphics.endFill();
						openfl._internal.renderer.canvas.CanvasGraphics.endStroke();
						openfl._internal.renderer.canvas.CanvasGraphics.hasFill = false;
						openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill = null;
						break;
					case 12:case 14:case 13:
						openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.push(command);
						break;
					case 0:case 1:case 2:
						openfl._internal.renderer.canvas.CanvasGraphics.endFill();
						openfl._internal.renderer.canvas.CanvasGraphics.endStroke();
						openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.push(command);
						openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.push(command);
						break;
					case 5:case 6:case 7:case 8:
						openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.push(command);
						openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.push(command);
						break;
					case 10:
						var culling = command[5];
						var uvtData = command[4];
						var indices = command[3];
						var vertices = command[2];
						openfl._internal.renderer.canvas.CanvasGraphics.endFill();
						openfl._internal.renderer.canvas.CanvasGraphics.endStroke();
						var v = vertices;
						var ind = indices;
						var uvt = uvtData;
						var pattern = null;
						var colorFill = openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill == null;
						if(colorFill && uvt != null) throw "__break__";
						if(!colorFill) {
							if(uvtData == null) {
								var this1;
								this1 = new openfl.VectorData();
								var this2;
								this2 = new Array(0);
								this1.data = this2;
								this1.length = 0;
								this1.fixed = false;
								uvtData = this1;
								var _g3 = 0;
								var _g2 = v.length / 2 | 0;
								while(_g3 < _g2) {
									var i = _g3++;
									if(!uvtData.fixed) {
										uvtData.length++;
										if(uvtData.data.length < uvtData.length) {
											var data;
											var this3;
											this3 = new Array(uvtData.data.length + 10);
											data = this3;
											haxe.ds._Vector.Vector_Impl_.blit(uvtData.data,0,data,0,uvtData.data.length);
											uvtData.data = data;
										}
										uvtData.data[uvtData.length - 1] = v.data[i * 2] / openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill.width;
									}
									uvtData.length;
									if(!uvtData.fixed) {
										uvtData.length++;
										if(uvtData.data.length < uvtData.length) {
											var data1;
											var this4;
											this4 = new Array(uvtData.data.length + 10);
											data1 = this4;
											haxe.ds._Vector.Vector_Impl_.blit(uvtData.data,0,data1,0,uvtData.data.length);
											uvtData.data = data1;
										}
										uvtData.data[uvtData.length - 1] = v.data[i * 2 + 1] / openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill.height;
									}
									uvtData.length;
								}
							}
							var skipT = uvtData.length != v.length;
							var normalizedUVT = openfl._internal.renderer.canvas.CanvasGraphics.normalizeUVT(uvtData,skipT);
							var maxUVT = normalizedUVT.max;
							uvt = normalizedUVT.uvt;
							if(maxUVT > 1) pattern = openfl._internal.renderer.canvas.CanvasGraphics.createTempPatternCanvas(openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill,openfl._internal.renderer.canvas.CanvasGraphics.bitmapRepeat,openfl._internal.renderer.canvas.CanvasGraphics.bounds.width | 0,openfl._internal.renderer.canvas.CanvasGraphics.bounds.height | 0); else pattern = openfl._internal.renderer.canvas.CanvasGraphics.createTempPatternCanvas(openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill,openfl._internal.renderer.canvas.CanvasGraphics.bitmapRepeat,openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill.width,openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill.height);
						}
						var i1 = 0;
						var l = ind.length;
						var a;
						var b;
						var c;
						var iax;
						var iay;
						var ibx;
						var iby;
						var icx;
						var icy;
						var x1;
						var y1;
						var x2;
						var y2;
						var x3;
						var y3;
						var uvx1;
						var uvy1;
						var uvx2;
						var uvy2;
						var uvx3;
						var uvy3;
						var denom;
						var t1;
						var t2;
						var t3;
						var t4;
						var dx;
						var dy;
						while(i1 < l) {
							a = i1;
							b = i1 + 1;
							c = i1 + 2;
							iax = ind.data[a] * 2;
							iay = ind.data[a] * 2 + 1;
							ibx = ind.data[b] * 2;
							iby = ind.data[b] * 2 + 1;
							icx = ind.data[c] * 2;
							icy = ind.data[c] * 2 + 1;
							x1 = v.data[iax];
							y1 = v.data[iay];
							x2 = v.data[ibx];
							y2 = v.data[iby];
							x3 = v.data[icx];
							y3 = v.data[icy];
							switch(culling[1]) {
							case 2:
								if(!((x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1) < 0)) {
									i1 += 3;
									continue;
								}
								break;
							case 0:
								if((x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1) < 0) {
									i1 += 3;
									continue;
								}
								break;
							default:
							}
							if(colorFill) {
								openfl._internal.renderer.canvas.CanvasGraphics.context.beginPath();
								openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(x1,y1);
								openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(x2,y2);
								openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(x3,y3);
								openfl._internal.renderer.canvas.CanvasGraphics.context.closePath();
								if(!openfl._internal.renderer.canvas.CanvasGraphics.hitTesting) openfl._internal.renderer.canvas.CanvasGraphics.context.fill();
								i1 += 3;
								continue;
							}
							openfl._internal.renderer.canvas.CanvasGraphics.context.save();
							openfl._internal.renderer.canvas.CanvasGraphics.context.beginPath();
							openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(x1,y1);
							openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(x2,y2);
							openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(x3,y3);
							openfl._internal.renderer.canvas.CanvasGraphics.context.closePath();
							openfl._internal.renderer.canvas.CanvasGraphics.context.clip();
							uvx1 = uvt.data[iax] * pattern.width;
							uvx2 = uvt.data[ibx] * pattern.width;
							uvx3 = uvt.data[icx] * pattern.width;
							uvy1 = uvt.data[iay] * pattern.height;
							uvy2 = uvt.data[iby] * pattern.height;
							uvy3 = uvt.data[icy] * pattern.height;
							denom = uvx1 * (uvy3 - uvy2) - uvx2 * uvy3 + uvx3 * uvy2 + (uvx2 - uvx3) * uvy1;
							if(denom == 0) {
								i1 += 3;
								continue;
							}
							t1 = -(uvy1 * (x3 - x2) - uvy2 * x3 + uvy3 * x2 + (uvy2 - uvy3) * x1) / denom;
							t2 = (uvy2 * y3 + uvy1 * (y2 - y3) - uvy3 * y2 + (uvy3 - uvy2) * y1) / denom;
							t3 = (uvx1 * (x3 - x2) - uvx2 * x3 + uvx3 * x2 + (uvx2 - uvx3) * x1) / denom;
							t4 = -(uvx2 * y3 + uvx1 * (y2 - y3) - uvx3 * y2 + (uvx3 - uvx2) * y1) / denom;
							dx = (uvx1 * (uvy3 * x2 - uvy2 * x3) + uvy1 * (uvx2 * x3 - uvx3 * x2) + (uvx3 * uvy2 - uvx2 * uvy3) * x1) / denom;
							dy = (uvx1 * (uvy3 * y2 - uvy2 * y3) + uvy1 * (uvx2 * y3 - uvx3 * y2) + (uvx3 * uvy2 - uvx2 * uvy3) * y1) / denom;
							openfl._internal.renderer.canvas.CanvasGraphics.context.transform(t1,t2,t3,t4,dx,dy);
							openfl._internal.renderer.canvas.CanvasGraphics.context.drawImage(pattern,0,0);
							openfl._internal.renderer.canvas.CanvasGraphics.context.restore();
							i1 += 3;
						}
						break;
					case 9:
						var count = command[6];
						var flags = command[5];
						var smooth = command[4];
						var tileData = command[3];
						var sheet = command[2];
						var useScale = (flags & 1) > 0;
						var useRotation = (flags & 2) > 0;
						var useTransform = (flags & 16) > 0;
						var useRGB = (flags & 4) > 0;
						var useAlpha = (flags & 8) > 0;
						var useRect = (flags & 32) > 0;
						var useOrigin = (flags & 64) > 0;
						var useBlendAdd = (flags & 65536) > 0;
						if(useTransform) {
							useScale = false;
							useRotation = false;
						}
						var scaleIndex = 0;
						var rotationIndex = 0;
						var rgbIndex = 0;
						var alphaIndex = 0;
						var transformIndex = 0;
						var numValues = 3;
						if(useRect) if(useOrigin) numValues = 8; else numValues = 6;
						if(useScale) {
							scaleIndex = numValues;
							numValues++;
						}
						if(useRotation) {
							rotationIndex = numValues;
							numValues++;
						}
						if(useTransform) {
							transformIndex = numValues;
							numValues += 4;
						}
						if(useRGB) {
							rgbIndex = numValues;
							numValues += 3;
						}
						if(useAlpha) {
							alphaIndex = numValues;
							numValues++;
						}
						var totalCount = tileData.length;
						if(count >= 0 && totalCount > count) totalCount = count;
						var itemCount = totalCount / numValues | 0;
						var index = 0;
						var rect = null;
						var center = null;
						var previousTileID = -1;
						var surface;
						sheet.__bitmap.__sync();
						surface = sheet.__bitmap.image.get_src();
						if(useBlendAdd) openfl._internal.renderer.canvas.CanvasGraphics.context.globalCompositeOperation = "lighter";
						while(index < totalCount) {
							var tileID;
							if(!useRect) tileID = tileData[index + 2] | 0; else tileID = -1;
							if(!useRect && tileID != previousTileID) {
								rect = sheet.__tileRects[tileID];
								center = sheet.__centerPoints[tileID];
								previousTileID = tileID;
							} else if(useRect) {
								rect = sheet.__rectTile;
								rect.setTo(tileData[index + 2],tileData[index + 3],tileData[index + 4],tileData[index + 5]);
								center = sheet.__point;
								if(useOrigin) {
									center.x = tileData[index + 6];
									center.y = tileData[index + 7];
								} else {
									center.x = 0;
									center.y = 0;
								}
							}
							if(rect != null && rect.width > 0 && rect.height > 0 && center != null) {
								openfl._internal.renderer.canvas.CanvasGraphics.context.save();
								openfl._internal.renderer.canvas.CanvasGraphics.context.translate(tileData[index],tileData[index + 1]);
								if(useRotation) openfl._internal.renderer.canvas.CanvasGraphics.context.rotate(tileData[index + rotationIndex]);
								var scale = 1.0;
								if(useScale) scale = tileData[index + scaleIndex];
								if(useTransform) openfl._internal.renderer.canvas.CanvasGraphics.context.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
								if(useAlpha) openfl._internal.renderer.canvas.CanvasGraphics.context.globalAlpha = tileData[index + alphaIndex];
								openfl._internal.renderer.canvas.CanvasGraphics.context.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
								openfl._internal.renderer.canvas.CanvasGraphics.context.restore();
							}
							index += numValues;
						}
						if(useBlendAdd) openfl._internal.renderer.canvas.CanvasGraphics.context.globalCompositeOperation = "source-over";
						break;
					default:
						openfl.Lib.notImplemented("CanvasGraphics");
					}
				}
			} catch( e ) { if( e != "__break__" ) throw e; }
			if(openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.length > 0) openfl._internal.renderer.canvas.CanvasGraphics.endFill();
			if(openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.length > 0) openfl._internal.renderer.canvas.CanvasGraphics.endStroke();
			graphics.__bitmap = openfl.display.BitmapData.fromCanvas(graphics.__canvas);
		}
		graphics.set___dirty(false);
	}
};
openfl._internal.renderer.canvas.CanvasGraphics.renderMask = function(graphics,renderSession) {
	if(graphics.__commands.length != 0) {
		openfl._internal.renderer.canvas.CanvasGraphics.context = renderSession.context;
		var positionX = 0.0;
		var positionY = 0.0;
		var offsetX = 0;
		var offsetY = 0;
		var _g = 0;
		var _g1 = graphics.__commands;
		while(_g < _g1.length) {
			var command = _g1[_g];
			++_g;
			switch(command[1]) {
			case 3:
				var y = command[7];
				var x = command[6];
				var cy2 = command[5];
				var cy1 = command[4];
				var cx2 = command[3];
				var cx1 = command[2];
				openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(cx1 - offsetX,cy1 - offsetY,cx2 - offsetX,cy2 - offsetY,x - offsetX,y - offsetY);
				positionX = x;
				positionY = y;
				break;
			case 4:
				var y1 = command[5];
				var x1 = command[4];
				var cy = command[3];
				var cx = command[2];
				openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(cx - offsetX,cy - offsetY,x1 - offsetX,y1 - offsetY);
				positionX = x1;
				positionY = y1;
				break;
			case 5:
				var radius = command[4];
				var y2 = command[3];
				var x2 = command[2];
				openfl._internal.renderer.canvas.CanvasGraphics.context.arc(x2 - offsetX,y2 - offsetY,radius,0,Math.PI * 2,true);
				break;
			case 6:
				var height = command[5];
				var width = command[4];
				var y3 = command[3];
				var x3 = command[2];
				x3 -= offsetX;
				y3 -= offsetY;
				var kappa = .5522848;
				var ox = width / 2 * kappa;
				var oy = height / 2 * kappa;
				var xe = x3 + width;
				var ye = y3 + height;
				var xm = x3 + width / 2;
				var ym = y3 + height / 2;
				openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(x3,ym);
				openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(x3,ym - oy,xm - ox,y3,xm,y3);
				openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(xm + ox,y3,xe,ym - oy,xe,ym);
				openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
				openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(xm - ox,ye,x3,ym + oy,x3,ym);
				break;
			case 7:
				var height1 = command[5];
				var width1 = command[4];
				var y4 = command[3];
				var x4 = command[2];
				openfl._internal.renderer.canvas.CanvasGraphics.context.rect(x4 - offsetX,y4 - offsetY,width1,height1);
				break;
			case 8:
				var ry = command[7];
				var rx = command[6];
				var height2 = command[5];
				var width2 = command[4];
				var y5 = command[3];
				var x5 = command[2];
				openfl._internal.renderer.canvas.CanvasGraphics.drawRoundRect(x5 - offsetX,y5 - offsetY,width2,height2,rx,ry);
				break;
			case 15:
				var y6 = command[3];
				var x6 = command[2];
				openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(x6 - offsetX,y6 - offsetY);
				positionX = x6;
				positionY = y6;
				break;
			case 16:
				var y7 = command[3];
				var x7 = command[2];
				openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(x7 - offsetX,y7 - offsetY);
				positionX = x7;
				positionY = y7;
				break;
			default:
			}
		}
	}
};
openfl._internal.renderer.canvas.CanvasMaskManager = function(renderSession) {
	openfl._internal.renderer.AbstractMaskManager.call(this,renderSession);
};
$hxClasses["openfl._internal.renderer.canvas.CanvasMaskManager"] = openfl._internal.renderer.canvas.CanvasMaskManager;
openfl._internal.renderer.canvas.CanvasMaskManager.__name__ = ["openfl","_internal","renderer","canvas","CanvasMaskManager"];
openfl._internal.renderer.canvas.CanvasMaskManager.__super__ = openfl._internal.renderer.AbstractMaskManager;
openfl._internal.renderer.canvas.CanvasMaskManager.prototype = $extend(openfl._internal.renderer.AbstractMaskManager.prototype,{
	pushMask: function(mask) {
		var context = this.renderSession.context;
		context.save();
		var transform = mask.__getTransform();
		context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		context.beginPath();
		mask.__renderCanvasMask(this.renderSession);
		context.clip();
	}
	,pushRect: function(rect,transform) {
		var context = this.renderSession.context;
		context.save();
		context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		context.beginPath();
		context.rect(rect.x,rect.y,rect.width,rect.height);
		context.clip();
	}
	,popMask: function() {
		this.renderSession.context.restore();
	}
	,__class__: openfl._internal.renderer.canvas.CanvasMaskManager
});
openfl._internal.renderer.canvas.CanvasRenderer = function(width,height,context) {
	openfl._internal.renderer.AbstractRenderer.call(this,width,height);
	this.context = context;
	this.renderSession = new openfl._internal.renderer.RenderSession();
	this.renderSession.context = context;
	this.renderSession.roundPixels = true;
	this.renderSession.renderer = this;
	this.renderSession.maskManager = new openfl._internal.renderer.canvas.CanvasMaskManager(this.renderSession);
};
$hxClasses["openfl._internal.renderer.canvas.CanvasRenderer"] = openfl._internal.renderer.canvas.CanvasRenderer;
openfl._internal.renderer.canvas.CanvasRenderer.__name__ = ["openfl","_internal","renderer","canvas","CanvasRenderer"];
openfl._internal.renderer.canvas.CanvasRenderer.__super__ = openfl._internal.renderer.AbstractRenderer;
openfl._internal.renderer.canvas.CanvasRenderer.prototype = $extend(openfl._internal.renderer.AbstractRenderer.prototype,{
	render: function(stage) {
		this.context.setTransform(1,0,0,1,0,0);
		this.context.globalAlpha = 1;
		if(!stage.__transparent && stage.__clearBeforeRender) {
			this.context.fillStyle = stage.__colorString;
			this.context.fillRect(0,0,stage.stageWidth,stage.stageHeight);
		} else if(stage.__transparent && stage.__clearBeforeRender) this.context.clearRect(0,0,stage.stageWidth,stage.stageHeight);
		stage.__renderCanvas(this.renderSession);
	}
	,__class__: openfl._internal.renderer.canvas.CanvasRenderer
});
openfl._internal.renderer.canvas.CanvasShape = function() { };
$hxClasses["openfl._internal.renderer.canvas.CanvasShape"] = openfl._internal.renderer.canvas.CanvasShape;
openfl._internal.renderer.canvas.CanvasShape.__name__ = ["openfl","_internal","renderer","canvas","CanvasShape"];
openfl._internal.renderer.canvas.CanvasShape.render = function(shape,renderSession) {
	if(!shape.__renderable || shape.__worldAlpha <= 0) return;
	var graphics = shape.__graphics;
	if(graphics != null) {
		openfl._internal.renderer.canvas.CanvasGraphics.render(graphics,renderSession);
		if(graphics.__canvas != null) {
			if(shape.__mask != null) renderSession.maskManager.pushMask(shape.__mask);
			var context = renderSession.context;
			var scrollRect = shape.get_scrollRect();
			context.globalAlpha = shape.__worldAlpha;
			var transform = shape.__worldTransform;
			if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
			if(scrollRect == null) context.drawImage(graphics.__canvas,graphics.__bounds.x,graphics.__bounds.y); else context.drawImage(graphics.__canvas,Math.ceil(graphics.__bounds.x + scrollRect.x),Math.ceil(graphics.__bounds.y + scrollRect.y),scrollRect.width,scrollRect.height,Math.ceil(graphics.__bounds.x + scrollRect.x),Math.ceil(graphics.__bounds.y + scrollRect.y),scrollRect.width,scrollRect.height);
			if(shape.__mask != null) renderSession.maskManager.popMask();
		}
	}
};
openfl._internal.renderer.canvas.CanvasTextField = function() { };
$hxClasses["openfl._internal.renderer.canvas.CanvasTextField"] = openfl._internal.renderer.canvas.CanvasTextField;
openfl._internal.renderer.canvas.CanvasTextField.__name__ = ["openfl","_internal","renderer","canvas","CanvasTextField"];
openfl._internal.renderer.canvas.CanvasTextField.context = null;
openfl._internal.renderer.canvas.CanvasTextField.render = function(textField,renderSession) {
	if(textField.__dirty) {
		var textEngine = textField.__textEngine;
		textField.__updateLayout();
		if((textEngine.text == null || textEngine.text == "") && !textEngine.background && !textEngine.border && !textEngine.__hasFocus || (textEngine.width <= 0 || textEngine.height <= 0) && textEngine.autoSize != openfl.text.TextFieldAutoSize.NONE) {
			textField.__graphics.__canvas = null;
			textField.__graphics.__context = null;
			textField.__graphics.set___dirty(false);
			textField.__dirty = false;
		} else {
			var bounds = textEngine.bounds;
			if(textField.__graphics == null || textField.__graphics.__canvas == null) {
				if(textField.__graphics == null) textField.__graphics = new openfl.display.Graphics();
				textField.__graphics.__canvas = window.document.createElement("canvas");
				textField.__graphics.__context = textField.__graphics.__canvas.getContext("2d");
				textField.__graphics.__bounds = new openfl.geom.Rectangle(0,0,bounds.width,bounds.height);
			}
			var graphics = textField.__graphics;
			openfl._internal.renderer.canvas.CanvasTextField.context = graphics.__context;
			if(textEngine.text != null && textEngine.text != "" || textEngine.__hasFocus) {
				var text = textEngine.text;
				if(textEngine.displayAsPassword) {
					var length = text.length;
					var mask = "";
					var _g = 0;
					while(_g < length) {
						var i = _g++;
						mask += "*";
					}
					text = mask;
				}
				graphics.__canvas.width = Math.ceil(bounds.width);
				graphics.__canvas.height = Math.ceil(bounds.height);
				if(textEngine.antiAliasType != openfl.text.AntiAliasType.ADVANCED || textEngine.gridFitType != openfl.text.GridFitType.PIXEL) {
					graphics.__context.mozImageSmoothingEnabled = true;
					graphics.__context.msImageSmoothingEnabled = true;
					graphics.__context.imageSmoothingEnabled = true;
				} else {
					graphics.__context.mozImageSmoothingEnabled = false;
					graphics.__context.msImageSmoothingEnabled = false;
					graphics.__context.imageSmoothingEnabled = false;
				}
				if(textEngine.border || textEngine.background) {
					openfl._internal.renderer.canvas.CanvasTextField.context.rect(0.5,0.5,bounds.width - 1,bounds.height - 1);
					if(textEngine.background) {
						openfl._internal.renderer.canvas.CanvasTextField.context.fillStyle = "#" + StringTools.hex(textEngine.backgroundColor,6);
						openfl._internal.renderer.canvas.CanvasTextField.context.fill();
					}
					if(textEngine.border) {
						openfl._internal.renderer.canvas.CanvasTextField.context.lineWidth = 1;
						openfl._internal.renderer.canvas.CanvasTextField.context.strokeStyle = "#" + StringTools.hex(textEngine.borderColor,6);
						openfl._internal.renderer.canvas.CanvasTextField.context.stroke();
					}
				}
				openfl._internal.renderer.canvas.CanvasTextField.context.textBaseline = "top";
				openfl._internal.renderer.canvas.CanvasTextField.context.textAlign = "start";
				var scrollX = -textField.get_scrollH();
				var scrollY = 0.0;
				var _g1 = 0;
				var _g2 = textField.get_scrollV() - 1;
				while(_g1 < _g2) {
					var i1 = _g1++;
					scrollY -= textEngine.lineHeights[i1];
				}
				var advance;
				var offsetY = 0.0;
				var applyHack = new EReg("(iPad|iPhone|iPod|Firefox)","g").match(window.navigator.userAgent);
				var _g3 = 0;
				var _g11 = textEngine.layoutGroups;
				while(_g3 < _g11.length) {
					var group = _g11[_g3];
					++_g3;
					if(group.lineIndex < textField.get_scrollV() - 1) continue;
					if(group.lineIndex > textField.get_scrollV() + textEngine.bottomScrollV - 2) break;
					openfl._internal.renderer.canvas.CanvasTextField.context.font = openfl._internal.text.TextEngine.getFont(group.format);
					openfl._internal.renderer.canvas.CanvasTextField.context.fillStyle = "#" + StringTools.hex(group.format.color,6);
					if(applyHack) offsetY = group.format.size * 0.185;
					openfl._internal.renderer.canvas.CanvasTextField.context.fillText(text.substring(group.startIndex,group.endIndex),group.offsetX + scrollX,group.offsetY + offsetY + scrollY);
					if(textField.__caretIndex > -1 && textEngine.selectable) {
						if(textField.__selectionIndex == textField.__caretIndex) {
							if(textField.__showCursor && group.startIndex <= textField.__caretIndex && group.endIndex >= textField.__caretIndex) {
								advance = 0.0;
								var _g31 = 0;
								var _g21 = textField.__caretIndex - group.startIndex;
								while(_g31 < _g21) {
									var i2 = _g31++;
									if(group.advances.length <= i2) break;
									advance += group.advances[i2];
								}
								openfl._internal.renderer.canvas.CanvasTextField.context.fillRect(group.offsetX + advance,group.offsetY,1,group.height);
							}
						} else if(group.startIndex <= textField.__caretIndex && group.endIndex >= textField.__caretIndex || group.startIndex <= textField.__selectionIndex && group.endIndex >= textField.__selectionIndex) {
							var selectionStart = Std["int"](Math.min(textField.__selectionIndex,textField.__caretIndex));
							var selectionEnd = Std["int"](Math.max(textField.__selectionIndex,textField.__caretIndex));
							if(group.startIndex > selectionStart) selectionStart = group.startIndex;
							if(group.endIndex < selectionEnd) selectionEnd = group.endIndex;
							var start;
							var end;
							start = textField.getCharBoundaries(selectionStart);
							if(selectionEnd >= textEngine.text.length) {
								end = textField.getCharBoundaries(textEngine.text.length - 1);
								end.x += end.width + 2;
							} else end = textField.getCharBoundaries(selectionEnd);
							if(start != null && end != null) {
								openfl._internal.renderer.canvas.CanvasTextField.context.fillStyle = "#000000";
								openfl._internal.renderer.canvas.CanvasTextField.context.fillRect(start.x,start.y,end.x - start.x,group.height);
								openfl._internal.renderer.canvas.CanvasTextField.context.fillStyle = "#FFFFFF";
								openfl._internal.renderer.canvas.CanvasTextField.context.fillText(text.substring(selectionStart,selectionEnd),scrollX + start.x,group.offsetY + offsetY + scrollY);
							}
						}
					}
				}
			} else {
				graphics.__canvas.width = Math.ceil(bounds.width);
				graphics.__canvas.height = Math.ceil(bounds.height);
				if(textEngine.border || textEngine.background) {
					if(textEngine.border) openfl._internal.renderer.canvas.CanvasTextField.context.rect(0.5,0.5,bounds.width - 1,bounds.height - 1); else openfl._internal.renderer.canvas.CanvasTextField.context.rect(0,0,bounds.width,bounds.height);
					if(textEngine.background) {
						openfl._internal.renderer.canvas.CanvasTextField.context.fillStyle = "#" + StringTools.hex(textEngine.backgroundColor,6);
						openfl._internal.renderer.canvas.CanvasTextField.context.fill();
					}
					if(textEngine.border) {
						openfl._internal.renderer.canvas.CanvasTextField.context.lineWidth = 1;
						openfl._internal.renderer.canvas.CanvasTextField.context.lineCap = "square";
						openfl._internal.renderer.canvas.CanvasTextField.context.strokeStyle = "#" + StringTools.hex(textEngine.borderColor,6);
						openfl._internal.renderer.canvas.CanvasTextField.context.stroke();
					}
				}
			}
			graphics.__bitmap = openfl.display.BitmapData.fromCanvas(textField.__graphics.__canvas);
			textField.__dirty = false;
			graphics.set___dirty(false);
		}
	}
};
openfl._internal.renderer.console = {};
openfl._internal.renderer.console.ConsoleRenderer = function(width,height,ctx) {
	openfl._internal.renderer.AbstractRenderer.call(this,width,height);
	throw "ConsoleRenderer not supported";
};
$hxClasses["openfl._internal.renderer.console.ConsoleRenderer"] = openfl._internal.renderer.console.ConsoleRenderer;
openfl._internal.renderer.console.ConsoleRenderer.__name__ = ["openfl","_internal","renderer","console","ConsoleRenderer"];
openfl._internal.renderer.console.ConsoleRenderer.__super__ = openfl._internal.renderer.AbstractRenderer;
openfl._internal.renderer.console.ConsoleRenderer.prototype = $extend(openfl._internal.renderer.AbstractRenderer.prototype,{
	render: function(stage) {
	}
	,__class__: openfl._internal.renderer.console.ConsoleRenderer
});
openfl._internal.renderer.dom = {};
openfl._internal.renderer.dom.DOMBitmap = function() { };
$hxClasses["openfl._internal.renderer.dom.DOMBitmap"] = openfl._internal.renderer.dom.DOMBitmap;
openfl._internal.renderer.dom.DOMBitmap.__name__ = ["openfl","_internal","renderer","dom","DOMBitmap"];
openfl._internal.renderer.dom.DOMBitmap.renderCanvas = function(bitmap,renderSession) {
	if(bitmap.__image != null) {
		renderSession.element.removeChild(bitmap.__image);
		bitmap.__image = null;
	}
	if(bitmap.__canvas == null) {
		bitmap.__canvas = window.document.createElement("canvas");
		bitmap.__context = bitmap.__canvas.getContext("2d");
		if(!bitmap.smoothing) {
			bitmap.__context.mozImageSmoothingEnabled = false;
			bitmap.__context.msImageSmoothingEnabled = false;
			bitmap.__context.imageSmoothingEnabled = false;
		}
		openfl._internal.renderer.dom.DOMRenderer.initializeElement(bitmap,bitmap.__canvas,renderSession);
	}
	bitmap.bitmapData.__sync();
	bitmap.__canvas.width = bitmap.bitmapData.width;
	bitmap.__canvas.height = bitmap.bitmapData.height;
	bitmap.__context.globalAlpha = bitmap.__worldAlpha;
	bitmap.__context.drawImage(bitmap.bitmapData.image.buffer.__srcCanvas,0,0);
	openfl._internal.renderer.dom.DOMRenderer.applyStyle(bitmap,renderSession,true,false,true);
};
openfl._internal.renderer.dom.DOMBitmap.renderImage = function(bitmap,renderSession) {
	if(bitmap.__canvas != null) {
		renderSession.element.removeChild(bitmap.__canvas);
		bitmap.__canvas = null;
	}
	if(bitmap.__image == null) {
		bitmap.__image = window.document.createElement("img");
		bitmap.__image.src = bitmap.bitmapData.image.buffer.__srcImage.src;
		openfl._internal.renderer.dom.DOMRenderer.initializeElement(bitmap,bitmap.__image,renderSession);
	}
	openfl._internal.renderer.dom.DOMRenderer.applyStyle(bitmap,renderSession,true,true,true);
};
openfl._internal.renderer.dom.DOMMaskManager = function(renderSession) {
	openfl._internal.renderer.AbstractMaskManager.call(this,renderSession);
};
$hxClasses["openfl._internal.renderer.dom.DOMMaskManager"] = openfl._internal.renderer.dom.DOMMaskManager;
openfl._internal.renderer.dom.DOMMaskManager.__name__ = ["openfl","_internal","renderer","dom","DOMMaskManager"];
openfl._internal.renderer.dom.DOMMaskManager.__super__ = openfl._internal.renderer.AbstractMaskManager;
openfl._internal.renderer.dom.DOMMaskManager.prototype = $extend(openfl._internal.renderer.AbstractMaskManager.prototype,{
	pushMask: function(mask) {
	}
	,pushRect: function(rect,transform) {
	}
	,popMask: function() {
	}
	,__class__: openfl._internal.renderer.dom.DOMMaskManager
});
openfl._internal.renderer.dom.DOMRenderer = function(width,height,element) {
	openfl._internal.renderer.AbstractRenderer.call(this,width,height);
	this.element = element;
	this.renderSession = new openfl._internal.renderer.RenderSession();
	this.renderSession.element = element;
	this.renderSession.roundPixels = true;
	var prefix = (function () {
		  var styles = window.getComputedStyle(document.documentElement, ''),
			pre = (Array.prototype.slice
			  .call(styles)
			  .join('') 
			  .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
			)[1],
			dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
		  return {
			dom: dom,
			lowercase: pre,
			css: '-' + pre + '-',
			js: pre[0].toUpperCase() + pre.substr(1)
		  };
		})();
	this.renderSession.vendorPrefix = prefix.lowercase;
	if(prefix.lowercase == "webkit") this.renderSession.transformProperty = "-webkit-transform"; else this.renderSession.transformProperty = "transform";
	if(prefix.lowercase == "webkit") this.renderSession.transformOriginProperty = "-webkit-transform-origin"; else this.renderSession.transformOriginProperty = "transform-origin";
	this.renderSession.maskManager = new openfl._internal.renderer.dom.DOMMaskManager(this.renderSession);
	this.renderSession.renderer = this;
};
$hxClasses["openfl._internal.renderer.dom.DOMRenderer"] = openfl._internal.renderer.dom.DOMRenderer;
openfl._internal.renderer.dom.DOMRenderer.__name__ = ["openfl","_internal","renderer","dom","DOMRenderer"];
openfl._internal.renderer.dom.DOMRenderer.applyStyle = function(displayObject,renderSession,setTransform,setAlpha,setClip) {
	var style = displayObject.__style;
	if(setTransform && displayObject.__worldTransformChanged) style.setProperty(renderSession.transformProperty,displayObject.__worldTransform.to3DString(renderSession.roundPixels),null);
	if(displayObject.__worldZ != ++renderSession.z) {
		displayObject.__worldZ = renderSession.z;
		style.setProperty("z-index",displayObject.__worldZ == null?"null":"" + displayObject.__worldZ,null);
	}
	if(setAlpha && displayObject.__worldAlphaChanged) {
		if(displayObject.__worldAlpha < 1) style.setProperty("opacity",displayObject.__worldAlpha == null?"null":"" + displayObject.__worldAlpha,null); else style.removeProperty("opacity");
	}
	if(setClip && displayObject.__worldClipChanged) {
		if(displayObject.__worldClip == null) style.removeProperty("clip"); else {
			var clip = openfl.geom.Rectangle.__temp;
			var matrix = openfl.geom.Matrix.__temp;
			matrix.copyFrom(displayObject.__worldTransform);
			matrix.invert();
			displayObject.__worldClip.__transform(clip,matrix);
			style.setProperty("clip","rect(" + clip.y + "px, " + clip.get_right() + "px, " + clip.get_bottom() + "px, " + clip.x + "px)",null);
		}
	}
};
openfl._internal.renderer.dom.DOMRenderer.initializeElement = function(displayObject,element,renderSession) {
	var style = displayObject.__style = element.style;
	style.setProperty("position","absolute",null);
	style.setProperty("top","0",null);
	style.setProperty("left","0",null);
	style.setProperty(renderSession.transformOriginProperty,"0 0 0",null);
	renderSession.element.appendChild(element);
	displayObject.__worldAlphaChanged = true;
	displayObject.__worldClipChanged = true;
	displayObject.__worldTransformChanged = true;
	displayObject.__worldVisibleChanged = true;
	displayObject.__worldZ = -1;
};
openfl._internal.renderer.dom.DOMRenderer.__super__ = openfl._internal.renderer.AbstractRenderer;
openfl._internal.renderer.dom.DOMRenderer.prototype = $extend(openfl._internal.renderer.AbstractRenderer.prototype,{
	render: function(stage) {
		this.element.style.background = stage.__colorString;
		this.renderSession.z = 1;
		stage.__renderDOM(this.renderSession);
	}
	,__class__: openfl._internal.renderer.dom.DOMRenderer
});
openfl._internal.renderer.dom.DOMShape = function() { };
$hxClasses["openfl._internal.renderer.dom.DOMShape"] = openfl._internal.renderer.dom.DOMShape;
openfl._internal.renderer.dom.DOMShape.__name__ = ["openfl","_internal","renderer","dom","DOMShape"];
openfl._internal.renderer.dom.DOMShape.render = function(shape,renderSession) {
	var graphics = shape.__graphics;
	if(shape.stage != null && shape.__worldVisible && shape.__renderable && graphics != null) {
		if(graphics.__dirty || shape.__worldAlphaChanged || shape.__canvas == null && graphics.__canvas != null) {
			openfl._internal.renderer.canvas.CanvasGraphics.render(graphics,renderSession);
			if(graphics.__canvas != null) {
				if(shape.__canvas == null) {
					shape.__canvas = window.document.createElement("canvas");
					shape.__context = shape.__canvas.getContext("2d");
					openfl._internal.renderer.dom.DOMRenderer.initializeElement(shape,shape.__canvas,renderSession);
				}
				shape.__canvas.width = graphics.__canvas.width;
				shape.__canvas.height = graphics.__canvas.height;
				shape.__context.globalAlpha = shape.__worldAlpha;
				shape.__context.drawImage(graphics.__canvas,0,0);
			} else if(shape.__canvas != null) {
				renderSession.element.removeChild(shape.__canvas);
				shape.__canvas = null;
				shape.__style = null;
			}
		}
		if(shape.__canvas != null) {
			if(shape.__worldTransformChanged || graphics.__transformDirty) {
				graphics.__transformDirty = false;
				var transform = openfl.geom.Matrix.__temp;
				transform.identity();
				transform.translate(graphics.__bounds.x,graphics.__bounds.y);
				transform.concat(shape.__worldTransform);
				shape.__style.setProperty(renderSession.transformProperty,renderSession.roundPixels?"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + (transform.tx | 0) + ", " + (transform.ty | 0) + ", 0, 1)":"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + transform.tx + ", " + transform.ty + ", 0, 1)",null);
			}
			openfl._internal.renderer.dom.DOMRenderer.applyStyle(shape,renderSession,false,false,true);
		}
	} else if(shape.__canvas != null) {
		renderSession.element.removeChild(shape.__canvas);
		shape.__canvas = null;
		shape.__style = null;
	}
};
openfl._internal.renderer.dom.DOMTextField = function() { };
$hxClasses["openfl._internal.renderer.dom.DOMTextField"] = openfl._internal.renderer.dom.DOMTextField;
openfl._internal.renderer.dom.DOMTextField.__name__ = ["openfl","_internal","renderer","dom","DOMTextField"];
openfl._internal.renderer.dom.DOMTextField.render = function(textField,renderSession) {
	var textEngine = textField.__textEngine;
	if(textField.stage != null && textField.__worldVisible && textField.__renderable) {
		if(textField.__dirty || textField.__div == null) {
			if(textEngine.text != "" || textEngine.background || textEngine.border || textEngine.type == openfl.text.TextFieldType.INPUT) {
				if(textField.__div == null) {
					textField.__div = window.document.createElement("div");
					openfl._internal.renderer.dom.DOMRenderer.initializeElement(textField,textField.__div,renderSession);
					textField.__style.setProperty("outline","none",null);
					textField.__div.addEventListener("input",function(event) {
						event.preventDefault();
						if(textField.get_htmlText() != textField.__div.innerHTML) {
							textField.set_htmlText(textField.__div.innerHTML);
							textField.__dirty = false;
						}
					},true);
				}
				if(textEngine.selectable) textField.__style.setProperty("cursor","text",null); else textField.__style.setProperty("cursor","inherit",null);
				textField.__div.contentEditable = textEngine.type == openfl.text.TextFieldType.INPUT;
				var style = textField.__style;
				textField.__div.innerHTML = textEngine.text;
				if(textEngine.background) style.setProperty("background-color","#" + StringTools.hex(textEngine.backgroundColor,6),null); else style.removeProperty("background-color");
				if(textEngine.border) style.setProperty("border","solid 1px #" + StringTools.hex(textEngine.borderColor,6),null); else style.removeProperty("border");
				style.setProperty("font",openfl._internal.text.TextEngine.getFont(textField.__textFormat),null);
				style.setProperty("color","#" + StringTools.hex(textField.__textFormat.color,6),null);
				if(textEngine.autoSize != openfl.text.TextFieldAutoSize.NONE) style.setProperty("width","auto",null); else style.setProperty("width",textEngine.width + "px",null);
				style.setProperty("height",textEngine.height + "px",null);
				var _g = textField.__textFormat.align;
				switch(_g[1]) {
				case 3:
					style.setProperty("text-align","center",null);
					break;
				case 1:
					style.setProperty("text-align","right",null);
					break;
				default:
					style.setProperty("text-align","left",null);
				}
				textField.__dirty = false;
			} else if(textField.__div != null) {
				renderSession.element.removeChild(textField.__div);
				textField.__div = null;
			}
		}
		if(textField.__div != null) openfl._internal.renderer.dom.DOMRenderer.applyStyle(textField,renderSession,true,true,false);
	} else if(textField.__div != null) {
		renderSession.element.removeChild(textField.__div);
		textField.__div = null;
		textField.__style = null;
	}
};
openfl._internal.renderer.opengl = {};
openfl._internal.renderer.opengl.GLRenderer = function(width,height,gl,transparent,antialias,preserveDrawingBuffer) {
	if(preserveDrawingBuffer == null) preserveDrawingBuffer = false;
	if(antialias == null) antialias = false;
	if(transparent == null) transparent = false;
	if(height == null) height = 600;
	if(width == null) width = 800;
	this.vpHeight = 0;
	this.vpWidth = 0;
	this.vpY = 0;
	this.vpX = 0;
	openfl._internal.renderer.AbstractRenderer.call(this,width,height);
	this.transparent = transparent;
	this.preserveDrawingBuffer = preserveDrawingBuffer;
	this.width = width;
	this.height = height;
	this.options = { alpha : transparent, antialias : antialias, premultipliedAlpha : transparent, stencil : true, preserveDrawingBuffer : preserveDrawingBuffer};
	this._glContextId = openfl._internal.renderer.opengl.GLRenderer.glContextId++;
	this.gl = gl;
	this.defaultFramebuffer = null;
	openfl._internal.renderer.opengl.GLRenderer.glContexts[this._glContextId] = gl;
	this.projectionMatrix = new openfl.geom.Matrix();
	this.projection = new openfl.geom.Point();
	this.projection.x = this.width / 2;
	this.projection.y = -this.height / 2;
	this.offset = new openfl.geom.Point(0,0);
	this.resize(this.width,this.height);
	this.contextLost = false;
	this.shaderManager = new openfl._internal.renderer.opengl.utils.ShaderManager(gl);
	this.spriteBatch = new openfl._internal.renderer.opengl.utils.SpriteBatch(gl);
	this.filterManager = new openfl._internal.renderer.opengl.utils.FilterManager(gl,this.transparent);
	this.stencilManager = new openfl._internal.renderer.opengl.utils.StencilManager(gl);
	this.blendModeManager = new openfl._internal.renderer.opengl.utils.BlendModeManager(gl);
	this.renderSession = new openfl._internal.renderer.RenderSession();
	this.renderSession.gl = this.gl;
	this.renderSession.drawCount = 0;
	this.renderSession.shaderManager = this.shaderManager;
	this.renderSession.maskManager = this.maskManager;
	this.renderSession.filterManager = this.filterManager;
	this.renderSession.blendModeManager = this.blendModeManager;
	this.renderSession.spriteBatch = this.spriteBatch;
	this.renderSession.stencilManager = this.stencilManager;
	this.renderSession.renderer = this;
	this.renderSession.defaultFramebuffer = this.defaultFramebuffer;
	this.renderSession.projectionMatrix = this.projectionMatrix;
	this.maskManager = new openfl._internal.renderer.opengl.utils.GLMaskManager(this.renderSession);
	this.renderSession.maskManager = this.maskManager;
	this.shaderManager.setShader(this.shaderManager.defaultShader);
	gl.disable(gl.DEPTH_TEST);
	gl.disable(gl.CULL_FACE);
	gl.enable(gl.BLEND);
	gl.colorMask(true,true,true,this.transparent);
};
$hxClasses["openfl._internal.renderer.opengl.GLRenderer"] = openfl._internal.renderer.opengl.GLRenderer;
openfl._internal.renderer.opengl.GLRenderer.__name__ = ["openfl","_internal","renderer","opengl","GLRenderer"];
openfl._internal.renderer.opengl.GLRenderer.renderBitmap = function(shape,renderSession,smooth) {
	if(smooth == null) smooth = true;
	if(!shape.__renderable || shape.__worldAlpha <= 0) return;
	if(shape.__graphics == null || shape.__graphics.__bitmap == null) return;
	var rect = openfl.geom.Rectangle.__temp;
	var matrix = openfl.geom.Matrix.__temp;
	rect.setEmpty();
	matrix.identity();
	shape.__getBounds(rect,matrix);
	var bitmap = shape.__graphics.__bitmap;
	matrix.translate(shape.__graphics.__bounds.x,shape.__graphics.__bounds.y);
	matrix.concat(shape.__worldTransform);
	renderSession.spriteBatch.renderBitmapData(bitmap,smooth,matrix,shape.__worldColorTransform,shape.__worldAlpha,shape.__blendMode,openfl.display.PixelSnapping.ALWAYS);
};
openfl._internal.renderer.opengl.GLRenderer.__super__ = openfl._internal.renderer.AbstractRenderer;
openfl._internal.renderer.opengl.GLRenderer.prototype = $extend(openfl._internal.renderer.AbstractRenderer.prototype,{
	setViewport: function(x,y,width,height) {
		if(!(this.vpX == x && this.vpY == y && this.vpWidth == width && this.vpHeight == height)) {
			this.vpX = x;
			this.vpY = y;
			this.vpWidth = width;
			this.vpHeight = height;
			this.gl.viewport(x,y,width,height);
			this.setOrtho(x,y,width,height);
		}
	}
	,setOrtho: function(x,y,width,height) {
		var o = this.projectionMatrix;
		o.identity();
		o.a = 1 / width * 2;
		o.d = -1 / height * 2;
		o.tx = -1 - x * o.a;
		o.ty = 1 - y * o.d;
	}
	,render: function(stage) {
		if(this.contextLost) return;
		var gl = this.gl;
		this.setViewport(0,0,this.width,this.height);
		gl.bindFramebuffer(gl.FRAMEBUFFER,this.defaultFramebuffer);
		if(this.transparent) gl.clearColor(0,0,0,0); else gl.clearColor(stage.__colorSplit[0],stage.__colorSplit[1],stage.__colorSplit[2],1);
		gl.clear(gl.COLOR_BUFFER_BIT);
		this.renderDisplayObject(stage,this.projection);
	}
	,renderDisplayObject: function(displayObject,projection,buffer) {
		this.renderSession.blendModeManager.setBlendMode(openfl.display.BlendMode.NORMAL);
		this.renderSession.drawCount = 0;
		this.renderSession.currentBlendMode = null;
		this.spriteBatch.begin(this.renderSession);
		this.filterManager.begin(this.renderSession,buffer);
		displayObject.__renderGL(this.renderSession);
		this.spriteBatch.finish();
	}
	,resize: function(width,height) {
		this.width = width;
		this.height = height;
		openfl._internal.renderer.AbstractRenderer.prototype.resize.call(this,width,height);
		this.setViewport(0,0,width,height);
		this.projection.x = width / 2;
		this.projection.y = -height / 2;
	}
	,__class__: openfl._internal.renderer.opengl.GLRenderer
});
openfl._internal.renderer.opengl.shaders2 = {};
openfl._internal.renderer.opengl.shaders2.Shader = function(gl) {
	this.uniforms = new haxe.ds.StringMap();
	this.attributes = new haxe.ds.StringMap();
	this.ID = openfl._internal.renderer.opengl.shaders2.Shader.UID++;
	this.gl = gl;
	this.program = null;
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.Shader"] = openfl._internal.renderer.opengl.shaders2.Shader;
openfl._internal.renderer.opengl.shaders2.Shader.__name__ = ["openfl","_internal","renderer","opengl","shaders2","Shader"];
openfl._internal.renderer.opengl.shaders2.Shader.compileProgram = function(gl,vertexSrc,fragmentSrc) {
	var vertexShader = openfl._internal.renderer.opengl.shaders2.Shader.compileShader(gl,vertexSrc,gl.VERTEX_SHADER);
	var fragmentShader = openfl._internal.renderer.opengl.shaders2.Shader.compileShader(gl,fragmentSrc,gl.FRAGMENT_SHADER);
	var program = gl.createProgram();
	if(vertexShader != null && fragmentShader != null) {
		gl.attachShader(program,vertexShader);
		gl.attachShader(program,fragmentShader);
		gl.linkProgram(program);
		if(gl.getProgramParameter(program,gl.LINK_STATUS) == 0) console.log("Could not initialize shaders");
	}
	return program;
};
openfl._internal.renderer.opengl.shaders2.Shader.compileShader = function(gl,shaderSrc,type) {
	var src = shaderSrc.join("\n");
	var shader = gl.createShader(type);
	gl.shaderSource(shader,src);
	gl.compileShader(shader);
	if(gl.getShaderParameter(shader,gl.COMPILE_STATUS) == 0) {
		console.log(gl.getShaderInfoLog(shader));
		return null;
	}
	return shader;
};
openfl._internal.renderer.opengl.shaders2.Shader.prototype = {
	init: function() {
		this.program = openfl._internal.renderer.opengl.shaders2.Shader.compileProgram(this.gl,this.vertexSrc,this.fragmentSrc);
		this.gl.useProgram(this.program);
	}
	,getAttribLocation: function(attribute) {
		if(this.program == null) throw "Shader isn't initialized";
		if(this.attributes.exists(attribute)) return this.attributes.get(attribute); else {
			var location = this.gl.getAttribLocation(this.program,attribute);
			this.attributes.set(attribute,location);
			return location;
		}
	}
	,getUniformLocation: function(uniform) {
		if(this.program == null) throw "Shader isn't initialized";
		if(this.uniforms.exists(uniform)) return this.uniforms.get(uniform); else {
			var location = this.gl.getUniformLocation(this.program,uniform);
			this.uniforms.set(uniform,location);
			return location;
		}
	}
	,enableVertexAttribute: function(attribute,stride,offset) {
		var location = this.getAttribLocation(attribute.name);
		this.gl.enableVertexAttribArray(location);
		this.gl.vertexAttribPointer(location,attribute.components,attribute.type,attribute.normalized,stride,offset * 4);
	}
	,disableVertexAttribute: function(attribute,setDefault) {
		if(setDefault == null) setDefault = true;
		var location = this.getAttribLocation(attribute.name);
		this.gl.disableVertexAttribArray(location);
		if(setDefault) {
			var _g = attribute.components;
			switch(_g) {
			case 1:
				this.gl.vertexAttrib1fv(location,attribute.defaultValue.subarray(0,1));
				break;
			case 2:
				this.gl.vertexAttrib2fv(location,attribute.defaultValue.subarray(0,2));
				break;
			case 3:
				this.gl.vertexAttrib3fv(location,attribute.defaultValue.subarray(0,3));
				break;
			default:
				this.gl.vertexAttrib4fv(location,attribute.defaultValue.subarray(0,4));
			}
		}
	}
	,bindVertexArray: function(va) {
		var offset = 0;
		var stride = va.get_stride();
		var _g = 0;
		var _g1 = va.attributes;
		while(_g < _g1.length) {
			var attribute = _g1[_g];
			++_g;
			if(attribute.enabled) {
				this.enableVertexAttribute(attribute,stride,offset);
				offset += Math.floor(attribute.components * attribute.getElementsBytes() / 4);
			} else this.disableVertexAttribute(attribute,true);
		}
	}
	,__class__: openfl._internal.renderer.opengl.shaders2.Shader
};
openfl._internal.renderer.opengl.shaders2.DefaultShader = function(gl) {
	openfl._internal.renderer.opengl.shaders2.Shader.call(this,gl);
	this.vertexSrc = ["attribute vec2 " + Std.string("aPosition") + ";","attribute vec2 " + Std.string("aTexCoord0") + ";","attribute vec4 " + Std.string("aColor") + ";","uniform mat3 " + Std.string("uProjectionMatrix") + ";","varying vec2 vTexCoord;","varying vec4 vColor;","void main(void) {","   gl_Position = vec4((" + Std.string("uProjectionMatrix") + " * vec3(" + Std.string("aPosition") + ", 1.0)).xy, 0.0, 1.0);","   vTexCoord = " + Std.string("aTexCoord0") + ";","   vColor = " + Std.string("aColor") + ";","}"];
	this.fragmentSrc = ["#ifdef GL_ES","precision lowp float;","#endif","uniform sampler2D " + Std.string("uSampler0") + ";","uniform vec4 " + Std.string("uColorMultiplier") + ";","uniform vec4 " + Std.string("uColorOffset") + ";","varying vec2 vTexCoord;","varying vec4 vColor;","vec4 colorTransform(const vec4 color, const vec4 tint, const vec4 multiplier, const vec4 offset) {","   vec4 unmultiply = vec4(color.rgb / color.a, color.a);","   vec4 result = unmultiply * tint * multiplier;","   result = result + offset;","   result = clamp(result, 0., 1.);","   result = vec4(result.rgb * result.a, result.a);","   return result;","}","void main(void) {","   vec4 tc = texture2D(" + Std.string("uSampler0") + ", vTexCoord);","   gl_FragColor = colorTransform(tc, vColor, " + Std.string("uColorMultiplier") + ", " + Std.string("uColorOffset") + ");","}"];
	this.init();
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.DefaultShader"] = openfl._internal.renderer.opengl.shaders2.DefaultShader;
openfl._internal.renderer.opengl.shaders2.DefaultShader.__name__ = ["openfl","_internal","renderer","opengl","shaders2","DefaultShader"];
openfl._internal.renderer.opengl.shaders2.DefaultShader.__super__ = openfl._internal.renderer.opengl.shaders2.Shader;
openfl._internal.renderer.opengl.shaders2.DefaultShader.prototype = $extend(openfl._internal.renderer.opengl.shaders2.Shader.prototype,{
	init: function() {
		openfl._internal.renderer.opengl.shaders2.Shader.prototype.init.call(this);
		this.getAttribLocation("aPosition");
		this.getAttribLocation("aTexCoord0");
		this.getAttribLocation("aColor");
		this.getUniformLocation("uProjectionMatrix");
		this.getUniformLocation("uSampler0");
		this.getUniformLocation("uColorMultiplier");
		this.getUniformLocation("uColorOffset");
	}
	,__class__: openfl._internal.renderer.opengl.shaders2.DefaultShader
});
openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader = function(gl) {
	openfl._internal.renderer.opengl.shaders2.Shader.call(this,gl);
	this.vertexSrc = ["attribute vec2 " + Std.string("aPosition") + ";","attribute vec2 " + Std.string("aTexCoord0") + ";","attribute vec4 " + Std.string("aColor") + ";","uniform mat3 " + Std.string("uProjectionMatrix") + ";","varying vec2 vTexCoord;","varying vec4 vColor;","void main(void) {","   gl_Position = vec4((" + Std.string("uProjectionMatrix") + " * vec3(" + Std.string("aPosition") + ", 1.0)).xy, 0.0, 1.0);","   vTexCoord = " + Std.string("aTexCoord0") + ";","   vColor = " + Std.string("aColor") + ".bgra;","}"];
	this.fragmentSrc = ["#ifdef GL_ES","precision lowp float;","#endif","uniform sampler2D " + Std.string("uSampler0") + ";","uniform vec3 " + Std.string("uColor") + ";","uniform bool " + Std.string("uUseTexture") + ";","uniform float " + Std.string("uAlpha") + ";","uniform vec4 " + Std.string("uColorMultiplier") + ";","uniform vec4 " + Std.string("uColorOffset") + ";","varying vec2 vTexCoord;","varying vec4 vColor;","vec4 tmp;","vec4 colorTransform(const vec4 color, const vec4 tint, const vec4 multiplier, const vec4 offset) {","   vec4 unmultiply = vec4(color.rgb / color.a, color.a);","   vec4 result = unmultiply * tint * multiplier;","   result = result + offset;","   result = clamp(result, 0., 1.);","   result = vec4(result.rgb * result.a, result.a);","   return result;","}","void main(void) {","   if(" + Std.string("uUseTexture") + ") {","       tmp = texture2D(" + Std.string("uSampler0") + ", vTexCoord);","   } else {","       tmp = vec4(" + Std.string("uColor") + ", 1.);","   }","   gl_FragColor = colorTransform(tmp, vColor, " + Std.string("uColorMultiplier") + ", " + Std.string("uColorOffset") + ");","}"];
	this.init();
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader"] = openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader;
openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader.__name__ = ["openfl","_internal","renderer","opengl","shaders2","DrawTrianglesShader"];
openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader.__super__ = openfl._internal.renderer.opengl.shaders2.Shader;
openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader.prototype = $extend(openfl._internal.renderer.opengl.shaders2.Shader.prototype,{
	init: function() {
		openfl._internal.renderer.opengl.shaders2.Shader.prototype.init.call(this);
		this.getAttribLocation("aPosition");
		this.getAttribLocation("aTexCoord0");
		this.getAttribLocation("aColor");
		this.getUniformLocation("uSampler0");
		this.getUniformLocation("uProjectionMatrix");
		this.getUniformLocation("uColor");
		this.getUniformLocation("uAlpha");
		this.getUniformLocation("uUseTexture");
		this.getUniformLocation("uColorMultiplier");
		this.getUniformLocation("uColorOffset");
	}
	,__class__: openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader
});
openfl._internal.renderer.opengl.shaders2.FillShader = function(gl) {
	openfl._internal.renderer.opengl.shaders2.Shader.call(this,gl);
	this.vertexSrc = ["attribute vec2 " + Std.string("aPosition") + ";","uniform mat3 " + Std.string("uTranslationMatrix") + ";","uniform mat3 " + Std.string("uProjectionMatrix") + ";","uniform vec4 " + Std.string("uColor") + ";","uniform float " + Std.string("uAlpha") + ";","uniform vec4 " + Std.string("uColorMultiplier") + ";","uniform vec4 " + Std.string("uColorOffset") + ";","varying vec4 vColor;","vec4 colorTransform(const vec4 color, const float alpha, const vec4 multiplier, const vec4 offset) {","   vec4 result = color * multiplier;","   result.a *= alpha;","   result = result + offset;","   result = clamp(result, 0., 1.);","   result = vec4(result.rgb * result.a, result.a);","   return result;","}","void main(void) {","   gl_Position = vec4((" + Std.string("uProjectionMatrix") + " * " + Std.string("uTranslationMatrix") + " * vec3(" + Std.string("aPosition") + ", 1.0)).xy, 0.0, 1.0);","   vColor = colorTransform(" + Std.string("uColor") + ", " + Std.string("uAlpha") + ", " + Std.string("uColorMultiplier") + ", " + Std.string("uColorOffset") + ");","}"];
	this.fragmentSrc = ["#ifdef GL_ES","precision lowp float;","#endif","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"];
	this.init();
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.FillShader"] = openfl._internal.renderer.opengl.shaders2.FillShader;
openfl._internal.renderer.opengl.shaders2.FillShader.__name__ = ["openfl","_internal","renderer","opengl","shaders2","FillShader"];
openfl._internal.renderer.opengl.shaders2.FillShader.__super__ = openfl._internal.renderer.opengl.shaders2.Shader;
openfl._internal.renderer.opengl.shaders2.FillShader.prototype = $extend(openfl._internal.renderer.opengl.shaders2.Shader.prototype,{
	init: function() {
		openfl._internal.renderer.opengl.shaders2.Shader.prototype.init.call(this);
		this.getAttribLocation("aPosition");
		this.getUniformLocation("uTranslationMatrix");
		this.getUniformLocation("uProjectionMatrix");
		this.getUniformLocation("uColor");
		this.getUniformLocation("uColorMultiplier");
		this.getUniformLocation("uColorOffset");
	}
	,__class__: openfl._internal.renderer.opengl.shaders2.FillShader
});
openfl._internal.renderer.opengl.shaders2.PatternFillShader = function(gl) {
	openfl._internal.renderer.opengl.shaders2.Shader.call(this,gl);
	this.vertexSrc = ["attribute vec2 " + Std.string("aPosition") + ";","uniform mat3 " + Std.string("uTranslationMatrix") + ";","uniform mat3 " + Std.string("uProjectionMatrix") + ";","uniform mat3 " + Std.string("uPatternMatrix") + ";","varying vec2 vPosition;","void main(void) {","   gl_Position = vec4((" + Std.string("uProjectionMatrix") + " * " + Std.string("uTranslationMatrix") + " * vec3(" + Std.string("aPosition") + ", 1.0)).xy, 0.0, 1.0);","   vPosition = (" + Std.string("uPatternMatrix") + " * vec3(" + Std.string("aPosition") + ", 1)).xy;","}"];
	this.fragmentSrc = ["#ifdef GL_ES","precision lowp float;","#endif","uniform float " + Std.string("uAlpha") + ";","uniform vec2 " + Std.string("uPatternTL") + ";","uniform vec2 " + Std.string("uPatternBR") + ";","uniform sampler2D " + Std.string("uSampler0") + ";","uniform vec4 " + Std.string("uColorMultiplier") + ";","uniform vec4 " + Std.string("uColorOffset") + ";","varying vec2 vPosition;","vec4 colorTransform(const vec4 color, const float alpha, const vec4 multiplier, const vec4 offset) {","   vec4 unmultiply = vec4(color.rgb / color.a, color.a);","   vec4 result = unmultiply * multiplier;","   result.a *= alpha;","   result = result + offset;","   result = clamp(result, 0., 1.);","   result = vec4(result.rgb * result.a, result.a);","   return result;","}","void main(void) {","   vec2 pos = mix(" + Std.string("uPatternTL") + ", " + Std.string("uPatternBR") + ", vPosition);","   vec4 tcol = texture2D(" + Std.string("uSampler0") + ", pos);","   gl_FragColor = colorTransform(tcol, " + Std.string("uAlpha") + ", " + Std.string("uColorMultiplier") + ", " + Std.string("uColorOffset") + ");","}"];
	this.init();
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.PatternFillShader"] = openfl._internal.renderer.opengl.shaders2.PatternFillShader;
openfl._internal.renderer.opengl.shaders2.PatternFillShader.__name__ = ["openfl","_internal","renderer","opengl","shaders2","PatternFillShader"];
openfl._internal.renderer.opengl.shaders2.PatternFillShader.__super__ = openfl._internal.renderer.opengl.shaders2.Shader;
openfl._internal.renderer.opengl.shaders2.PatternFillShader.prototype = $extend(openfl._internal.renderer.opengl.shaders2.Shader.prototype,{
	init: function() {
		openfl._internal.renderer.opengl.shaders2.Shader.prototype.init.call(this);
		this.getAttribLocation("aPosition");
		this.getUniformLocation("uTranslationMatrix");
		this.getUniformLocation("uPatternMatrix");
		this.getUniformLocation("uProjectionMatrix");
		this.getUniformLocation("uSampler0");
		this.getUniformLocation("uPatternTL");
		this.getUniformLocation("uPatternBR");
		this.getUniformLocation("uAlpha");
		this.getUniformLocation("uColorMultiplier");
		this.getUniformLocation("uColorOffset");
	}
	,__class__: openfl._internal.renderer.opengl.shaders2.PatternFillShader
});
openfl._internal.renderer.opengl.shaders2.PrimitiveShader = function(gl) {
	openfl._internal.renderer.opengl.shaders2.Shader.call(this,gl);
	this.vertexSrc = ["attribute vec2 " + Std.string("aPosition") + ";","attribute vec4 " + Std.string("aColor") + ";","uniform mat3 " + Std.string("uTranslationMatrix") + ";","uniform mat3 " + Std.string("uProjectionMatrix") + ";","uniform vec4 " + Std.string("uColorMultiplier") + ";","uniform vec4 " + Std.string("uColorOffset") + ";","uniform float " + Std.string("uAlpha") + ";","varying vec4 vColor;","vec4 colorTransform(const vec4 color, const float alpha, const vec4 multiplier, const vec4 offset) {","   vec4 result = color * multiplier;","   result.a *= alpha;","   result = result + offset;","   result = clamp(result, 0., 1.);","   result = vec4(result.rgb * result.a, result.a);","   return result;","}","void main(void) {","   gl_Position = vec4((" + Std.string("uProjectionMatrix") + " * " + Std.string("uTranslationMatrix") + " * vec3(" + Std.string("aPosition") + ", 1.0)).xy, 0.0, 1.0);","   vColor = colorTransform(" + Std.string("aColor") + ", " + Std.string("uAlpha") + ", " + Std.string("uColorMultiplier") + ", " + Std.string("uColorOffset") + ");","}"];
	this.fragmentSrc = ["#ifdef GL_ES","precision lowp float;","#endif","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"];
	this.init();
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.PrimitiveShader"] = openfl._internal.renderer.opengl.shaders2.PrimitiveShader;
openfl._internal.renderer.opengl.shaders2.PrimitiveShader.__name__ = ["openfl","_internal","renderer","opengl","shaders2","PrimitiveShader"];
openfl._internal.renderer.opengl.shaders2.PrimitiveShader.__super__ = openfl._internal.renderer.opengl.shaders2.Shader;
openfl._internal.renderer.opengl.shaders2.PrimitiveShader.prototype = $extend(openfl._internal.renderer.opengl.shaders2.Shader.prototype,{
	init: function() {
		openfl._internal.renderer.opengl.shaders2.Shader.prototype.init.call(this);
		this.getAttribLocation("aPosition");
		this.getAttribLocation("aColor");
		this.getUniformLocation("uTranslationMatrix");
		this.getUniformLocation("uProjectionMatrix");
		this.getUniformLocation("uAlpha");
		this.getUniformLocation("uColorMultiplier");
		this.getUniformLocation("uColorOffset");
	}
	,__class__: openfl._internal.renderer.opengl.shaders2.PrimitiveShader
});
openfl._internal.renderer.opengl.utils = {};
openfl._internal.renderer.opengl.utils.BlendModeManager = function(gl) {
	this.gl = gl;
	this.currentBlendMode = null;
};
$hxClasses["openfl._internal.renderer.opengl.utils.BlendModeManager"] = openfl._internal.renderer.opengl.utils.BlendModeManager;
openfl._internal.renderer.opengl.utils.BlendModeManager.__name__ = ["openfl","_internal","renderer","opengl","utils","BlendModeManager"];
openfl._internal.renderer.opengl.utils.BlendModeManager.prototype = {
	setBlendMode: function(blendMode,force) {
		if(force == null) force = false;
		if(blendMode == null) {
			blendMode = openfl.display.BlendMode.NORMAL;
			force = true;
		}
		if(!force && this.currentBlendMode == blendMode) return false;
		this.currentBlendMode = blendMode;
		switch(blendMode[1]) {
		case 0:
			this.gl.blendEquation(32774);
			this.gl.blendFunc(1,1);
			break;
		case 9:
			this.gl.blendEquation(32774);
			this.gl.blendFunc(774,771);
			break;
		case 12:
			this.gl.blendEquation(32774);
			this.gl.blendFunc(1,769);
			break;
		case 13:
			this.gl.blendEquation(32779);
			this.gl.blendFunc(1,1);
			break;
		default:
			this.gl.blendEquation(32774);
			this.gl.blendFunc(1,771);
		}
		return true;
	}
	,__class__: openfl._internal.renderer.opengl.utils.BlendModeManager
};
openfl._internal.renderer.opengl.utils.DrawPath = function() {
	this.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
	this.points = [];
	this.winding = 0;
	this.isRemovable = true;
	this.fillIndex = 0;
	this.line = new openfl._internal.renderer.opengl.utils.LineStyle();
	this.fill = openfl._internal.renderer.opengl.utils.FillType.None;
};
$hxClasses["openfl._internal.renderer.opengl.utils.DrawPath"] = openfl._internal.renderer.opengl.utils.DrawPath;
openfl._internal.renderer.opengl.utils.DrawPath.__name__ = ["openfl","_internal","renderer","opengl","utils","DrawPath"];
openfl._internal.renderer.opengl.utils.DrawPath.getStack = function(graphics,gl) {
	return openfl._internal.renderer.opengl.utils.PathBuiler.build(graphics,gl);
};
openfl._internal.renderer.opengl.utils.DrawPath.prototype = {
	update: function(line,fill,fillIndex,winding) {
		this.updateLine(line);
		this.fill = fill;
		this.fillIndex = fillIndex;
		this.winding = winding;
	}
	,updateLine: function(line) {
		this.line.width = line.width;
		this.line.color = line.color;
		if(line.alpha == null) this.line.alpha = 1; else this.line.alpha = line.alpha;
		if(line.scaleMode == null) this.line.scaleMode = openfl.display.LineScaleMode.NORMAL; else this.line.scaleMode = line.scaleMode;
		if(line.caps == null) this.line.caps = openfl.display.CapsStyle.ROUND; else this.line.caps = line.caps;
		if(line.joints == null) this.line.joints = openfl.display.JointStyle.ROUND; else this.line.joints = line.joints;
		this.line.miterLimit = line.miterLimit;
	}
	,__class__: openfl._internal.renderer.opengl.utils.DrawPath
};
openfl._internal.renderer.opengl.utils.PathBuiler = function() { };
$hxClasses["openfl._internal.renderer.opengl.utils.PathBuiler"] = openfl._internal.renderer.opengl.utils.PathBuiler;
openfl._internal.renderer.opengl.utils.PathBuiler.__name__ = ["openfl","_internal","renderer","opengl","utils","PathBuiler"];
openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = null;
openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths = null;
openfl._internal.renderer.opengl.utils.PathBuiler.__line = null;
openfl._internal.renderer.opengl.utils.PathBuiler.__fill = null;
openfl._internal.renderer.opengl.utils.PathBuiler.closePath = function() {
	var l = openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length;
	if(l <= 0) return;
	if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type == openfl._internal.renderer.opengl.utils.GraphicType.Polygon && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.fill != openfl._internal.renderer.opengl.utils.FillType.None) {
		var sx = openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points[0];
		var sy = openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points[1];
		var ex = openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points[l - 2];
		var ey = openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points[l - 1];
		if(!(sx == ex && sy == ey)) openfl._internal.renderer.opengl.utils.PathBuiler.lineTo(sx,sy);
	}
};
openfl._internal.renderer.opengl.utils.PathBuiler.endFill = function() {
	openfl._internal.renderer.opengl.utils.PathBuiler.__fill = openfl._internal.renderer.opengl.utils.FillType.None;
	openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex++;
};
openfl._internal.renderer.opengl.utils.PathBuiler.lineTo = function(x,y) {
	var points = openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points;
	var push_point = true;
	if(points.length > 1) {
		var lastX = points[points.length - 2];
		var lastY = points[points.length - 1];
		if(lastX == x && lastY == y) push_point = false;
	}
	if(push_point == true) {
		openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(x);
		openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(y);
	}
};
openfl._internal.renderer.opengl.utils.PathBuiler.build = function(graphics,gl) {
	var glStack = null;
	var bounds = graphics.__bounds;
	openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths = new Array();
	openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
	openfl._internal.renderer.opengl.utils.PathBuiler.__line = new openfl._internal.renderer.opengl.utils.LineStyle();
	openfl._internal.renderer.opengl.utils.PathBuiler.__fill = openfl._internal.renderer.opengl.utils.FillType.None;
	openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex = 0;
	glStack = graphics.__glStack[openfl._internal.renderer.opengl.GLRenderer.glContextId];
	if(glStack == null) glStack = graphics.__glStack[openfl._internal.renderer.opengl.GLRenderer.glContextId] = new openfl._internal.renderer.opengl.utils.GLStack(gl);
	if(!graphics.__visible || graphics.__commands.length == 0 || bounds == null || bounds.width == 0 || bounds.height == 0) {
	} else {
		var _g = 0;
		var _g1 = graphics.__commands;
		while(_g < _g1.length) {
			var command = _g1[_g];
			++_g;
			switch(command[1]) {
			case 0:
				var smooth = command[5];
				var repeat = command[4];
				var matrix = command[3];
				var bitmap = command[2];
				openfl._internal.renderer.opengl.utils.PathBuiler.endFill();
				if(bitmap != null) openfl._internal.renderer.opengl.utils.PathBuiler.__fill = openfl._internal.renderer.opengl.utils.FillType.Texture(bitmap,matrix,repeat,smooth); else openfl._internal.renderer.opengl.utils.PathBuiler.__fill = openfl._internal.renderer.opengl.utils.FillType.None;
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) {
					if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points = [];
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
					openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				}
				break;
			case 1:
				var alpha = command[3];
				var rgb = command[2];
				openfl._internal.renderer.opengl.utils.PathBuiler.endFill();
				if(alpha > 0) openfl._internal.renderer.opengl.utils.PathBuiler.__fill = openfl._internal.renderer.opengl.utils.FillType.Color(rgb & 16777215,alpha); else openfl._internal.renderer.opengl.utils.PathBuiler.__fill = openfl._internal.renderer.opengl.utils.FillType.None;
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) {
					if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points = [];
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
					openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				}
				break;
			case 3:
				var y = command[7];
				var x = command[6];
				var cy2 = command[5];
				var cx2 = command[4];
				var cy = command[3];
				var cx = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) {
					if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(0);
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(0);
					openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				}
				openfl._internal.renderer.GraphicsPaths.cubicCurveTo(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points,cx,cy,cx2,cy2,x,y);
				break;
			case 4:
				var y1 = command[5];
				var x1 = command[4];
				var cy1 = command[3];
				var cx1 = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) {
					if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(0);
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(0);
					openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				}
				openfl._internal.renderer.GraphicsPaths.curveTo(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points,cx1,cy1,x1,y1);
				break;
			case 5:
				var radius = command[4];
				var y2 = command[3];
				var x2 = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Circle;
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points = [x2,y2,radius];
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			case 6:
				var height = command[5];
				var width = command[4];
				var y3 = command[3];
				var x3 = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Ellipse;
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points = [x3,y3,width,height];
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			case 7:
				var height1 = command[5];
				var width1 = command[4];
				var y4 = command[3];
				var x4 = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Rectangle(false);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points = [x4,y4,width1,height1];
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			case 8:
				var ry = command[7];
				var rx = command[6];
				var height2 = command[5];
				var width2 = command[4];
				var y5 = command[3];
				var x5 = command[2];
				if(ry == -1) ry = rx;
				rx *= 0.5;
				ry *= 0.5;
				if(rx > width2 / 2) rx = width2 / 2;
				if(ry > height2 / 2) ry = height2 / 2;
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Rectangle(true);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points = [x5,y5,width2,height2,rx,ry];
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			case 11:
				openfl._internal.renderer.opengl.utils.PathBuiler.endFill();
				break;
			case 12:
				var miterLimit = command[9];
				var joints = command[8];
				var caps = command[7];
				var scaleMode = command[6];
				var pixelHinting = command[5];
				var alpha1 = command[4];
				var color = command[3];
				var thickness = command[2];
				openfl._internal.renderer.opengl.utils.PathBuiler.__line = new openfl._internal.renderer.opengl.utils.LineStyle();
				if(thickness == null || Math.isNaN(thickness) || thickness < 0) openfl._internal.renderer.opengl.utils.PathBuiler.__line.width = 0; else if(thickness == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__line.width = 1; else openfl._internal.renderer.opengl.utils.PathBuiler.__line.width = thickness;
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				if(color == null) openfl._internal.renderer.opengl.utils.PathBuiler.__line.color = 0; else openfl._internal.renderer.opengl.utils.PathBuiler.__line.color = color;
				if(alpha1 == null) openfl._internal.renderer.opengl.utils.PathBuiler.__line.alpha = 1; else openfl._internal.renderer.opengl.utils.PathBuiler.__line.alpha = alpha1;
				openfl._internal.renderer.opengl.utils.PathBuiler.__line.scaleMode = scaleMode;
				openfl._internal.renderer.opengl.utils.PathBuiler.__line.caps = caps;
				openfl._internal.renderer.opengl.utils.PathBuiler.__line.joints = joints;
				openfl._internal.renderer.opengl.utils.PathBuiler.__line.miterLimit = miterLimit;
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points = [];
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			case 15:
				var y6 = command[3];
				var x6 = command[2];
				openfl._internal.renderer.opengl.utils.PathBuiler.lineTo(x6,y6);
				break;
			case 16:
				var y7 = command[3];
				var x7 = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(x7);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(y7);
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			case 10:
				var blendMode = command[7];
				var colors = command[6];
				var culling = command[5];
				var uvtData = command[4];
				var indices = command[3];
				var vertices = command[2];
				var isColor;
				{
					var _g2 = openfl._internal.renderer.opengl.utils.PathBuiler.__fill;
					switch(_g2[1]) {
					case 1:
						isColor = true;
						break;
					default:
						isColor = false;
					}
				}
				if(isColor && uvtData != null) continue;
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				if(uvtData == null) {
					var this1;
					this1 = new openfl.VectorData();
					var this2;
					this2 = new Array(0);
					this1.data = this2;
					this1.length = 0;
					this1.fixed = false;
					uvtData = this1;
					{
						var _g21 = openfl._internal.renderer.opengl.utils.PathBuiler.__fill;
						switch(_g21[1]) {
						case 2:
							var b = _g21[2];
							var _g4 = 0;
							var _g3 = vertices.length / 2 | 0;
							while(_g4 < _g3) {
								var i = _g4++;
								if(!uvtData.fixed) {
									uvtData.length++;
									if(uvtData.data.length < uvtData.length) {
										var data;
										var this3;
										this3 = new Array(uvtData.data.length + 10);
										data = this3;
										haxe.ds._Vector.Vector_Impl_.blit(uvtData.data,0,data,0,uvtData.data.length);
										uvtData.data = data;
									}
									uvtData.data[uvtData.length - 1] = vertices.data[i * 2] / b.width;
								}
								uvtData.length;
								if(!uvtData.fixed) {
									uvtData.length++;
									if(uvtData.data.length < uvtData.length) {
										var data1;
										var this4;
										this4 = new Array(uvtData.data.length + 10);
										data1 = this4;
										haxe.ds._Vector.Vector_Impl_.blit(uvtData.data,0,data1,0,uvtData.data.length);
										uvtData.data = data1;
									}
									uvtData.data[uvtData.length - 1] = vertices.data[i * 2 + 1] / b.height;
								}
								uvtData.length;
							}
							break;
						default:
						}
					}
				}
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.DrawTriangles(vertices,indices,uvtData,culling,colors,blendMode);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable = false;
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			case 9:
				var count = command[6];
				var flags = command[5];
				var smooth1 = command[4];
				var tileData = command[3];
				var sheet = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex++;
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.DrawTiles(sheet,tileData,smooth1,flags,count);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable = false;
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			case 17:
				var winding = command[4];
				var data2 = command[3];
				var commands = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				switch(winding) {
				case openfl.display.GraphicsPathWinding.EVEN_ODD:
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding = 0;
					break;
				case openfl.display.GraphicsPathWinding.NON_ZERO:
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding = 1;
					break;
				default:
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding = 0;
				}
				var command1;
				var cx3;
				var cy3;
				var cx21;
				var cy21;
				var ax;
				var ay;
				var idx = 0;
				var _g31 = 0;
				var _g22 = commands.length;
				while(_g31 < _g22) {
					var i1 = _g31++;
					command1 = commands.data[i1];
					switch(command1) {
					case 1:
						ax = data2.data[idx];
						ay = data2.data[idx + 1];
						idx += 2;
						if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(ax);
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(ay);
						openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
						break;
					case 4:
						ax = data2.data[idx + 2];
						ay = data2.data[idx + 3];
						idx += 4;
						if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(ax);
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(ay);
						openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
						break;
					case 2:
						ax = data2.data[idx];
						ay = data2.data[idx + 1];
						idx += 2;
						openfl._internal.renderer.opengl.utils.PathBuiler.lineTo(ax,ay);
						break;
					case 5:
						ax = data2.data[idx + 2];
						ay = data2.data[idx + 3];
						idx += 4;
						openfl._internal.renderer.opengl.utils.PathBuiler.lineTo(ax,ay);
						break;
					case 3:
						cx3 = data2.data[idx];
						cy3 = data2.data[idx + 1];
						ax = data2.data[idx + 2];
						ay = data2.data[idx + 3];
						idx += 4;
						if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) {
							if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(0);
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(0);
							openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
						}
						openfl._internal.renderer.GraphicsPaths.curveTo(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points,cx3,cy3,ax,ay);
						break;
					case 6:
						cx3 = data2.data[idx];
						cy3 = data2.data[idx + 1];
						cx21 = data2.data[idx + 2];
						cy21 = data2.data[idx + 3];
						ax = data2.data[idx + 4];
						ay = data2.data[idx + 5];
						idx += 6;
						if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) {
							if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(0);
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(0);
							openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
						}
						openfl._internal.renderer.GraphicsPaths.cubicCurveTo(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points,cx3,cy3,cx21,cy21,ax,ay);
						break;
					default:
					}
				}
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding = 0;
				break;
			case 18:
				var m = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.OverrideMatrix(m);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable = false;
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			default:
			}
		}
		openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
	}
	graphics.__drawPaths = openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths;
	return glStack;
};
openfl._internal.renderer.opengl.utils.LineStyle = function() {
	this.width = 0;
	this.color = 0;
	this.alpha = 1;
	this.scaleMode = openfl.display.LineScaleMode.NORMAL;
	this.caps = openfl.display.CapsStyle.ROUND;
	this.joints = openfl.display.JointStyle.ROUND;
	this.miterLimit = 3;
};
$hxClasses["openfl._internal.renderer.opengl.utils.LineStyle"] = openfl._internal.renderer.opengl.utils.LineStyle;
openfl._internal.renderer.opengl.utils.LineStyle.__name__ = ["openfl","_internal","renderer","opengl","utils","LineStyle"];
openfl._internal.renderer.opengl.utils.LineStyle.prototype = {
	__class__: openfl._internal.renderer.opengl.utils.LineStyle
};
openfl._internal.renderer.opengl.utils.FillType = $hxClasses["openfl._internal.renderer.opengl.utils.FillType"] = { __ename__ : ["openfl","_internal","renderer","opengl","utils","FillType"], __constructs__ : ["None","Color","Texture","Gradient"] };
openfl._internal.renderer.opengl.utils.FillType.None = ["None",0];
openfl._internal.renderer.opengl.utils.FillType.None.toString = $estr;
openfl._internal.renderer.opengl.utils.FillType.None.__enum__ = openfl._internal.renderer.opengl.utils.FillType;
openfl._internal.renderer.opengl.utils.FillType.Color = function(color,alpha) { var $x = ["Color",1,color,alpha]; $x.__enum__ = openfl._internal.renderer.opengl.utils.FillType; $x.toString = $estr; return $x; };
openfl._internal.renderer.opengl.utils.FillType.Texture = function(bitmap,matrix,repeat,smooth) { var $x = ["Texture",2,bitmap,matrix,repeat,smooth]; $x.__enum__ = openfl._internal.renderer.opengl.utils.FillType; $x.toString = $estr; return $x; };
openfl._internal.renderer.opengl.utils.FillType.Gradient = ["Gradient",3];
openfl._internal.renderer.opengl.utils.FillType.Gradient.toString = $estr;
openfl._internal.renderer.opengl.utils.FillType.Gradient.__enum__ = openfl._internal.renderer.opengl.utils.FillType;
openfl._internal.renderer.opengl.utils.FilterManager = function(gl,transparent) {
	this.transparent = transparent;
	this.filterStack = [];
	this.offsetX = 0;
	this.offsetY = 0;
	this.setContext(gl);
};
$hxClasses["openfl._internal.renderer.opengl.utils.FilterManager"] = openfl._internal.renderer.opengl.utils.FilterManager;
openfl._internal.renderer.opengl.utils.FilterManager.__name__ = ["openfl","_internal","renderer","opengl","utils","FilterManager"];
openfl._internal.renderer.opengl.utils.FilterManager.prototype = {
	begin: function(renderSession,buffer) {
		this.renderSession = renderSession;
		this.defaultShader = renderSession.shaderManager.defaultShader;
		this.width = 0;
		this.height = 0;
		this.buffer = buffer;
	}
	,initShaderBuffers: function() {
		var gl = this.gl;
		this.vertexBuffer = gl.createBuffer();
		this.uvBuffer = gl.createBuffer();
		this.colorBuffer = gl.createBuffer();
		this.indexBuffer = gl.createBuffer();
		var array = [0.0,0.0,1.0,0.0,0.0,1.0,1.0,1.0];
		var this1;
		if(array != null) this1 = new Float32Array(array); else this1 = null;
		this.vertexArray = this1;
		gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER,this.vertexArray,gl.STATIC_DRAW);
		var array1 = [0.0,0.0,1.0,0.0,0.0,1.0,1.0,1.0];
		var this2;
		if(array1 != null) this2 = new Float32Array(array1); else this2 = null;
		this.uvArray = this2;
		gl.bindBuffer(gl.ARRAY_BUFFER,this.uvBuffer);
		gl.bufferData(gl.ARRAY_BUFFER,this.uvArray,gl.STATIC_DRAW);
		var array2 = [1.0,16777215,1.0,16777215,1.0,16777215,1.0,16777215];
		var this3;
		if(array2 != null) this3 = new Float32Array(array2); else this3 = null;
		this.colorArray = this3;
		gl.bindBuffer(gl.ARRAY_BUFFER,this.colorBuffer);
		gl.bufferData(gl.ARRAY_BUFFER,this.colorArray,gl.STATIC_DRAW);
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,(function($this) {
			var $r;
			var array3 = [0,1,2,1,3,2];
			var this4;
			if(array3 != null) this4 = new Uint16Array(array3); else this4 = null;
			$r = this4;
			return $r;
		}(this)),gl.STATIC_DRAW);
	}
	,setContext: function(gl) {
		this.gl = gl;
		this.texturePool = [];
		this.initShaderBuffers();
	}
	,__class__: openfl._internal.renderer.opengl.utils.FilterManager
};
openfl._internal.renderer.opengl.utils.FilterTexture = function() { };
$hxClasses["openfl._internal.renderer.opengl.utils.FilterTexture"] = openfl._internal.renderer.opengl.utils.FilterTexture;
openfl._internal.renderer.opengl.utils.FilterTexture.__name__ = ["openfl","_internal","renderer","opengl","utils","FilterTexture"];
openfl._internal.renderer.opengl.utils.FilterTexture.prototype = {
	destroy: function() {
		this.gl.deleteFramebuffer(this.frameBuffer);
		this.gl.deleteTexture(this.texture);
		this.frameBuffer = null;
		this.texture = null;
	}
	,__class__: openfl._internal.renderer.opengl.utils.FilterTexture
};
openfl._internal.renderer.opengl.utils.GLMaskManager = function(renderSession) {
	openfl._internal.renderer.AbstractMaskManager.call(this,renderSession);
	this.setContext(renderSession.gl);
};
$hxClasses["openfl._internal.renderer.opengl.utils.GLMaskManager"] = openfl._internal.renderer.opengl.utils.GLMaskManager;
openfl._internal.renderer.opengl.utils.GLMaskManager.__name__ = ["openfl","_internal","renderer","opengl","utils","GLMaskManager"];
openfl._internal.renderer.opengl.utils.GLMaskManager.__super__ = openfl._internal.renderer.AbstractMaskManager;
openfl._internal.renderer.opengl.utils.GLMaskManager.prototype = $extend(openfl._internal.renderer.AbstractMaskManager.prototype,{
	pushMask: function(mask) {
		this.renderSession.stencilManager.pushMask(mask,this.renderSession);
	}
	,popMask: function() {
		this.renderSession.stencilManager.popMask(null,this.renderSession);
	}
	,setContext: function(gl) {
		if(this.renderSession != null) this.renderSession.gl = gl;
		this.gl = gl;
	}
	,__class__: openfl._internal.renderer.opengl.utils.GLMaskManager
});
openfl._internal.renderer.opengl.utils.VertexAttribute = function(components,type,normalized,name,defaultValue) {
	if(normalized == null) normalized = false;
	this.enabled = true;
	this.normalized = false;
	this.components = components;
	this.type = type;
	this.normalized = normalized;
	this.name = name;
	if(defaultValue == null) {
		var this1;
		if(components != null) this1 = new Float32Array(components); else this1 = null;
		this.defaultValue = this1;
	} else this.defaultValue = defaultValue;
};
$hxClasses["openfl._internal.renderer.opengl.utils.VertexAttribute"] = openfl._internal.renderer.opengl.utils.VertexAttribute;
openfl._internal.renderer.opengl.utils.VertexAttribute.__name__ = ["openfl","_internal","renderer","opengl","utils","VertexAttribute"];
openfl._internal.renderer.opengl.utils.VertexAttribute.prototype = {
	copy: function() {
		return new openfl._internal.renderer.opengl.utils.VertexAttribute(this.components,this.type,this.normalized,this.name,this.defaultValue);
	}
	,getElementsBytes: function() {
		var _g = this.type;
		switch(_g) {
		case 5120:case 5121:
			return 1;
		case 5122:case 5123:
			return 2;
		default:
			return 4;
		}
	}
	,__class__: openfl._internal.renderer.opengl.utils.VertexAttribute
};
openfl.geom.Rectangle = function(x,y,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["openfl.geom.Rectangle"] = openfl.geom.Rectangle;
openfl.geom.Rectangle.__name__ = ["openfl","geom","Rectangle"];
openfl.geom.Rectangle.prototype = {
	clone: function() {
		return new openfl.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,contains: function(x,y) {
		return x >= this.x && y >= this.y && x < this.get_right() && y < this.get_bottom();
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,copyFrom: function(sourceRect) {
		this.x = sourceRect.x;
		this.y = sourceRect.y;
		this.width = sourceRect.width;
		this.height = sourceRect.height;
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,setTo: function(xa,ya,widtha,heighta) {
		this.x = xa;
		this.y = ya;
		this.width = widtha;
		this.height = heighta;
	}
	,__expand: function(x,y,width,height) {
		if(this.width == 0 && this.height == 0) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			return;
		}
		var cacheRight = this.get_right();
		var cacheBottom = this.get_bottom();
		if(this.x > x) {
			this.x = x;
			this.width = cacheRight - x;
		}
		if(this.y > y) {
			this.y = y;
			this.height = cacheBottom - y;
		}
		if(cacheRight < x + width) this.width = x + width - this.x;
		if(cacheBottom < y + height) this.height = y + height - this.y;
	}
	,__toLimeRectangle: function() {
		return new lime.math.Rectangle(this.x,this.y,this.width,this.height);
	}
	,__transform: function(rect,m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = ty0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		rect.setTo(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,get_left: function() {
		return this.x;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,get_top: function() {
		return this.y;
	}
	,get_topLeft: function() {
		return new openfl.geom.Point(this.x,this.y);
	}
	,__class__: openfl.geom.Rectangle
	,__properties__: {get_topLeft:"get_topLeft",get_top:"get_top",get_right:"get_right",get_left:"get_left",get_bottom:"get_bottom"}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer = function() { };
$hxClasses["openfl._internal.renderer.opengl.utils.GraphicsRenderer"] = openfl._internal.renderer.opengl.utils.GraphicsRenderer;
openfl._internal.renderer.opengl.utils.GraphicsRenderer.__name__ = ["openfl","_internal","renderer","opengl","utils","GraphicsRenderer"];
openfl._internal.renderer.opengl.utils.GraphicsRenderer.overrideMatrix = null;
openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildCircle = function(path,glStack,localCoords) {
	if(localCoords == null) localCoords = false;
	var rectData = path.points;
	var x = rectData[0];
	var y = rectData[1];
	var rx = rectData[2];
	var ry;
	if(rectData.length == 3) ry = rx; else ry = rectData[3];
	if(path.type == openfl._internal.renderer.opengl.utils.GraphicType.Ellipse) {
		rx /= 2;
		ry /= 2;
		x += rx;
		y += ry;
	}
	if(localCoords) {
		x -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.x;
		y -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.y;
	}
	var totalSegs = 40;
	var seg = Math.PI * 2 / totalSegs;
	var bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareBucket(path,glStack);
	var fill = bucket.getData(openfl._internal.renderer.opengl.utils.BucketDataType.Fill);
	if(fill != null) {
		var verts = fill.verts;
		var indices = fill.indices;
		var vertPos = verts.length / 2 | 0;
		indices.push(vertPos);
		var _g1 = 0;
		var _g = totalSegs + 1;
		while(_g1 < _g) {
			var i = _g1++;
			verts.push(x);
			verts.push(y);
			verts.push(x + Math.sin(seg * i) * rx);
			verts.push(y + Math.cos(seg * i) * ry);
			indices.push(vertPos++);
			indices.push(vertPos++);
		}
		indices.push(vertPos - 1);
	}
	if(path.line.width > 0) {
		var tempPoints = path.points;
		path.points = [];
		openfl._internal.renderer.GraphicsPaths.ellipse(path.points,x,y,rx,ry,totalSegs);
		openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildLine(path,bucket);
		path.points = tempPoints;
	}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildComplexPoly = function(path,glStack,localCoords) {
	if(localCoords == null) localCoords = false;
	var bucket = null;
	if(path.points.length >= 6) {
		var points = path.points.slice();
		if(localCoords) {
			var _g1 = 0;
			var _g = points.length / 2 | 0;
			while(_g1 < _g) {
				var i = _g1++;
				points[i * 2] -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.x;
				points[i * 2 + 1] -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.y;
			}
		}
		bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareBucket(path,glStack);
		var fill = bucket.getData(openfl._internal.renderer.opengl.utils.BucketDataType.Fill);
		fill.drawMode = glStack.gl.TRIANGLE_FAN;
		fill.verts = points;
		var indices = fill.indices;
		var length = points.length / 2 | 0;
		var _g2 = 0;
		while(_g2 < length) {
			var i1 = _g2++;
			indices.push(i1);
		}
	}
	if(path.line.width > 0) {
		if(bucket == null) bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareBucket(path,glStack);
		openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildLine(path,bucket,localCoords);
	}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildLine = function(path,bucket,localCoords) {
	if(localCoords == null) localCoords = false;
	var points = path.points;
	if(points.length == 0) return;
	var line = bucket.getData(openfl._internal.renderer.opengl.utils.BucketDataType.Line);
	if(localCoords) {
		var _g1 = 0;
		var _g = points.length / 2 | 0;
		while(_g1 < _g) {
			var i = _g1++;
			points[i * 2] -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.x;
			points[i * 2 + 1] -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.y;
		}
	}
	var firstPoint = new openfl.geom.Point(points[0],points[1]);
	var lastPoint = new openfl.geom.Point(points[points.length - 2 | 0],points[points.length - 1 | 0]);
	if(firstPoint.x == lastPoint.x && firstPoint.y == lastPoint.y) {
		points = points.slice();
		points.pop();
		points.pop();
		lastPoint = new openfl.geom.Point(points[points.length - 2 | 0],points[points.length - 1 | 0]);
		var midPointX = lastPoint.x + (firstPoint.x - lastPoint.x) * 0.5;
		var midPointY = lastPoint.y + (firstPoint.y - lastPoint.y) * 0.5;
		points.unshift(midPointY);
		points.unshift(midPointX);
		points.push(midPointX);
		points.push(midPointY);
	}
	var verts = line.verts;
	var indices = line.indices;
	var length = points.length / 2 | 0;
	var indexCount = points.length;
	var indexStart = verts.length / 6 | 0;
	var width = path.line.width / 2;
	var color = openfl._internal.renderer.opengl.utils.GraphicsRenderer.hex2rgb(path.line.color);
	var alpha = path.line.alpha;
	var r = color[0];
	var g = color[1];
	var b = color[2];
	var px;
	var py;
	var p1x;
	var p1y;
	var p2x;
	var p2y;
	var p3x;
	var p3y;
	var perpx;
	var perpy;
	var perp2x;
	var perp2y;
	var perp3x;
	var perp3y;
	var a1;
	var b1;
	var c1;
	var a2;
	var b2;
	var c2;
	var denom;
	var pdist;
	var dist;
	p1x = points[0];
	p1y = points[1];
	p2x = points[2];
	p2y = points[3];
	perpx = -(p1y - p2y);
	perpy = p1x - p2x;
	dist = Math.sqrt(Math.abs(perpx * perpx + perpy * perpy));
	perpx = perpx / dist;
	perpy = perpy / dist;
	perpx = perpx * width;
	perpy = perpy * width;
	verts.push(p1x - perpx);
	verts.push(p1y - perpy);
	verts.push(r);
	verts.push(g);
	verts.push(b);
	verts.push(alpha);
	verts.push(p1x + perpx);
	verts.push(p1y + perpy);
	verts.push(r);
	verts.push(g);
	verts.push(b);
	verts.push(alpha);
	var _g11 = 1;
	var _g2 = length - 1;
	while(_g11 < _g2) {
		var i1 = _g11++;
		p1x = points[(i1 - 1) * 2];
		p1y = points[(i1 - 1) * 2 + 1];
		p2x = points[i1 * 2];
		p2y = points[i1 * 2 + 1];
		p3x = points[(i1 + 1) * 2];
		p3y = points[(i1 + 1) * 2 + 1];
		perpx = -(p1y - p2y);
		perpy = p1x - p2x;
		dist = Math.sqrt(Math.abs(perpx * perpx + perpy * perpy));
		perpx = perpx / dist;
		perpy = perpy / dist;
		perpx = perpx * width;
		perpy = perpy * width;
		perp2x = -(p2y - p3y);
		perp2y = p2x - p3x;
		dist = Math.sqrt(Math.abs(perp2x * perp2x + perp2y * perp2y));
		perp2x = perp2x / dist;
		perp2y = perp2y / dist;
		perp2x = perp2x * width;
		perp2y = perp2y * width;
		a1 = -perpy + p1y - (-perpy + p2y);
		b1 = -perpx + p2x - (-perpx + p1x);
		c1 = (-perpx + p1x) * (-perpy + p2y) - (-perpx + p2x) * (-perpy + p1y);
		a2 = -perp2y + p3y - (-perp2y + p2y);
		b2 = -perp2x + p2x - (-perp2x + p3x);
		c2 = (-perp2x + p3x) * (-perp2y + p2y) - (-perp2x + p2x) * (-perp2y + p3y);
		denom = a1 * b2 - a2 * b1;
		if(Math.abs(denom) < 0.1) {
			denom += 10.1;
			verts.push(p2x - perpx);
			verts.push(p2y - perpy);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			verts.push(p2x + perpx);
			verts.push(p2y + perpy);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			continue;
		}
		px = (b1 * c2 - b2 * c1) / denom;
		py = (a2 * c1 - a1 * c2) / denom;
		pdist = (px - p2x) * (px - p2x) + (py - p2y) + (py - p2y);
		if(pdist > 19600) {
			perp3x = perpx - perp2x;
			perp3y = perpy - perp2y;
			dist = Math.sqrt(Math.abs(perp3x * perp3x + perp3y * perp3y));
			perp3x = perp3x / dist;
			perp3y = perp3y / dist;
			perp3x = perp3x * width;
			perp3y = perp3y * width;
			verts.push(p2x - perp3x);
			verts.push(p2y - perp3y);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			verts.push(p2x + perp3x);
			verts.push(p2y + perp3y);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			verts.push(p2x - perp3x);
			verts.push(p2y - perp3y);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			indexCount++;
		} else {
			verts.push(px);
			verts.push(py);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			verts.push(p2x - (px - p2x));
			verts.push(p2y - (py - p2y));
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
		}
	}
	p1x = points[(length - 2) * 2];
	p1y = points[(length - 2) * 2 + 1];
	p2x = points[(length - 1) * 2];
	p2y = points[(length - 1) * 2 + 1];
	perpx = -(p1y - p2y);
	perpy = p1x - p2x;
	dist = Math.sqrt(Math.abs(perpx * perpx + perpy * perpy));
	if(!Math.isFinite(dist)) console.log(perpx * perpx + perpy * perpy);
	perpx = perpx / dist;
	perpy = perpy / dist;
	perpx = perpx * width;
	perpy = perpy * width;
	verts.push(p2x - perpx);
	verts.push(p2y - perpy);
	verts.push(r);
	verts.push(g);
	verts.push(b);
	verts.push(alpha);
	verts.push(p2x + perpx);
	verts.push(p2y + perpy);
	verts.push(r);
	verts.push(g);
	verts.push(b);
	verts.push(alpha);
	indices.push(indexStart);
	var _g3 = 0;
	while(_g3 < indexCount) {
		var i2 = _g3++;
		indices.push(indexStart++);
	}
	indices.push(indexStart - 1);
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildRectangle = function(path,glStack,localCoords) {
	if(localCoords == null) localCoords = false;
	var rectData = path.points;
	var x = rectData[0];
	var y = rectData[1];
	var width = rectData[2];
	var height = rectData[3];
	if(localCoords) {
		x -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.x;
		y -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.y;
	}
	var bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareBucket(path,glStack);
	var fill = bucket.getData(openfl._internal.renderer.opengl.utils.BucketDataType.Fill);
	if(fill != null) {
		var verts = fill.verts;
		var indices = fill.indices;
		var vertPos = verts.length / 2 | 0;
		verts.push(x);
		verts.push(y);
		verts.push(x + width);
		verts.push(y);
		verts.push(x);
		verts.push(y + height);
		verts.push(x + width);
		verts.push(y + height);
		indices.push(vertPos);
		indices.push(vertPos);
		indices.push(vertPos + 1);
		indices.push(vertPos + 2);
		indices.push(vertPos + 3);
		indices.push(vertPos + 3);
	}
	if(path.line.width > 0) {
		var tempPoints = path.points;
		path.points = [x,y,x + width,y,x + width,y + height,x,y + height,x,y];
		openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildLine(path,bucket);
		path.points = tempPoints;
	}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildRoundedRectangle = function(path,glStack,localCoords) {
	if(localCoords == null) localCoords = false;
	var points = path.points.slice();
	var x = points[0];
	var y = points[1];
	var width = points[2];
	var height = points[3];
	var rx = points[4];
	var ry = points[5];
	if(localCoords) {
		x -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.x;
		y -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.y;
	}
	var recPoints = [];
	openfl._internal.renderer.GraphicsPaths.roundRectangle(recPoints,x,y,width,height,rx,ry);
	var bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareBucket(path,glStack);
	var fill = bucket.getData(openfl._internal.renderer.opengl.utils.BucketDataType.Fill);
	if(fill != null) {
		var verts = fill.verts;
		var indices = fill.indices;
		var vecPos = verts.length / 2;
		var triangles = new Array();
		openfl._internal.renderer.PolyK.triangulate(triangles,recPoints);
		var i = 0;
		while(i < triangles.length) {
			indices.push(triangles[i] + vecPos | 0);
			indices.push(triangles[i] + vecPos | 0);
			indices.push(triangles[i + 1] + vecPos | 0);
			indices.push(triangles[i + 2] + vecPos | 0);
			indices.push(triangles[i + 2] + vecPos | 0);
			i += 3;
		}
		i = 0;
		while(i < recPoints.length) {
			verts.push(recPoints[i]);
			verts.push(recPoints[++i]);
			i++;
		}
	}
	if(path.line.width > 0) {
		var tempPoints = path.points;
		path.points = recPoints;
		openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildLine(path,bucket);
		path.points = tempPoints;
	}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildDrawTriangles = function(path,object,glStack,localCoords) {
	if(localCoords == null) localCoords = false;
	var args = path.type.slice(2);
	var vertices = args[0];
	var indices = args[1];
	var uvtData = args[2];
	var culling = args[3];
	var colors = args[4];
	var blendMode = args[5];
	var a;
	var b;
	var c;
	var d;
	var tx;
	var ty;
	if(localCoords) {
		a = 1.0;
		b = 0.0;
		c = 0.0;
		d = 1.0;
		tx = 0.0;
		ty = 0.0;
	} else {
		a = object.__worldTransform.a;
		b = object.__worldTransform.b;
		c = object.__worldTransform.c;
		d = object.__worldTransform.d;
		tx = object.__worldTransform.tx;
		ty = object.__worldTransform.ty;
	}
	var hasColors = colors != null && colors.length > 0;
	var bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareBucket(path,glStack);
	var fill = bucket.getData(openfl._internal.renderer.opengl.utils.BucketDataType.Fill);
	var colorAttrib = fill.vertexArray.attributes[2];
	colorAttrib.enabled = hasColors;
	var array = [1,1,1,1];
	var this1;
	if(array != null) this1 = new Float32Array(array); else this1 = null;
	colorAttrib.defaultValue = this1;
	fill.rawVerts = true;
	fill.glLength = indices.length;
	fill.stride = Std["int"](fill.vertexArray.get_stride() / 4);
	var vertsLength = fill.glLength * fill.stride;
	var verts;
	if(fill.glVerts == null || fill.glVerts.length < vertsLength) {
		var this2;
		if(vertsLength != null) this2 = new Float32Array(vertsLength); else this2 = null;
		verts = this2;
		fill.glVerts = verts;
	} else verts = fill.glVerts;
	var glColors;
	var buffer = verts.buffer;
	var this3;
	if(buffer != null) this3 = new Uint32Array(buffer,0); else this3 = null;
	glColors = this3;
	var v0 = 0;
	var v1 = 0;
	var v2 = 0;
	var i0 = 0;
	var i1 = 0;
	var i2 = 0;
	var x0 = 0.0;
	var y0 = 0.0;
	var x1 = 0.0;
	var y1 = 0.0;
	var x2 = 0.0;
	var y2 = 0.0;
	var idx = 0;
	var _g1 = 0;
	var _g = indices.length / 3 | 0;
	while(_g1 < _g) {
		var i = _g1++;
		i0 = indices.data[i * 3];
		i1 = indices.data[i * 3 + 1];
		i2 = indices.data[i * 3 + 2];
		v0 = i0 * 2;
		v1 = i1 * 2;
		v2 = i2 * 2;
		x0 = vertices.data[v0];
		y0 = vertices.data[v0 + 1];
		x1 = vertices.data[v1];
		y1 = vertices.data[v1 + 1];
		x2 = vertices.data[v2];
		y2 = vertices.data[v2 + 1];
		if(localCoords) {
			x0 -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.x;
			y0 -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.y;
			x1 -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.x;
			y1 -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.y;
			x2 -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.x;
			y2 -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.y;
		}
		switch(culling[1]) {
		case 2:
			if(!((x1 - x0) * (y2 - y0) - (y1 - y0) * (x2 - x0) < 0)) continue;
			break;
		case 0:
			if((x1 - x0) * (y2 - y0) - (y1 - y0) * (x2 - x0) < 0) continue;
			break;
		default:
		}
		var idx1 = idx++;
		verts[idx1] = a * x0 + c * y0 + tx;
		var idx2 = idx++;
		verts[idx2] = b * x0 + d * y0 + ty;
		var idx3 = idx++;
		verts[idx3] = uvtData.data[v0];
		var idx4 = idx++;
		verts[idx4] = uvtData.data[v0 + 1];
		if(hasColors) {
			var idx5 = idx++;
			glColors[idx5] = colors.data[i0];
		}
		var idx6 = idx++;
		verts[idx6] = a * x1 + c * y1 + tx;
		var idx7 = idx++;
		verts[idx7] = b * x1 + d * y1 + ty;
		var idx8 = idx++;
		verts[idx8] = uvtData.data[v1];
		var idx9 = idx++;
		verts[idx9] = uvtData.data[v1 + 1];
		if(hasColors) {
			var idx10 = idx++;
			glColors[idx10] = colors.data[i1];
		}
		var idx11 = idx++;
		verts[idx11] = a * x2 + c * y2 + tx;
		var idx12 = idx++;
		verts[idx12] = b * x2 + d * y2 + ty;
		var idx13 = idx++;
		verts[idx13] = uvtData.data[v2];
		var idx14 = idx++;
		verts[idx14] = uvtData.data[v2 + 1];
		if(hasColors) {
			var idx15 = idx++;
			glColors[idx15] = colors.data[i2];
		}
	}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.render = function(object,renderSession) {
	var graphics = object.__graphics;
	var spritebatch = renderSession.spriteBatch;
	var dirty = graphics.__dirty;
	if(graphics.__commands.length <= 0) return;
	if(dirty) openfl._internal.renderer.opengl.utils.GraphicsRenderer.updateGraphics(object,object.__graphics,renderSession.gl,object.cacheAsBitmap);
	openfl._internal.renderer.opengl.utils.GraphicsRenderer.renderGraphics(object,renderSession,false);
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.renderGraphics = function(object,renderSession,localCoords) {
	if(localCoords == null) localCoords = false;
	var graphics = object.__graphics;
	var gl = renderSession.gl;
	var glStack = graphics.__glStack[openfl._internal.renderer.opengl.GLRenderer.glContextId];
	var bucket;
	var translationMatrix;
	if(localCoords) translationMatrix = openfl.geom.Matrix.__identity; else translationMatrix = object.__worldTransform;
	var clipRect = renderSession.spriteBatch.clipRect;
	var batchDrawing = renderSession.spriteBatch.drawing;
	batchDrawing = renderSession.spriteBatch.drawing;
	var _g1 = 0;
	var _g = glStack.buckets.length;
	while(_g1 < _g) {
		var i = _g1++;
		batchDrawing = renderSession.spriteBatch.drawing;
		if(batchDrawing && !localCoords) renderSession.spriteBatch.finish();
		renderSession.blendModeManager.setBlendMode(object.__blendMode);
		if(clipRect != null) {
			gl.enable(gl.SCISSOR_TEST);
			gl.scissor(Math.floor(clipRect.x),Math.floor(clipRect.y),Math.floor(clipRect.width),Math.floor(clipRect.height));
		}
		bucket = glStack.buckets[i];
		var _g2 = bucket.mode;
		switch(_g2[1]) {
		case 1:case 2:
			renderSession.stencilManager.pushBucket(bucket,renderSession,translationMatrix.toArray(true));
			var shader = openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareShader(bucket,renderSession,object,translationMatrix.toArray(true));
			openfl._internal.renderer.opengl.utils.GraphicsRenderer.renderFill(bucket,shader,renderSession);
			renderSession.stencilManager.popBucket(object,bucket,renderSession);
			break;
		case 5:
			var shader1 = openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareShader(bucket,renderSession,object,null);
			openfl._internal.renderer.opengl.utils.GraphicsRenderer.renderDrawTriangles(bucket,shader1,renderSession);
			break;
		case 6:
			if(!batchDrawing) renderSession.spriteBatch.begin(renderSession,clipRect);
			var args = bucket.graphicType.slice(2);
			renderSession.spriteBatch.renderTiles(object,args[0],args[1],args[2],args[3],args[4]);
			renderSession.spriteBatch.finish();
			break;
		default:
		}
		var ct = object.__worldColorTransform;
		var _g21 = 0;
		var _g3 = bucket.lines;
		while(_g21 < _g3.length) {
			var line = _g3[_g21];
			++_g21;
			if(line != null && line.verts.length > 0) {
				var shader2 = renderSession.shaderManager.primitiveShader;
				renderSession.shaderManager.setShader(shader2);
				gl.uniformMatrix3fv(shader2.getUniformLocation("uTranslationMatrix"),false,translationMatrix.toArray(true));
				gl.uniformMatrix3fv(shader2.getUniformLocation("uProjectionMatrix"),false,renderSession.projectionMatrix.toArray(true));
				gl.uniform1f(shader2.getUniformLocation("uAlpha"),1);
				gl.uniform4f(shader2.getUniformLocation("uColorMultiplier"),ct.redMultiplier,ct.greenMultiplier,ct.blueMultiplier,ct.alphaMultiplier);
				gl.uniform4f(shader2.getUniformLocation("uColorOffset"),ct.redOffset / 255,ct.greenOffset / 255,ct.blueOffset / 255,ct.alphaOffset / 255);
				line.vertexArray.bind();
				shader2.bindVertexArray(line.vertexArray);
				gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,line.indexBuffer);
				gl.drawElements(gl.TRIANGLE_STRIP,line.indices.length,gl.UNSIGNED_SHORT,0);
			}
		}
		if(clipRect != null) gl.disable(gl.SCISSOR_TEST);
		batchDrawing = renderSession.spriteBatch.drawing;
		if(!batchDrawing && !localCoords) renderSession.spriteBatch.begin(renderSession,clipRect);
	}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.updateGraphics = function(object,graphics,gl,localCoords) {
	if(localCoords == null) localCoords = false;
	openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectPosition.setTo(object.get_x(),object.get_y());
	if(graphics.__bounds == null) openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds = new openfl.geom.Rectangle(); else openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.copyFrom(graphics.__bounds);
	var glStack = null;
	if(graphics.__dirty) glStack = openfl._internal.renderer.opengl.utils.DrawPath.getStack(graphics,gl);
	graphics.set___dirty(false);
	var _g = 0;
	var _g1 = glStack.buckets;
	while(_g < _g1.length) {
		var data = _g1[_g];
		++_g;
		data.reset();
		openfl._internal.renderer.opengl.utils.GraphicsRenderer.bucketPool.push(data);
	}
	glStack.reset();
	var _g11 = glStack.lastIndex;
	var _g2 = graphics.__drawPaths.length;
	while(_g11 < _g2) {
		var i = _g11++;
		var path = graphics.__drawPaths[i];
		{
			var _g21 = path.type;
			switch(_g21[1]) {
			case 0:
				openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildComplexPoly(path,glStack,localCoords);
				break;
			case 1:
				var rounded = _g21[2];
				if(rounded) openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildRoundedRectangle(path,glStack,localCoords); else openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildRectangle(path,glStack,localCoords);
				break;
			case 2:case 3:
				openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildCircle(path,glStack,localCoords);
				break;
			case 4:
				openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildDrawTriangles(path,object,glStack,localCoords);
				break;
			case 5:
				openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareBucket(path,glStack);
				break;
			case 6:
				var m = _g21[2];
				openfl._internal.renderer.opengl.utils.GraphicsRenderer.overrideMatrix = m;
				break;
			}
		}
		glStack.lastIndex++;
	}
	var _g3 = 0;
	var _g12 = glStack.buckets;
	while(_g3 < _g12.length) {
		var bucket = _g12[_g3];
		++_g3;
		if(bucket.uploadTileBuffer) bucket.uploadTile(Math.ceil(openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.get_left()),Math.ceil(openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.get_top()),Math.floor(openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.get_right()),Math.floor(openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.get_bottom()));
		bucket.optimize();
	}
	glStack.upload();
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareBucket = function(path,glStack) {
	var bucket = null;
	{
		var _g = path.fill;
		switch(_g[1]) {
		case 1:
			var a = _g[3];
			var c = _g[2];
			bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.switchBucket(path.fillIndex,glStack,openfl._internal.renderer.opengl.utils.BucketMode.Fill);
			if(c == null) bucket.color = [1,1,1]; else bucket.color = [(c >> 16 & 255) / 255,(c >> 8 & 255) / 255,(c & 255) / 255];
			bucket.color[3] = a;
			bucket.uploadTileBuffer = true;
			break;
		case 2:
			var s = _g[5];
			var r = _g[4];
			var m = _g[3];
			var b = _g[2];
			bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.switchBucket(path.fillIndex,glStack,openfl._internal.renderer.opengl.utils.BucketMode.PatternFill);
			bucket.bitmap = b;
			bucket.textureRepeat = r;
			bucket.textureSmooth = s;
			bucket.texture = b.getTexture(glStack.gl);
			bucket.uploadTileBuffer = true;
			var pMatrix;
			if(m == null) pMatrix = new openfl.geom.Matrix(); else pMatrix = new openfl.geom.Matrix(m.a,m.b,m.c,m.d,m.tx,m.ty);
			pMatrix.invert();
			pMatrix.scale(1 / b.width,1 / b.height);
			var tx = pMatrix.tx;
			var ty = pMatrix.ty;
			pMatrix.tx = 0;
			pMatrix.ty = 0;
			bucket.textureTL.x = tx;
			bucket.textureTL.y = ty;
			bucket.textureBR.x = tx + 1;
			bucket.textureBR.y = ty + 1;
			bucket.textureMatrix = pMatrix;
			break;
		default:
			bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.switchBucket(path.fillIndex,glStack,openfl._internal.renderer.opengl.utils.BucketMode.Line);
			bucket.uploadTileBuffer = false;
		}
	}
	{
		var _g1 = path.type;
		switch(_g1[1]) {
		case 4:
			bucket.mode = openfl._internal.renderer.opengl.utils.BucketMode.DrawTriangles;
			bucket.uploadTileBuffer = false;
			break;
		case 5:
			bucket.mode = openfl._internal.renderer.opengl.utils.BucketMode.DrawTiles;
			bucket.uploadTileBuffer = false;
			break;
		default:
		}
	}
	bucket.graphicType = path.type;
	bucket.overrideMatrix = openfl._internal.renderer.opengl.utils.GraphicsRenderer.overrideMatrix;
	return bucket;
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.getBucket = function(glStack,mode) {
	var b = openfl._internal.renderer.opengl.utils.GraphicsRenderer.bucketPool.pop();
	if(b == null) b = new openfl._internal.renderer.opengl.utils.GLBucket(glStack.gl);
	b.mode = mode;
	glStack.buckets.push(b);
	return b;
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.switchBucket = function(fillIndex,glStack,mode) {
	var bucket = null;
	var _g = 0;
	var _g1 = glStack.buckets;
	while(_g < _g1.length) {
		var b = _g1[_g];
		++_g;
		if(b.fillIndex == fillIndex) {
			bucket = b;
			break;
		}
	}
	if(bucket == null) bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.getBucket(glStack,mode);
	bucket.dirty = true;
	bucket.fillIndex = fillIndex;
	return bucket;
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareShader = function(bucket,renderSession,object,translationMatrix) {
	var gl = renderSession.gl;
	var shader = null;
	var _g = bucket.mode;
	switch(_g[1]) {
	case 1:
		shader = renderSession.shaderManager.fillShader;
		break;
	case 2:
		shader = renderSession.shaderManager.patternFillShader;
		break;
	case 5:
		shader = renderSession.shaderManager.drawTrianglesShader;
		break;
	default:
		shader = null;
	}
	if(shader == null) return null;
	var newShader = renderSession.shaderManager.setShader(shader);
	gl.uniform1f(shader.getUniformLocation("uAlpha"),object.__worldAlpha);
	gl.uniformMatrix3fv(shader.getUniformLocation("uProjectionMatrix"),false,renderSession.projectionMatrix.toArray(true));
	var ct = object.__worldColorTransform;
	gl.uniform4f(shader.getUniformLocation("uColorMultiplier"),ct.redMultiplier,ct.greenMultiplier,ct.blueMultiplier,ct.alphaMultiplier);
	gl.uniform4f(shader.getUniformLocation("uColorOffset"),ct.redOffset / 255,ct.greenOffset / 255,ct.blueOffset / 255,ct.alphaOffset / 255);
	var _g1 = bucket.mode;
	switch(_g1[1]) {
	case 1:
		gl.uniformMatrix3fv(shader.getUniformLocation("uTranslationMatrix"),false,translationMatrix);
		gl.uniform4fv(shader.getUniformLocation("uColor"),(function($this) {
			var $r;
			var array = bucket.color;
			var this1;
			if(array != null) this1 = new Float32Array(array); else this1 = null;
			$r = this1;
			return $r;
		}(this)));
		break;
	case 2:
		gl.uniformMatrix3fv(shader.getUniformLocation("uTranslationMatrix"),false,translationMatrix);
		gl.uniform2f(shader.getUniformLocation("uPatternTL"),bucket.textureTL.x,bucket.textureTL.y);
		gl.uniform2f(shader.getUniformLocation("uPatternBR"),bucket.textureBR.x,bucket.textureBR.y);
		gl.uniformMatrix3fv(shader.getUniformLocation("uPatternMatrix"),false,bucket.textureMatrix.toArray(true));
		break;
	case 5:
		if(bucket.texture != null) gl.uniform1i(shader.getUniformLocation("uUseTexture"),1); else {
			gl.uniform1i(shader.getUniformLocation("uUseTexture"),0);
			gl.uniform4fv(shader.getUniformLocation("uColor"),(function($this) {
				var $r;
				var array1 = bucket.color;
				var this2;
				if(array1 != null) this2 = new Float32Array(array1); else this2 = null;
				$r = this2;
				return $r;
			}(this)));
		}
		break;
	default:
	}
	return shader;
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.renderFill = function(bucket,shader,renderSession) {
	var gl = renderSession.gl;
	if(bucket.mode == openfl._internal.renderer.opengl.utils.BucketMode.PatternFill && bucket.texture != null) openfl._internal.renderer.opengl.utils.GraphicsRenderer.bindTexture(gl,bucket);
	gl.bindBuffer(gl.ARRAY_BUFFER,bucket.tileBuffer);
	gl.vertexAttribPointer(shader.getAttribLocation("aPosition"),4,gl.SHORT,false,0,0);
	gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.renderDrawTriangles = function(bucket,shader,renderSession) {
	var gl = renderSession.gl;
	var _g = 0;
	var _g1 = bucket.fills;
	while(_g < _g1.length) {
		var fill = _g1[_g];
		++_g;
		if(fill.available) continue;
		openfl._internal.renderer.opengl.utils.GraphicsRenderer.bindTexture(gl,bucket);
		fill.vertexArray.bind();
		shader.bindVertexArray(fill.vertexArray);
		gl.drawArrays(gl.TRIANGLES,fill.glStart,fill.glLength);
	}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.bindTexture = function(gl,bucket) {
	gl.bindTexture(gl.TEXTURE_2D,bucket.texture);
	if(bucket.textureRepeat && bucket.bitmap.image.get_powerOfTwo()) {
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.REPEAT);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.REPEAT);
	} else {
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
	}
	if(bucket.textureSmooth) {
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
	} else {
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
	}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.hex2rgb = function(hex) {
	if(hex == null) return [1,1,1]; else return [(hex >> 16 & 255) / 255,(hex >> 8 & 255) / 255,(hex & 255) / 255];
};
openfl._internal.renderer.opengl.utils.GLStack = function(gl) {
	this.lastIndex = 0;
	this.gl = gl;
	this.buckets = [];
	this.lastIndex = 0;
};
$hxClasses["openfl._internal.renderer.opengl.utils.GLStack"] = openfl._internal.renderer.opengl.utils.GLStack;
openfl._internal.renderer.opengl.utils.GLStack.__name__ = ["openfl","_internal","renderer","opengl","utils","GLStack"];
openfl._internal.renderer.opengl.utils.GLStack.prototype = {
	reset: function() {
		this.buckets = [];
		this.lastIndex = 0;
	}
	,upload: function() {
		var _g = 0;
		var _g1 = this.buckets;
		while(_g < _g1.length) {
			var bucket = _g1[_g];
			++_g;
			if(bucket.dirty) bucket.upload();
		}
	}
	,__class__: openfl._internal.renderer.opengl.utils.GLStack
};
openfl._internal.renderer.opengl.utils.GLBucket = function(gl) {
	this.uploadTileBuffer = true;
	this.textureSmooth = true;
	this.textureRepeat = false;
	this.lines = [];
	this.fills = [];
	this.fillIndex = -1;
	this.gl = gl;
	this.color = [0,0,0];
	this.lastIndex = 0;
	this.alpha = 1;
	this.dirty = true;
	this.mode = openfl._internal.renderer.opengl.utils.BucketMode.Fill;
	this.textureMatrix = new openfl.geom.Matrix();
	this.textureTL = new openfl.geom.Point();
	this.textureBR = new openfl.geom.Point(1,1);
};
$hxClasses["openfl._internal.renderer.opengl.utils.GLBucket"] = openfl._internal.renderer.opengl.utils.GLBucket;
openfl._internal.renderer.opengl.utils.GLBucket.__name__ = ["openfl","_internal","renderer","opengl","utils","GLBucket"];
openfl._internal.renderer.opengl.utils.GLBucket.prototype = {
	getData: function(type) {
		var data;
		switch(type[1]) {
		case 1:
			data = this.fills;
			break;
		default:
			data = this.lines;
		}
		var result = null;
		var remove = false;
		var _g = 0;
		while(_g < data.length) {
			var d = data[_g];
			++_g;
			if(d.available) {
				result = d;
				remove = true;
				break;
			}
		}
		if(result == null) result = new openfl._internal.renderer.opengl.utils.GLBucketData(this.gl);
		result.available = false;
		result.parent = this;
		result.type = type;
		if(remove) HxOverrides.remove(data,result);
		data.push(result);
		switch(type[1]) {
		case 1:
			var _g1 = this.mode;
			switch(_g1[1]) {
			case 1:case 2:
				result.vertexArray.attributes = openfl._internal.renderer.opengl.utils.GraphicsRenderer.fillVertexAttributes;
				break;
			case 5:
				result.vertexArray.attributes = openfl._internal.renderer.opengl.utils.GraphicsRenderer.drawTrianglesVertexAttributes.slice();
				result.vertexArray.attributes[2] = result.vertexArray.attributes[2].copy();
				break;
			default:
			}
			break;
		case 0:
			result.vertexArray.attributes = openfl._internal.renderer.opengl.utils.GraphicsRenderer.primitiveVertexAttributes;
			break;
		}
		return result;
	}
	,optimize: function() {
		var _g = this;
		var data = this.lines;
		if(data.length > 1) {
			var result = [];
			var tmp = null;
			var last = null;
			var idx = 0;
			var vi = 0;
			var ii = 0;
			var before = data.length;
			var _g1 = 0;
			while(_g1 < data.length) {
				var d = data[_g1];
				++_g1;
				if(d.available || d.rawVerts || d.rawIndices) {
					if(tmp != null) {
						result.push(tmp);
						tmp = null;
					}
					result.push(d);
					last = d;
					continue;
				}
				if(last == null || last.drawMode == d.drawMode) {
					if(tmp == null) tmp = d; else {
						vi = tmp.verts.length;
						ii = tmp.indices.length;
						var _g2 = 0;
						var _g11 = d.verts.length;
						while(_g2 < _g11) {
							var j = _g2++;
							tmp.verts[j + vi] = d.verts[j];
						}
						var _g21 = 0;
						var _g12 = d.indices.length;
						while(_g21 < _g12) {
							var j1 = _g21++;
							tmp.indices[j1 + ii] = d.indices[j1] + idx;
						}
					}
					idx = tmp.indices[tmp.indices.length - 1] + 1;
					last = d;
				} else {
					if(tmp != null) {
						result.push(tmp);
						tmp = null;
					}
					result.push(d);
					last = d;
					continue;
				}
			}
			if(result.length == 0 && tmp != null) result.push(tmp);
			if(result.length > 0) switch(openfl._internal.renderer.opengl.utils.BucketDataType.Line[1]) {
			case 1:
				_g.fills = result;
				break;
			default:
				_g.lines = result;
			}
		}
	}
	,reset: function() {
		var _g = 0;
		var _g1 = this.fills;
		while(_g < _g1.length) {
			var fill = _g1[_g];
			++_g;
			fill.reset();
		}
		var _g2 = 0;
		var _g11 = this.lines;
		while(_g2 < _g11.length) {
			var line = _g11[_g2];
			++_g2;
			line.reset();
		}
		this.fillIndex = -1;
		this.uploadTileBuffer = true;
		this.graphicType = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
	}
	,uploadTile: function(x,y,w,h) {
		if(this.tileBuffer == null) this.tileBuffer = this.gl.createBuffer();
		this.tile = [x,y,0,0,w,y,1,0,x,h,0,1,w,h,1,1];
		var array = this.tile;
		var this1;
		if(array != null) this1 = new Int16Array(array); else this1 = null;
		this.glTile = this1;
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.tileBuffer);
		this.gl.bufferData(this.gl.ARRAY_BUFFER,this.glTile,this.gl.STATIC_DRAW);
	}
	,upload: function() {
		if(this.mode != openfl._internal.renderer.opengl.utils.BucketMode.Line) {
			var _g = 0;
			var _g1 = this.fills;
			while(_g < _g1.length) {
				var fill = _g1[_g];
				++_g;
				if(!fill.available) fill.upload();
			}
		}
		var _g2 = 0;
		var _g11 = this.lines;
		while(_g2 < _g11.length) {
			var line = _g11[_g2];
			++_g2;
			if(!line.available) line.upload();
		}
		this.dirty = false;
	}
	,__class__: openfl._internal.renderer.opengl.utils.GLBucket
};
openfl._internal.renderer.opengl.utils.GLBucketData = function(gl) {
	this.available = false;
	this.rawIndices = false;
	this.stride = 0;
	this.rawVerts = false;
	this.lastVertsSize = 0;
	this.glStart = 0;
	this.glLength = 0;
	this.gl = gl;
	this.drawMode = gl.TRIANGLE_STRIP;
	this.verts = [];
	this.indices = [];
	this.vertexArray = new openfl._internal.renderer.opengl.utils.VertexArray([]);
};
$hxClasses["openfl._internal.renderer.opengl.utils.GLBucketData"] = openfl._internal.renderer.opengl.utils.GLBucketData;
openfl._internal.renderer.opengl.utils.GLBucketData.__name__ = ["openfl","_internal","renderer","opengl","utils","GLBucketData"];
openfl._internal.renderer.opengl.utils.GLBucketData.prototype = {
	reset: function() {
		this.available = true;
		this.verts = [];
		this.indices = [];
		this.glLength = 0;
		this.glStart = 0;
		this.stride = 0;
		this.rawVerts = false;
		this.rawIndices = false;
		this.drawMode = this.gl.TRIANGLE_STRIP;
	}
	,upload: function() {
		if(this.rawVerts && this.glVerts != null && this.glVerts.length > 0 || this.verts.length > 0) {
			if(!this.rawVerts) {
				var array = this.verts;
				var this1;
				if(array != null) this1 = new Float32Array(array); else this1 = null;
				this.glVerts = this1;
			}
			this.vertexArray.buffer = this.glVerts.buffer;
			if(this.glVerts.length <= this.lastVertsSize) {
				this.vertexArray.bind();
				var end = this.glLength * 4 * this.stride;
				if(this.glLength > 0 && this.lastVertsSize > end) {
					var view = this.glVerts.subarray(0,end);
					this.vertexArray.upload(view);
				} else this.vertexArray.upload(this.glVerts);
			} else {
				this.vertexArray.setContext(this.gl,this.glVerts);
				this.lastVertsSize = this.glVerts.length;
			}
		}
		if(this.glLength == 0 && (this.rawIndices && this.glIndices != null && this.glIndices.length > 0 || this.indices.length > 0)) {
			if(this.indexBuffer == null) this.indexBuffer = this.gl.createBuffer();
			if(!this.rawIndices) {
				var array1 = this.indices;
				var this2;
				if(array1 != null) this2 = new Uint16Array(array1); else this2 = null;
				this.glIndices = this2;
			}
			this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
			this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,this.glIndices,this.gl.STREAM_DRAW);
		}
	}
	,__class__: openfl._internal.renderer.opengl.utils.GLBucketData
};
openfl._internal.renderer.opengl.utils.BucketMode = $hxClasses["openfl._internal.renderer.opengl.utils.BucketMode"] = { __ename__ : ["openfl","_internal","renderer","opengl","utils","BucketMode"], __constructs__ : ["None","Fill","PatternFill","Line","PatternLine","DrawTriangles","DrawTiles"] };
openfl._internal.renderer.opengl.utils.BucketMode.None = ["None",0];
openfl._internal.renderer.opengl.utils.BucketMode.None.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketMode.None.__enum__ = openfl._internal.renderer.opengl.utils.BucketMode;
openfl._internal.renderer.opengl.utils.BucketMode.Fill = ["Fill",1];
openfl._internal.renderer.opengl.utils.BucketMode.Fill.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketMode.Fill.__enum__ = openfl._internal.renderer.opengl.utils.BucketMode;
openfl._internal.renderer.opengl.utils.BucketMode.PatternFill = ["PatternFill",2];
openfl._internal.renderer.opengl.utils.BucketMode.PatternFill.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketMode.PatternFill.__enum__ = openfl._internal.renderer.opengl.utils.BucketMode;
openfl._internal.renderer.opengl.utils.BucketMode.Line = ["Line",3];
openfl._internal.renderer.opengl.utils.BucketMode.Line.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketMode.Line.__enum__ = openfl._internal.renderer.opengl.utils.BucketMode;
openfl._internal.renderer.opengl.utils.BucketMode.PatternLine = ["PatternLine",4];
openfl._internal.renderer.opengl.utils.BucketMode.PatternLine.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketMode.PatternLine.__enum__ = openfl._internal.renderer.opengl.utils.BucketMode;
openfl._internal.renderer.opengl.utils.BucketMode.DrawTriangles = ["DrawTriangles",5];
openfl._internal.renderer.opengl.utils.BucketMode.DrawTriangles.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketMode.DrawTriangles.__enum__ = openfl._internal.renderer.opengl.utils.BucketMode;
openfl._internal.renderer.opengl.utils.BucketMode.DrawTiles = ["DrawTiles",6];
openfl._internal.renderer.opengl.utils.BucketMode.DrawTiles.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketMode.DrawTiles.__enum__ = openfl._internal.renderer.opengl.utils.BucketMode;
openfl._internal.renderer.opengl.utils.BucketDataType = $hxClasses["openfl._internal.renderer.opengl.utils.BucketDataType"] = { __ename__ : ["openfl","_internal","renderer","opengl","utils","BucketDataType"], __constructs__ : ["Line","Fill"] };
openfl._internal.renderer.opengl.utils.BucketDataType.Line = ["Line",0];
openfl._internal.renderer.opengl.utils.BucketDataType.Line.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketDataType.Line.__enum__ = openfl._internal.renderer.opengl.utils.BucketDataType;
openfl._internal.renderer.opengl.utils.BucketDataType.Fill = ["Fill",1];
openfl._internal.renderer.opengl.utils.BucketDataType.Fill.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketDataType.Fill.__enum__ = openfl._internal.renderer.opengl.utils.BucketDataType;
openfl._internal.renderer.opengl.utils.GLGraphicsData = function() { };
$hxClasses["openfl._internal.renderer.opengl.utils.GLGraphicsData"] = openfl._internal.renderer.opengl.utils.GLGraphicsData;
openfl._internal.renderer.opengl.utils.GLGraphicsData.__name__ = ["openfl","_internal","renderer","opengl","utils","GLGraphicsData"];
openfl._internal.renderer.opengl.utils.GraphicType = $hxClasses["openfl._internal.renderer.opengl.utils.GraphicType"] = { __ename__ : ["openfl","_internal","renderer","opengl","utils","GraphicType"], __constructs__ : ["Polygon","Rectangle","Circle","Ellipse","DrawTriangles","DrawTiles","OverrideMatrix"] };
openfl._internal.renderer.opengl.utils.GraphicType.Polygon = ["Polygon",0];
openfl._internal.renderer.opengl.utils.GraphicType.Polygon.toString = $estr;
openfl._internal.renderer.opengl.utils.GraphicType.Polygon.__enum__ = openfl._internal.renderer.opengl.utils.GraphicType;
openfl._internal.renderer.opengl.utils.GraphicType.Rectangle = function(rounded) { var $x = ["Rectangle",1,rounded]; $x.__enum__ = openfl._internal.renderer.opengl.utils.GraphicType; $x.toString = $estr; return $x; };
openfl._internal.renderer.opengl.utils.GraphicType.Circle = ["Circle",2];
openfl._internal.renderer.opengl.utils.GraphicType.Circle.toString = $estr;
openfl._internal.renderer.opengl.utils.GraphicType.Circle.__enum__ = openfl._internal.renderer.opengl.utils.GraphicType;
openfl._internal.renderer.opengl.utils.GraphicType.Ellipse = ["Ellipse",3];
openfl._internal.renderer.opengl.utils.GraphicType.Ellipse.toString = $estr;
openfl._internal.renderer.opengl.utils.GraphicType.Ellipse.__enum__ = openfl._internal.renderer.opengl.utils.GraphicType;
openfl._internal.renderer.opengl.utils.GraphicType.DrawTriangles = function(vertices,indices,uvtData,culling,colors,blendMode) { var $x = ["DrawTriangles",4,vertices,indices,uvtData,culling,colors,blendMode]; $x.__enum__ = openfl._internal.renderer.opengl.utils.GraphicType; $x.toString = $estr; return $x; };
openfl._internal.renderer.opengl.utils.GraphicType.DrawTiles = function(sheet,tileData,smooth,flags,count) { var $x = ["DrawTiles",5,sheet,tileData,smooth,flags,count]; $x.__enum__ = openfl._internal.renderer.opengl.utils.GraphicType; $x.toString = $estr; return $x; };
openfl._internal.renderer.opengl.utils.GraphicType.OverrideMatrix = function(matrix) { var $x = ["OverrideMatrix",6,matrix]; $x.__enum__ = openfl._internal.renderer.opengl.utils.GraphicType; $x.toString = $estr; return $x; };
openfl._internal.renderer.opengl.utils.ShaderManager = function(gl) {
	this.setContext(gl);
};
$hxClasses["openfl._internal.renderer.opengl.utils.ShaderManager"] = openfl._internal.renderer.opengl.utils.ShaderManager;
openfl._internal.renderer.opengl.utils.ShaderManager.__name__ = ["openfl","_internal","renderer","opengl","utils","ShaderManager"];
openfl._internal.renderer.opengl.utils.ShaderManager.prototype = {
	setContext: function(gl) {
		this.gl = gl;
		this.defaultShader = new openfl._internal.renderer.opengl.shaders2.DefaultShader(gl);
		this.fillShader = new openfl._internal.renderer.opengl.shaders2.FillShader(gl);
		this.patternFillShader = new openfl._internal.renderer.opengl.shaders2.PatternFillShader(gl);
		this.drawTrianglesShader = new openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader(gl);
		this.primitiveShader = new openfl._internal.renderer.opengl.shaders2.PrimitiveShader(gl);
		this.setShader(this.defaultShader,true);
	}
	,setShader: function(shader,force) {
		if(force == null) force = false;
		if(shader == null) {
			this.currentShader = null;
			this.gl.useProgram(null);
			return true;
		}
		if(this.currentShader != null && !force && this.currentShader.ID == shader.ID) return false;
		this.currentShader = shader;
		this.gl.useProgram(shader.program);
		return true;
	}
	,__class__: openfl._internal.renderer.opengl.utils.ShaderManager
};
openfl._internal.renderer.opengl.utils.SpriteBatch = function(gl,maxSprites) {
	if(maxSprites == null) maxSprites = 2000;
	this.lastEnableColor = true;
	this.enableColor = true;
	this.attributes = [];
	this.writtenVertexBytes = 0;
	this.drawing = false;
	this.dirty = true;
	this.states = [];
	this.maxSprites = maxSprites;
	this.attributes.push(new openfl._internal.renderer.opengl.utils.VertexAttribute(2,5126,false,"aPosition"));
	this.attributes.push(new openfl._internal.renderer.opengl.utils.VertexAttribute(2,5126,false,"aTexCoord0"));
	this.attributes.push(new openfl._internal.renderer.opengl.utils.VertexAttribute(4,5121,true,"aColor"));
	var array = [1,1,1,1];
	var this1;
	if(array != null) this1 = new Float32Array(array); else this1 = null;
	this.attributes[2].defaultValue = this1;
	this.maxElementsPerVertex = 0;
	var _g = 0;
	var _g1 = this.attributes;
	while(_g < _g1.length) {
		var a = _g1[_g];
		++_g;
		this.maxElementsPerVertex += Math.floor(a.components * a.getElementsBytes() / 4);
	}
	this.vertexArraySize = maxSprites * this.maxElementsPerVertex * 4 * 4;
	this.indexArraySize = maxSprites * 6;
	this.vertexArray = new openfl._internal.renderer.opengl.utils.VertexArray(this.attributes,this.vertexArraySize,false);
	var buffer = this.vertexArray.buffer;
	var this2;
	if(buffer != null) this2 = new Float32Array(buffer,0); else this2 = null;
	this.positions = this2;
	var buffer1 = this.vertexArray.buffer;
	var this3;
	if(buffer1 != null) this3 = new Uint32Array(buffer1,0); else this3 = null;
	this.colors = this3;
	var elements = this.indexArraySize;
	var this4;
	if(elements != null) this4 = new Uint16Array(elements); else this4 = null;
	this.indices = this4;
	var i = 0;
	var j = 0;
	while(i < this.indexArraySize) {
		this.indices[i] = j;
		this.indices[i + 1] = j + 1;
		this.indices[i + 2] = j + 2;
		this.indices[i + 3] = j;
		this.indices[i + 4] = j + 2;
		this.indices[i + 5] = j + 3;
		i += 6;
		j += 4;
	}
	this.currentState = new openfl._internal.renderer.opengl.utils._SpriteBatch.State();
	this.dirty = true;
	this.drawing = false;
	this.batchedSprites = 0;
	this.setContext(gl);
};
$hxClasses["openfl._internal.renderer.opengl.utils.SpriteBatch"] = openfl._internal.renderer.opengl.utils.SpriteBatch;
openfl._internal.renderer.opengl.utils.SpriteBatch.__name__ = ["openfl","_internal","renderer","opengl","utils","SpriteBatch"];
openfl._internal.renderer.opengl.utils.SpriteBatch.prototype = {
	begin: function(renderSession,clipRect) {
		this.renderSession = renderSession;
		this.shader = renderSession.shaderManager.defaultShader;
		this.drawing = true;
		this.start(clipRect);
	}
	,finish: function() {
		this.stop();
		this.clipRect = null;
		this.drawing = false;
	}
	,start: function(clipRect) {
		if(!this.drawing) throw "Call Spritebatch.begin() before start()";
		this.dirty = true;
		this.clipRect = clipRect;
	}
	,stop: function() {
		this.flush();
	}
	,renderBitmapData: function(bitmapData,smoothing,matrix,ct,alpha,blendMode,pixelSnapping,bgra) {
		if(bgra == null) bgra = false;
		if(alpha == null) alpha = 1;
		if(bitmapData == null) return;
		var texture = bitmapData.getTexture(this.gl);
		if(this.batchedSprites >= this.maxSprites) this.flush();
		var uvs = bitmapData.__uvData;
		if(uvs == null) return;
		var color = ((alpha * 255 | 0) & 255) << 24 | 16777215;
		this.enableColor = true;
		if(this.enableColor != this.lastEnableColor) {
			this.flush();
			this.lastEnableColor = this.enableColor;
		}
		this.attributes[2].enabled = this.lastEnableColor;
		this.elementsPerVertex = this.getElementsPerVertex();
		var index = this.batchedSprites * 4 * this.elementsPerVertex;
		this.fillVertices(index,bitmapData.width,bitmapData.height,matrix,uvs,null,color,pixelSnapping);
		this.setState(this.batchedSprites,texture,smoothing,blendMode,ct,true);
		this.batchedSprites++;
	}
	,renderTiles: function(object,sheet,tileData,smooth,flags,count) {
		if(count == null) count = -1;
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		var texture = sheet.__bitmap.getTexture(this.gl);
		if(texture == null) return;
		var useScale = (flags & 1) > 0;
		var useRotation = (flags & 2) > 0;
		var useTransform = (flags & 16) > 0;
		var useRGB = (flags & 4) > 0;
		var useAlpha = (flags & 8) > 0;
		var useRect = (flags & 32) > 0;
		var useOrigin = (flags & 64) > 0;
		var blendMode;
		var _g = flags & 983040;
		switch(_g) {
		case 65536:
			blendMode = openfl.display.BlendMode.ADD;
			break;
		case 131072:
			blendMode = openfl.display.BlendMode.MULTIPLY;
			break;
		case 262144:
			blendMode = openfl.display.BlendMode.SCREEN;
			break;
		case 524288:
			blendMode = openfl.display.BlendMode.SUBTRACT;
			break;
		default:
			var _g1 = flags & 15728640;
			switch(_g1) {
			case 1048576:
				blendMode = openfl.display.BlendMode.DARKEN;
				break;
			case 2097152:
				blendMode = openfl.display.BlendMode.LIGHTEN;
				break;
			case 4194304:
				blendMode = openfl.display.BlendMode.OVERLAY;
				break;
			case 8388608:
				blendMode = openfl.display.BlendMode.HARDLIGHT;
				break;
			default:
				var _g2 = flags & 251658240;
				switch(_g2) {
				case 16777216:
					blendMode = openfl.display.BlendMode.DIFFERENCE;
					break;
				case 33554432:
					blendMode = openfl.display.BlendMode.INVERT;
					break;
				default:
					blendMode = openfl.display.BlendMode.NORMAL;
				}
			}
		}
		if(useTransform) {
			useScale = false;
			useRotation = false;
		}
		var scaleIndex = 0;
		var rotationIndex = 0;
		var rgbIndex = 0;
		var alphaIndex = 0;
		var transformIndex = 0;
		var numValues = 3;
		if(useRect) if(useOrigin) numValues = 8; else numValues = 6;
		if(useScale) {
			scaleIndex = numValues;
			numValues++;
		}
		if(useRotation) {
			rotationIndex = numValues;
			numValues++;
		}
		if(useTransform) {
			transformIndex = numValues;
			numValues += 4;
		}
		if(useRGB) {
			rgbIndex = numValues;
			numValues += 3;
		}
		if(useAlpha) {
			alphaIndex = numValues;
			numValues++;
		}
		var totalCount = tileData.length;
		if(count >= 0 && totalCount > count) totalCount = count;
		var itemCount = totalCount / numValues | 0;
		var iIndex = 0;
		var tileID = -1;
		var rect = sheet.__rectTile;
		var tileUV = sheet.__rectUV;
		var center = sheet.__point;
		var x = 0.0;
		var y = 0.0;
		var alpha = 1.0;
		var tint = 16777215;
		var color = -1;
		var scale = 1.0;
		var rotation = 0.0;
		var cosTheta = 1.0;
		var sinTheta = 0.0;
		var a = 0.0;
		var b = 0.0;
		var c = 0.0;
		var d = 0.0;
		var tx = 0.0;
		var ty = 0.0;
		var ox = 0.0;
		var oy = 0.0;
		var matrix = new openfl.geom.Matrix();
		var oMatrix = object.__worldTransform;
		var uvs = new openfl.display.TextureUvs();
		var bIndex = 0;
		this.enableColor = true;
		if(this.enableColor != this.lastEnableColor) {
			this.flush();
			this.lastEnableColor = this.enableColor;
		}
		this.attributes[2].enabled = this.lastEnableColor;
		this.elementsPerVertex = this.getElementsPerVertex();
		while(iIndex < totalCount) {
			if(this.batchedSprites >= this.maxSprites) this.flush();
			x = tileData[iIndex];
			y = tileData[iIndex + 1];
			if(useRect) {
				tileID = -1;
				rect.x = tileData[iIndex + 2];
				rect.y = tileData[iIndex + 3];
				rect.width = tileData[iIndex + 4];
				rect.height = tileData[iIndex + 5];
				if(useOrigin) {
					center.x = tileData[iIndex + 6];
					center.y = tileData[iIndex + 7];
				} else {
					center.x = 0;
					center.y = 0;
				}
				tileUV.setTo(rect.get_left() / sheet.__bitmap.width,rect.get_top() / sheet.__bitmap.height,rect.get_right() / sheet.__bitmap.width,rect.get_bottom() / sheet.__bitmap.height);
			} else {
				tileID = (tileData[iIndex + 2] == null?0:tileData[iIndex + 2]) | 0;
				rect = sheet.__tileRects[tileID];
				center = sheet.__centerPoints[tileID];
				tileUV = sheet.__tileUVs[tileID];
			}
			if(rect != null && rect.width > 0 && rect.height > 0 && center != null) {
				alpha = 1;
				tint = 16777215;
				a = 1;
				b = 0;
				c = 0;
				d = 1;
				tx = 0;
				ty = 0;
				scale = 1.0;
				rotation = 0.0;
				cosTheta = 1.0;
				sinTheta = 0.0;
				matrix.identity();
				if(useAlpha) alpha = tileData[iIndex + alphaIndex] * object.__worldAlpha; else alpha = object.__worldAlpha;
				if(useRGB) tint = (tileData[iIndex + rgbIndex] * 255 | 0) << 16 | (tileData[iIndex + rgbIndex + 1] * 255 | 0) << 8 | (tileData[iIndex + rgbIndex + 2] * 255 | 0);
				if(useScale) scale = tileData[iIndex + scaleIndex];
				if(useRotation) {
					rotation = tileData[iIndex + rotationIndex];
					cosTheta = Math.cos(rotation);
					sinTheta = Math.sin(rotation);
				}
				if(useTransform) {
					a = tileData[iIndex + transformIndex];
					b = tileData[iIndex + transformIndex + 1];
					c = tileData[iIndex + transformIndex + 2];
					d = tileData[iIndex + transformIndex + 3];
				} else {
					a = scale * cosTheta;
					b = scale * sinTheta;
					c = -b;
					d = a;
				}
				ox = center.x * a + center.y * c;
				oy = center.x * b + center.y * d;
				tx = x - ox;
				ty = y - oy;
				matrix.a = a * oMatrix.a + b * oMatrix.c;
				matrix.b = a * oMatrix.b + b * oMatrix.d;
				matrix.c = c * oMatrix.a + d * oMatrix.c;
				matrix.d = c * oMatrix.b + d * oMatrix.d;
				matrix.tx = tx * oMatrix.a + ty * oMatrix.c + oMatrix.tx;
				matrix.ty = tx * oMatrix.b + ty * oMatrix.d + oMatrix.ty;
				uvs.x0 = tileUV.x;
				uvs.y0 = tileUV.y;
				uvs.x1 = tileUV.width;
				uvs.y1 = tileUV.y;
				uvs.x2 = tileUV.width;
				uvs.y2 = tileUV.height;
				uvs.x3 = tileUV.x;
				uvs.y3 = tileUV.height;
				bIndex = this.batchedSprites * 4 * this.elementsPerVertex;
				color = ((alpha * 255 | 0) & 255) << 24 | (tint & 255) << 16 | (tint >> 8 & 255) << 8 | tint >> 16 & 255;
				this.fillVertices(bIndex,rect.width,rect.height,matrix,uvs,null,color,openfl.display.PixelSnapping.NEVER);
				this.setState(this.batchedSprites,texture,smooth,blendMode,object.__worldColorTransform,false);
				this.batchedSprites++;
			}
			iIndex += numValues;
		}
	}
	,fillVertices: function(index,width,height,matrix,uvs,pivot,color,pixelSnapping) {
		if(color == null) color = -1;
		var w0;
		var w1;
		var h0;
		var h1;
		if(pivot == null) {
			w0 = width;
			w1 = 0;
			h0 = height;
			h1 = 0;
		} else {
			w0 = width * (1 - pivot.x);
			w1 = width * -pivot.x;
			h0 = height * (1 - pivot.y);
			h1 = height * -pivot.y;
		}
		if(pixelSnapping == null) pixelSnapping = openfl.display.PixelSnapping.NEVER;
		var snap = pixelSnapping != openfl.display.PixelSnapping.NEVER;
		var a = matrix.a;
		var b = matrix.b;
		var c = matrix.c;
		var d = matrix.d;
		var tx = matrix.tx;
		var ty = matrix.ty;
		var cOffsetIndex = 0;
		if(!snap) {
			var idx = index++;
			this.positions[idx] = a * w1 + c * h1 + tx;
			var idx1 = index++;
			this.positions[idx1] = d * h1 + b * w1 + ty;
		} else {
			var idx2 = index++;
			var val = Math.round(a * w1 + c * h1 + tx);
			this.positions[idx2] = val;
			var idx3 = index++;
			var val1 = Math.round(d * h1 + b * w1 + ty);
			this.positions[idx3] = val1;
		}
		var idx4 = index++;
		this.positions[idx4] = uvs.x0;
		var idx5 = index++;
		this.positions[idx5] = uvs.y0;
		if(this.enableColor) {
			var idx6 = index++;
			this.colors[idx6] = color;
		}
		if(!snap) {
			var idx7 = index++;
			this.positions[idx7] = a * w0 + c * h1 + tx;
			var idx8 = index++;
			this.positions[idx8] = d * h1 + b * w0 + ty;
		} else {
			var idx9 = index++;
			var val2 = Math.round(a * w0 + c * h1 + tx);
			this.positions[idx9] = val2;
			var idx10 = index++;
			var val3 = Math.round(d * h1 + b * w0 + ty);
			this.positions[idx10] = val3;
		}
		var idx11 = index++;
		this.positions[idx11] = uvs.x1;
		var idx12 = index++;
		this.positions[idx12] = uvs.y1;
		if(this.enableColor) {
			var idx13 = index++;
			this.colors[idx13] = color;
		}
		if(!snap) {
			var idx14 = index++;
			this.positions[idx14] = a * w0 + c * h0 + tx;
			var idx15 = index++;
			this.positions[idx15] = d * h0 + b * w0 + ty;
		} else {
			var idx16 = index++;
			var val4 = Math.round(a * w0 + c * h0 + tx);
			this.positions[idx16] = val4;
			var idx17 = index++;
			var val5 = Math.round(d * h0 + b * w0 + ty);
			this.positions[idx17] = val5;
		}
		var idx18 = index++;
		this.positions[idx18] = uvs.x2;
		var idx19 = index++;
		this.positions[idx19] = uvs.y2;
		if(this.enableColor) {
			var idx20 = index++;
			this.colors[idx20] = color;
		}
		if(!snap) {
			var idx21 = index++;
			this.positions[idx21] = a * w1 + c * h0 + tx;
			var idx22 = index++;
			this.positions[idx22] = d * h0 + b * w1 + ty;
		} else {
			var idx23 = index++;
			var val6 = Math.round(a * w1 + c * h0 + tx);
			this.positions[idx23] = val6;
			var idx24 = index++;
			var val7 = Math.round(d * h0 + b * w1 + ty);
			this.positions[idx24] = val7;
		}
		var idx25 = index++;
		this.positions[idx25] = uvs.x3;
		var idx26 = index++;
		this.positions[idx26] = uvs.y3;
		if(this.enableColor) {
			var idx27 = index++;
			this.colors[idx27] = color;
		}
		this.writtenVertexBytes = index;
	}
	,flush: function() {
		if(this.batchedSprites == 0) return;
		if(this.clipRect != null) {
			this.gl.enable(this.gl.SCISSOR_TEST);
			this.gl.scissor(Math.floor(this.clipRect.x),Math.floor(this.clipRect.y),Math.floor(this.clipRect.width),Math.floor(this.clipRect.height));
		}
		if(this.dirty) {
			this.dirty = false;
			this.gl.activeTexture(this.gl.TEXTURE0);
			this.vertexArray.bind();
			this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
		}
		if(this.writtenVertexBytes > this.vertexArraySize * 0.5) this.vertexArray.upload(this.positions); else {
			var view = this.positions.subarray(0,this.writtenVertexBytes);
			this.vertexArray.upload(view);
		}
		var nextState;
		var batchSize = 0;
		var start = 0;
		this.currentState.shader = this.renderSession.shaderManager.defaultShader;
		this.currentState.texture = null;
		this.currentState.textureSmooth = false;
		this.currentState.blendMode = this.renderSession.blendModeManager.currentBlendMode;
		this.currentState.colorTransform = null;
		this.currentState.skipColorTransformAlpha = false;
		var _g1 = 0;
		var _g = this.batchedSprites;
		while(_g1 < _g) {
			var i = _g1++;
			nextState = this.states[i];
			this.currentState.skipColorTransformAlpha = nextState.skipColorTransformAlpha;
			if(!nextState.equals(this.currentState)) {
				this.renderBatch(this.currentState,batchSize,start);
				start = i;
				batchSize = 0;
				this.currentState.shader = nextState.shader;
				this.currentState.texture = nextState.texture;
				this.currentState.textureSmooth = nextState.textureSmooth;
				this.currentState.blendMode = nextState.blendMode;
				this.currentState.colorTransform = nextState.colorTransform;
			}
			batchSize++;
		}
		this.renderBatch(this.currentState,batchSize,start);
		this.batchedSprites = 0;
		this.writtenVertexBytes = 0;
		if(this.clipRect != null) this.gl.disable(this.gl.SCISSOR_TEST);
	}
	,renderBatch: function(state,size,start) {
		if(size == 0 || state.texture == null) return;
		var shader;
		if(state.shader == null) shader = this.renderSession.shaderManager.defaultShader; else shader = state.shader;
		this.renderSession.shaderManager.setShader(shader);
		shader.bindVertexArray(this.vertexArray);
		this.gl.uniformMatrix3fv(shader.getUniformLocation("uProjectionMatrix"),false,this.renderSession.projectionMatrix.toArray(true));
		if(state.colorTransform != null) {
			var ct = state.colorTransform;
			this.gl.uniform4f(shader.getUniformLocation("uColorMultiplier"),ct.redMultiplier,ct.greenMultiplier,ct.blueMultiplier,state.skipColorTransformAlpha?1:ct.alphaMultiplier);
			this.gl.uniform4f(shader.getUniformLocation("uColorOffset"),ct.redOffset / 255.,ct.greenOffset / 255.,ct.blueOffset / 255.,ct.alphaOffset / 255.);
		} else {
			this.gl.uniform4f(shader.getUniformLocation("uColorMultiplier"),1,1,1,1);
			this.gl.uniform4f(shader.getUniformLocation("uColorOffset"),0,0,0,0);
		}
		this.renderSession.blendModeManager.setBlendMode(state.blendMode);
		this.gl.bindTexture(this.gl.TEXTURE_2D,state.texture);
		if(state.textureSmooth) {
			this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR);
			this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR);
		} else {
			this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST);
			this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST);
		}
		this.gl.drawElements(this.gl.TRIANGLES,size * 6,this.gl.UNSIGNED_SHORT,start * 6 * 2);
		this.renderSession.drawCount++;
	}
	,setState: function(index,texture,smooth,blendMode,colorTransform,skipAlpha) {
		if(skipAlpha == null) skipAlpha = false;
		if(smooth == null) smooth = false;
		var state = this.states[index];
		if(state == null) state = this.states[index] = new openfl._internal.renderer.opengl.utils._SpriteBatch.State();
		state.texture = texture;
		state.textureSmooth = smooth;
		state.blendMode = blendMode;
		state.colorTransform = colorTransform;
		state.skipColorTransformAlpha = skipAlpha;
	}
	,setContext: function(gl) {
		this.gl = gl;
		this.vertexArray.setContext(gl,this.positions);
		this.indexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,this.indices,gl.STATIC_DRAW);
	}
	,getElementsPerVertex: function() {
		var r = 0;
		var _g = 0;
		var _g1 = this.attributes;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			if(a.enabled) r += Math.floor(a.components * a.getElementsBytes() / 4);
		}
		return r;
	}
	,__class__: openfl._internal.renderer.opengl.utils.SpriteBatch
};
openfl._internal.renderer.opengl.utils._SpriteBatch = {};
openfl._internal.renderer.opengl.utils._SpriteBatch.State = function() {
	this.skipColorTransformAlpha = false;
	this.textureSmooth = true;
};
$hxClasses["openfl._internal.renderer.opengl.utils._SpriteBatch.State"] = openfl._internal.renderer.opengl.utils._SpriteBatch.State;
openfl._internal.renderer.opengl.utils._SpriteBatch.State.__name__ = ["openfl","_internal","renderer","opengl","utils","_SpriteBatch","State"];
openfl._internal.renderer.opengl.utils._SpriteBatch.State.prototype = {
	equals: function(other) {
		return (this.shader == null || other.shader == null || this.shader.ID == other.shader.ID) && this.texture == other.texture && this.textureSmooth == other.textureSmooth && this.blendMode == other.blendMode && (this.colorTransform != null && this.colorTransform.__equals(other.colorTransform,this.skipColorTransformAlpha));
	}
	,__class__: openfl._internal.renderer.opengl.utils._SpriteBatch.State
};
openfl._internal.renderer.opengl.utils.StencilManager = function(gl) {
	this.stencilMask = 0;
	this.stencilStack = [];
	this.setContext(gl);
	this.reverse = true;
	this.count = 0;
};
$hxClasses["openfl._internal.renderer.opengl.utils.StencilManager"] = openfl._internal.renderer.opengl.utils.StencilManager;
openfl._internal.renderer.opengl.utils.StencilManager.__name__ = ["openfl","_internal","renderer","opengl","utils","StencilManager"];
openfl._internal.renderer.opengl.utils.StencilManager.prototype = {
	prepareGraphics: function(fill,renderSession,translationMatrix) {
		var shader = renderSession.shaderManager.fillShader;
		renderSession.shaderManager.setShader(shader);
		this.gl.uniformMatrix3fv(shader.getUniformLocation("uTranslationMatrix"),false,translationMatrix);
		this.gl.uniformMatrix3fv(shader.getUniformLocation("uProjectionMatrix"),false,renderSession.projectionMatrix.toArray(true));
		fill.vertexArray.bind();
		shader.bindVertexArray(fill.vertexArray);
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,fill.indexBuffer);
	}
	,pushBucket: function(bucket,renderSession,translationMatrix,isMask) {
		if(isMask == null) isMask = false;
		if(!isMask) {
			this.gl.enable(this.gl.STENCIL_TEST);
			this.gl.clear(this.gl.STENCIL_BUFFER_BIT);
			this.gl.stencilMask(255);
			this.gl.colorMask(false,false,false,false);
			this.gl.stencilFunc(this.gl.NEVER,1,255);
			this.gl.stencilOp(this.gl.INVERT,this.gl.KEEP,this.gl.KEEP);
			this.gl.clear(this.gl.STENCIL_BUFFER_BIT);
		}
		var _g = 0;
		var _g1 = bucket.fills;
		while(_g < _g1.length) {
			var fill = _g1[_g];
			++_g;
			if(fill.available) continue;
			this.prepareGraphics(fill,renderSession,translationMatrix);
			this.gl.drawElements(fill.drawMode,fill.glIndices.length,this.gl.UNSIGNED_SHORT,0);
		}
		if(!isMask) {
			this.gl.colorMask(true,true,true,renderSession.renderer.transparent);
			this.gl.stencilOp(this.gl.KEEP,this.gl.KEEP,this.gl.KEEP);
			this.gl.stencilFunc(this.gl.EQUAL,255,255);
		}
	}
	,popBucket: function(object,bucket,renderSession) {
		this.gl.disable(this.gl.STENCIL_TEST);
	}
	,pushMask: function(object,renderSession) {
		var maskGraphics = object.__maskGraphics;
		if(maskGraphics == null || maskGraphics.__commands.length <= 0) return;
		if(this.stencilMask == 0) {
			this.gl.enable(this.gl.STENCIL_TEST);
			this.gl.clear(this.gl.STENCIL_BUFFER_BIT);
		}
		this.stencilMask++;
		if(maskGraphics.__dirty) openfl._internal.renderer.opengl.utils.GraphicsRenderer.updateGraphics(object,maskGraphics,renderSession.gl);
		var func;
		if(this.stencilMask == 1) func = this.gl.NEVER; else func = this.gl.EQUAL;
		var ref = this.stencilMask;
		var mask = 255 - this.stencilMask;
		this.gl.stencilMask(255);
		this.gl.colorMask(false,false,false,false);
		this.gl.stencilFunc(func,ref,mask);
		this.gl.stencilOp(this.gl.REPLACE,this.gl.KEEP,this.gl.KEEP);
		var glStack = maskGraphics.__glStack[openfl._internal.renderer.opengl.GLRenderer.glContextId];
		var bucket;
		var translationMatrix = object.__worldTransform;
		var _g1 = 0;
		var _g = glStack.buckets.length;
		while(_g1 < _g) {
			var i = _g1++;
			bucket = glStack.buckets[i];
			if(bucket.overrideMatrix != null) translationMatrix = bucket.overrideMatrix; else translationMatrix = object.__worldTransform;
			var _g2 = bucket.mode;
			switch(_g2[1]) {
			case 1:case 2:
				this.pushBucket(bucket,renderSession,translationMatrix.toArray(true),true);
				break;
			default:
			}
		}
		this.gl.colorMask(true,true,true,renderSession.renderer.transparent);
		this.gl.stencilOp(this.gl.KEEP,this.gl.KEEP,this.gl.KEEP);
		this.gl.stencilFunc(this.gl.EQUAL,this.stencilMask,255);
	}
	,popMask: function(object,renderSession) {
		this.stencilMask--;
		if(this.stencilMask <= 0) {
			this.gl.disable(this.gl.STENCIL_TEST);
			this.stencilMask = 0;
		}
	}
	,setContext: function(gl) {
		this.gl = gl;
	}
	,__class__: openfl._internal.renderer.opengl.utils.StencilManager
};
openfl._internal.renderer.opengl.utils.VertexArray = function(attributes,size,isStatic) {
	if(isStatic == null) isStatic = false;
	if(size == null) size = 0;
	this.isStatic = false;
	this.size = 0;
	this.attributes = [];
	this.size = size;
	this.attributes = attributes;
	if(size > 0) this.buffer = new ArrayBuffer(size);
	this.isStatic = isStatic;
};
$hxClasses["openfl._internal.renderer.opengl.utils.VertexArray"] = openfl._internal.renderer.opengl.utils.VertexArray;
openfl._internal.renderer.opengl.utils.VertexArray.__name__ = ["openfl","_internal","renderer","opengl","utils","VertexArray"];
openfl._internal.renderer.opengl.utils.VertexArray.prototype = {
	bind: function() {
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glBuffer);
	}
	,upload: function(view) {
		this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,view);
	}
	,setContext: function(gl,view) {
		this.gl = gl;
		this.glBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER,this.glBuffer);
		gl.bufferData(gl.ARRAY_BUFFER,view,this.isStatic?gl.STATIC_DRAW:gl.DYNAMIC_DRAW);
	}
	,get_stride: function() {
		var s = 0;
		var _g = 0;
		var _g1 = this.attributes;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			if(a.enabled) s += Math.floor(a.components * a.getElementsBytes() / 4) * 4;
		}
		return s;
	}
	,__class__: openfl._internal.renderer.opengl.utils.VertexArray
	,__properties__: {get_stride:"get_stride"}
};
openfl._internal.text = {};
openfl._internal.text.TextEngine = function(textField) {
	this.textField = textField;
	this.width = 100;
	this.height = 100;
	this.text = "";
	this.bounds = new openfl.geom.Rectangle(0,0,0,0);
	this.type = openfl.text.TextFieldType.DYNAMIC;
	this.autoSize = openfl.text.TextFieldAutoSize.NONE;
	this.displayAsPassword = false;
	this.embedFonts = false;
	this.selectable = true;
	this.borderColor = 0;
	this.border = false;
	this.backgroundColor = 16777215;
	this.background = false;
	this.gridFitType = openfl.text.GridFitType.PIXEL;
	this.maxChars = 0;
	this.multiline = false;
	this.sharpness = 0;
	this.scrollH = 0;
	this.scrollV = 1;
	this.wordWrap = false;
	this.lineAscents = new Array();
	this.lineBreaks = new Array();
	this.lineDescents = new Array();
	this.lineLeadings = new Array();
	this.lineHeights = new Array();
	this.lineWidths = new Array();
	this.layoutGroups = new Array();
	this.textFormatRanges = new Array();
	openfl._internal.text.TextEngine.__canvas = window.document.createElement("canvas");
	openfl._internal.text.TextEngine.__context = openfl._internal.text.TextEngine.__canvas.getContext("2d");
};
$hxClasses["openfl._internal.text.TextEngine"] = openfl._internal.text.TextEngine;
openfl._internal.text.TextEngine.__name__ = ["openfl","_internal","text","TextEngine"];
openfl._internal.text.TextEngine.__canvas = null;
openfl._internal.text.TextEngine.__context = null;
openfl._internal.text.TextEngine.getFont = function(format) {
	var font;
	if(format.italic) font = "italic "; else font = "normal ";
	font += "normal ";
	if(format.bold) font += "bold "; else font += "normal ";
	font += format.size + "px";
	font += "/" + (format.size + format.leading + 6) + "px ";
	font += "" + (function($this) {
		var $r;
		var _g = format.font;
		$r = (function($this) {
			var $r;
			switch(_g) {
			case "_sans":
				$r = "sans-serif";
				break;
			case "_serif":
				$r = "serif";
				break;
			case "_typewriter":
				$r = "monospace";
				break;
			default:
				$r = "'" + format.font + "'";
			}
			return $r;
		}($this));
		return $r;
	}(this));
	return font;
};
openfl._internal.text.TextEngine.prototype = {
	getBounds: function() {
		var padding;
		if(this.border) padding = 1; else padding = 0;
		this.bounds.width = this.width + padding;
		this.bounds.height = this.height + padding;
	}
	,getLineMeasurements: function() {
		this.lineAscents.splice(0,this.lineAscents.length);
		this.lineDescents.splice(0,this.lineDescents.length);
		this.lineLeadings.splice(0,this.lineLeadings.length);
		this.lineHeights.splice(0,this.lineHeights.length);
		this.lineWidths.splice(0,this.lineWidths.length);
		var currentLineAscent = 0.0;
		var currentLineDescent = 0.0;
		var currentLineLeading = null;
		var currentLineHeight = 0.0;
		var currentLineWidth = 0.0;
		this.textWidth = 0;
		this.textHeight = 0;
		this.numLines = 1;
		this.bottomScrollV = 0;
		this.maxScrollH = 0;
		var _g = 0;
		var _g1 = this.layoutGroups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			while(group.lineIndex > this.numLines - 1) {
				this.lineAscents.push(currentLineAscent);
				this.lineDescents.push(currentLineDescent);
				this.lineLeadings.push(currentLineLeading != null?currentLineLeading:0);
				this.lineHeights.push(currentLineHeight);
				this.lineWidths.push(currentLineWidth);
				currentLineAscent = 0;
				currentLineDescent = 0;
				currentLineLeading = null;
				currentLineHeight = 0;
				currentLineWidth = 0;
				this.numLines++;
				if(this.textHeight <= this.height - 2) this.bottomScrollV++;
			}
			currentLineAscent = Math.max(currentLineAscent,group.ascent);
			currentLineDescent = Math.max(currentLineDescent,group.descent);
			if(currentLineLeading == null) currentLineLeading = group.leading; else currentLineLeading = Std["int"](Math.max(currentLineLeading,group.leading));
			currentLineHeight = Math.max(currentLineHeight,group.height);
			currentLineWidth = group.offsetX - 2 + group.width;
			if(currentLineWidth > this.textWidth) this.textWidth = currentLineWidth;
			this.textHeight = group.offsetY - 2 + group.ascent + group.descent;
		}
		this.lineAscents.push(currentLineAscent);
		this.lineDescents.push(currentLineDescent);
		this.lineLeadings.push(currentLineLeading != null?currentLineLeading:0);
		this.lineHeights.push(currentLineHeight);
		this.lineWidths.push(currentLineWidth);
		if(this.numLines == 1) {
			this.bottomScrollV = 1;
			if(currentLineLeading > 0) this.textHeight += currentLineLeading;
		} else if(this.textHeight <= this.height - 2) this.bottomScrollV++;
		if(this.textWidth > this.width - 4) this.maxScrollH = this.textWidth - this.width + 4 | 0; else this.maxScrollH = 0;
		this.maxScrollV = this.numLines - this.bottomScrollV + 1;
	}
	,getLayoutGroups: function() {
		var _g = this;
		this.layoutGroups.splice(0,this.layoutGroups.length);
		var rangeIndex = -1;
		var formatRange = null;
		var font = null;
		var currentFormat = openfl.text.TextField.__defaultTextFormat.clone();
		var ascent;
		var descent;
		var leading;
		var layoutGroup;
		var advances;
		var widthValue;
		var heightValue;
		var spaceWidth = 0.0;
		var previousSpaceIndex = 0;
		var spaceIndex = this.text.indexOf(" ");
		var breakIndex = this.text.indexOf("\n");
		var marginRight = 0.0;
		var offsetX = 2.0;
		var offsetY = 2.0;
		var textIndex = 0;
		var lineIndex = 0;
		var lineFormat = null;
		var getAdvances = function(text,startIndex,endIndex) {
			var advances1 = [];
			var _g1 = startIndex;
			while(_g1 < endIndex) {
				var i = _g1++;
				advances1.push(openfl._internal.text.TextEngine.__context.measureText(text.charAt(i)).width);
			}
			return advances1;
		};
		var getAdvancesWidth = function(advances2) {
			var width = 0.0;
			var _g2 = 0;
			while(_g2 < advances2.length) {
				var advance = advances2[_g2];
				++_g2;
				width += advance;
			}
			return width;
		};
		var getTextWidth = function(text1) {
			return openfl._internal.text.TextEngine.__context.measureText(text1).width;
		};
		var nextFormatRange = function() {
			if(rangeIndex < _g.textFormatRanges.length - 1) {
				rangeIndex++;
				formatRange = _g.textFormatRanges[rangeIndex];
				currentFormat.__merge(formatRange.format);
				openfl._internal.text.TextEngine.__context.font = openfl._internal.text.TextEngine.getFont(currentFormat);
				ascent = currentFormat.size;
				descent = currentFormat.size * 0.185;
				leading = currentFormat.leading;
				heightValue = ascent + descent + leading;
				if(spaceIndex > -1) spaceWidth = getTextWidth(" ");
			}
		};
		nextFormatRange();
		lineFormat = formatRange.format;
		var wrap;
		while(textIndex < this.text.length) if(breakIndex > -1 && (spaceIndex == -1 || breakIndex < spaceIndex) && formatRange.end >= breakIndex) {
			layoutGroup = new openfl._internal.text.TextLayoutGroup(formatRange.format,textIndex,breakIndex);
			layoutGroup.advances = getAdvances(this.text,textIndex,breakIndex);
			layoutGroup.offsetX = offsetX;
			layoutGroup.ascent = ascent;
			layoutGroup.descent = descent;
			layoutGroup.leading = leading;
			layoutGroup.lineIndex = lineIndex;
			layoutGroup.offsetY = offsetY;
			layoutGroup.width = getAdvancesWidth(layoutGroup.advances);
			layoutGroup.height = heightValue;
			this.layoutGroups.push(layoutGroup);
			offsetY += heightValue;
			offsetX = 2;
			if(this.wordWrap && layoutGroup.offsetX + layoutGroup.width > this.width - 2) {
				layoutGroup.offsetY = offsetY;
				layoutGroup.offsetX = offsetX;
				offsetY += heightValue;
				lineIndex++;
			}
			textIndex = breakIndex + 1;
			breakIndex = this.text.indexOf("\n",textIndex);
			lineIndex++;
			if(formatRange.end == breakIndex) {
				nextFormatRange();
				lineFormat = formatRange.format;
			}
		} else if(formatRange.end >= spaceIndex && spaceIndex > -1) {
			layoutGroup = null;
			wrap = false;
			while(true) {
				if(spaceIndex == -1) spaceIndex = formatRange.end;
				advances = getAdvances(this.text,textIndex,spaceIndex);
				widthValue = getAdvancesWidth(advances);
				if(this.wordWrap) {
					if(offsetX + widthValue > this.width - 2) wrap = true;
				}
				if(wrap) {
					offsetY += heightValue;
					var i1 = this.layoutGroups.length - 1;
					var offsetCount = 0;
					while(true) {
						layoutGroup = this.layoutGroups[i1];
						if(i1 > 0 && layoutGroup.startIndex > previousSpaceIndex) offsetCount++; else break;
						i1--;
					}
					lineIndex++;
					offsetX = 2;
					if(offsetCount > 0) {
						var bumpX = this.layoutGroups[this.layoutGroups.length - offsetCount].offsetX;
						var _g11 = this.layoutGroups.length - offsetCount;
						var _g3 = this.layoutGroups.length;
						while(_g11 < _g3) {
							var i2 = _g11++;
							layoutGroup = this.layoutGroups[i2];
							layoutGroup.offsetX -= bumpX;
							layoutGroup.offsetY = offsetY;
							layoutGroup.lineIndex = lineIndex;
							offsetX += layoutGroup.width;
						}
					}
					layoutGroup = new openfl._internal.text.TextLayoutGroup(formatRange.format,textIndex,spaceIndex);
					layoutGroup.advances = advances;
					layoutGroup.offsetX = offsetX;
					layoutGroup.ascent = ascent;
					layoutGroup.descent = descent;
					layoutGroup.leading = leading;
					layoutGroup.lineIndex = lineIndex;
					layoutGroup.offsetY = offsetY;
					layoutGroup.width = widthValue;
					layoutGroup.height = heightValue;
					this.layoutGroups.push(layoutGroup);
					offsetX += widthValue + spaceWidth;
					marginRight = spaceWidth;
					wrap = false;
				} else {
					if(layoutGroup != null && textIndex == spaceIndex) {
						if(formatRange.format.align != openfl.text.TextFormatAlign.JUSTIFY) layoutGroup.endIndex = spaceIndex;
						layoutGroup.advances.push(spaceWidth);
						marginRight += spaceWidth;
					} else if(layoutGroup == null || lineFormat.align == openfl.text.TextFormatAlign.JUSTIFY) {
						layoutGroup = new openfl._internal.text.TextLayoutGroup(formatRange.format,textIndex,spaceIndex);
						layoutGroup.advances = advances;
						layoutGroup.offsetX = offsetX;
						layoutGroup.ascent = ascent;
						layoutGroup.descent = descent;
						layoutGroup.leading = leading;
						layoutGroup.lineIndex = lineIndex;
						layoutGroup.offsetY = offsetY;
						layoutGroup.width = widthValue;
						layoutGroup.height = heightValue;
						this.layoutGroups.push(layoutGroup);
						layoutGroup.advances.push(spaceWidth);
						marginRight = spaceWidth;
					} else {
						layoutGroup.endIndex = spaceIndex;
						layoutGroup.advances = layoutGroup.advances.concat(advances);
						layoutGroup.width += marginRight + widthValue;
						layoutGroup.advances.push(spaceWidth);
						marginRight = spaceWidth;
					}
					offsetX += widthValue + spaceWidth;
				}
				textIndex = spaceIndex + 1;
				previousSpaceIndex = spaceIndex;
				spaceIndex = this.text.indexOf(" ",previousSpaceIndex + 1);
				if(formatRange.end <= previousSpaceIndex) {
					layoutGroup = null;
					nextFormatRange();
				}
				if(spaceIndex > breakIndex && breakIndex > -1 || textIndex > this.text.length || spaceIndex > formatRange.end || spaceIndex == -1 && breakIndex > -1) break;
			}
		} else {
			if(textIndex >= formatRange.end) break;
			layoutGroup = new openfl._internal.text.TextLayoutGroup(formatRange.format,textIndex,formatRange.end);
			layoutGroup.advances = getAdvances(this.text,textIndex,formatRange.end);
			layoutGroup.offsetX = offsetX;
			layoutGroup.ascent = ascent;
			layoutGroup.descent = descent;
			layoutGroup.leading = leading;
			layoutGroup.lineIndex = lineIndex;
			layoutGroup.offsetY = offsetY;
			layoutGroup.width = getAdvancesWidth(layoutGroup.advances);
			layoutGroup.height = heightValue;
			this.layoutGroups.push(layoutGroup);
			offsetX += layoutGroup.width;
			textIndex = formatRange.end;
			nextFormatRange();
		}
	}
	,setTextAlignment: function() {
		var lineIndex = -1;
		var offsetX = 0.0;
		var group;
		var lineLength;
		var _g1 = 0;
		var _g = this.layoutGroups.length;
		while(_g1 < _g) {
			var i = _g1++;
			group = this.layoutGroups[i];
			if(group.lineIndex != lineIndex) {
				lineIndex = group.lineIndex;
				var _g2 = group.format.align;
				switch(_g2[1]) {
				case 3:
					if(this.lineWidths[lineIndex] < this.width - 4) offsetX = Math.round((this.width - 4 - this.lineWidths[lineIndex]) / 2); else offsetX = 0;
					break;
				case 1:
					if(this.lineWidths[lineIndex] < this.width - 4) offsetX = Math.round(this.width - 4 - this.lineWidths[lineIndex]); else offsetX = 0;
					break;
				case 2:
					if(this.lineWidths[lineIndex] < this.width - 4) {
						lineLength = 1;
						var _g4 = i + 1;
						var _g3 = this.layoutGroups.length;
						while(_g4 < _g3) {
							var j = _g4++;
							if(this.layoutGroups[j].lineIndex == lineIndex) lineLength++; else break;
						}
						if(lineLength > 1) {
							group = this.layoutGroups[i + lineLength - 1];
							if(group.endIndex < this.text.length && this.text.charAt(group.endIndex) != "\n") {
								offsetX = (this.width - 4 - this.lineWidths[lineIndex]) / (lineLength - 1);
								var _g31 = 1;
								while(_g31 < lineLength) {
									var j1 = _g31++;
									this.layoutGroups[i + j1].offsetX += offsetX * j1;
								}
							}
						}
					}
					offsetX = 0;
					break;
				default:
					offsetX = 0;
				}
			}
			if(offsetX > 0) group.offsetX += offsetX;
		}
	}
	,update: function() {
		if(this.text == null || StringTools.trim(this.text) == "" || this.textFormatRanges.length == 0) {
			this.lineAscents.splice(0,this.lineAscents.length);
			this.lineBreaks.splice(0,this.lineBreaks.length);
			this.lineDescents.splice(0,this.lineDescents.length);
			this.lineLeadings.splice(0,this.lineLeadings.length);
			this.lineHeights.splice(0,this.lineHeights.length);
			this.lineWidths.splice(0,this.lineWidths.length);
			this.layoutGroups.splice(0,this.layoutGroups.length);
			this.textWidth = 0;
			this.textHeight = 0;
			this.numLines = 1;
			this.maxScrollH = 0;
			this.maxScrollV = 1;
			this.bottomScrollV = 1;
		} else {
			this.getLayoutGroups();
			this.getLineMeasurements();
			this.setTextAlignment();
		}
		this.getBounds();
	}
	,__class__: openfl._internal.text.TextEngine
};
openfl._internal.text.TextFormatRange = function(format,start,end) {
	this.format = format;
	this.start = start;
	this.end = end;
};
$hxClasses["openfl._internal.text.TextFormatRange"] = openfl._internal.text.TextFormatRange;
openfl._internal.text.TextFormatRange.__name__ = ["openfl","_internal","text","TextFormatRange"];
openfl._internal.text.TextFormatRange.prototype = {
	__class__: openfl._internal.text.TextFormatRange
};
openfl._internal.text.TextLayoutGroup = function(format,startIndex,endIndex) {
	this.format = format;
	this.startIndex = startIndex;
	this.endIndex = endIndex;
};
$hxClasses["openfl._internal.text.TextLayoutGroup"] = openfl._internal.text.TextLayoutGroup;
openfl._internal.text.TextLayoutGroup.__name__ = ["openfl","_internal","text","TextLayoutGroup"];
openfl._internal.text.TextLayoutGroup.prototype = {
	__class__: openfl._internal.text.TextLayoutGroup
};
openfl.display.Application = function() {
	lime.app.Application.call(this);
	if(openfl.Lib.application == null) openfl.Lib.application = this;
};
$hxClasses["openfl.display.Application"] = openfl.display.Application;
openfl.display.Application.__name__ = ["openfl","display","Application"];
openfl.display.Application.__super__ = lime.app.Application;
openfl.display.Application.prototype = $extend(lime.app.Application.prototype,{
	create: function(config) {
		this.config = config;
		this.backend.create(config);
		if(config != null) {
			if(Object.prototype.hasOwnProperty.call(config,"fps")) this.backend.setFrameRate(config.fps);
			if(Object.prototype.hasOwnProperty.call(config,"windows")) {
				var _g = 0;
				var _g1 = config.windows;
				while(_g < _g1.length) {
					var windowConfig = _g1[_g];
					++_g;
					var $window = new openfl.display.Window(windowConfig);
					this.createWindow($window);
					break;
				}
			}
			if(this.preloader == null || this.preloader.complete) this.onPreloadComplete();
		}
	}
	,__class__: openfl.display.Application
});
openfl.display.Bitmap = function(bitmapData,pixelSnapping,smoothing) {
	if(smoothing == null) smoothing = false;
	openfl.display.DisplayObject.call(this);
	this.bitmapData = bitmapData;
	this.pixelSnapping = pixelSnapping;
	this.smoothing = smoothing;
	if(pixelSnapping == null) this.pixelSnapping = openfl.display.PixelSnapping.AUTO;
};
$hxClasses["openfl.display.Bitmap"] = openfl.display.Bitmap;
openfl.display.Bitmap.__name__ = ["openfl","display","Bitmap"];
openfl.display.Bitmap.__super__ = openfl.display.DisplayObject;
openfl.display.Bitmap.prototype = $extend(openfl.display.DisplayObject.prototype,{
	__getBounds: function(rect,matrix) {
		if(this.bitmapData != null) {
			var bounds = openfl.geom.Rectangle.__temp;
			bounds.setTo(0,0,this.bitmapData.width,this.bitmapData.height);
			bounds.__transform(bounds,matrix);
			rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
		}
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || this.__isMask || this.bitmapData == null) return false;
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) return false;
		this.__getTransform();
		var px = this.__worldTransform.__transformInverseX(x,y);
		var py = this.__worldTransform.__transformInverseY(x,y);
		if(px > 0 && py > 0 && px <= this.bitmapData.width && py <= this.bitmapData.height) {
			if(stack != null && !interactiveOnly) stack.push(this);
			return true;
		}
		return false;
	}
	,__hitTestMask: function(x,y) {
		if(this.bitmapData == null) return false;
		this.__getTransform();
		var px = this.__worldTransform.__transformInverseX(x,y);
		var py = this.__worldTransform.__transformInverseY(x,y);
		if(px > 0 && py > 0 && px <= this.bitmapData.width && py <= this.bitmapData.height) return true;
		return false;
	}
	,__renderCairo: function(renderSession) {
		openfl._internal.renderer.cairo.CairoBitmap.render(this,renderSession);
	}
	,__renderCairoMask: function(renderSession) {
		renderSession.cairo.rectangle(0,0,this.get_width(),this.get_height());
	}
	,__renderCanvas: function(renderSession) {
		openfl._internal.renderer.canvas.CanvasBitmap.render(this,renderSession);
	}
	,__renderCanvasMask: function(renderSession) {
		renderSession.context.rect(0,0,this.get_width(),this.get_height());
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.__renderable && this.bitmapData != null && this.bitmapData.__isValid) {
			if(this.bitmapData.image.buffer.__srcImage != null) openfl._internal.renderer.dom.DOMBitmap.renderImage(this,renderSession); else openfl._internal.renderer.dom.DOMBitmap.renderCanvas(this,renderSession);
		} else {
			if(this.__image != null) {
				renderSession.element.removeChild(this.__image);
				this.__image = null;
				this.__style = null;
			}
			if(this.__canvas != null) {
				renderSession.element.removeChild(this.__canvas);
				this.__canvas = null;
				this.__style = null;
			}
		}
	}
	,__renderGL: function(renderSession) {
		if(this.get_scrollRect() != null) {
			renderSession.spriteBatch.stop();
			var m = this.__worldTransform.clone();
			var clip = openfl.geom.Rectangle.__temp;
			this.get_scrollRect().__transform(clip,m);
			clip.y = renderSession.renderer.height - clip.y - clip.height;
			renderSession.spriteBatch.start(clip);
		}
		if(!this.__renderable || this.__worldAlpha <= 0 || this.bitmapData == null || !this.bitmapData.__isValid) null; else renderSession.spriteBatch.renderBitmapData(this.bitmapData,this.smoothing,this.__worldTransform,this.__worldColorTransform,this.__worldAlpha,this.__blendMode,this.pixelSnapping);
		if(this.get_scrollRect() != null) {
			renderSession.spriteBatch.stop();
			renderSession.spriteBatch.start();
		}
	}
	,__updateMask: function(maskGraphics) {
		maskGraphics.__commands.push(openfl.display.DrawCommand.OverrideMatrix(this.__worldTransform));
		maskGraphics.beginFill(0);
		maskGraphics.drawRect(0,0,this.bitmapData.width,this.bitmapData.height);
		if(maskGraphics.__bounds == null) maskGraphics.__bounds = new openfl.geom.Rectangle();
		this.__getBounds(maskGraphics.__bounds,openfl.geom.Matrix.__identity);
		openfl.display.DisplayObject.prototype.__updateMask.call(this,maskGraphics);
	}
	,get_height: function() {
		if(this.bitmapData != null) return this.bitmapData.height * this.get_scaleY();
		return 0;
	}
	,get_width: function() {
		if(this.bitmapData != null) return this.bitmapData.width * this.get_scaleX();
		return 0;
	}
	,__class__: openfl.display.Bitmap
});
openfl.display.BitmapData = function(width,height,transparent,fillColor) {
	if(fillColor == null) fillColor = -1;
	if(transparent == null) transparent = true;
	this.__usingFramebuffer = false;
	this.transparent = transparent;
	if(width == null) width = 0; else width = width;
	if(height == null) height = 0; else height = height;
	if(width < 0) width = 0; else width = width;
	if(height < 0) height = 0; else height = height;
	this.width = width;
	this.height = height;
	this.rect = new openfl.geom.Rectangle(0,0,width,height);
	if(width > 0 && height > 0) {
		if(transparent) {
			if((function($this) {
				var $r;
				var $int = fillColor & -16777216;
				$r = $int < 0?4294967296.0 + $int:$int + 0.0;
				return $r;
			}(this)) == 0) fillColor = 0;
		} else fillColor = -16777216 | fillColor & 16777215;
		fillColor = fillColor << 8 | fillColor >> 24 & 255;
		this.image = new lime.graphics.Image(null,0,0,width,height,fillColor);
		this.image.set_transparent(transparent);
		this.__isValid = true;
	}
	this.__createUVs();
	this.__worldTransform = new openfl.geom.Matrix();
	this.__worldColorTransform = new openfl.geom.ColorTransform();
};
$hxClasses["openfl.display.BitmapData"] = openfl.display.BitmapData;
openfl.display.BitmapData.__name__ = ["openfl","display","BitmapData"];
openfl.display.BitmapData.__interfaces__ = [openfl.display.IBitmapDrawable];
openfl.display.BitmapData.fromCanvas = function(canvas,transparent) {
	if(transparent == null) transparent = true;
	if(canvas == null) return null;
	var bitmapData = new openfl.display.BitmapData(0,0,transparent);
	bitmapData.__fromImage(lime.graphics.Image.fromCanvas(canvas));
	bitmapData.image.set_transparent(transparent);
	return bitmapData;
};
openfl.display.BitmapData.fromImage = function(image,transparent) {
	if(transparent == null) transparent = true;
	if(image == null || image.buffer == null) return null;
	var bitmapData = new openfl.display.BitmapData(0,0,transparent);
	bitmapData.__fromImage(image);
	bitmapData.image.set_transparent(transparent);
	return bitmapData;
};
openfl.display.BitmapData.prototype = {
	copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(!this.__isValid || sourceBitmapData == null) return;
		this.image.copyPixels(sourceBitmapData.image,sourceRect.__toLimeRectangle(),destPoint.__toLimeVector2(),alphaBitmapData != null?alphaBitmapData.image:null,alphaPoint != null?alphaPoint.__toLimeVector2():null,mergeAlpha);
		this.__usingFramebuffer = false;
	}
	,dispose: function() {
		this.image = null;
		this.width = 0;
		this.height = 0;
		this.rect = null;
		this.__isValid = false;
		if(this.__texture != null) {
			var renderer = openfl.Lib.current.stage.__renderer;
			if(renderer != null) {
				var renderSession = renderer.renderSession;
				var gl = renderSession.gl;
				if(gl != null) {
					gl.deleteTexture(this.__texture);
					this.__texture = null;
				}
			}
		}
		if(this.__framebuffer != null) {
			this.__framebuffer.destroy();
			this.__framebuffer = null;
		}
	}
	,draw: function(source,matrix,colorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		if(!this.__isValid) return;
		lime.graphics.utils.ImageCanvasUtil.convertToCanvas(this.image);
		lime.graphics.utils.ImageCanvasUtil.sync(this.image);
		var buffer = this.image.buffer;
		var renderSession = new openfl._internal.renderer.RenderSession();
		renderSession.context = buffer.__srcContext;
		renderSession.roundPixels = true;
		renderSession.maskManager = new openfl._internal.renderer.canvas.CanvasMaskManager(renderSession);
		if(!smoothing) {
			buffer.__srcContext.mozImageSmoothingEnabled = false;
			buffer.__srcContext.msImageSmoothingEnabled = false;
			buffer.__srcContext.imageSmoothingEnabled = false;
		}
		if(clipRect != null) renderSession.maskManager.pushRect(clipRect,new openfl.geom.Matrix());
		var matrixCache = source.__worldTransform;
		if(matrix != null) source.__worldTransform = matrix; else source.__worldTransform = new openfl.geom.Matrix();
		source.__updateChildren(false);
		source.__renderCanvas(renderSession);
		source.__worldTransform = matrixCache;
		source.__updateChildren(true);
		if(!smoothing) {
			buffer.__srcContext.mozImageSmoothingEnabled = true;
			buffer.__srcContext.msImageSmoothingEnabled = true;
			buffer.__srcContext.imageSmoothingEnabled = true;
		}
		if(clipRect != null) renderSession.maskManager.popMask();
		buffer.__srcContext.setTransform(1,0,0,1,0,0);
		buffer.__srcImageData = null;
		buffer.data = null;
	}
	,getSurface: function() {
		if(!this.__isValid) return null;
		if(this.__surface == null) this.__surface = lime.graphics.cairo._CairoImageSurface.CairoImageSurface_Impl_.fromImage(this.image);
		return this.__surface;
	}
	,getTexture: function(gl) {
		if(!this.__isValid) return null;
		if(this.__usingFramebuffer && this.__framebuffer != null) return this.__framebuffer.texture;
		if(this.__texture == null) {
			this.__texture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D,this.__texture);
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
			this.image.dirty = true;
		}
		if(this.image != null && this.image.dirty) {
			var internalFormat;
			var format;
			if(this.__surface != null) lime.graphics.cairo._CairoSurface.CairoSurface_Impl_.flush(this.__surface);
			if(this.image.buffer.bitsPerPixel == 1) {
				internalFormat = gl.ALPHA;
				format = gl.ALPHA;
			} else {
				internalFormat = gl.RGBA;
				format = gl.RGBA;
			}
			gl.bindTexture(gl.TEXTURE_2D,this.__texture);
			var textureImage = this.image;
			if(!textureImage.get_premultiplied() && textureImage.get_transparent() || textureImage.get_format() != 0) {
				textureImage = textureImage.clone();
				textureImage.set_format(0);
				textureImage.set_premultiplied(true);
			}
			gl.texImage2D(gl.TEXTURE_2D,0,internalFormat,this.width,this.height,0,format,gl.UNSIGNED_BYTE,textureImage.get_data());
			gl.bindTexture(gl.TEXTURE_2D,null);
			this.image.dirty = false;
		}
		return this.__texture;
	}
	,__createUVs: function() {
		if(this.__uvData == null) this.__uvData = new openfl.display.TextureUvs();
		this.__uvData.x0 = 0;
		this.__uvData.y0 = 0;
		this.__uvData.x1 = 1;
		this.__uvData.y1 = 0;
		this.__uvData.x2 = 1;
		this.__uvData.y2 = 1;
		this.__uvData.x3 = 0;
		this.__uvData.y3 = 1;
	}
	,__fromImage: function(image) {
		if(image != null && image.buffer != null) {
			this.image = image;
			this.width = image.width;
			this.height = image.height;
			this.rect = new openfl.geom.Rectangle(0,0,image.width,image.height);
			this.__isValid = true;
		}
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__isValid) return;
		lime.graphics.utils.ImageCanvasUtil.sync(this.image);
		var context = renderSession.context;
		if(this.__worldTransform == null) this.__worldTransform = new openfl.geom.Matrix();
		context.globalAlpha = 1;
		var transform = this.__worldTransform;
		if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		context.drawImage(this.image.get_src(),0,0);
	}
	,__sync: function() {
		lime.graphics.utils.ImageCanvasUtil.sync(this.image);
	}
	,__updateChildren: function(transformOnly) {
	}
	,__class__: openfl.display.BitmapData
};
openfl.display.TextureUvs = function() {
	this.y3 = 0;
	this.y2 = 0;
	this.y1 = 0;
	this.y0 = 0;
	this.x3 = 0;
	this.x2 = 0;
	this.x1 = 0;
	this.x0 = 0;
};
$hxClasses["openfl.display.TextureUvs"] = openfl.display.TextureUvs;
openfl.display.TextureUvs.__name__ = ["openfl","display","TextureUvs"];
openfl.display.TextureUvs.prototype = {
	__class__: openfl.display.TextureUvs
};
openfl.display.BlendMode = $hxClasses["openfl.display.BlendMode"] = { __ename__ : ["openfl","display","BlendMode"], __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] };
openfl.display.BlendMode.ADD = ["ADD",0];
openfl.display.BlendMode.ADD.toString = $estr;
openfl.display.BlendMode.ADD.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.ALPHA = ["ALPHA",1];
openfl.display.BlendMode.ALPHA.toString = $estr;
openfl.display.BlendMode.ALPHA.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.DARKEN = ["DARKEN",2];
openfl.display.BlendMode.DARKEN.toString = $estr;
openfl.display.BlendMode.DARKEN.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
openfl.display.BlendMode.DIFFERENCE.toString = $estr;
openfl.display.BlendMode.DIFFERENCE.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.ERASE = ["ERASE",4];
openfl.display.BlendMode.ERASE.toString = $estr;
openfl.display.BlendMode.ERASE.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
openfl.display.BlendMode.HARDLIGHT.toString = $estr;
openfl.display.BlendMode.HARDLIGHT.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.INVERT = ["INVERT",6];
openfl.display.BlendMode.INVERT.toString = $estr;
openfl.display.BlendMode.INVERT.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.LAYER = ["LAYER",7];
openfl.display.BlendMode.LAYER.toString = $estr;
openfl.display.BlendMode.LAYER.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
openfl.display.BlendMode.LIGHTEN.toString = $estr;
openfl.display.BlendMode.LIGHTEN.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
openfl.display.BlendMode.MULTIPLY.toString = $estr;
openfl.display.BlendMode.MULTIPLY.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.NORMAL = ["NORMAL",10];
openfl.display.BlendMode.NORMAL.toString = $estr;
openfl.display.BlendMode.NORMAL.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.OVERLAY = ["OVERLAY",11];
openfl.display.BlendMode.OVERLAY.toString = $estr;
openfl.display.BlendMode.OVERLAY.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.SCREEN = ["SCREEN",12];
openfl.display.BlendMode.SCREEN.toString = $estr;
openfl.display.BlendMode.SCREEN.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
openfl.display.BlendMode.SUBTRACT.toString = $estr;
openfl.display.BlendMode.SUBTRACT.__enum__ = openfl.display.BlendMode;
openfl.display.CapsStyle = $hxClasses["openfl.display.CapsStyle"] = { __ename__ : ["openfl","display","CapsStyle"], __constructs__ : ["NONE","ROUND","SQUARE"] };
openfl.display.CapsStyle.NONE = ["NONE",0];
openfl.display.CapsStyle.NONE.toString = $estr;
openfl.display.CapsStyle.NONE.__enum__ = openfl.display.CapsStyle;
openfl.display.CapsStyle.ROUND = ["ROUND",1];
openfl.display.CapsStyle.ROUND.toString = $estr;
openfl.display.CapsStyle.ROUND.__enum__ = openfl.display.CapsStyle;
openfl.display.CapsStyle.SQUARE = ["SQUARE",2];
openfl.display.CapsStyle.SQUARE.toString = $estr;
openfl.display.CapsStyle.SQUARE.__enum__ = openfl.display.CapsStyle;
openfl.display.FrameLabel = function() { };
$hxClasses["openfl.display.FrameLabel"] = openfl.display.FrameLabel;
openfl.display.FrameLabel.__name__ = ["openfl","display","FrameLabel"];
openfl.display.FrameLabel.__super__ = openfl.events.EventDispatcher;
openfl.display.FrameLabel.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	__class__: openfl.display.FrameLabel
});
openfl.display.GradientType = $hxClasses["openfl.display.GradientType"] = { __ename__ : ["openfl","display","GradientType"], __constructs__ : ["RADIAL","LINEAR"] };
openfl.display.GradientType.RADIAL = ["RADIAL",0];
openfl.display.GradientType.RADIAL.toString = $estr;
openfl.display.GradientType.RADIAL.__enum__ = openfl.display.GradientType;
openfl.display.GradientType.LINEAR = ["LINEAR",1];
openfl.display.GradientType.LINEAR.toString = $estr;
openfl.display.GradientType.LINEAR.__enum__ = openfl.display.GradientType;
openfl.display.Graphics = function() {
	this.__visible = true;
	this.__glStack = [];
	this.__dirty = true;
	this.__commands = [];
	this.__commands = new Array();
	this.__halfStrokeWidth = 0;
	this.__positionX = 0;
	this.__positionY = 0;
	this.__hardware = true;
	this.moveTo(0,0);
};
$hxClasses["openfl.display.Graphics"] = openfl.display.Graphics;
openfl.display.Graphics.__name__ = ["openfl","display","Graphics"];
openfl.display.Graphics.prototype = {
	beginBitmapFill: function(bitmap,matrix,repeat,smooth) {
		if(smooth == null) smooth = false;
		if(repeat == null) repeat = true;
		this.__commands.push(openfl.display.DrawCommand.BeginBitmapFill(bitmap,matrix != null?new openfl.geom.Matrix(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty):null,repeat,smooth));
		this.__visible = true;
	}
	,beginFill: function(color,alpha) {
		if(alpha == null) alpha = 1;
		if(color == null) color = 0;
		this.__commands.push(openfl.display.DrawCommand.BeginFill(color & 16777215,alpha));
		if(alpha > 0) this.__visible = true;
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.__commands.push(openfl.display.DrawCommand.BeginGradientFill(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio));
		this.__hardware = false;
		var _g = 0;
		while(_g < alphas.length) {
			var alpha = alphas[_g];
			++_g;
			if(alpha > 0) {
				this.__visible = true;
				break;
			}
		}
	}
	,clear: function() {
		this.__commands = new Array();
		this.__halfStrokeWidth = 0;
		if(this.__bounds != null) {
			this.set___dirty(true);
			this.__transformDirty = true;
			this.__bounds = null;
		}
		this.__visible = false;
		this.__hardware = true;
		this.moveTo(0,0);
	}
	,curveTo: function(controlX,controlY,anchorX,anchorY) {
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		var ix;
		var iy;
		if(controlX < anchorX && controlX > this.__positionX || controlX > anchorX && controlX < this.__positionX) ix = anchorX; else {
			var tx = (this.__positionX - controlX) / (this.__positionX - 2 * controlX + anchorX);
			ix = this.__calculateBezierQuadPoint(tx,this.__positionX,controlX,anchorX);
		}
		if(controlY < anchorY && controlY > this.__positionY || controlY > anchorY && controlY < this.__positionY) iy = anchorY; else {
			var ty = (this.__positionY - controlY) / (this.__positionY - 2 * controlY + anchorY);
			iy = this.__calculateBezierQuadPoint(ty,this.__positionY,controlY,anchorY);
		}
		this.__inflateBounds(ix - this.__halfStrokeWidth,iy - this.__halfStrokeWidth);
		this.__inflateBounds(ix + this.__halfStrokeWidth,iy + this.__halfStrokeWidth);
		this.__positionX = anchorX;
		this.__positionY = anchorY;
		this.__commands.push(openfl.display.DrawCommand.CurveTo(controlX,controlY,anchorX,anchorY));
		this.__hardware = false;
		this.set___dirty(true);
	}
	,drawRect: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.DrawRect(x,y,width,height));
		this.set___dirty(true);
	}
	,endFill: function() {
		this.__commands.push(openfl.display.DrawCommand.EndFill);
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		if(thickness > this.__halfStrokeWidth) this.__halfStrokeWidth = thickness / 2; else this.__halfStrokeWidth = this.__halfStrokeWidth;
		this.__commands.push(openfl.display.DrawCommand.LineStyle(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit));
		if(thickness != null) this.__visible = true;
	}
	,lineTo: function(x,y) {
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__positionX = x;
		this.__positionY = y;
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.LineTo(x,y));
		this.__hardware = false;
		this.set___dirty(true);
	}
	,moveTo: function(x,y) {
		this.__positionX = x;
		this.__positionY = y;
		this.__commands.push(openfl.display.DrawCommand.MoveTo(x,y));
	}
	,__calculateBezierQuadPoint: function(t,p1,p2,p3) {
		var iT = 1 - t;
		return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
	}
	,__getBounds: function(rect,matrix) {
		if(this.__bounds == null) return;
		var bounds = openfl.geom.Rectangle.__temp;
		this.__bounds.__transform(bounds,matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__hitTest: function(x,y,shapeFlag,matrix) {
		if(this.__bounds == null) return false;
		var px = matrix.__transformInverseX(x,y);
		var py = matrix.__transformInverseY(x,y);
		if(px > this.__bounds.x && py > this.__bounds.y && this.__bounds.contains(px,py)) {
			if(shapeFlag) return openfl._internal.renderer.canvas.CanvasGraphics.hitTest(this,px,py);
			return true;
		}
		return false;
	}
	,__inflateBounds: function(x,y) {
		if(this.__bounds == null) {
			this.__bounds = new openfl.geom.Rectangle(x,y,0,0);
			this.__transformDirty = true;
			return;
		}
		if(x < this.__bounds.x) {
			this.__bounds.width += this.__bounds.x - x;
			this.__bounds.x = x;
			this.__transformDirty = true;
		}
		if(y < this.__bounds.y) {
			this.__bounds.height += this.__bounds.y - y;
			this.__bounds.y = y;
			this.__transformDirty = true;
		}
		if(x > this.__bounds.x + this.__bounds.width) this.__bounds.width = x - this.__bounds.x;
		if(y > this.__bounds.y + this.__bounds.height) this.__bounds.height = y - this.__bounds.y;
	}
	,set___dirty: function(value) {
		if(value && this.__owner != null) this.__owner.__setRenderDirty();
		return this.__dirty = value;
	}
	,__class__: openfl.display.Graphics
	,__properties__: {set___dirty:"set___dirty"}
};
openfl.display.DrawCommand = $hxClasses["openfl.display.DrawCommand"] = { __ename__ : ["openfl","display","DrawCommand"], __constructs__ : ["BeginBitmapFill","BeginFill","BeginGradientFill","CubicCurveTo","CurveTo","DrawCircle","DrawEllipse","DrawRect","DrawRoundRect","DrawTiles","DrawTriangles","EndFill","LineStyle","LineBitmapStyle","LineGradientStyle","LineTo","MoveTo","DrawPathC","OverrideMatrix"] };
openfl.display.DrawCommand.BeginBitmapFill = function(bitmap,matrix,repeat,smooth) { var $x = ["BeginBitmapFill",0,bitmap,matrix,repeat,smooth]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.BeginFill = function(color,alpha) { var $x = ["BeginFill",1,color,alpha]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.BeginGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) { var $x = ["BeginGradientFill",2,type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.CubicCurveTo = function(controlX1,controlY1,controlX2,controlY2,anchorX,anchorY) { var $x = ["CubicCurveTo",3,controlX1,controlY1,controlX2,controlY2,anchorX,anchorY]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.CurveTo = function(controlX,controlY,anchorX,anchorY) { var $x = ["CurveTo",4,controlX,controlY,anchorX,anchorY]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawCircle = function(x,y,radius) { var $x = ["DrawCircle",5,x,y,radius]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawEllipse = function(x,y,width,height) { var $x = ["DrawEllipse",6,x,y,width,height]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawRect = function(x,y,width,height) { var $x = ["DrawRect",7,x,y,width,height]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawRoundRect = function(x,y,width,height,rx,ry) { var $x = ["DrawRoundRect",8,x,y,width,height,rx,ry]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawTiles = function(sheet,tileData,smooth,flags,count) { var $x = ["DrawTiles",9,sheet,tileData,smooth,flags,count]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawTriangles = function(vertices,indices,uvtData,culling,colors,blendMode) { var $x = ["DrawTriangles",10,vertices,indices,uvtData,culling,colors,blendMode]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.EndFill = ["EndFill",11];
openfl.display.DrawCommand.EndFill.toString = $estr;
openfl.display.DrawCommand.EndFill.__enum__ = openfl.display.DrawCommand;
openfl.display.DrawCommand.LineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) { var $x = ["LineStyle",12,thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.LineBitmapStyle = function(bitmap,matrix,repeat,smooth) { var $x = ["LineBitmapStyle",13,bitmap,matrix,repeat,smooth]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.LineGradientStyle = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) { var $x = ["LineGradientStyle",14,type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.LineTo = function(x,y) { var $x = ["LineTo",15,x,y]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.MoveTo = function(x,y) { var $x = ["MoveTo",16,x,y]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawPathC = function(commands,data,winding) { var $x = ["DrawPathC",17,commands,data,winding]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.OverrideMatrix = function(matrix) { var $x = ["OverrideMatrix",18,matrix]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.GraphicsPathWinding = $hxClasses["openfl.display.GraphicsPathWinding"] = { __ename__ : ["openfl","display","GraphicsPathWinding"], __constructs__ : ["EVEN_ODD","NON_ZERO"] };
openfl.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
openfl.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
openfl.display.GraphicsPathWinding.EVEN_ODD.__enum__ = openfl.display.GraphicsPathWinding;
openfl.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
openfl.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
openfl.display.GraphicsPathWinding.NON_ZERO.__enum__ = openfl.display.GraphicsPathWinding;
openfl.display.InterpolationMethod = $hxClasses["openfl.display.InterpolationMethod"] = { __ename__ : ["openfl","display","InterpolationMethod"], __constructs__ : ["RGB","LINEAR_RGB"] };
openfl.display.InterpolationMethod.RGB = ["RGB",0];
openfl.display.InterpolationMethod.RGB.toString = $estr;
openfl.display.InterpolationMethod.RGB.__enum__ = openfl.display.InterpolationMethod;
openfl.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
openfl.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
openfl.display.InterpolationMethod.LINEAR_RGB.__enum__ = openfl.display.InterpolationMethod;
openfl.display.JointStyle = $hxClasses["openfl.display.JointStyle"] = { __ename__ : ["openfl","display","JointStyle"], __constructs__ : ["MITER","ROUND","BEVEL"] };
openfl.display.JointStyle.MITER = ["MITER",0];
openfl.display.JointStyle.MITER.toString = $estr;
openfl.display.JointStyle.MITER.__enum__ = openfl.display.JointStyle;
openfl.display.JointStyle.ROUND = ["ROUND",1];
openfl.display.JointStyle.ROUND.toString = $estr;
openfl.display.JointStyle.ROUND.__enum__ = openfl.display.JointStyle;
openfl.display.JointStyle.BEVEL = ["BEVEL",2];
openfl.display.JointStyle.BEVEL.toString = $estr;
openfl.display.JointStyle.BEVEL.__enum__ = openfl.display.JointStyle;
openfl.display.LineScaleMode = $hxClasses["openfl.display.LineScaleMode"] = { __ename__ : ["openfl","display","LineScaleMode"], __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] };
openfl.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
openfl.display.LineScaleMode.HORIZONTAL.toString = $estr;
openfl.display.LineScaleMode.HORIZONTAL.__enum__ = openfl.display.LineScaleMode;
openfl.display.LineScaleMode.NONE = ["NONE",1];
openfl.display.LineScaleMode.NONE.toString = $estr;
openfl.display.LineScaleMode.NONE.__enum__ = openfl.display.LineScaleMode;
openfl.display.LineScaleMode.NORMAL = ["NORMAL",2];
openfl.display.LineScaleMode.NORMAL.toString = $estr;
openfl.display.LineScaleMode.NORMAL.__enum__ = openfl.display.LineScaleMode;
openfl.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
openfl.display.LineScaleMode.VERTICAL.toString = $estr;
openfl.display.LineScaleMode.VERTICAL.__enum__ = openfl.display.LineScaleMode;
openfl.display.Loader = function() { };
$hxClasses["openfl.display.Loader"] = openfl.display.Loader;
openfl.display.Loader.__name__ = ["openfl","display","Loader"];
openfl.display.Loader.__super__ = openfl.display.Sprite;
openfl.display.Loader.prototype = $extend(openfl.display.Sprite.prototype,{
	__class__: openfl.display.Loader
});
openfl.display.PixelSnapping = $hxClasses["openfl.display.PixelSnapping"] = { __ename__ : ["openfl","display","PixelSnapping"], __constructs__ : ["NEVER","AUTO","ALWAYS"] };
openfl.display.PixelSnapping.NEVER = ["NEVER",0];
openfl.display.PixelSnapping.NEVER.toString = $estr;
openfl.display.PixelSnapping.NEVER.__enum__ = openfl.display.PixelSnapping;
openfl.display.PixelSnapping.AUTO = ["AUTO",1];
openfl.display.PixelSnapping.AUTO.toString = $estr;
openfl.display.PixelSnapping.AUTO.__enum__ = openfl.display.PixelSnapping;
openfl.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
openfl.display.PixelSnapping.ALWAYS.toString = $estr;
openfl.display.PixelSnapping.ALWAYS.__enum__ = openfl.display.PixelSnapping;
openfl.display.Preloader = function(display) {
	lime.app.Preloader.call(this);
	if(display != null) {
		this.display = display;
		openfl.Lib.current.addChild(display);
		if(js.Boot.__instanceof(display,NMEPreloader)) (js.Boot.__cast(display , NMEPreloader)).onInit();
	}
};
$hxClasses["openfl.display.Preloader"] = openfl.display.Preloader;
openfl.display.Preloader.__name__ = ["openfl","display","Preloader"];
openfl.display.Preloader.__super__ = lime.app.Preloader;
openfl.display.Preloader.prototype = $extend(lime.app.Preloader.prototype,{
	load: function(urls,types) {
		var sounds = [];
		var url = null;
		var _g1 = 0;
		var _g = urls.length;
		while(_g1 < _g) {
			var i = _g1++;
			url = urls[i];
			var _g2 = types[i];
			switch(_g2) {
			case "MUSIC":case "SOUND":
				var sound = haxe.io.Path.withoutExtension(url);
				if(!HxOverrides.remove(sounds,sound)) this.total++;
				sounds.push(sound);
				break;
			default:
			}
		}
		var _g3 = 0;
		while(_g3 < sounds.length) {
			var soundName = sounds[_g3];
			++_g3;
			var sound1 = new openfl.media.Sound();
			sound1.addEventListener(openfl.events.Event.COMPLETE,$bind(this,this.sound_onComplete));
			sound1.addEventListener(openfl.events.IOErrorEvent.IO_ERROR,$bind(this,this.sound_onIOError));
			sound1.load(new openfl.net.URLRequest(soundName + ".ogg"));
		}
		lime.app.Preloader.prototype.load.call(this,urls,types);
	}
	,start: function() {
		if(this.display != null && js.Boot.__instanceof(this.display,NMEPreloader)) {
			this.display.addEventListener(openfl.events.Event.COMPLETE,$bind(this,this.display_onComplete));
			(js.Boot.__cast(this.display , NMEPreloader)).onLoaded();
		} else lime.app.Preloader.prototype.start.call(this);
	}
	,update: function(loaded,total) {
		if(this.display != null && js.Boot.__instanceof(this.display,NMEPreloader)) (js.Boot.__cast(this.display , NMEPreloader)).onUpdate(loaded,total);
	}
	,display_onComplete: function(event) {
		this.display.removeEventListener(openfl.events.Event.COMPLETE,$bind(this,this.display_onComplete));
		openfl.Lib.current.removeChild(this.display);
		openfl.Lib.current.stage.set_focus(null);
		this.display = null;
		lime.app.Preloader.prototype.start.call(this);
	}
	,sound_onComplete: function(event) {
		this.loaded++;
		var listeners = this.onProgress.listeners;
		var repeat = this.onProgress.repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](this.loaded,this.total);
			if(!repeat[i]) this.onProgress.remove(listeners[i]); else i++;
		}
		if(this.loaded == this.total) this.start();
	}
	,sound_onIOError: function(event) {
		this.loaded++;
		var listeners = this.onProgress.listeners;
		var repeat = this.onProgress.repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](this.loaded,this.total);
			if(!repeat[i]) this.onProgress.remove(listeners[i]); else i++;
		}
		if(this.loaded == this.total) this.start();
	}
	,__class__: openfl.display.Preloader
});
openfl.display.SimpleButton = function() { };
$hxClasses["openfl.display.SimpleButton"] = openfl.display.SimpleButton;
openfl.display.SimpleButton.__name__ = ["openfl","display","SimpleButton"];
openfl.display.SimpleButton.__super__ = openfl.display.DisplayObjectContainer;
openfl.display.SimpleButton.prototype = $extend(openfl.display.DisplayObjectContainer.prototype,{
	__getCursor: function() {
		if(this.useHandCursor) return lime.ui.MouseCursor.POINTER; else return null;
	}
	,__class__: openfl.display.SimpleButton
});
openfl.display.SpreadMethod = $hxClasses["openfl.display.SpreadMethod"] = { __ename__ : ["openfl","display","SpreadMethod"], __constructs__ : ["REPEAT","REFLECT","PAD"] };
openfl.display.SpreadMethod.REPEAT = ["REPEAT",0];
openfl.display.SpreadMethod.REPEAT.toString = $estr;
openfl.display.SpreadMethod.REPEAT.__enum__ = openfl.display.SpreadMethod;
openfl.display.SpreadMethod.REFLECT = ["REFLECT",1];
openfl.display.SpreadMethod.REFLECT.toString = $estr;
openfl.display.SpreadMethod.REFLECT.__enum__ = openfl.display.SpreadMethod;
openfl.display.SpreadMethod.PAD = ["PAD",2];
openfl.display.SpreadMethod.PAD.toString = $estr;
openfl.display.SpreadMethod.PAD.__enum__ = openfl.display.SpreadMethod;
openfl.display.Stage = function(window,color) {
	openfl.display.DisplayObjectContainer.call(this);
	this.application = window.application;
	this.window = window;
	if(color == null) {
		this.__transparent = true;
		this.set_color(0);
	} else this.set_color(color);
	this.set_name(null);
	this.__displayState = openfl.display.StageDisplayState.NORMAL;
	this.__mouseX = 0;
	this.__mouseY = 0;
	this.__lastClickTime = 0;
	this.stageWidth = window.__width;
	this.stageHeight = window.__height;
	this.stage = this;
	this.align = openfl.display.StageAlign.TOP_LEFT;
	this.allowsFullScreen = false;
	this.quality = openfl.display.StageQuality.HIGH;
	this.scaleMode = openfl.display.StageScaleMode.NO_SCALE;
	this.stageFocusRect = true;
	this.__clearBeforeRender = true;
	this.__stack = [];
	this.__mouseOutStack = [];
	var this1;
	this1 = new openfl.VectorData();
	var this2;
	this2 = new Array(0);
	this1.data = this2;
	this1.length = 0;
	this1.fixed = false;
	this.stage3Ds = this1;
	var this3 = this.stage3Ds;
	var x = new openfl.display.Stage3D();
	if(!this3.fixed) {
		this3.length++;
		if(this3.data.length < this3.length) {
			var data;
			var this4;
			this4 = new Array(this3.data.length + 10);
			data = this4;
			haxe.ds._Vector.Vector_Impl_.blit(this3.data,0,data,0,this3.data.length);
			this3.data = data;
		}
		this3.data[this3.length - 1] = x;
	}
	this3.length;
	if(openfl.Lib.current.stage == null) this.stage.addChild(openfl.Lib.current);
};
$hxClasses["openfl.display.Stage"] = openfl.display.Stage;
openfl.display.Stage.__name__ = ["openfl","display","Stage"];
openfl.display.Stage.__interfaces__ = [lime.app.IModule];
openfl.display.Stage.__super__ = openfl.display.DisplayObjectContainer;
openfl.display.Stage.prototype = $extend(openfl.display.DisplayObjectContainer.prototype,{
	globalToLocal: function(pos) {
		return pos.clone();
	}
	,onGamepadAxisMove: function(gamepad,axis,value) {
		openfl.ui.GameInput.__onGamepadAxisMove(gamepad,axis,value);
	}
	,onGamepadButtonDown: function(gamepad,button) {
		openfl.ui.GameInput.__onGamepadButtonDown(gamepad,button);
	}
	,onGamepadButtonUp: function(gamepad,button) {
		openfl.ui.GameInput.__onGamepadButtonUp(gamepad,button);
	}
	,onGamepadConnect: function(gamepad) {
		openfl.ui.GameInput.__onGamepadConnect(gamepad);
	}
	,onGamepadDisconnect: function(gamepad) {
		openfl.ui.GameInput.__onGamepadDisconnect(gamepad);
	}
	,onKeyDown: function(window,keyCode,modifier) {
		if(this.window == null || this.window != window) return;
		this.__onKey(openfl.events.KeyboardEvent.KEY_DOWN,keyCode,modifier);
	}
	,onKeyUp: function(window,keyCode,modifier) {
		if(this.window == null || this.window != window) return;
		this.__onKey(openfl.events.KeyboardEvent.KEY_UP,keyCode,modifier);
	}
	,onModuleExit: function(code) {
		if(this.window != null) {
			var event = new openfl.events.Event(openfl.events.Event.DEACTIVATE);
			this.__broadcast(event,true);
		}
	}
	,onMouseDown: function(window,x,y,button) {
		if(this.window == null || this.window != window) return;
		var type;
		switch(button) {
		case 1:
			type = openfl.events.MouseEvent.MIDDLE_MOUSE_DOWN;
			break;
		case 2:
			type = openfl.events.MouseEvent.RIGHT_MOUSE_DOWN;
			break;
		default:
			type = openfl.events.MouseEvent.MOUSE_DOWN;
		}
		this.__onMouse(type,x,y,button);
	}
	,onMouseMove: function(window,x,y) {
		if(this.window == null || this.window != window) return;
		this.__onMouse(openfl.events.MouseEvent.MOUSE_MOVE,x,y,0);
	}
	,onMouseMoveRelative: function(window,x,y) {
	}
	,onMouseUp: function(window,x,y,button) {
		if(this.window == null || this.window != window) return;
		var type;
		switch(button) {
		case 1:
			type = openfl.events.MouseEvent.MIDDLE_MOUSE_UP;
			break;
		case 2:
			type = openfl.events.MouseEvent.RIGHT_MOUSE_UP;
			break;
		default:
			type = openfl.events.MouseEvent.MOUSE_UP;
		}
		this.__onMouse(type,x,y,button);
	}
	,onMouseWheel: function(window,deltaX,deltaY) {
		if(this.window == null || this.window != window) return;
		this.__onMouseWheel(deltaX,deltaY);
	}
	,onPreloadComplete: function() {
	}
	,onPreloadProgress: function(loaded,total) {
	}
	,onRenderContextLost: function(renderer) {
	}
	,onRenderContextRestored: function(renderer,context) {
	}
	,onTextEdit: function(window,text,start,length) {
	}
	,onTextInput: function(window,text) {
		if(this.window == null || this.window != window) return;
		var stack = new Array();
		if(this.__focus == null) this.__getInteractive(stack); else this.__focus.__getInteractive(stack);
		var event = new openfl.events.TextEvent(openfl.events.TextEvent.TEXT_INPUT,true,false,text);
		if(stack.length > 0) {
			stack.reverse();
			this.__fireEvent(event,stack);
		} else this.__broadcast(event,true);
	}
	,onTouchMove: function(touch) {
		this.__onTouch("touchMove",touch);
	}
	,onTouchEnd: function(touch) {
		this.__onTouch("touchEnd",touch);
	}
	,onTouchStart: function(touch) {
		this.__onTouch("touchBegin",touch);
	}
	,onWindowActivate: function(window) {
		if(this.window == null || this.window != window) return;
		var event = new openfl.events.Event(openfl.events.Event.ACTIVATE);
		this.__broadcast(event,true);
	}
	,onWindowClose: function(window) {
		if(this.window == window) this.window = null;
	}
	,onWindowCreate: function(window) {
		if(this.window == null || this.window != window) return;
		if(window.renderer != null) {
			var _g = window.renderer.context;
			switch(_g[1]) {
			case 0:
				var gl = _g[2];
				this.__renderer = new openfl._internal.renderer.opengl.GLRenderer(this.stageWidth,this.stageHeight,gl);
				break;
			case 1:
				var context = _g[2];
				this.__renderer = new openfl._internal.renderer.canvas.CanvasRenderer(this.stageWidth,this.stageHeight,context);
				break;
			case 2:
				var element = _g[2];
				this.__renderer = new openfl._internal.renderer.dom.DOMRenderer(this.stageWidth,this.stageHeight,element);
				break;
			case 4:
				var cairo = _g[2];
				this.__renderer = new openfl._internal.renderer.cairo.CairoRenderer(this.stageWidth,this.stageHeight,cairo);
				break;
			case 5:
				var ctx = _g[2];
				this.__renderer = new openfl._internal.renderer.console.ConsoleRenderer(this.stageWidth,this.stageHeight,ctx);
				break;
			default:
			}
		}
	}
	,onWindowDeactivate: function(window) {
		if(this.window == null || this.window != window) return;
		var event = new openfl.events.Event(openfl.events.Event.DEACTIVATE);
		this.__broadcast(event,true);
	}
	,onWindowEnter: function(window) {
	}
	,onWindowFocusIn: function(window) {
		if(this.window == null || this.window != window) return;
		var event = new openfl.events.FocusEvent(openfl.events.FocusEvent.FOCUS_IN,true,false,null,false,0);
		this.__broadcast(event,true);
	}
	,onWindowFocusOut: function(window) {
		if(this.window == null || this.window != window) return;
		var event = new openfl.events.FocusEvent(openfl.events.FocusEvent.FOCUS_OUT,true,false,null,false,0);
		this.__broadcast(event,true);
	}
	,onWindowFullscreen: function(window) {
	}
	,onWindowLeave: function(window) {
		if(this.window == null || this.window != window) return;
		this.__dispatchEvent(new openfl.events.Event(openfl.events.Event.MOUSE_LEAVE));
	}
	,onWindowMinimize: function(window) {
	}
	,onWindowMove: function(window,x,y) {
	}
	,onWindowResize: function(window,width,height) {
		if(this.window == null || this.window != window) return;
		this.stageWidth = width;
		this.stageHeight = height;
		if(this.__renderer != null) this.__renderer.resize(width,height);
		var event = new openfl.events.Event(openfl.events.Event.RESIZE);
		this.__broadcast(event,false);
	}
	,onWindowRestore: function(window) {
	}
	,render: function(renderer) {
		if(renderer.window == null || renderer.window != this.window) return;
		if(this.application != null && this.application.windows.length > 0) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
		}
		if(this.__rendering) return;
		this.__rendering = true;
		this.__broadcast(new openfl.events.Event(openfl.events.Event.ENTER_FRAME),true);
		if(this.__invalidated) {
			this.__invalidated = false;
			this.__broadcast(new openfl.events.Event(openfl.events.Event.RENDER),true);
		}
		this.__renderable = true;
		this.__enterFrame();
		this.__update(false,true);
		if(this.__renderer != null) {
			{
				var _g = renderer.context;
				switch(_g[1]) {
				case 4:
					var cairo = _g[2];
					(js.Boot.__cast(this.__renderer , openfl._internal.renderer.cairo.CairoRenderer)).cairo = cairo;
					this.__renderer.renderSession.cairo = cairo;
					break;
				default:
				}
			}
			this.__renderer.render(this);
		}
		this.__rendering = false;
	}
	,update: function(deltaTime) {
	}
	,__drag: function(mouse) {
		var parent = this.__dragObject.parent;
		if(parent != null) mouse = parent.globalToLocal(mouse);
		var x = mouse.x + this.__dragOffsetX;
		var y = mouse.y + this.__dragOffsetY;
		if(this.__dragBounds != null) {
			if(x < this.__dragBounds.x) x = this.__dragBounds.x; else if(x > this.__dragBounds.get_right()) x = this.__dragBounds.get_right();
			if(y < this.__dragBounds.y) y = this.__dragBounds.y; else if(y > this.__dragBounds.get_bottom()) y = this.__dragBounds.get_bottom();
		}
		this.__dragObject.set_x(x);
		this.__dragObject.set_y(y);
	}
	,__fireEvent: function(event,stack) {
		var length = stack.length;
		if(length == 0) {
			event.eventPhase = openfl.events.EventPhase.AT_TARGET;
			event.target.__broadcast(event,false);
		} else {
			event.eventPhase = openfl.events.EventPhase.CAPTURING_PHASE;
			event.target = stack[stack.length - 1];
			var _g1 = 0;
			var _g = length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				stack[i].__broadcast(event,false);
				if(event.__isCancelled) return;
			}
			event.eventPhase = openfl.events.EventPhase.AT_TARGET;
			event.target.__broadcast(event,false);
			if(event.__isCancelled) return;
			if(event.bubbles) {
				event.eventPhase = openfl.events.EventPhase.BUBBLING_PHASE;
				var i1 = length - 2;
				while(i1 >= 0) {
					stack[i1].__broadcast(event,false);
					if(event.__isCancelled) return;
					i1--;
				}
			}
		}
	}
	,__getInteractive: function(stack) {
		if(stack != null) stack.push(this);
		return true;
	}
	,__onKey: function(type,keyCode,modifier) {
		openfl.events.MouseEvent.__altKey = lime.ui._KeyModifier.KeyModifier_Impl_.get_altKey(modifier);
		openfl.events.MouseEvent.__commandKey = lime.ui._KeyModifier.KeyModifier_Impl_.get_metaKey(modifier);
		openfl.events.MouseEvent.__ctrlKey = lime.ui._KeyModifier.KeyModifier_Impl_.get_ctrlKey(modifier);
		openfl.events.MouseEvent.__shiftKey = lime.ui._KeyModifier.KeyModifier_Impl_.get_shiftKey(modifier);
		var stack = new Array();
		if(this.__focus == null) this.__getInteractive(stack); else this.__focus.__getInteractive(stack);
		if(stack.length > 0) {
			var keyLocation;
			switch(keyCode) {
			case 1073742048:case 1073742049:case 1073742050:case 1073742051:
				keyLocation = 1;
				break;
			case 1073742052:case 1073742053:case 1073742054:case 1073742055:
				keyLocation = 2;
				break;
			case 1073741908:case 1073741909:case 1073741910:case 1073741911:case 1073741912:case 1073741913:case 1073741914:case 1073741915:case 1073741916:case 1073741917:case 1073741918:case 1073741919:case 1073741920:case 1073741921:case 1073741922:case 1073741923:case 1073742044:
				keyLocation = 3;
				break;
			default:
				keyLocation = 0;
			}
			var keyCode1;
			switch(keyCode) {
			case 8:
				keyCode1 = 8;
				break;
			case 9:
				keyCode1 = 9;
				break;
			case 13:
				keyCode1 = 13;
				break;
			case 27:
				keyCode1 = 27;
				break;
			case 32:
				keyCode1 = 32;
				break;
			case 33:
				keyCode1 = 49;
				break;
			case 34:
				keyCode1 = 222;
				break;
			case 35:
				keyCode1 = 51;
				break;
			case 36:
				keyCode1 = 52;
				break;
			case 37:
				keyCode1 = 53;
				break;
			case 38:
				keyCode1 = 55;
				break;
			case 39:
				keyCode1 = 222;
				break;
			case 40:
				keyCode1 = 57;
				break;
			case 41:
				keyCode1 = 48;
				break;
			case 42:
				keyCode1 = 56;
				break;
			case 44:
				keyCode1 = 188;
				break;
			case 45:
				keyCode1 = 189;
				break;
			case 46:
				keyCode1 = 190;
				break;
			case 47:
				keyCode1 = 191;
				break;
			case 48:
				keyCode1 = 48;
				break;
			case 49:
				keyCode1 = 49;
				break;
			case 50:
				keyCode1 = 50;
				break;
			case 51:
				keyCode1 = 51;
				break;
			case 52:
				keyCode1 = 52;
				break;
			case 53:
				keyCode1 = 53;
				break;
			case 54:
				keyCode1 = 54;
				break;
			case 55:
				keyCode1 = 55;
				break;
			case 56:
				keyCode1 = 56;
				break;
			case 57:
				keyCode1 = 57;
				break;
			case 58:
				keyCode1 = 186;
				break;
			case 59:
				keyCode1 = 186;
				break;
			case 60:
				keyCode1 = 60;
				break;
			case 61:
				keyCode1 = 187;
				break;
			case 62:
				keyCode1 = 190;
				break;
			case 63:
				keyCode1 = 191;
				break;
			case 64:
				keyCode1 = 50;
				break;
			case 91:
				keyCode1 = 219;
				break;
			case 92:
				keyCode1 = 220;
				break;
			case 93:
				keyCode1 = 221;
				break;
			case 94:
				keyCode1 = 54;
				break;
			case 95:
				keyCode1 = 189;
				break;
			case 96:
				keyCode1 = 192;
				break;
			case 97:
				keyCode1 = 65;
				break;
			case 98:
				keyCode1 = 66;
				break;
			case 99:
				keyCode1 = 67;
				break;
			case 100:
				keyCode1 = 68;
				break;
			case 101:
				keyCode1 = 69;
				break;
			case 102:
				keyCode1 = 70;
				break;
			case 103:
				keyCode1 = 71;
				break;
			case 104:
				keyCode1 = 72;
				break;
			case 105:
				keyCode1 = 73;
				break;
			case 106:
				keyCode1 = 74;
				break;
			case 107:
				keyCode1 = 75;
				break;
			case 108:
				keyCode1 = 76;
				break;
			case 109:
				keyCode1 = 77;
				break;
			case 110:
				keyCode1 = 78;
				break;
			case 111:
				keyCode1 = 79;
				break;
			case 112:
				keyCode1 = 80;
				break;
			case 113:
				keyCode1 = 81;
				break;
			case 114:
				keyCode1 = 82;
				break;
			case 115:
				keyCode1 = 83;
				break;
			case 116:
				keyCode1 = 84;
				break;
			case 117:
				keyCode1 = 85;
				break;
			case 118:
				keyCode1 = 86;
				break;
			case 119:
				keyCode1 = 87;
				break;
			case 120:
				keyCode1 = 88;
				break;
			case 121:
				keyCode1 = 89;
				break;
			case 122:
				keyCode1 = 90;
				break;
			case 127:
				keyCode1 = 46;
				break;
			case 1073741881:
				keyCode1 = 20;
				break;
			case 1073741882:
				keyCode1 = 112;
				break;
			case 1073741883:
				keyCode1 = 113;
				break;
			case 1073741884:
				keyCode1 = 114;
				break;
			case 1073741885:
				keyCode1 = 115;
				break;
			case 1073741886:
				keyCode1 = 116;
				break;
			case 1073741887:
				keyCode1 = 117;
				break;
			case 1073741888:
				keyCode1 = 118;
				break;
			case 1073741889:
				keyCode1 = 119;
				break;
			case 1073741890:
				keyCode1 = 120;
				break;
			case 1073741891:
				keyCode1 = 121;
				break;
			case 1073741892:
				keyCode1 = 122;
				break;
			case 1073741893:
				keyCode1 = 123;
				break;
			case 1073741894:
				keyCode1 = 301;
				break;
			case 1073741895:
				keyCode1 = 145;
				break;
			case 1073741896:
				keyCode1 = 19;
				break;
			case 1073741897:
				keyCode1 = 45;
				break;
			case 1073741898:
				keyCode1 = 36;
				break;
			case 1073741899:
				keyCode1 = 33;
				break;
			case 1073741901:
				keyCode1 = 35;
				break;
			case 1073741902:
				keyCode1 = 34;
				break;
			case 1073741903:
				keyCode1 = 39;
				break;
			case 1073741904:
				keyCode1 = 37;
				break;
			case 1073741905:
				keyCode1 = 40;
				break;
			case 1073741906:
				keyCode1 = 38;
				break;
			case 1073741907:
				keyCode1 = 144;
				break;
			case 1073741908:
				keyCode1 = 111;
				break;
			case 1073741909:
				keyCode1 = 106;
				break;
			case 1073741910:
				keyCode1 = 109;
				break;
			case 1073741911:
				keyCode1 = 107;
				break;
			case 1073741912:
				keyCode1 = 108;
				break;
			case 1073741913:
				keyCode1 = 97;
				break;
			case 1073741914:
				keyCode1 = 98;
				break;
			case 1073741915:
				keyCode1 = 99;
				break;
			case 1073741916:
				keyCode1 = 100;
				break;
			case 1073741917:
				keyCode1 = 101;
				break;
			case 1073741918:
				keyCode1 = 102;
				break;
			case 1073741919:
				keyCode1 = 103;
				break;
			case 1073741920:
				keyCode1 = 104;
				break;
			case 1073741921:
				keyCode1 = 105;
				break;
			case 1073741922:
				keyCode1 = 96;
				break;
			case 1073741923:
				keyCode1 = 110;
				break;
			case 1073741925:
				keyCode1 = 302;
				break;
			case 1073741928:
				keyCode1 = 124;
				break;
			case 1073741929:
				keyCode1 = 125;
				break;
			case 1073741930:
				keyCode1 = 126;
				break;
			case 1073741982:
				keyCode1 = 13;
				break;
			case 1073742044:
				keyCode1 = 110;
				break;
			case 1073742048:
				keyCode1 = 17;
				break;
			case 1073742049:
				keyCode1 = 16;
				break;
			case 1073742050:
				keyCode1 = 18;
				break;
			case 1073742051:
				keyCode1 = 15;
				break;
			case 1073742052:
				keyCode1 = 17;
				break;
			case 1073742053:
				keyCode1 = 16;
				break;
			case 1073742054:
				keyCode1 = 18;
				break;
			case 1073742055:
				keyCode1 = 15;
				break;
			default:
				keyCode1 = keyCode;
			}
			var charCode = openfl.ui.Keyboard.__getCharCode(keyCode1,lime.ui._KeyModifier.KeyModifier_Impl_.get_shiftKey(modifier));
			var event = new openfl.events.KeyboardEvent(type,true,false,charCode,keyCode1,keyLocation,lime.ui._KeyModifier.KeyModifier_Impl_.get_ctrlKey(modifier),lime.ui._KeyModifier.KeyModifier_Impl_.get_altKey(modifier),lime.ui._KeyModifier.KeyModifier_Impl_.get_shiftKey(modifier),lime.ui._KeyModifier.KeyModifier_Impl_.get_metaKey(modifier));
			stack.reverse();
			this.__fireEvent(event,stack);
		}
	}
	,__onMouse: function(type,x,y,button) {
		if(button > 2) return;
		this.__mouseX = x;
		this.__mouseY = y;
		var stack = [];
		var target = null;
		var targetPoint = new openfl.geom.Point(x,y);
		if(this.__hitTest(x,y,true,stack,true)) target = stack[stack.length - 1]; else {
			target = this;
			stack = [this];
		}
		if(target == null) target = this;
		if(type == openfl.events.MouseEvent.MOUSE_DOWN) {
			if(target.get_tabEnabled()) this.set_focus(target); else this.set_focus(null);
		}
		this.__fireEvent(openfl.events.MouseEvent.__create(type,button,this.__mouseX,this.__mouseY,target == this?targetPoint:target.globalToLocal(targetPoint),target),stack);
		var clickType;
		switch(type) {
		case openfl.events.MouseEvent.MOUSE_UP:
			clickType = openfl.events.MouseEvent.CLICK;
			break;
		case openfl.events.MouseEvent.MIDDLE_MOUSE_UP:
			clickType = openfl.events.MouseEvent.MIDDLE_CLICK;
			break;
		case openfl.events.MouseEvent.RIGHT_MOUSE_UP:
			clickType = openfl.events.MouseEvent.RIGHT_CLICK;
			break;
		default:
			clickType = null;
		}
		if(clickType != null) {
			this.__fireEvent(openfl.events.MouseEvent.__create(clickType,button,this.__mouseX,this.__mouseY,target == this?targetPoint:target.globalToLocal(targetPoint),target),stack);
			if(type == openfl.events.MouseEvent.MOUSE_UP && (js.Boot.__cast(target , openfl.display.InteractiveObject)).doubleClickEnabled) {
				var currentTime = openfl.Lib.getTimer();
				if(currentTime - this.__lastClickTime < 500) {
					this.__fireEvent(openfl.events.MouseEvent.__create(openfl.events.MouseEvent.DOUBLE_CLICK,button,this.__mouseX,this.__mouseY,target == this?targetPoint:target.globalToLocal(targetPoint),target),stack);
					this.__lastClickTime = 0;
				} else this.__lastClickTime = currentTime;
			}
		}
		var cursor = null;
		var _g = 0;
		while(_g < stack.length) {
			var target1 = stack[_g];
			++_g;
			cursor = target1.__getCursor();
			if(cursor != null) {
				lime.ui.Mouse.set_cursor(cursor);
				break;
			}
		}
		if(cursor == null) lime.ui.Mouse.set_cursor(lime.ui.MouseCursor.ARROW);
		var _g1 = 0;
		var _g11 = this.__mouseOutStack;
		while(_g1 < _g11.length) {
			var target2 = _g11[_g1];
			++_g1;
			if(HxOverrides.indexOf(stack,target2,0) == -1) {
				HxOverrides.remove(this.__mouseOutStack,target2);
				var localPoint = target2.globalToLocal(targetPoint);
				target2.__dispatchEvent(new openfl.events.MouseEvent(openfl.events.MouseEvent.MOUSE_OUT,false,false,localPoint.x,localPoint.y,target2));
			}
		}
		var _g2 = 0;
		while(_g2 < stack.length) {
			var target3 = stack[_g2];
			++_g2;
			if(HxOverrides.indexOf(this.__mouseOutStack,target3,0) == -1) {
				if(target3.hasEventListener(openfl.events.MouseEvent.MOUSE_OVER)) {
					var localPoint1 = target3.globalToLocal(targetPoint);
					target3.__dispatchEvent(new openfl.events.MouseEvent(openfl.events.MouseEvent.MOUSE_OVER,false,false,localPoint1.x,localPoint1.y,target3));
				}
				if(target3.hasEventListener(openfl.events.MouseEvent.MOUSE_OUT)) this.__mouseOutStack.push(target3);
			}
		}
		if(this.__dragObject != null) this.__drag(targetPoint);
	}
	,__onMouseWheel: function(deltaX,deltaY) {
		var x = this.__mouseX;
		var y = this.__mouseY;
		var stack = [];
		if(!this.__hitTest(x,y,false,stack,true)) stack = [this];
		var target = stack[stack.length - 1];
		var targetPoint = new openfl.geom.Point(x,y);
		var delta = deltaY | 0;
		this.__fireEvent(openfl.events.MouseEvent.__create(openfl.events.MouseEvent.MOUSE_WHEEL,0,this.__mouseX,this.__mouseY,target == this?targetPoint:target.globalToLocal(targetPoint),target,delta),stack);
	}
	,__onTouch: function(type,touch) {
		var point = new openfl.geom.Point(touch.x * this.stageWidth,touch.y * this.stageHeight);
		this.__mouseX = point.x;
		this.__mouseY = point.y;
		var __stack = [];
		if(this.__hitTest(touch.x,touch.y,false,__stack,true)) {
			var target = __stack[__stack.length - 1];
			if(target == null) target = this;
			var localPoint = target.globalToLocal(point);
			var touchEvent = openfl.events.TouchEvent.__create(type,null,this.__mouseX,this.__mouseY,localPoint,target);
			touchEvent.touchPointID = touch.id;
			touchEvent.isPrimaryTouchPoint = true;
			this.__fireEvent(touchEvent,__stack);
		} else {
			var touchEvent1 = openfl.events.TouchEvent.__create(type,null,this.__mouseX,this.__mouseY,point,this);
			touchEvent1.touchPointID = touch.id;
			touchEvent1.isPrimaryTouchPoint = true;
			this.__fireEvent(touchEvent1,[this.stage]);
		}
	}
	,__update: function(transformOnly,updateChildren,maskGrahpics) {
		if(transformOnly) {
			if(openfl.display.DisplayObject.__worldTransformDirty > 0) {
				openfl.display.DisplayObjectContainer.prototype.__update.call(this,true,updateChildren,maskGrahpics);
				if(updateChildren) {
					openfl.display.DisplayObject.__worldTransformDirty = 0;
					this.__dirty = true;
				}
			}
		} else if(openfl.display.DisplayObject.__worldTransformDirty > 0 || this.__dirty || openfl.display.DisplayObject.__worldRenderDirty > 0) {
			openfl.display.DisplayObjectContainer.prototype.__update.call(this,false,updateChildren,maskGrahpics);
			if(updateChildren) {
				openfl.display.DisplayObject.__worldTransformDirty = 0;
				openfl.display.DisplayObject.__worldRenderDirty = 0;
				this.__dirty = false;
			}
		}
	}
	,get_mouseX: function() {
		return this.__mouseX;
	}
	,get_mouseY: function() {
		return this.__mouseY;
	}
	,set_color: function(value) {
		var r = (value & 16711680) >>> 16;
		var g = (value & 65280) >>> 8;
		var b = value & 255;
		this.__colorSplit = [r / 255,g / 255,b / 255];
		this.__colorString = "#" + StringTools.hex(value,6);
		return this.__color = value;
	}
	,get_focus: function() {
		return this.__focus;
	}
	,set_focus: function(value) {
		if(value != this.__focus) {
			var oldFocus = this.__focus;
			this.__focus = value;
			if(oldFocus != null) {
				var event = new openfl.events.FocusEvent(openfl.events.FocusEvent.FOCUS_OUT,true,false,this.__focus,false,0);
				this.__stack = [];
				oldFocus.__getInteractive(this.__stack);
				this.__stack.reverse();
				this.__fireEvent(event,this.__stack);
			}
			if(this.__focus != null) {
				var event1 = new openfl.events.FocusEvent(openfl.events.FocusEvent.FOCUS_IN,true,false,oldFocus,false,0);
				this.__stack = [];
				value.__getInteractive(this.__stack);
				this.__stack.reverse();
				this.__fireEvent(event1,this.__stack);
			}
		}
		return this.__focus;
	}
	,__class__: openfl.display.Stage
	,__properties__: $extend(openfl.display.DisplayObjectContainer.prototype.__properties__,{set_focus:"set_focus",get_focus:"get_focus",set_color:"set_color"})
});
openfl.display.Stage3D = function() {
	openfl.events.EventDispatcher.call(this);
};
$hxClasses["openfl.display.Stage3D"] = openfl.display.Stage3D;
openfl.display.Stage3D.__name__ = ["openfl","display","Stage3D"];
openfl.display.Stage3D.__super__ = openfl.events.EventDispatcher;
openfl.display.Stage3D.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	__class__: openfl.display.Stage3D
});
openfl.display.StageAlign = $hxClasses["openfl.display.StageAlign"] = { __ename__ : ["openfl","display","StageAlign"], __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] };
openfl.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
openfl.display.StageAlign.TOP_RIGHT.toString = $estr;
openfl.display.StageAlign.TOP_RIGHT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
openfl.display.StageAlign.TOP_LEFT.toString = $estr;
openfl.display.StageAlign.TOP_LEFT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.TOP = ["TOP",2];
openfl.display.StageAlign.TOP.toString = $estr;
openfl.display.StageAlign.TOP.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.RIGHT = ["RIGHT",3];
openfl.display.StageAlign.RIGHT.toString = $estr;
openfl.display.StageAlign.RIGHT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.LEFT = ["LEFT",4];
openfl.display.StageAlign.LEFT.toString = $estr;
openfl.display.StageAlign.LEFT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
openfl.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
openfl.display.StageAlign.BOTTOM_RIGHT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
openfl.display.StageAlign.BOTTOM_LEFT.toString = $estr;
openfl.display.StageAlign.BOTTOM_LEFT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.BOTTOM = ["BOTTOM",7];
openfl.display.StageAlign.BOTTOM.toString = $estr;
openfl.display.StageAlign.BOTTOM.__enum__ = openfl.display.StageAlign;
openfl.display.StageDisplayState = $hxClasses["openfl.display.StageDisplayState"] = { __ename__ : ["openfl","display","StageDisplayState"], __constructs__ : ["NORMAL","FULL_SCREEN","FULL_SCREEN_INTERACTIVE"] };
openfl.display.StageDisplayState.NORMAL = ["NORMAL",0];
openfl.display.StageDisplayState.NORMAL.toString = $estr;
openfl.display.StageDisplayState.NORMAL.__enum__ = openfl.display.StageDisplayState;
openfl.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",1];
openfl.display.StageDisplayState.FULL_SCREEN.toString = $estr;
openfl.display.StageDisplayState.FULL_SCREEN.__enum__ = openfl.display.StageDisplayState;
openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE",2];
openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr;
openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = openfl.display.StageDisplayState;
openfl.display.StageQuality = $hxClasses["openfl.display.StageQuality"] = { __ename__ : ["openfl","display","StageQuality"], __constructs__ : ["BEST","HIGH","MEDIUM","LOW"] };
openfl.display.StageQuality.BEST = ["BEST",0];
openfl.display.StageQuality.BEST.toString = $estr;
openfl.display.StageQuality.BEST.__enum__ = openfl.display.StageQuality;
openfl.display.StageQuality.HIGH = ["HIGH",1];
openfl.display.StageQuality.HIGH.toString = $estr;
openfl.display.StageQuality.HIGH.__enum__ = openfl.display.StageQuality;
openfl.display.StageQuality.MEDIUM = ["MEDIUM",2];
openfl.display.StageQuality.MEDIUM.toString = $estr;
openfl.display.StageQuality.MEDIUM.__enum__ = openfl.display.StageQuality;
openfl.display.StageQuality.LOW = ["LOW",3];
openfl.display.StageQuality.LOW.toString = $estr;
openfl.display.StageQuality.LOW.__enum__ = openfl.display.StageQuality;
openfl.display.StageScaleMode = $hxClasses["openfl.display.StageScaleMode"] = { __ename__ : ["openfl","display","StageScaleMode"], __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] };
openfl.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
openfl.display.StageScaleMode.SHOW_ALL.toString = $estr;
openfl.display.StageScaleMode.SHOW_ALL.__enum__ = openfl.display.StageScaleMode;
openfl.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
openfl.display.StageScaleMode.NO_SCALE.toString = $estr;
openfl.display.StageScaleMode.NO_SCALE.__enum__ = openfl.display.StageScaleMode;
openfl.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
openfl.display.StageScaleMode.NO_BORDER.toString = $estr;
openfl.display.StageScaleMode.NO_BORDER.__enum__ = openfl.display.StageScaleMode;
openfl.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
openfl.display.StageScaleMode.EXACT_FIT.toString = $estr;
openfl.display.StageScaleMode.EXACT_FIT.__enum__ = openfl.display.StageScaleMode;
openfl.display.Tilesheet = function() { };
$hxClasses["openfl.display.Tilesheet"] = openfl.display.Tilesheet;
openfl.display.Tilesheet.__name__ = ["openfl","display","Tilesheet"];
openfl.display.Tilesheet.prototype = {
	__class__: openfl.display.Tilesheet
};
openfl.display.TriangleCulling = $hxClasses["openfl.display.TriangleCulling"] = { __ename__ : ["openfl","display","TriangleCulling"], __constructs__ : ["NEGATIVE","NONE","POSITIVE"] };
openfl.display.TriangleCulling.NEGATIVE = ["NEGATIVE",0];
openfl.display.TriangleCulling.NEGATIVE.toString = $estr;
openfl.display.TriangleCulling.NEGATIVE.__enum__ = openfl.display.TriangleCulling;
openfl.display.TriangleCulling.NONE = ["NONE",1];
openfl.display.TriangleCulling.NONE.toString = $estr;
openfl.display.TriangleCulling.NONE.__enum__ = openfl.display.TriangleCulling;
openfl.display.TriangleCulling.POSITIVE = ["POSITIVE",2];
openfl.display.TriangleCulling.POSITIVE.toString = $estr;
openfl.display.TriangleCulling.POSITIVE.__enum__ = openfl.display.TriangleCulling;
openfl.display.Window = function(config) {
	lime.ui.Window.call(this,config);
};
$hxClasses["openfl.display.Window"] = openfl.display.Window;
openfl.display.Window.__name__ = ["openfl","display","Window"];
openfl.display.Window.__super__ = lime.ui.Window;
openfl.display.Window.prototype = $extend(lime.ui.Window.prototype,{
	create: function(application) {
		lime.ui.Window.prototype.create.call(this,application);
		this.stage = new openfl.display.Stage(this,Object.prototype.hasOwnProperty.call(this.config,"background")?this.config.background:16777215);
		application.addModule(this.stage);
	}
	,__class__: openfl.display.Window
});
openfl.events.Event = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
	this.eventPhase = openfl.events.EventPhase.AT_TARGET;
};
$hxClasses["openfl.events.Event"] = openfl.events.Event;
openfl.events.Event.__name__ = ["openfl","events","Event"];
openfl.events.Event.prototype = {
	__class__: openfl.events.Event
};
openfl.events.TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["openfl.events.TextEvent"] = openfl.events.TextEvent;
openfl.events.TextEvent.__name__ = ["openfl","events","TextEvent"];
openfl.events.TextEvent.__super__ = openfl.events.Event;
openfl.events.TextEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.TextEvent
});
openfl.events.ErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.TextEvent.call(this,type,bubbles,cancelable,text);
	this.errorID = id;
};
$hxClasses["openfl.events.ErrorEvent"] = openfl.events.ErrorEvent;
openfl.events.ErrorEvent.__name__ = ["openfl","events","ErrorEvent"];
openfl.events.ErrorEvent.__super__ = openfl.events.TextEvent;
openfl.events.ErrorEvent.prototype = $extend(openfl.events.TextEvent.prototype,{
	__class__: openfl.events.ErrorEvent
});
openfl.events._EventDispatcher = {};
openfl.events._EventDispatcher.Listener = function(callback,useCapture,priority) {
	this.callback = callback;
	this.useCapture = useCapture;
	this.priority = priority;
};
$hxClasses["openfl.events._EventDispatcher.Listener"] = openfl.events._EventDispatcher.Listener;
openfl.events._EventDispatcher.Listener.__name__ = ["openfl","events","_EventDispatcher","Listener"];
openfl.events._EventDispatcher.Listener.prototype = {
	match: function(callback,useCapture) {
		return Reflect.compareMethods(this.callback,callback) && this.useCapture == useCapture;
	}
	,__class__: openfl.events._EventDispatcher.Listener
};
openfl.events.EventPhase = $hxClasses["openfl.events.EventPhase"] = { __ename__ : ["openfl","events","EventPhase"], __constructs__ : ["CAPTURING_PHASE","AT_TARGET","BUBBLING_PHASE"] };
openfl.events.EventPhase.CAPTURING_PHASE = ["CAPTURING_PHASE",0];
openfl.events.EventPhase.CAPTURING_PHASE.toString = $estr;
openfl.events.EventPhase.CAPTURING_PHASE.__enum__ = openfl.events.EventPhase;
openfl.events.EventPhase.AT_TARGET = ["AT_TARGET",1];
openfl.events.EventPhase.AT_TARGET.toString = $estr;
openfl.events.EventPhase.AT_TARGET.__enum__ = openfl.events.EventPhase;
openfl.events.EventPhase.BUBBLING_PHASE = ["BUBBLING_PHASE",2];
openfl.events.EventPhase.BUBBLING_PHASE.toString = $estr;
openfl.events.EventPhase.BUBBLING_PHASE.__enum__ = openfl.events.EventPhase;
openfl.events.FocusEvent = function(type,bubbles,cancelable,relatedObject,shiftKey,keyCode) {
	if(keyCode == null) keyCode = 0;
	if(shiftKey == null) shiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = keyCode;
	this.shiftKey = shiftKey;
	this.relatedObject = relatedObject;
};
$hxClasses["openfl.events.FocusEvent"] = openfl.events.FocusEvent;
openfl.events.FocusEvent.__name__ = ["openfl","events","FocusEvent"];
openfl.events.FocusEvent.__super__ = openfl.events.Event;
openfl.events.FocusEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.FocusEvent
});
openfl.events.GameInputEvent = function(type,bubbles,cancelable,device) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.device = device;
};
$hxClasses["openfl.events.GameInputEvent"] = openfl.events.GameInputEvent;
openfl.events.GameInputEvent.__name__ = ["openfl","events","GameInputEvent"];
openfl.events.GameInputEvent.__super__ = openfl.events.Event;
openfl.events.GameInputEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.GameInputEvent
});
openfl.events.IOErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.ErrorEvent.call(this,type,bubbles,cancelable,text,id);
};
$hxClasses["openfl.events.IOErrorEvent"] = openfl.events.IOErrorEvent;
openfl.events.IOErrorEvent.__name__ = ["openfl","events","IOErrorEvent"];
openfl.events.IOErrorEvent.__super__ = openfl.events.ErrorEvent;
openfl.events.IOErrorEvent.prototype = $extend(openfl.events.ErrorEvent.prototype,{
	__class__: openfl.events.IOErrorEvent
});
openfl.events.KeyboardEvent = function(type,bubbles,cancelable,charCodeValue,keyCodeValue,keyLocationValue,ctrlKeyValue,altKeyValue,shiftKeyValue,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(shiftKeyValue == null) shiftKeyValue = false;
	if(altKeyValue == null) altKeyValue = false;
	if(ctrlKeyValue == null) ctrlKeyValue = false;
	if(keyCodeValue == null) keyCodeValue = 0;
	if(charCodeValue == null) charCodeValue = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.charCode = charCodeValue;
	this.keyCode = keyCodeValue;
	if(keyLocationValue != null) this.keyLocation = keyLocationValue; else this.keyLocation = 0;
	this.ctrlKey = ctrlKeyValue;
	this.altKey = altKeyValue;
	this.shiftKey = shiftKeyValue;
	this.controlKey = controlKeyValue;
	this.commandKey = commandKeyValue;
};
$hxClasses["openfl.events.KeyboardEvent"] = openfl.events.KeyboardEvent;
openfl.events.KeyboardEvent.__name__ = ["openfl","events","KeyboardEvent"];
openfl.events.KeyboardEvent.__super__ = openfl.events.Event;
openfl.events.KeyboardEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.KeyboardEvent
});
openfl.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["openfl.events.MouseEvent"] = openfl.events.MouseEvent;
openfl.events.MouseEvent.__name__ = ["openfl","events","MouseEvent"];
openfl.events.MouseEvent.__altKey = null;
openfl.events.MouseEvent.__buttonDown = null;
openfl.events.MouseEvent.__commandKey = null;
openfl.events.MouseEvent.__ctrlKey = null;
openfl.events.MouseEvent.__shiftKey = null;
openfl.events.MouseEvent.__create = function(type,button,stageX,stageY,local,target,delta) {
	if(delta == null) delta = 0;
	switch(type) {
	case openfl.events.MouseEvent.MOUSE_DOWN:
		openfl.events.MouseEvent.__buttonDown = true;
		break;
	case openfl.events.MouseEvent.MOUSE_UP:
		openfl.events.MouseEvent.__buttonDown = false;
		break;
	default:
	}
	var event = new openfl.events.MouseEvent(type,true,false,local.x,local.y,null,openfl.events.MouseEvent.__ctrlKey,openfl.events.MouseEvent.__altKey,openfl.events.MouseEvent.__shiftKey,openfl.events.MouseEvent.__buttonDown,delta,openfl.events.MouseEvent.__commandKey);
	event.stageX = stageX;
	event.stageY = stageY;
	event.target = target;
	return event;
};
openfl.events.MouseEvent.__super__ = openfl.events.Event;
openfl.events.MouseEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.MouseEvent
});
openfl.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,sizeX,sizeY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(sizeY == null) sizeY = 1;
	if(sizeX == null) sizeX = 1;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.pressure = 1;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["openfl.events.TouchEvent"] = openfl.events.TouchEvent;
openfl.events.TouchEvent.__name__ = ["openfl","events","TouchEvent"];
openfl.events.TouchEvent.__create = function(type,touch,stageX,stageY,local,target) {
	var evt = new openfl.events.TouchEvent(type,true,false,local.x,local.y,1,1,null,false,false,false,false,0,false,0);
	evt.stageX = stageX;
	evt.stageY = stageY;
	evt.target = target;
	return evt;
};
openfl.events.TouchEvent.__super__ = openfl.events.Event;
openfl.events.TouchEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.TouchEvent
});
openfl.filters = {};
openfl.filters.BitmapFilter = function() {
};
$hxClasses["openfl.filters.BitmapFilter"] = openfl.filters.BitmapFilter;
openfl.filters.BitmapFilter.__name__ = ["openfl","filters","BitmapFilter"];
openfl.filters.BitmapFilter.prototype = {
	__class__: openfl.filters.BitmapFilter
};
openfl.filters.BlurFilter = function(blurX,blurY,quality) {
	if(quality == null) quality = 1;
	if(blurY == null) blurY = 4;
	if(blurX == null) blurX = 4;
	openfl.filters.BitmapFilter.call(this);
	this.blurX = blurX;
	this.blurY = blurY;
	this.quality = quality;
};
$hxClasses["openfl.filters.BlurFilter"] = openfl.filters.BlurFilter;
openfl.filters.BlurFilter.__name__ = ["openfl","filters","BlurFilter"];
openfl.filters.BlurFilter.__super__ = openfl.filters.BitmapFilter;
openfl.filters.BlurFilter.prototype = $extend(openfl.filters.BitmapFilter.prototype,{
	__class__: openfl.filters.BlurFilter
});
openfl.filters.ColorMatrixFilter = function(matrix) {
	openfl.filters.BitmapFilter.call(this);
	if(matrix == null) matrix = [1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];
	this.matrix = matrix;
};
$hxClasses["openfl.filters.ColorMatrixFilter"] = openfl.filters.ColorMatrixFilter;
openfl.filters.ColorMatrixFilter.__name__ = ["openfl","filters","ColorMatrixFilter"];
openfl.filters.ColorMatrixFilter.__super__ = openfl.filters.BitmapFilter;
openfl.filters.ColorMatrixFilter.prototype = $extend(openfl.filters.BitmapFilter.prototype,{
	__class__: openfl.filters.ColorMatrixFilter
});
openfl.filters.DropShadowFilter = function(distance,angle,color,alpha,blurX,blurY,strength,quality,inner,knockout,hideObject) {
	if(hideObject == null) hideObject = false;
	if(knockout == null) knockout = false;
	if(inner == null) inner = false;
	if(quality == null) quality = 1;
	if(strength == null) strength = 1;
	if(blurY == null) blurY = 4;
	if(blurX == null) blurX = 4;
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	if(angle == null) angle = 45;
	if(distance == null) distance = 4;
	openfl.filters.BitmapFilter.call(this);
	this.distance = distance;
	this.angle = angle;
	this.color = color;
	this.alpha = alpha;
	this.blurX = blurX;
	this.blurY = blurY;
	this.strength = strength;
	this.quality = quality;
	this.inner = inner;
	this.knockout = knockout;
	this.hideObject = hideObject;
};
$hxClasses["openfl.filters.DropShadowFilter"] = openfl.filters.DropShadowFilter;
openfl.filters.DropShadowFilter.__name__ = ["openfl","filters","DropShadowFilter"];
openfl.filters.DropShadowFilter.__super__ = openfl.filters.BitmapFilter;
openfl.filters.DropShadowFilter.prototype = $extend(openfl.filters.BitmapFilter.prototype,{
	__class__: openfl.filters.DropShadowFilter
});
openfl.filters.GlowFilter = function(color,alpha,blurX,blurY,strength,quality,inner,knockout) {
	if(knockout == null) knockout = false;
	if(inner == null) inner = false;
	if(quality == null) quality = 1;
	if(strength == null) strength = 2;
	if(blurY == null) blurY = 6;
	if(blurX == null) blurX = 6;
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	openfl.filters.BitmapFilter.call(this);
	this.color = color;
	this.alpha = alpha;
	this.blurX = blurX;
	this.blurY = blurY;
	this.strength = strength;
	this.quality = quality;
	this.inner = inner;
	this.knockout = knockout;
};
$hxClasses["openfl.filters.GlowFilter"] = openfl.filters.GlowFilter;
openfl.filters.GlowFilter.__name__ = ["openfl","filters","GlowFilter"];
openfl.filters.GlowFilter.__super__ = openfl.filters.BitmapFilter;
openfl.filters.GlowFilter.prototype = $extend(openfl.filters.BitmapFilter.prototype,{
	__class__: openfl.filters.GlowFilter
});
openfl.geom.Transform = function(displayObject) {
	this.__colorTransform = new openfl.geom.ColorTransform();
	this.concatenatedColorTransform = new openfl.geom.ColorTransform();
	this.concatenatedMatrix = new openfl.geom.Matrix();
	this.pixelBounds = new openfl.geom.Rectangle();
	this.__displayObject = displayObject;
	this.__hasMatrix = true;
};
$hxClasses["openfl.geom.Transform"] = openfl.geom.Transform;
openfl.geom.Transform.__name__ = ["openfl","geom","Transform"];
openfl.geom.Transform.prototype = {
	get_colorTransform: function() {
		return this.__colorTransform;
	}
	,set_colorTransform: function(value) {
		if(!this.__colorTransform.__equals(value)) {
			this.__colorTransform = value;
			if(value != null) this.__displayObject.set_alpha(value.alphaMultiplier);
			this.__displayObject.__setRenderDirty();
		}
		return this.__colorTransform;
	}
	,set_matrix: function(value) {
		if(value == null) {
			this.__hasMatrix = false;
			return null;
		}
		this.__hasMatrix = true;
		this.__hasMatrix3D = false;
		if(this.__displayObject != null) {
			var determinant = value.a * value.d - value.b * value.c;
			var signY;
			if(determinant < 0 && (value.a < 0 || value.d < 0)) signY = -1; else signY = 1;
			this.__displayObject.set_x(value.tx);
			this.__displayObject.set_y(value.ty);
			this.__displayObject.set_scaleX(Math.sqrt(value.a * value.a + value.b * value.b));
			this.__displayObject.set_scaleY(Math.sqrt(value.c * value.c + value.d * value.d) * signY);
			this.__displayObject.set_rotation(Math.atan2(value.b,value.a) * (180 / Math.PI));
		}
		return value;
	}
	,__class__: openfl.geom.Transform
	,__properties__: {set_matrix:"set_matrix",set_colorTransform:"set_colorTransform",get_colorTransform:"get_colorTransform"}
};
openfl.media = {};
openfl.media.ID3Info = function() { };
$hxClasses["openfl.media.ID3Info"] = openfl.media.ID3Info;
openfl.media.ID3Info.__name__ = ["openfl","media","ID3Info"];
openfl.media.Sound = function(stream,context) {
	openfl.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.url = null;
	if(stream != null) this.load(stream,context);
};
$hxClasses["openfl.media.Sound"] = openfl.media.Sound;
openfl.media.Sound.__name__ = ["openfl","media","Sound"];
openfl.media.Sound.__super__ = openfl.events.EventDispatcher;
openfl.media.Sound.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	load: function(stream,context) {
		this.url = stream.url;
		this.__soundID = haxe.io.Path.withoutExtension(stream.url);
		if(!openfl.media.Sound.__registeredSounds.exists(this.__soundID)) {
			openfl.media.Sound.__registeredSounds.set(this.__soundID,true);
			createjs.Sound.addEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			createjs.Sound.addEventListener("fileerror",$bind(this,this.SoundJS_onFileError));
			createjs.Sound.registerSound(this.url,this.__soundID);
		} else this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
	}
	,SoundJS_onFileLoad: function(event) {
		if(event.id == this.__soundID) {
			createjs.Sound.removeEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			createjs.Sound.removeEventListener("fileerror",$bind(this,this.SoundJS_onFileError));
			this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
		}
	}
	,SoundJS_onFileError: function(event) {
		if(event.id == this.__soundID) {
			createjs.Sound.removeEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			createjs.Sound.removeEventListener("fileerror",$bind(this,this.SoundJS_onFileError));
			this.dispatchEvent(new openfl.events.IOErrorEvent(openfl.events.IOErrorEvent.IO_ERROR));
		}
	}
	,__class__: openfl.media.Sound
});
openfl.media.SoundLoaderContext = function() { };
$hxClasses["openfl.media.SoundLoaderContext"] = openfl.media.SoundLoaderContext;
openfl.media.SoundLoaderContext.__name__ = ["openfl","media","SoundLoaderContext"];
openfl.net = {};
openfl.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = "GET";
	this.contentType = null;
};
$hxClasses["openfl.net.URLRequest"] = openfl.net.URLRequest;
openfl.net.URLRequest.__name__ = ["openfl","net","URLRequest"];
openfl.net.URLRequest.prototype = {
	__class__: openfl.net.URLRequest
};
openfl.net.URLRequestHeader = function() { };
$hxClasses["openfl.net.URLRequestHeader"] = openfl.net.URLRequestHeader;
openfl.net.URLRequestHeader.__name__ = ["openfl","net","URLRequestHeader"];
openfl.text.AntiAliasType = $hxClasses["openfl.text.AntiAliasType"] = { __ename__ : ["openfl","text","AntiAliasType"], __constructs__ : ["ADVANCED","NORMAL"] };
openfl.text.AntiAliasType.ADVANCED = ["ADVANCED",0];
openfl.text.AntiAliasType.ADVANCED.toString = $estr;
openfl.text.AntiAliasType.ADVANCED.__enum__ = openfl.text.AntiAliasType;
openfl.text.AntiAliasType.NORMAL = ["NORMAL",1];
openfl.text.AntiAliasType.NORMAL.toString = $estr;
openfl.text.AntiAliasType.NORMAL.__enum__ = openfl.text.AntiAliasType;
openfl.text.Font = function() { };
$hxClasses["openfl.text.Font"] = openfl.text.Font;
openfl.text.Font.__name__ = ["openfl","text","Font"];
openfl.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) enumerateDeviceFonts = false;
	return openfl.text.Font.__registeredFonts;
};
openfl.text.Font.__super__ = lime.text.Font;
openfl.text.Font.prototype = $extend(lime.text.Font.prototype,{
	__class__: openfl.text.Font
});
openfl.text.GridFitType = $hxClasses["openfl.text.GridFitType"] = { __ename__ : ["openfl","text","GridFitType"], __constructs__ : ["NONE","PIXEL","SUBPIXEL"] };
openfl.text.GridFitType.NONE = ["NONE",0];
openfl.text.GridFitType.NONE.toString = $estr;
openfl.text.GridFitType.NONE.__enum__ = openfl.text.GridFitType;
openfl.text.GridFitType.PIXEL = ["PIXEL",1];
openfl.text.GridFitType.PIXEL.toString = $estr;
openfl.text.GridFitType.PIXEL.__enum__ = openfl.text.GridFitType;
openfl.text.GridFitType.SUBPIXEL = ["SUBPIXEL",2];
openfl.text.GridFitType.SUBPIXEL.toString = $estr;
openfl.text.GridFitType.SUBPIXEL.__enum__ = openfl.text.GridFitType;
openfl.text.TextFieldAutoSize = $hxClasses["openfl.text.TextFieldAutoSize"] = { __ename__ : ["openfl","text","TextFieldAutoSize"], __constructs__ : ["CENTER","LEFT","NONE","RIGHT"] };
openfl.text.TextFieldAutoSize.CENTER = ["CENTER",0];
openfl.text.TextFieldAutoSize.CENTER.toString = $estr;
openfl.text.TextFieldAutoSize.CENTER.__enum__ = openfl.text.TextFieldAutoSize;
openfl.text.TextFieldAutoSize.LEFT = ["LEFT",1];
openfl.text.TextFieldAutoSize.LEFT.toString = $estr;
openfl.text.TextFieldAutoSize.LEFT.__enum__ = openfl.text.TextFieldAutoSize;
openfl.text.TextFieldAutoSize.NONE = ["NONE",2];
openfl.text.TextFieldAutoSize.NONE.toString = $estr;
openfl.text.TextFieldAutoSize.NONE.__enum__ = openfl.text.TextFieldAutoSize;
openfl.text.TextFieldAutoSize.RIGHT = ["RIGHT",3];
openfl.text.TextFieldAutoSize.RIGHT.toString = $estr;
openfl.text.TextFieldAutoSize.RIGHT.__enum__ = openfl.text.TextFieldAutoSize;
openfl.text.TextFieldType = $hxClasses["openfl.text.TextFieldType"] = { __ename__ : ["openfl","text","TextFieldType"], __constructs__ : ["DYNAMIC","INPUT"] };
openfl.text.TextFieldType.DYNAMIC = ["DYNAMIC",0];
openfl.text.TextFieldType.DYNAMIC.toString = $estr;
openfl.text.TextFieldType.DYNAMIC.__enum__ = openfl.text.TextFieldType;
openfl.text.TextFieldType.INPUT = ["INPUT",1];
openfl.text.TextFieldType.INPUT.toString = $estr;
openfl.text.TextFieldType.INPUT.__enum__ = openfl.text.TextFieldType;
openfl.text.TextFormat = function(font,size,color,bold,italic,underline,url,target,align,leftMargin,rightMargin,indent,leading) {
	this.font = font;
	this.size = size;
	this.color = color;
	this.bold = bold;
	this.italic = italic;
	this.underline = underline;
	this.url = url;
	this.target = target;
	this.align = align;
	this.leftMargin = leftMargin;
	this.rightMargin = rightMargin;
	this.indent = indent;
	this.leading = leading;
};
$hxClasses["openfl.text.TextFormat"] = openfl.text.TextFormat;
openfl.text.TextFormat.__name__ = ["openfl","text","TextFormat"];
openfl.text.TextFormat.prototype = {
	clone: function() {
		var newFormat = new openfl.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,__merge: function(format) {
		if(format.font != null) this.font = format.font;
		if(format.size != null) this.size = format.size;
		if(format.color != null) this.color = format.color;
		if(format.bold != null) this.bold = format.bold;
		if(format.italic != null) this.italic = format.italic;
		if(format.underline != null) this.underline = format.underline;
		if(format.url != null) this.url = format.url;
		if(format.target != null) this.target = format.target;
		if(format.align != null) this.align = format.align;
		if(format.leftMargin != null) this.leftMargin = format.leftMargin;
		if(format.rightMargin != null) this.rightMargin = format.rightMargin;
		if(format.indent != null) this.indent = format.indent;
		if(format.leading != null) this.leading = format.leading;
		if(format.blockIndent != null) this.blockIndent = format.blockIndent;
		if(format.bullet != null) this.bullet = format.bullet;
		if(format.kerning != null) this.kerning = format.kerning;
		if(format.letterSpacing != null) this.letterSpacing = format.letterSpacing;
		if(format.tabStops != null) this.tabStops = format.tabStops;
	}
	,__class__: openfl.text.TextFormat
};
openfl.text.TextFormatAlign = $hxClasses["openfl.text.TextFormatAlign"] = { __ename__ : ["openfl","text","TextFormatAlign"], __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] };
openfl.text.TextFormatAlign.LEFT = ["LEFT",0];
openfl.text.TextFormatAlign.LEFT.toString = $estr;
openfl.text.TextFormatAlign.LEFT.__enum__ = openfl.text.TextFormatAlign;
openfl.text.TextFormatAlign.RIGHT = ["RIGHT",1];
openfl.text.TextFormatAlign.RIGHT.toString = $estr;
openfl.text.TextFormatAlign.RIGHT.__enum__ = openfl.text.TextFormatAlign;
openfl.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
openfl.text.TextFormatAlign.JUSTIFY.toString = $estr;
openfl.text.TextFormatAlign.JUSTIFY.__enum__ = openfl.text.TextFormatAlign;
openfl.text.TextFormatAlign.CENTER = ["CENTER",3];
openfl.text.TextFormatAlign.CENTER.toString = $estr;
openfl.text.TextFormatAlign.CENTER.__enum__ = openfl.text.TextFormatAlign;
openfl.ui = {};
openfl.ui.GameInput = function() { };
$hxClasses["openfl.ui.GameInput"] = openfl.ui.GameInput;
openfl.ui.GameInput.__name__ = ["openfl","ui","GameInput"];
openfl.ui.GameInput.__getDevice = function(gamepad) {
	if(gamepad == null) return null;
	if(!(openfl.ui.GameInput.__devices.h.__keys__[gamepad.__id__] != null)) {
		var device = new openfl.ui.GameInputDevice(gamepad.id == null?"null":"" + gamepad.id,null);
		openfl.ui.GameInput.__devices.set(gamepad,device);
		openfl.ui.GameInput.numDevices = Lambda.count(openfl.ui.GameInput.__devices);
	}
	return openfl.ui.GameInput.__devices.h[gamepad.__id__];
};
openfl.ui.GameInput.__onGamepadAxisMove = function(gamepad,axis,value) {
	var device = openfl.ui.GameInput.__getDevice(gamepad);
	if(device == null) return;
	if(device.enabled) {
		if(!device.__axis.exists(axis)) {
			var control = new openfl.ui.GameInputControl(device,"AXIS_" + (function($this) {
				var $r;
				switch(axis) {
				case 0:
					$r = "LEFT_X";
					break;
				case 1:
					$r = "LEFT_Y";
					break;
				case 2:
					$r = "RIGHT_X";
					break;
				case 3:
					$r = "RIGHT_Y";
					break;
				case 4:
					$r = "TRIGGER_LEFT";
					break;
				case 5:
					$r = "TRIGGER_RIGHT";
					break;
				default:
					$r = "UNKNOWN (" + axis + ")";
				}
				return $r;
			}(this)),-1,1);
			device.__axis.set(axis,control);
			device.__controls.push(control);
		}
		var control1 = device.__axis.get(axis);
		control1.value = value;
		control1.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE));
	}
};
openfl.ui.GameInput.__onGamepadButtonDown = function(gamepad,button) {
	var device = openfl.ui.GameInput.__getDevice(gamepad);
	if(device == null) return;
	if(device.enabled) {
		if(!device.__button.exists(button)) {
			var control = new openfl.ui.GameInputControl(device,"BUTTON_" + (function($this) {
				var $r;
				switch(button) {
				case 0:
					$r = "A";
					break;
				case 1:
					$r = "B";
					break;
				case 2:
					$r = "X";
					break;
				case 3:
					$r = "Y";
					break;
				case 4:
					$r = "BACK";
					break;
				case 5:
					$r = "GUIDE";
					break;
				case 6:
					$r = "START";
					break;
				case 7:
					$r = "LEFT_STICK";
					break;
				case 8:
					$r = "RIGHT_STICK";
					break;
				case 9:
					$r = "LEFT_SHOULDER";
					break;
				case 10:
					$r = "RIGHT_SHOULDER";
					break;
				case 11:
					$r = "DPAD_UP";
					break;
				case 12:
					$r = "DPAD_DOWN";
					break;
				case 13:
					$r = "DPAD_LEFT";
					break;
				case 14:
					$r = "DPAD_RIGHT";
					break;
				default:
					$r = "UNKNOWN (" + button + ")";
				}
				return $r;
			}(this)),0,1);
			device.__button.set(button,control);
			device.__controls.push(control);
		}
		var control1 = device.__button.get(button);
		control1.value = 1;
		control1.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE));
	}
};
openfl.ui.GameInput.__onGamepadButtonUp = function(gamepad,button) {
	var device = openfl.ui.GameInput.__getDevice(gamepad);
	if(device == null) return;
	if(device.enabled) {
		if(!device.__button.exists(button)) {
			var control = new openfl.ui.GameInputControl(device,"BUTTON_" + (function($this) {
				var $r;
				switch(button) {
				case 0:
					$r = "A";
					break;
				case 1:
					$r = "B";
					break;
				case 2:
					$r = "X";
					break;
				case 3:
					$r = "Y";
					break;
				case 4:
					$r = "BACK";
					break;
				case 5:
					$r = "GUIDE";
					break;
				case 6:
					$r = "START";
					break;
				case 7:
					$r = "LEFT_STICK";
					break;
				case 8:
					$r = "RIGHT_STICK";
					break;
				case 9:
					$r = "LEFT_SHOULDER";
					break;
				case 10:
					$r = "RIGHT_SHOULDER";
					break;
				case 11:
					$r = "DPAD_UP";
					break;
				case 12:
					$r = "DPAD_DOWN";
					break;
				case 13:
					$r = "DPAD_LEFT";
					break;
				case 14:
					$r = "DPAD_RIGHT";
					break;
				default:
					$r = "UNKNOWN (" + button + ")";
				}
				return $r;
			}(this)),0,1);
			device.__button.set(button,control);
			device.__controls.push(control);
		}
		var control1 = device.__button.get(button);
		control1.value = 0;
		control1.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE));
	}
};
openfl.ui.GameInput.__onGamepadConnect = function(gamepad) {
	var device = openfl.ui.GameInput.__getDevice(gamepad);
	if(device == null) return;
	var _g = 0;
	var _g1 = openfl.ui.GameInput.__instances;
	while(_g < _g1.length) {
		var instance = _g1[_g];
		++_g;
		instance.dispatchEvent(new openfl.events.GameInputEvent(openfl.events.GameInputEvent.DEVICE_ADDED,null,null,device));
	}
};
openfl.ui.GameInput.__onGamepadDisconnect = function(gamepad) {
	var device = openfl.ui.GameInput.__devices.h[gamepad.__id__];
	if(device != null) {
		openfl.ui.GameInput.__devices.remove(gamepad);
		openfl.ui.GameInput.numDevices = Lambda.count(openfl.ui.GameInput.__devices);
		var _g = 0;
		var _g1 = openfl.ui.GameInput.__instances;
		while(_g < _g1.length) {
			var instance = _g1[_g];
			++_g;
			instance.dispatchEvent(new openfl.events.GameInputEvent(openfl.events.GameInputEvent.DEVICE_REMOVED,null,null,device));
		}
	}
};
openfl.ui.GameInput.__super__ = openfl.events.EventDispatcher;
openfl.ui.GameInput.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	__class__: openfl.ui.GameInput
});
openfl.ui.GameInputControl = function(device,id,minValue,maxValue,value) {
	if(value == null) value = 0;
	openfl.events.EventDispatcher.call(this);
	this.device = device;
	this.id = id;
	this.minValue = minValue;
	this.maxValue = maxValue;
	this.value = value;
};
$hxClasses["openfl.ui.GameInputControl"] = openfl.ui.GameInputControl;
openfl.ui.GameInputControl.__name__ = ["openfl","ui","GameInputControl"];
openfl.ui.GameInputControl.__super__ = openfl.events.EventDispatcher;
openfl.ui.GameInputControl.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	__class__: openfl.ui.GameInputControl
});
openfl.ui.GameInputDevice = function(id,name) {
	this.__controls = new Array();
	this.__button = new haxe.ds.IntMap();
	this.__axis = new haxe.ds.IntMap();
	this.id = id;
	this.name = name;
	var control;
	var _g = 0;
	while(_g < 6) {
		var i = _g++;
		control = new openfl.ui.GameInputControl(this,"AXIS_" + i,-1,1);
		this.__axis.set(i,control);
		this.__controls.push(control);
	}
	var _g1 = 0;
	while(_g1 < 15) {
		var i1 = _g1++;
		control = new openfl.ui.GameInputControl(this,"BUTTON_" + i1,0,1);
		this.__button.set(i1,control);
		this.__controls.push(control);
	}
};
$hxClasses["openfl.ui.GameInputDevice"] = openfl.ui.GameInputDevice;
openfl.ui.GameInputDevice.__name__ = ["openfl","ui","GameInputDevice"];
openfl.ui.GameInputDevice.prototype = {
	__class__: openfl.ui.GameInputDevice
};
openfl.ui.Keyboard = function() { };
$hxClasses["openfl.ui.Keyboard"] = openfl.ui.Keyboard;
openfl.ui.Keyboard.__name__ = ["openfl","ui","Keyboard"];
openfl.ui.Keyboard.__getCharCode = function(key,shift) {
	if(shift == null) shift = false;
	if(!shift) {
		switch(key) {
		case 8:
			return 8;
		case 9:
			return 9;
		case 13:
			return 13;
		case 27:
			return 27;
		case 32:
			return 32;
		case 186:
			return 59;
		case 187:
			return 61;
		case 188:
			return 44;
		case 189:
			return 45;
		case 190:
			return 46;
		case 191:
			return 47;
		case 192:
			return 96;
		case 219:
			return 91;
		case 220:
			return 92;
		case 221:
			return 93;
		case 222:
			return 39;
		}
		if(key >= 48 && key <= 57) return key - 48 + 48;
		if(key >= 65 && key <= 90) return key - 65 + 97;
	} else {
		switch(key) {
		case 48:
			return 41;
		case 49:
			return 33;
		case 50:
			return 64;
		case 51:
			return 35;
		case 52:
			return 36;
		case 53:
			return 37;
		case 54:
			return 94;
		case 55:
			return 38;
		case 56:
			return 42;
		case 57:
			return 40;
		case 186:
			return 58;
		case 187:
			return 43;
		case 188:
			return 60;
		case 189:
			return 95;
		case 190:
			return 62;
		case 191:
			return 63;
		case 192:
			return 126;
		case 219:
			return 123;
		case 220:
			return 124;
		case 221:
			return 125;
		case 222:
			return 34;
		}
		if(key >= 65 && key <= 90) return key - 65 + 65;
	}
	if(key >= 96 && key <= 105) return key - 96 + 48;
	switch(key) {
	case 106:
		return 42;
	case 107:
		return 43;
	case 108:
		return 44;
	case 110:
		return 45;
	case 111:
		return 46;
	case 46:
		return 127;
	case 13:
		return 13;
	case 8:
		return 8;
	}
	return 0;
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.ProcessingInstruction = "processingInstruction";
Xml.Document = "document";
var this1;
this1 = new Uint32Array(256);
lime.math.color._RGBA.RGBA_Impl_.__alpha16 = this1;
var _g = 0;
while(_g < 256) {
	var i = _g++;
	var val = Math.ceil(i * 257.00392156862745);
	lime.math.color._RGBA.RGBA_Impl_.__alpha16[i] = val;
}
var this2;
this2 = new Uint8Array(510);
lime.math.color._RGBA.RGBA_Impl_.__clamp = this2;
var _g1 = 0;
while(_g1 < 255) {
	var i1 = _g1++;
	lime.math.color._RGBA.RGBA_Impl_.__clamp[i1] = i1;
}
var _g11 = 255;
var _g2 = 511;
while(_g11 < _g2) {
	var i2 = _g11++;
	lime.math.color._RGBA.RGBA_Impl_.__clamp[i2] = 255;
}
if(window.createjs != null) createjs.Sound.alternateExtensions = ["ogg","mp3","wav"];
openfl.display.DisplayObject.__instanceCount = 0;
openfl.display.DisplayObject.__worldRenderDirty = 0;
openfl.display.DisplayObject.__worldTransformDirty = 0;
com.imagination.texturePacker.impl.TexturePacker.debug = false;
com.imagination.texturePacker.impl.TexturePacker.TARGET_TEXTURE_SIZE = new openfl.geom.Point(2048,2048);
com.imagination.texturePacker.impl.TexturePacker.AUTO_INCREASE_TEXTURE_SIZE = false;
com.imagination.texturePacker.impl.TexturePacker.framePadding = 0;
com.imagination.texturePacker.impl.TexturePacker.objectPadding = 2;
com.imagination.texturePacker.impl.sheet.IBitmapDrawableObject.ref = new openfl.utils.Dictionary();
format.swf.lite.SWFLite.instances = new haxe.ds.StringMap();
haxe.Serializer.USE_CACHE = false;
haxe.Serializer.USE_ENUM_INDEX = false;
haxe.Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.CODES = null;
haxe.ds.ObjectMap.count = 0;
haxe.xml.Parser.escapes = (function($this) {
	var $r;
	var h = new haxe.ds.StringMap();
	h.set("lt","<");
	h.set("gt",">");
	h.set("amp","&");
	h.set("quot","\"");
	h.set("apos","'");
	h.set("nbsp",String.fromCharCode(160));
	$r = h;
	return $r;
}(this));
js.Boot.__toStr = {}.toString;
lime.Assets.cache = new lime.AssetCache();
lime.Assets.libraries = new haxe.ds.StringMap();
lime.Assets.initialized = false;
lime._backend.html5.HTML5Window.windowID = 0;
lime.app.Preloader.images = new haxe.ds.StringMap();
lime.app.Preloader.loaders = new haxe.ds.StringMap();
lime.ui.Gamepad.onConnect = new lime.app.Event();
lime.ui.Touch.onEnd = new lime.app.Event();
lime.ui.Touch.onMove = new lime.app.Event();
lime.ui.Touch.onStart = new lime.app.Event();
openfl.Assets.cache = new openfl.AssetCache();
openfl.display.LoaderInfo.__rootURL = window.document.URL;
openfl.system.ApplicationDomain.currentDomain = new openfl.system.ApplicationDomain(null);
openfl.geom.Matrix.__temp = new openfl.geom.Matrix();
openfl.geom.Matrix.__identity = new openfl.geom.Matrix();
openfl.Lib.current = new openfl.display.MovieClip();
openfl.Lib.__sentWarnings = new haxe.ds.StringMap();
openfl._internal.renderer.GraphicsPaths.SIN45 = 0.70710678118654752440084436210485;
openfl._internal.renderer.GraphicsPaths.TAN22 = 0.4142135623730950488016887242097;
openfl._internal.renderer.cairo.CairoGraphics.SIN45 = 0.70710678118654752440084436210485;
openfl._internal.renderer.cairo.CairoGraphics.TAN22 = 0.4142135623730950488016887242097;
openfl._internal.renderer.canvas.CanvasGraphics.SIN45 = 0.70710678118654752440084436210485;
openfl._internal.renderer.canvas.CanvasGraphics.TAN22 = 0.4142135623730950488016887242097;
openfl._internal.renderer.canvas.CanvasGraphics.fillCommands = new Array();
openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands = new Array();
openfl._internal.renderer.opengl.GLRenderer.glContextId = 0;
openfl._internal.renderer.opengl.GLRenderer.glContexts = [];
openfl._internal.renderer.opengl.shaders2.Shader.UID = 0;
openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding = 0;
openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex = 0;
openfl.geom.Rectangle.__temp = new openfl.geom.Rectangle();
openfl._internal.renderer.opengl.utils.GraphicsRenderer.fillVertexAttributes = [new openfl._internal.renderer.opengl.utils.VertexAttribute(2,5126,false,"aPosition")];
openfl._internal.renderer.opengl.utils.GraphicsRenderer.drawTrianglesVertexAttributes = [new openfl._internal.renderer.opengl.utils.VertexAttribute(2,5126,false,"aPosition"),new openfl._internal.renderer.opengl.utils.VertexAttribute(2,5126,false,"aTexCoord0"),new openfl._internal.renderer.opengl.utils.VertexAttribute(4,5121,true,"aColor")];
openfl._internal.renderer.opengl.utils.GraphicsRenderer.primitiveVertexAttributes = [new openfl._internal.renderer.opengl.utils.VertexAttribute(2,5126,false,"aPosition"),new openfl._internal.renderer.opengl.utils.VertexAttribute(4,5126,false,"aColor")];
openfl._internal.renderer.opengl.utils.GraphicsRenderer.bucketPool = [];
openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectPosition = new openfl.geom.Point();
openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds = new openfl.geom.Rectangle();
openfl.events.Event.ACTIVATE = "activate";
openfl.events.Event.ADDED = "added";
openfl.events.Event.ADDED_TO_STAGE = "addedToStage";
openfl.events.Event.CHANGE = "change";
openfl.events.Event.COMPLETE = "complete";
openfl.events.Event.DEACTIVATE = "deactivate";
openfl.events.Event.ENTER_FRAME = "enterFrame";
openfl.events.Event.MOUSE_LEAVE = "mouseLeave";
openfl.events.Event.REMOVED = "removed";
openfl.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
openfl.events.Event.RENDER = "render";
openfl.events.Event.RESIZE = "resize";
openfl.events.TextEvent.TEXT_INPUT = "textInput";
openfl.events.FocusEvent.FOCUS_IN = "focusIn";
openfl.events.FocusEvent.FOCUS_OUT = "focusOut";
openfl.events.GameInputEvent.DEVICE_ADDED = "deviceAdded";
openfl.events.GameInputEvent.DEVICE_REMOVED = "deviceRemoved";
openfl.events.IOErrorEvent.IO_ERROR = "ioError";
openfl.events.KeyboardEvent.KEY_DOWN = "keyDown";
openfl.events.KeyboardEvent.KEY_UP = "keyUp";
openfl.events.MouseEvent.CLICK = "click";
openfl.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
openfl.events.MouseEvent.MIDDLE_CLICK = "middleClick";
openfl.events.MouseEvent.MIDDLE_MOUSE_DOWN = "middleMouseDown";
openfl.events.MouseEvent.MIDDLE_MOUSE_UP = "middleMouseUp";
openfl.events.MouseEvent.MOUSE_DOWN = "mouseDown";
openfl.events.MouseEvent.MOUSE_MOVE = "mouseMove";
openfl.events.MouseEvent.MOUSE_OUT = "mouseOut";
openfl.events.MouseEvent.MOUSE_OVER = "mouseOver";
openfl.events.MouseEvent.MOUSE_UP = "mouseUp";
openfl.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
openfl.events.MouseEvent.RIGHT_CLICK = "rightClick";
openfl.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
openfl.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
openfl.media.Sound.__registeredSounds = new haxe.ds.StringMap();
openfl.text.Font.__registeredFonts = new Array();
openfl.ui.GameInput.numDevices = 0;
openfl.ui.GameInput.__devices = new haxe.ds.ObjectMap();
openfl.ui.GameInput.__instances = [];
ApplicationMain.main();
})(typeof window != "undefined" ? window : exports);

//# sourceMappingURL=HaxeRealtimeTexturePacker.js.map