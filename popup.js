let oneone = document.getElementById('1x1');
let onetwo = document.getElementById('1x2');
let fourfour = document.getElementById('4x4');


oneone.onclick = function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'for(let i = 1; i <= 120; i++ ){document.getElementById("f" + String(i)).click();}'});
  });
}

onetwo.onclick = function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'for(let i = 1; i <= 120; i+=2 ){document.getElementById("f" + String(i)).click();}'});
  });
}

fourfour.onclick = function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: '	for(let i=1;i<=120;i+=2){document.getElementById("f"+String(i)).click(); if(i%12===11) i+=12;}'});
  });
}
