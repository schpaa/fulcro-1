["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/fs/url.js"],"~:js","goog.provide(\"goog.fs.url\");\ngoog.fs.url.createObjectUrl = function(blob) {\n  return goog.fs.url.getUrlObject_().createObjectURL(blob);\n};\ngoog.fs.url.revokeObjectUrl = function(url) {\n  goog.fs.url.getUrlObject_().revokeObjectURL(url);\n};\ngoog.fs.url.UrlObject_;\ngoog.fs.url.getUrlObject_ = function() {\n  var urlObject = goog.fs.url.findUrlObject_();\n  if (urlObject != null) {\n    return urlObject;\n  } else {\n    throw new Error(\"This browser doesn't seem to support blob URLs\");\n  }\n};\ngoog.fs.url.findUrlObject_ = function() {\n  if (goog.global.URL !== undefined && goog.global.URL.createObjectURL !== undefined) {\n    return goog.global.URL;\n  } else {\n    if (goog.global.webkitURL !== undefined && goog.global.webkitURL.createObjectURL !== undefined) {\n      return goog.global.webkitURL;\n    } else {\n      if (goog.global.createObjectURL !== undefined) {\n        return goog.global;\n      } else {\n        return null;\n      }\n    }\n  }\n};\ngoog.fs.url.browserSupportsObjectUrls = function() {\n  return goog.fs.url.findUrlObject_() != null;\n};\n","~:source","// Copyright 2015 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Wrapper for URL and its createObjectUrl and revokeObjectUrl\n * methods that are part of the HTML5 File API.\n */\n\ngoog.provide('goog.fs.url');\n\n\n/**\n * Creates a blob URL for a blob object.\n * Throws an error if the browser does not support Object Urls.\n *\n * @param {!Blob} blob The object for which to create the URL.\n * @return {string} The URL for the object.\n */\ngoog.fs.url.createObjectUrl = function(blob) {\n  return goog.fs.url.getUrlObject_().createObjectURL(blob);\n};\n\n\n/**\n * Revokes a URL created by {@link goog.fs.url.createObjectUrl}.\n * Throws an error if the browser does not support Object Urls.\n *\n * @param {string} url The URL to revoke.\n */\ngoog.fs.url.revokeObjectUrl = function(url) {\n  goog.fs.url.getUrlObject_().revokeObjectURL(url);\n};\n\n\n/**\n * @typedef {{createObjectURL: (function(!Blob): string),\n *            revokeObjectURL: function(string): void}}\n */\ngoog.fs.url.UrlObject_;\n\n\n/**\n * Get the object that has the createObjectURL and revokeObjectURL functions for\n * this browser.\n *\n * @return {goog.fs.url.UrlObject_} The object for this browser.\n * @private\n */\ngoog.fs.url.getUrlObject_ = function() {\n  const urlObject = goog.fs.url.findUrlObject_();\n  if (urlObject != null) {\n    return urlObject;\n  } else {\n    throw new Error('This browser doesn\\'t seem to support blob URLs');\n  }\n};\n\n\n/**\n * Finds the object that has the createObjectURL and revokeObjectURL functions\n * for this browser.\n *\n * @return {?goog.fs.url.UrlObject_} The object for this browser or null if the\n *     browser does not support Object Urls.\n * @private\n */\ngoog.fs.url.findUrlObject_ = function() {\n  // This is what the spec says to do\n  // http://dev.w3.org/2006/webapi/FileAPI/#dfn-createObjectURL\n  if (goog.global.URL !== undefined &&\n      goog.global.URL.createObjectURL !== undefined) {\n    return /** @type {goog.fs.url.UrlObject_} */ (goog.global.URL);\n    // This is what Chrome does (as of 10.0.648.6 dev)\n  } else if (\n      goog.global.webkitURL !== undefined &&\n      goog.global.webkitURL.createObjectURL !== undefined) {\n    return /** @type {goog.fs.url.UrlObject_} */ (goog.global.webkitURL);\n    // This is what the spec used to say to do\n  } else if (goog.global.createObjectURL !== undefined) {\n    return /** @type {goog.fs.url.UrlObject_} */ (goog.global);\n  } else {\n    return null;\n  }\n};\n\n\n/**\n * Checks whether this browser supports Object Urls. If not, calls to\n * createObjectUrl and revokeObjectUrl will result in an error.\n *\n * @return {boolean} True if this browser supports Object Urls.\n */\ngoog.fs.url.browserSupportsObjectUrls = function() {\n  return goog.fs.url.findUrlObject_() != null;\n};\n","~:compiled-at",1609098889460,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.fs.url.js\",\n\"lineCount\":35,\n\"mappings\":\"AAmBAA,IAAA,CAAKC,OAAL,CAAa,aAAb,CAAA;AAUAD,IAAA,CAAKE,EAAL,CAAQC,GAAR,CAAYC,eAAZ,GAA8BC,QAAQ,CAACC,IAAD,CAAO;AAC3C,SAAON,IAAA,CAAKE,EAAL,CAAQC,GAAR,CAAYI,aAAZ,EAAA,CAA4BC,eAA5B,CAA4CF,IAA5C,CAAP;AAD2C,CAA7C;AAWAN,IAAA,CAAKE,EAAL,CAAQC,GAAR,CAAYM,eAAZ,GAA8BC,QAAQ,CAACP,GAAD,CAAM;AAC1CH,MAAA,CAAKE,EAAL,CAAQC,GAAR,CAAYI,aAAZ,EAAA,CAA4BI,eAA5B,CAA4CR,GAA5C,CAAA;AAD0C,CAA5C;AASAH,IAAA,CAAKE,EAAL,CAAQC,GAAR,CAAYS,UAAZ;AAUAZ,IAAA,CAAKE,EAAL,CAAQC,GAAR,CAAYI,aAAZ,GAA4BM,QAAQ,EAAG;AACrC,MAAMC,YAAYd,IAAA,CAAKE,EAAL,CAAQC,GAAR,CAAYY,cAAZ,EAAlB;AACA,MAAID,SAAJ,IAAiB,IAAjB;AACE,WAAOA,SAAP;AADF;AAGE,UAAM,IAAIE,KAAJ,CAAU,gDAAV,CAAN;AAHF;AAFqC,CAAvC;AAkBAhB,IAAA,CAAKE,EAAL,CAAQC,GAAR,CAAYY,cAAZ,GAA6BE,QAAQ,EAAG;AAGtC,MAAIjB,IAAJ,CAASkB,MAAT,CAAgBC,GAAhB,KAAwBC,SAAxB,IACIpB,IADJ,CACSkB,MADT,CACgBC,GADhB,CACoBX,eADpB,KACwCY,SADxC;AAEE,WAA8CpB,IAAD,CAAMkB,MAAN,CAAaC,GAA1D;AAFF;AAIO,QACHnB,IADG,CACEkB,MADF,CACSG,SADT,KACuBD,SADvB,IAEHpB,IAFG,CAEEkB,MAFF,CAESG,SAFT,CAEmBb,eAFnB,KAEuCY,SAFvC;AAGL,aAA8CpB,IAAD,CAAMkB,MAAN,CAAaG,SAA1D;AAHK;AAKA,UAAIrB,IAAJ,CAASkB,MAAT,CAAgBV,eAAhB,KAAoCY,SAApC;AACL,eAA8CpB,IAAD,CAAMkB,MAAnD;AADK;AAGL,eAAO,IAAP;AAHK;AALA;AAJP;AAHsC,CAAxC;AA0BAlB,IAAA,CAAKE,EAAL,CAAQC,GAAR,CAAYmB,yBAAZ,GAAwCC,QAAQ,EAAG;AACjD,SAAOvB,IAAA,CAAKE,EAAL,CAAQC,GAAR,CAAYY,cAAZ,EAAP,IAAuC,IAAvC;AADiD,CAAnD;;\",\n\"sources\":[\"goog/fs/url.js\"],\n\"sourcesContent\":[\"// Copyright 2015 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Wrapper for URL and its createObjectUrl and revokeObjectUrl\\n * methods that are part of the HTML5 File API.\\n */\\n\\ngoog.provide('goog.fs.url');\\n\\n\\n/**\\n * Creates a blob URL for a blob object.\\n * Throws an error if the browser does not support Object Urls.\\n *\\n * @param {!Blob} blob The object for which to create the URL.\\n * @return {string} The URL for the object.\\n */\\ngoog.fs.url.createObjectUrl = function(blob) {\\n  return goog.fs.url.getUrlObject_().createObjectURL(blob);\\n};\\n\\n\\n/**\\n * Revokes a URL created by {@link goog.fs.url.createObjectUrl}.\\n * Throws an error if the browser does not support Object Urls.\\n *\\n * @param {string} url The URL to revoke.\\n */\\ngoog.fs.url.revokeObjectUrl = function(url) {\\n  goog.fs.url.getUrlObject_().revokeObjectURL(url);\\n};\\n\\n\\n/**\\n * @typedef {{createObjectURL: (function(!Blob): string),\\n *            revokeObjectURL: function(string): void}}\\n */\\ngoog.fs.url.UrlObject_;\\n\\n\\n/**\\n * Get the object that has the createObjectURL and revokeObjectURL functions for\\n * this browser.\\n *\\n * @return {goog.fs.url.UrlObject_} The object for this browser.\\n * @private\\n */\\ngoog.fs.url.getUrlObject_ = function() {\\n  const urlObject = goog.fs.url.findUrlObject_();\\n  if (urlObject != null) {\\n    return urlObject;\\n  } else {\\n    throw new Error('This browser doesn\\\\'t seem to support blob URLs');\\n  }\\n};\\n\\n\\n/**\\n * Finds the object that has the createObjectURL and revokeObjectURL functions\\n * for this browser.\\n *\\n * @return {?goog.fs.url.UrlObject_} The object for this browser or null if the\\n *     browser does not support Object Urls.\\n * @private\\n */\\ngoog.fs.url.findUrlObject_ = function() {\\n  // This is what the spec says to do\\n  // http://dev.w3.org/2006/webapi/FileAPI/#dfn-createObjectURL\\n  if (goog.global.URL !== undefined &&\\n      goog.global.URL.createObjectURL !== undefined) {\\n    return /** @type {goog.fs.url.UrlObject_} */ (goog.global.URL);\\n    // This is what Chrome does (as of 10.0.648.6 dev)\\n  } else if (\\n      goog.global.webkitURL !== undefined &&\\n      goog.global.webkitURL.createObjectURL !== undefined) {\\n    return /** @type {goog.fs.url.UrlObject_} */ (goog.global.webkitURL);\\n    // This is what the spec used to say to do\\n  } else if (goog.global.createObjectURL !== undefined) {\\n    return /** @type {goog.fs.url.UrlObject_} */ (goog.global);\\n  } else {\\n    return null;\\n  }\\n};\\n\\n\\n/**\\n * Checks whether this browser supports Object Urls. If not, calls to\\n * createObjectUrl and revokeObjectUrl will result in an error.\\n *\\n * @return {boolean} True if this browser supports Object Urls.\\n */\\ngoog.fs.url.browserSupportsObjectUrls = function() {\\n  return goog.fs.url.findUrlObject_() != null;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"fs\",\"url\",\"createObjectUrl\",\"goog.fs.url.createObjectUrl\",\"blob\",\"getUrlObject_\",\"createObjectURL\",\"revokeObjectUrl\",\"goog.fs.url.revokeObjectUrl\",\"revokeObjectURL\",\"UrlObject_\",\"goog.fs.url.getUrlObject_\",\"urlObject\",\"findUrlObject_\",\"Error\",\"goog.fs.url.findUrlObject_\",\"global\",\"URL\",\"undefined\",\"webkitURL\",\"browserSupportsObjectUrls\",\"goog.fs.url.browserSupportsObjectUrls\"]\n}\n"]