import os
import re
from bs4 import BeautifulSoup

# Configuration
TARGET_DIRECTORIES = ['.', 'pages']
KEYWORDS_TO_CHECK = ['幸福', '心理健康', '博覽會', '扶輪社']
REPORT_FILE = 'SEO_REPORT.md'

def check_seo_on_file(filepath):
    results = {
        'file': filepath,
        'title': None,
        'description': None,
        'missing_alts': [],
        'keyword_counts': {kw: 0 for kw in KEYWORDS_TO_CHECK}
    }

    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f, 'lxml')

        # Check Title
        title_tag = soup.find('title')
        results['title'] = title_tag.text.strip() if title_tag else "MISSING"

        # Check Meta Description
        desc_tag = soup.find('meta', attrs={'name': 'description'})
        results['description'] = desc_tag.get('content', '').strip() if desc_tag else "MISSING"

        # Check Image Alts
        for img in soup.find_all('img'):
            if not img.get('alt'):
                results['missing_alts'].append(str(img))

        # Keyword Density
        text = soup.get_text()
        for kw in KEYWORDS_TO_CHECK:
            results['keyword_counts'][kw] = len(re.findall(kw, text))

    except Exception as e:
        print(f"Error processing {filepath}: {e}")
    
    return results

def generate_report(all_results):
    with open(REPORT_FILE, 'w', encoding='utf-8') as f:
        f.write("# SEO Analysis Report\n\n")
        f.write(f"Generated on: {os.popen('date /t').read().strip()} {os.popen('time /t').read().strip()}\n\n")

        for res in all_results:
            f.write(f"## File: {res['file']}\n")
            f.write(f"- **Title**: {res['title']}\n")
            f.write(f"- **Description**: {res['description']}\n")
            
            if res['missing_alts']:
                f.write("- **⚠️ Missing Alt Attributes**:\n")
                for img in res['missing_alts']:
                    f.write(f"  - `{img}`\n")
            else:
                f.write("- **✅ All images have alt attributes**\n")

            f.write("- **Keyword Counts**:\n")
            for kw, count in res['keyword_counts'].items():
                f.write(f"  - {kw}: {count}\n")
            f.write("\n---\n\n")

    print(f"Report generated: {REPORT_FILE}")

def main():
    all_results = []
    for directory in TARGET_DIRECTORIES:
        if not os.path.exists(directory):
            continue
        for filename in os.listdir(directory):
            if filename.endswith('.html'):
                filepath = os.path.join(directory, filename)
                print(f"Checking {filepath}...")
                all_results.append(check_seo_on_file(filepath))
    
    generate_report(all_results)

if __name__ == "__main__":
    main()
