var sus = ['.xyz/'];

var searchEngine = ['google.com'];

var currentTab = {};

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if('initiator' in details === true){
            if(details.initiator.includes(searchEngine)){}
            else if(details.url.includes(sus) && (details.url.includes(details.initiator) === false)) {
                getCurrentTab(details.tabId);
                return { redirectUrl: currentTab.url }
                
            }
        }
    },
    { urls: ['https://*/*', 'http://*/'] },
    ['blocking']
)

function getCurrentTab(tabId) {
    chrome.tabs.get(tabId,  (tab) => {
        currentTab = tab;
    });
  }
  