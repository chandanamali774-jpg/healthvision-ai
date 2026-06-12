const searchInput = document.getElementById("searchInput");
const resultBox = document.getElementById("resultBox");
const resultContent = document.getElementById("resultContent");
const autocompleteBox = document.getElementById("autocompleteBox");

// Hero counters
window.addEventListener("load", () => {
  const cnt1 = document.getElementById("cnt1");
  const cnt2 = document.getElementById("cnt2");
  const cnt3 = document.getElementById("cnt3");
  const cnt4 = document.getElementById("cnt4");

  if (cnt1) cnt1.innerHTML = "148+";
  if (cnt2) cnt2.innerHTML = "94%";
  if (cnt3) cnt3.innerHTML = "48M+";
  if (cnt4) cnt4.innerHTML = "12+";
});

// Quick chips
document.querySelectorAll(".quick-chip").forEach(btn => {
  btn.addEventListener("click", () => {
    const q = btn.textContent.trim();
    searchInput.value = q;
    showResult(q);
  });
});

// Search function
function showResult(query) {

  resultBox.classList.add("on");

  const data = {

    india: {
      title: "India",
      info: "Population reached: 48M+ people",
      coverage: "Vaccination Coverage: 94%"
    },

    kerala: {
      title: "Kerala",
      info: "Health Index Rank: 1",
      coverage: "Coverage: 96%"
    },

    district: {
      title: "District Data",
      info: "748 districts covered",
      coverage: "Health services monitored"
    },

    diabetes: {
      title: "Diabetes",
      info: "Chronic disease affecting blood sugar",
      coverage: "Early diagnosis recommended"
    },

    tb: {
      title: "Tuberculosis",
      info: "Bacterial infection affecting lungs",
      coverage: "TB elimination programme active"
    },

    tuberculosis: {
      title: "Tuberculosis",
      info: "Bacterial infection affecting lungs",
      coverage: "TB elimination programme active"
    },

    dengue: {
      title: "Dengue",
      info: "Mosquito borne viral disease",
      coverage: "Prevention through awareness"
    },

    malaria: {
      title: "Malaria",
      info: "Mosquito transmitted disease",
      coverage: "Vector control programme"
    },

    cancer: {
      title: "Cancer",
      info: "Abnormal cell growth disease",
      coverage: "Early screening saves lives"
    },

    hypertension: {
      title: "Hypertension",
      info: "High blood pressure condition",
      coverage: "Regular health checkups advised"
    },

    obesity: {
      title: "Obesity",
      info: "Excess body fat accumulation",
      coverage: "Healthy lifestyle awareness"
    },

    anaemia: {
      title: "Anaemia",
      info: "Low haemoglobin condition",
      coverage: "POSHAN Abhiyaan support"
    },
    

  };

  const key = query.toLowerCase();

  if (data[key]) {

    resultContent.innerHTML = `
      <div class="grid-3">

        <div class="gcard">
          <div class="gcard-icon">🌍</div>
          <h3>${data[key].title}</h3>
          <p>${data[key].info}</p>
        </div>

        <div class="gcard">
          <div class="gcard-icon">📊</div>
          <h3>Statistics</h3>
          <p>${data[key].coverage}</p>
        </div>

        <div class="gcard">
          <div class="gcard-icon">🏥</div>
          <h3>Healthcare</h3>
          <p>Public Health Awareness Programme</p>
        </div>

      </div>
    `;

  } else {

    resultContent.innerHTML = `
      <div class="gcard">
        <div class="gcard-icon">❌</div>
        <h3>No Result Found</h3>
        <p>No data available for "${query}"</p>
      </div>
    `;

  }
}

// Autocomplete
searchInput?.addEventListener("input", () => {

  const v = searchInput.value.trim();

  if (!v) {
    autocompleteBox.classList.remove("on");
    autocompleteBox.innerHTML = "";
    return;
  }

  autocompleteBox.classList.add("on");

  autocompleteBox.innerHTML = `
    <div class="ac-header">Suggestions</div>
    <div class="ac-row">Search for "${v}"</div>
  `;
});

// Enter key
searchInput?.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    showResult(searchInput.value.trim());
  }
});

// Search button
document.querySelector(".search-go-btn")?.addEventListener("click", () => {
  showResult(searchInput.value.trim());
});