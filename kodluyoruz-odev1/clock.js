const WEEK_DAYS = {
  0:"Pazartesi",
  1:"Salı",
  2:"Çarşamba",
  3:"Perşembe",
  4:"Cuma",
  5:"Cumartesi",
  6:"Pazar"
}


const askName = () => {
  const name = window.prompt("Lütfen isminizi giriniz");
  return name || "İnsan"
}

const displayName = (name) => {
  document.getElementById('myName').innerHTML = name
}

const showClock = () => {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " "
  document.getElementById("myClock").innerText = time;

  setTimeout(showClock, 1000);
}

const  showWeekDay = () => {
  const weekDay = WEEK_DAYS[new Date().getDay()];
  document.getElementById("myWeekDay").innerText = weekDay;
}


const app = () => {
  const name = askName()
  displayName(name)
  showWeekDay()
  showClock()
}

app()