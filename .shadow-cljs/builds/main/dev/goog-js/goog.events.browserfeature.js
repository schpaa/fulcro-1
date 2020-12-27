["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/events/browserfeature.js"],"~:js","goog.provide(\"goog.events.BrowserFeature\");\ngoog.require(\"goog.userAgent\");\ngoog.scope(function() {\n  goog.events.BrowserFeature = {HAS_W3C_BUTTON:!goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9), HAS_W3C_EVENT_SUPPORT:!goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9), SET_KEY_CODE_TO_PREVENT_DEFAULT:goog.userAgent.IE && !goog.userAgent.isVersionOrHigher(\"9\"), HAS_NAVIGATOR_ONLINE_PROPERTY:!goog.userAgent.WEBKIT || goog.userAgent.isVersionOrHigher(\"528\"), HAS_HTML5_NETWORK_EVENT_SUPPORT:goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher(\"1.9b\") || goog.userAgent.IE && \n  goog.userAgent.isVersionOrHigher(\"8\") || goog.userAgent.OPERA && goog.userAgent.isVersionOrHigher(\"9.5\") || goog.userAgent.WEBKIT && goog.userAgent.isVersionOrHigher(\"528\"), HTML5_NETWORK_EVENTS_FIRE_ON_BODY:goog.userAgent.GECKO && !goog.userAgent.isVersionOrHigher(\"8\") || goog.userAgent.IE && !goog.userAgent.isVersionOrHigher(\"9\"), TOUCH_ENABLED:\"ontouchstart\" in goog.global || !!(goog.global[\"document\"] && document.documentElement && \"ontouchstart\" in document.documentElement) || !!(goog.global[\"navigator\"] && \n  (goog.global[\"navigator\"][\"maxTouchPoints\"] || goog.global[\"navigator\"][\"msMaxTouchPoints\"])), POINTER_EVENTS:\"PointerEvent\" in goog.global, MSPOINTER_EVENTS:\"MSPointerEvent\" in goog.global && !!(goog.global[\"navigator\"] && goog.global[\"navigator\"][\"msPointerEnabled\"]), PASSIVE_EVENTS:purify(function() {\n    if (!goog.global.addEventListener || !Object.defineProperty) {\n      return false;\n    }\n    var passive = false;\n    var options = Object.defineProperty({}, \"passive\", {get:function() {\n      passive = true;\n    }});\n    try {\n      goog.global.addEventListener(\"test\", goog.nullFunction, options);\n      goog.global.removeEventListener(\"test\", goog.nullFunction, options);\n    } catch (e) {\n    }\n    return passive;\n  })};\n  function purify(fn) {\n    return {valueOf:fn}.valueOf();\n  }\n});\n","~:source","// Copyright 2010 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Browser capability checks for the events package.\n *\n */\n\n\ngoog.provide('goog.events.BrowserFeature');\n\ngoog.require('goog.userAgent');\ngoog.scope(function() {\n\n\n\n/**\n * Enum of browser capabilities.\n * @enum {boolean}\n */\ngoog.events.BrowserFeature = {\n  /**\n   * Whether the button attribute of the event is W3C compliant.  False in\n   * Internet Explorer prior to version 9; document-version dependent.\n   */\n  HAS_W3C_BUTTON:\n      !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9),\n\n  /**\n   * Whether the browser supports full W3C event model.\n   */\n  HAS_W3C_EVENT_SUPPORT:\n      !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9),\n\n  /**\n   * To prevent default in IE7-8 for certain keydown events we need set the\n   * keyCode to -1.\n   */\n  SET_KEY_CODE_TO_PREVENT_DEFAULT:\n      goog.userAgent.IE && !goog.userAgent.isVersionOrHigher('9'),\n\n  /**\n   * Whether the `navigator.onLine` property is supported.\n   */\n  HAS_NAVIGATOR_ONLINE_PROPERTY:\n      !goog.userAgent.WEBKIT || goog.userAgent.isVersionOrHigher('528'),\n\n  /**\n   * Whether HTML5 network online/offline events are supported.\n   */\n  HAS_HTML5_NETWORK_EVENT_SUPPORT:\n      goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher('1.9b') ||\n      goog.userAgent.IE && goog.userAgent.isVersionOrHigher('8') ||\n      goog.userAgent.OPERA && goog.userAgent.isVersionOrHigher('9.5') ||\n      goog.userAgent.WEBKIT && goog.userAgent.isVersionOrHigher('528'),\n\n  /**\n   * Whether HTML5 network events fire on document.body, or otherwise the\n   * window.\n   */\n  HTML5_NETWORK_EVENTS_FIRE_ON_BODY:\n      goog.userAgent.GECKO && !goog.userAgent.isVersionOrHigher('8') ||\n      goog.userAgent.IE && !goog.userAgent.isVersionOrHigher('9'),\n\n  /**\n   * Whether touch is enabled in the browser.\n   */\n  TOUCH_ENABLED:\n      ('ontouchstart' in goog.global ||\n       !!(goog.global['document'] && document.documentElement &&\n          'ontouchstart' in document.documentElement) ||\n       // IE10 uses non-standard touch events, so it has a different check.\n       !!(goog.global['navigator'] &&\n          (goog.global['navigator']['maxTouchPoints'] ||\n           goog.global['navigator']['msMaxTouchPoints']))),\n\n  /**\n   * Whether addEventListener supports W3C standard pointer events.\n   * http://www.w3.org/TR/pointerevents/\n   */\n  POINTER_EVENTS: ('PointerEvent' in goog.global),\n\n  /**\n   * Whether addEventListener supports MSPointer events (only used in IE10).\n   * http://msdn.microsoft.com/en-us/library/ie/hh772103(v=vs.85).aspx\n   * http://msdn.microsoft.com/library/hh673557(v=vs.85).aspx\n   */\n  MSPOINTER_EVENTS:\n      ('MSPointerEvent' in goog.global &&\n       !!(goog.global['navigator'] &&\n          goog.global['navigator']['msPointerEnabled'])),\n\n  /**\n   * Whether addEventListener supports {passive: true}.\n   * https://developers.google.com/web/updates/2016/06/passive-event-listeners\n   */\n  PASSIVE_EVENTS: purify(function() {\n    // If we're in a web worker or other custom environment, we can't tell.\n    if (!goog.global.addEventListener || !Object.defineProperty) {  // IE 8\n      return false;\n    }\n\n    var passive = false;\n    var options = Object.defineProperty({}, 'passive', {\n      get: function() {\n        passive = true;\n      }\n    });\n    try {\n      goog.global.addEventListener('test', goog.nullFunction, options);\n      goog.global.removeEventListener('test', goog.nullFunction, options);\n    } catch (e) {\n    }\n\n    return passive;\n  })\n};\n\n\n/**\n * Tricks Closure Compiler into believing that a function is pure.  The compiler\n * assumes that any `valueOf` function is pure, without analyzing its contents.\n *\n * @param {function(): T} fn\n * @return {T}\n * @template T\n */\nfunction purify(fn) {\n  return ({valueOf: fn}).valueOf();\n}\n});  // goog.scope\n","~:compiled-at",1609098889968,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.events.browserfeature.js\",\n\"lineCount\":25,\n\"mappings\":\"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\",\n\"sources\":[\"goog/events/browserfeature.js\"],\n\"sourcesContent\":[\"// Copyright 2010 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Browser capability checks for the events package.\\n *\\n */\\n\\n\\ngoog.provide('goog.events.BrowserFeature');\\n\\ngoog.require('goog.userAgent');\\ngoog.scope(function() {\\n\\n\\n\\n/**\\n * Enum of browser capabilities.\\n * @enum {boolean}\\n */\\ngoog.events.BrowserFeature = {\\n  /**\\n   * Whether the button attribute of the event is W3C compliant.  False in\\n   * Internet Explorer prior to version 9; document-version dependent.\\n   */\\n  HAS_W3C_BUTTON:\\n      !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9),\\n\\n  /**\\n   * Whether the browser supports full W3C event model.\\n   */\\n  HAS_W3C_EVENT_SUPPORT:\\n      !goog.userAgent.IE || goog.userAgent.isDocumentModeOrHigher(9),\\n\\n  /**\\n   * To prevent default in IE7-8 for certain keydown events we need set the\\n   * keyCode to -1.\\n   */\\n  SET_KEY_CODE_TO_PREVENT_DEFAULT:\\n      goog.userAgent.IE && !goog.userAgent.isVersionOrHigher('9'),\\n\\n  /**\\n   * Whether the `navigator.onLine` property is supported.\\n   */\\n  HAS_NAVIGATOR_ONLINE_PROPERTY:\\n      !goog.userAgent.WEBKIT || goog.userAgent.isVersionOrHigher('528'),\\n\\n  /**\\n   * Whether HTML5 network online/offline events are supported.\\n   */\\n  HAS_HTML5_NETWORK_EVENT_SUPPORT:\\n      goog.userAgent.GECKO && goog.userAgent.isVersionOrHigher('1.9b') ||\\n      goog.userAgent.IE && goog.userAgent.isVersionOrHigher('8') ||\\n      goog.userAgent.OPERA && goog.userAgent.isVersionOrHigher('9.5') ||\\n      goog.userAgent.WEBKIT && goog.userAgent.isVersionOrHigher('528'),\\n\\n  /**\\n   * Whether HTML5 network events fire on document.body, or otherwise the\\n   * window.\\n   */\\n  HTML5_NETWORK_EVENTS_FIRE_ON_BODY:\\n      goog.userAgent.GECKO && !goog.userAgent.isVersionOrHigher('8') ||\\n      goog.userAgent.IE && !goog.userAgent.isVersionOrHigher('9'),\\n\\n  /**\\n   * Whether touch is enabled in the browser.\\n   */\\n  TOUCH_ENABLED:\\n      ('ontouchstart' in goog.global ||\\n       !!(goog.global['document'] && document.documentElement &&\\n          'ontouchstart' in document.documentElement) ||\\n       // IE10 uses non-standard touch events, so it has a different check.\\n       !!(goog.global['navigator'] &&\\n          (goog.global['navigator']['maxTouchPoints'] ||\\n           goog.global['navigator']['msMaxTouchPoints']))),\\n\\n  /**\\n   * Whether addEventListener supports W3C standard pointer events.\\n   * http://www.w3.org/TR/pointerevents/\\n   */\\n  POINTER_EVENTS: ('PointerEvent' in goog.global),\\n\\n  /**\\n   * Whether addEventListener supports MSPointer events (only used in IE10).\\n   * http://msdn.microsoft.com/en-us/library/ie/hh772103(v=vs.85).aspx\\n   * http://msdn.microsoft.com/library/hh673557(v=vs.85).aspx\\n   */\\n  MSPOINTER_EVENTS:\\n      ('MSPointerEvent' in goog.global &&\\n       !!(goog.global['navigator'] &&\\n          goog.global['navigator']['msPointerEnabled'])),\\n\\n  /**\\n   * Whether addEventListener supports {passive: true}.\\n   * https://developers.google.com/web/updates/2016/06/passive-event-listeners\\n   */\\n  PASSIVE_EVENTS: purify(function() {\\n    // If we're in a web worker or other custom environment, we can't tell.\\n    if (!goog.global.addEventListener || !Object.defineProperty) {  // IE 8\\n      return false;\\n    }\\n\\n    var passive = false;\\n    var options = Object.defineProperty({}, 'passive', {\\n      get: function() {\\n        passive = true;\\n      }\\n    });\\n    try {\\n      goog.global.addEventListener('test', goog.nullFunction, options);\\n      goog.global.removeEventListener('test', goog.nullFunction, options);\\n    } catch (e) {\\n    }\\n\\n    return passive;\\n  })\\n};\\n\\n\\n/**\\n * Tricks Closure Compiler into believing that a function is pure.  The compiler\\n * assumes that any `valueOf` function is pure, without analyzing its contents.\\n *\\n * @param {function(): T} fn\\n * @return {T}\\n * @template T\\n */\\nfunction purify(fn) {\\n  return ({valueOf: fn}).valueOf();\\n}\\n});  // goog.scope\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"scope\",\"events\",\"BrowserFeature\",\"HAS_W3C_BUTTON\",\"userAgent\",\"IE\",\"isDocumentModeOrHigher\",\"HAS_W3C_EVENT_SUPPORT\",\"SET_KEY_CODE_TO_PREVENT_DEFAULT\",\"isVersionOrHigher\",\"HAS_NAVIGATOR_ONLINE_PROPERTY\",\"WEBKIT\",\"HAS_HTML5_NETWORK_EVENT_SUPPORT\",\"GECKO\",\"OPERA\",\"HTML5_NETWORK_EVENTS_FIRE_ON_BODY\",\"TOUCH_ENABLED\",\"global\",\"document\",\"documentElement\",\"POINTER_EVENTS\",\"MSPOINTER_EVENTS\",\"PASSIVE_EVENTS\",\"purify\",\"addEventListener\",\"Object\",\"defineProperty\",\"passive\",\"options\",\"get\",\"nullFunction\",\"removeEventListener\",\"e\",\"fn\",\"valueOf\"]\n}\n"]