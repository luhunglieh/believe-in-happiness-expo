import os
from PIL import Image
from datetime import datetime

# Configuration
OUTPUT_DIR = 'pages'
IMAGE_DIR = 'assets/images'
MAX_IMAGE_WIDTH = 1200

def resize_image(input_path, output_path):
    try:
        with Image.open(input_path) as img:
            if img.width > MAX_IMAGE_WIDTH:
                ratio = MAX_IMAGE_WIDTH / float(img.width)
                height = int(float(img.height) * float(ratio))
                img = img.resize((MAX_IMAGE_WIDTH, height), Image.Resampling.LANCZOS)
            img.save(output_path, optimize=True, quality=85)
            print(f"Image resized and saved to {output_path}")
    except Exception as e:
        print(f"Error processing image {input_path}: {e}")

def create_content_page(title, date, content, image_name):
    filename = f"{date}-{title.replace(' ', '-')}.html"
    filepath = os.path.join(OUTPUT_DIR, filename)
    
    html_content = f"""---
layout: default
title: {title}
date: {date}
---

<div class="content-header">
    <h1>{title}</h1>
    <p class="date">{date}</p>
</div>

<div class="content-body">
    <img src="/{IMAGE_DIR}/{image_name}" alt="{title}" style="max-width: 100%; height: auto; margin-bottom: 2rem;">
    {content}
</div>
"""
    try:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html_content)
        print(f"Content page created: {filepath}")
    except Exception as e:
        print(f"Error creating file {filepath}: {e}")

def main():
    print("=== Website Content Manager ===")
    title = input("Enter Title: ")
    date = input("Enter Date (YYYY-MM-DD) [Leave blank for today]: ")
    if not date:
        date = datetime.now().strftime('%Y-%m-%d')
    content = input("Enter Content (HTML or plain text): ")
    image_path = input("Enter path to Image (local path): ")
    
    if os.path.exists(image_path):
        image_filename = os.path.basename(image_path)
        dest_image_path = os.path.join(IMAGE_DIR, image_filename)
        resize_image(image_path, dest_image_path)
        create_content_page(title, date, content, image_filename)
    else:
        print(f"Error: Image path '{image_path}' not found.")

if __name__ == "__main__":
    main()
