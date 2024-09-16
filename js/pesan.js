const scriptURL = 'https://script.google.com/macros/s/AKfycbyMtq58J8UeFhwZgoPpa96qEP8JaAEaQSsn37rLRavdykIPDCkoRERvn7Ib0koGPA/exec'
const form = document.forms['Pesan']

const myAlert = document.querySelector('.alert');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      // tampilkan alert
      myAlert.classList.toggle('d-none')
      // reset pesan
      form.reset();
      console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})