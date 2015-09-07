package net.peteshand.delay;

import com.imagination.delay.Delay;
import openfl.display.Sprite;
import openfl.text.TextField;
import openfl.text.TextFormat;

/**
 * ...
 * @author P.J.Shand
 */
class Main extends Sprite 
{
	private var textfield:TextField;
	private var format:TextFormat;
	private var output(default, set):String;
	
	public function new() 
	{
		super();
		
		format = new TextFormat();
		format.color = 0xFFFFFF;
		
		textfield = new TextField();
		addChild(textfield);
		textfield.width = stage.stageWidth;
		textfield.height = stage.stageHeight;
		
		textfield.text = "";
		
		Delay.nextFrame(NextFrame);
		Delay.byFrames(2, By2Frames);
		Delay.byFrames(3, By3FramesWithParam, [1]);
		Delay.byFrames(4, By4FramesWithParams, [0.9, "test"]);
		Delay.byTime(500, By500Milliseconds, null, Delay.TIME_UNIT_MILLISECONDS);
		Delay.byTime(2, By2Seconds);
		Delay.byTime(3, By3SecondsWithParam, [0.14]);
		Delay.byTime(4, By4SecondsWith2Param2, [0.23, "test"]);
		Delay.byTime(0.25, ByQuarterOfAMinute, null, Delay.TIME_UNIT_MINUTES);
		Delay.byTime(1, By1Hour, null, Delay.TIME_UNIT_HOURS);
	}
	
	private function NextFrame() 
	{
		LogOutput("Next Frame");
	}

	private function By2Frames() 
	{
		LogOutput("By 2 Frames");
	}
	
	private function By3FramesWithParam(value:Int) 
	{
		LogOutput("By 3 Frames With Param = " + value);
	}
	
	private function By4FramesWithParams(value:Float, value2:String) 
	{
		LogOutput("By 4 Frames With Param 1 = " + value + " and Param 2 = " + value2);
	}
	
	private function By500Milliseconds() 
	{
		LogOutput("By 500 Milliseconds");
	}
	
	private function By2Seconds() 
	{
		LogOutput("By 2 Seconds");
	}
	
	private function By3SecondsWithParam(value:Float) 
	{
		LogOutput("By 3 Seconds With Param = " + value);
	}
	
	function By4SecondsWith2Param2(value:Float, value2:String) 
	{
		LogOutput("By 4 Seconds With Param 1 = " + value + " and Param 2 = " + value2 + "\nand wait for it...");
	}
	
	private function ByQuarterOfAMinute() 
	{
		LogOutput("By Quarter Of A Minute, aka 15 seconds" + "\nthat's it, no more.. unless you feel like waiting for an hour");
	}
	
	private function By1Hour() 
	{
		LogOutput("I can't imagine anyone will wait this long, but one hour has past since this application started" + "\nthat's it, no more");
	}
	
	function LogOutput(value:String) 
	{
		trace(value);
		output = value + "\n";
	}
	
	function set_output(value:String):String 
	{
		textfield.text += value;
		textfield.setTextFormat(format);
		return output = value;
	}
}
