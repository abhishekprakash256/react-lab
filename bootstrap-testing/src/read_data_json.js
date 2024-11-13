const fs = require('fs');
const path = require('path');
const { BsDatabaseDash } = require('react-icons/bs');

// Specify the path to the JSON file
const filePath = path.join(__dirname, 'mock_data.json');


function myFunction(filePath)
{ 
    try {
        // Read the JSON file synchronously
        const rawData = fs.readFileSync(filePath, 'utf8');
        
        // Parse the JSON data
        const data = JSON.parse(rawData);

        
        // Pretty-print the JSON data
        return data
    } catch (error) {
        return console.error("Error reading or parsing data.json:", error);
    }
}

const data = myFunction(filePath) 

console.log(data)

if (data) {
    data.forEach(article => {
        console.log("Article Image:", article.article_card_image);
        console.log("Article Title:", article.article_card_title);
        console.log("Article Description:", article.article_card_desc);
        console.log("Explore Link:", article.article_card_explore_link);
        console.log("-------------------------------------");
    });
} else {
    console.log("No data available to display.");
}


// print the values 



