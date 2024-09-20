let mode = 1;
const nickName = document.getElementById('nickname');
const coloredNick = document.getElementById('coloredNick');
const savedColors = ['00ff00', '00ffff'];
const presets = {
  0: {
    name: "None"
  },
  1: {
    name: "Rainbow",
    colors: ["FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "9400D3"],
  },
  2: {
    name: "Fire",
    colors: ["DA3604", "FE650D", "FFC11F", "FFF75D"],
  },
  3: {
    name: "Deep Space",
    colors: ["000000", "434343"],
  },
  4: {
    name: "Timber",
    colors: ["fc00ff", "00dbde"],
  },
  5: {
    name: "Amethyst",
    colors: ["9D50BB", "6E48AA"],
  },
  6: {
    name: "Starfall",
    colors: ["F0C27B", "4B1248"],
  },
  7: {
    name: "Sunset",
    colors: ["FF512F", "DD2476"],
  },
  8: {
    name: "Phoenix",
    colors: ["f83600", "f9d423"],
  },
  9: {
    name: "Sublime Light",
    colors: ["fc5c7d", "6a82fb"],
  },
  9: {
    name: "Love",
    colors: ["ff0844", "ffb199"],
  },
  10: {
    name: "Electric Violet",
    colors: ["4776E6","8E54E9"],
  },
  11: {
    name: "Skyline",
    colors: ["1488CC","2B32B2"],
  }
}
const formats = {
  a0: {
    name: 'Default &#rrggbb',
    outputPrefix: '',
    template: '&#$1$2$3$4$5$6$f$c',
    formatChar: '&',
    maxLength: 256,
  },
  a1: {
    name: 'Chat <#rrggbb>',
    outputPrefix: '',
    template: '<#$1$2$3$4$5$6>$f$c',
    formatChar: '&',
    maxLength: 256,
  },
  a2: {
    name: 'Legacy &x&r&r&g&g&b&b',
    outputPrefix: '',
    template: '&x&$1&$2&$3&$4&$5&$6$f$c',
    formatChar: '&',
    maxLength: 256
  },
  a3: {
    name: '',
    outputPrefix: '/nick ',
    template: '&x&$1&$2&$3&$4&$5&$6$f$c',
    formatChar: '&',
    maxLength: 256
  },
  a4: {
    name: 'Console §x§r§r§g§g§b§b',
    outputPrefix: '',
    template: '§x§$1§$2§$3§$4§$5§$6$f$c',
    formatChar: '§',
    maxLength: null,
  }
};
let emojis_to_use_as_replacement = []
let double_emojis = []
let emoji_array = []
setTimeout(async ()=>{
  removeDuplicatedEmojis();
},1000);
function removeDuplicatedEmojis() {;
  emoji_array = Array.from(new Set(emoji_array));
  double_emojis = emoji_array.filter(e=>e.length > 1);
  emojis_to_use_as_replacement = emoji_array.filter(e=>e.length == 1);
}
function addText(emoji) {
  if(mode == 1){
    let input = document.getElementById('nickname');
    input.value = input.value + emoji.value;
  }else if(mode == 2) {
    let input = document.getElementById('lore-input');
    input.value = input.value + emoji.value;
  }else if(mode == 3){
    let input = document.getElementById('motd-input');
    input.value = input.value + emoji.value;
  }
  updateOutputText(undefined);
}

let toReplace = ["left-permute","right-permute"]
function darkMode() {
  if (document.getElementById('darkmode').checked == true) {
    document.body.classList.add('dark');
    document.getElementById('color-preset').classList.add("dark");
    document.getElementById('numOfColors').classList.add("dark");
    document.getElementById('graylabel2').classList.replace("gray", "darkgray");
    document.getElementById('output-format-tooltip').classList.replace("gray", "darkgray");
    document.getElementById('error').classList.replace("errortext", "darkerrortext");
    document.getElementById('numOfColors').classList.add("darktextboxes");
    document.getElementById('output-format-tooltip').classList.add("darktextboxes");
    document.getElementById('output-format').classList.add("dark");
    Array.from(document.getElementsByClassName("hexColor")).forEach(e => {
      document.getElementById(e.id).classList.add("darktextboxes");
    })
    for(let index = 0; index < toReplace.length; index++) {
      const name = toReplace[index];
      let element = document.getElementById(name);
      if(element) element.classList.add("darktextboxes");
    }
  } else {
    document.body.classList.remove('dark');
    document.getElementById('output-format').classList.remove("dark");
    document.getElementById('color-preset').classList.remove("dark");
    document.getElementById('numOfColors').classList.remove("dark");
    document.getElementById('graylabel2').classList.replace("darkgray", "gray");
    document.getElementById('outputText').classList.replace("darkgray", "gray");
    document.getElementById('output-format-tooltip').classList.replace("darkgray", "gray");
    document.getElementById('error').classList.replace("darkerrortext", "errortext");
    document.getElementById('numOfColors').classList.remove("darktextboxes");
    document.getElementById('outputText').classList.remove("darktextboxes");
    document.getElementById('output-format-tooltip').classList.remove("darktextboxes");
    Array.from(document.getElementsByClassName("hexColor")).forEach(e => {
      document.getElementById(e.id).classList.remove("darktextboxes");
    })
    for(let index = 0; index < toReplace.length; index++) {
      const name = toReplace[index];
      let element = document.getElementById(name);
      if(element) element.classList.remove("darktextboxes");
    }
  }
}

function getRandomHexColor() {
     return Math.floor(Math.random()*16777215).toString(16).toUpperCase();
}

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

function showError(show) {
  if (show) {
    document.getElementById('error').style.display = 'block';
    document.getElementById('outputText').style.height = '70px';
    document.getElementById('outputText').style.marginBottom = '5px';
  } else {
    document.getElementById('error').style.display = 'none';
    document.getElementById('outputText').style.height = '95px';
    document.getElementById('outputText').style.marginBottom = '10px';
  }
}

function showIridiumWarning(format, colors) {
  if(format.iridiumGradient && colors.length > 2) {
    document.getElementById('warning-iridium').style.display = 'block';
    document.getElementById('outputText').style.height = '70px';
    document.getElementById('outputText').style.marginBottom = '5px';
  }else{
    document.getElementById('warning-iridium').style.display = 'none';
    document.getElementById('outputText').style.height = '95px';
    document.getElementById('outputText').style.marginBottom = '10px';
  }
  if(format.iridiumGradient && (document.getElementById('strike').checked || document.getElementById('underline').checked ||
    document.getElementById('italics').checked || document.getElementById('bold').checked)){
      document.getElementById('warning-iridium-decoration').style.display = 'block';
      document.getElementById('outputText').style.height = '70px';
      document.getElementById('outputText').style.marginBottom = '5px';
  }else{
    document.getElementById('warning-iridium-decoration').style.display = 'none';
    document.getElementById('outputText').style.height = '95px';
    document.getElementById('outputText').style.marginBottom = '10px';
  }
}
function addDefaultsFormats() {
  let select = document.getElementById('output-format');
  if(select) {
    for(let value of Object.keys(formats)) {
      let format = formats[value];
      if(format && format.name && format.name.length > 0) {
        let option = document.createElement('option');
        option.innerHTML = format.name;
        option.setAttribute("value",`${value}`);
        if(format.separator) {
          option.setAttribute("disabled","disabled");
          option.setAttribute("style",`color: rgb(235, 235, 235); background: rgba(78, 78, 78, 0.698);text-align: center;padding-left: 0px;`);
        }else{
          option.setAttribute("value",`${value}`);
        }
        select.appendChild(option);
      }
    }
  }
}
function addDefaultsPresets() {
  let select = document.getElementById('color-preset');
  if(select) {
    for(let value of Object.keys(presets)) {
      let preset = presets[value];
      if(preset.name && preset.name.length > 0) {;
        let option = document.createElement('option');
        option.innerHTML = preset.name;
        option.setAttribute("value",`${value}`);
        select.appendChild(option);
      }
    }
  }
}
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const fonts = {
  "normal": {
    "name": "Normal",
    "default": true
  }
}
function showOutPutFormatTooltip() {
  let tooltip = document.getElementById("output-format-tooltip");
  if(tooltip) {
    let format = formats[outputFormat.value];
    if(format && format.hover && format.hover.length > 0) {
      tooltip.style.display = "inline";
      tooltip.innerHTML = format.hover.join("<br>");
    }else{
      tooltip.style.display = "none";
      tooltip.innerHTML = "Loading..";
    }
  }
}
function hideOutPutFormatTooltip() {
  let tooltip = document.getElementById("output-format-tooltip");
  if(tooltip) {
    tooltip.style.display = "none";
    tooltip.innerHTML = "Loading..";
  }
}
function hex(c) {
  let s = '0123456789abcdef';
  let i = parseInt(c);
  if (i == 0 || isNaN(c))
    return '00';
  i = Math.round(Math.min(Math.max(0, i), 255));
  return s.charAt((i - i % 16) / 16) + s.charAt(i % 16);
}

function convertToHex(rgb) {
  return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
}

function trim(s) {
  return (s.charAt(0) == '#') ? s.substring(1, 7) : s
}

function convertToRGB(hex) {
  let color = [];
  color[0] = parseInt((trim(hex)).substring(0, 2), 16);
  color[1] = parseInt((trim(hex)).substring(2, 4), 16);
  color[2] = parseInt((trim(hex)).substring(4, 6), 16);
  return color;
}

class Gradient {
  constructor(colors, numSteps) {
    this.colors = colors;
    this.gradients = [];
    this.steps = numSteps - 1;
    this.step = 0;

    const increment = this.steps / (colors.length - 1);
    for (let i = 0; i < colors.length - 1; i++)
      this.gradients.push(new TwoStopGradient(colors[i], colors[i + 1], increment * i, increment * (i + 1)));
  }

  next() {
    if (this.steps < 1)
      return this.colors[0];
    if(this.steps < this.colors.length) {
      let tColor = this.colors[this.step]
      this.step++;
      return tColor;
    }
    const adjustedStep = Math.round(Math.abs(((2 * Math.asin(Math.sin(this.step * (Math.PI / (2 * this.steps))))) / Math.PI) * this.steps));
    let color;
    if (this.gradients.length < 2) {
      color = this.gradients[0].colorAt(adjustedStep);
    } else {
      const segment = this.steps / this.gradients.length;
      const index = Math.min(Math.floor(adjustedStep / segment), this.gradients.length - 1);
      color = this.gradients[index].colorAt(adjustedStep);
    }

    this.step++;
    return color;
  }
}

class TwoStopGradient {
  constructor(startColor, endColor, lowerRange, upperRange) {
    this.startColor = startColor;
    this.endColor = endColor;
    this.lowerRange = lowerRange;
    this.upperRange = upperRange;
  }

  colorAt(step) {
    return [
      this.calculateHexPiece(step, this.startColor[0], this.endColor[0]),
      this.calculateHexPiece(step, this.startColor[1], this.endColor[1]),
      this.calculateHexPiece(step, this.startColor[2], this.endColor[2])
    ];
  }

  calculateHexPiece(step, channelStart, channelEnd) {
    const range = this.upperRange - this.lowerRange;
    const interval = (channelEnd - channelStart) / range;
    return Math.round(interval * (step - this.lowerRange) + channelStart);
  }
}

function toggleColors(colors) {
  let clamped = Math.min(savedColors.length, Math.max(2, colors));
  if (colors == 1 || colors == '') {
    colors = getColors().length;
  } else if (colors != clamped) {
    $('#numOfColors').val(clamped);
    colors = clamped;
  }
  const container = $('#hexColors');
  const hexColors = container.find('.hexColor');
  const number = hexColors.size();
  if (number > colors) {
    hexColors.each((index, element) => {
      if (index + 1 > colors) {
        savedColors[index] = $(element).val();
        $(element).parent().remove();
      }
    });
  } else if (number < colors) {
    let template = $('#hexColorTemplate').html();
    for (let i = number + 1; i <= colors; i++) {
      let html = template.replace(/\$NUM/g, i).replace(/\$VAL/g, savedColors[i - 1]);
      container.append(html);
    }
    jscolor.install();
  }
  
  hexColors.each((index, element) => {
    if(index < number) {
      let eColor = document.getElementById(`color-${index + 1}`);
      if(eColor) eColor.value = `${savedColors[index]}`
    }
  });
}

function getColors() {
  const hexColors = $('#hexColors').find('.hexColor');
  const colors = [];
  hexColors.each((index, element) => {
    const value = $(element).val();
    savedColors[index] = value;
    colors[index] = convertToRGB(value);
  });
  return colors;
}
function updateOutputTextFromFont(event) {
  updateOutputText(event, false);
}
function updateOutputText(event) {
  updateOutputText(event, false);
}

let replacements = new Map();
function fixReplacements(text) {
  for(let [k,v] of replacements.entries()) {
    text = text.replaceAll(k,v);
  }
  return text;
}
function addReplacements(text) {
  replacements.clear();
  for(let e of double_emojis) {
    if(text.includes(e)) {
      let randomEmoji = getRandomEmoji(text);
      replacements.set(randomEmoji,e)
      text = text.replaceAll(e,randomEmoji);
    }
  }
  return text;
}
let beta = false;
let developer = false;
function getRandomEmoji(text) {
  let random = emojis_to_use_as_replacement[Math.floor(Math.random() * emojis_to_use_as_replacement.length)]
  if(replacements.has(random) || text.includes(random)) {
    return getRandomEmoji(text);
  }
  return random;
}
function s(){
  let c = v.split("-").filter(s=>s.match(/[a-fA-F0-9]{6}/g));
  if(c.length >= 2) {
    if(c.length > savedColors.length) {
      c.slice(0,savedColors.length);
    }          
    const container = $('#hexColors');
    const hexColors = container.find('.hexColor');
    hexColors.each((index, element) => {
      $(element).parent().remove();
    });
    setTimeout(()=>{
      for (let i = 0; i < c.length; i++) {
        savedColors[i] = c[i];
        let eColor = document.getElementById(`color-${i + 1}`);
        if(eColor) eColor.value = `#${c[i]}`
      }
      if (c.length != $('#numOfColors').val()) {
        $('#numOfColors').val(c.length);
      }
      toggleColors(c.length);
    },25);
  }
}
function updateOutputText(event, setFormat) {
  let format;
  if(setFormat) {
  }else {
    format = formats[document.getElementById('output-format').value] || formats["a0"];
  }
  
  const bold = document.getElementById('bold').checked;
  const italic = document.getElementById('italics').checked;
  const underline = document.getElementById('underline').checked;
  const strike = document.getElementById('strike').checked;

  let outputText = document.getElementById('outputText');
  let colorsList = getColors();
  if(mode == 1){
    let newNick = nickName.value
    if (!newNick) newNick = 'Type something!'
    let gradient;
    if(document.getElementById('fonts-list')) {
      if(document.getElementById('fonts-list').value) {
        let fontData = fonts[document.getElementById('fonts-list').value];
        if(fontData){
          if(!fontData.default) {
            let toModify = newNick;
            newNick = "";
            if(typeof fontData.before != "undefined") {
              toModify = fontData.before(toModify);
            }
            let processed = fontData.processed;
            for (let i = 0; i < toModify.length; i++) {
              newNick += processed[toModify[i]] || toModify[i];
            }
            if(typeof fontData.after != "undefined") {
              newNick = fontData.after(newNick);
            }
          }
        }
      }
    }
    
    newNick = addReplacements(newNick);
  
    let chars = newNick.replace(/ /g, '');
  
    if (format.iridiumGradient) {
      let newColorList = [colorsList[0],colorsList[colorsList.length - 1]]
      gradient = new Gradient(newColorList, chars.length);
    }else{
      gradient = new Gradient(colorsList, chars.length);
    }
    let charColors = [];
    let output = format.outputPrefix;
    
    let startIridium;
    let endIridium;
    for (let i = 0; i < newNick.length; i++) {
      let char = newNick.charAt(i);
      if (char == ' ') {
        output += char;
        charColors.push(null);
        continue;
      }
      
  
      let hex = convertToHex(gradient.next());
      charColors.push(hex);
      let hexOutput = format.template;
      for (let n = 1; n <= 6; n++)
        hexOutput = hexOutput.replace(`$${n}`, hex.charAt(n - 1));
      let formatCodes = '';
      if (format.formatChar != null) {
        if (bold) formatCodes += format.formatChar + 'l';
        if (italic) formatCodes += format.formatChar + 'o';
        if (underline) formatCodes += format.formatChar + 'n';
        if (strike) formatCodes += format.formatChar + 'm';
      }
      hexOutput = hexOutput.replace('$f', formatCodes);
      hexOutput = hexOutput.replace('$c', char);
      if(i == 0) {
        startIridium = hexOutput.slice(2,8);
      }else if((i + 1) == newNick.length) {
        endIridium = hexOutput.slice(2,8);
      }
      output += hexOutput;
    }
  
    output = fixReplacements(output);
    let beforeFixedNewNick = newNick + "";
    newNick = fixReplacements(newNick);
  
    if (format.iridiumGradient) {
      outputText.innerText = `<GRADIENT:${startIridium}>${newNick}</GRADIENT:${endIridium}>`;
    }else if (format.adventureGradient) {
      let effects = "";
      if (bold) effects += '<b>';
      if (italic) effects += '<i>';
      if (underline) effects += '<u>';
      if (strike) effects += '<st>';
      if(colorsList.length == 1) {
        outputText.innerText = `<${convertToHex(colorsList[0])}>${effects}${newNick}`
      }else{
        outputText.innerText = `<gradient:${colorsList.map(c=>`#${convertToHex(c)}`).join(":")}>${effects}${newNick}</gradient>`
      }
    }else{
      outputText.innerText = output;
    }
    showError(format.maxLength != null && format.maxLength < output.length);
    displayColoredName(beforeFixedNewNick, charColors, format);
  }else if(mode == 2) {
    let loreLines = loreInput.value.split("\n");
    if(loreInput.value.replace(/\n/g,"").trim().length == 0) loreLines = [`Type something!`];

    if(document.getElementById('fonts-list')) {
      if(document.getElementById('fonts-list').value) {
        let fontData = fonts[document.getElementById('fonts-list').value];
        if(fontData){
          if(!fontData.default) {
            let loretoModify = loreLines.concat();
            loreLines = [];
            for(let line of loretoModify) {
              let toModify = line;
              let newLine = "";
              if(typeof fontData.before != "undefined") {
                toModify = fontData.before(toModify);
              }
              let processed = fontData.processed;
              for (let i = 0; i < toModify.length; i++) {
                newLine += processed[toModify[i]] || toModify[i];
              }
              if(typeof fontData.after != "undefined") {
                newLine = fontData.after(newLine);
              }
              loreLines.push(newLine);
            }
          }
        }
      }
    }
    if(event) {
      if(typeof event.style !== "undefined") {
        event.style.height = "1px";
        event.style.height = ((event.scrollHeight)+2)+"px";
      }
    }

    let finalOutput = [];
    let finalBeforeReplacement = [];

    loreText.classList.remove('minecraftbold', 'minecraftibold', 'minecraftitalic');
    if(!format.iridiumGradient) {
      if (document.getElementById('bold').checked) {
        if (document.getElementById('italics').checked) {
          loreText.classList.add('minecraftibold');
        } else {
          loreText.classList.add('minecraftbold');
        }
      } else if (document.getElementById('italics').checked) {
        loreText.classList.add('minecraftitalic');
      }
    }
    loreText.innerHTML = '';
    
    for(let line of loreLines) {
      line = addReplacements(line);
      let gradient;

      let chars = line.replace(/ /g, '');
    
      if (format.iridiumGradient) {
        let newColorList = [colorsList[0],colorsList[colorsList.length - 1]]
        gradient = new Gradient(newColorList, chars.length);
      }else{
        gradient = new Gradient(colorsList, chars.length);
      }
      let charColors = [];
      let output = format.outputPrefix;
      
      let startIridium;
      let endIridium;
      for (let i = 0; i < line.length; i++) {
        let char = line.charAt(i);
        if (char == ' ') {
          output += char;
          charColors.push(null);
          continue;
        }
        
    
        let hex = convertToHex(gradient.next());
        charColors.push(hex);
        let hexOutput = format.template;
        for (let n = 1; n <= 6; n++)
          hexOutput = hexOutput.replace(`$${n}`, hex.charAt(n - 1));
        let formatCodes = '';
        if (format.formatChar != null) {
          if (bold) formatCodes += format.formatChar + 'l';
          if (italic) formatCodes += format.formatChar + 'o';
          if (underline) formatCodes += format.formatChar + 'n';
          if (strike) formatCodes += format.formatChar + 'm';
        }
        hexOutput = hexOutput.replace('$f', formatCodes);
        hexOutput = hexOutput.replace('$c', char);
        if(i == 0) {
          startIridium = hexOutput.slice(2,8);
        }else if((i + 1) == line.length) {
          endIridium = hexOutput.slice(2,8);
        }
        output += hexOutput;
      }
    
      output = fixReplacements(output);
      let beforeFixedNewNick = line + "";
      finalBeforeReplacement.push([beforeFixedNewNick,charColors]);
      line = fixReplacements(line);
    
      if (format.iridiumGradient) {
        finalOutput.push(`<GRADIENT:${startIridium}>${line}</GRADIENT:${endIridium}>`);
      }else if (format.adventureGradient) {
        let effects = "";
        if (bold) effects += '<b>';
        if (italic) effects += '<i>';
        if (underline) effects += '<u>';
        if (strike) effects += '<st>';
        if(colorsList.length == 1) {
          finalOutput.push(`<${convertToHex(colorsList[0])}>${effects}${line}`)
        }else{
          finalOutput.push(`<gradient:${colorsList.map(c=>`#${convertToHex(c)}`).join(":")}>${effects}${line}</gradient>`)
        }
      }else{
        finalOutput.push(output);
      }
    }
    addDisplayColoredLore(finalBeforeReplacement, format);
    outputText.innerText = finalOutput.join("\r\n");
  }else if(mode == 3) {
    let motdLines = motdInput.value.split("\n");
    if(motdInput.value.replace(/\n/g,"").trim().length == 0) motdLines = [`Type something!`,`Choose your MOTD!`];
    if(document.getElementById('fonts-list')) {
      if(document.getElementById('fonts-list').value) {
        let fontData = fonts[document.getElementById('fonts-list').value];
        if(fontData){
          if(!fontData.default) {
            let loretoModify = motdLines.concat();
            motdLines = [];
            for(let line of loretoModify) {
              let toModify = line;
              let newLine = "";
              if(typeof fontData.before != "undefined") {
                toModify = fontData.before(toModify);
              }
              let processed = fontData.processed;
              for (let i = 0; i < toModify.length; i++) {
                newLine += processed[toModify[i]] || toModify[i];
              }
              if(typeof fontData.after != "undefined") {
                newLine = fontData.after(newLine);
              }
              motdLines.push(newLine);
            }
          }
        }
      }
    }
    if(event) {
      if(typeof event.style !== "undefined") {
        event.style.height = "54px";
      }
    }

    let finalOutput = [];
    let finalBeforeReplacement = [];

    coloredMOTD.classList.remove('minecraftbold', 'minecraftibold', 'minecraftitalic');
    if(!format.iridiumGradient) {
      if (document.getElementById('bold').checked) {
        if (document.getElementById('italics').checked) {
          coloredMOTD.classList.add('minecraftibold');
        } else {
          coloredMOTD.classList.add('minecraftbold');
        }
      } else if (document.getElementById('italics').checked) {
        coloredMOTD.classList.add('minecraftitalic');
      }
    }
    coloredMOTD.innerHTML = '';
    
    for(let line of motdLines) {
      line = addReplacements(line);
      let gradient;

      let chars = line.replace(/ /g, '');
    
      if (format.iridiumGradient) {
        let newColorList = [colorsList[0],colorsList[colorsList.length - 1]]
        gradient = new Gradient(newColorList, chars.length);
      }else{
        gradient = new Gradient(colorsList, chars.length);
      }
      let charColors = [];
      let output = format.outputPrefix;
      
      let startIridium;
      let endIridium;
      for (let i = 0; i < line.length; i++) {
        let char = line.charAt(i);
        if (char == ' ') {
          output += char;
          charColors.push(null);
          continue;
        }
        
    
        let hex = convertToHex(gradient.next());
        charColors.push(hex);
        let hexOutput = format.template;
        for (let n = 1; n <= 6; n++)
          hexOutput = hexOutput.replace(`$${n}`, hex.charAt(n - 1));
        let formatCodes = '';
        if (format.formatChar != null) {
          if (bold) formatCodes += format.formatChar + 'l';
          if (italic) formatCodes += format.formatChar + 'o';
          if (underline) formatCodes += format.formatChar + 'n';
          if (strike) formatCodes += format.formatChar + 'm';
        }
        hexOutput = hexOutput.replace('$f', formatCodes);
        hexOutput = hexOutput.replace('$c', char);
        if(i == 0) {
          startIridium = hexOutput.slice(2,8);
        }else if((i + 1) == line.length) {
          endIridium = hexOutput.slice(2,8);
        }
        output += hexOutput;
      }
    
      output = fixReplacements(output);
      let beforeFixedNewNick = line + "";
      finalBeforeReplacement.push([beforeFixedNewNick,charColors]);
      line = fixReplacements(line);
    
      if (format.iridiumGradient) {
        finalOutput.push(`<GRADIENT:${startIridium}>${line}</GRADIENT:${endIridium}>`);
      }else if (format.adventureGradient) {
        let effects = "";
        if (bold) effects += '<b>';
        if (italic) effects += '<i>';
        if (underline) effects += '<u>';
        if (strike) effects += '<st>';
        if(colorsList.length == 1) {
          finalOutput.push(`<${convertToHex(colorsList[0])}>${effects}${line}`)
        }else{
          finalOutput.push(`<gradient:${colorsList.map(c=>`#${convertToHex(c)}`).join(":")}>${effects}${line}</gradient>`)
        }
      }else{
        finalOutput.push(output);
      }
    }
    addDisplayColoredMOTD(finalBeforeReplacement, format);
    outputText.innerText = finalOutput.join("\r\n");
  }
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function displayColoredName(nickName, colors, format) {
  coloredNick.classList.remove('minecraftbold', 'minecraftibold', 'minecraftitalic');
  if(!format.iridiumGradient) {
    if (document.getElementById('bold').checked) {
      if (document.getElementById('italics').checked) {
        coloredNick.classList.add('minecraftibold');
      } else {
        coloredNick.classList.add('minecraftbold');
      }
    } else if (document.getElementById('italics').checked) {
      coloredNick.classList.add('minecraftitalic');
    }
  }
  coloredNick.innerHTML = '';
  for (let i = 0; i < nickName.length; i++) {
    const coloredNickSpan = document.createElement('span');
    if(!format.iridiumGradient) {
      if (document.getElementById('underline').checked) {
        if (document.getElementById('strike').checked) {
          coloredNickSpan.classList.add('minecraftustrike');
        } else coloredNickSpan.classList.add('minecraftunderline');
      } else if (document.getElementById('strike').checked) {
        coloredNickSpan.classList.add('minecraftstrike');
      }
    }
    coloredNickSpan.style.color = "#"+colors[i];
    let char = nickName[i];
    if(replacements.has(char)) {
      coloredNickSpan.textContent = replacements.get(char);
    }else{
      coloredNickSpan.textContent = char;
    }
    coloredNick.append(coloredNickSpan);
  }
}

function preset(n) {
  const colors = presets[n].colors
  if(!colors || colors.length < 2) return;
  const container = $('#hexColors');
  container.empty();
    // Need to add some colors
    let template = $('#hexColorTemplate').html();
    for (let i = 0 + 1; i <= colors.length; i++) {
      let html = template.replace(/\$NUM/g, i).replace(/\$VAL/g, colors[i - 1]);
      container.append(html);
    }
    jscolor.install();
}
function setContent(content) {
  setTimeout(()=>{
    if(modes[mode]) {
      let input = document.getElementById(modes[mode].InputId);
      if(input) {
        input.value = content;
        updateOutputText();
      }
    }
  },500);
}

let count = 0;
let copiedTimeout;
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
toggleColors(2);
document.getElementById('darkmode').checked = true
darkMode();
updateOutputText(event)