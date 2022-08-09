const graph = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Daily Temp. Graph",
    },
    axisY: {
      title: "Temperature in °C ",
      suffix: "°C",
    },
    axisX: {
      title: "Days",
    },
    data: [
      {
        type: "column",
        yValueFormatString: '#,##0.0#"°C"',
        dataPoints: [
          { label: "Sunday", y: 0 },
          { label: "Monday", y: 0 },
          { label: "Tuesday", y: 0 },
          { label: "Wednesday", y: 0 },
          { label: "Thursday", y: 0 },
          { label: "Friday", y: 0 },
          { label: "Saturday", y: 0 },
        ],
      },
    ],
  });
  chart.render();
};
graph();

const calcAvg = function (arr) {
  let sum = 0;
  for (n of arr) {
    sum += n;
  }
  return (avg = sum / arr.length);
};

const btn = document
  .getElementById(`btn`)
  .addEventListener(`click`, function () {
    const sunday = Number(document.querySelector(`.sunday`).value);
    const monday = Number(document.querySelector(`.monday`).value);
    const tuesday = Number(document.querySelector(`.tuesday`).value);
    const wednesday = Number(document.querySelector(`.wednesday`).value);
    const thrusday = Number(document.querySelector(`.thrusday`).value);
    const friday = Number(document.querySelector(`.friday`).value);
    const saturday = Number(document.querySelector(`.saturday`).value);

    const data = [
      sunday,
      monday,
      tuesday,
      wednesday,
      thrusday,
      friday,
      saturday,
    ];

    if (
      !sunday ||
      !monday ||
      !tuesday ||
      !wednesday ||
      !thrusday ||
      !friday ||
      !saturday
    ) {
      graph();
      document.getElementById(`outputDiv`).textContent = `Fill All Day`;
    } else {
      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
          text: "Daily Temp. Graph",
        },
        axisY: {
          title: "Temperature in °C ",
          suffix: "°C",
        },
        axisX: {
          title: "Days",
        },
        data: [
          {
            type: "column",
            yValueFormatString: '#,##0.0#"°C"',
            dataPoints: [
              { label: "Sunday", y: sunday },
              { label: "Monday", y: monday },
              { label: "Tuesday", y: tuesday },
              { label: "Wednesday", y: wednesday },
              { label: "Thursday", y: thrusday },
              { label: "Friday", y: friday },
              { label: "Saturday", y: saturday },
            ],
          },
        ],
      });
      chart.render();
      const avg = calcAvg(data);
      const output = avg.toFixed(1);
      if (output <= 16) {
        document.getElementById(`outputDiv`).textContent = `${output} °C Cold`;
      } else if (output >= 16 && output <= 30) {
        document.getElementById(`outputDiv`).textContent = `${output} °C Good`;
      } else {
        document.getElementById(`outputDiv`).textContent = `${output} °C Hot `;
      }
    }
  });

const reset = document
  .getElementById(`reset`)
  .addEventListener(`click`, function () {
    document.querySelector(`.sunday`).value;
    document.querySelector(`.sunday`).value = "";
    document.querySelector(`.monday`).value = "";
    document.querySelector(`.tuesday`).value = "";
    document.querySelector(`.wednesday`).value = "";
    document.querySelector(`.thrusday`).value = "";
    document.querySelector(`.friday`).value = "";
    document.querySelector(`.saturday`).value = "";

    document.getElementById(`outputDiv`).textContent = "Input Data";
    graph();
  });
