"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
require("reflect-metadata");
var electron_1 = require("electron");
var typeorm_1 = require("typeorm");
var item_schema_1 = require("./src/assets/model/item.schema");
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow;
var isDevMode = process.execPath.match(/[\\/]electron/);
var createWindow = function () { return __awaiter(void 0, void 0, void 0, function () {
    var connection, itemRepo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.createConnection({
                    type: "sqlite",
                    synchronize: true,
                    logging: true,
                    logger: "simple-console",
                    database: "./database.sqlite",
                    entities: [item_schema_1.Item]
                })];
            case 1:
                connection = _a.sent();
                itemRepo = connection.getRepository(item_schema_1.Item);
                // Create the browser window.
                mainWindow = new electron_1.BrowserWindow({
                    width: 800,
                    height: 600,
                    webPreferences: {
                        nodeIntegration: true
                    }
                });
                // and load the index.html of the app.
                mainWindow.loadURL("http://localhost:4200");
                // mainWindow.loadFile("dist/angularElectronDemo/index.html");
                // Open the DevTools.
                if (isDevMode) {
                    mainWindow.webContents.openDevTools();
                }
                // Emitted when the window is closed.
                mainWindow.on("closed", function () {
                    // Dereference the window object, usually you would store windows
                    // in an array if your app supports multi windows, this is the time
                    // when you should delete the corresponding element.
                    mainWindow = null;
                });
                electron_1.ipcMain.on("get-items", function (event) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return __awaiter(void 0, void 0, void 0, function () {
                        var _a, err_1;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 2, , 3]);
                                    _a = event;
                                    return [4 /*yield*/, itemRepo.find()];
                                case 1:
                                    _a.returnValue = _b.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_1 = _b.sent();
                                    throw err_1;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                });
                electron_1.ipcMain.on("add-item", function (event, _item) { return __awaiter(void 0, void 0, void 0, function () {
                    var item, _a, err_2;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 4, , 5]);
                                return [4 /*yield*/, itemRepo.create(_item)];
                            case 1:
                                item = _b.sent();
                                return [4 /*yield*/, itemRepo.save(item)];
                            case 2:
                                _b.sent();
                                _a = event;
                                return [4 /*yield*/, itemRepo.find()];
                            case 3:
                                _a.returnValue = _b.sent();
                                return [3 /*break*/, 5];
                            case 4:
                                err_2 = _b.sent();
                                throw err_2;
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                electron_1.ipcMain.on("delete-item", function (event, _item) { return __awaiter(void 0, void 0, void 0, function () {
                    var item, _a, err_3;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 4, , 5]);
                                return [4 /*yield*/, itemRepo.create(_item)];
                            case 1:
                                item = _b.sent();
                                return [4 /*yield*/, itemRepo.remove(item)];
                            case 2:
                                _b.sent();
                                _a = event;
                                return [4 /*yield*/, itemRepo.find()];
                            case 3:
                                _a.returnValue = _b.sent();
                                return [3 /*break*/, 5];
                            case 4:
                                err_3 = _b.sent();
                                throw err_3;
                            case 5: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
        }
    });
}); };
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on("ready", createWindow);
// Quit when all windows are closed.
electron_1.app.on("window-all-closed", function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
