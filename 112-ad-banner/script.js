function startCountdown(durationInSecs) {
  let timeLeft  = durationInSecs;  

  function updateCountdown(){
    let days = Math.floor(timeLeft / (60*60*24));
    let hours = Math.floor(timeLeft/(60*60));
    let mins = Math.floor((timeLeft % 3600) / 60);    
    let secs = Math.floor(timeLeft % 60);

    document.querySelector('.countdown-days').innerHTML = days;
    document.querySelector('.countdown-hours').innerHTML = hours;
    document.querySelector('.countdown-mins').innerHTML = mins;
    document.querySelector('.countdown-secs').innerHTML = secs;

    if(timeLeft > 0){
      timeLeft--;
      setTimeout(updateCountdown,1000);
    }    
  }

  updateCountdown();
}

startCountdown(25 * 3600);

document.querySelector('.btn-close').addEventListener('click',()=> {
  document.querySelector('.promo-banner').style.display = "none";
});