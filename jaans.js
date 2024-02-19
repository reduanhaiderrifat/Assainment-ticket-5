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
  document.getElementById('apply').addEventListener('click',function(){
   hideElement('hide');
  });
  
  document.getElementById('inputHide').addEventListener('keyup',function(){
    const apply = document.getElementById('apply');
    const new1  = document.getElementById('new');
      
    const couple = document.getElementById('couple');
    
    if(new1.innerText !== 'NEW 15'|| couple.innerText !== 'Couple 20'){
      new1.style.fontFamily = 'inter';
      couple.style.fontFamily = 'inter';
       apply.setAttribute('disabled')
    } else{
      new1.style.fontFamily = 'inter'; 
      couple.style.fontFamily = 'inter';
      apply.removeAttribute('disabled',true)
    }
  })
  
  function inputNumber(){
    document.getElementById('text').style.display = 'block';
   
  }









//   document.addEventListener('DOMContentLoaded', function (){

//     const inputHide = document.getElementById('inputHide');
//     const apply = document.getElementById('apply');

//     // Disable button initially
//     apply.disabled = true;

//     inputHide.addEventListener('input', function () {
//         // Enable button when the secret is entered
//         apply.disabled = inputHide.value.trim() !== 'NEW15';
//     });
//         apply.addEventListener('click', function () {
//             // Apply a 20% discount and update the grand price
//              const discountPercentage = 15;
//              const discountPercentage2 = 20;
//             const Total = parseFloat(document.getElementById('total').innerText);
//             const discountedPrice = (Total * discountPercentage) / 100;
        
//             document.getElementById('grand').innerText = discountedPrice.toFixed(2)
//           });
      
//   })










document.addEventListener('DOMContentLoaded', function () {
    const inputHide = document.getElementById('inputHide');
    const apply= document.getElementById('apply');

    apply.disabled = true;

    inputHide.addEventListener('input', function () {
        // Enable button when a valid secret is entered
        const secretValue = inputHide.value.trim();
        applyDiscountButton.disabled = !(secretValue === 'NEW15' || secretValue === 'Couple20');
      });
      apply.addEventListener('click', function () {
        // Apply discount based on the entered secret
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
})
})

document.addEventListener('DOMContentLoaded', function () {
    const inputHide = document.getElementById('inputHide');
    const apply = document.getElementById('apply');

    apply.disabled = true;

    inputHide.addEventListener('input', function () {
        // Enable button when a valid secret is entered
        const secretValue = inputHide.value.trim();
        apply.disabled = !(secretValue === 'NEW15' || secretValue === 'Couple20');
    });

    apply.addEventListener('click', function () {
        // Apply discount based on the entered secret
        const Total = parseFloat(document.getElementById('total').innerText);
        const secretValue = inputHide.value.trim();

        let discountPercentage = 0;
        if (secretValue === 'NEW15') {
            discountPercentage = 15;
        } else if (secretValue === 'Couple20') {
            discountPercentage = 20;
        }

        const discountedPrice = Total * (1 - discountPercentage / 100);
        document.getElementById('grand').innerText = discountedPrice.toFixed(2);
    });
});


const textClicked = false;
function enable (){
  textClicked = true;
  checkInput();
}

function checkInput(){
  const inputValue = document.getElementById('numberInput').value;
  if(textClicked && inputValue !==""){
    document.getElementById('text').removeAttribute('disabled');

  } else{
    document.getElementById('text').setAttribute('disabled',true)
  }
}