//Pure JS based composition
define.class(function($server$, composition, role, $ui$, screen, view, label, button, $widgets$, propviewer){	
	this.render = function(){ return [
		role(
			screen({clearcolor:vec4('blue'),flexwrap:"nowrap", flexdirection:"row",bg:{
							color:function(){								
								var col1 = vec3(0.1,0.1,0.1);
								var col2= vec3(0.2,0.25,0.5);
								return vec4(mix(col1, col2, 1-uv.y  + noise.noise2d(uv.xy*403.6)*0.02),1.0)
							}
						}
					}
						,view({flexdirection:"column", flex:1, bg:0, margin:50}			
							,label({name:"thelabel",bg:0, text:"this is a label with some example props"})
							,propviewer({target:"thelabel", flex:1, overflow:"scroll"}))
						,view({flexdirection:"column",flex:1, bg:0, margin:50}			
							,button({name:"thebutton", text:"this is a button with some example props"})
							,propviewer({target:"thebutton", flex:1, overflow:"scroll"})
	)			
				
			)
		)
	]}
})