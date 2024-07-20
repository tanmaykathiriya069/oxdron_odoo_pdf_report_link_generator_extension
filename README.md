# oxdron_odoo_pdf_report_link_generator_extension
# Odoo PDF Report Link Generator

This extension is useful for Odoo developers working on both base and custom reports. It allows developers to preview report changes without printing or upgrading the module each time minor adjustments are made to the report template XML file. Developers need to run the server with `--dev=all` only once to use this extension.

## Features

- Generate a link to print PDF reports in Odoo without downloading.
- Easy to use interface with fields for localhost port, module name, report action ID, and record ID.
- Open the generated link directly in a new tab.

## Installation

### Tutorial for Chrome

1. **Clone or Download**:
   - Go to the extension's repository.
   - Click "Clone or download" and select "Download zip".
2. **Unpack Archive**:
   - Unpack the downloaded archive.
3. **Open Chrome Extensions Page**:
   - Open Chrome browser and navigate to `chrome://extensions/`.
4. **Enable Developer Mode**:
   - In the top right corner, toggle "Developer Mode".
5. **Load Unpacked Extension**:
   - Click "Load unpacked" and select the folder where the extension was unpacked (e.g., `odoo_extension-master`).
6. **Extension Icon**:
   - An "3D Notes" icon will appear in the top right corner of Chrome.

### Usage

1. **Navigate to Odoo**:
   - Go to your Odoo URL.
2. **Open Extension**:
   - Click on the extension button.
3. **Fill Form**:
   - Fill in the form with the required details.
4. **Generate and Open Link**:
   - Click "Generate Report and Open Link".
   - Your attendance report will be opened in a new tab.

### Shortcut Key

- You can also open the extension using the shortcut key `Ctrl+Shift+Y` (Windows) or `Command+Shift+Y` (Mac).

### Thank you for using the Odoo PDF Report Link Generator extension. We hope it makes your development process more efficient!
