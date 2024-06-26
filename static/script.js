document.addEventListener("DOMContentLoaded", () => {
  let allData = [];
  let firstDoctorData = [];
  let secondDoctorData = [];
  let thirdDoctorData = [];
  let fourthDoctorData = [];
  let fifthDoctorData = [];
  let sixthDoctorData = [];
  let seventhDoctorData = [];
  let eighthDoctorData = [];
  let ninthDoctorData = [];
  let tenthDoctorData = [];
  let eleventhDoctorData = [];
  let twelfthDoctorData = [];
  let thirteenthDoctorData = [];
  let fourteenthDoctorData = [];
  let fifteenthDoctorData = [];
  let warDoctorData = [];
  let fugitiveDoctorData = [];
  let brainOfMorbiusDoctorsData = [];
  let williamHartnellActorsData = [];
  let evilDoctorData = [];
  let storylines = [];
  let doctorDetails = {};

  // Fetch and process data for the first doctor
  fetch('templates/first_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      firstDoctorData = processDoctorData(data[0], '1st');
      storylines = extractStorylines(data[0], storylines);
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
      storylines = extractStorylines(data[0], storylines);
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
      storylines = extractStorylines(data[0], storylines);
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
      storylines = extractStorylines(data[0], storylines);
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
      storylines = extractStorylines(data[0], storylines);
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
      storylines = extractStorylines(data[0], storylines);
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['6th'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading sixth doctor data:", error));

  // Fetch and process data for the seventh doctor
  fetch('templates/seventh_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      seventhDoctorData = processDoctorData(data[0], '7th');
      storylines = extractStorylines(data[0], storylines);
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['7th'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading seventh doctor data:", error));

  // Fetch and process data for the eighth doctor
  fetch('templates/eighth_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      eighthDoctorData = processDoctorData(data[0], '8th');
      storylines = extractStorylines(data[0], storylines);
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['8th'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading eighth doctor data:", error));

  // Fetch and process data for the ninth doctor
  fetch('templates/ninth_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      ninthDoctorData = processDoctorData(data[0], '9th');
      storylines = extractStorylines(data[0], storylines);
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['9th'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading ninth doctor data:", error));

  // Fetch and process data for the tenth doctor
  fetch('templates/tenth_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      tenthDoctorData = processDoctorData(data[0], '10th');
      storylines = extractStorylines(data[0], storylines);
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['10th'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading tenth doctor data:", error));

  // Fetch and process data for the eleventh doctor
  fetch('templates/eleventh_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      eleventhDoctorData = processDoctorData(data[0], '11th');
      storylines = extractStorylines(data[0], storylines);
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['11th'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading eleventh doctor data:", error));

  // Fetch and process data for the twelfth doctor
  fetch('templates/twelfth_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      twelfthDoctorData = processDoctorData(data[0], '12th');
      storylines = extractStorylines(data[0], storylines);
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['12th'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading twelfth doctor data:", error));

  // Fetch and process data for the thirteenth doctor
  fetch('templates/thirteenth_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      thirteenthDoctorData = processDoctorData(data[0], '13th');
      storylines = extractStorylines(data[0], storylines);
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['13th'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading thirteenth doctor data:", error));

  // Fetch and process data for the fourteenth doctor
  fetch('templates/fourteenth_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      fourteenthDoctorData = processDoctorData(data[0], '14th');
      storylines = extractStorylines(data[0], storylines);
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['14th'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading fourteenth doctor data:", error));

  // Fetch and process data for the fifteenth doctor
  fetch('templates/fifteenth_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      fifteenthDoctorData = processDoctorData(data[0], '15th');
      storylines = extractStorylines(data[0], storylines);
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['15th'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading fifteenth doctor data:", error));

  // Fetch and process data for the War Doctor
  fetch('templates/war_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      warDoctorData = processDoctorData(data[0], 'war');
      storylines = extractStorylines(data[0], storylines);
      populateStorylineDropdown('storyline', storylines);
      doctorDetails['war'] = {
        name: data[0].actor,
        description: data[0].description,
        image: data[0].image,
        years_active: data[0].years_active
      };
    })
    .catch(error => console.error("Error loading War Doctor data:", error));

 // Fetch and process data for the Fugitive Doctor
 fetch('templates/fugitive_doctor.JSON')
 .then(response => response.json())
 .then(data => {
   fugitiveDoctorData = processDoctorData(data[0], 'Fugitive');
   storylines = extractStorylines(data[0], storylines);
   populateStorylineDropdown('storyline', storylines);
   doctorDetails['fugitive'] = {
     name: data[0].actor,
     description: data[0].description,
     image: data[0].image,
     years_active: data[0].years_active
   };
 })
 .catch(error => console.error("Error loading Fugitive Doctor data:", error));

 // Fetch and process data for the Brain of Morbius Doctors
 fetch('templates/brain_of_morbius.JSON')
 .then(response => response.json())
 .then(data => {
   brainOfMorbiusDoctorsData = data.map((doctor, index) => {
     const key = `morbius${index + 1}`;
     doctorDetails[key] = {
       name: doctor.actor,
       description: doctor.description,
       image: doctor.image,
       years_active: doctor.years_active
     };

     // Extract storylines
     if (doctor.seasons) {
       storylines = extractStorylines(doctor, storylines);
     }

     return {
       id: key,
       actor: doctor.actor,
       description: doctor.description,
       image: doctor.image,
       years_active: doctor.years_active,
       seasons: doctor.seasons || []
     };
   });
 })
 .catch(error => console.error("Error loading Brain of Morbius data:", error));

 // Fetch and process data for the actors who played William Hartnell
 fetch('templates/william_hartnell_actors.JSON')
   .then(response => response.json())
   .then(data => {
     williamHartnellActorsData = data.map((actor, index) => {
       const key = `hartnell${index + 1}`;
       doctorDetails[key] = {
         name: actor.actor,
         description: actor.description,
         image: actor.image,
         years_active: actor.years_active
       };

       // Extract storylines
       if (actor.seasons) {
         storylines = extractStorylines(actor, storylines);
       }

       return {
         id: key,
         actor: actor.actor,
         description: actor.description,
         image: actor.image,
         years_active: actor.years_active,
         seasons: actor.seasons || []
       };
     });
   })
   .catch(error => console.error("Error loading William Hartnell Actors data:", error));

  // Fetch and process data for the evil doctors
  fetch('templates/evil_doctor.JSON')
    .then(response => response.json())
    .then(data => {
      evilDoctorData = data.map((doctor, index) => {
        const key = `evil${index + 1}`;
        doctorDetails[key] = {
          name: doctor.actor,
          description: doctor.description,
          image: doctor.image,
          years_active: doctor.years_active
        };

        // Extract storylines
        if (doctor.seasons) {
          storylines = extractStorylines(doctor, storylines);
        }

        return {
          id: key,
          actor: doctor.actor,
          description: doctor.description,
          image: doctor.image,
          years_active: doctor.years_active,
          seasons: doctor.seasons || []
        };
      });
    })
    .catch(error => console.error("Error loading evil doctor data:", error));


  // Modified extractStorylines to handle new structure
  function extractStorylines(data, existingStorylines) {
    try {
      if (!data || !data.seasons) {
        throw new Error('Data is not in the expected format.');
      }

      const newStorylines = data.seasons.flatMap(season =>
        season.episodes.map(story => ({
          serial_title: story.serial_title,
          description: story.description,
          number_of_episodes: story.number_of_episodes
        }))
      );

      const uniqueStorylines = [...existingStorylines];
      newStorylines.forEach(storyline => {
        if (!uniqueStorylines.some(s => s.serial_title === storyline.serial_title)) {
          uniqueStorylines.push(storyline);
        }
      });

      return uniqueStorylines;
    } catch (error) {
      console.error('Error extracting storylines:', error);
      return existingStorylines;
    }
  }

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
      filterOptions();
    });
  }
  function filterOptions() {
    const doctor = document.getElementById("doctor").value.toLowerCase();
    const season = document.getElementById("season").value.toLowerCase();
    const writer = document.getElementById("writer").value.toLowerCase();
    const director = document.getElementById("director").value.toLowerCase();
    const year = document.getElementById("year").value.toLowerCase();
    const enemy = document.getElementById("enemy").value.toLowerCase();
    const storyline = document.getElementById("storyline").value.toLowerCase();
    const companion = document.getElementById("companion").value.toLowerCase();
  
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
    } else if (doctor === "7th") {
      filteredData = seventhDoctorData;
    } else if (doctor === "8th") {
      filteredData = eighthDoctorData;
    } else if (doctor === "9th") {
      filteredData = ninthDoctorData;
    } else if (doctor === "10th") {
      filteredData = tenthDoctorData;
    } else if (doctor === "11th") {
      filteredData = eleventhDoctorData;
    } else if (doctor === "12th") {
      filteredData = twelfthDoctorData;
    } else if (doctor === "13th") {
      filteredData = thirteenthDoctorData;
    } else if (doctor === "14th") {
      filteredData = fourteenthDoctorData;
    } else if (doctor === "15th") {
      filteredData = fifteenthDoctorData;
    } else if (doctor === "war") {
      filteredData = warDoctorData;
    } else if (doctor === "fugitive") {
      filteredData = fugitiveDoctorData;
    } else if (doctor.startsWith("morbius")) {
      filteredData = brainOfMorbiusDoctorsData.find(d => d.id === doctor).seasons.flatMap(season =>
        season.episodes.flatMap(story => story.episodes.map(episode => ({
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
        })))
      );
    } else if (doctor.startsWith("hartnell")) {
      filteredData = williamHartnellActorsData.find(d => d.id === doctor).seasons.flatMap(season =>
        season.episodes.flatMap(story => story.episodes.map(episode => ({
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
        })))
      );
    } else if (doctor.startsWith("evil")) {
      filteredData = evilDoctorData.find(d => d.id === doctor).seasons.flatMap(season =>
        season.episodes.flatMap(story => story.episodes.map(episode => ({
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
        })))
      );
    }
  
    if (doctor === "") {
      filteredData = [];
    }
  
    const results = filteredData.filter(episode =>
      (season === "" || episode.season.toString().toLowerCase().includes(season)) &&
      (writer === "" || episode.writtenBy.toLowerCase().includes(writer)) &&
      (director === "" || episode.directedBy.toLowerCase().includes(director)) &&
      (year === "" || episode.year.toString().toLowerCase().includes(year)) &&
      (enemy === "" || episode.enemies.some(e => e.toLowerCase().includes(enemy))) &&
      (storyline === "" || episode.storyTitle.toLowerCase() === storyline) &&
      (companion === "" || episode.companions.some(c => c.toLowerCase().includes(companion)))
    );
  
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
    } else if (doctor === "7th") {
      relevantData = seventhDoctorData;
    } else if (doctor === "8th") {
      relevantData = eighthDoctorData;
    } else if (doctor === "9th") {
      relevantData = ninthDoctorData;
    } else if (doctor === "10th") {
      relevantData = tenthDoctorData;
    } else if (doctor === "11th") {
      relevantData = eleventhDoctorData;
    } else if (doctor === "12th") {
      relevantData = twelfthDoctorData;
    } else if (doctor === "13th") {
      relevantData = thirteenthDoctorData;
    } else if (doctor === "14th") {
      relevantData = fourteenthDoctorData;
    } else if (doctor === "15th") {
      relevantData = fifteenthDoctorData;
    } else if (doctor === "war") {
      relevantData = warDoctorData;
    } else if (doctor === "fugitive") {
      relevantData = fugitiveDoctorData;
    } else if (doctor.startsWith("morbius")) {
      relevantData = brainOfMorbiusDoctorsData.find(d => d.id === doctor).seasons.flatMap(season =>
        season.episodes.flatMap(story => story.episodes.map(episode => ({
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
        })))
      );
    } else if (doctor.startsWith("hartnell")) {
      relevantData = williamHartnellActorsData.find(d => d.id === doctor).seasons.flatMap(season =>
        season.episodes.flatMap(story => story.episodes.map(episode => ({
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
        })))
      );
    }  else if (doctor.startsWith("evil")) {
      relevantData = evilDoctorData.find(d => d.id === doctor).seasons.flatMap(season =>
        season.episodes.flatMap(story => story.episodes.map(episode => ({
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
        })))
      );
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
