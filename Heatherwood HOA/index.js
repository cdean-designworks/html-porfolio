let date = new Date();   // start with today

function renderCalendar() {
  const year  = date.getFullYear();
  const month = date.getMonth();
  
  // Update header
  document.getElementById('month-year').textContent = 
    date.toLocaleString('default', { month: 'long' }) + ' ' + year;

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth     = new Date(year, month + 1, 0).getDate();
  const today           = new Date();

  const datesDiv = document.getElementById('dates');
  datesDiv.innerHTML = '';   // clear previous days

  // Fill empty slots before 1st
  for (let i = 0; i < firstDayOfMonth; i++) {
    const empty = document.createElement('div');
    empty.className = 'day empty';
    datesDiv.appendChild(empty);
  }

  // Fill actual days
  for (let day = 1; day <= daysInMonth; day++) {
    const dayEl = document.createElement('div');
    dayEl.className = 'day';
    dayEl.textContent = day;

    // Highlight today
    if (day === today.getDate() && 
        month === today.getMonth() && 
        year === today.getFullYear()) {
      dayEl.classList.add('today');
    }

    datesDiv.appendChild(dayEl);
  }
}

function prevMonth() {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}

// Initial render (shows current month)
renderCalendar();
