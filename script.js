const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupited)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const pricePerSeat = document.getElementById('priceperseat');

const fromSelect = document.getElementById('origin');
const destinationSelect = document.getElementById('destination');

let fromPrice = +fromSelect.value; // Initial value from "From" select
let destinationPrice = +destinationSelect.value; // Initial value from "Destination" select
let price = fromPrice + destinationPrice; // Total price for one seat

// Event Listener for "From" selection
fromSelect.addEventListener('change', (e) => {
    fromPrice = +e.target.value; // Update from price based on selection
    updatePrice();
});

// Event Listener for "Destination" selection
destinationSelect.addEventListener('change', (e) => {
    destinationPrice = +e.target.value; // Update destination price based on selection
    updatePrice();
});

// Event Listener for seat selection
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupited')) {
        e.target.classList.toggle('selected');
        updateSelectedSeats();
    }
});

// Update total price and seat count
function updateSelectedSeats() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatCount = selectedSeats.length;
    
    count.innerText = seatCount;
    total.innerText = seatCount * price;
}

// Update the price when "From" or "Destination" changes
function updatePrice() {
    price = fromPrice + destinationPrice; // Calculate the new total price per seat
    pricePerSeat.innerText = price;
    updateSelectedSeats(); // Recalculate the total price if seats are selected
}

// Initial setup
updatePrice();
