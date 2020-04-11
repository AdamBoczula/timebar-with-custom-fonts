const btn10s = document.getElementById("Btn10s");
const timebarfill = document.getElementsByClassName("TimebarFill")[0];
let intervalHandler;

btn10s.addEventListener("click", () => {
  if (intervalHandler) return;
  let heigthPercentage = 100;

  timebarfill.style.display = "block";
  intervalHandler = setInterval(() => {
    timebarfill.style.height = `${heigthPercentage}%`;
    console.log(`height = ${heigthPercentage}%`);
    heigthPercentage--;

    if (heigthPercentage < 0) {
      clearInterval(intervalHandler);
      intervalHandler = null;
    }
  }, 100);
});
