async function fetchData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();

    document.getElementById('reaction-score').querySelector('.first-span').textContent = data[0].score;  
    document.getElementById('memory-score').querySelector('.first-span').textContent = data[1].score;
    document.getElementById('verbal-score').querySelector('.first-span').textContent = data[2].score;
    document.getElementById('visual-score').querySelector('.first-span').textContent = data[3].score;
  
  } catch (error) {
    console.error('Error fetching or updating data:', error);
  }
}

fetchData();
