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
  inputPhone.setAttribute('type', 'number')
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
  cardNumberNumber.setAttribute('type', 'number')
  const infoCvv = document.createElement('div');
  infoCvv.classList.add('info__cvv');
  const infoCvvValid = document.createElement('label');
  infoCvvValid.classList.add('info__cvv-valid');
  const cvvValidInput = document.createElement('input');
  cvvValidInput.classList.add('input', 'cvv-valid__input');
  cvvValidInput.setAttribute('type', 'number')
  const infoCvvCvv = document.createElement('label');
  infoCvvCvv.classList.add('info__cvv-cvv');
  cvvValidInput.setAttribute('type', 'number')
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



const nameFullReg = /^([a-z]{3,})*\s([a-z]{3,})*$/;
const phoneReg = /^(\+375)(\(\(\d{3}\)|\d{3})\d{6}$/;
const addressReg = /^([a-z]{5,})*\s([a-z]{5,})*\s([a-z]{5,})*$/;
const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const cvvReg = /[0-9]|\./;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  checkInput();
  console.log('hi')
})


function checkInput() {
  const inputName = inputDetailsName.value.trim();
  const inputPhone = inputDetailsPhone.value.trim();
  const inputEmail = inputDetailsEmail.value.trim();
  const inputAddress = inputDetailsAddress.value.trim()
  const cvvInput = cvvCvvInput.value.trim()


  // if (inputName === ''){
  //   inputDetailsName.classList.add('invalid')
  // } else {
  //   inputDetailsName.classList.remove('invalid')
  //   inputDetailsName.classList.add('valid')
  // }

  inputs.forEach(item => {
    if ((item as HTMLInputElement).value === '') {
      (item as HTMLInputElement).classList.add('invalid')
      } else {
        (item as HTMLInputElement).classList.add('valid')
      }
  })

  if (!nameFullReg.test(inputName)) {
    inputDetailsName.classList.add('invalid')
  }else {
    inputDetailsName.classList.remove('invalid')
    inputDetailsName.classList.add('valid')
  }

  if (!phoneReg.test(inputPhone)) {
    inputDetailsPhone.classList.add('invalid')
  }else {
    inputDetailsPhone.classList.remove('invalid')
    inputDetailsPhone.classList.add('valid')
  }

  if (!addressReg.test(inputAddress)) {
    inputDetailsAddress.classList.add('invalid')
  }else {
    inputDetailsAddress.classList.remove('invalid')
    inputDetailsAddress.classList.add('valid')
  }

  if (!emailReg.test(inputEmail)) {
    inputDetailsEmail.classList.add('invalid')
  }else {
    inputDetailsEmail.classList.remove('invalid')
    inputDetailsEmail.classList.add('valid')
  }

  if (!cvvReg.test(cvvInput)) {
    inputDetailsEmail.classList.add('invalid')
  }else {
    inputDetailsEmail.classList.remove('invalid')
    inputDetailsEmail.classList.add('valid')
  }

}






// form?.addEventListener('input', inputClick);

// function inputClick(e: Event) {
//   const a = (e.target as HTMLInputElement).value
//   const value = e.target as HTMLInputElement
//   const att = value.getAttribute('name')
//   console.log(att)

//   if(!regex.test(a)){
//     console.log('Не соответствует');
//     value.classList.add('invalid')
//     value.classList.remove('valid')
//     }else{
//     console.log('Соответствует');
//     value.classList.add('valid')
//     value.classList.remove('invalid')
//   }

//   if(!email.test(a)){
//     console.log('Не соответствует');
//     value.classList.add('invalid')
//     value.classList.remove('valid')
//     }else{
//     console.log('Соответствует');
//     value.classList.add('valid')
//     value.classList.remove('invalid')
//   }

//   if(!textTwo.test(a)){
//     console.log('Не соответствует');
//     value.classList.add('invalid')
//     value.classList.remove('valid')
//     }else{
//     console.log('Соответствует');
//     value.classList.add('valid')
//     value.classList.remove('invalid')
//   }

//   if(!textThree.test(a)){
//     console.log('Не соответствует');
//     value.classList.add('invalid')
//     value.classList.remove('valid')
//     }else{
//     console.log('Соответствует');
//     value.classList.add('valid')
//     value.classList.remove('invalid')
//   }
// }


// function validEmail(email: string) {
//   const regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
//   return regex.test(String(email).toLocaleLowerCase())
// }

// function validPhone(phone: string) {
//   const regex = /^(\+375)(\(\(\d{3}\)|\d{3})\d{6}$/;
//   return regex.test(String(phone).toLocaleLowerCase())
// }

// form.onsubmit = function () {
//   const emailVal = inputDetailsEmail.value
//   const phoneVal = inputDetailsPhone.value
//   const emptyInput = Array.from(inputs).filter(input => (input as HTMLInputElement).value === '')

//   inputs.forEach(item => {
//     if ((item as HTMLInputElement).value === '') {
//       item.classList.add('invalid')
//     } else {
//       item.classList.add('valid')
//     }

//     if (!validEmail(emailVal)) {
//       item.classList.add('valid')
//       return false
//     } else{
//       item.classList.add('valid')
//     }

//     if (!validPhone(phoneVal)) {
//       item.classList.add('invalid')
//       return false
//     } else{
//       item.classList.remove('invalid')
//     }

//     if (emptyInput.length !== 0) {
//       console.log('not');
//       return false
//     }

//   })
// }
