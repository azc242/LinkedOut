// jshint esversion: 8

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  chrome.storage.sync.get(["whitelist"], function(result) {
    var links = result.whitelist;
    // make sure links is not undefined
    if(links) {
      // modify links to only obtain ID
      links = links.filter(Boolean); // get rid of empty strings
      links.forEach(function(account, i, links) {
        links[i] = account.substring(0, account.length-1);
        links[i] = links[i].substring(links[i].lastIndexOf("/") + 1, links[i].length);
      });
    } else {
      links = [];
    }
    setTimeout(function(){
      removeOccludableUpdate(links);
    }, 2500);
  });
  sendResponse({status: 200});
  return true;
});

function removeOccludableUpdate(links) {
  console.log("cleaning occludable update");
  const toRemove = ["occludable-update","has-occluded-height", "occludable-update-hint", "occludable"];
  const re = new RegExp(toRemove.join("|"), "i");
  const re2 = new RegExp(links.join("|"), "i");

  var cr = document.getElementsByClassName("core-rail");
  console.log(cr[0]);
  for(const child of cr) {
    console.log(child);
    const c = child.children;
    for(const post of c) {
      console.log(post);
      const r = post.children;
      for(const del of r) {
        console.log(del);
        // check it contains the classes but DOESNT contain whitelisted users' posts
        if(re.test(del.innerHTML) && !re2.test(del.innerHTML)) {
          del.setAttribute("class", "");
          // del.removeChild();
          del.remove();
          // console.log("LINE 52 REMOVED AN OCCLUDABLE UPDATE");
        }
      }
    }
  }
  console.log("EXITING REMOVE OCCLUDABLE UPDATES FUNCTION");
  expandPosts();
}


function expandPosts() {
  var coreRail = document.getElementsByClassName("core-rail")[0];
  var crbuttons = coreRail.getElementsByTagName('button');
  console.log(crbuttons);
  for(const btn of crbuttons) {
    if(btn.innerHTML.match("see more")) {
      btn.parentNode.setAttribute("style", 'max-height: none; display: block;');
      btn.remove();
    }
  }
}
