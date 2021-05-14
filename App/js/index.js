xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel13")
                .setDock("none")
                .setWidth("57.904761904761905em")
                .setHeight("25.904761904761905em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setSandboxTheme("webflat")
                .setCaption("Web Flat")
                .setCustomStyle({
                    "KEY":{
                        "margin":"1em"
                    }
                })
            );
            
            host.xui_ui_panel13.append(
                xui.create("xui.UI.Element")
                .setHost(host,"xui_ui_element1")
                .setLeft("32em")
                .setTop("3.8095238095238093em")
                .setHeight("12.41904761904762em")
            );
            
            host.xui_ui_panel13.append(
                xui.create("xui.UI.Link")
                .setHost(host,"xui_ui_link2")
                .setLeft("0.7333333333333333em")
                .setTop("0em")
                .setWidth("23em")
                .setHeight("13em")
                .setCaption("urltexedit")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});