// Hide the element initially by adding the 'hidden' class
document.getElementById('demo1').classList.add('hidden');

// Show the element after 3 seconds with a smooth transition
setTimeout(function() {
  document.getElementById('demo1').classList.remove('hidden');
}, 3000);
