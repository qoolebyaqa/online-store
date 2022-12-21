function RenderModal() {
  const main = document.querySelector('.main');

  const wrapperModal = document.createElement('section');
  wrapperModal.classList.add('wrapper-modal');
  const wrapperModalForm = document.createElement('div');
  wrapperModalForm.classList.add('wrapper-modal__form');
  const formModal = document.createElement('form');
  formModal.classList.add('form-modal');
  const modalDetails = document.createElement('div');
  modalDetails.classList.add('modal__details');
  const modalDetailsName = document.createElement('div');
  modalDetailsName.classList.add('modal__details-name');
  const modalDetailsPhone = document.createElement('div');
  modalDetailsPhone.classList.add('modal__details-phone');
  const modalDetailsAddress = document.createElement('div');
  modalDetailsAddress.classList.add('modal__details-address');
  const modalDetailsEmail = document.createElement('div');
  modalDetailsEmail.classList.add('modal__details-email');
  const modalDetailsBtn = document.createElement('div');
  modalDetailsBtn.classList.add('modal__details-btn');

  const inputName = document.createElement('input');
  inputName.classList.add('input', 'input-details');
  inputName.setAttribute('type', 'text')
  inputName.setAttribute('placeholder', 'Имя')
  const inputPhone = document.createElement('input');
  inputPhone.classList.add('input', 'input-details');
  inputPhone.setAttribute('type', 'tel')
  inputPhone.setAttribute('placeholder', 'Телефон')
  const inputAddress = document.createElement('input');
  inputAddress.classList.add('input', 'input-details');
  inputAddress.setAttribute('type', 'text')
  inputAddress.setAttribute('placeholder', 'Адресс')
  const inputEmail = document.createElement('input');
  inputEmail.classList.add('input', 'input-details');
  inputEmail.setAttribute('type', 'email')
  inputEmail.setAttribute('placeholder', 'Email')
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
  const infoCvv = document.createElement('div');
  infoCvv.classList.add('info__cvv');
  const infoCvvValid = document.createElement('label');
  infoCvvValid.classList.add('info__cvv-valid');
  const cvvValidInput = document.createElement('input');
  cvvValidInput.classList.add('input', 'cvv-valid__input');
  const infoCvvCvv = document.createElement('label');
  infoCvvCvv.classList.add('info__cvv-cvv');
  const cvvCvvInput = document.createElement('input');
  cvvCvvInput.classList.add('input', 'cvv-cvv__input');
  const cvvValidSpan = document.createElement('span');
  cvvValidSpan.classList.add('cvv-valid__span');
  const cvvSvvSpan = document.createElement('span');
  cvvSvvSpan.classList.add('cvv-cvv__span');


  main?.append(wrapperModal)
  wrapperModal.append(wrapperModalForm)
  wrapperModalForm.append(formModal)

  formModal.append(modalDetails, modalDetailsName, modalDetailsPhone, modalDetailsAddress, modalDetailsEmail, modalDetailsCards, modalDetailsBtn)

  modalDetailsName.append(inputName)
  modalDetailsPhone.append(inputPhone)
  modalDetailsAddress.append(inputAddress)
  modalDetailsEmail.append(inputEmail)

  modalDetailsCards.append(detailsCardsText, detailsCardsInfo)
  detailsCardsInfo.append(infoCardNumber, infoCvv)

  infoCardNumber.append(infoCardNumberInput)
  infoCardNumberInput.append(cardNumberNumber)

  infoCvv.append(infoCvvValid, infoCvvCvv)
  infoCvvValid.append(cvvValidSpan, cvvValidInput)
  infoCvvCvv.append(cvvSvvSpan, cvvCvvInput)

  modalDetails.innerHTML = 'Персональные данные';
  detailsCardsText.innerHTML = 'Данные карты';
  cvvValidSpan.innerHTML = 'VALID:';
  cvvSvvSpan.innerHTML = 'CVV:';
  modalDetailsBtn.innerHTML = 'Подтвердить';
}

RenderModal()