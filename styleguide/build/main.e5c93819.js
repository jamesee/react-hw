(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(t,e,s){"use strict";s.r(e),s.d(e,"ImageSearch",(function(){return p}));var i=s(51),r=s(42),n=s(0),a=s(57),o=s(210),c=s(4),p=function ImageSearch(t){var e=Object(n.useState)(""),s=Object(r.a)(e,2),p=s[0],j=s[1],l=t.pagination,_=t.setPagination,h=t.searchText,S=function onSubmit(t){t.preventDefault(),j(""!==p?p:"nature"),localStorage.setItem("queryTerm",p),_(Object(i.a)(Object(i.a)({},l),{},{page:1})),h(p||localStorage.getItem("queryTerm"))};return Object(c.jsx)("div",{className:"max-w-md rounded",children:Object(c.jsx)("form",{onSubmit:S,className:"w-full max-w-sm",children:Object(c.jsxs)("div",{className:"flex items-center py-2",children:[Object(c.jsx)("input",{required:!0,onChange:function onChange(t){return j(t.target.value)},className:"w-150 h-10  appearance-none  bg-transparent  border-pink-500  w-full  text-gray-700  m-3  py-1 px-2  leading-tight  focus:outline-none",type:"text",placeholder:null!==localStorage.getItem("queryTerm")?localStorage.getItem("queryTerm"):"Search Image Term..."}),Object(c.jsx)(a.Button,{type:"button",className:" h-10 w-20 bg-transparent  text-pink-700  font-semibold  p-2  border  hover:bg-gray-100  rounded-2xl focus:ring-pink-900 ",onClick:S,children:Object(c.jsx)(o.a,{className:"m-0 w-5 h-5 stroke-current text-pink-600"})})]})})})}},132:function(t,e,s){"use strict";s.r(e),s.d(e,"Layout",(function(){return n}));var i=s(136),r=s(4),n=function Layout(t){return Object(r.jsxs)("div",{children:[Object(r.jsx)(i.NavBar,{}),Object(r.jsx)("main",{children:t.children})]})}},136:function(t,e,s){"use strict";s.r(e),s.d(e,"NavBar",(function(){return p}));var i=s(141),r=s(0),n=s(99),a=s.n(n),o=s(98),c=s(4),p=function NavBar(){var t=Object(r.useContext)(o.a);return Object(c.jsxs)("header",{className:a.a.header,children:[Object(c.jsx)("div",{className:a.a.logo,children:"FrontendDev-Capstone"}),Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(i.a,{to:"/",children:"Gallery"})}),Object(c.jsx)("li",{children:Object(c.jsxs)(i.a,{to:"/collections",children:["My Collections",Object(c.jsx)("span",{className:a.a.badge,children:t.totalCollections})]})})]})})]})}},214:function(t,e,s){s(215),t.exports=s(824)},215:function(t,e,s){},395:function(t,e,s){var i={"./Binary_Property/ASCII.js":396,"./Binary_Property/ASCII_Hex_Digit.js":397,"./Binary_Property/Alphabetic.js":398,"./Binary_Property/Any.js":399,"./Binary_Property/Assigned.js":400,"./Binary_Property/Bidi_Control.js":401,"./Binary_Property/Bidi_Mirrored.js":402,"./Binary_Property/Case_Ignorable.js":403,"./Binary_Property/Cased.js":404,"./Binary_Property/Changes_When_Casefolded.js":405,"./Binary_Property/Changes_When_Casemapped.js":406,"./Binary_Property/Changes_When_Lowercased.js":407,"./Binary_Property/Changes_When_NFKC_Casefolded.js":408,"./Binary_Property/Changes_When_Titlecased.js":409,"./Binary_Property/Changes_When_Uppercased.js":410,"./Binary_Property/Dash.js":411,"./Binary_Property/Default_Ignorable_Code_Point.js":412,"./Binary_Property/Deprecated.js":413,"./Binary_Property/Diacritic.js":414,"./Binary_Property/Emoji.js":415,"./Binary_Property/Emoji_Component.js":416,"./Binary_Property/Emoji_Modifier.js":417,"./Binary_Property/Emoji_Modifier_Base.js":418,"./Binary_Property/Emoji_Presentation.js":419,"./Binary_Property/Extended_Pictographic.js":420,"./Binary_Property/Extender.js":421,"./Binary_Property/Grapheme_Base.js":422,"./Binary_Property/Grapheme_Extend.js":423,"./Binary_Property/Hex_Digit.js":424,"./Binary_Property/IDS_Binary_Operator.js":425,"./Binary_Property/IDS_Trinary_Operator.js":426,"./Binary_Property/ID_Continue.js":427,"./Binary_Property/ID_Start.js":428,"./Binary_Property/Ideographic.js":429,"./Binary_Property/Join_Control.js":430,"./Binary_Property/Logical_Order_Exception.js":431,"./Binary_Property/Lowercase.js":432,"./Binary_Property/Math.js":433,"./Binary_Property/Noncharacter_Code_Point.js":434,"./Binary_Property/Pattern_Syntax.js":435,"./Binary_Property/Pattern_White_Space.js":436,"./Binary_Property/Quotation_Mark.js":437,"./Binary_Property/Radical.js":438,"./Binary_Property/Regional_Indicator.js":439,"./Binary_Property/Sentence_Terminal.js":440,"./Binary_Property/Soft_Dotted.js":441,"./Binary_Property/Terminal_Punctuation.js":442,"./Binary_Property/Unified_Ideograph.js":443,"./Binary_Property/Uppercase.js":444,"./Binary_Property/Variation_Selector.js":445,"./Binary_Property/White_Space.js":446,"./Binary_Property/XID_Continue.js":447,"./Binary_Property/XID_Start.js":448,"./General_Category/Cased_Letter.js":449,"./General_Category/Close_Punctuation.js":450,"./General_Category/Connector_Punctuation.js":451,"./General_Category/Control.js":452,"./General_Category/Currency_Symbol.js":453,"./General_Category/Dash_Punctuation.js":454,"./General_Category/Decimal_Number.js":455,"./General_Category/Enclosing_Mark.js":456,"./General_Category/Final_Punctuation.js":457,"./General_Category/Format.js":458,"./General_Category/Initial_Punctuation.js":459,"./General_Category/Letter.js":460,"./General_Category/Letter_Number.js":461,"./General_Category/Line_Separator.js":462,"./General_Category/Lowercase_Letter.js":463,"./General_Category/Mark.js":464,"./General_Category/Math_Symbol.js":465,"./General_Category/Modifier_Letter.js":466,"./General_Category/Modifier_Symbol.js":467,"./General_Category/Nonspacing_Mark.js":468,"./General_Category/Number.js":469,"./General_Category/Open_Punctuation.js":470,"./General_Category/Other.js":471,"./General_Category/Other_Letter.js":472,"./General_Category/Other_Number.js":473,"./General_Category/Other_Punctuation.js":474,"./General_Category/Other_Symbol.js":475,"./General_Category/Paragraph_Separator.js":476,"./General_Category/Private_Use.js":477,"./General_Category/Punctuation.js":478,"./General_Category/Separator.js":479,"./General_Category/Space_Separator.js":480,"./General_Category/Spacing_Mark.js":481,"./General_Category/Surrogate.js":482,"./General_Category/Symbol.js":483,"./General_Category/Titlecase_Letter.js":484,"./General_Category/Unassigned.js":485,"./General_Category/Uppercase_Letter.js":486,"./Script/Adlam.js":487,"./Script/Ahom.js":488,"./Script/Anatolian_Hieroglyphs.js":489,"./Script/Arabic.js":490,"./Script/Armenian.js":491,"./Script/Avestan.js":492,"./Script/Balinese.js":493,"./Script/Bamum.js":494,"./Script/Bassa_Vah.js":495,"./Script/Batak.js":496,"./Script/Bengali.js":497,"./Script/Bhaiksuki.js":498,"./Script/Bopomofo.js":499,"./Script/Brahmi.js":500,"./Script/Braille.js":501,"./Script/Buginese.js":502,"./Script/Buhid.js":503,"./Script/Canadian_Aboriginal.js":504,"./Script/Carian.js":505,"./Script/Caucasian_Albanian.js":506,"./Script/Chakma.js":507,"./Script/Cham.js":508,"./Script/Cherokee.js":509,"./Script/Chorasmian.js":510,"./Script/Common.js":511,"./Script/Coptic.js":512,"./Script/Cuneiform.js":513,"./Script/Cypriot.js":514,"./Script/Cyrillic.js":515,"./Script/Deseret.js":516,"./Script/Devanagari.js":517,"./Script/Dives_Akuru.js":518,"./Script/Dogra.js":519,"./Script/Duployan.js":520,"./Script/Egyptian_Hieroglyphs.js":521,"./Script/Elbasan.js":522,"./Script/Elymaic.js":523,"./Script/Ethiopic.js":524,"./Script/Georgian.js":525,"./Script/Glagolitic.js":526,"./Script/Gothic.js":527,"./Script/Grantha.js":528,"./Script/Greek.js":529,"./Script/Gujarati.js":530,"./Script/Gunjala_Gondi.js":531,"./Script/Gurmukhi.js":532,"./Script/Han.js":533,"./Script/Hangul.js":534,"./Script/Hanifi_Rohingya.js":535,"./Script/Hanunoo.js":536,"./Script/Hatran.js":537,"./Script/Hebrew.js":538,"./Script/Hiragana.js":539,"./Script/Imperial_Aramaic.js":540,"./Script/Inherited.js":541,"./Script/Inscriptional_Pahlavi.js":542,"./Script/Inscriptional_Parthian.js":543,"./Script/Javanese.js":544,"./Script/Kaithi.js":545,"./Script/Kannada.js":546,"./Script/Katakana.js":547,"./Script/Kayah_Li.js":548,"./Script/Kharoshthi.js":549,"./Script/Khitan_Small_Script.js":550,"./Script/Khmer.js":551,"./Script/Khojki.js":552,"./Script/Khudawadi.js":553,"./Script/Lao.js":554,"./Script/Latin.js":555,"./Script/Lepcha.js":556,"./Script/Limbu.js":557,"./Script/Linear_A.js":558,"./Script/Linear_B.js":559,"./Script/Lisu.js":560,"./Script/Lycian.js":561,"./Script/Lydian.js":562,"./Script/Mahajani.js":563,"./Script/Makasar.js":564,"./Script/Malayalam.js":565,"./Script/Mandaic.js":566,"./Script/Manichaean.js":567,"./Script/Marchen.js":568,"./Script/Masaram_Gondi.js":569,"./Script/Medefaidrin.js":570,"./Script/Meetei_Mayek.js":571,"./Script/Mende_Kikakui.js":572,"./Script/Meroitic_Cursive.js":573,"./Script/Meroitic_Hieroglyphs.js":574,"./Script/Miao.js":575,"./Script/Modi.js":576,"./Script/Mongolian.js":577,"./Script/Mro.js":578,"./Script/Multani.js":579,"./Script/Myanmar.js":580,"./Script/Nabataean.js":581,"./Script/Nandinagari.js":582,"./Script/New_Tai_Lue.js":583,"./Script/Newa.js":584,"./Script/Nko.js":585,"./Script/Nushu.js":586,"./Script/Nyiakeng_Puachue_Hmong.js":587,"./Script/Ogham.js":588,"./Script/Ol_Chiki.js":589,"./Script/Old_Hungarian.js":590,"./Script/Old_Italic.js":591,"./Script/Old_North_Arabian.js":592,"./Script/Old_Permic.js":593,"./Script/Old_Persian.js":594,"./Script/Old_Sogdian.js":595,"./Script/Old_South_Arabian.js":596,"./Script/Old_Turkic.js":597,"./Script/Oriya.js":598,"./Script/Osage.js":599,"./Script/Osmanya.js":600,"./Script/Pahawh_Hmong.js":601,"./Script/Palmyrene.js":602,"./Script/Pau_Cin_Hau.js":603,"./Script/Phags_Pa.js":604,"./Script/Phoenician.js":605,"./Script/Psalter_Pahlavi.js":606,"./Script/Rejang.js":607,"./Script/Runic.js":608,"./Script/Samaritan.js":609,"./Script/Saurashtra.js":610,"./Script/Sharada.js":611,"./Script/Shavian.js":612,"./Script/Siddham.js":613,"./Script/SignWriting.js":614,"./Script/Sinhala.js":615,"./Script/Sogdian.js":616,"./Script/Sora_Sompeng.js":617,"./Script/Soyombo.js":618,"./Script/Sundanese.js":619,"./Script/Syloti_Nagri.js":620,"./Script/Syriac.js":621,"./Script/Tagalog.js":622,"./Script/Tagbanwa.js":623,"./Script/Tai_Le.js":624,"./Script/Tai_Tham.js":625,"./Script/Tai_Viet.js":626,"./Script/Takri.js":627,"./Script/Tamil.js":628,"./Script/Tangut.js":629,"./Script/Telugu.js":630,"./Script/Thaana.js":631,"./Script/Thai.js":632,"./Script/Tibetan.js":633,"./Script/Tifinagh.js":634,"./Script/Tirhuta.js":635,"./Script/Ugaritic.js":636,"./Script/Vai.js":637,"./Script/Wancho.js":638,"./Script/Warang_Citi.js":639,"./Script/Yezidi.js":640,"./Script/Yi.js":641,"./Script/Zanabazar_Square.js":642,"./Script_Extensions/Adlam.js":643,"./Script_Extensions/Ahom.js":644,"./Script_Extensions/Anatolian_Hieroglyphs.js":645,"./Script_Extensions/Arabic.js":646,"./Script_Extensions/Armenian.js":647,"./Script_Extensions/Avestan.js":648,"./Script_Extensions/Balinese.js":649,"./Script_Extensions/Bamum.js":650,"./Script_Extensions/Bassa_Vah.js":651,"./Script_Extensions/Batak.js":652,"./Script_Extensions/Bengali.js":653,"./Script_Extensions/Bhaiksuki.js":654,"./Script_Extensions/Bopomofo.js":655,"./Script_Extensions/Brahmi.js":656,"./Script_Extensions/Braille.js":657,"./Script_Extensions/Buginese.js":658,"./Script_Extensions/Buhid.js":659,"./Script_Extensions/Canadian_Aboriginal.js":660,"./Script_Extensions/Carian.js":661,"./Script_Extensions/Caucasian_Albanian.js":662,"./Script_Extensions/Chakma.js":663,"./Script_Extensions/Cham.js":664,"./Script_Extensions/Cherokee.js":665,"./Script_Extensions/Chorasmian.js":666,"./Script_Extensions/Common.js":667,"./Script_Extensions/Coptic.js":668,"./Script_Extensions/Cuneiform.js":669,"./Script_Extensions/Cypriot.js":670,"./Script_Extensions/Cyrillic.js":671,"./Script_Extensions/Deseret.js":672,"./Script_Extensions/Devanagari.js":673,"./Script_Extensions/Dives_Akuru.js":674,"./Script_Extensions/Dogra.js":675,"./Script_Extensions/Duployan.js":676,"./Script_Extensions/Egyptian_Hieroglyphs.js":677,"./Script_Extensions/Elbasan.js":678,"./Script_Extensions/Elymaic.js":679,"./Script_Extensions/Ethiopic.js":680,"./Script_Extensions/Georgian.js":681,"./Script_Extensions/Glagolitic.js":682,"./Script_Extensions/Gothic.js":683,"./Script_Extensions/Grantha.js":684,"./Script_Extensions/Greek.js":685,"./Script_Extensions/Gujarati.js":686,"./Script_Extensions/Gunjala_Gondi.js":687,"./Script_Extensions/Gurmukhi.js":688,"./Script_Extensions/Han.js":689,"./Script_Extensions/Hangul.js":690,"./Script_Extensions/Hanifi_Rohingya.js":691,"./Script_Extensions/Hanunoo.js":692,"./Script_Extensions/Hatran.js":693,"./Script_Extensions/Hebrew.js":694,"./Script_Extensions/Hiragana.js":695,"./Script_Extensions/Imperial_Aramaic.js":696,"./Script_Extensions/Inherited.js":697,"./Script_Extensions/Inscriptional_Pahlavi.js":698,"./Script_Extensions/Inscriptional_Parthian.js":699,"./Script_Extensions/Javanese.js":700,"./Script_Extensions/Kaithi.js":701,"./Script_Extensions/Kannada.js":702,"./Script_Extensions/Katakana.js":703,"./Script_Extensions/Kayah_Li.js":704,"./Script_Extensions/Kharoshthi.js":705,"./Script_Extensions/Khitan_Small_Script.js":706,"./Script_Extensions/Khmer.js":707,"./Script_Extensions/Khojki.js":708,"./Script_Extensions/Khudawadi.js":709,"./Script_Extensions/Lao.js":710,"./Script_Extensions/Latin.js":711,"./Script_Extensions/Lepcha.js":712,"./Script_Extensions/Limbu.js":713,"./Script_Extensions/Linear_A.js":714,"./Script_Extensions/Linear_B.js":715,"./Script_Extensions/Lisu.js":716,"./Script_Extensions/Lycian.js":717,"./Script_Extensions/Lydian.js":718,"./Script_Extensions/Mahajani.js":719,"./Script_Extensions/Makasar.js":720,"./Script_Extensions/Malayalam.js":721,"./Script_Extensions/Mandaic.js":722,"./Script_Extensions/Manichaean.js":723,"./Script_Extensions/Marchen.js":724,"./Script_Extensions/Masaram_Gondi.js":725,"./Script_Extensions/Medefaidrin.js":726,"./Script_Extensions/Meetei_Mayek.js":727,"./Script_Extensions/Mende_Kikakui.js":728,"./Script_Extensions/Meroitic_Cursive.js":729,"./Script_Extensions/Meroitic_Hieroglyphs.js":730,"./Script_Extensions/Miao.js":731,"./Script_Extensions/Modi.js":732,"./Script_Extensions/Mongolian.js":733,"./Script_Extensions/Mro.js":734,"./Script_Extensions/Multani.js":735,"./Script_Extensions/Myanmar.js":736,"./Script_Extensions/Nabataean.js":737,"./Script_Extensions/Nandinagari.js":738,"./Script_Extensions/New_Tai_Lue.js":739,"./Script_Extensions/Newa.js":740,"./Script_Extensions/Nko.js":741,"./Script_Extensions/Nushu.js":742,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":743,"./Script_Extensions/Ogham.js":744,"./Script_Extensions/Ol_Chiki.js":745,"./Script_Extensions/Old_Hungarian.js":746,"./Script_Extensions/Old_Italic.js":747,"./Script_Extensions/Old_North_Arabian.js":748,"./Script_Extensions/Old_Permic.js":749,"./Script_Extensions/Old_Persian.js":750,"./Script_Extensions/Old_Sogdian.js":751,"./Script_Extensions/Old_South_Arabian.js":752,"./Script_Extensions/Old_Turkic.js":753,"./Script_Extensions/Oriya.js":754,"./Script_Extensions/Osage.js":755,"./Script_Extensions/Osmanya.js":756,"./Script_Extensions/Pahawh_Hmong.js":757,"./Script_Extensions/Palmyrene.js":758,"./Script_Extensions/Pau_Cin_Hau.js":759,"./Script_Extensions/Phags_Pa.js":760,"./Script_Extensions/Phoenician.js":761,"./Script_Extensions/Psalter_Pahlavi.js":762,"./Script_Extensions/Rejang.js":763,"./Script_Extensions/Runic.js":764,"./Script_Extensions/Samaritan.js":765,"./Script_Extensions/Saurashtra.js":766,"./Script_Extensions/Sharada.js":767,"./Script_Extensions/Shavian.js":768,"./Script_Extensions/Siddham.js":769,"./Script_Extensions/SignWriting.js":770,"./Script_Extensions/Sinhala.js":771,"./Script_Extensions/Sogdian.js":772,"./Script_Extensions/Sora_Sompeng.js":773,"./Script_Extensions/Soyombo.js":774,"./Script_Extensions/Sundanese.js":775,"./Script_Extensions/Syloti_Nagri.js":776,"./Script_Extensions/Syriac.js":777,"./Script_Extensions/Tagalog.js":778,"./Script_Extensions/Tagbanwa.js":779,"./Script_Extensions/Tai_Le.js":780,"./Script_Extensions/Tai_Tham.js":781,"./Script_Extensions/Tai_Viet.js":782,"./Script_Extensions/Takri.js":783,"./Script_Extensions/Tamil.js":784,"./Script_Extensions/Tangut.js":785,"./Script_Extensions/Telugu.js":786,"./Script_Extensions/Thaana.js":787,"./Script_Extensions/Thai.js":788,"./Script_Extensions/Tibetan.js":789,"./Script_Extensions/Tifinagh.js":790,"./Script_Extensions/Tirhuta.js":791,"./Script_Extensions/Ugaritic.js":792,"./Script_Extensions/Vai.js":793,"./Script_Extensions/Wancho.js":794,"./Script_Extensions/Warang_Citi.js":795,"./Script_Extensions/Yezidi.js":796,"./Script_Extensions/Yi.js":797,"./Script_Extensions/Zanabazar_Square.js":798,"./index.js":799,"./unicode-version.js":800};function webpackContext(t){var e=webpackContextResolve(t);return s(e)}function webpackContextResolve(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}webpackContext.keys=function webpackContextKeys(){return Object.keys(i)},webpackContext.resolve=webpackContextResolve,t.exports=webpackContext,webpackContext.id=395},57:function(t,e,s){"use strict";s.r(e),s.d(e,"Button",(function(){return c}));var i=s(51),r=s(211),n=s(207),a=s.n(n),o=s(4),c=function Button(t){var e=t.type,s=void 0===e?"button":e,n=t.variant,c=t.render,j=Object(r.a)(t,["type","variant","render"]),l=a()("inline-flex justify-center items-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500",n&&p[n],j.className);return c?c(Object(i.a)({className:l},j)):Object(o.jsx)("button",Object(i.a)(Object(i.a)({type:s},j),{},{className:l}))},p={primary:"border-transparent text-white bg-pink-600 hover:bg-pink-700",outline:"border-pink-500 text-pink-500 bg-white hover:text-pink-700"}},817:function(t,e,s){t.exports={doclets:{},displayName:"GalleryItem",description:"",methods:[],props:[{type:{name:"string"},required:!0,description:"",tags:{},name:"imageHeight"},{type:{name:"number"},required:!0,description:"",tags:{},name:"imageId"},{type:{name:"string"},required:!0,description:"",tags:{},name:"imageUrl"},{type:{name:"number"},required:!0,description:"",tags:{},name:"imageWidth"},{type:{name:"string"},required:!0,description:"",tags:{},name:"photographer"},{type:{name:"string"},required:!0,description:"",tags:{},name:"photographerUrl"}],examples:s(818)}},818:function(t,e,s){var i={react:s(0),"./gallery-item.jsx":s(94)},r=s(191).default.bind(null,i),n=s(192).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst GalleryItem$0 = require('./gallery-item.jsx');\nconst GalleryItem = GalleryItem$0.default || (GalleryItem$0['GalleryItem'] || GalleryItem$0);",r);t.exports=[{type:"code",content:'const demo = () => {\n  const galleryListings = [\n    {\n      id: 15286,\n      width: 2500,\n      height: 1667,\n      url: "https://www.pexels.com/photo/person-walking-between-green-forest-trees-15286/",\n      photographer: "Luis del Río",\n      photographer_url: "https://www.pexels.com/@luisdelrio",\n      photographer_id: 1081,\n      avg_color: "#283419",\n      src: {\n        original: "https://images.pexels.com/photos/15286/pexels-photo.jpg",\n        large2x:\n          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",\n        large:\n          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940",\n        medium:\n          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",\n        small:\n          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=130",\n        portrait:\n          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",\n        landscape:\n          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",\n        tiny: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",\n      },\n      liked: false,\n    },\n    {\n      id: 3408744,\n      width: 3546,\n      height: 2255,\n      url: "https://www.pexels.com/photo/scenic-view-of-snow-capped-mountains-during-night-3408744/",\n      photographer: "stein egil liland",\n      photographer_url: "https://www.pexels.com/@therato",\n      photographer_id: 144244,\n      avg_color: "#557088",\n      src: {\n        original:\n          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",\n        large2x:\n          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",\n        large:\n          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",\n        medium:\n          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=350",\n        small:\n          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=130",\n        portrait:\n          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",\n        landscape:\n          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",\n        tiny: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",\n      },\n      liked: false,\n    },\n    {\n      id: 572897,\n      width: 6914,\n      height: 4463,\n      url: "https://www.pexels.com/photo/mountain-covered-snow-under-star-572897/",\n      photographer: "eberhard grossgasteiger",\n      photographer_url: "https://www.pexels.com/@eberhardgross",\n      photographer_id: 121938,\n      avg_color: "#5D5A63",\n      src: {\n        original:\n          "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",\n        large2x:\n          "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",\n        large:\n          "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",\n        medium:\n          "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&h=350",\n        small:\n          "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&h=130",\n        portrait:\n          "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",\n        landscape:\n          "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",\n        tiny: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",\n      },\n      liked: false,\n    },\n  ];\n\n  return (\n    <div\n      className="\n                          grid\n                          md:grid-cols-2\n                          gap-x-4 gap-y-8\n                          xl:grid-cols-3 xl:gap-x-6\n              "\n    >\n      galleryListings.map((item) => (\n      <GalleryItem\n        imageId={item.id}\n        imageHeight={item.height}\n        imageWidth={item.width}\n        imageUrl={item.src.large}\n        photographer={item.photographer}\n        photographerUrl={item.photographer_url}\n        key={item.id}\n      />\n      ))\n    </div>\n  );\n};\n\ndemo();',settings:{},evalInContext:n},{type:"markdown",content:"Use render to render element other than `button`, e.g. `<a>` tag."}]},819:function(t,e,s){t.exports={doclets:{},displayName:"ImageSearch",description:"",methods:[],props:[],examples:null}},820:function(t,e,s){t.exports={doclets:{},displayName:"Layout",description:"",methods:[],props:[],examples:null}},821:function(t,e,s){t.exports={doclets:{},displayName:"NavBar",description:"",methods:[],props:[],examples:null}},822:function(t,e,s){t.exports={doclets:{},displayName:"Button",description:"",methods:[],props:[{type:{name:"func"},required:!1,description:"",tags:{},name:"render"},{defaultValue:{value:'"button"',computed:!1},required:!1,description:"",tags:{},name:"type"},{type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"outline"',computed:!1}]},required:!1,description:"",tags:{},name:"variant"}],examples:s(823)}},823:function(t,e,s){var i={react:s(0),"./button.jsx":s(57)},r=s(191).default.bind(null,i),n=s(192).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Button$0 = require('./button.jsx');\nconst Button = Button$0.default || (Button$0['Button'] || Button$0);",r);t.exports=[{type:"code",content:'<div className="flex gap-4">\n  <Button>Default</Button>\n  <Button variant="primary">Primary</Button>\n  <Button variant="outline">Outline</Button>\n</div>',settings:{},evalInContext:n},{type:"markdown",content:"Use render to render element other than `button`, e.g. `<a>` tag."},{type:"code",content:'<Button\n  variant="primary"\n  render={(btnProps) => <a {...btnProps} href="https://google.com" />}\n>\n  Go to Google\n</Button>',settings:{},evalInContext:n}]},94:function(t,e,s){"use strict";s.r(e),s.d(e,"GalleryItem",(function(){return c}));var i=s(140),r=s(57),n=s(0),a=s(98),o=s(4),c=function GalleryItem(t){var e=t.imageId,s=t.imageHeight,c=t.imageWidth,p=t.imageUrl,j=t.photographerUrl,l=t.photographer,_=Object(n.useContext)(a.a),h=_.itemIsCollection(e);return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"relative flex flex-col items-center",children:[Object(o.jsx)("div",{className:" absolute  inset-0  w-full  h-full object-cover  object-center  group  block  rounded-lg  bg-gray-100  focus-within:ring-2  focus-within:ring-offset-2  focus-within:ring-offset-gray-100  focus-within:ring-pink-500  overflow-hidden ",children:Object(o.jsx)("img",{src:p,alt:"",className:"object-cover pointer-events-none group-hover:opacity-75 w-full h-80 overflow-hidden"})}),Object(o.jsxs)("div",{className:"px-8 py-10 rounded-lg relative z-10 w-full h-80 bg-indigo-500 opacity-0 hover:opacity-100",children:[Object(o.jsx)("div",{className:"flex justify-evenly",children:Object(o.jsx)("div",{children:Object(o.jsxs)("table",{className:"table-auto leading-relaxed text-white",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:"text-right px-3",children:"Photographer:"}),Object(o.jsx)("th",{className:"text-left px-3",children:l})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"text-right px-3",children:"ID:"}),Object(o.jsx)("td",{className:"text-left px-3",children:e})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"text-right px-3",children:"Height:"}),Object(o.jsx)("td",{className:"text-left px-3",children:s})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"text-right px-3",children:"Width:"}),Object(o.jsx)("td",{className:"text-left px-3",children:c})]})]})]})})}),Object(o.jsx)("div",{className:"flex justify-center mt-2",children:Object(o.jsx)("a",{href:j,className:"underline text-center leading-relaxed text-white",children:"Visit photographer's website"})}),Object(o.jsx)("div",{className:"flex flex-col md:flex-row justify-center gap-3 mt-5 py-1",children:Object(o.jsxs)(r.Button,{variant:"primary",onClick:function toggleCollectionStatusHandler(){h?_.removeCollection(e):_.addCollection({id:e,height:s,width:c,src:{large:p},photographer:l,photographer_url:j})},children:[h?Object(o.jsx)(i.a,{className:"h-4 w-4 mr-1.5"}):Object(o.jsx)(i.b,{className:"h-4 w-4 mr-1.5"}),h?"Remove Likes":"Likes"]})})]})]})})}},98:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));s(94),s(131),s(42);var i=s(0),r=(s(132),s(4),Object(i.createContext)({collections:[],totalCollections:0,addCollection:function addCollection(t){},removeCollection:function removeCollection(t){},itemIsCollection:function itemIsCollection(t){}}))},99:function(t,e,s){t.exports={header:"navbar_header__1-vLD",logo:"navbar_logo__cWVAn",active:"navbar_active__3PS9q",badge:"navbar_badge__1UVJS"}}},[[214,1,2]]]);