const template = document.querySelector(".template");
const graph = document.querySelector(".graph");
fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      const value = template.content.cloneNode(true).children[0];
      console.log(value);
      const day = value.querySelector(".day");
      const chart = value.querySelector(".chart");
      const mark = value.querySelector(".mark");
      day.textContent = element.day;
      mark.textContent = element.amount;
      chart.style.height = 1.5 * element.amount + "px";
      graph.append(value);

      chart.addEventListener("click", (eachChart) => {
        if (eachChart.target.classList.contains("chart-active")) {
          eachChart.target.classList.remove("chart-active");
          mark.classList.add("hide");
        } else {
          eachChart.target.classList.add("chart-active");
          mark.classList.remove("hide");
        }
      });
    });
  });
