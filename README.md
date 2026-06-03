# TLC — Terminal

An interactive map and planning tool for **The Last Caretaker**, built with Electron.

![App](https://i.postimg.cc/DfRy75NF/tlcmap.png)

---
![Navigation Terminal](https://i.postimg.cc/mrR36665/Screenshot-3.png)
![Navigation Terminal](https://i.postimg.cc/zB4Hz9sh/Screenshot-11.png)

---

![Navigation Terminal](https://i.postimg.cc/W3fYcVg5/Screenshot-13.png)
![Navigation Terminal](https://i.postimg.cc/h4Ng9WVY/Screenshot-14.png)
![Navigation Terminal](https://i.postimg.cc/sgrrNY6S/Screenshot-15.png)

---

![Navigation Terminal](https://i.postimg.cc/0N5q88qD/Screenshot-16.png)
![Navigation Terminal](https://i.postimg.cc/C1XyHknG/Screenshot-17.png)
![Navigation Terminal](https://i.postimg.cc/pV5MVG3q/Screenshot-18.png)

---
![Navigation Terminal](https://i.postimg.cc/nctbdW5G/Screenshot-3.png)
![Navigation Terminal](https://i.postimg.cc/j5dCJ5HG/Screenshot-5.png)
![Navigation Terminal](https://i.postimg.cc/QNzVHjFM/Screenshot-6.png)
![Navigation Terminal](https://i.postimg.cc/GmFp7YzW/Screenshot-7.png)
![Navigation Terminal](https://i.postimg.cc/fLLTRPZT/Screenshot-8.png)
![Navigation Terminal](https://i.postimg.cc/BnBK8dWK/Screenshot-9.png)

---

## Features

- **Save Slot Selection** — Up to 8 independent save slots, each with its own map state and settings
- **Interactive Map** — Navigate all stations and locations with drag, zoom and fog of war
- **Location Info** — Resources, enemies, notes, buildings and collectible items per location
- **Waypoints & Markers** — Set color-coded map markers and navigate with `E`
- **SAV Auto-Import** — Reads your game save file automatically and updates the map with tank levels, visited locations, quests, outfits, launch history and more
- **Near-Field Search** — Shows all collectible items near your boat position from the save file
- **Waypoint System (Mod)** — Real-time boat tracking and in-app waypoint setting via the TerminalWaypoint UE4SS mod
- **Human Growth Calculator** — Plan which memories and food to use, track inventory, auto-allocate required items
- **Launch History** — Log and track every human launched to space with full stats, tier, profession and council assignment
- **SAV Stats** — Overview of tanks, structures, quests and inventory read from the save file
- **Hotkeys & Stream Deck** — Bind keyboard shortcuts or Stream Deck buttons to trigger imports and navigation

---

## Download & Install

### Prebuilt .exe (recommended)

No Node.js required. Just download and run:

👉 **[Latest release](https://github.com/Python727/TLC-Navigation-Terminal/releases/latest)**

1. Download the `.exe` installer
2. Run and install
3. Launch the app — done

---

## Controls

| Input | Action |
|-------|--------|
| Left Mouse + Drag | Pan map |
| Scroll | Zoom in / out |
| Right Mouse | Location info & options |
| Middle Mouse | Place marker |
| `E` | Place waypoint at cursor |

---

## SAV Import — Getting Started

The app can read your game save file to automatically update tank levels, visited locations, quest progress, outfits, launch history and more.

### 1. Open Settings

Click **⚙ Settings** from the main menu, then open the **SAV Import** section.

### 2. Set the game folder

Enter the path to your Voyage install folder, or click **🔍 Scan** to detect it automatically.
The app looks for save files at:
```
<GameFolder>\Voyage\Saved\SaveGames\
```

### 3. Choose your save slot

The app matches the active slot in the app to the correct `.sav` file automatically. Switch slots with the **Change Slot** button on the start screen.

### 4. Configure Auto-Import

Set the polling interval (default: 30 seconds). Enable the data categories you want imported automatically:

| Option | What it imports |
|--------|----------------|
| Locations | Visited status for all map locations |
| Tanks | Fuel, water, gas and battery levels per location |
| Structures | Buildings counted at each location |
| Quests | Completed quest flags |
| Logs | Collected log entries |
| Outfits / Paints | Found paint schemes |
| Humans | New human launches added to Launch History |

### 5. Manual SAV path (optional)

If you want to point to a specific `.sav` file instead of the auto-detected one, click **Browse** under **Manual SAV Path**. This is useful if you copy saves manually or use a non-standard install path. Near-Field Search and the hotkey import both use this path when set.

### 6. Save

Click **✓ Save SAV Settings**. The auto-importer starts immediately and runs in the background.

### Triggering a manual import

Bind a hotkey under **⌨ Keyboard Shortcuts** (e.g. `Ctrl+Shift+I`) to trigger an instant import at any time without leaving the game.

---

## Near-Field Search

Near-Field Search reads your current save file and shows all collectible items near your boat — memories, loot, materials, and more — grouped by type and sorted by distance.

### Setup

1. In **Settings → SAV Import**, enable **Near-Field Search Active**
2. Optionally enable **Exclude Chest Items** to hide items already stored in containers
3. Set a **Manual SAV Path** if you want to point to a specific save file
4. Click **✓ Save SAV Settings**

### Using Near-Field Search

1. Open **🔍 Near-Field Search** from the main menu
2. The app reads your save file and lists all world-collectible items within range of your boat
3. Items are shown with their asset name, type and distance
4. **Right-click any item** to open options — if the Waypoint System is active, you can select **Add to Navigation** to set a waypoint directly to that item on the map

The search updates every time you open the panel or trigger a manual import. For live updates while playing, use it together with the Waypoint Mod.

---

## Waypoint System (TerminalWaypoint Mod)

The Waypoint System connects the app to a UE4SS Blueprint mod running inside the game. It provides:

- **Live boat position** on the map, updated every 2 seconds
- **In-app waypoint setting** — right-click any location or Near-Field item and send a waypoint directly to the game's navigation compass

> This is a private mod system. For access or further information, contact **Python.72**.

### Requirements

- **UE4SS** installed for The Last Caretaker
- The **TerminalWaypoint** Blueprint mod placed at:
  ```
  <GameFolder>\Voyage\Binaries\Win64\ue4ss\Mods\TerminalWaypoint\
  ```
  The mod writes and reads a `waypoint.json` file in that folder.

### Setup in the app

1. Open **⚙ Settings**
2. Scroll to the **🧭 Waypoint System** section
3. Check **Activate Waypoint**
4. Click **📂 Search** and select the `waypoint.json` file at the path shown:
   ```
   …\Voyage\Binaries\Win64\ue4ss\Mods\TerminalWaypoint\waypoint.json
   ```
5. Click **🔍 Test JSON** to verify the connection — the status line will confirm whether the mod is responding
6. Click **Save**

### How it works

Once activated, the app polls `waypoint.json` every 2 seconds:

- **Boat position** is read from `PlayerPos` and shown as a moving marker on the map
- **Setting a waypoint**: right-click any map location → **Set as Waypoint**, or use **Add to Navigation** in Near-Field Search. The app writes the target coordinates to `waypoint.json` with `Request +1` and `IsWaypointActive: true`, which the in-game mod picks up and activates on the compass
- **Clearing a waypoint**: right-click the map → **Clear Waypoint**, or use the waypoint button in the map toolbar

When the Waypoint System is active, the SAV Auto-Import skips overwriting boat position so the live mod position is always used instead.

---

## Launch History

Track every human launched to space with full stats imported from the save file.

Humans are imported automatically via SAV Import (enable the **Humans** option). Each record includes:

- **Profession & Tier** — derived automatically from the job (e.g. Teacher → Tier 2 Educator, Quantum Engineer → Tier 4 Engineer)
- **Physical stats** — Life Expectancy, Height, Weight, Intellect, Strength
- **Mental traits** — Patience, Wisdom, Communication, Leadership, Discipline, Logic, Adaptability, Empathy
- **Birth date** — when the human was grown (from save)
- **Launch date** — when they were delivered (from save)

Fields not stored in the save file — Name, Council assignment, Days in Space, Value, Mutation — can be filled in manually via the edit form.

Open **📋 Launch History** from the main menu. Tabs:

| Tab | Content |
|-----|---------|
| Timeline | All launches sorted newest first, with full stat display |
| Councils | Humans grouped by their assigned council |
| Stats | Averages, tier distribution, profession and council breakdowns |
| Add | Manual entry form |

---

## Human Growth Calculator

Open via **🧬** in the toolbar or from the main menu.

- **Inventory Tab** — Track how many memories and food items you own
- **Available Humans Tab** — Browse all growable types filtered by tier; green glow = growable now
- Right-click a card to mark as **Owned** or **To Grow**
- Click a card for the detail view with auto-allocation of required items

---

## State & Save Data

All app data is saved automatically to:
```
~/Documents/tlc-navigation-terminal/
```

Use **Settings → Export** to back up your data, or **Import** to restore it.

---

## Dependencies

| Package | Purpose |
|---------|---------|
| `electron` | Desktop app framework |
| `electron-store` | Persistent state storage |
| `electron-squirrel-startup` | Windows installer support |

---

## License

Fan-made tool for *The Last Caretaker*. Not affiliated with the game developers.
