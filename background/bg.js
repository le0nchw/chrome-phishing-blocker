var sus = ['.xyz/'];

var searchEngine = ['google.com', 'bing.com', 'duckduckgo.com'];

var currentTab = {};

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if('initiator' in details === true){
            getCurrentTab(details.tabId);
            const isSearchEngine = searchEngine.find(element => {
                if (details.initiator.includes(element)) {
                  return true;
                }
            });
            const isSusUrl = sus.find(element => {
                if (details.url.includes(element)) {
                  return true;
                }
            });
            if(isSearchEngine){}
            else if(isSusUrl && (details.url.includes(details.initiator) === false)) {
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
  