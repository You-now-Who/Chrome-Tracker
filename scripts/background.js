import "crx-hotreload";

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
        // get the tab object from the id

        

        // let queryOptions = { active: true, lastFocusedWindow: true };
        // `tab` will either be a `tabs.Tab` instance or `undefined`.
        // let [tab] = chrome.tabs.query(queryOptions);
        // if (tab.id === tabId) {
        //     sendResponse({tabStatus: true});
        // }
        // else {
        //     sendResponse({tabStatus: false});
        // }

        // chrome.tabs.get(tabId, function(tab) {
        //     console.log(tab);
        //     console.log(tab.active);
        //     sendResponse({tabStatus: tab.active});
        // });

        // var fetched_tab = await chrome.tabs.get(tabId);

        // check if the tab is active
        // sendResponse({farewell: "goodbye"});
        sendResponse({tabStatus: true});
        
    }
  );


// run the function when the extension is installed
chrome.runtime.onInstalled.addListener(function() {
    // Set the default value for the domains
    const skills = ["coder", "work", "gaming", "entertainment", "education", "influencer", "financial", "universal", "gk", "social"];
    chrome.storage.local.set({domains: {}});
    chrome.storage.local.set({skills: skills});
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