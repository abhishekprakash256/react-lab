import json 

def read_page_data_from_json(file_path):
    """
    Read page data from a JSON file and return a list of dictionaries.
    """
    with open(file_path, 'r') as json_file:
        data = json.load(json_file)
    return data



data = read_page_data_from_json("mock_data.json")


"""
first_article_id = data[0]["article_id"]
print("First article ID:", first_article_id)

for article in data[0]['aticle_page_data']:
    print(article['title'])

"""


"""
for card working 

for article in data:
    print("Article Title:", article['article_card_title'])
    print("Article Image:", article['article_card_image'])
    print("Article Description:", article['article_card_desc'])
    print()  # New line for better readability


"""







for article_desc in data : 

    for article_page_data in article_desc["aticle_page_data"] : 

        print(article_page_data["title"])
        print(article_page_data["image_src"])
        print(article_page_data["article_para"])
        print(article_page_data["markdown_data"])
    
    for social_media_link in article_desc["social_media_link"]:

        print(social_media_link["github_link"])
        print(social_media_link["gitlab_link"])
        print(social_media_link["medium_link"])
    
    print(article_desc["demo_link"])
