console.log("gentleman background script running ---");
chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
    //execute function on receiving a new message
    if(message.msg === "replaceImage"){
        fetch('https://some-random-api.ml/img/koala')
            .then(response => response.text())
            .then(data => {
                let dataObj = JSON.parse(data);
                senderResponse({data: dataObj, index: message.index});
            })
            .catch(error => console.log("error", error))
        return true;  // Will respond asynchronously.
    }
});