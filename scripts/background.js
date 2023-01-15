import "crx-hotreload";
// import sites from './sites.json';
// console.log(sites);

const skills = ["coder", "work", "gaming", "entertainment", "education", "influencer", "financial", "universal", "gk", "other"];



async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

var old_tab = null;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.message === "checkTabActive")
        
        var tabId = request.id;
        sendResponse({tabStatus: true});
        
    }
  );

// run the function when the extension is installed
chrome.runtime.onInstalled.addListener(function() {
    // Set the default value for the domains

    var skill_dic = {"coder": 0, "work": 0, "gaming": 0, "entertainment": 0, "education": 0, "influencer": 0, "financial": 0, "universal": 0, "gk": 0, "other": 0};
    chrome.storage.local.set({domains: {}});
    chrome.storage.local.set({skills: skill_dic});
});

// run the function when a new tab is selected
chrome.tabs.onActivated.addListener(function(activeInfo) {
    getCurrentTab().then(tab => {
        console.log(tab.url);
        (async () => {
            const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
            if (old_tab != null) {
                const response_null = await chrome.tabs.sendMessage(old_tab.id, 
                    {
                        msg: "newTabChanged",
                        tab: old_tab
                    });
                
                console.log(old_tab);
            }
            const response = await chrome.tabs.sendMessage(tab.id, 
                {
                    msg: "tabChanged",
                    tab: tab
                });
            
            // console.log(response);
        })();
        old_tab = tab;
    });
});