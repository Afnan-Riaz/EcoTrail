document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav .relative").forEach((item) => {
    item.addEventListener("click", () => {
      item.querySelector("ul").classList.toggle("hidden");
    });
  });

  document.getElementById("side-menu-toggle").addEventListener("click", () => {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.toggle("max-w-0");
    sideMenu.classList.toggle("max-w-full");
  });
  document.querySelectorAll(".dropdown-toggle").forEach((item) => {
    item.addEventListener("click", () => {
      if(item.nextElementSibling.classList.contains("max-h-0")) {
        item.nextElementSibling.classList.remove("max-h-0");
        item.nextElementSibling.classList.add("max-h-fit");
      } else {
        item.nextElementSibling.classList.remove("max-h-fit");
        item.nextElementSibling.classList.add("max-h-0");
      }
    });
  });
  const ctx = document.getElementById("sixMComparisonChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"], // X-axis labels
      datasets: [
        {
          label: "Electric 2024",
          data: [150, 180, 120, 200, 220, 210, 190], // Replace with actual data
          backgroundColor: "green",
          borderRadius: 5, // Rounded corners
        },
        {
          label: "Electric 2023",
          data: [200, 190, 210, 230, 260, 250, 240], // Replace with actual data
          backgroundColor: "blue",
          borderRadius: 5, // Rounded corners
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {},
        display: false,
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  const ctx1 = document.getElementById("co2EmissionsChart").getContext("2d");

  new Chart(ctx1, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Electric",
          data: [300, 280, 250, 220, 200, 250, 300, 320, 280, 260, 240, 230],
          borderColor: "green",
          backgroundColor: "transparent",
          tension: 0.4, // Smooth curve
          borderWidth: 2,
        },
        {
          label: "Gas",
          data: [320, 300, 270, 260, 250, 280, 320, 330, 290, 270, 260, 250],
          borderColor: "blue",
          backgroundColor: "transparent",
          tension: 0.4, // Smooth curve
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            usePointStyle: true,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 100,
          },
        },
      },
    },
  });
  const ctx2 = document.getElementById("gaugeChart").getContext("2d");

  const gaugeValue = 68; // Example rating out of 100
  const maxValue = 100;

  new Chart(ctx2, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [gaugeValue, maxValue - gaugeValue, maxValue],
          backgroundColor: ["#4CAF50", "#EAEAEA", "transparent"],
          borderWidth: 0,
          circumference: 360,
          rotation: 270,
        },
      ],
    },
    options: {
      responsive: true,
      cutout: "80%",
      plugins: {
        legend: { display: false },
      },
    },
  });
  document
    .getElementById("energyReductionCheckbox")
    .addEventListener("change", function () {
      document.getElementById("energyReductionInput").disabled = !this.checked;
    });

  document
    .getElementById("energyCommitteeCheckbox")
    .addEventListener("change", function () {
      document.getElementById("energyCommitteeInput").disabled = !this.checked;
    });
});
