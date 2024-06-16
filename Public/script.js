document.getElementById('searchButton').addEventListener('click', () => {
  const countryName = document.getElementById('countryInput').value
  fetchCountryData(countryName)
})

async function fetchCountryData(countryName) {
  const messageElement = document.getElementById('message');
  const resultsElement = document.getElementById('results');
  try {
    const response = await fetch(`/search?country=${countryName}`);
    const data = await response.json();
    
    if (data.length === 1) {
      displayCountryInfo(data[0], resultsElement)
    } else {
      displayCountryList(data, resultsElement)
    }

  } catch (error) {
    console.log(error)
    messageElement.textContent = "No result found."
  }
}

function displayCountryInfo(countryData, container) {
  container.innerHTML = `
  <div class="country-name">${countryData.name.common}</div>
  `
}
