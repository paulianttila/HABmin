/**
 * HABmin - the openHAB admin interface
 *
 * openHAB, the open Home Automation Bus.
 * Copyright (C) 2010-2013, openHAB.org <admin@openhab.org>
 *
 * See the contributors.txt file in the distribution for a
 * full listing of individual contributors.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, see <http://www.gnu.org/licenses>.
 *
 * Additional permission under GNU GPL version 3 section 7
 *
 * If you modify this Program, or any covered work, by linking or
 * combining it with Eclipse (or a modified version of that library),
 * containing parts covered by the terms of the Eclipse Public License
 * (EPL), the licensors of this Program grant you additional permission
 * to convey the resulting work.
 */

/**
 * OpenHAB Admin Console HABmin
 *
 * @author Chris Jackson
 */

var isoLanguages = [
    {"code": "ab", "name": "Abkhaz", "nativeName": "аҧсуа"},
    {"code": "aa", "name": "Afar", "nativeName": "Afaraf"},
    {"code": "af", "name": "Afrikaans", "nativeName": "Afrikaans"},
    {"code": "ak", "name": "Akan", "nativeName": "Akan"},
    {"code": "sq", "name": "Albanian", "nativeName": "Shqip"},
    {"code": "am", "name": "Amharic", "nativeName": "አማርኛ"},
    {"code": "ar", "name": "Arabic", "nativeName": "العربية"},
    {"code": "an", "name": "Aragonese", "nativeName": "Aragonés"},
    {"code": "hy", "name": "Armenian", "nativeName": "Հայերեն"},
    {"code": "as", "name": "Assamese", "nativeName": "অসমীয়া"},
    {"code": "av", "name": "Avaric", "nativeName": "авар мацӀ, магӀарул мацӀ"},
    {"code": "ae", "name": "Avestan", "nativeName": "avesta"},
    {"code": "ay", "name": "Aymara", "nativeName": "aymar aru"},
    {"code": "az", "name": "Azerbaijani", "nativeName": "azərbaycan dili"},
    {"code": "bm", "name": "Bambara", "nativeName": "bamanankan"},
    {"code": "ba", "name": "Bashkir", "nativeName": "башҡорт теле"},
    {"code": "eu", "name": "Basque", "nativeName": "euskara, euskera"},
    {"code": "be", "name": "Belarusian", "nativeName": "Беларуская"},
    {"code": "bn", "name": "Bengali", "nativeName": "বাংলা"},
    {"code": "bh", "name": "Bihari", "nativeName": "भोजपुरी"},
    {"code": "bi", "name": "Bislama", "nativeName": "Bislama"},
    {"code": "bs", "name": "Bosnian", "nativeName": "bosanski jezik"},
    {"code": "br", "name": "Breton", "nativeName": "brezhoneg"},
    {"code": "bg", "name": "Bulgarian", "nativeName": "български език"},
    {"code": "my", "name": "Burmese", "nativeName": "ဗမာစာ"},
    {"code": "ca", "name": "Catalan; Valencian", "nativeName": "Català"},
    {"code": "ch", "name": "Chamorro", "nativeName": "Chamoru"},
    {"code": "ce", "name": "Chechen", "nativeName": "нохчийн мотт"},
    {"code": "ny", "name": "Chichewa; Chewa; Nyanja", "nativeName": "chiCheŵa, chinyanja"},
    {"code": "zh", "name": "Chinese", "nativeName": "中文 (Zhōngwén), 汉语, 漢語"},
    {"code": "cv", "name": "Chuvash", "nativeName": "чӑваш чӗлхи"},
    {"code": "kw", "name": "Cornish", "nativeName": "Kernewek"},
    {"code": "co", "name": "Corsican", "nativeName": "corsu, lingua corsa"},
    {"code": "cr", "name": "Cree", "nativeName": "ᓀᐦᐃᔭᐍᐏᐣ"},
    {"code": "hr", "name": "Croatian", "nativeName": "hrvatski"},
    {"code": "cs", "name": "Czech", "nativeName": "česky, čeština"},
    {"code": "da", "name": "Danish", "nativeName": "dansk"},
    {"code": "dv", "name": "Divehi; Dhivehi; Maldivian;", "nativeName": ""},
    {"code": "nl", "name": "Dutch", "nativeName": "Nederlands, Vlaams"},
    {"code": "en", "name": "English", "nativeName": "English"},
    {"code": "eo", "name": "Esperanto", "nativeName": "Esperanto"},
    {"code": "et", "name": "Estonian", "nativeName": "eesti, eesti keel"},
    {"code": "ee", "name": "Ewe", "nativeName": "Eʋegbe"},
    {"code": "fo", "name": "Faroese", "nativeName": "føroyskt"},
    {"code": "fj", "name": "Fijian", "nativeName": "vosa Vakaviti"},
    {"code": "fi", "name": "Finnish", "nativeName": "suomi, suomen kieli"},
    {"code": "fr", "name": "French", "nativeName": "français, langue française"},
    {"code": "ff", "name": "Fula; Fulah; Pulaar; Pular", "nativeName": "Fulfulde, Pulaar, Pular"},
    {"code": "gl", "name": "Galician", "nativeName": "Galego"},
    {"code": "ka", "name": "Georgian", "nativeName": "ქართული"},
    {"code": "de", "name": "German", "nativeName": "Deutsch"},
    {"code": "el", "name": "Greek, Modern", "nativeName": "Ελληνικά"},
    {"code": "gn", "name": "Guaraní", "nativeName": "Avañeẽ"},
    {"code": "gu", "name": "Gujarati", "nativeName": "ગુજરાતી"},
    {"code": "ht", "name": "Haitian; Haitian Creole", "nativeName": "Kreyòl ayisyen"},
    {"code": "ha", "name": "Hausa", "nativeName": "Hausa, هَوُسَ"},
    {"code": "he", "name": "Hebrew (modern)", "nativeName": "עברית"},
    {"code": "hz", "name": "Herero", "nativeName": "Otjiherero"},
    {"code": "hi", "name": "Hindi", "nativeName": "हिन्दी, हिंदी"},
    {"code": "ho", "name": "Hiri Motu", "nativeName": "Hiri Motu"},
    {"code": "hu", "name": "Hungarian", "nativeName": "Magyar"},
    {"code": "ia", "name": "Interlingua", "nativeName": "Interlingua"},
    {"code": "id", "name": "Indonesian", "nativeName": "Bahasa Indonesia"},
    {"code": "ie", "name": "Interlingue", "nativeName": "Originally called Occidental; then Interlingue after WWII"},
    {"code": "ga", "name": "Irish", "nativeName": "Gaeilge"},
    {"code": "ig", "name": "Igbo", "nativeName": "Asụsụ Igbo"},
    {"code": "ik", "name": "Inupiaq", "nativeName": "Iñupiaq, Iñupiatun"},
    {"code": "io", "name": "Ido", "nativeName": "Ido"},
    {"code": "is", "name": "Icelandic", "nativeName": "Íslenska"},
    {"code": "it", "name": "Italian", "nativeName": "Italiano"},
    {"code": "iu", "name": "Inuktitut", "nativeName": "ᐃᓄᒃᑎᑐᑦ"},
    {"code": "ja", "name": "Japanese", "nativeName": "日本語 (にほんご／にっぽんご)"},
    {"code": "jv", "name": "Javanese", "nativeName": "basa Jawa"},
    {"code": "kl", "name": "Kalaallisut, Greenlandic", "nativeName": "kalaallisut, kalaallit oqaasii"},
    {"code": "kn", "name": "Kannada", "nativeName": "ಕನ್ನಡ"},
    {"code": "kr", "name": "Kanuri", "nativeName": "Kanuri"},
    {"code": "ks", "name": "Kashmiri", "nativeName": "कश्मीरी, كشميري‎"},
    {"code": "kk", "name": "Kazakh", "nativeName": "Қазақ тілі"},
    {"code": "km", "name": "Khmer", "nativeName": "ភាសាខ្មែរ"},
    {"code": "ki", "name": "Kikuyu, Gikuyu", "nativeName": "Gĩkũyũ"},
    {"code": "rw", "name": "Kinyarwanda", "nativeName": "Ikinyarwanda"},
    {"code": "ky", "name": "Kirghiz, Kyrgyz", "nativeName": "кыргыз тили"},
    {"code": "kv", "name": "Komi", "nativeName": "коми кыв"},
    {"code": "kg", "name": "Kongo", "nativeName": "KiKongo"},
    {"code": "ko", "name": "Korean", "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)"},
    {"code": "ku", "name": "Kurdish", "nativeName": "Kurdî, كوردی‎"},
    {"code": "kj", "name": "Kwanyama, Kuanyama", "nativeName": "Kuanyama"},
    {"code": "la", "name": "Latin", "nativeName": "latine, lingua latina"},
    {"code": "lb", "name": "Luxembourgish, Letzeburgesch", "nativeName": "Lëtzebuergesch"},
    {"code": "lg", "name": "Luganda", "nativeName": "Luganda"},
    {"code": "li", "name": "Limburgish, Limburgan, Limburger", "nativeName": "Limburgs"},
    {"code": "ln", "name": "Lingala", "nativeName": "Lingála"},
    {"code": "lo", "name": "Lao", "nativeName": "ພາສາລາວ"},
    {"code": "lt", "name": "Lithuanian", "nativeName": "lietuvių kalba"},
    {"code": "lu", "name": "Luba-Katanga", "nativeName": ""},
    {"code": "lv", "name": "Latvian", "nativeName": "latviešu valoda"},
    {"code": "gv", "name": "Manx", "nativeName": "Gaelg, Gailck"},
    {"code": "mk", "name": "Macedonian", "nativeName": "македонски јазик"},
    {"code": "mg", "name": "Malagasy", "nativeName": "Malagasy fiteny"},
    {"code": "ms", "name": "Malay", "nativeName": "bahasa Melayu, بهاس ملايو‎"},
    {"code": "ml", "name": "Malayalam", "nativeName": "മലയാളം"},
    {"code": "mt", "name": "Maltese", "nativeName": "Malti"},
    {"code": "mi", "name": "Māori", "nativeName": "te reo Māori"},
    {"code": "mr", "name": "Marathi (Marāṭhī)", "nativeName": "मराठी"},
    {"code": "mh", "name": "Marshallese", "nativeName": "Kajin M̧ajeļ"},
    {"code": "mn", "name": "Mongolian", "nativeName": "монгол"},
    {"code": "na", "name": "Nauru", "nativeName": "Ekakairũ Naoero"},
    {"code": "nv", "name": "Navajo, Navaho", "nativeName": "Diné bizaad, Dinékʼehǰí"},
    {"code": "nb", "name": "Norwegian Bokmål", "nativeName": "Norsk bokmål"},
    {"code": "nd", "name": "North Ndebele", "nativeName": "isiNdebele"},
    {"code": "ne", "name": "Nepali", "nativeName": "नेपाली"},
    {"code": "ng", "name": "Ndonga", "nativeName": "Owambo"},
    {"code": "nn", "name": "Norwegian Nynorsk", "nativeName": "Norsk nynorsk"},
    {"code": "no", "name": "Norwegian", "nativeName": "Norsk"},
    {"code": "ii", "name": "Nuosu", "nativeName": "ꆈꌠ꒿ Nuosuhxop"},
    {"code": "nr", "name": "South Ndebele", "nativeName": "isiNdebele"},
    {"code": "oc", "name": "Occitan", "nativeName": "Occitan"},
    {"code": "oj", "name": "Ojibwe, Ojibwa", "nativeName": "ᐊᓂᔑᓈᐯᒧᐎᓐ"},
    {"code": "cu", "name": "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic", "nativeName": "ѩзыкъ словѣньскъ"},
    {"code": "om", "name": "Oromo", "nativeName": "Afaan Oromoo"},
    {"code": "or", "name": "Oriya", "nativeName": "ଓଡ଼ିଆ"},
    {"code": "os", "name": "Ossetian, Ossetic", "nativeName": "ирон æвзаг"},
    {"code": "pa", "name": "Panjabi, Punjabi", "nativeName": "ਪੰਜਾਬੀ, پنجابی‎"},
    {"code": "pi", "name": "Pāli", "nativeName": "पाऴि"},
    {"code": "fa", "name": "Persian", "nativeName": "فارسی"},
    {"code": "pl", "name": "Polish", "nativeName": "polski"},
    {"code": "ps", "name": "Pashto, Pushto", "nativeName": "پښتو"},
    {"code": "pt", "name": "Portuguese", "nativeName": "Português"},
    {"code": "qu", "name": "Quechua", "nativeName": "Runa Simi, Kichwa"},
    {"code": "rm", "name": "Romansh", "nativeName": "rumantsch grischun"},
    {"code": "rn", "name": "Kirundi", "nativeName": "kiRundi"},
    {"code": "ro", "name": "Romanian, Moldavian, Moldovan", "nativeName": "română"},
    {"code": "ru", "name": "Russian", "nativeName": "русский язык"},
    {"code": "sa", "name": "Sanskrit (Saṁskṛta)", "nativeName": "संस्कृतम्"},
    {"code": "sc", "name": "Sardinian", "nativeName": "sardu"},
    {"code": "sd", "name": "Sindhi", "nativeName": "सिन्धी, سنڌي، سندھی‎"},
    {"code": "se", "name": "Northern Sami", "nativeName": "Davvisámegiella"},
    {"code": "sm", "name": "Samoan", "nativeName": "gagana faa Samoa"},
    {"code": "sg", "name": "Sango", "nativeName": "yângâ tî sängö"},
    {"code": "sr", "name": "Serbian", "nativeName": "српски језик"},
    {"code": "gd", "name": "Scottish Gaelic; Gaelic", "nativeName": "Gàidhlig"},
    {"code": "sn", "name": "Shona", "nativeName": "chiShona"},
    {"code": "si", "name": "Sinhala, Sinhalese", "nativeName": "සිංහල"},
    {"code": "sk", "name": "Slovak", "nativeName": "slovenčina"},
    {"code": "sl", "name": "Slovene", "nativeName": "slovenščina"},
    {"code": "so", "name": "Somali", "nativeName": "Soomaaliga, af Soomaali"},
    {"code": "st", "name": "Southern Sotho", "nativeName": "Sesotho"},
    {"code": "es", "name": "Spanish; Castilian", "nativeName": "español, castellano"},
    {"code": "su", "name": "Sundanese", "nativeName": "Basa Sunda"},
    {"code": "sw", "name": "Swahili", "nativeName": "Kiswahili"},
    {"code": "ss", "name": "Swati", "nativeName": "SiSwati"},
    {"code": "sv", "name": "Swedish", "nativeName": "svenska"},
    {"code": "ta", "name": "Tamil", "nativeName": "தமிழ்"},
    {"code": "te", "name": "Telugu", "nativeName": "తెలుగు"},
    {"code": "tg", "name": "Tajik", "nativeName": "тоҷикӣ, toğikī, تاجیکی‎"},
    {"code": "th", "name": "Thai", "nativeName": "ไทย"},
    {"code": "ti", "name": "Tigrinya", "nativeName": "ትግርኛ"},
    {"code": "bo", "name": "Tibetan Standard, Tibetan, Central", "nativeName": "བོད་ཡིག"},
    {"code": "tk", "name": "Turkmen", "nativeName": "Türkmen, Түркмен"},
    {"code": "tl", "name": "Tagalog", "nativeName": "Wikang Tagalog"},
    {"code": "tn", "name": "Tswana", "nativeName": "Setswana"},
    {"code": "to", "name": "Tonga (Tonga Islands)", "nativeName": "faka Tonga"},
    {"code": "tr", "name": "Turkish", "nativeName": "Türkçe"},
    {"code": "ts", "name": "Tsonga", "nativeName": "Xitsonga"},
    {"code": "tt", "name": "Tatar", "nativeName": "татарча, tatarça, تاتارچا‎"},
    {"code": "tw", "name": "Twi", "nativeName": "Twi"},
    {"code": "ty", "name": "Tahitian", "nativeName": "Reo Tahiti"},
    {"code": "ug", "name": "Uighur, Uyghur", "nativeName": "Uyƣurqə, ئۇيغۇرچە‎"},
    {"code": "uk", "name": "Ukrainian", "nativeName": "українська"},
    {"code": "ur", "name": "Urdu", "nativeName": "اردو"},
    {"code": "uz", "name": "Uzbek", "nativeName": "zbek, Ўзбек, أۇزبېك‎"},
    {"code": "ve", "name": "Venda", "nativeName": "Tshivenḓa"},
    {"code": "vi", "name": "Vietnamese", "nativeName": "Tiếng Việt"},
    {"code": "vo", "name": "Volapük", "nativeName": "Volapük"},
    {"code": "wa", "name": "Walloon", "nativeName": "Walon"},
    {"code": "cy", "name": "Welsh", "nativeName": "Cymraeg"},
    {"code": "wo", "name": "Wolof", "nativeName": "Wollof"},
    {"code": "fy", "name": "Western Frisian", "nativeName": "Frysk"},
    {"code": "xh", "name": "Xhosa", "nativeName": "isiXhosa"},
    {"code": "yi", "name": "Yiddish", "nativeName": "ייִדיש"},
    {"code": "yo", "name": "Yoruba", "nativeName": "Yorùbá"},
    {"code": "za", "name": "Zhuang, Chuang", "nativeName": "Saɯ cueŋƅ, Saw cuengh"}
];

function isoLanguageGetName(code) {
    for (var cnt = 0; cnt < isoLanguages.length; cnt++) {
        if (isoLanguages[cnt].code == code) {
            if (isoLanguages[cnt].name != isoLanguages[cnt].nativeName)
                return isoLanguages[cnt].name + " (" + isoLanguages[cnt].nativeName + ")";
            else
                return isoLanguages[cnt].name;
        }
    }
    return "UNKNOWN";
}

var language = {
    // GENERAL
    properties: "Properties",
    error: "Error",
    warning: "Warning",
    success: "Success",
    cancel: "Cancel",
    information: "Information",
    save: "Save",
    add: "Add",
    edit: "Edit",
    delete: "Delete",
    copy: "Copy",
    refresh: "Refresh",
    create: "Create",

    // app.js
    translation_None: "None",
    translation_MapFile: "Map File",
    translation_Regex: "Regular Expression",
    translation_Javascript: "JavaScript",
    translation_Exec: "Exec",
    translation_XLS: "XML Style Sheet",
    translation_XPath: "XPath",
    mainTab_Persistence: "Persistence",
    mainTab_PersistenceTip: "Display chart page",
    mainTab_Configuration: "Configuration",
    mainTab_ConfigurationTip: "Display <i>openHAB</i> configuration page",
    mainTab_Automation: "Automation",
    mainTab_AutomationTip: "Automation information",
    mainTab_System: "System",
    mainTab_SystemTip: "Display system information",
    mainTab_OnlineStatus: "Online Status",
    mainTab_UserSettings: "Configure <i>HABmin</i> user settings",
    onlineState_Online: "openHAB is online",
    onlineState_Offline: "openHAB is offline",
    onlineState_Busy: "openHAB is busy",
    newReleaseNotification: "An updated release of <i>HABmin</i> (%s) was made available on %s",
    newPrereleaseNotification: "An new snapshot build of <i>HABmin</i> (%s) was made available on %s",


    personalisation_Language: "Language:",

    //
    zwave_Network: "Network",
    zwave_ProductExplorer: "Product Explorer",

    // config/zwaveDeviceList.js
    zwave_Devices: "Devices",
    zwave_DevicesReloadButton: "Reload Properties",
    zwave_DevicesReloadButtonTip: "Reload the configuration",
    zwave_DevicesHealButton: "Heal",
    zwave_DevicesHealButtonTip: "Start a network heal process",
    zwave_DevicesIncludeButton: "Include",
    zwave_DevicesIncludeButtonTip: "Put the controller into network INCLUDE mode for 30 seconds",
    zwave_DevicesValueUpdateError: "Error sending updated value to the server!",
    zwave_DevicesValueUpdateRangeError: "Value is out of specified range. Please limit the value to between %s and %d.",
    zwave_DevicesActionError: "Error sending action to the server!",
    zwave_DevicesTreeNode: "Node",
    zwave_DevicesTreeValue: "Value",

    // config/zwaveNetwork.js
    zwave_NetworkListening: "Listening",
    zwave_NetworkRouting: "Routing",
    zwave_NetworkPower: "Power",
    zwave_NetworkNeighbors: "Neighbors",

    // config/bindingList.js
    config_BindingListTitle: "Bindings",
    config_BindingListTitleTip: "Binding list",
    config_BindingListBundle: "Bundle",
    config_BindingListName: "Name",
    config_BindingListVersion: "Version",

    // config/bindingProperties.js
    config_BindingPropertiesBinding: "Binding: ",
    config_BindingPropertiesInterfaceName: "Interface Name",
    config_BindingPropertiesInterfaceNamePrompt: "Please enter the new interface name:",
    config_BindingPropertiesInterfaceNameError: "Interface name can only contain alphanumeric characters.",
    config_BindingPropertiesCancelTip: "Cancel changes made to the configuration",
    config_BindingPropertiesSaveTip: "Save changes to the binding configuration",
    config_BindingPropertiesAddTip: "Add an interface to the binding configuration",
    config_BindingPropertiesSaved: "Binding configuration saved",
    config_BindingPropertiesError: "Error saving binding configuration",

    // config/itemList.js
    config_ItemListTitle: "Items and Groups",
    config_ItemListTitleTip: "Configure items and groups",
    config_ItemListDeleteTip: "Delete the item from openHAB",
    config_ItemListConfirmDeleteTitle: "Confirm Delete",
    config_ItemListConfirmDeleteMsg: "Are you sure you want to delete the item '%s'?",
    config_ItemListAddTip: "Add a new item to openHAB",
    config_ItemListRefreshTip: "Refresh the items list",
    config_ItemListCreateItem: "Create Item",
    config_ItemListModelName: "Model Name:",
    config_ItemListSelectModel: "Select Item Model",
    config_ItemListItem: "Item",
    config_ItemListLabel: "Label",
    config_ItemListType: "Type",
    config_ItemListModel: "Model",
    config_ItemListDeleted: "Item '%s' has been deleted.",
    config_ItemListDeleteError: "Error deleting item '%s'.",
    config_ItemListFilterDefault: "filter...",

    // config/itemProperties.js
    config_ItemPropertiesTitleTip: "Item Properties",
    config_ItemPropertiesSetName: "Set the item name.",
    config_ItemPropertiesSetType: "Set the item type.",
    config_ItemPropertiesSetLabel: "Specify the default label used in the UI.",
    config_ItemPropertiesSetUnits: "Specify the unit for this item. This is printed after the value.",
    config_ItemPropertiesSetFormat: "Specify the default format that is used for printing values.",
    config_ItemPropertiesSetTransService: "Define the translation service applicable for the item.",
    config_ItemPropertiesSetTransRule: "Define the translation rule applicable for the item.",
    config_ItemPropertiesSetIcon: "Define the default icon for the item. This is used for the UI.",
    config_ItemPropertiesSetGroups: "List groups that this item is entered. Groups must be changed in the 'Groups' tab.",
    config_ItemPropertiesSetPersistence: "Lists persistence services configured for this item.",
    config_ItemPropertiesItemName: "Item Name",
    config_ItemPropertiesItemType: "Item Type",
    config_ItemPropertiesTranslationService: "Translation Service",
    config_ItemPropertiesTranslationRule: "Translation Rule",
    config_ItemPropertiesPersistence: "Persistence",
    config_ItemPropertiesGroups: "Groups",
    config_ItemPropertiesCancelChangeTip: "Cancel changes made to the item configuration",
    config_ItemPropertiesSaveChangeTip: "Save changes to the item configuration",
    config_ItemPropertiesSaveOk: "Item configuration saved successfully",
    config_ItemPropertiesSaveError: "Error saving item configuration",
    config_ItemPropertiesNothingSaved: "No changes detected. No updates have been made to the server.",

    // config/itemRules.js
    config_ItemRulesTitle: "Rules",
    config_ItemRulesAddTip: "Add the rule to this item",
    config_ItemRulesDeleteTip: "Delete the rule from this item",
    config_ItemRulesConfirmDelete: "Confirm Delete",
    config_ItemRulesConfirmDeleteMsg: "Are you sure you want to delete the rule '%s'?",
    config_ItemRulesName: "Name",
    config_ItemRulesItem: "Item",
    config_ItemRulesDescription: "Description",
    config_ItemRulesDeletedOk: "Rule '%s' successfully removed from item '%s'",
    config_ItemRulesDeletedError: "Error deleting rule '%s' from item '%s'",
    config_ItemRulesAdd: "Specify Rule Parameters",

    // config/itemBindings.js
    config_ItemBindingsTitle: "Bindings",
    config_ItemBindingsDeleteTip: "Delete the item binding",
    config_ItemBindingsAddTip: "Add a new item binding",
    config_ItemBindingsNewBinding: "New Binding",
    config_ItemBindingsBinding: "Binding",
    config_ItemBindingsBinding: "Config",
    config_ItemBindingsDefaultName: "Binding Name",
    config_ItemBindingsDefaultString: "Binding String",
    config_ItemBindingsUpdate: "Update data",

    // config/groupTree.js
    config_GroupsTitle: "Groups",

    // config/mappingList.js
    config_MappingListTitle: "Translation Rules",
    config_MappingListTitleTip: "Translation rule list",

    // config/mappingProperties.js
    config_MappingPropertiesTip: "Translation rule configuration",
    config_MappingPropertiesCancelTip: "Cancel changes made to the lookup table",
    config_MappingPropertiesSaveTip: "Save changes to the lookup table",
    config_MappingPropertiesAddTip: "Add a row to the lookup table",
    config_MappingPropertiesDeleteTip: "Remove highlighted row from the lookup table",
    config_MappingPropertiesNewLabel: "New Label",
    config_MappingPropertiesGridTitle: "Mapping Properties",
    config_MappingPropertiesGridMinimum: "Minimum",
    config_MappingPropertiesGridMaximum: "Maximum",
    config_MappingPropertiesGridLabel: "Label",
    config_MappingPropertiesGridValue: "Value",
    config_MappingPropertiesGridIcon: "Icon",

    // config/sitemapList.js
    config_SitemapListTitle: "Sitemaps",
    config_SitemapListTitleTip: "Sitemap list",
    config_SitemapListDeleteTip: "Delete the sitemap from openHAB",
    config_SitemapListDeleteMsg: "Are you sure you want to delete the sitemap '%s'?",
    config_SitemapListAddTip: "Add a new sitemap to openHAB",
    config_SitemapListSitemapName: "Sitemap Name",
    config_SitemapListNewSitemapMsg: "Please enter the new sitemap name:",
    config_SitemapListCopyTip: "Copy the selected sitemap as a new sitemap",
    config_SitemapListCopySitemapMsg: "Please enter the new sitemap name:",
    config_SitemapListRefreshTip: "Refresh the sitemap list",
    config_SitemapListName: "Name",
    config_SitemapListLabel: "Label",
    config_SitemapListSitemapDeleteOk: "Sitemap '%s' deleted",
    config_SitemapListSitemapDeleteErr: "Error deleting sitemap '%s'",
    config_SitemapListSitemapCreateOk: "Sitemap '%s' created successfully",
    config_SitemapListSitemapCreateErr: "Error creating sitemap '%s'",
    config_SitemapListFormatError: "Sitemap name can only contain alphanumeric characters.",

    // config/sitemapProperties.js
    config_SitemapPropertiesTip: "Sitemap Properties",
    config_SitemapHelpHeight: "Set the height of the widget in the UI",
    config_SitemapHelpItem: "Select the item attached to this widget",
    config_SitemapHelpIcon: "Override the item icon. Leave blank to use the default for this item",
    config_SitemapHelpLabel: "Override the item label. Leave blank to use the default for this item",
    config_SitemapHelpFormat: "Overrides the item formatting. Must be used with label.",
    config_SitemapHelpUnits: "Overrides the item formatting. Must be used with label.",
    config_SitemapHelpTranslateSvc: "Overrides the translate service",
    config_SitemapHelpTranslateRule: "Overrides the translate rule",
    config_SitemapHelpMapping: "Mapping values for switch.",
    config_SitemapHelpMax: "Set the maximum allowable value",
    config_SitemapHelpMin: "Set the minimum allowable value",
    config_SitemapHelpPeriod: "?",
    config_SitemapHelpRefresh: "?",
    config_SitemapHelpFrequency: "?",
    config_SitemapHelpSeparator: "?",
    config_SitemapHelpService: "?",
    config_SitemapHelpStep: "Set the step value",
    config_SitemapHelpSwitchSupport: "?",
    config_SitemapHelpURL: "Set the URL attached to this widget",
    config_SitemapHelpVisibility: "Visibility",
    config_SitemapHelpLabelColor: "Label Color",
    config_SitemapHelpValueColor: "Value Color",
    config_SitemapPropertiesItem: "Item",
    config_SitemapPropertiesIcon: "Icon",
    config_SitemapPropertiesFormat: "Format",
    config_SitemapPropertiesUnits: "Units",
    config_SitemapPropertiesLabel: "Label",
    config_SitemapPropertiesTranslationService: "Translation Service",
    config_SitemapPropertiesMapping: "Mapping",
    config_SitemapPropertiesTranslationRule: "Translation Rule",
    config_SitemapPropertiesMaximum: "Maximum",
    config_SitemapPropertiesMinimum: "Minimum",
    config_SitemapPropertiesService: "Service",
    config_SitemapPropertiesStep: "Step",
    config_SitemapPropertiesCommand: "Command",
    config_SitemapPropertiesSendFrequency: "Send Frequency",
    config_SitemapPropertiesSwitchSupport: "Switch Support",
    config_SitemapPropertiesURL: "URL",
    config_SitemapPropertiesHeight: "Height",
    config_SitemapPropertiesRefreshPeriod: "Refresh Period",
    config_SitemapPropertiesUpdate: "Update data",
    config_SitemapPropertiesDeleteWidget: "Delete this widget and its children",
    config_SitemapPropertiesDeleteWidgetMsg: "Are you sure you want to delete the selected widget and all its children?",
    config_SitemapPropertiesDeleteWidgetConfirm: "Confirm Delete",
    config_SitemapPropertiesWidgets: "Widgets",
    config_SitemapPropertiesConfiguration: "Sitemap Configuration",
    config_SitemapPropertiesExpand: "Expand sitemap",
    config_SitemapPropertiesSave: 'Save sitemap',
    config_SitemapPropertiesSaveOk: "Sitemap configuration saved",
    config_SitemapPropertiesSaveErr: "Error saving sitemap",
    config_SitemapPropertiesFrameErr: "Frames must have children [%s]",
    config_SitemapPropertiesLabelWidget: "Widget",
    config_SitemapPropertiesLabelItem: "Item",
    config_SitemapPropertiesLabelLabel: "Label",

    // graph/graph.js
    chartTab_Chart: "Chart",
    chartTab_Table: "Table",

    // graph/itemList.js
    graph_ItemList: "Item List",
    graph_ItemListTip: "Select items to be graphed",
    graph_ItemListUpdate: "Update",
    graph_ItemListUpdateTip: "Retrieve the currently selected channels",
    graph_ItemListSave: "Save Graph",
    graph_ItemListSaveTip: "Save current chart configuration",
    graph_ItemListReset: "Reset List",
    graph_ItemListResetTip: "Clear Selected Channels and Reset Period",
    graph_ItemListFilterDefault: "filter",
    graph_ItemTitle: "Item",
    graph_LastValue: "Last Value",
    graph_ItemIcon: "Item Icon",

    // graph/graphList.js
    graph_GraphList: "Graph List",
    graph_GraphListTip: "Display predefined graphs",
    graph_GraphListDeleteTip: "Delete the selected graph definition",
    graph_GraphListEditTip: "Edit the selected graph definition",
    graph_GraphListDownloadError: "Error downloading chart definition '%s'.",
    graph_GraphListDeleteOk: "Graph definition '%s' successfully deleted.",
    graph_GraphListDeleteError: "Error deleting graph definition '%s'.",
    graph_GraphListConfirmDeleteMsg: "Are you sure you wish to delete the chart '%s'?",

    // graph/saveGraph.js
    graph_SaveGraphTitle: "Save Graph",
    graph_SaveGraphError: "Error saving graph '%s'!",
    graph_SaveGraphSuccess: "Graph '%s' saved successfully.",
    graph_SaveGraphLine: "Line",
    graph_SaveGraphSpline: "Spline",
    graph_SaveGraphBar: "Bar",
    graph_SaveGraphArea: "Area",
    graph_SaveGraphAreaSpline: "Area Spline",
    graph_SaveGraphColumn: "Column",
    graph_SaveGraphItemConfig: "Item Configuration",
    graph_SaveGraphItemAxis: "Axis",
    graph_SaveGraphItemItem: "Item",
    graph_SaveGraphItemLabel: "Label",
    graph_SaveGraphItemChart: "Chart",
    graph_SaveGraphItemLegend: "Legend",
    graph_SaveGraphItemLine: "Line",
    graph_SaveGraphItemLineColor: "Color",
    graph_SaveGraphItemLineWidth: "Width",
    graph_SaveGraphItemLineStyle: "Style",
    graph_SaveGraphItemMarker: "Marker",
    graph_SaveGraphItemMarkerColor: "Color",
    graph_SaveGraphItemMarkerSymbol: "Symbol",
    graph_SaveGraphAxisConfig: "Axis Configuration",
    graph_SaveGraphAxisAxis: "Axis",
    graph_SaveGraphAxisTitle: "Title",
    graph_SaveGraphAxisFormat: "Format",
    graph_SaveGraphAxisMinimum: "Minimum",
    graph_SaveGraphAxisMaximum: "Maximum",
    graph_SaveGraphAxisNumberError: "Value must be a number",
    graph_SaveGraphAxisPosition: "Position",
    graph_SaveGraphChartConfig: "Chart Configuration",
    graph_SaveGraphName: "Name",
    graph_SaveGraphPeriod: "Period",
    graph_SaveGraphIcon: "Icon",
    graph_SaveGraphPeriod1Hour: "1 Hour",
    graph_SaveGraphPeriod2Hours: "2 Hours",
    graph_SaveGraphPeriod3Hours: "3 Hours",
    graph_SaveGraphPeriod4Hours: "4 Hours",
    graph_SaveGraphPeriod6Hours: "6 Hours",
    graph_SaveGraphPeriod12Hours: "12 Hours",
    graph_SaveGraphPeriod1Day: "1 Day",
    graph_SaveGraphPeriod2Days: "2 Days",
    graph_SaveGraphPeriod3Days: "3 Days",
    graph_SaveGraphPeriod4Days: "4 Days",
    graph_SaveGraphPeriod5Days: "5 Days",
    graph_SaveGraphPeriod10Days: "10 Days",
    graph_SaveGraphPeriod1Week: "1 Week",
    graph_SaveGraphPeriod2Weeks: "2 Weeks",

    // graph/graphHighcharts.js
    graph_HighchartsTitle: "Chart",
    graph_HighchartsLoading: "Downloading graph data...",
    graph_HighchartsZoomIn: "Zoom In",
    graph_HighchartsZoomOut: "Zoom Out",
    graph_HighchartsDisplayDay: "Display last day",
    graph_HighchartsDisplayWeek: "Display last week",
    graph_HighchartsDisplayMonth: "Display last month",
    graph_HighchartsDisplayYear: "Display last year",
    graph_HighchartsScrollLeft: "Scroll left",
    graph_HighchartsScrollRight: "Scroll right",

    // automation/ruleFileList.js
    rule_FileListTitle: "Rule Models",
    rule_FileListAddTip: "Add a new rule model to openHAB",
    rule_FileListCreateButton: "Create Model",
    rule_FileListCreateWindow: "Specify Model Name",
    rule_FileListModel: "Model",
    rule_FileListRule: "Rule",

    // automation/ruleEditor.js
    rule_EditorCancelTip: "Cancel changes made to the rule file",
    rule_EditorSaveTip: "Save changes to the rule file",
    rule_EditorUndoTip: "Undo changes",
    rule_EditorRedoTip: "Redo changes",
    rule_EditorIncreaseFontTip: "Increase font size",
    rule_EditorDecreaseFontTip: "Decrease font size",
    rule_EditorAddTemplateTip: "Add openHAB rule template at cursor location",
    rule_EditorAddItemTip: "Add openHAB item name at cursor location",
    rule_EditorAddItemName: "Item name:",
    rule_EditorInsertItem: "Insert Item",
    rule_EditorSelectItemName: "Select Item Name",
    rule_EditorAddTimerTip: "Add timer definition at cursor location",
    rule_EditorTimeRule: "Time Rule:",
    rule_EditorInsertTimer: "Insert Timer",
    rule_EditorSelectTimer: "Select Timer",
    rule_EditorErrorSavingRule: "Error saving rule model '%s'",
    rule_EditorSaveOk: "Rule model '%s' saved successfully.",
    rule_EditorErrorLoadingRule: "Error loading rule model '%s'",
    rule_EditorCreatedOk: "Rule model '%s' created successfully.",
    rule_EditorLoadedOk: "Rule model '%s' loaded successfully.",
    rule_EditorErrorNoModel: "Error loading rule model - no model defined",

    // automation/ruleProperties.js
    rule_DesignerSaveTip: "Save changes to the rule",
    rule_DesignerCancelTip: "Cancel the changes made to the rule",
    rule_DesignerToolboxLogic: "Logic",
    rule_DesignerToolboxLoops: "Loops",
    rule_DesignerToolboxMath: "Math",
    rule_DesignerToolboxItems: "Items",
    rule_DesignerToolboxFunctions: "Functions",
    rule_DesignerToolboxLibrary: "Library",
    rule_DesignerErrorSavingRule: "Error saving rule '%s'.",
    rule_DesignerSaveOk: "Rule '%s' saved successfully.",
    rule_ListConfirmDeleteTitle: "Delete Rule",
    rule_ListConfirmDeleteMsg: "Are you sure you want to delete the rule '%s'",
    rule_DesignerErrorReadingRule: "Error reading rule!",
    rule_DesignerErrorReadingRuleName: "Error reading rule name!",
    rule_DesignerIdError: "ID Consistency error saving rule '%s'. Rule may have been duplicated.",
    rule_DesignerRuleName: "Rule Name:",
    rule_DesignerRuleTooltip: "Initialises a new openHAB rule. The rule name is set in the box.",
    rule_DesignerNewRule: "New Rule",

    // automation/ruleLibrary.js
    rule_LibraryTitle: "Rule Library",
    rule_LibraryRule: "Rule",

    // automation/ruleList.js
    rule_ListTitle: "Rules",
    rule_ListItem: "Item",
    rule_ListRule: "Rule",
    rule_ListDeleteTip: "Delete the selected rule",
    rule_ListAddTip: "Add a new rule",

    // automation/notificationList.js
    notification_ListTitle: "Notifications"
};
