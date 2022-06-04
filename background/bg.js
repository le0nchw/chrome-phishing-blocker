var sus = ['.xyz/'];

var searchEngine = ['google.com'];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if('initiator' in details === true){
            if(details.initiator.includes(searchEngine)){}
            else if(details.url.includes(sus) && (details.url.includes(details.initiator) === false)) {
                console.log(details)
                return { redirectUrl: details.initiator }
            }
        }
    },
    { urls: ['https://*/*', 'http://*/'] },
    ['blocking']
)
