
  const secondHand = document.querySelector('.second-hand');
  const minHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');


  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    const mins = now.getMinutes();
    const minDegree = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    const hours = now.getHours();
    const hourDegree = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
  }

  setInterval(setDate, 1000);
