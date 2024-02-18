document.addEventListener('DOMContentLoaded', function () {
    const allBtn = document.getElementsByClassName('btn-all');
    const textButton = document.getElementById('text');
    const numberInput = document.getElementById('numberInput');

    let selectedSeat = null;
    let count = 0;
    let count2 = 40;

    for (const btn of allBtn) {
        btn.addEventListener('click', function (e) {
            // Remove selected class from the previous button
            if (selectedSeat) {
                selectedSeat.classList.remove('selected');
            }

            // Add selected class to the current button
            selectedSeat = e.target;
            selectedSeat.classList.add('selected');

            count += 1;
            count2 -= 1;
            setInnerValue('seat-count', count);
            setInnerValue('seats-left', count2);

            const seat = selectedSeat.innerText;
            const clas = 'Economy';
            const price = 550;
            setBooking(seat, clas, price);

            let Total = parseInt(document.getElementById('total').innerText);
            Total += price;
            document.getElementById('total').innerText = Total;
            let grandTotal = parseInt(document.getElementById('grand').innerText);
            grandTotal += price;
            document.getElementById('grand').innerText = grandTotal;

            updateTextButtonState();
        });
    }

    numberInput.addEventListener('input', function () {
        updateTextButtonState();
    });

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
        element.classList.add('hidden');
    }

    function updateTextButtonState() {
        const phoneNumber = numberInput.value;

        if (isValidPhoneNumber(phoneNumber) && selectedSeat) {
            textButton.removeAttribute('disabled');
        } else {
            textButton.setAttribute('disabled', true);
        }
    }

    function isValidPhoneNumber(phoneNumber) {
        // Use your own validation logic here
        // For simplicity, let's check if the entered value is a number
        return !isNaN(phoneNumber);
    }

    document.getElementById('apply').addEventListener('click', function () {
        hideElement('hide');
    });
});
