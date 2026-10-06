---
name: SEO Checker
description: Automatically check HTML pages for Meta Tags, Image Alt attributes, and Keyword Density.
---

# SEO Checker Skill

This skill allows you to maintain high SEO standards for your website by automatically scanning your HTML files for common SEO pitfalls.

## Features
- **Meta Tag Validation**: Ensures `<title>` and `<meta name="description">` are present and optimized.
- **Image Alt Attributes**: Scans all `<img>` tags and reports those missing the `alt` attribute.
- **Keyword Density**: Analyzes the frequency of specific keywords to help with content optimization.
- **Automated Reporting**: Generates a markdown report `SEO_REPORT.md` with all findings.

## Usage
Run the script using Python:
```bash
python _agents/skills/seo_checker/scripts/check_seo.py
```

## Configuration
You can modify `check_seo.py` to add specific target keywords in the `KEYWORDS_TO_CHECK` list.
