// Saves options to chrome.storage
function save_options() {
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
    favoriteAnimal: 'cat'
  }, function(items) {
    $('#animal').val(items.favoriteAnimal);
  });
}
$().ready(restore_options);
$('#save').on('click', save_options);
