console.log("gentleman content script running ---");

let images = document.getElementsByTagName('img');
for(let i = 0; i < images.length; i++){
    //chrome.runtime.sendMessage(string extensionId, any message, object options, function responseCallback);
    chrome.runtime.sendMessage({msg: 'replaceImage', index: i}, function({data, index}){
        images[index].src = data.link;
    });
}