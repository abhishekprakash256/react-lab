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
// for the section page for cards 

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



// for the page data 

if (data) {
    data.forEach(articleDesc => {
        // Loop through each article's page data
        articleDesc.aticle_page_data.forEach(articlePageData => {
            console.log("Title:", articlePageData.title);
            console.log("Image Source:", articlePageData.image_src);
            console.log("Article Paragraph:", articlePageData.article_para);
            console.log("Markdown Data:", articlePageData.markdown_data);
        });

        // Loop through each social media link
        articleDesc.social_media_link.forEach(socialMediaLink => {
            console.log("GitHub Link:", socialMediaLink.github_link);
            console.log("GitLab Link:", socialMediaLink.gitlab_link);
            console.log("Medium Link:", socialMediaLink.medium_link);
        });

        // Print demo link
        console.log("Demo Link:", articleDesc.demo_link);
        console.log("-------------------------------------");
    });
} else {
    console.log("No data available.");
}

// for using the page data as whole 





