document.addEventListener("DOMContentLoaded", function () {
    const memorySlider = document.getElementById("memory-slider");
    const memoryValue = document.getElementById("memory-value");
    const filenameInput = document.getElementById("filename-input");
    const selectedFlag = document.getElementById("selected-flag");
    const dropdownContent = document.getElementById("dropdown-content");
    const guiToggle = document.getElementById("gui-toggle");
    const platformSelect = document.getElementById("platform-select");
    const outputCommandText = document.getElementById("output-command-text");
    const clipboardCopyButton = document.getElementById("clipboard-copy-button");
    const contentsDownloadButton = document.getElementById("contents-download-button");
    const downloadButtonLabel = document.getElementById("download-button-label");
  
    const aikarsFlags = [
      "-XX:+AlwaysPreTouch",
      "-XX:+DisableExplicitGC",
      "-XX:+ParallelRefProcEnabled",
      "-XX:+PerfDisableSharedMem",
      "-XX:+UnlockExperimentalVMOptions",
      "-XX:+UseG1GC",
      "-XX:G1HeapRegionSize=8M",
      "-XX:G1HeapWastePercent=5",
      "-XX:G1MaxNewSizePercent=40",
      "-XX:G1MixedGCCountTarget=4",
      "-XX:G1MixedGCLiveThresholdPercent=90",
      "-XX:G1NewSizePercent=30",
      "-XX:G1RSetUpdatingPauseTimePercent=5",
      "-XX:G1ReservePercent=20",
      "-XX:InitiatingHeapOccupancyPercent=15",
      "-XX:MaxGCPauseMillis=200",
      "-XX:MaxTenuringThreshold=1",
      "-XX:SurvivorRatio=32",
      "-Dusing.aikars.flags=https://mcflags.emc.gs",
      "-Daikars.new.flags=true"
    ];
  
    const generateStartCommand = () => {
      const memory = memorySlider.value;
      const filename = filenameInput.value;
      const flagValue = selectedFlag.textContent === "Aikar's" ? aikarsFlags.join(" ") : selectedFlag.textContent === "None" ? "" : selectedFlag.textContent;
      const flags = flagValue.trim() !== "" ? flagValue.trim() + " " : "";
      const guiEnabled = guiToggle.checked;
      const platform = platformSelect.value;
  
      const guiPart = guiEnabled ? "" : "nogui";
      const command = `java -Xmx${memory * 1024}M -Xms${memory * 1024}M ${flags}-jar ${filename} ${guiPart}`;
  
      let content = `${command}`;
  
      outputCommandText.value = content;
    };
  
    const populateDropdown = () => {
      const FLAGS = ["Aikar's", "None"];
      dropdownContent.innerHTML = FLAGS.map(flag => `<div class="dropdown-item">${flag}</div>`).join("");
  
      const dropdownItems = document.querySelectorAll(".dropdown-item");
      dropdownItems.forEach(item => {
        item.addEventListener("click", () => {
          selectedFlag.textContent = item.textContent;
          dropdownContent.style.display = "none";
          generateStartCommand();
        });
      });
    };
  
    selectedFlag.addEventListener("click", () => {
      dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });
  
    memorySlider.addEventListener("input", () => {
      memoryValue.textContent = memorySlider.value;
      generateStartCommand();
    });
  
    filenameInput.addEventListener("input", generateStartCommand);
    guiToggle.addEventListener("change", generateStartCommand);
    platformSelect.addEventListener("change", () => {
      downloadButtonLabel.textContent = platformSelect.value === "windows" ? "Download (.bat)" : "Download (.sh)";
      generateStartCommand();
    });
  
    clipboardCopyButton.addEventListener("click", () => {
      navigator.clipboard.writeText(outputCommandText.value)
        .then(() => alert("Command copied to clipboard!"))
        .catch(err => console.error("Failed to copy text: ", err));
    });
  
    contentsDownloadButton.addEventListener("click", () => {
      const platform = platformSelect.value;
      const fileExtension = platform === "windows" ? "bat" : "sh";
      const blob = new Blob([outputCommandText.value], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `start_server.${fileExtension}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
    

  
    populateDropdown();
    generateStartCommand();
  });  
