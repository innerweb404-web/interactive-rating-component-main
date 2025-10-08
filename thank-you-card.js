
const selectedRateEl = document.getElementById('selectedRate');

const rate = localStorage.getItem('rate');

if (rate) {
  selectedRateEl.textContent = rate;
} else {
  selectedRateEl.textContent = 'No rating selected';
}
