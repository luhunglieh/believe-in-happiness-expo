---
name: Content Manager
description: Standard process for adding news or event highlights with automatic image resizing.
---

# Content Manager Skill

This skill simplifies the process of adding new content (like news or event highlights) to your website while ensuring images are properly optimized.

## Features
- **Standardized Workflow**: Easily add new pages or posts with a consistent format.
- **Automatic Image Resizing**: Automatically scales down large images to a web-optimized size (max 1200px width).
- **Automated Page Generation**: Creates the necessary HTML/Markdown file and places it in the correct directory.

## Usage
Run the script and follow the prompts:
```bash
python _agents/skills/content_manager/scripts/add_content.py
```

## Configuration
The script is configured to output to the `pages/` directory by default. You can change `OUTPUT_DIR` in `add_content.py` if you prefer a different location.
