(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/webextension-polyfill/dist/browser-polyfill.js
  var require_browser_polyfill = __commonJS({
    "node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports, module) {
      (function(global, factory) {
        if (typeof define === "function" && define.amd) {
          define("webextension-polyfill", ["module"], factory);
        } else if (typeof exports !== "undefined") {
          factory(module);
        } else {
          var mod = {
            exports: {}
          };
          factory(mod);
          global.browser = mod.exports;
        }
      })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : exports, function(module2) {
        "use strict";
        if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)";
          const wrapAPIs = (extensionAPIs) => {
            const apiMetadata = {
              "alarms": {
                "clear": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "clearAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "bookmarks": {
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getChildren": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getRecent": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getSubTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTree": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeTree": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "browserAction": {
                "disable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "enable": {
                  "minArgs": 0,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "getBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "openPopup": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setBadgeBackgroundColor": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setBadgeText": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "browsingData": {
                "remove": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "removeCache": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCookies": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeDownloads": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFormData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeHistory": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeLocalStorage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePasswords": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removePluginData": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "settings": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "commands": {
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "contextMenus": {
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "cookies": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAllCookieStores": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "set": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "devtools": {
                "inspectedWindow": {
                  "eval": {
                    "minArgs": 1,
                    "maxArgs": 2,
                    "singleCallbackArg": false
                  }
                },
                "panels": {
                  "create": {
                    "minArgs": 3,
                    "maxArgs": 3,
                    "singleCallbackArg": true
                  },
                  "elements": {
                    "createSidebarPane": {
                      "minArgs": 1,
                      "maxArgs": 1
                    }
                  }
                }
              },
              "downloads": {
                "cancel": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "download": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "erase": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFileIcon": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "open": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "pause": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeFile": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "resume": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "extension": {
                "isAllowedFileSchemeAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "isAllowedIncognitoAccess": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "history": {
                "addUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "deleteRange": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "deleteUrl": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getVisits": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "search": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "i18n": {
                "detectLanguage": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAcceptLanguages": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "identity": {
                "launchWebAuthFlow": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "idle": {
                "queryState": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "management": {
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getSelf": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "setEnabled": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "uninstallSelf": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "notifications": {
                "clear": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPermissionLevel": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              },
              "pageAction": {
                "getPopup": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getTitle": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "hide": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setIcon": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "setPopup": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "setTitle": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                },
                "show": {
                  "minArgs": 1,
                  "maxArgs": 1,
                  "fallbackToNoCallback": true
                }
              },
              "permissions": {
                "contains": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "request": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "runtime": {
                "getBackgroundPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getPlatformInfo": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "openOptionsPage": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "requestUpdateCheck": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "sendMessage": {
                  "minArgs": 1,
                  "maxArgs": 3
                },
                "sendNativeMessage": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "setUninstallURL": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "sessions": {
                "getDevices": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getRecentlyClosed": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "restore": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "storage": {
                "local": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                },
                "managed": {
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  }
                },
                "sync": {
                  "clear": {
                    "minArgs": 0,
                    "maxArgs": 0
                  },
                  "get": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "getBytesInUse": {
                    "minArgs": 0,
                    "maxArgs": 1
                  },
                  "remove": {
                    "minArgs": 1,
                    "maxArgs": 1
                  },
                  "set": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                }
              },
              "tabs": {
                "captureVisibleTab": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "create": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "detectLanguage": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "discard": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "duplicate": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "executeScript": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "getZoom": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getZoomSettings": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goBack": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "goForward": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "highlight": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "insertCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "move": {
                  "minArgs": 2,
                  "maxArgs": 2
                },
                "query": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "reload": {
                  "minArgs": 0,
                  "maxArgs": 2
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "removeCSS": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "sendMessage": {
                  "minArgs": 2,
                  "maxArgs": 3
                },
                "setZoom": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "setZoomSettings": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "update": {
                  "minArgs": 1,
                  "maxArgs": 2
                }
              },
              "topSites": {
                "get": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "webNavigation": {
                "getAllFrames": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "getFrame": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "webRequest": {
                "handlerBehaviorChanged": {
                  "minArgs": 0,
                  "maxArgs": 0
                }
              },
              "windows": {
                "create": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "get": {
                  "minArgs": 1,
                  "maxArgs": 2
                },
                "getAll": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getCurrent": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getLastFocused": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "update": {
                  "minArgs": 2,
                  "maxArgs": 2
                }
              }
            };
            if (Object.keys(apiMetadata).length === 0) {
              throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) {
                  this.set(key, this.createItem(key));
                }
                return super.get(key);
              }
            }
            const isThenable = (value) => {
              return value && typeof value === "object" && typeof value.then === "function";
            };
            const makeCallback = (promise, metadata) => {
              return (...callbackArgs) => {
                if (extensionAPIs.runtime.lastError) {
                  promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                  promise.resolve(callbackArgs[0]);
                } else {
                  promise.resolve(callbackArgs);
                }
              };
            };
            const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
            const wrapAsyncFunction = (name, metadata) => {
              return function asyncFunctionWrapper(target, ...args) {
                if (args.length < metadata.minArgs) {
                  throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                }
                if (args.length > metadata.maxArgs) {
                  throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                }
                return new Promise((resolve, reject) => {
                  if (metadata.fallbackToNoCallback) {
                    try {
                      target[name](...args, makeCallback({
                        resolve,
                        reject
                      }, metadata));
                    } catch (cbError) {
                      console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                      target[name](...args);
                      metadata.fallbackToNoCallback = false;
                      metadata.noCallback = true;
                      resolve();
                    }
                  } else if (metadata.noCallback) {
                    target[name](...args);
                    resolve();
                  } else {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  }
                });
              };
            };
            const wrapMethod = (target, method, wrapper) => {
              return new Proxy(method, {
                apply(targetMethod, thisObj, args) {
                  return wrapper.call(thisObj, target, ...args);
                }
              });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache = Object.create(null);
              let handlers = {
                has(proxyTarget2, prop) {
                  return prop in target || prop in cache;
                },
                get(proxyTarget2, prop, receiver) {
                  if (prop in cache) {
                    return cache[prop];
                  }
                  if (!(prop in target)) {
                    return void 0;
                  }
                  let value = target[prop];
                  if (typeof value === "function") {
                    if (typeof wrappers[prop] === "function") {
                      value = wrapMethod(target, target[prop], wrappers[prop]);
                    } else if (hasOwnProperty(metadata, prop)) {
                      let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                      value = wrapMethod(target, target[prop], wrapper);
                    } else {
                      value = value.bind(target);
                    }
                  } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                    value = wrapObject(value, wrappers[prop], metadata[prop]);
                  } else if (hasOwnProperty(metadata, "*")) {
                    value = wrapObject(value, wrappers[prop], metadata["*"]);
                  } else {
                    Object.defineProperty(cache, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value2) {
                        target[prop] = value2;
                      }
                    });
                    return value;
                  }
                  cache[prop] = value;
                  return value;
                },
                set(proxyTarget2, prop, value, receiver) {
                  if (prop in cache) {
                    cache[prop] = value;
                  } else {
                    target[prop] = value;
                  }
                  return true;
                },
                defineProperty(proxyTarget2, prop, desc) {
                  return Reflect.defineProperty(cache, prop, desc);
                },
                deleteProperty(proxyTarget2, prop) {
                  return Reflect.deleteProperty(cache, prop);
                }
              };
              let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
            const wrapEvent = (wrapperMap) => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onRequestFinished(req) {
                const wrappedReq = wrapObject(req, {}, {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                });
                listener(wrappedReq);
              };
            });
            let loggedSendResponseDeprecationWarning = false;
            const onMessageWrappers = new DefaultWeakMap((listener) => {
              if (typeof listener !== "function") {
                return listener;
              }
              return function onMessage2(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve) => {
                  wrappedSendResponse = function(response) {
                    if (!loggedSendResponseDeprecationWarning) {
                      console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                      loggedSendResponseDeprecationWarning = true;
                    }
                    didCallSendResponse = true;
                    resolve(response);
                  };
                });
                let result;
                try {
                  result = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result = Promise.reject(err);
                }
                const isResultThenable = result !== true && isThenable(result);
                if (result !== true && !isResultThenable && !didCallSendResponse) {
                  return false;
                }
                const sendPromisedResult = (promise) => {
                  promise.then((msg) => {
                    sendResponse(msg);
                  }, (error) => {
                    let message2;
                    if (error && (error instanceof Error || typeof error.message === "string")) {
                      message2 = error.message;
                    } else {
                      message2 = "An unexpected error occurred";
                    }
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message: message2
                    });
                  }).catch((err) => {
                    console.error("Failed to send onMessage rejected reply", err);
                  });
                };
                if (isResultThenable) {
                  sendPromisedResult(result);
                } else {
                  sendPromisedResult(sendResponsePromise);
                }
                return true;
              };
            });
            const wrappedSendMessageCallback = ({
              reject,
              resolve
            }, reply) => {
              if (extensionAPIs.runtime.lastError) {
                if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                  resolve();
                } else {
                  reject(new Error(extensionAPIs.runtime.lastError.message));
                }
              } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                reject(new Error(reply.message));
              } else {
                resolve(reply);
              }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              });
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            };
            const settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
            throw new Error("This script should only be loaded in a browser extension.");
          }
          module2.exports = wrapAPIs(chrome);
        } else {
          module2.exports = browser;
        }
      });
    }
  });

  // node_modules/webextension-polyfill-ts/lib/index.js
  var require_lib = __commonJS({
    "node_modules/webextension-polyfill-ts/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.browser = require_browser_polyfill();
    }
  });

  // node_modules/serialize-error/index.js
  var require_serialize_error = __commonJS({
    "node_modules/serialize-error/index.js"(exports, module) {
      "use strict";
      var NonError = class extends Error {
        constructor(message) {
          super(NonError._prepareSuperMessage(message));
          Object.defineProperty(this, "name", {
            value: "NonError",
            configurable: true,
            writable: true
          });
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NonError);
          }
        }
        static _prepareSuperMessage(message) {
          try {
            return JSON.stringify(message);
          } catch {
            return String(message);
          }
        }
      };
      var commonProperties = [
        { property: "name", enumerable: false },
        { property: "message", enumerable: false },
        { property: "stack", enumerable: false },
        { property: "code", enumerable: true }
      ];
      var isCalled = Symbol(".toJSON called");
      var toJSON = (from) => {
        from[isCalled] = true;
        const json = from.toJSON();
        delete from[isCalled];
        return json;
      };
      var destroyCircular = ({
        from,
        seen,
        to_,
        forceEnumerable,
        maxDepth,
        depth
      }) => {
        const to = to_ || (Array.isArray(from) ? [] : {});
        seen.push(from);
        if (depth >= maxDepth) {
          return to;
        }
        if (typeof from.toJSON === "function" && from[isCalled] !== true) {
          return toJSON(from);
        }
        for (const [key, value] of Object.entries(from)) {
          if (typeof Buffer === "function" && Buffer.isBuffer(value)) {
            to[key] = "[object Buffer]";
            continue;
          }
          if (typeof value === "function") {
            continue;
          }
          if (!value || typeof value !== "object") {
            to[key] = value;
            continue;
          }
          if (!seen.includes(from[key])) {
            depth++;
            to[key] = destroyCircular({
              from: from[key],
              seen: seen.slice(),
              forceEnumerable,
              maxDepth,
              depth
            });
            continue;
          }
          to[key] = "[Circular]";
        }
        for (const { property, enumerable } of commonProperties) {
          if (typeof from[property] === "string") {
            Object.defineProperty(to, property, {
              value: from[property],
              enumerable: forceEnumerable ? true : enumerable,
              configurable: true,
              writable: true
            });
          }
        }
        return to;
      };
      var serializeError2 = (value, options = {}) => {
        const { maxDepth = Number.POSITIVE_INFINITY } = options;
        if (typeof value === "object" && value !== null) {
          return destroyCircular({
            from: value,
            seen: [],
            forceEnumerable: true,
            maxDepth,
            depth: 0
          });
        }
        if (typeof value === "function") {
          return `[Function: ${value.name || "anonymous"}]`;
        }
        return value;
      };
      var deserializeError = (value, options = {}) => {
        const { maxDepth = Number.POSITIVE_INFINITY } = options;
        if (value instanceof Error) {
          return value;
        }
        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
          const newError = new Error();
          destroyCircular({
            from: value,
            seen: [],
            to_: newError,
            maxDepth,
            depth: 0
          });
          return newError;
        }
        return new NonError(value);
      };
      module.exports = {
        serializeError: serializeError2,
        deserializeError
      };
    }
  });

  // node_modules/nanoevents/index.js
  var createNanoEvents = () => ({
    events: {},
    emit(event, ...args) {
      ;
      (this.events[event] || []).forEach((i) => i(...args));
    },
    on(event, cb) {
      ;
      (this.events[event] = this.events[event] || []).push(cb);
      return () => this.events[event] = (this.events[event] || []).filter((i) => i !== cb);
    }
  });

  // node_modules/webext-bridge/dist/index.mjs
  var import_webextension_polyfill_ts = __toModule(require_lib());
  var import_serialize_error = __toModule(require_serialize_error());
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp2.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
  var __commonJS2 = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    __markAsModule2(target);
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var __reExport2 = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames2(module))
        if (!__hasOwnProp2.call(target, key) && key !== "default")
          __defProp2(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc2(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule2 = (module) => {
    return __reExport2(__markAsModule2(__defProp2(module != null ? __create2(__getProtoOf2(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var require_tiny_uuid = __commonJS2({
    "node_modules/.pnpm/tiny-uuid@1.0.0/node_modules/tiny-uuid/index.js"(exports, module) {
      module.exports = function(a, b) {
        for (b = a = ""; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : "-")
          ;
        return b;
      };
    }
  });
  var Bridge_exports = {};
  __export(Bridge_exports, {
    allowWindowMessaging: () => allowWindowMessaging,
    isInternalEnpoint: () => isInternalEnpoint,
    onMessage: () => onMessage,
    onOpenStreamChannel: () => onOpenStreamChannel,
    openStream: () => openStream,
    sendMessage: () => sendMessage,
    setNamespace: () => setNamespace
  });
  var import_tiny_uuid2 = __toModule2(require_tiny_uuid());
  var import_tiny_uuid = __toModule2(require_tiny_uuid());
  var ENDPOINT_RE = /^((?:background$)|devtools|content-script|window)(?:@(\d+))?$/;
  var parseEndpoint = (endpoint) => {
    const [, context2, tabId] = endpoint.match(ENDPOINT_RE) || [];
    return {
      context: context2,
      tabId: +tabId
    };
  };
  var isInternalEnpoint = ({ context: ctx }) => ["content-script", "background", "devtools"].includes(ctx);
  var hasAPI = (nsps) => import_webextension_polyfill_ts.browser[nsps];
  var context = hasAPI("devtools") ? "devtools" : hasAPI("tabs") ? "background" : hasAPI("extension") ? "content-script" : typeof document !== "undefined" ? "window" : null;
  var runtimeId = (0, import_tiny_uuid.default)();
  var openTransactions = new Map();
  var onMessageListeners = new Map();
  var messageQueue = new Set();
  var portMap = new Map();
  var port = null;
  var namespace;
  var isWindowMessagingAllowed;
  initIntercoms();
  async function sendMessage(messageID, data, destination) {
    const endpoint = typeof destination === "string" ? parseEndpoint(destination) : destination;
    const errFn = "Bridge#sendMessage ->";
    if (!endpoint.context)
      throw new TypeError(`${errFn} Destination must be any one of known destinations`);
    if (context === "background") {
      const { context: dest, tabId: destTabId } = endpoint;
      if (dest !== "background" && !destTabId)
        throw new TypeError(`${errFn} When sending messages from background page, use @tabId syntax to target specific tab`);
    }
    return new Promise((resolve, reject) => {
      const payload = {
        messageID,
        data,
        destination: endpoint,
        messageType: "message",
        transactionId: (0, import_tiny_uuid.default)(),
        origin: { context, tabId: null },
        hops: [],
        timestamp: Date.now()
      };
      openTransactions.set(payload.transactionId, { resolve, reject });
      routeMessage(payload);
    });
  }
  function onMessage(messageID, callback) {
    onMessageListeners.set(messageID, callback);
  }
  function setNamespace(nsps) {
    namespace = nsps;
  }
  function allowWindowMessaging(nsps) {
    isWindowMessagingAllowed = true;
    namespace = nsps;
  }
  function initIntercoms() {
    if (context === null)
      throw new Error("Unable to detect runtime context i.e webext-bridge can't figure out what to do");
    if (context === "window" || context === "content-script")
      window.addEventListener("message", handleWindowOnMessage);
    if (context === "content-script" && top === window) {
      port = import_webextension_polyfill_ts.browser.runtime.connect();
      port.onMessage.addListener((message) => {
        routeMessage(message);
      });
    }
    if (context === "devtools") {
      const { tabId } = import_webextension_polyfill_ts.browser.devtools.inspectedWindow;
      const name = `devtools@${tabId}`;
      port = import_webextension_polyfill_ts.browser.runtime.connect(void 0, { name });
      port.onMessage.addListener((message) => {
        routeMessage(message);
      });
      port.onDisconnect.addListener(() => {
        port = null;
      });
    }
    if (context === "background") {
      import_webextension_polyfill_ts.browser.runtime.onConnect.addListener((incomingPort) => {
        const portId = incomingPort.name || `content-script@${incomingPort.sender.tab.id}`;
        const { tabId: linkedTabId } = parseEndpoint(portId);
        if (!linkedTabId)
          return;
        portMap.set(portId, incomingPort);
        messageQueue.forEach((queuedMsg) => {
          if (queuedMsg.resolvedDestination === portId) {
            incomingPort.postMessage(queuedMsg.message);
            messageQueue.delete(queuedMsg);
          }
        });
        incomingPort.onDisconnect.addListener(() => {
          portMap.delete(portId);
        });
        incomingPort.onMessage.addListener((message) => {
          var _a;
          if ((_a = message == null ? void 0 : message.origin) == null ? void 0 : _a.context) {
            message.origin.tabId = linkedTabId;
            routeMessage(message);
          }
        });
      });
    }
  }
  function routeMessage(message) {
    const { origin, destination } = message;
    if (message.hops.includes(runtimeId))
      return;
    message.hops.push(runtimeId);
    if (context === "content-script" && [destination, origin].some((endpoint) => (endpoint == null ? void 0 : endpoint.context) === "window") && !isWindowMessagingAllowed)
      return;
    if (!destination)
      return handleInboundMessage(message);
    if (destination.context) {
      if (context === "window") {
        return routeMessageThroughWindow(window, message);
      } else if (context === "content-script" && destination.context === "window") {
        message.destination = null;
        return routeMessageThroughWindow(window, message);
      } else if (context === "devtools" || context === "content-script") {
        if (destination.context === "background")
          message.destination = null;
        return port.postMessage(message);
      } else if (context === "background") {
        const { context: destName, tabId: destTabId } = destination;
        const { tabId: srcTabId } = origin;
        if (destName !== "window") {
          message.destination = null;
        } else {
          message.destination.tabId = null;
        }
        const resolvedDestination = `${destName === "window" ? "content-script" : destName}@${destTabId || srcTabId}`;
        const destPort = portMap.get(resolvedDestination);
        if (destPort)
          destPort.postMessage(message);
        else
          messageQueue.add({ resolvedDestination, message });
      }
    }
  }
  async function handleInboundMessage(message) {
    const { transactionId, messageID, messageType } = message;
    const handleReply = () => {
      const transactionP = openTransactions.get(transactionId);
      if (transactionP) {
        const { err, data } = message;
        if (err) {
          const dehydratedErr = err;
          const errCtr = self[dehydratedErr.name];
          const hydratedErr = new (typeof errCtr === "function" ? errCtr : Error)(dehydratedErr.message);
          for (const prop in dehydratedErr)
            hydratedErr[prop] = dehydratedErr[prop];
          transactionP.reject(hydratedErr);
        } else {
          transactionP.resolve(data);
        }
        openTransactions.delete(transactionId);
      }
    };
    const handleNewMessage = async () => {
      let reply;
      let err;
      let noHandlerFoundError = false;
      try {
        const cb = onMessageListeners.get(messageID);
        if (typeof cb === "function") {
          reply = await cb({
            sender: message.origin,
            id: messageID,
            data: message.data,
            timestamp: message.timestamp
          });
        } else {
          noHandlerFoundError = true;
          throw new Error(`[webext-bridge] No handler registered in '${context}' to accept messages with id '${messageID}'`);
        }
      } catch (error) {
        err = error;
      } finally {
        if (err)
          message.err = (0, import_serialize_error.serializeError)(err);
        routeMessage(__spreadProps(__spreadValues({}, message), {
          messageType: "reply",
          data: reply,
          origin: { context, tabId: null },
          destination: message.origin,
          hops: []
        }));
        if (err && !noHandlerFoundError)
          throw reply;
      }
    };
    switch (messageType) {
      case "reply":
        return handleReply();
      case "message":
        return handleNewMessage();
    }
  }
  async function handleWindowOnMessage({ data, ports }) {
    if (context === "content-script" && !isWindowMessagingAllowed)
      return;
    if (data.cmd === "__crx_bridge_verify_listening" && data.scope === namespace && data.context !== context) {
      const msgPort = ports[0];
      msgPort.postMessage(true);
    } else if (data.cmd === "__crx_bridge_route_message" && data.scope === namespace && data.context !== context) {
      if (context === "content-script")
        data.payload.origin = "window";
      routeMessage(data.payload);
    }
  }
  function routeMessageThroughWindow(win, msg) {
    ensureNamespaceSet();
    const channel = new MessageChannel();
    const retry = setTimeout(() => {
      channel.port1.onmessage = null;
      routeMessageThroughWindow(win, msg);
    }, 300);
    channel.port1.onmessage = () => {
      clearTimeout(retry);
      win.postMessage({
        cmd: "__crx_bridge_route_message",
        scope: namespace,
        context,
        payload: msg
      }, "*");
    };
    win.postMessage({
      cmd: "__crx_bridge_verify_listening",
      scope: namespace,
      context
    }, "*", [channel.port2]);
  }
  function ensureNamespaceSet() {
    if (typeof namespace !== "string" || namespace.length === 0) {
      throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: Bridge.setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``);
    }
  }
  var _Stream = class {
    constructor(t) {
      this.handleStreamClose = () => {
        if (!this.isClosed) {
          this.isClosed = true;
          this.emitter.emit("closed", true);
          this.emitter.events = {};
        }
      };
      this.internalInfo = t;
      this.emitter = createNanoEvents();
      this.isClosed = false;
      if (!_Stream.initDone) {
        onMessage("__crx_bridge_stream_transfer__", (msg) => {
          const { streamId, streamTransfer, action } = msg.data;
          const stream = _Stream.openStreams.get(streamId);
          if (stream && !stream.isClosed) {
            if (action === "transfer")
              stream.emitter.emit("message", streamTransfer);
            if (action === "close") {
              _Stream.openStreams.delete(streamId);
              stream.handleStreamClose();
            }
          }
        });
        _Stream.initDone = true;
      }
      _Stream.openStreams.set(t.streamId, this);
    }
    get info() {
      return this.internalInfo;
    }
    send(msg) {
      if (this.isClosed)
        throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");
      sendMessage("__crx_bridge_stream_transfer__", {
        streamId: this.internalInfo.streamId,
        streamTransfer: msg,
        action: "transfer"
      }, this.internalInfo.endpoint);
    }
    close(msg) {
      if (msg)
        this.send(msg);
      this.handleStreamClose();
      sendMessage("__crx_bridge_stream_transfer__", {
        streamId: this.internalInfo.streamId,
        streamTransfer: null,
        action: "close"
      }, this.internalInfo.endpoint);
    }
    onMessage(callback) {
      return this.getDisposable("message", callback);
    }
    onClose(callback) {
      return this.getDisposable("closed", callback);
    }
    getDisposable(event, callback) {
      const unsub = this.emitter.on(event, callback);
      return Object.assign(unsub, {
        dispose: unsub,
        close: unsub
      });
    }
  };
  var Stream = _Stream;
  Stream.initDone = false;
  Stream.openStreams = new Map();
  var openStreams = new Map();
  var onOpenStreamCallbacks = new Map();
  var streamyEmitter = createNanoEvents();
  onMessage("__crx_bridge_stream_open__", (message) => {
    return new Promise((resolve) => {
      const { sender, data } = message;
      const { channel } = data;
      let watching = false;
      let off = () => {
      };
      const readyup = () => {
        const callback = onOpenStreamCallbacks.get(channel);
        if (typeof callback === "function") {
          callback(new Stream(__spreadProps(__spreadValues({}, data), { endpoint: sender })));
          if (watching)
            off();
          resolve(true);
        } else if (!watching) {
          watching = true;
          off = streamyEmitter.on("did-change-stream-callbacks", readyup);
        }
      };
      readyup();
    });
  });
  async function openStream(channel, destination) {
    if (openStreams.has(channel))
      throw new Error("webext-bridge: A Stream is already open at this channel");
    const endpoint = typeof destination === "string" ? parseEndpoint(destination) : destination;
    const streamInfo = { streamId: (0, import_tiny_uuid2.default)(), channel, endpoint };
    const stream = new Stream(streamInfo);
    stream.onClose(() => openStreams.delete(channel));
    await sendMessage("__crx_bridge_stream_open__", streamInfo, endpoint);
    openStreams.set(channel, stream);
    return stream;
  }
  function onOpenStreamChannel(channel, callback) {
    if (onOpenStreamCallbacks.has(channel))
      throw new Error("webext-bridge: This channel has already been claimed. Stream allows only one-on-one communication");
    onOpenStreamCallbacks.set(channel, callback);
    streamyEmitter.emit("did-change-stream-callbacks");
  }

  // src/content/index.ts
  var import_webextension_polyfill_ts2 = __toModule(require_lib());

  // src/utils/class.ts
  var vdoClassSelector = {
    vdoWatermark: ".watermark-content",
    subtitleSpanText: ".subtitle-container .shaka-text-container span",
    subtitleTextContainer: ".subtitle-container .cues-container .shaka-text-container",
    subtitleContainer: ".subtitle-container"
  };
  var class_default = vdoClassSelector;

  // src/utils/constant.ts
  var EdgeStyleOptions = {
    none: { text: "None", textLocale: "popupEdgeNoneText" },
    outline: {
      text: "Outline",
      textLocale: "popupEdgeOutlineText",
      cssStyle: (color) => `text-shadow: -3px -3px 0 ${color}, 0 -3px 0 ${color}, 3px -3px 0 ${color}, 3px 0 0 ${color}, 3px 3px 0 ${color}, 0 3px 0 ${color}, -3px 3px 0 ${color}, -3px 0 0 ${color};`
    },
    dropShadow: {
      text: "Drop Shadow",
      textLocale: "popupEdgeDropShadowText",
      cssStyle: (color) => `text-shadow: ${color} 2px 2px 2.5px, ${color} 2px 2px 3.5px, ${color} 2px 2px 4.5px`
    }
  };

  // src/utils/fonts.ts
  var FontOptions = {
    Roboto: {
      title: "Roboto",
      weight: [100, 300, 400, 500, 700, 900],
      defaultFontWeight: 400,
      category: "Default",
      fontFamily: '"Roboto", "HelveticaNeue-Light", system-ui, sans-serif',
      isGoogleFont: true
    },
    "Roboto+Condensed": {
      title: "Roboto Condensed",
      weight: [300, 400, 700],
      defaultFontWeight: 400,
      category: "English",
      fontFamily: '"Roboto Condensed", system-ui, sans-serif',
      isGoogleFont: true
    },
    Courgette: {
      title: "Courgette",
      weight: [400],
      defaultFontWeight: 400,
      category: "English",
      fontFamily: '"Courgette", system-ui, cursive',
      isGoogleFont: true
    },
    "Exo+2": {
      title: "Exo 2",
      weight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      defaultFontWeight: 400,
      category: "English",
      fontFamily: '"Exo 2", system-ui, sans-serif',
      isGoogleFont: true
    },
    "Ubuntu+Mono": {
      title: "Ubuntu Mono",
      weight: [400, 700],
      defaultFontWeight: 400,
      category: "English",
      fontFamily: '"Ubuntu Mono", system-ui, monospace',
      isGoogleFont: true
    },
    "Sree+Krushnadevaraya": {
      title: "Sree Krushnadevaraya",
      weight: [400],
      defaultFontWeight: 400,
      category: "English",
      fontFamily: '"Sree Krushnadevaraya", system-ui, serif',
      isGoogleFont: true
    },
    Prompt: {
      title: "Prompt \u2014 \u0E1E\u0E23\u0E49\u0E2D\u0E21",
      weight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"Prompt", system-ui, sans-serif',
      isGoogleFont: true
    },
    Kanit: {
      title: "Kanit \u2014 \u0E04\u0E13\u0E34\u0E15",
      weight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"Kanit", system-ui, sans-serif',
      isGoogleFont: true
    },
    Sarabun: {
      title: "Sarabun \u2014 \u0E2A\u0E32\u0E23\u0E1A\u0E23\u0E23\u0E13",
      weight: [100, 200, 300, 400, 500, 600, 700, 800],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"Sarabun", system-ui, sans-serif',
      isGoogleFont: true
    },
    Maitree: {
      title: "Maitree \u2014 \u0E44\u0E21\u0E15\u0E23\u0E35",
      weight: [200, 300, 400, 500, 600, 700],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"Maitree", system-ui, sans-serif',
      isGoogleFont: true
    },
    "Chakra+Petch": {
      title: "Chakra Petch \u2014 \u0E08\u0E31\u0E01\u0E23\u0E40\u0E1E\u0E0A\u0E23",
      weight: [300, 400, 500, 600, 700],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"Chakra Petch", system-ui, sans-serif',
      isGoogleFont: true
    },
    Taviraj: {
      title: "Taviraj \u2014 \u0E17\u0E27\u0E34\u0E23\u0E32\u0E0A",
      weight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"Taviraj", system-ui, sans-serif',
      isGoogleFont: true
    },
    "Bai+Jamjuree": {
      title: "Bai Jamjuree \u2014 \u0E43\u0E1A\u0E08\u0E32\u0E21\u0E08\u0E38\u0E23\u0E35",
      weight: [200, 300, 400, 500, 600, 700],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"Bai Jamjuree", system-ui, sans-serif',
      isGoogleFont: true
    },
    Sriracha: {
      title: "Sriracha \u2014 \u0E28\u0E23\u0E35\u0E23\u0E32\u0E0A\u0E32",
      weight: [400],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"Sriracha", system-ui, sans-serif',
      isGoogleFont: true
    },
    K2D: {
      title: "K2D \u2014 \u0E40\u0E04\u0E17\u0E39\u0E14\u0E35",
      weight: [100, 200, 300, 400, 500, 600, 700, 800],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"K2D", system-ui, sans-serif',
      isGoogleFont: true
    },
    Mitr: {
      title: "Mitr \u2014 \u0E21\u0E34\u0E15\u0E23",
      weight: [200, 300, 400, 500, 600, 700],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"Mitr", system-ui, sans-serif',
      isGoogleFont: true
    },
    Itim: {
      title: "Itim \u2014 \u0E44\u0E2D\u0E15\u0E34\u0E21",
      weight: [400],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"Itim", system-ui, sans-serif',
      isGoogleFont: true
    },
    Pridi: {
      title: "Pridi \u2014 \u0E1B\u0E23\u0E35\u0E14\u0E35",
      weight: [200, 300, 400, 500, 600, 700],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"Pridi", system-ui, sans-serif',
      isGoogleFont: true
    },
    Chonburi: {
      title: "Chonburi \u2014 \u0E0A\u0E25\u0E1A\u0E38\u0E23\u0E35",
      weight: [400],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"Chonburi", system-ui, sans-serif',
      isGoogleFont: true
    },
    "IBM+Plex+Sans+Thai": {
      title: "IBM Plex Sans Thai",
      weight: [400, 700],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"IBM Plex Sans Thai", system-ui, sans-serif',
      isGoogleFont: false,
      libUrl: ["https://cdn.lazywasabi.net/fonts/IBMPlexSansThai/IBMPlexSansThai.css"]
    },
    "IBM+Plex+Sans+Thai+Looped": {
      title: "IBM Plex Sans Thai Looped",
      weight: [400, 700],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"IBM Plex Sans Thai Looped", system-ui, sans-serif',
      isGoogleFont: false,
      libUrl: ["https://cdn.lazywasabi.net/fonts/IBMPlexSansThaiLooped/IBMPlexSansThaiLooped.css"]
    },
    "Noto+Sans": {
      title: "Noto Sans Thai",
      weight: [400, 700],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"Noto Sans Thai", "Noto Sans", system-ui, sans-serif',
      isGoogleFont: true,
      libUrl: ["https://cdn.lazywasabi.net/fonts/NotoSansThai/NotoSansThai.css"]
    },
    "Noto+Serif": {
      title: "Noto Serif Thai",
      weight: [400, 700],
      defaultFontWeight: 400,
      category: "Thai",
      fontFamily: '"Noto Serif Thai", "Noto Serif", system-ui, serif',
      isGoogleFont: true,
      libUrl: ["https://cdn.lazywasabi.net/fonts/NotoSerifThai/NotoSerifThai.css"]
    },
    "Long+Cang": {
      title: "Long Cang",
      weight: [400],
      defaultFontWeight: 400,
      category: "Chinese",
      fontFamily: '"Long Cang", system-ui, cursive',
      isGoogleFont: true
    },
    "Ma+Shan+Zheng": {
      title: "Ma Shan Zheng",
      weight: [400],
      defaultFontWeight: 400,
      category: "Chinese",
      fontFamily: '"Ma Shan Zheng", system-ui, cursive',
      isGoogleFont: true
    },
    "Zhi+Mang+Xing": {
      title: "Zhi Mang Xing",
      weight: [400],
      defaultFontWeight: 400,
      category: "Chinese",
      fontFamily: '"Zhi Mang Xing", system-ui, cursive',
      isGoogleFont: true
    }
  };

  // src/utils/htmlElem.ts
  var getGoogleFontCSSUrl = (fontFamily, weight) => {
    let url = "https://fonts.googleapis.com/css2?display=swap";
    for (const font of fontFamily) {
      url += `&family=${font}`;
      if (weight)
        url += `:wght@${weight.join(";")}`;
    }
    return url;
  };
  var getlinkHTMLHeader = {
    preloadFontGstatic: () => {
      const preGstatic = document.createElement("link");
      preGstatic.setAttribute("enhanced-dhs", "");
      preGstatic.rel = "preconnect";
      preGstatic.href = "https://fonts.gstatic.com";
      return preGstatic;
    },
    loadStyleSheet: {
      googleFont: (fontFamily, fontWeight = [400]) => {
        const gFont = document.createElement("link");
        gFont.setAttribute("enhanced-dhs", "");
        gFont.rel = "stylesheet";
        gFont.href = getGoogleFontCSSUrl(fontFamily, fontWeight);
        return gFont;
      },
      url: (url) => {
        const linkStylesheet = document.createElement("link");
        linkStylesheet.rel = "stylesheet";
        linkStylesheet.setAttribute("enhanced-dhs", "");
        linkStylesheet.href = url;
        return linkStylesheet;
      }
    }
  };

  // src/content/index.ts
  console.info("[Enhanced-DHS] Hello world from content script");
  var toggleActionIconScheme = (e) => {
    sendMessage("browser-media-scheme", e.matches ? "light" : "dark", "background");
  };
  var winMedia = window.matchMedia("(prefers-color-scheme: light)");
  toggleActionIconScheme(winMedia);
  winMedia.addEventListener("change", toggleActionIconScheme);
  var getSelectedOptionsStorage = () => {
    return new Promise((resolve, reject) => {
      try {
        import_webextension_polyfill_ts2.browser.storage.local.get("options").then((data) => {
          const localOptions = data.options;
          resolve(localOptions);
        });
      } catch (error) {
        reject(error);
      }
    });
  };
  var getStyleSheet = async () => {
    var _a, _b, _c;
    const selectedOptions = await getSelectedOptionsStorage();
    const styleCSS = document.createElement("style");
    styleCSS.setAttribute("enhanced-dhs", "");
    const selectedOpt = {
      font: FontOptions[selectedOptions.fontFamily],
      fontSize: selectedOptions.fontSize,
      fontWeight: selectedOptions.fontWeight,
      fontColor: selectedOptions.fontColor,
      fontPosition: selectedOptions.fontPosition,
      noWatermark: selectedOptions.noWatermark,
      edgeStyle: EdgeStyleOptions[selectedOptions.edgeStyle.style]
    };
    styleCSS.textContent += ".shaka-text-container {display: flex !important;}";
    if (selectedOptions) {
      if (selectedOpt.font) {
        if (selectedOpt.font.isGoogleFont) {
          const preloadGstatic = getlinkHTMLHeader.preloadFontGstatic();
          const fontStyleSheet = getlinkHTMLHeader.loadStyleSheet.googleFont([selectedOptions.fontFamily], [selectedOptions.fontWeight]);
          document.head.append(preloadGstatic, fontStyleSheet);
        }
        (_a = selectedOpt.font.libUrl) == null ? void 0 : _a.forEach((url) => {
          const fontStyleSheet = getlinkHTMLHeader.loadStyleSheet.url(url);
          document.head.append(fontStyleSheet);
        });
        styleCSS.textContent += `${class_default.subtitleSpanText} {font-family: ${selectedOpt.font.fontFamily} !important; font-weight: ${selectedOpt.fontWeight} !important;}`;
      }
    }
    styleCSS.textContent += `${class_default.subtitleSpanText} {color: ${selectedOpt.fontColor || "#FFFFFF"} !important;}`;
    styleCSS.textContent += `${class_default.subtitleSpanText} {background-color: transparent !important;}`;
    styleCSS.textContent += `${class_default.subtitleTextContainer} {bottom: ${selectedOpt.fontPosition + 10}% !important;}`;
    if (selectedOpt.fontSize) {
      styleCSS.textContent += `${class_default.subtitleContainer} {font-size: ${28 + selectedOpt.fontSize}px !important;} @media (max-width: 768px) {${class_default.subtitleContainer} {font-size: ${16 + selectedOpt.fontSize}px !important;}}`;
    }
    if (selectedOpt.edgeStyle) {
      const cssEdgeStyle = (_c = (_b = selectedOpt.edgeStyle).cssStyle) == null ? void 0 : _c.call(_b, "black");
      if (cssEdgeStyle)
        styleCSS.textContent += `${class_default.subtitleSpanText} {${cssEdgeStyle}}`;
    }
    if (selectedOpt.noWatermark) {
      styleCSS.textContent += `${class_default.vdoWatermark} {display: none !important;}`;
    }
    return styleCSS;
  };
  (async () => {
    const resetStyleSheet = document.createElement("style");
    resetStyleSheet.id = "enhancedDHS-reset";
    resetStyleSheet.textContent += ".shaka-text-container {display: none !important;}";
    document.head.append(resetStyleSheet);
    document.head.append(await getStyleSheet());
  })();
  import_webextension_polyfill_ts2.browser.runtime.onMessage.addListener((req) => {
    if (req.id === "toggle-subtitle-change" && req.payload) {
      const dhsInjectElems = document.querySelectorAll("[enhanced-dhs]");
      if (dhsInjectElems.length > 0) {
        dhsInjectElems.forEach((elem) => {
          elem.remove();
        });
      }
      (async () => {
        document.head.append(await getStyleSheet());
      })();
    }
  });
})();
