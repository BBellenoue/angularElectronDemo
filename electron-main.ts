import { BrowserWindow, ipcMain } from "electron";

import { createConnection } from "typeorm";

import { Item } from "./src/assets/model/item.schema";

const isDevMode = process.execPath.match(/[\\/]electron/);

export default class Main {
  static mainWindow: Electron.BrowserWindow;
  static application: Electron.App;
  static BrowserWindow;

  private static onWindowAllClosed() {
    if (process.platform !== "darwin") {
      Main.application.quit();
    }
  }

  private static onActivate() {
    if (Main.mainWindow === null) {
      Main.onReady();
    }
  }

  private static async onReady() {
    const connection = await createConnection({
      type: "sqlite",
      synchronize: true,
      logging: true,
      logger: "simple-console",
      database: "./src/assets/data/database.sqlite",
      entities: [Item]
    });

    const itemRepo = connection.getRepository(Item);

    // Create the browser window.
    Main.mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    });

    // and load the index.html of the app.
    // Main.mainWindow.loadFile("dist/angularElectronDemo/index.html");
    Main.mainWindow.loadURL("http://localhost:4200");

    // Open the DevTools.
    if (isDevMode) {
      Main.mainWindow.webContents.openDevTools();
    }

    // Emitted when the window is closed.
    Main.mainWindow.on("closed", () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      Main.mainWindow = null;
    });

    ipcMain.on("get-items", async (event: any, ...args: any[]) => {
      try {
        event.returnValue = await itemRepo.find();
      } catch (err) {
        throw err;
      }
    });

    ipcMain.on("add-item", async (event: any, _item: Item) => {
      try {
        const item = await itemRepo.create(_item);
        await itemRepo.save(item);
        event.returnValue = await itemRepo.find();
      } catch (err) {
        throw err;
      }
    });

    ipcMain.on("delete-item", async (event: any, _item: Item) => {
      try {
        const item = await itemRepo.create(_item);
        await itemRepo.remove(item);
        event.returnValue = await itemRepo.find();
      } catch (err) {
        throw err;
      }
    });
  }

  static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
    // we pass the Electron.App object and the
    // Electron.BrowserWindow into this function
    // so this class has no dependencies. This
    // makes the code easier to write tests for
    Main.BrowserWindow = browserWindow;
    Main.application = app;
    Main.application.on("window-all-closed", Main.onWindowAllClosed);
    Main.application.on("ready", Main.onReady);
    Main.application.on("activate", Main.onActivate);
  }
}
