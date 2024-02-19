
  function buyTikets(elementId) {
  const seat = document.getElementById(elementId);
  seat.scrollIntoView({ behavior: "smooth" });
}
const allBtn = document.getElementsByClassName('btn-all');
let count = 0;
let count2 = 40;
for (const btn of allBtn) {
  btn.addEventListener('click', function (e) {  
    count += 1;
    count2 -= 1;
    setInnerValue('seat-count', count);
    setInnerValue('seats-left', count2);
    e.target.style.backgroundColor = '#1DD100';
    e.target.style.color = '#FFF';   
    const seat = e.target.innerText;
    const clas = 'Economy';
    const price = 550;
    setBooking(seat, clas, price);
    let Total = parseInt(document.getElementById('total').innerText);
    Total += price;
    document.getElementById('total').innerText = Total;
    let grandTotal = parseInt(document.getElementById('grand').innerText);
    grandTotal += price;
    document.getElementById('grand').innerText = grandTotal;
  });
}
// -======================================================
// This is not working I copy it form chat-gpt 
// =======================================================
// document.addEventListener('DOMContentLoaded', function () {
//   let selectedButtons = [];

//   function selection(event) {
//       event.classList.toggle('selected');
//       let index = selectedButtons.indexOf(event);
//       if (index === -1) {
//           selectedButtons.push(event);
//       } else {
//           selectedButtons.splice(index, 1);
//       }
//       if (selectedButtons.length > 4) {
//           const nonSelectButtons = selectedButtons.shift();
//           nonSelectButtons.classList.remove('selected');
//       }
//   }

//   const buttons = document.querySelectorAll('.btn-all');
//   buttons.forEach(function (event) {
//       event.addEventListener('click', function () {
//           selection(event);
//       });
//   });
// });
// =======================================

function setInnerValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function setBooking(seat, personalty, price) {
  const booking = document.getElementById('booked');
  const bookingItemContainer = document.createElement('div');
  bookingItemContainer.classList.add('flex', 'justify-between', 'p-2');
  bookingItemContainer.style.listStyle = 'none';
  const seatLi = document.createElement('li');
  seatLi.innerText = seat;
  const personaltyLi = document.createElement('li');
  personaltyLi.innerText = personalty;
  const priceLi = document.createElement('li');
  priceLi.innerText = price;
  bookingItemContainer.appendChild(seatLi);
  bookingItemContainer.appendChild(personaltyLi);
  bookingItemContainer.appendChild(priceLi);
  booking.appendChild(bookingItemContainer);
}

function hideElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.add('hidden');
  }
}
function showElement(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden')
}
document.addEventListener('DOMContentLoaded', function () {
  const inputHide = document.getElementById('inputHide');
  const apply= document.getElementById('apply');
  const hide = document.getElementById('hide')
  apply.disabled = true;
  inputHide.addEventListener('input', function () {     
      const secretValue = inputHide.value.trim();
      apply.disabled = !(secretValue === 'NEW15' || secretValue === 'Couple20');
    });
    apply.addEventListener('click', function () {      
      const Total = parseFloat(document.getElementById('total').innerText);
      const secretValue = inputHide.value.trim();      
      let discountPercentage = 0;
      if (secretValue === 'NEW15') {
        discountPercentage = 15;
      } else if (secretValue === 'Couple20') {
        discountPercentage = 20;
      }     
      const discountedPrice =Total * (1 - discountPercentage / 100);
      document.getElementById('grand').innerText = discountedPrice.toFixed(2);
      hide.style.display = 'none';     
  });
});
let textClicked = false;
function enable() {
  textClicked = true;
  checkInput();
}
function checkInput() {
  const inputValue = document.getElementById('numberInput').value.trim();
  const textButton = document.getElementById('text');
  if (textClicked && inputValue !== "") { 
    textButton.removeAttribute('disabled');
  } else {
        textButton.setAttribute('disabled', true);
  }
}



document.addEventListener('DOMContentLoaded', function () {
  let selectedButtons = [];

  function selection(event) {
      event.classList.toggle('selected');
      let index = selectedButtons.indexOf(event);
      if (index === -1) {
          selectedButtons.push(event);
      } else {
          selectedButtons.splice(index, 1);
      }
      if (selectedButtons.length > 4) {
          const nonSelectButtons = selectedButtons.shift();
          nonSelectButtons.classList.remove('selected');
      }
  }

  const buttons = document.querySelectorAll('.btn-all');
  buttons.forEach(function (event) {
      event.addEventListener('click', function () {
          selection(event);
      });
  });
});


