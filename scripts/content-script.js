// Function to get the domain from the URL
function getDomain(url) {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }
    //find & remove port number
    domain = domain.split(':')[0];
    return domain;
}

var currTimeElapsed = 0;
var flag = 0;

document.getElementById
// If the current tab is changed, get the domain from the URL and start a timer
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    currTimeElapsed = 0;
    //   chrome.storage.local.set({domains: {}});
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.msg === "tabChanged")
      {
        // alert(getDomain(request.tab.url));
        var currDomain = getDomain(request.tab.url);
        console.log(currDomain);

        // Check if the domain is in the storage
        (async () => {
            chrome.storage.local.get(["domains"]).then((result) => {
                console.log(result.domains);
                if (result.domains[currDomain] === undefined) {
                    console.log("Domain is not in storage adding it");
                    
                    // Add the domain to the storage
                    result.domains[currDomain] = {"domain": currDomain, "time": 0};
                    chrome.storage.local.set({domains: result.domains});
                }
            });    
            
            // Start the timer
            var timer = setInterval(function() {

                currTimeElapsed += 1;
                // console.log(currTimeElapsed);

                (async () => {

                    const res = await chrome.runtime.sendMessage({message: "checkTabActive", id: request.tab.id});
                    // do something with response here, not outside the function
                    console.log(res);
                    if (res.tabStatus === true)
                    {
                        chrome.storage.local.get(["domains"], function(result) {
                            console.log(result.domains);
                            result.domains[currDomain].time += 1;
                            chrome.storage.local.set({domains: result.domains});
                            console.log(result.domains[currDomain].time);
                            // chrome.runtime.sendMessage({message: "updateTime", time: result.domains[currDomain].time});
                            // document.getElementById("time").innerHTML = result.domains[currDomain].time;
                            // console.log(result.domains[currDomain].time + 1)
                        });
                    }
                    else {
                        console.log("Tab is not active");
                        clearInterval(timer);
                    }

                })();

            }, 1000);
        })();
        sendResponse({domain: currDomain});
      }

      if (request.msg === "newTabChanged")
      {
        //Stop the timer
        // clearInterval(timer);
      }

    }
  );
