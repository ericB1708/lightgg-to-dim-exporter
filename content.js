//website for the plugin : https://www.light.gg/

const stableHtml = document.body;

const config = {
  childList: true,
  subtree: true,
  characterData: true,
};

const callback = (mutationList, observer) => {
  const targetParent = document.getElementById("perk-playground");

  if (targetParent && targetParent.children.length > 3) {
    const targetElement = targetParent.children[3];

    //console.log("Loaded! targetElement found:", targetElement);

    var exportButton = document.createElement("button");
    exportButton.classList.add("dim-export-btn");
    var buttonText = document.createTextNode("Copy Dim search");
    exportButton.appendChild(buttonText);

    exportButton.addEventListener("click", () => {
      const h2Element = document.querySelector(".item-name h2");
      let NameOfItem = "";
      if (h2Element) {
        const itemName = h2Element.textContent.trim();
        NameOfItem = itemName;
        //console.log("Weapon Name:", itemName);
      }

      const selectedPerks = document.querySelectorAll(
        "#perk-playground > ul > li.selected",
      );
      let perkIdList = [];
      selectedPerks.forEach((perk) => {
        console.log(perk);
        const perkLi = perk.querySelector(
          "li > ul.list-unstyled > li.selected",
        );
        if (perkLi) {
          const id = perkLi.getAttribute("data-id");
          perkIdList.push(id);
          //console.log("Found Perk-ID:", id);
        }
      });
      let perkNameList = [];
      perkIdList.forEach((id) => {
        const aTag = document.querySelector('[data-id="' + id + '"] > a');
        if (aTag) {
          const img = aTag.querySelector("img");

          if (img && img.alt) {
            //console.log("Alt-Text present:", img.alt);
            perkNameList.push(img.alt);
          } else {
            //console.log("no Alt-Text.");
          }
        }
      });
      let dimSearchString = "exactname:" + '"' + NameOfItem + '"' + " ";
      perkNameList.forEach((pearkName) => {
        dimSearchString =
          dimSearchString + "perkname:" + '"' + pearkName + '"' + " ";
      });
      console.log("DIM search : " + dimSearchString);

      navigator.clipboard
        .writeText(dimSearchString)
        .then(() => {
          exportButton.textContent = "DIM String Copied!";

          setTimeout(() => {
            exportButton.textContent = "Copy Dim search";
          }, 2000);
        })
        .catch((err) => {
          console.error("Error copying to the clipboard:", err);
        });
    });

    targetElement.appendChild(exportButton);
    observer.disconnect();
  }
};

const observer = new MutationObserver(callback);
observer.observe(stableHtml, config);
