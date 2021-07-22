console.log("gentleman background script running ---");
chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
    //execute function on receiving a new message
    if(message.msg === "replaceImage"){
        // let imageLink = chrome.runtime.getURL("/asset/image/gentleman.jpg");
        // senderResponse({data: imageLink, index: message.index});
        senderResponse({data: "foo", index: message.index});
        return true;  // Will respond asynchronously.
    }
});