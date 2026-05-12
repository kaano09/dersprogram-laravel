import urllib.request
import re

url = "https://trakyagundem.net/2022/04/25/53-yillik-okulun-arazisi-birilerine-peskes-mi-cekilecek.html"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

try:
    html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8')
    match = re.search(r'property="og:image"\s+content="([^"]+)"', html)
    if match:
        img_url = match.group(1)
        print("Found:", img_url)
        img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
        img_data = urllib.request.urlopen(img_req, timeout=15).read()
        with open('img/bg_real.jpg', 'wb') as f:
            f.write(img_data)
        print("Success")
    else:
        print("No match")
except Exception as e:
    print(e)
