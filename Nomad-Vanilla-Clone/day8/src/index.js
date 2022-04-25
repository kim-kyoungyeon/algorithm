const clockTitle = document.querySelector(".js-clock");
// const dday = clockTitle.querySelector("h3");

function countDay() {
  //eve.getDate() - today.getDate();
  const today = new Date();
  //console.log(today);

  const eve = new Date("2022-12-24T00:00:00"); //Sat Dec 24 2022 00:00:00 GMT+0900 (Korean Standard Time)

  const cal = eve - today;
  /**
 * 1000 밀리초 = 1초
1일은 1000 * 60 * 60 * 24 = 86,400,000 밀리초
1시간은 1000 * 60 * 60 = 3,600,000 밀리초
1분은 1000 * 60 = 60000밀리초
1초는 1000 밀리초
이다.
 */
  const day = String(Math.floor(cal / 1000 / 60 / 60 / 24)).padStart(3, "0");
  const hours = String(Math.floor(cal / 1000 / 60 / 60) % 24).padStart(2, "0");
  const minute = String(Math.floor(cal / 1000 / 60) % 60).padStart(2, "0");
  const seconds = String(Math.floor(cal / 1000) % 60).padStart(2, "0");
  clockTitle.innerText = `${day}d ${hours}h ${minute}m ${seconds}s`;
}
countDay();
setInterval(countDay, 1000);
