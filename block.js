// jshint esversion:8

// init classname matching string and MutationObserver
const DEL_SELECTOR = ".core-rail";
const mo = new MutationObserver(onMutation);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // listen for messages sent from background.js
  observe(); // start MutationObserver to listen for changes

  chrome.storage.sync.get(["favoriteAnimal", "okList"], function(result) {
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
      links = [];
    }

    onMutation([{addedNodes: [document.documentElement]}], links);
    mo.disconnect(); // disconnects MO to avoid blocking in other webpages
    var showDog = result.favoriteAnimal === "dog";
    createPost(showDog, result.okList);
  });
  sendResponse({status: 200});
  return true;
});

/*
  This function uses the MutationObserver instance and removes all HTML elements
  with matches to DEL_SELECTOR
*/
function onMutation(mutations, okList) {
  const emptyokList = okList.length === 0;
  const toRemove = [];
  // loops through entire HTML document's nodes
  for (const { addedNodes } of mutations) {
    // loops through nodes of nodes
    for (const n of addedNodes) {
      // if the element has a tag name (it is an element such as img, a, div, etc),
      // then check if it has an ID or class name that matches DEL_SELECTOR
      if (n.tagName) {
        if (n.matches(DEL_SELECTOR)) {
          toRemove.push(n.children);
        } else if (n.firstElementChild && n.querySelector(DEL_SELECTOR)) {
          var matches = n.querySelectorAll(DEL_SELECTOR);
          for (var i = 0; i < matches.length; i++) {
            toRemove.push(...matches[i].children);
          }
        }
      }
    }
  }
  // this is temporarily needed because when there is a post that doesn't need
  // to be deleted, LinkedIn sneaks in a post right after it that does not belong
  var needsCleaning = false;

  if (toRemove.length) {
    mo.disconnect(); // stop observing for changes
    for (const el of toRemove) {
      if(el.innerHTML.match("pb5")) {
        el.remove();
      }
      var deleteIt = true;
      try {
        var individualPosts = el.childNodes;
        for (const child of individualPosts) {
          const re = new RegExp(okList.join("|"), "i");
          var containsMatch = re.test(child.innerHTML);
          // regex will match everything when okList is empty/undefined
          if(!emptyokList && containsMatch) {
            deleteIt = false;
          }
          else if(!containsMatch) {
            child.remove();
          }
        }
        if(deleteIt) {
          el.remove();
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
}

function cleanDOM() {
  var coreRail = document.getElementsByClassName("core-rail");
  try {
    var crChildren = coreRail[0].children;
    // loops through children of coreRail in case therea re multiple unblocked posts
    // Note: it starts at 0 because the animal image hasn't been added yet
    for(var i = 1; i < crChildren.length; i++) {
      // for loop starts at 1 because its the 2nd item+ that needs ot be removed
      for(var j = 1; j < crChildren.item(i).children.length; j++) {
        toRemove = crChildren.item(i).children.item(j);
        toRemove.parentNode.removeChild(toRemove);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

// Starts MutationObserver so that it listens for changes to the DOM
function observe() {
  mo.observe(document, {
    subtree: true,
    childList: true,
  });
}

function addToFeed(htmlElement) {
  var coreRailHtml = document.getElementsByClassName("core-rail");
  coreRailHtml[0].innerHTML = htmlElement + coreRailHtml[0].innerHTML;
}

function createPost(showDog, okList) {
  const Http = new XMLHttpRequest(); // makes GET requests to API
  const url = showDog ? 'https://api.thedogapi.com/v1/images/search' : 'https://api.thecatapi.com/v1/images/search';
  Http.open("GET", url);
  Http.responseType = "json";
  Http.send();

  Http.onreadystatechange = function() {
    insertImage();
  };

  /*
    This function inserts the fake post on LinkedIn's feed page with a cat image from the API
  */
  function insertImage() {
    const header1 = "<div id=\"ember69\" class=\"ember-view\"> <div data-id=\"urn:li:activity:6747916846474915841\" id=\"ember67\" class=\"relative ember-view\"> <div data-urn=\"urn:li:activity:6747916846474915841\" id=\"ember70\" class=\"feed-shared-update-v2 feed-shared-update-v2--minimal-padding full-height relative feed-shared-update-v2--e2e artdeco-card ember-view\"> <div <div=\"\" id=\"ember85\" class=\"display-flex feed-shared-actor display-flex ember-view\"> <a data-control-id=\"YwzeQP8sOyL91Wd9+jV5Lg==\" data-control-name=\"actor_container\" target=\"_self\" href=\"https://alanchen.ml/LinkedOut/\" id=\"ember86\" class=\"feed-shared-actor__container-link relative display-flex flex-grow-1 app-aware-link ember-view\"> <div class=\"feed-shared-actor__container absolute\"></div><div class=\"feed-shared-actor__image relative\" data-control-id=\"YwzeQP8sOyL91Wd9+jV5Lg==\" data-control-name=\"actor_picture\"> <span class=\"js-feed-shared-actor__avatar\" data-entity-hovercard-id=\"urn:li:fs_miniProfile:ACoAACxMVqsBmH-bdKeLA8Lqbz5y3_iu4ZLsqWM\"> <div id=\"ember87\" class=\"feed-shared-actor__avatar ivm-image-view-model ember-view\"> <div id=\"ember88\" class=\"display-flex ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag ember-view\"> <div id=\"ember129\" class=\"presence-entity presence-entity--size-3 ember-view\"> <img title=\"LinkedOut\" src=\"https://alanchen.ml/LinkedOut/images/LinkedOut_icon.jpg\" loading=\"lazy\" id=\"ember130\" class=\"ivm-view-attr__img--centered EntityPhoto-circle-3 feed-shared-actor__avatar-image presence-entity__image EntityPhoto-circle-3 lazy-image ember-view\"> <div id=\"ember131\" class=\" presence-entity__indicator presence-entity__indicator--size-3 presence-indicator hidden presence-indicator--size-3 ember-view\"> <span class=\"visually-hidden\"> Status is offline </span></div></div></div></div></span> </div><div class=\"feed-shared-actor__meta relative\" data-control-id=\"YwzeQP8sOyL91Wd9+jV5Lg==\" data-control-name=\"actor\"> <span class=\"feed-shared-actor__title\"> <span class=\"feed-shared-actor__name t-14 t-bold hoverable-link-text t-black\" data-entity-hovercard-id=\"urn:li:fs_miniProfile:ACoAACxMVqsBmH-bdKeLA8Lqbz5y3_iu4ZLsqWM\"> <span dir=\"ltr\">LinkedOut</span> </span> <span class=\"feed-shared-actor__supplementary-actor-info t-14 t-normal ml1 t-black--light\"> • 2nd </span> </span> <span class=\"feed-shared-actor__description t-12 t-normal t-black--light\"> Block your toxic LinkedIn feed. </span> <span class=\"feed-shared-actor__sub-description t-12 t-normal t-black--light\"> <span> <span aria-hidden=\"true\"> Now • <li-icon aria-hidden=\"true\" type=\"globe-icon\" class=\"v-align-bottom\" size=\"small\"> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" data-supported-dps=\"16x16\" fill=\"currentColor\" class=\"mercado-match\" width=\"16\" height=\"16\" focusable=\"false\"> <path d=\"M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z\"> </path> </svg> </li-icon> </span> <span class=\"visually-hidden\">Now</span> </span> </span> </div></a> </div><div style=\"\" id=\"ember90\" class=\"feed-shared-update-v2__description-wrapper ember-view\"> <div tabindex=\"-1\" id=\"ember91\" class=\"feed-shared-inline-show-more-text feed-shared-update-v2__description feed-shared-inline-show-more-text--minimal-padding ember-view\"> <div dir=\"ltr\" id=\"ember92\" class=\"feed-shared-text relative feed-shared-update-v2__commentary ember-view\"> <span class=\"break-words\"> <span dir=\"ltr\"> Here's some pawsitivty for you today. Have a great day! </span> </span></div></div></div>";

    const header2 = "</div></div></div>";

    const imageHeader = "<div id=\"ember179\" class=\"feed-shared-update-v2__content feed-shared-image feed-shared-image--single-image ember-view\"> <div class=\"relative\"> <div class=\"feed-shared-image__container\" style=\"padding-top: 66.72%;\"> <button class=\"feed-shared-image__image-link\" data-control-name=\"update_image\" data-control-id=\"fh7na5ISgyrRUHpZdhi5+w==\" aria-describedby=\"feed-shared-image-ember179\" type=\"button\"> <div id=\"ember180\" class=\"ivm-image-view-model ember-view\"> <div id=\"ember181\" class=\"display-flex ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag ember-view\">";
    const imageHeader2 = "</div></div></button></div></div></div>";

    try {
      const img = '<img  width="600" src="' + Http.response[0].url + '" loading="lazy" height="400" id="ember182" class="ivm-view-attr__img--centered feed-shared-image__image feed-shared-image__image--constrained lazy-image ember-view"';
      var imgEmbed = header1 + imageHeader + img + imageHeader2 + header2;

      addToFeed(imgEmbed);
      cleanDOM();
    } catch (e) {
      console.log(e);
    }
  }
}
