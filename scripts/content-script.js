// console.log("REACHED ENOUGH TO TRIGGER THE MESSAGE")
// Function to get the domain from the URL
function getDomain(url) {
    var domain;
    //find & remove protocol (http, ftp, etc.) and get domain
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }

    // find and remove www. from the URL
    else if (url.indexOf("www.") > -1) {
        domain = url.split('/')[0].split("www.")[1];
    }
    
    else {
        domain = url.split('/')[0];
    }
    //find & remove port number
    domain = domain.split(':')[0];
    return domain;
}


const sites = {
    "scholar.google.com": "education",
    "youtube.com":  "entertainment",
    "blogger.com":  "entertainment ",
    "google.com":  "universal",
    "play.google.com":  "entertainment",
    "apple.com":  "financial",
    "linkedin.com":  "influencer",
    "wikipedia.org":  "education",
    "docs.google.com":  "education",
    "cloudfare.com":  "education",
    "youtu.be":  "universal",
    "wordpress.org":  "education",
    "whatsapp.com":  "entertainment",
    "drive.google.com":  "universal",
    "istockphoto.com":  "entertainment",
    "facebook.com":  "entertainment",
    "discord.com":  "entertainment",
    "gov.in":  "education",
    "learninsta.com":  "education",
    "medium.com":  "education",
    "developers.google.com":  "coder",
    "stackoverflow.com":  "coder",
    "github.com":  "coder",
    "devpost.com":  "education",
    "mlh.io":  "education",
    "hackathon.treasure-hacks.com":  "education",
    "paypal.com":  "finanical",
    "dropbox.com":  "entertainment",
    "shopify.com":  "financial",
    "wikipedia.org":  "curious",
    "flickr.com":  "education",
    "bestbuy.com":  "work",
    "mediafire.com":  "entertainment",
    "amazon.in":  "entertainment",
    "instagram.com":  "influencial",
    "pinterest.com":  "entertainment",
    "tiktok.com":  "entertainment",
    "photos.google.com":  "entertainment",
    "vscode.dev":  "coder",
    "mail.google.com":  "work ",
    "tinyurl.com":  "entertainment",
    "w3schools.com":  "coder",
    "geeksforgeeks.org":  "coder",
    "tutorialspoint.com":  "coder",
    "photopea.com":  "influencer",
    "netflix.com":  "entertainment",
    "eventbrite.com":  "entertainment",
    "spotify.com":  "entertainment",
    "silverzone.org":  "education",
    "firebase.google.com":  "education",
    "flipkart.com":  "entertainment",
    "ebay.com":  "entertainment",
    "unsplash.com":  "entertainment",
    "android.com":  "coder",
    "xbox.com":  "gaming",
    "smashkarts.io":  "gaming",
    "outlook.com":  "work",
    "moz.com":  "entertainment",
    "getbootstrap.com":  "coder",
    "chat.openai.com":  "universal",
    "dell.com":  "finanical",
    "weather.com":  "curious",
    "ubuntu.com":  "work",
    "python.org":  "coder",
    "similarweb.com":  "entertainment",
    "reddit.com":  "entertainment",
    "twitter.com":  "entertainment",
    "twtich.tv":  "entertainment",
    "roblox.com":  "gaming",
    "quora.com":  "universal",
    "aliexpress":  "entertainment",
    "forbes.com":  "curious",
    "shutterstock.com":  "entertainment",
    "target.com":  "entertainment",
    "bbc.com":  "curious",
    "cambridge.org":  "education",
    "stackexchange.com":  "work",
    "dailymotion":  "entertainment",
    "goodreads":  "curious",
    "soundcloud.com":  "entertainment",
    "alibaba.com":  "entertainment",
    "thefreedictionary.com":  "education",
    "wikimedia.org":  "curious",
    "chess.com":  "entertainment",
    "lichess.org":  "entertainment",
    "byjus.com":  "eduction",
    "firstcry.com":  "entertainment",
    "thesaurus.com":  "education",
    "hidustantimes.com":  "curious",
    "behance.net":  "influencer",
    "gamerant.com":  "gaming",
    "topper.com":  "education",
    "ndtv.com":  "curious",
    "newsweek.com":  "curious",
    "news24.com":  "curious",
    "cars24.com":  "work",
    "vectorstock.com":  "entertainment",
    "thehindu.com":  "curious",
    "hollywoodreporter.com":  "curious",
    "foxnews.com":  "curious",
    "dribble.com":  "universal",
    "vedantu.com":  "education",
    "walmart.com":  "work",
    "pcgamer.com":  "gaming",
    "ugames.com":  "gaming",
    "lyrics.com":  "entertainment",
    "bandlab.com":  "entertainment",
    "wynk.in":  "entertainment",
    "nike.com":  "work",
    "jiosaavn.com":  "entertainment",
    "nationalgeographic.com":  "education",
    "discoveryscience.com":  "education",
    "godaddy.com":  "coder",
    "domain.com":  "coder",
    "pexels.com":  "influencer",
    "oracle.com":  "coder",
    "encyclopedia.com":  "education",
    "10fastfingers.com":  "entertainment",
    "typetest.io":  "entertainment",
    "play.typeracer.com":  "entertainment",
    "ghw.mlh.io":  "entertainment",
    "cars.com":  "work",
    "giphy.com":  "entertainment",
    "tenor.com":  "entertainment",
    "flaticons.com":  "coder",
    "pngtree.com":  "influencer",
    "udemy.com":  "education",
    "howtogeek.com":  "education",
    "bilibili.tv":  "entertainment",
    "playstation.com":  "gaming",
    "hp.com":  "work",
    "brainly.in":  "education",
    "shcsjagraon.com":  "education",
    "moneycontrol.com":  "finanical",
    "gaana.com":  "entertainment",
    "science.org":  "education",
    "autoblog.com":  "entertainment",
    "skysports.com":  "gaming",
    "openedition.org":  "entertainment",
    "oceanofgames.com":  "gaming",
    "lovetoknow.com":  "education",
    "pngegg.com":  "influencer",
    "zoom.us":  "work",
    "meet.google.com":  "wor",
    "blog.hubspot.com":  "entertainment",
    "freecodecamp.org":  "coder",
    "getliner.com":  "universal",
    "learnprogramming.online":  "coder",
    "hackr.io":  "coder",
    "devfolio":  "coder",
    "hackerearth":  "coder",
    "leetcode.com":  "coder",
    "wikihow.com":  "education",
    "springboard.com":  "education",
    "artforkidshub.com":  "entertainment",
    "creativeblog.com":  "entertainment",
    "instructables.com":  "education",
    "artprojectforkids.com":  "education",
    "herzing.edu":  "education",
    "ratatype.com":  "entertainment",
    "indeed.com":  "entertainment",
    "notta.ai/blogs":  "entertainment",
    "keybr.com":  "entertainment",
    "readandspell.com":  "entertainment",
    "keyhero.com":  "entertainment",
    "lifehack.org":  "entertainment",
    "typing.academy":  "entertainment",
    "typingpal.com":  "entertainment",
    "nitrotype.com":  "entertainment",
    "connectionsacademy.com":  "entertainment",
    "godigit.com":  "entertainment",
    "theguardian.com":  "entertainment",
    "vikaspedia.in":  "entertainment",
    "lifehacker.co.uk":  "education",
    "mentalfloss.com":  "education",
    "learncbse.com":  "education",
    "vedantu.com":  "education",
    "bigthink.com":  "education",
    "skribbl.io":  "gaming",
    "geogusser.com":  "gaming",
    "ufreegames.com":  "gaming",
    "snapchat.com":  "entertainment",
    "edx.org":  "education",
    "cbse.gov.in":  "education",
    "cbseacademic.nic.in":  "education",
    "indiatoday.in":  "curious",
    "khanacademy.org":  "education",
    "codeacademy.org":  "coder",
    "udacity.com":  "education",
    "hackerrank.com":  "coder",
    "codementor.com":  "coder",
    "educative.io":  "education",
    "coursera.com":  "education",
    "pluralsight.com":  "education",
    "datacamp.com":  "coder",
    "dataquest.com":  "coder",
    "onemonth.com":  "coder",
    "skillshare.com":  "coder",
    "upwork.com":  "coder",
    "internshala.com":  "coder"
    };

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
                            // console.log(result.domains);

                            

                            result.domains[currDomain].time += 1;
                            
                            chrome.storage.local.set({domains: result.domains});
                            // console.log(result.domains[currDomain].time);
                            // chrome.runtime.sendMessage({message: "updateTime", time: result.domains[currDomain].time});
                            // document.getElementById("time").innerHTML = result.domains[currDomain].time;
                            // console.log(result.domains[currDomain].time + 1)
                        });

                        chrome.storage.local.get(["skills"], function(result) {
                            console.log(currDomain)
                            console.log(sites[currDomain]);

                            var category = undefined;
                            if (sites[currDomain] !== undefined) {
                                var category = sites[currDomain];
                            }
                            else {
                                var category = "other";
                            }    
                            
                            result.skills[category] += 1;
                            console.log(result.skills)
                            chrome.storage.local.set({skills: result.skills});
                            
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
