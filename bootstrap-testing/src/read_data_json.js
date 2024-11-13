const fs = require('fs');

// Function to read page data from JSON file and return a list of objects
function readPageDataFromJson(filePath) {
  return new Promise((resolve, reject) => {
    // Read the JSON file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      try {
        // Parse the JSON data and resolve the promise with it
        const parsedData = JSON.parse(data);
        resolve(parsedData);
      } catch (parseError) {
        reject(parseError);
      }
    });
  });
}



// Example usage of the function
readPageDataFromJson('mock_data.json')
  .then(data => {
    console.log(data); // Log the data to the console
  })
  .catch(err => {
    console.error('Error reading or parsing the file:', err);
  });

