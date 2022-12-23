function RenderModal() {
  const main = document.querySelector('.main');

  const wrapperModal = document.createElement('section');
  wrapperModal.classList.add('wrapper-modal');
  const wrapperModalForm = document.createElement('div');
  wrapperModalForm.classList.add('wrapper-modal__form');
  const formModal = document.createElement('form');
  formModal.classList.add('form-modal');
  formModal.setAttribute('name', 'form');
  formModal.setAttribute('action', '#')
  const modalDetails = document.createElement('div');
  modalDetails.classList.add('modal__details');
  const modalDetailsName = document.createElement('div');
  modalDetailsName.classList.add('modal__details-name');
  const modalDetailsNameText = document.createElement('div');
  modalDetailsNameText.classList.add('modal__details-name-text');
  const modalDetailsPhone = document.createElement('div');
  modalDetailsPhone.classList.add('modal__details-phone');
  const modalDetailsPhoneText = document.createElement('div');
  modalDetailsPhoneText.classList.add('modal__details-phone-text');
  const modalDetailsAddress = document.createElement('div');
  modalDetailsAddress.classList.add('modal__details-address');
  const modalDetailsAddressText = document.createElement('div');
  modalDetailsAddressText.classList.add('modal__details-address-text');
  const modalDetailsEmail = document.createElement('div');
  modalDetailsEmail.classList.add('modal__details-email');
  const modalDetailsEmailText = document.createElement('div');
  modalDetailsEmailText.classList.add('modal__details-email-text');
  const modalDetailsBtn = document.createElement('button');
  modalDetailsBtn.classList.add('modal__details-btn');
  modalDetailsBtn.setAttribute('type', 'submit')

  const inputName = document.createElement('input');
  inputName.classList.add('input', 'input-details', 'input-details-name');
  inputName.setAttribute('type', 'text')
  inputName.setAttribute('placeholder', 'Имя и фамилия')
  const inputPhone = document.createElement('input');
  inputPhone.classList.add('input', 'input-details', 'input-details-phone');
  inputPhone.setAttribute('type', 'text')
  inputPhone.setAttribute('placeholder', 'Телефон')
  inputPhone.setAttribute('name', "phone")
  const inputAddress = document.createElement('input');
  inputAddress.classList.add('input', 'input-details', 'input-details-address');
  inputAddress.setAttribute('type', 'text')
  inputAddress.setAttribute('placeholder', 'Адресс')
  const inputEmail = document.createElement('input');
  inputEmail.classList.add('input', 'input-details', 'input-details-email');
  inputEmail.setAttribute('type', 'email')
  inputEmail.setAttribute('placeholder', 'Email')
  inputEmail.setAttribute('name', "email")
  const modalDetailsCards = document.createElement('div');
  modalDetailsCards.classList.add('modal__details-cards');
  const detailsCardsText = document.createElement('div');
  detailsCardsText.classList.add('details-cards__text');
  const detailsCardsInfo = document.createElement('div');
  detailsCardsInfo.classList.add('details-cards__info');
  const infoCardNumber = document.createElement('div');
  infoCardNumber.classList.add('info__card-number');
  const infoCardNumberInput = document.createElement('div');
  infoCardNumberInput.classList.add('info__card-number-input');
  const cardNumberNumber = document.createElement('input');
  cardNumberNumber.classList.add('input', 'card-number__number');
  cardNumberNumber.setAttribute('type', 'text')
  const infoCvv = document.createElement('div');
  infoCvv.classList.add('info__cvv');
  const infoCvvValid = document.createElement('label');
  infoCvvValid.classList.add('info__cvv-valid');
  const cvvValidInput = document.createElement('input');
  cvvValidInput.classList.add('input', 'cvv-valid__input');
  cvvValidInput.setAttribute('type', 'text')
  const infoCvvCvv = document.createElement('label');
  infoCvvCvv.classList.add('info__cvv-cvv');
  infoCvvCvv.setAttribute('type', 'number')
  const cvvCvvInput = document.createElement('input');
  cvvCvvInput.classList.add('input', 'cvv-cvv__input');
  cvvCvvInput.setAttribute('type', 'number')
  const cvvValidSpan = document.createElement('span');
  cvvValidSpan.classList.add('cvv-valid__span');
  const cvvSvvSpan = document.createElement('span');
  cvvSvvSpan.classList.add('cvv-cvv__span');


  main?.append(wrapperModal)
  wrapperModal.append(wrapperModalForm)
  wrapperModalForm.append(formModal)

  formModal.append(modalDetails, modalDetailsName, modalDetailsPhone, modalDetailsAddress, modalDetailsEmail, modalDetailsCards, modalDetailsBtn)

  modalDetailsName.append(inputName, modalDetailsNameText)
  modalDetailsPhone.append(inputPhone, modalDetailsPhoneText)
  modalDetailsAddress.append(inputAddress, modalDetailsAddressText)
  modalDetailsEmail.append(inputEmail, modalDetailsEmailText)

  modalDetailsCards.append(detailsCardsText, detailsCardsInfo)
  detailsCardsInfo.append(infoCardNumber, infoCvv)

  infoCardNumber.append(infoCardNumberInput)
  infoCardNumberInput.append(cardNumberNumber)

  infoCvv.append(infoCvvValid, infoCvvCvv)
  infoCvvValid.append(cvvValidSpan, cvvValidInput)
  infoCvvCvv.append(cvvSvvSpan, cvvCvvInput)

  modalDetails.innerHTML = 'Персональные данные';
  modalDetailsNameText.innerHTML = 'Ваня Пупкин';
  modalDetailsPhoneText.innerHTML = '+375291234545';
  modalDetailsAddressText.innerHTML = 'Край Область Регион';
  modalDetailsEmailText.innerHTML = 'admin@mail.ru';
  detailsCardsText.innerHTML = 'Данные карты';
  cvvValidSpan.innerHTML = 'VALID:';
  cvvSvvSpan.innerHTML = 'CVV:';
  modalDetailsBtn.innerHTML = 'Подтвердить';
}

RenderModal()

const form = document.querySelector('.form-modal') as HTMLElement
const inputs = document.querySelectorAll('.input') 
const inputDetailsName = document.querySelector('.input-details-name') as HTMLInputElement
const inputDetailsPhone = document.querySelector('.input-details-phone') as HTMLInputElement
const inputDetailsAddress = document.querySelector('.input-details-address') as HTMLInputElement
const inputDetailsEmail = document.querySelector('.input-details-email') as HTMLInputElement
const cardNumberNumber = document.querySelector('.card-number__number') as HTMLInputElement
const cvvValidInput = document.querySelector('.cvv-valid__input') as HTMLInputElement
const cvvCvvInput = document.querySelector('.cvv-cvv__input') as HTMLInputElement
const modalDetailsBtn = document.querySelector('.modal__details-btn') as HTMLButtonElement


cardNumberNumber.addEventListener('keydown', function (e) {
  const value = this.value.replace(/\s+/g, '');
  const isBackspace = e.key === 'Backspace'; 

  if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key)) || (!isBackspace && value.length === 16)) {
      e.preventDefault();
      return false;
  }

  this.value = value.split('').reverse().join('').replace(/\B(?=(\d{4})+(?!\d))/g, " ").split('').reverse().join('').trim();
});


cvvValidInput.addEventListener('keydown', function (e) {
  const value = this.value.replace(/\s+/g, '');
  const isBackspace = e.key === 'Backspace'; 

  if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key)) || (!isBackspace && value.length === 4)) {
      e.preventDefault();
      return false;
  }
  
  this.value = value.split('').reverse().join('').replace(/\B(?=(\d{2})+(?!\d))/g, " ").split('').reverse().join('').trim();
});


cvvCvvInput.oninput = function () {
  cvvCvvInput.value = cvvCvvInput.value.substr(0,3)
}


const nameFullReg = /^(([a-zA-Z]|[а-я]){3,})*\s(([a-zA-Z]|[а-я]){3,})*$/;
const phoneReg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const addressReg = /^(([a-zA-Z]|[а-я]){5,})*\s(([a-zA-Z]|[а-я]){5,})*\s(([a-zA-Z]|[а-я]){5,})*$/;
const emailReg = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
const cardNumberReg = /(?:\d[ -]?){12,18}\d/;
const cvvValidReg = /^(?!0.*$)([1-2]{1})+(?!0.*$)([0-9]{1})*\s(?!0.*$)([0-2]{1})+(?!0.*$)([0-9]{1})$/;
const cvvReg = /^[0-9]{3}$/;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  checkInput();
})

function checkInput() {
  const inputName = inputDetailsName.value.trim();
  const inputPhone = inputDetailsPhone.value.trim();
  const inputEmail = inputDetailsEmail.value.trim();
  const inputAddress = inputDetailsAddress.value.trim();
  const cardNumber = cardNumberNumber.value.trim();
  const cvvInputData = cvvValidInput.value.trim();
  const cvvInput = cvvCvvInput.value.trim();

  inputs.forEach(item => {
    if ((item as HTMLInputElement).value === '') {
      (item as HTMLInputElement).classList.add('invalid')
    }
  })

  if (!nameFullReg.test(inputName)) {
    inputDetailsName.classList.add('invalid')
    inputDetailsName.classList.remove('valid')
  }else {
    inputDetailsName.classList.remove('invalid')
    inputDetailsName.classList.add('valid')
  }

  if (!phoneReg.test(inputPhone) || !inputPhone.startsWith('+')) {
    inputDetailsPhone.classList.add('invalid')
    inputDetailsPhone.classList.remove('valid')
  }else {
    inputDetailsPhone.classList.remove('invalid')
    inputDetailsPhone.classList.add('valid')
  }

  if (!addressReg.test(inputAddress)) {
    inputDetailsAddress.classList.add('invalid')
    inputDetailsAddress.classList.remove('valid')
  }else {
    inputDetailsAddress.classList.remove('invalid')
    inputDetailsAddress.classList.add('valid')
  }

  if (!emailReg.test(inputEmail)) {
    inputDetailsEmail.classList.add('invalid')
    inputDetailsEmail.classList.remove('valid')
  }else {
    inputDetailsEmail.classList.remove('invalid')
    inputDetailsEmail.classList.add('valid')
  }

  if (!cardNumberReg.test(cardNumber)) {
    cardNumberNumber.classList.add('invalid')
    cardNumberNumber.classList.remove('valid')
  }else {
    cardNumberNumber.classList.remove('invalid')
    cardNumberNumber.classList.add('valid')
  }


  const start = +(cvvValidInput.value.slice(0, 2))
  const end = +(cvvValidInput.value.slice(3))
  // console.log(start)
  if (!cvvValidReg.test(cvvInputData)){
    cvvValidInput.classList.add('invalid')
    cvvValidInput.classList.remove('valid')
  }else if (start <= end) {
    cvvValidInput.classList.remove('invalid')
    cvvValidInput.classList.add('valid')
  }

  if (!cvvReg.test(cvvInput)) {
    cvvCvvInput.classList.add('invalid')
    cvvCvvInput.classList.remove('valid')
  }else {
    cvvCvvInput.classList.remove('invalid')
    cvvCvvInput.classList.add('valid')
  }

  let validModal = 0
  inputs.forEach(item => {
    if (item.classList.contains('valid')) {
      validModal++;
    }
  })

  if (validModal === 7) {
    console.log('hi')
    validModal = 0
  }

  console.log(validModal)
}


