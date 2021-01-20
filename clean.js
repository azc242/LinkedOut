// jshint esversion: 8

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  chrome.storage.sync.get(["okList"], function(result) {
    var links = result.okList;
    // make sure links is not undefined
    if(links) {
      // modify links to only obtain ID
      links = links.filter(Boolean); // get rid of empty strings
      links.forEach(function(account, i, links) {
        links[i] = account.substring(0, account.length-1);
        links[i] = links[i].substring(links[i].lastIndexOf("/") + 1, links[i].length);
      });
    } else {
      sendResponse({status: 200});
      return true;
    }
    // sort of a brute-force solution to make sure the DOM and deletion async goes before cleaning up
    setTimeout(function(){
      removeOccludableUpdate(links);
    }, 2000);
  });
  sendResponse({status: 200});
  return true;
});

function removeOccludableUpdate(links) {
  const toRemove = ["occludable-update","has-occluded-height", "occludable-update-hint", "occludable"];
  const re = new RegExp(toRemove.join("|"), "i");
  const re2 = new RegExp(links.join("|"), "i");

  var cr = document.getElementsByClassName("core-rail");
  for(const child of cr) {
    const c = child.children;
    for(const post of c) {
      const r = post.children;
      for(const del of r) {
        // check it contains the classes but DOESNT contain okListed users' posts
        if(re.test(del.innerHTML) && !re2.test(del.innerHTML)) {
          del.setAttribute("class", "");
          del.remove();
        }
      }
    }
  }
  expandPosts();
}


function expandPosts() {
  var coreRail = document.getElementsByClassName("core-rail")[0];
  var crbuttons = coreRail.getElementsByTagName('button');
  // console.log(crbuttons);
  for(const btn of crbuttons) {
    if(btn.innerHTML.match("see more")) {
      btn.parentNode.setAttribute("style", 'max-height: none; display: block;');
      btn.remove();
    }
  }
}
