function updateCountDown() {
  const today = new Date();
  const targetDate= new Date('2026-02-28');
  const timeDifference = targetDate.getTime() - today.getTime();
  const days = Math.floor(timeDifference/(1000*60*60*24));
  const hours = Math.floor((timeDifference % (1000 * 3600 * 24))/(1000*60*60));
  const mins = Math.floor((timeDifference%(1000*3600)/(1000*60)));
  const seconds = Math.floor((timeDifference%(1000*60) / (1000)));
  
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('mins').textContent = mins;
  document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountDown,2000);