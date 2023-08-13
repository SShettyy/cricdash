function openTab(tabName) {
  const tabContents = document.getElementsByClassName("tabcontent");
  for (const tabContent of tabContents) {
    tabContent.style.display = "none";
  }

  document.getElementById(tabName).style.display = "block";
}

// By default, show the first tab
document.getElementById("batsman").style.display = "block";
// ... Existing code ...

// Sample data for batsman section (replace this with your data)
const batsmanData = [
  {
    name: "Virat Kohli",
    avatar: "path/to/virat_kohli.jpg",
    runs: 11235,
    average: 59.79,
    strikeRate: 93.39,
    matches: 250,
    fifties: 61,
    hundreds: 43,
  },
  // Add more player data as needed
];

function showBatsmanData() {
  const batsmanSection = document.getElementById("batsman");

  // Clear previous content
  batsmanSection.innerHTML = "";

  // Render batsman cards
  batsmanData.forEach((player) => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    const avatar = document.createElement("img");
    avatar.src = player.avatar;
    avatar.alt = player.name;
    avatar.classList.add("player-avatar");
    card.appendChild(avatar);

    const playerInfo = document.createElement("div");
    playerInfo.classList.add("player-info");

    const playerName = document.createElement("div");
    playerName.classList.add("player-name");
    playerName.textContent = player.name;
    playerInfo.appendChild(playerName);

    const playerStats = document.createElement("div");
    playerStats.classList.add("player-stats");
    playerStats.innerHTML = `
      <div class="player-stat">Runs: ${player.runs}</div>
      <div class="player-stat">Average: ${player.average}</div>
      <div class="player-stat">Strike Rate: ${player.strikeRate}</div>
    `;
    playerInfo.appendChild(playerStats);

    const moreInfoLink = document.createElement("div");
    moreInfoLink.classList.add("player-more-info");
    moreInfoLink.textContent = "More Info";
    // Add an event listener to handle clicks on the "More Info" link
    moreInfoLink.addEventListener("click", () => showPlayerDetails(player));
    playerInfo.appendChild(moreInfoLink);

    card.appendChild(playerInfo);

    batsmanSection.appendChild(card);
  });
}

function showPlayerDetails(player) {
  // You can implement a modal or a separate page to display detailed player information.
  // For simplicity, let's use an alert to display the player's name and other details.
  alert(`
    Player: ${player.name}
    Runs: ${player.runs}
    Average: ${player.average}
    Strike Rate: ${player.strikeRate}
    Matches: ${player.matches}
    Fifties: ${player.fifties}
    Hundreds: ${player.hundreds}
  `);
}

// By default, show the first tab
document.getElementById("batsman").style.display = "block";

// Show batsman data when the Batsman tab is clicked
document.querySelector(".tablink:nth-child(1)").addEventListener("click", showBatsmanData);
