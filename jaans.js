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
function setInnerValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}


document.addEventListener('DOMContentLoaded', function () {
  let selectedButtons = [];
  let bookingItems = [];

  function selection(event) {
    const index = selectedButtons.indexOf(event);

    if (index === -1 && selectedButtons.length < 4) {
      // Add the button to the selected list if not already selected and less than 4 selected
      selectedButtons.push(event);
      event.classList.add('selected');
      createBookingItem(event);
    } else {
      // Remove the button from the selected list and unselect it
      selectedButtons.splice(index, 1);
      event.classList.remove('selected');
      removeBookingItem(event);
    }

    // Enable the 'apply' button if 4 buttons are selected
    const applyButton = document.getElementById('apply');
    applyButton.disabled = selectedButtons.length !== 4;

    // Update the count of selected seats
    setInnerValue('seat-count', selectedButtons.length);
  }

  function createBookingItem(button) {
    const seat = button.innerText;
    const clas = 'Economy';
    const price = 550;

    const bookingItemContainer = document.createElement('div');
    bookingItemContainer.classList.add('flex', 'justify-between', 'p-2');
    bookingItemContainer.style.listStyle = 'none';

    const seatLi = document.createElement('li');
    seatLi.innerText = seat;

    const personaltyLi = document.createElement('li');
    personaltyLi.innerText = clas;

    const priceLi = document.createElement('li');
    priceLi.innerText = price;

    bookingItemContainer.appendChild(seatLi);
    bookingItemContainer.appendChild(personaltyLi);
    bookingItemContainer.appendChild(priceLi);

    bookingItems.push({ button, element: bookingItemContainer });
    document.getElementById('booked').appendChild(bookingItemContainer);
  }

  function removeBookingItem(button) {
    const index = bookingItems.findIndex(item => item.button === button);

    if (index !== -1) {
      const bookingItem = bookingItems[index].element;
      bookingItem.parentNode.removeChild(bookingItem);
      bookingItems.splice(index, 1);
    }
  }

  const buttons = document.querySelectorAll('.btn-all');
  buttons.forEach(function (event) {
    event.addEventListener('click', function () {
      selection(event);
    });
  });

  const applyButton = document.getElementById('apply');
  applyButton.addEventListener('click', function () {
    // Your existing apply button logic here
  });
});
