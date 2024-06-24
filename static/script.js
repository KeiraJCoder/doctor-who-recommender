document.addEventListener("DOMContentLoaded", () => {
  let allData = [];
  let firstDoctorData = [];
  let secondDoctorData = [];
  let thirdDoctorData = [];
  let fourthDoctorData = [];
  let fifthDoctorData = [];
  let sixthDoctorData = [];
  let storylines = [];
  let doctorDetails = {};

  // Fetch and process data for the first doctor
  fetch('templates/first_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      firstDoctorData = processDoctorData(data[0], '1st');
      storylines = extractStorylines(data[0]);
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['1st'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading first doctor data:", error));

  // Fetch and process data for the second doctor
  fetch('templates/second_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      secondDoctorData = processDoctorData(data[0], '2nd');
      storylines = [...storylines, ...extractStorylines(data[0])];
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['2nd'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading second doctor data:", error));

  // Fetch and process data for the third doctor
  fetch('templates/third_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      thirdDoctorData = processDoctorData(data[0], '3rd');
      storylines = [...storylines, ...extractStorylines(data[0])];
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['3rd'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading third doctor data:", error));

  // Fetch and process data for the fourth doctor
  fetch('templates/fourth_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      fourthDoctorData = processDoctorData(data[0], '4th');
      storylines = [...storylines, ...extractStorylines(data[0])];
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['4th'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading fourth doctor data:", error));

  // Fetch and process data for the fifth doctor
  fetch('templates/fifth_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      fifthDoctorData = processDoctorData(data[0], '5th');
      storylines = [...storylines, ...extractStorylines(data[0])];
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['5th'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading fifth doctor data:", error));

  // Fetch and process data for the sixth doctor
  fetch('templates/sixth_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      sixthDoctorData = processDoctorData(data[0], '6th');
      storylines = [...storylines, ...extractStorylines(data[0])];
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['6th'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading sixth doctor data:", error));

  function processDoctorData(data, doctor) {
    try {
      if (!data || !data.seasons) {
        throw new Error(`${doctor} data is not in the expected format.`);
      }

      const doctorData = data.seasons.flatMap(season =>
        season.episodes.flatMap(story => {
          return story.episodes.map(episode => {
            return {
              season: season.season,
              year: new Date(episode.original_air_date).getFullYear(),
              storyTitle: story.serial_title,
              episodeTitle: episode.title,
              directedBy: episode.directed_by,
              writtenBy: episode.written_by,
              originalAirDate: episode.original_air_date,
              missing: episode.missing,
              enemies: episode.enemies || [],
              companions: episode.companions || []
            };
          });
        })
      );
      allData = [...allData, ...doctorData];
      return doctorData;
    } catch (error) {
      console.error(`Error processing ${doctor} doctor data:`, error);
      return [];
    }
  }

  function extractStorylines(data) {
    try {
      if (!data || !data.seasons) {
        throw new Error('Data is not in the expected format.');
      }

      return data.seasons.flatMap(season =>
        season.episodes.map(story => ({
          serial_title: story.serial_title,
          description: story.description,
          number_of_episodes: story.number_of_episodes
        }))
      );
    } catch (error) {
      console.error('Error extracting storylines:', error);
      return [];
    }
  }

  function populateDropdowns(data) {
    const seasons = new Set();
    const writers = new Set();
    const directors = new Set();
    const years = new Set();
    const enemies = new Set();
    const companions = new Set();

    data.forEach(episode => {
      seasons.add(episode.season);
      writers.add(episode.writtenBy);
      directors.add(episode.directedBy);
      years.add(new Date(episode.originalAirDate).getFullYear());
      if (episode.enemies) {
        episode.enemies.forEach(enemy => enemies.add(enemy));
      }
      if (episode.companions) {
        episode.companions.forEach(companion => companions.add(companion));
      }
    });

    populateDropdown('season', Array.from(seasons).sort((a, b) => a - b));
    populateDropdown('writer', Array.from(writers).sort());
    populateDropdown('director', Array.from(directors).sort());
    populateDropdown('year', Array.from(years).sort((a, b) => a - b));
    populateDropdown('enemy', Array.from(enemies).sort());
    populateDropdown('companion', Array.from(companions).sort());
  }

  function populateDropdown(id, items) {
    const select = document.getElementById(id);
    const selectedValue = select.value;
    select.innerHTML = '<option value="">None</option>';
    items.forEach(item => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      select.appendChild(option);
    });
    select.value = selectedValue;
  }

  function populateStorylineDropdown(id, items) {
    const select = document.getElementById(id);
    const selectedValue = select.value;
    select.innerHTML = '<option value="">None</option>';
    items.forEach(item => {
      const option = document.createElement("option");
      option.value = item.serial_title;
      option.textContent = item.serial_title;
      select.appendChild(option);
    });
    select.value = selectedValue;

    select.addEventListener("change", function () {
      const selectedStoryline = select.value;
      const storyline = items.find(item => item.serial_title === selectedStoryline);
      const descriptionElement = document.getElementById("storylineDescription");
      if (storyline) {
        descriptionElement.textContent = `Description: ${storyline.description}`;
      } else {
        descriptionElement.textContent = 'Description: None';
      }
    });
  }

  function filterOptions() {
    const classicWho = document.getElementById("classicWho").checked;
    const doctor = document.getElementById("doctor").value.toLowerCase();
    const season = document.getElementById("season").value.toLowerCase();
    const writer = document.getElementById("writer").value.toLowerCase();
    const director = document.getElementById("director").value.toLowerCase();
    const year = document.getElementById("year").value.toLowerCase();
    const enemy = document.getElementById("enemy").value.toLowerCase();
    const storyline = document.getElementById("storyline").value.toLowerCase();
    const companion = document.getElementById("companion").value.toLowerCase();

    let filteredData = allData;

    if (doctor === "1st") {
      filteredData = firstDoctorData;
    } else if (doctor === "2nd") {
      filteredData = secondDoctorData;
    } else if (doctor === "3rd") {
      filteredData = thirdDoctorData;
    } else if (doctor === "4th") {
      filteredData = fourthDoctorData;
    } else if (doctor === "5th") {
      filteredData = fifthDoctorData;
    } else if (doctor === "6th") {
      filteredData = sixthDoctorData;
    }

    if (doctor === "") {
      filteredData = [];
    }

    const results = filteredData.filter(episode => {
      const isClassicWho = new Date(episode.originalAirDate).getFullYear() < 2005;

      return (!classicWho || isClassicWho) &&
        (season === "" || episode.season.toString().toLowerCase().includes(season)) &&
        (writer === "" || episode.writtenBy.toLowerCase().includes(writer)) &&
        (director === "" || episode.directedBy.toLowerCase().includes(director)) &&
        (year === "" || episode.year.toString().toLowerCase().includes(year)) &&
        (enemy === "" || episode.enemies.some(e => e.toLowerCase().includes(enemy))) &&
        (storyline === "" || episode.storyTitle.toLowerCase().includes(storyline)) &&
        (companion === "" || episode.companions.some(c => c.toLowerCase().includes(companion)));
    });

    displayResults(results);
    updateDropdowns(results);
  }

  function displayResults(results) {
    const resultsList = document.getElementById("resultsList");
    resultsList.innerHTML = "";

    const table = document.createElement('table');
    table.innerHTML = `
      <tr>
        <th>Title</th>
        <th>Story</th>
        <th>Season</th>
        <th>Year</th>
        <th>Director</th>
        <th>Writer</th>
        <th>Air Date</th>
      </tr>
    `;

    results.forEach(episode => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${episode.episodeTitle}</td>
        <td>${episode.storyTitle}</td>
        <td>${episode.season}</td>
        <td>${episode.year}</td>
        <td>${episode.directedBy}</td>
        <td>${episode.writtenBy}</td>
        <td>${episode.originalAirDate}</td>
      `;
      table.appendChild(row);
    });

    resultsList.appendChild(table);
  }

  function updateDropdowns(results) {
    const selectedSeason = document.getElementById('season').value;
    const selectedWriter = document.getElementById('writer').value;
    const selectedDirector = document.getElementById('director').value;
    const selectedYear = document.getElementById('year').value;
    const selectedEnemy = document.getElementById('enemy').value;
    const selectedCompanion = document.getElementById('companion').value;

    const seasons = new Set();
    const writers = new Set();
    const directors = new Set();
    const years = new Set();
    const enemies = new Set();
    const companions = new Set();

    results.forEach(episode => {
      seasons.add(episode.season);
      writers.add(episode.writtenBy);
      directors.add(episode.directedBy);
      years.add(new Date(episode.originalAirDate).getFullYear());
      if (episode.enemies) {
        episode.enemies.forEach(enemy => enemies.add(enemy));
      }
      if (episode.companions) {
        episode.companions.forEach(companion => companions.add(companion));
      }
    });

    populateDropdown('season', Array.from(seasons).sort((a, b) => a - b));
    populateDropdown('writer', Array.from(writers).sort());
    populateDropdown('director', Array.from(directors).sort());
    populateDropdown('year', Array.from(years).sort((a, b) => a - b));
    populateDropdown('enemy', Array.from(enemies).sort());
    populateDropdown('companion', Array.from(companions).sort());

    document.getElementById('season').value = selectedSeason;
    document.getElementById('writer').value = selectedWriter;
    document.getElementById('director').value = selectedDirector;
    document.getElementById('year').value = selectedYear;
    document.getElementById('enemy').value = selectedEnemy;
    document.getElementById('companion').value = selectedCompanion;
  }

  document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    filterOptions();
  });

  document.getElementById("doctor").addEventListener("change", function (event) {
    const doctor = event.target.value.toLowerCase();
    let relevantData = allData;

    if (doctor === "1st") {
      relevantData = firstDoctorData;
    } else if (doctor === "2nd") {
      relevantData = secondDoctorData;
    } else if (doctor === "3rd") {
      relevantData = thirdDoctorData;
    } else if (doctor === "4th") {
      relevantData = fourthDoctorData;
    } else if (doctor === "5th") {
      relevantData = fifthDoctorData;
    } else if (doctor === "6th") {
      relevantData = sixthDoctorData;
    }

    if (doctor === "") {
      relevantData = [];
      clearResultsAndDropdowns();
    } else {
      populateDropdowns(relevantData);
      populateStorylineDropdown('storyline', storylines.filter(story => relevantData.some(episode => episode.storyTitle === story.serial_title)));
    }

    // Display doctor info
    displayDoctorInfo(doctor);
  });

  function displayDoctorInfo(doctor) {
    const doctorInfoContainer = document.getElementById("doctorInfo");
    const doctorNameElement = document.getElementById("doctorName");
    const doctorDescriptionElement = document.getElementById("doctorDescription");
    const doctorImageElement = document.getElementById("doctorImage");

    if (doctorDetails[doctor]) {
      doctorNameElement.textContent = `${doctorDetails[doctor].name} (${doctorDetails[doctor].years_active})`;
      doctorDescriptionElement.textContent = doctorDetails[doctor].description;
      doctorImageElement.src = doctorDetails[doctor].image;
      doctorInfoContainer.style.display = "block";
    } else {
      doctorInfoContainer.style.display = "none";
    }
  }

  function clearResultsAndDropdowns() {
    document.getElementById("resultsList").innerHTML = "";
    populateDropdown('season', []);
    populateDropdown('writer', []);
    populateDropdown('director', []);
    populateDropdown('year', []);
    populateDropdown('enemy', []);
    populateDropdown('companion', []);
    populateStorylineDropdown('storyline', []);
    document.getElementById("doctorInfo").style.display = "none";
  }

  // Ensure initial state is empty
  clearResultsAndDropdowns();
});
