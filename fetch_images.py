import urllib.request
import urllib.parse
import json

vegetable_map = {
    "Spinach": "Spinach",
    "Curry Leaves": "Curry tree",
    "SCRAPED COCONUT": "Coconut",
    "Drumstick Leaves": "Moringa oleifera",
    "Lalshak (Cheera)": "Amaranthus tricolor",
    "Green Shak": "Leaf vegetable",
    "Rai-shak (Mustasa)": "Brassica juncea",
    "Poysaag (m/s)": "Basella alba",
    "Molokhiya": "Mulukhiyah",
    "Peachay": "Pechay",
    "Kangoone": "Water spinach",
    "Kangongur (Hambada Baji)": "Water spinach",
    "Lady Finger": "Okra",
    "Bitter Guard (Long)": "Bitter melon",
    "Bitter Guard (Small)": "Bitter melon",
    "Lemon Grass": "Lemongrass",
    "Brinjal (Purple)": "Eggplant",
    "Brinjal Star": "Eggplant",
    "Brinjal Green": "Thai eggplant",
    "Thoray": "Luffa acutangula",
    "Dandool": "Luffa aegyptiaca",
    "Bad Badi (Long Beens)": "Yardlong bean",
    "Long Kaddu": "Calabash",
    "Seem": "Lablab"
}

def get_wiki_image(title):
    try:
        url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=pageimages&format=json&pithumbsize=600"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            for page_id in pages:
                if 'thumbnail' in pages[page_id]:
                    return pages[page_id]['thumbnail']['source']
    except Exception as e:
        pass
    return None

results = []
for name, search_title in vegetable_map.items():
    img_url = get_wiki_image(search_title)
    if img_url:
        results.append(f'        {{ name: "{name}", img: "{img_url}" }},')
    else:
        results.append(f'        {{ name: "{name}", img: "https://images.unsplash.com/photo-1595995252814-1f5e88bb5d1c?auto=format&fit=crop&w=600" }},')

print("\n".join(results))
