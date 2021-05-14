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
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div34")
                .setLeft("25.142857142857142em")
                .setTop("6.857142857142857em")
                .setHtml("<span class=\"tagcolor\" style=\"box-sizing: inherit; color: mediumblue; font-family: Consolas, &quot;courier new&quot;; font-size: 15px; background-color: rgb(255, 255, 255);\">&lt;</span><span style=\"color: rgb(165, 42, 42); font-family: Consolas, &quot;courier new&quot;; font-size: 15px; background-color: rgb(255, 255, 255);\">iframe</span><span class=\"attributecolor\" style=\"box-sizing: inherit; color: red; font-family: Consolas, &quot;courier new&quot;; font-size: 15px; background-color: rgb(255, 255, 255);\">&nbsp;src<span class=\"attributevaluecolor\" style=\"box-sizing: inherit; color: mediumblue;\">=\"<i style=\"box-sizing: inherit;\">google.com</i>\"</span>&nbsp;title<span class=\"attributevaluecolor\" style=\"box-sizing: inherit; color: mediumblue;\">=\"<em style=\"box-sizing: inherit;\">description</em>\"</span></span><span class=\"tagcolor\" style=\"box-sizing: inherit; color: mediumblue; font-family: Consolas, &quot;courier new&quot;; font-size: 15px; background-color: rgb(255, 255, 255);\">&gt;</span>")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        functions:{
        }
    }
});