window.onload = function() {
document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
 // these IDs from the previous steps
emailjs.sendForm('service_1mtshok', 'template_6tmvo2f', this)
.then(() => {
  console.log('SUCCESS!');
  }, (error) => {
  console.log('FAILED...', error);
 });
 });
 }


 