
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
  const text = document.getElementById('text');
  
    text.removeAttribute('disabled')
 
 
  
    // const booking = document.getElementById('booked');
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

function setBooking(seat, personalty, price) {
  const booking = document.getElementById('booked');

  // Create a new flex container (div) for each booking item
  const bookingItemContainer = document.createElement('div');
  bookingItemContainer.classList.add('flex', 'justify-between', 'p-2');
  bookingItemContainer.style.listStyle = 'none';
  // Create the list items
  const seatLi = document.createElement('li');
  seatLi.innerText = seat;

  const personaltyLi = document.createElement('li');
  personaltyLi.innerText = personalty;

  const priceLi = document.createElement('li');
  priceLi.innerText = price;

  // Append the list items to the new flex container
  bookingItemContainer.appendChild(seatLi);
  bookingItemContainer.appendChild(personaltyLi);
  bookingItemContainer.appendChild(priceLi);

  // Append the new flex container to the 'booked' element
  booking.appendChild(bookingItemContainer);
}

function hideElement(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden')
}
document.getElementById('apply').addEventListener('click',function(){
 hideElement('hide');
});

document.getElementById('inputHide').addEventListener('keyup',function(){
  const apply = document.getElementById('apply');
  const new1  = document.getElementById('new');
    
  const couple = document.getElementById('couple');
  
  if(new1.innerText === 'NEW 15'|| couple.innerText === 'Couple 20'){
    new1.style.fontFamily = 'inter';
    couple.style.fontFamily = 'inter';
     apply.removeAttribute('disabled')
  } else{
    new1.style.fontFamily = ''; 
    couple.style.fontFamily = '';
    apply.setAttribute('disabled',true)
  }
})
