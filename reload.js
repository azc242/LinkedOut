document.getElementById("global-nav").querySelector("a[href='/feed/']").addEventListener('click', handleClick, true);
function handleClick() {
  console.log("loaded");
  window.location.href = 'https://www.linkedin.com/feed';
}
