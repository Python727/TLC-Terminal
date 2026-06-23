# How to Set Up TLC Terminal on Linux (Wine)

If you are running **Voyage** on Linux via Steam (Flatpak) and want to use the **TLC Terminal** tool, follow this step-by-step guide to extract, configure, and launch the application smoothly without crashes.

---

## 📁 Step 1: Prepare and Extract the Application Files

Instead of running the installer normally (which often fails or misbehaves under Wine), we will manually extract the core files and place them where Wine can easily access them.

1. Locate your downloaded setup file: `TLC.Terminal-0.1.90.Setup.exe`
2. Right-click the `.exe` file and select **"Extract Here"** (or open it with an archive manager like File Roller or Ark) to unpack its contents. Or do 
```bash
7z x TLC.Terminal-0.1.90.Setup.exe
```
3. Inside the extracted contents, look for a file ending in `.nupkg` and extract that file as well. 
```bash
7z x TLC.Terminal-0.1.90-full.nupkg
```
4. Navigate deep inside the unpacked `.nupkg` structure until you find a folder named `lib/net45`.
5. Open your Linux terminal (`Ctrl + Alt + T`) and create a dedicated directory inside your Wine drive:
```bash
mkdir -p ~/.wine/drive_c/TLCTerminal
```
6. **Copy everything** from that `net45` folder and paste it directly into your newly created folder at `~/.wine/drive_c/TLCTerminal/`.

---

## 💾 Step 2: Link your Voyage Game Data

Since the game runs inside Steam (as a Flatpak) and the Terminal runs in standard Wine, the Terminal won't see your data by default. We need to copy the save files over to the standard Wine directory.

Run the following commands in your terminal to safely create the target directory and copy the data:
```bash
mkdir -p ~/.wine/drive_c/users/$USER/AppData/Local/
cp -r ~/.var/app/com.valvesoftware.Steam/data/Steam/steamapps/compatdata/1783560/pfx/drive_c/users/steamuser/AppData/Local/Voyage ~/.wine/drive_c/users/$USER/AppData/Local/
```

---

## 🖱️ Step 3: Create a Desktop Launcher (One-Click Start)

Electron apps running under Wine tend to crash during startup if they attempt to write to the Linux console or run sandboxed. We can bypass this permanently by creating a simple desktop shortcut script.

1. Create a new text file on your Linux Desktop and name it `TLC-Terminal.sh`.
2. Open it with any text editor and paste the following script:

```bash
#!/bin/bash
cd "$HOME/.wine/drive_c/TLCTerminal"
wine "TLC Terminal.exe" --no-sandbox --disable-gpu > /dev/null 2>&1 &
```

3. Save and close the file.
4. Make the script executable:
   * **Via GUI:** Right-click `TLC-Terminal.sh` on your desktop ➔ **Properties** ➔ **Permissions** tab ➔ Check **"Allow executing file as program"**.
   * **Via Terminal:** Run `chmod +x ~/Desktop/TLC-Terminal.sh`

---

## 🏁 Usage

To launch the application, simply double-click the `TLC-Terminal.sh` file on your desktop. The application will start instantly, bypass the usual environment crashes, and successfully read your *Voyage* save data.

> ⚠️ **Note on Icons:** Due to how Wine isolates Google Webfonts requests from Electron's rendering engine, UTF-8 emoji icons inside the application layout might show up as blank spaces. However, all standard images, interactive maps, and text functionalities will operate completely normally.