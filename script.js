
const items = [
  { mod: "Custom Res", iconpath: "moddata/res.png", desc: "Change your game resolution to silly values. Play 4:3 stretched like god intended.", dlpath: 	"mods/CustomRes.zip"},
  { mod: "The Good Ending", iconpath: "moddata/goodending.png", desc: "A silly map I made featuring custom scripting and animations.", dlpath: "https://drive.proton.me/urls/J4KVXQ2JFW#hREYwzLwigCH" },
  { mod: "CruS Mod Packager", iconpath: "moddata/plugin.png", desc: "Godot plugin made specifically for exporting Cruelty Squad mods. It streamlines the process of fetching imported files, creating the mod info and exporting the mod, among other useful things.", dlpath: "https://github.com/DX9T0/CruSModPackager" },
  { mod: "Slow Motion Implant", iconpath: "moddata/mushroom.png", desc: "Allows the user to slow time. Consecutive kills increase refill the slow motion duration.", dlpath: "https://www.mediafire.com/file_premium/rmsz7rcxqwaiq7k/" },
  { mod: "Dual Wielding", iconpath: "moddata/guns.png", desc: "Wield any combination of 2 weapons at the same time. Probably a little buggy due to the nature of the game's code.", dlpath: "https://www.mediafire.com/file_premium/kuo8wilpmvwm0ma/" },
  { mod: "Easier Reload(s)", iconpath: "moddata/Nambu.png", desc: "Small accessibilty mods to make reloading less reliant on mouse sensitivity.", dlpath: "https://app.mediafire.com/itmhg1q1z09h5" },
  { mod: "Remote Explosive Implant", iconpath: "moddata/none.png", desc: "!Preview Version (not finished)! Remote explosives that can be detonated from a distance after being thrown. They stick to surfaces and NPCs, and can also be picked back up.", dlpath: "https://www.mediafire.com/file_premium/8k10krzd2t806ec/" },
  { mod: "Divine Decals", iconpath: "moddata/vomit_n.png", desc: "Replaces textures for blood, vomit and gibs with goopier versions that react to light. Also makes bullet holes appear 3D. Achieved with custom normal and heightmaps.", dlpath: "https://www.mediafire.com/file_premium/w8cd2hw0m5aq36m/" },
  { mod: "Slide Implant", iconpath: "moddata/slide_implant_icon.png", desc: "An implant that allows you to slide around, similar to other movement shooters.", dlpath: "https://www.mediafire.com/file_premium/pzknvvyl73cxar5/" },
  { mod: "Jump Map Utilities", iconpath: "moddata/s.png", desc: "Some tools for mappers making parkour maps.", dlpath: "https://www.mediafire.com/file_premium/lf1fmoit0vzu1zp/" },
  { mod: "Jump Map Example", iconpath: "moddata/preview.png", desc: "A short jump/kz/parkour/obstacle map showcasing my mapping utilities. Works standalone, no need to download the utlities.", dlpath: "https://www.mediafire.com/file_premium/8lxkix53a2oyzgl/" },
  { mod: "Stutter Fix", iconpath: "moddata/stock.png", desc: "Forces the game to render nearly every material for a few frames when you load into a level. Helps with stuttering, especially on AMD graphics cards.", dlpath: "https://www.mediafire.com/file_premium/gi9cx3r94c74c4h/" },
  { mod: "Armor Fix (Obsolete)", iconpath: "moddata/heavy_armor.png", desc: "A previous fix for implants armor values not having any effect. Armor values were fixed in and update on 27/03/2023.", dlpath: "https://www.mediafire.com/file_premium/o4f53megijtsscf/" },
  { mod: "Randomiser (Old AF)", iconpath: "moddata/Randomiser.png", desc: "Upon loading a level, randomises your implants, difficulty and targets in the level. Not very fun or balanced, it was my first mod.", dlpath: "https://www.mediafire.com/file_premium/kjyhe0wem05zokk/" },
];

function loadTableData(items) {
  const iconSize = 80;
  const table = document.getElementById("modTableBody");
  items.forEach(item => {
    let row = table.insertRow();
    let modCell = row.insertCell(0);
    modCell.setAttribute("style", "text-align:center");
    modCell.innerHTML = `<p>${item.mod}</p><img src="${item.iconpath}" width="${iconSize}" height="${iconSize}" alt="${item.mod} icon">`;

    let descCell = row.insertCell(1);
    descCell.innerHTML = `<p>${item.desc}</p>`;

    let dlCell = row.insertCell(2);
    dlCell.setAttribute("style", "text-align:center");
    dlCell.innerHTML = `<a href="${item.dlpath}" download><img src="images/dl2.png" width="${iconSize}" height="${iconSize}" alt="Download ${item.mod}" onclick="download_clicked()"></a>`;
  });
}

function download_clicked() {
  var audio = new Audio('mmm.wav');
  audio.play();
}

document.addEventListener('DOMContentLoaded', (event) => {
  loadTableData(items);
  document.getElementById("datemodified").textContent = document.lastModified;
});