import throttle from 'lodash.throttle';

const KEY_FEEDBACK_FORM = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  let formData = localStorage.getItem(KEY_FEEDBACK_FORM);
  formData = formData
    ? JSON.parse(localStorage.getItem(KEY_FEEDBACK_FORM))
    : {};
  formData[event.target.name] = event.target.value;
  localStorage.setItem(KEY_FEEDBACK_FORM, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(KEY_FEEDBACK_FORM)));
  event.currentTarget.reset();
  localStorage.removeItem(KEY_FEEDBACK_FORM);
}

(function initForm() {
  let localData = localStorage.getItem(KEY_FEEDBACK_FORM);
  if (localData) {
    localData = JSON.parse(localData);
    feedbackForm.message.value = localData.message;
    feedbackForm.email.value = localData.email;
  }
})();
