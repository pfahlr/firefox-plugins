# firefox-plugins
a collection of small firefox plugins for various utilities

## Load an Extension in Firefox
 1) Open Firefox and go to `about:debugging#/runtime/this-firefox`
 2) Click "Load Temporary Add-on"
 3) Select the `manifest.json` file for the plugin you wish to test

## How To View The Console and DevTools for a Firefox extension:

### **Option 1: Open the Background Script Console**
1. **Go to `about:debugging`**  
   - Open a new tab and type:  
     ```
     about:debugging#/runtime/this-firefox
     ```
   - Press **Enter**.

2. **Find Your Extension**  
   - Under "This Firefox" (or "This Nightly" if using Firefox Nightly), look for your extension.

3. **Click "Inspect"**  
   - This opens the **Developer Tools** for the background script.  
   - Go to the **Console** tab to see logs from `background.js`.

---

### **Option 2: Open the Popup Console**
1. Click your **extension icon** in the toolbar.
2. Right-click anywhere in the popup and select **Inspect**.
3. This opens the **Developer Tools** for `popup.html` and `popup.js`.
4. Check the **Console** tab for any errors or logs.

---

### **Option 3: View Errors in `about:devtools-toolbox`**
1. Open a new tab and type:  
   ```
   about:devtools-toolbox
   ```
2. Select your extension from the list.
3. Check the **Console** and **Network** tabs.

---

### **Debugging Tips**
- Add `console.log("Debug message");` to your scripts to verify execution.
- If the extension isn't working, check the **Console** for errors.
- Use `browser.runtime.lastError` to catch any runtime issues.

