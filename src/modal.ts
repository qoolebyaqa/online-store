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
  const modalDetailsBtn = document.createElement('div');
  modalDetailsBtn.classList.add('modal__details-btn');

  const inputName = document.createElement('input');
  inputName.classList.add('input', 'input-details', 'input-details-name');
  inputName.setAttribute('type', 'text')
  inputName.setAttribute('placeholder', 'Имя и фамилия')
  const inputPhone = document.createElement('input');
  inputPhone.classList.add('input', 'input-details', 'input-details-phone');
  inputPhone.setAttribute('type', 'tel')
  inputPhone.setAttribute('placeholder', 'Телефон')
  inputPhone.setAttribute('data-reg', "(8 0(25|29|33|34) ([0-9]{3}( [0-9]{2}){2}))")
  const inputAddress = document.createElement('input');
  inputAddress.classList.add('input', 'input-details', 'input-details-address');
  inputAddress.setAttribute('type', 'text')
  inputAddress.setAttribute('placeholder', 'Адресс')
  const inputEmail = document.createElement('input');
  inputEmail.classList.add('input', 'input-details', 'input-details-email');
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
  modalDetailsPhoneText.innerHTML = '+375(29)123 45 45';
  modalDetailsAddressText.innerHTML = 'Край Область Регион';
  modalDetailsEmailText.innerHTML = 'admin@mail.ru';
  detailsCardsText.innerHTML = 'Данные карты';
  cvvValidSpan.innerHTML = 'VALID:';
  cvvSvvSpan.innerHTML = 'CVV:';
  modalDetailsBtn.innerHTML = 'Подтвердить';
}

RenderModal()

// const inputDetailsName = document.querySelector('.input-details-name')
// const inputDetailsPhone = document.querySelector('.input-details-phone')
// const inputDetailsAddress = document.querySelector('.input-details-address')
// const inputDetailsEmail = document.querySelector('.input-details-email')

// const cardNumberNumber = document.querySelector('.card-number__number')
// const cvvValidInput = document.querySelector('.cvv-valid__input')
// const cvvCvvInput = document.querySelector('.cvv-cvv__input')