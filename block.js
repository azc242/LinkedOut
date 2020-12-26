// jshint esversion:6

document.getElementById("global-nav").querySelector("a[href='/feed/']").addEventListener('click', handleClick, true);
function handleClick() {
  console.log("loiaded");
  window.location.href = 'https://www.linkedin.com/feed';
}

var elements = document.getElementsByClassName("core-rail");
for (var i = 0; i < elements.length; i++) {
  elements.item(i).innerHTML = '';
}

const Http = new XMLHttpRequest();
const url = 'https://api.thecatapi.com/v1/images/search';
Http.open("GET", url);
Http.responseType = "json";
Http.send();

Http.onreadystatechange = (err) => {
  const header1 = "<div id=\"ember63\" class=\"ember-view\"> <div data-id=\"urn:li:activity:6747916846474915841\" id=\"ember67\" class=\"relative ember-view\"> <div data-urn=\"urn:li:activity:6747916846474915841\" id=\"ember70\" class=\"feed-shared-update-v2 feed-shared-update-v2--minimal-padding full-height relative feed-shared-update-v2--e2e artdeco-card ember-view\"> <div <div=\"\" id=\"ember85\" class=\"display-flex feed-shared-actor display-flex ember-view\"> <a data-control-id=\"YwzeQP8sOyL91Wd9+jV5Lg==\" data-control-name=\"actor_container\" target=\"_self\" href=\"https://linkedin.com/in/alanzchen242/\" id=\"ember86\" class=\"feed-shared-actor__container-link relative display-flex flex-grow-1 app-aware-link ember-view\"> <div class=\"feed-shared-actor__container absolute\"></div><div class=\"feed-shared-actor__image relative\" data-control-id=\"YwzeQP8sOyL91Wd9+jV5Lg==\" data-control-name=\"actor_picture\"> <span class=\"js-feed-shared-actor__avatar\" data-entity-hovercard-id=\"urn:li:fs_miniProfile:ACoAACxMVqsBmH-bdKeLA8Lqbz5y3_iu4ZLsqWM\"> <div id=\"ember87\" class=\"feed-shared-actor__avatar ivm-image-view-model ember-view\"> <div id=\"ember88\" class=\"display-flex ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag ember-view\"> <div id=\"ember129\" class=\"presence-entity presence-entity--size-3 ember-view\"> <img title=\"Alan Chen\" src=\"https://media-exp1.licdn.com/dms/image/C5603AQGHHAloc-FtAQ/profile-displayphoto-shrink_200_200/0/1606436831730?e=1614211200&v=beta&t=ugdCMvCK2DwiN0fH-fPQS96enwPmEmCoCpJEvq64aqM\" loading=\"lazy\" id=\"ember130\" class=\"ivm-view-attr__img--centered EntityPhoto-circle-3 feed-shared-actor__avatar-image presence-entity__image EntityPhoto-circle-3 lazy-image ember-view\"> <div id=\"ember131\" class=\" presence-entity__indicator presence-entity__indicator--size-3 presence-indicator hidden presence-indicator--size-3 ember-view\"> <span class=\"visually-hidden\"> Status is offline </span></div></div></div></div></span> </div><div class=\"feed-shared-actor__meta relative\" data-control-id=\"YwzeQP8sOyL91Wd9+jV5Lg==\" data-control-name=\"actor\"> <span class=\"feed-shared-actor__title\"> <span class=\"feed-shared-actor__name t-14 t-bold hoverable-link-text t-black\" data-entity-hovercard-id=\"urn:li:fs_miniProfile:ACoAACxMVqsBmH-bdKeLA8Lqbz5y3_iu4ZLsqWM\"> <span dir=\"ltr\">Alan Chen</span> </span> <span class=\"feed-shared-actor__supplementary-actor-info t-14 t-normal ml1 t-black--light\"> • 2nd </span> </span> <span class=\"feed-shared-actor__description t-12 t-normal t-black--light\"> CS Student at NYU </span> <span class=\"feed-shared-actor__sub-description t-12 t-normal t-black--light\"> <span> <span aria-hidden=\"true\"> Now • <li-icon aria-hidden=\"true\" type=\"globe-icon\" class=\"v-align-bottom\" size=\"small\"> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" data-supported-dps=\"16x16\" fill=\"currentColor\" class=\"mercado-match\" width=\"16\" height=\"16\" focusable=\"false\"> <path d=\"M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z\"> </path> </svg> </li-icon> </span> <span class=\"visually-hidden\">Now</span> </span> </span> </div></a> </div><div style=\"\" id=\"ember90\" class=\"feed-shared-update-v2__description-wrapper ember-view\"> <div tabindex=\"-1\" id=\"ember91\" class=\"feed-shared-inline-show-more-text feed-shared-update-v2__description feed-shared-inline-show-more-text--minimal-padding ember-view\"> <div dir=\"ltr\" id=\"ember92\" class=\"feed-shared-text relative feed-shared-update-v2__commentary ember-view\"> <span class=\"break-words\"> <span dir=\"ltr\"> Here's some pawsitivty for you today. Have a great day! </span> </span></div></div></div>";

  const header2 = "</div></div></div>";

  const imageHeader = "<div id=\"ember179\" class=\"feed-shared-update-v2__content feed-shared-image feed-shared-image--single-image ember-view\"> <div class=\"relative\"> <div class=\"feed-shared-image__container\" style=\"padding-top: 66.72%;\"> <button class=\"feed-shared-image__image-link\" data-control-name=\"update_image\" data-control-id=\"fh7na5ISgyrRUHpZdhi5+w==\" aria-describedby=\"feed-shared-image-ember179\" type=\"button\"> <div id=\"ember180\" class=\"ivm-image-view-model ember-view\"> <div id=\"ember181\" class=\"display-flex ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag ember-view\">";
  const imageHeader2 = "</div></div></button></div></div></div>";

  const img = '<img  width="600" src="' + Http.response[0].url + '" loading="lazy" height="400" id="ember182" class="ivm-view-attr__img--centered feed-shared-image__image feed-shared-image__image--constrained lazy-image ember-view"';

  document.getElementsByClassName("core-rail").item(0).innerHTML = header1 + imageHeader + img + imageHeader2 + header2;
};
