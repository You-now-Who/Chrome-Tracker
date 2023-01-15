

var timer = setInterval(function() {
    // Call the chrome api to get the current skills and update the popup
    chrome.storage.local.get(['skills'], function(result) {
        var skills = result.skills;

        // console.log(skills);
        for (var skill in skills) {
            var skill_item = document.getElementById("bar-fill-"+skill);
            var span_item = document.getElementById("span-"+skill);

            let curr_width = skill_item.style.width
            skill_item.style.width = (skills[skill]*0.1) + "%";

            span_item.innerHTML = (Math.round((skills[skill]*0.1) * 100) / 100) + "%";

            
            // console.log(new_width)
            // skill_item.style.width = new_width;
            

            // skill_item.innerHTML = skill + ": " + skills[skill];
        }
    });


}, 1000);