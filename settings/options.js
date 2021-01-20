// Saves animal options to chrome.storage
function save_options_animal() {
  console.log("pressed");
  var animal = $('#animal').val();
  chrome.storage.sync.set({
    favoriteAnimal: animal
  }, function() {
    // Update status to let user know options were saved.
    var status = $('#status').text('Options saved.');
    setTimeout(function() {
      status.text('');
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    favoriteAnimal: '',
    okList: []
  }, function(items) {
    $('#animal').val(items.favoriteAnimal);
    $('#okList').val(items.okList.map(function(url) {
      console.log(url);
      return url + "\n";
    }).join('')); // join('') prevents map() from giving unexpected comma
  });
}

// Saves okList to chrome.storage
function save_okList() {
  var okList = $('#okList').val().split("\n");
  chrome.storage.sync.set({
    okList: okList
  }, function() {
    // Update status to let user know options were saved.
    var status = $('#status_okList').text('Options saved.');
    setTimeout(function() {
      status.text('');
    }, 750);
  });
}
$().ready(restore_options);
$('#save').on('click', save_options_animal);
$("#save_okList").on('click', save_okList);
