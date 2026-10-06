---
name: Maintenance Bot
description: Automatically check for broken links and resource loading issues.
---

# Maintenance Bot Skill

This skill helps you keep your website healthy by identifying broken links (404 errors) and monitoring basic resource health.

## Features
- **Broken Link Checker**: Scans your local HTML files and attempts to verify all internal and external links.
- **Resource Health**: Checks if images and scripts are successfully loading.
- **Performance Reporting**: Identifies pages that might have too many external dependencies.

## Usage
Run the script to start the maintenance scan:
```bash
python _agents/skills/maintenance_bot/scripts/check_site.py
```

## Configuration
You can update `check_site.py` to include or exclude specific domains from the external link check.
