// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!

    chrome.tabs.executeScript(null, {file: "jquery-2.2.1.js"});
    chrome.tabs.executeScript(null, {file: "content_script.js"});
});

// chrome.webNavigation.onCompleted.addListener(function(tab) {
//     chrome.tabs.executeScript(null, {file: "jquery-2.2.1.js"});
//     chrome.tabs.executeScript(null, {file: "content_script.js"});
// });

// document.addEventListener('DOMContentLoaded', function({
//     chrome.tabs.executeScript(null, {file: "jquery-2.2.1.js"});
//     chrome.tabs.executeScript(null, {file: "content_script.js"});    
// }), false);