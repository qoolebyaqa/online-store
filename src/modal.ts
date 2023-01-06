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
  const modalDetailsNameTextError = document.createElement('div');
  modalDetailsNameTextError.classList.add('modal__details-name-text-error');
  const modalDetailsPhoneTextError = document.createElement('div');
  modalDetailsPhoneTextError.classList.add('modal__details-name-phone-error');
  const modalDetailsAddressTextError = document.createElement('div');
  modalDetailsAddressTextError.classList.add('modal__details-name-address-error');
  const modalDetailsEmailTextError = document.createElement('div');
  modalDetailsEmailTextError.classList.add('modal__details-name-email-error');
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
  inputName.setAttribute('title', 'Введите не менее двух слов, длина каждого не менее 3 символов')
  const inputPhone = document.createElement('input');
  inputPhone.classList.add('input', 'input-details', 'input-details-phone');
  inputPhone.setAttribute('type', 'text')
  inputPhone.setAttribute('placeholder', 'Телефон')
  inputPhone.setAttribute('name', "phone")
  inputPhone.setAttribute('title', "Введите начинаться с '+', содержать только цифры и быть не короче 9 цифр")
  const inputAddress = document.createElement('input');
  inputAddress.classList.add('input', 'input-details', 'input-details-address');
  inputAddress.setAttribute('type', 'text')
  inputAddress.setAttribute('placeholder', 'Адресс')
  inputAddress.setAttribute('title', 'Введите не менее трех слов, длина каждого не менее 5 символов')
  const inputEmail = document.createElement('input');
  inputEmail.classList.add('input', 'input-details', 'input-details-email');
  inputEmail.setAttribute('type', 'email')
  inputEmail.setAttribute('placeholder', 'Email')
  inputEmail.setAttribute('name', "email")
  inputEmail.setAttribute('title', "Введите email stepa@mail.ru")
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
  const cardNumberCardName = document.createElement('div');
  cardNumberCardName.classList.add('card-number__card-name');
  const cardNumberNumber = document.createElement('input');
  cardNumberNumber.classList.add('input', 'card-number__number');
  cardNumberNumber.setAttribute('type', 'text')
  cardNumberNumber.setAttribute('title', 'Введите код из 12 цифр')
  const infoCvv = document.createElement('div');
  infoCvv.classList.add('info__cvv');
  const infoCvvValid = document.createElement('label');
  infoCvvValid.classList.add('info__cvv-valid');
  const cvvValidInput = document.createElement('input');
  cvvValidInput.classList.add('input', 'cvv-valid__input');
  cvvValidInput.setAttribute('type', 'text')
  cvvValidInput.setAttribute('title', 'Введите месяц год (01/12 23/29)')
  const infoCvvCvv = document.createElement('label');
  infoCvvCvv.classList.add('info__cvv-cvv');
  infoCvvCvv.setAttribute('type', 'number')
  const cvvCvvInput = document.createElement('input');
  cvvCvvInput.classList.add('input', 'cvv-cvv__input');
  cvvCvvInput.setAttribute('type', 'number')
  cvvCvvInput.setAttribute('title', 'Введите 3-и цифры')
  const cvvValidSpan = document.createElement('span');
  cvvValidSpan.classList.add('cvv-valid__span');
  const cvvSvvSpan = document.createElement('span');
  cvvSvvSpan.classList.add('cvv-cvv__span');
  const cardNumberError = document.createElement('div');
  cardNumberError.classList.add('card-number__error');
  const cvvValidError = document.createElement('div');
  cvvValidError.classList.add('cvv-valid__error');
  const cvvCvvError = document.createElement('div');
  cvvCvvError.classList.add('cvv-cvv__error');



  main?.append(wrapperModal)
  wrapperModal.append(wrapperModalForm)
  wrapperModalForm.append(formModal)

  formModal.append(modalDetails, modalDetailsName, modalDetailsPhone, modalDetailsAddress, modalDetailsEmail, modalDetailsCards, modalDetailsBtn)

  modalDetailsName.append(inputName, modalDetailsNameTextError, modalDetailsNameText)
  modalDetailsPhone.append(inputPhone,modalDetailsPhoneTextError, modalDetailsPhoneText)
  modalDetailsAddress.append(inputAddress,modalDetailsAddressTextError, modalDetailsAddressText)
  modalDetailsEmail.append(inputEmail,modalDetailsEmailTextError, modalDetailsEmailText)

  modalDetailsCards.append(detailsCardsText, detailsCardsInfo, cardNumberError, cvvValidError, cvvCvvError)
  detailsCardsInfo.append(infoCardNumber, infoCvv)

  infoCardNumber.append(infoCardNumberInput)
  infoCardNumberInput.append(cardNumberCardName, cardNumberNumber)

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
  validation();

wrapperModal.addEventListener('click', (event) => {
  if ((<HTMLElement>event.target).classList.contains('wrapper-modal')) {
    wrapperModal.outerHTML = '';
  }
})
}


function validation() {
  const form = document.querySelector('.form-modal') as HTMLElement
  const inputs = document.querySelectorAll('.input') 
  const inputDetailsName = document.querySelector('.input-details-name') as HTMLInputElement
  const inputDetailsPhone = document.querySelector('.input-details-phone') as HTMLInputElement
  const inputDetailsAddress = document.querySelector('.input-details-address') as HTMLInputElement
  const inputDetailsEmail = document.querySelector('.input-details-email') as HTMLInputElement
  const cardNumberNumber = document.querySelector('.card-number__number') as HTMLInputElement
  const cvvValidInput = document.querySelector('.cvv-valid__input') as HTMLInputElement
  const cvvCvvInput = document.querySelector('.cvv-cvv__input') as HTMLInputElement
  const modalDetailsNameTextError = document.querySelector('.modal__details-name-text-error') as HTMLElement
  const modalDetailsPhoneTextError = document.querySelector('.modal__details-name-phone-error') as HTMLElement
  const modalDetailsAddressTextError = document.querySelector('.modal__details-name-address-error') as HTMLElement
  const modalDetailsEmailTextError = document.querySelector('.modal__details-name-email-error') as HTMLElement
  const cardNumberError = document.querySelector('.card-number__error') as HTMLElement
  const cvvValidError = document.querySelector('.cvv-valid__error') as HTMLElement
  const cvvCvvError = document.querySelector('.cvv-cvv__error') as HTMLElement


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


const nameFullReg = /^(([a-zA-Z]|[а-яА-Я]){3,})*\s(([a-zA-Z]|[а-яА-Я]){3,})*$/;
const phoneReg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3,})/;
const addressReg = /^(([a-zA-Z]|[а-яА-Я]){5,})*\s(([a-zA-Z]|[а-яА-Я]){5,})*\s(([a-zA-Z]|[а-яА-Я]){5,})*$/;
const emailReg = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
const cardNumberReg = /(?:\d[ -]?){15,20}\d/;
// const cvvValidReg = /^(?!0.*$)([0-1]{1})+(?!0.*$)([0-2]{1})*\s(?!0.*$)([0-2]{1})+(?!0.*$)([0-9]{1})$/;
const cvvValidReg = /^(0[1-9]|1[0-2])\s(2[3-9])$/;
const cvvReg = /^[0-9]{3}$/;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  checkInput();
})


function nameCard() {
  cardNumberNumber.addEventListener('input', () => {
    const cardNumberCardName = document.querySelector('.card-number__card-name') as HTMLInputElement
    if (+(cardNumberNumber.value[0]) === 4) {
      cardNumberCardName.innerHTML = 'Visa'
    } else if (+(cardNumberNumber.value[0]) === 5) {
      cardNumberCardName.innerHTML = 'MasterCard'
    } else if (+(cardNumberNumber.value[0]) === 2) {
      cardNumberCardName.innerHTML = 'Master'
    }else if (+(cardNumberNumber.value[0]) === 1) {
      cardNumberCardName.innerHTML = 'Credit'
    }
    else if (+(cardNumberNumber.value[0]) === 3) {
      cardNumberCardName.innerHTML = 'Electron'
    }
  })
}
nameCard()

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
    modalDetailsNameTextError.innerHTML = 'error'
  }else {
    inputDetailsName.classList.remove('invalid')
    inputDetailsName.classList.add('valid')
    modalDetailsNameTextError.innerHTML = ''
  }

  if (!phoneReg.test(inputPhone) || !inputPhone.startsWith('+')) {
    inputDetailsPhone.classList.add('invalid')
    inputDetailsPhone.classList.remove('valid')
    modalDetailsPhoneTextError.innerHTML = 'error'
  }else {
    inputDetailsPhone.classList.remove('invalid')
    inputDetailsPhone.classList.add('valid')
    modalDetailsPhoneTextError.innerHTML = ''
  }

  if (!addressReg.test(inputAddress)) {
    inputDetailsAddress.classList.add('invalid')
    inputDetailsAddress.classList.remove('valid')
    modalDetailsAddressTextError.innerHTML = 'error'
  }else {
    inputDetailsAddress.classList.remove('invalid')
    inputDetailsAddress.classList.add('valid')
    modalDetailsAddressTextError.innerHTML = ''
  }

  if (!emailReg.test(inputEmail)) {
    inputDetailsEmail.classList.add('invalid')
    inputDetailsEmail.classList.remove('valid')
    modalDetailsEmailTextError.innerHTML = 'error'
  }else {
    inputDetailsEmail.classList.remove('invalid')
    inputDetailsEmail.classList.add('valid')
    modalDetailsEmailTextError.innerHTML = ''
  }
  

  if (!cardNumberReg.test(cardNumber)) {
    cardNumberNumber.classList.add('invalid')
    cardNumberNumber.classList.remove('valid')
    cardNumberError.innerHTML = 'error number card'
  }else {
    cardNumberNumber.classList.remove('invalid')
    cardNumberNumber.classList.add('valid')
    cardNumberError.innerHTML = ''
  }


  // const start = +(cvvValidInput.value.slice(0, 2))
  // const end = +(cvvValidInput.value.slice(3))
  // console.log(start)
  if (!cvvValidReg.test(cvvInputData)){
    cvvValidInput.classList.add('invalid')
    cvvValidInput.classList.remove('valid')
    cvvValidError.innerHTML = 'error data'
  }else {
    cvvValidInput.classList.remove('invalid')
    cvvValidInput.classList.add('valid')
    cvvValidError.innerHTML = ''
  }

  if (!cvvReg.test(cvvInput)) {
    cvvCvvInput.classList.add('invalid')
    cvvCvvInput.classList.remove('valid')
    cvvCvvError.innerHTML = 'error cvv'
  }else {
    cvvCvvInput.classList.remove('invalid')
    cvvCvvInput.classList.add('valid')
    cvvCvvError.innerHTML = ''
  }

  let validModal = 0
  inputs.forEach(item => {
    if (item.classList.contains('valid')) {
      validModal++;
    }
  })

  if (validModal === 7) {
    finishOrder();
    validModal = 0
  }
}


function finishOrder() {
  const wrapperModal = document.querySelector('.wrapper-modal') as HTMLElement
  wrapperModal.innerHTML = '';

  const wrapperFinish = document.createElement('div');
  wrapperFinish.classList.add('wrapper-finish');
  const wrapperModalFinish = document.createElement('div');
  wrapperModalFinish.classList.add('wrapper-modal__finish');
  const wrapperModalFinishSpan = document.createElement('span');
  wrapperModalFinishSpan.classList.add('wrapper-modal__finish-span');

  wrapperFinish.append(wrapperModalFinish, wrapperModalFinishSpan)
  wrapperModal.append(wrapperFinish)

  wrapperModalFinish.innerHTML = 'Ваш заказ принят в обработку'
  wrapperModalFinishSpan.innerHTML = '5'

  let count = 5;
  const counter = setInterval(timer, 1000); 

  function timer(){
    count--;
    if (count <= 0){
      clearInterval(counter);
      const strUrl = (location.href.slice(0, location.href.lastIndexOf("/")))
      location.href = strUrl;
      localStorage.removeItem("cards");
    }
    wrapperModalFinishSpan.innerHTML = count.toString()
  }
}
}


export {RenderModal} 