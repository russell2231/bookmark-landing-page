const featTopics = document.querySelectorAll('.topic p');
const faqQuestions = document.querySelectorAll('.question');
const form = document.querySelector('.form-container');

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// SLIDER EFFECT FOR FEATURES TAB
featTopics.forEach((topic,index) => {
  const slider = document.querySelector('.slider');
  topic.addEventListener('click', () => {
    for(const topic of featTopics) {
      topic.parentElement.classList.remove('selected');
    }
    topic.parentElement.classList.add('selected');
    slider.style.transform = `translate(${index * -33.33}%)`;
  })
});

// FAQ TAB
for(const question of faqQuestions) {
  question.addEventListener('click', () => {
    question.classList.toggle('open');
  })
};

// CONTACT FORM
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.querySelector('#email').value;
  const contactHeading = document.querySelector('.contact h2');
  
  if (!validateEmail(email)) {
    form.classList.add('error');
  } else {
    form.style.display = 'none';
    contactHeading.innerText = `Ok, we'll let you know`;
  }
})

