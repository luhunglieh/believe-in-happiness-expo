import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

# Configuration
TARGET_DIRECTORIES = ['.', 'pages']
REPORT_FILE = 'MAINTENANCE_REPORT.md'
TIMEOUT = 5

def is_valid_url(url):
    parsed = urlparse(url)
    return bool(parsed.netloc) and bool(parsed.scheme)

def check_link(url):
    try:
        response = requests.head(url, timeout=TIMEOUT, allow_redirects=True)
        return response.status_code
    except Exception:
        try:
            response = requests.get(url, timeout=TIMEOUT, allow_redirects=True)
            return response.status_code
        except Exception as e:
            return f"Error: {e}"

def main():
    print("=== Website Maintenance Bot ===")
    broken_links = []
    
    html_files = []
    for directory in TARGET_DIRECTORIES:
        if os.path.exists(directory):
            for filename in os.listdir(directory):
                if filename.endswith('.html'):
                    html_files.append(os.path.join(directory, filename))

    for filepath in html_files:
        print(f"Scanning {filepath}...")
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'lxml')
            
            links = [a.get('href') for a in soup.find_all('a') if a.get('href')]
            resources = [img.get('src') for img in soup.find_all('img') if img.get('src')]
            
            for link in set(links + resources):
                if link.startswith('#') or link.startswith('mailto:'):
                    continue
                
                full_url = link
                if not is_valid_url(link):
                    # Internal link - basic check for existence if local
                    # This is a simplified check
                    continue 

                print(f"  Checking: {full_url}")
                status = check_link(full_url)
                if isinstance(status, int) and status >= 400:
                    broken_links.append({'file': filepath, 'url': full_url, 'status': status})
                elif isinstance(status, str):
                    broken_links.append({'file': filepath, 'url': full_url, 'status': status})

        except Exception as e:
            print(f"Error processing {filepath}: {e}")

    with open(REPORT_FILE, 'w', encoding='utf-8') as f:
        f.write("# Maintenance Report\n\n")
        if broken_links:
            f.write("## ⚠️ Broken Links or Resource Issues\n\n")
            f.write("| File | URL | Status |\n")
            f.write("| --- | --- | --- |\n")
            for item in broken_links:
                f.write(f"| {item['file']} | {item['url']} | {item['status']} |\n")
        else:
            f.write("## ✅ No broken links found.\n")

    print(f"Maintenance report generated: {REPORT_FILE}")

if __name__ == "__main__":
    main()
