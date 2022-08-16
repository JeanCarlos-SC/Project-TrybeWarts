const btn = document.getElementById('btn-login');
const emailLogin = document.getElementById('email-login');
const emailSenha = document.getElementById('senha-login');
const labelRate = document.getElementById('label-rate');
btn.addEventListener('click', () => {
  if (emailLogin.value === 'tryber@teste.com' && emailSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const createRadio = () => {
  for (let i = 1; i <= 10; i += 1) {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'rate';
    radio.value = i;
    labelRate.appendChild(radio);
    labelRate.insertAdjacentText('beforeend', `${i}`);
  }
};
createRadio();

const btnSubmit = document.getElementById('submit-btn');
const agreeCheck = document.getElementById('agreement');
btnSubmit.setAttribute('disabled', true);
agreeCheck.addEventListener('click', () => {
  if (agreeCheck.checked) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', true);
  }
});

const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

textarea.addEventListener('input', () => {
  counter.innerHTML = 500 - textarea.value.length;
});

function getForm() {
  const name = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const AllSubjects = document.getElementsByClassName('subject');
  const checkedSubjects = [];
  for (let i = 0; i < AllSubjects.length; i += 1) {
    if (AllSubjects[i].checked) {
      checkedSubjects.push(` ${AllSubjects[i].value}npm `);
    }
  }
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const text = textarea.value;
  const formData = `<p>Nome: ${name} ${lastname}</p> <p>Email: ${email}</p>  <p>Casa: ${house}</p>
  <p>Família: ${family}</p> <p>Matérias: ${checkedSubjects}</p> <p>Avaliação: ${rate}</p>
  <p>Observações: ${text}</p>`;
  return formData;
}

function showForm(e) {
  const principal = document.getElementById('principal');
  e.preventDefault();
  const currentForm = document.getElementById('evaluation-form');
  const newForm = document.createElement('form');
  newForm.id = 'form-data';
  newForm.innerHTML = getForm();
  currentForm.remove();
  principal.appendChild(newForm);
}

btnSubmit.addEventListener('click', showForm);
