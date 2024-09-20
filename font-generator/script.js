const fonts = {
  "small-caps": {
    "name": "Small caps",
    "before": function(s) {
      return s.toLowerCase();
    },
    "processed": {},
    "data": {
      tosearch:"abcdefghijklmnñopqrstuvwxyzqæƀðʒǝɠɨłꟽɯœɔȣꝵʉγλπρψ0123456789-+".split(""),
      toreplace:"ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴñᴏᴘǫʀsᴛᴜᴠᴡxʏᴢǫᴁᴃᴆᴣⱻʛᵻᴌꟺꟺɶᴐᴕꝶᵾᴦᴧᴨᴩᴪ₀₁₂₃₄₅₆₇₈₉₋₊".split("")
    }
  },
  "accent": {
    "name": "Accent",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ĀBÇÐÊFǴĦÎĴĶĿMŇήÖPQŘŞŢŬVŴXŸƵābčďéfǥĥɨĵķłmņŇǒpqřşŧùvŵxŷž⁰¹²³⁴⁵⁶⁷⁸⁹".split("")
    }
  },
  "big": {
    "name": "Big",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎÑOᑭᑫᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎñOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ0123456789".split("")
    }
  },
  "currency": {
    "name": "Currency",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦ÑØ₱QⱤ₴₮ɄV₩ӾɎⱫ₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦ñØ₱QⱤ₴₮ɄV₩ӾɎⱫ0123456789".split("")
    }
  },
  "cursed": {
    "name": "Cursed",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ԹՅՇԺȝԲԳɧɿʝƙʅʍՌՌԾρφՐՏԵՄעաՃՎՀԹՅՇԺȝԲԳɧɿʝƙʅʍՌՌԾρφՐՏԵՄעաՃՎՀ0123456789".split("")
    }
  },
  "elegant": {
    "name": "Elegant",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ąɓƈđε∱ɠɧïʆҡℓɱŋñσþҩŗşŧų√щхγẕąɓƈđε∱ɠɧïʆҡℓɱŋñσþҩŗşŧų√щхγẕ0123456789".split("")
    }
  },
  "greek": {
    "name": "Greek",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"αႦƈԃҽϝɠԋιʝƙʅɱɳñσρϙɾʂƚυʋɯxყȥαႦƈԃҽϝɠԋιʝƙʅɱɳñσρϙɾʂƚυʋɯxყȥ0123456789".split("")
    }
  },
  "knight": {
    "name": "Knight",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ḀḃḉḊḕḟḠḧḭjḲḶṁṆÑṏṖqṙṠṮṳṼẇẌẏẒḀḃḉḊḕḟḠḧḭjḲḶṁṆñṏṖqṙṠṮṳṼẇẌẏẒ0123456789".split("")
    }
  },
  "spaced": {
    "name": "Spaced",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ＡＢＣＤＥＦＧＨＩＪＫＬＭＮÑＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎñｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９".split("")
    }
  },
  "superscript": {
    "name": "SuperScript",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺÑᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐⁿñᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹".split("")
    }
  },
  "tail": {
    "name": "Tail",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ƛƁƇƊЄƑƓӇƖʆƘԼMƝƝƠƤƢƦƧƬƲƔƜҲƳȤʌƅƈɗєƒʛɦɪʝƙʅɱɲɲơƥƣɾƨƭυvɯҳɣȥ0123456789".split("")
    }
  },
  "tailuppercase": {
    "name": "Tail Uppercase",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ƛƁƇƊЄƑƓӇƖʆƘԼMƝƝƠƤƢƦƧƬƲƔƜҲƳȤƛƁƇƊЄƑƓӇƖʆƘԼMƝÑƠƤƢƦƧƬƲƔƜҲƳȤ0123456789".split("")
    }
  },
  "taillowercase": {
    "name": "Tail Lowercase",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"ʌƅƈɗєƒʛɦɪʝƙʅɱɲɲơƥƣɾƨƭυVɯҳɣȥʌƅƈɗєƒʛɦɪʝƙʅɱɲɲơƥƣɾƨƭυvɯҳɣȥ0123456789".split("")
    }
  },
  "handwritten": {
    "name": "Handwritten",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"𝒜 𝐵 𝒞 𝒟 𝐸 𝐹 𝒢 𝐻 𝐼 𝒥 𝒦 𝐿 𝑀 𝒩 Ñ 𝒪 𝒫 𝒬 𝑅 𝒮 𝒯 𝒰 𝒱 𝒲 𝒳 𝒴 𝒵 𝒶 𝒷 𝒸 𝒹 𝑒 𝒻 𝑔 𝒽 𝒾 𝒿 𝓀 𝓁 𝓂 𝓃 ñ 𝑜 𝓅 𝓆 𝓇 𝓈 𝓉 𝓊 𝓋 𝓌 𝓍 𝓎 𝓏 𝟢 𝟣 𝟤 𝟥 𝟦 𝟧 𝟨 𝟩 𝟪 𝟫".split(" ")
    }
  },
  "bold-handwritten": {
    "name": "Bold Handwritten",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"𝓐 𝓑 𝓒 𝓓 𝓔 𝓕 𝓖 𝓗 𝓘 𝓙 𝓚 𝓛 𝓜 𝓝 Ñ 𝓞 𝓟 𝓠 𝓡 𝓢 𝓣 𝓤 𝓥 𝓦 𝓧 𝓨 𝓩 𝓪 𝓫 𝓬 𝓭 𝓮 𝓯 𝓰 𝓱 𝓲 𝓳 𝓴 𝓵 𝓶 𝓷 ñ 𝓸 𝓹 𝓺 𝓻 𝓼 𝓽 𝓾 𝓿 𝔀 𝔁 𝔂 𝔃 0 1 2 3 4 5 6 7 8 9".split(" ")
    }
  }
}
let template = {
  "": {
    "name": "",
    "processed": {},
    "data": {
      tosearch:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789".split(""),
      toreplace:"".split(" ")
    }
  },
}
let copiedTimeout;
function copyTextToClipboard(text) {
  let textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.bottom= 0;
  textArea.style.left= 0;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  document.execCommand('copy');
  alertCopied();
  document.body.removeChild(textArea);
}
function alertCopied() {
  if(copiedTimeout) {
    clearTimeout(copiedTimeout);
    var sb = document.getElementById("snackbar");
    sb.className = sb.className.replace("show", "");
  }
  var sb = document.getElementById("snackbar");

  sb.className = "show";

  copiedTimeout = setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
}

let t = ["inputText"];
function toggleDarkmode() {
    if (document.getElementById('darkmode').checked == true) {
      document.body.classList.add('dark');
      for(let n of  t) {
        let d = document.getElementById(n);
        if(d) {
          d.classList.remove("lightbuttonboxes");
          d.classList.add("darkbuttonboxes");
        }
      }
      let success = document.getElementById('success_message');
      if(success) {
        success.classList.remove("successlight");
        success.classList.add("successdark");
      }
    } else {
      document.body.classList.remove('dark');

      for(let n of  t) {
        let d = document.getElementById(n);
        if(d) {
          d.classList.remove("darkbuttonboxes");
          d.classList.add("lightbuttonboxes");
        }
      }
      let success = document.getElementById('success_message');
      if(success) {
        success.classList.remove("successdark");
        success.classList.add("successlight");
      }
    }

}
function selectTab(evt, tabName, buttonName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  if(evt) {
    evt.currentTarget.className += " active";
  }else if(buttonName) {
    let b = document.getElementById(buttonName);
    if(b) b.className += " active";
  }
}
function loadFonts() {
  let fontsTable = document.getElementById('fonts-table');
  if(fontsTable) {
    let s = [];
    let i = 1;
    for(let fontType of Object.keys(fonts)) {
      let fontData = fonts[fontType];
      if(fontData.separator) {
        s += `<div><h2>${fontData.name}</h2><br></div>`
        continue;
      }
      s += `<div class="text-type"><div class="font-name-type ${(i % 2 === 0?"even":"odd")}">${i}. ${fontData.name}</div> <textarea readonly `+
        `id="${fontType}-box" class="fontsBoxes options" type="text" `+
        `checked id="${fontType}-option" onclick="copyTextToClipboard(this.textContent);"></textarea><label for="${fontType}-option" `+
        `></label><br></div>`
      fontData.processed = {};
      if(fontData.data && fontData.data.tosearch && fontData.data.toreplace) {
        if(fontData.data.tosearch.length == fontData.data.toreplace.length) {
            for (let i = 0; i < fontData.data.tosearch.length; i++) {
              fontData.processed[fontData.data.tosearch[i]] = fontData.data.toreplace[i];
            }
        }else{
        }
      }else {
      }
      i++;
    }
    fontsTable.innerHTML = s;
  }
}
let times = 0;
function loadCounter() {
 let href = window.location.href;
 if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw=="))) return;
 let link = atob("aHR0cHM6Ly9hbG9uc29hbGlhZ2EtcGFnZS1jb3VudC5nbGl0Y2gubWUvY291bnRlcj9zaXRlPTxzaXRlPiZrZXk9PGtleT4=")
  .replace(/<site>/g,"font-generator").replace(/<key>/g,"KEY-A");
 let counter = document.getElementById("visitor-counter");
 if(counter) {
   $.ajax({
     url: link,
     type: "GET", 
     dataType: "json",
     data: {
     },
     success: function (result) {
       if(isNaN(result))
         document.getElementById("counter-amount").innerHTML = "Click to return!";
       else document.getElementById("counter-amount").innerHTML = `Visits: ${result}`;
     },
     error: function (e) {
       times++;
       document.getElementById("counter-amount").innerHTML = "Click to return!";
       if(times <= 1) {
        setTimeout(()=>{
          loadCounter();
        },1000*10);
       }
     }
   });
 }
}
function updateOutputBackup(event) {
  if(event && typeof event.style !== "undefined") {
    event.style.height = "1px";
    console.log(`event.scrollHeight: ${event.scrollHeight}`)
    event.style.height = ((event.scrollHeight - 13))+"px";
  }
  let inputText = document.getElementById("inputText");
  if(inputText) {

    let theText;
    if(!inputText.value || inputText.value.length === 0) theText = "Type your text above"
    else theText = inputText.value;
    for(let identifier of Object.keys(fonts)) {
      let toUpdate = document.getElementById(`${identifier}-box`)
      if(toUpdate) {
        let fontData = fonts[identifier];
        let toModify = theText; 
        let toUse = "";
        if(typeof fontData.before != "undefined") {
          toModify = fontData.before(toModify);
        }
        let processed = fontData.processed;
        for (let i = 0; i < toModify.length; i++) {
          toUse += processed[toModify[i]] || toModify[i];
        }
        if(typeof fontData.after != "undefined") {
          toUse = fontData.after(toUse);
        }
        toUpdate.innerText = toUse.replace(/\r\n/g,"<br>");
        console.log(toUse);
        console.log(toUpdate.innerText);
      }
    }
  }
}
function updateOutput(event) {
  let inputText = document.getElementById("inputText");
  if(event && typeof event.style !== "undefined") {
    event.style.height = "1px";
    event.style.height = ((event.scrollHeight - 10))+"px";
  }else{
    inputText.style.height = "1px";
    inputText.style.height = ((inputText.scrollHeight - 8))+"px";
  }
  if(inputText) {
    let textLines = inputText.value.split("\n");
    if(inputText.value.replace(/\n/g,"").trim().length == 0) textLines = ["Type your text above"];
    for(let identifier of Object.keys(fonts)) {
      let fontData = fonts[identifier];
      if(fontData.separator) continue;
      let toUpdate = document.getElementById(`${identifier}-box`)
      if(toUpdate) {
        let textToModify = textLines.concat();
        let newTextLines = [];
        for(let line of textToModify) {
          let toModify = line;
          let toUse = "";
          if(typeof fontData.before != "undefined") {
            toModify = fontData.before(toModify);
          }
          let processed = fontData.processed;
          for (let i = 0; i < toModify.length; i++) {
            toUse += processed[toModify[i]] || toModify[i];
          }
          if(typeof fontData.after != "undefined") {
            toUse = fontData.after(toUse);
          }
          newTextLines.push(toUse);
        }
        toUpdate.innerHTML = newTextLines.join("\r\n");
        toUpdate.style.height
        toUpdate.style.height = "1px";
        toUpdate.style.height = ((toUpdate.scrollHeight - 5))+"px";
      }
    }
  }
}
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
}
loadFonts();
updateOutput();