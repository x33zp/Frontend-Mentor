"use strict";var darkButton=document.getElementById("dark"),lightButton=document.getElementById("light"),setColorMode=function(){"dark"==localStorage.getItem("colorMode")?(setDarkMode(),darkButton.click()):"light"==localStorage.getItem("colorMode")&&(setLightMode(),lightButton.click())},checkMode=function(){window.matchMedia("(prefers-color-scheme: light)").matches?lightButton.click():window.matchMedia("(prefers-color-scheme: dark)").matches&&darkButton.click()},checkModeChange=function(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(){checkMode()}))},setDarkMode=function(){document.querySelector("body").classList="dark"},setLightMode=function(){document.querySelector("body").classList="light"};setColorMode(),checkModeChange();var radioButtons=document.querySelectorAll(".toggle__wrapper input");radioButtons.forEach((function(e){e.addEventListener("click",(function(){darkButton.checked?(localStorage.setItem("colorMode","dark"),setDarkMode()):(localStorage.setItem("colorMode","light"),setLightMode())}))}));
//# sourceMappingURL=script.js.map