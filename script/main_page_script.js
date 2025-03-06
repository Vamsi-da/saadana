document.addEventListener('DOMContentLoaded', function() {
  const currentAffairsTile = document.getElementById('currentAffairsTile');
  const dailyAffairs = document.getElementById('dailyAffairs');
  
  // Example current affairs data (this could be fetched from an API)
  const currentAffairsData = [
    "March 4, 2025: Major breakthrough in AI technology.",
    "March 3, 2025: Government announces new education reforms.",
    "March 2, 2025: Upcoming competitive exam schedule released."
  ];
  
  // Display the current affairs on the page
  currentAffairsData.forEach(affair => {
    const paragraph = document.createElement('p');
    paragraph.textContent = affair;
    dailyAffairs.appendChild(paragraph);
  });
});
