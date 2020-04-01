#!/usr/bin/env node
/* eslint-env node */

/**
 * @author Andreas Karner <andreas.karner@student.tugraz.at>
 * @description generate crowdin message file based on msg/*.json files, please run first create_msg_json.js if needed
 *  
 * @changelog 2019-08-14: initial version
 *            2019-08-23: added some more comments, refactor code
 *            2019-09-06: changed logic to generate just one catblocks_msgs.js file
 *            2019-11-05: [MF] updated to new structure 
 */

const fs = require('fs');
const path = require('path');

// please define config here
const SRC_DIR = path.join('src', 'js');
const MSG_DIR = path.join('i18n');
const JSON_DIR = path.join(MSG_DIR, 'json');
const MESSAGE_FILE = path.join(SRC_DIR, 'catblocks_msgs.js');

const MESSAGE_HEADER = `// This file was automatically generated by ${path.basename(__filename)}
// Please do not modify.
/* eslint no-useless-escape: 0 */
import Blockly from "blockly";
`;

// generate main catblocks_msgs.js file
const message_fd = fs.openSync(MESSAGE_FILE, 'w');
fs.writeSync(message_fd, MESSAGE_HEADER);

// Blockly.CatblocksMsgs
const CATBLOCK_MSGS = `
Blockly.CatblocksMsgs = {};
Blockly.CatblocksMsgs.locales = {};

Blockly.CatblocksMsgs.currentLocale_ = 'en_AU';

Blockly.CatblocksMsgs.hasLocale = function(locale) {
  return Object.keys(Blockly.CatblocksMsgs.locales).includes(locale);
};

Blockly.CatblocksMsgs.setLocale = function(locale) {
  if (Blockly.CatblocksMsgs.hasLocale(locale)) {
    Blockly.CatblocksMsgs.currentLocale_ = locale;
    Blockly.Msg = Object.assign({}, Blockly.Msg, Blockly.CatblocksMsgs.locales[locale]);
  } else {
    // keep current locale
    console.warn('Ignoring unrecognized locale: ' + locale);
  }
};

Blockly.CatblocksMsgs.reloadCurrentLocale = function() {
  Blockly.CatblocksMsgs.setLocale(Blockly.CatblocksMsgs.currentLocale_);
};

Blockly.CatblocksMsgs.getCurrentLocale = function() {
  return Blockly.CatblocksMsgs.currentLocale_;
};

Blockly.CatblocksMsgs.getCurrentLocaleValues = function() {
  return Blockly.CatblocksMsgs.locales[Blockly.CatblocksMsgs.getCurrentLocale()];
};

`;
fs.writeSync(message_fd, CATBLOCK_MSGS);

// generate for each msg/*.json file a object in catblocks_msgs.js files
const langfiles = fs.readdirSync(JSON_DIR, { encoding: 'utf-8' });
langfiles.forEach(langfile => {
  if (langfile.match(/.+\.json$/)) {
    const lang_name = langfile.substr(0, langfile.indexOf('.'));
    const json_path = path.join(JSON_DIR, langfile);
    const json_object = JSON.parse(fs.readFileSync(json_path, { encoding: 'utf-8' }));

    fs.writeSync(message_fd, `\n\nBlockly.CatblocksMsgs.locales["${lang_name}"] = {\n`);
    Object.keys(json_object).forEach(key => {
      fs.writeSync(message_fd, `  "${key}": "${json_object[key]}",\n`);
    });

    fs.writeSync(message_fd, `};`);
  }
});

fs.closeSync(message_fd);