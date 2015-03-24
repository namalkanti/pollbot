var tabs = require("sdk/tabs");
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var buttons = require('sdk/ui/button/action');


pageMod.PageMod({
  include: "*",
  contentScriptFile: [data.url("jquery.js"), data.url("submit.js")]
});

var button = buttons.ActionButton({
  id: "Spawner",
  label: "Spawns Pollbot URL",
  icon: {
    "16": "./data/gir-16.png",
    "32": "./data/gir-32.png",
    "64": "./data/gir-64.png"
  },
  onClick: handleClick
});

function handleClick(state){
  tabs.open("https://www.polleverywhere.com/cs195")
}
