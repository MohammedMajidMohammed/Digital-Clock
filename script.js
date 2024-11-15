function updateClock() {
    const timeElement = document.getElementById('time');
    const ampmElement = document.getElementById('ampm');
  
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12 || 12;  
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = timeString;
    ampmElement.textContent = ampm;
  }
  
  setInterval(updateClock, 1000);
  updateClock();  
  