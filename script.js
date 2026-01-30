/*
  Wings Billing App
  Created by: Amol Dixit
  Date: 31st Aug 2025
  
  File Desc: Main JS Script
*/



// Store tabs in memory
let tabs = {};
let activeTab = null;
let archivedTabs = {}; // stores closed tabs for reporting


// --- LocalStorage Helpers ---
function saveData() {
  localStorage.setItem("tabsData", JSON.stringify(tabs));
  localStorage.setItem("archivedTabs", JSON.stringify(archivedTabs));
  localStorage.setItem("activeTab", activeTab);
}

function loadData() {
  const savedTabs = localStorage.getItem("tabsData");
  const savedArchived = localStorage.getItem("archivedTabs");
  const savedActive = localStorage.getItem("activeTab");

  if (savedTabs) tabs = JSON.parse(savedTabs);
  if (savedArchived) archivedTabs = JSON.parse(savedArchived);
  if (savedActive && tabs[savedActive]) activeTab = savedActive;
}


const activeTabNameDisplay = document.getElementById("active-tab-name");


// DOM elements
const tabsList = document.getElementById("tabs-list");
const billItems = document.getElementById("bill-items");
const totalDisplay = document.getElementById("total");
const newTabBtn = document.getElementById("new-tab-btn");
const closeTabBtn = document.getElementById("close-tab-btn");
const menuButtons = document.querySelectorAll(".menu-item");
const customItemBtn = document.getElementById("custom-item-btn");
const exportBtn = document.getElementById("export-btn");
const purgeBtn = document.getElementById("purge-btn");
const menuSearch = document.getElementById("menu-search");




// Render menu dynamically
function renderMenu(menu) {
  const menuItemsContainer = document.getElementById("menu-items-container");
  menuItemsContainer.innerHTML = ""; // clear old items

  Object.keys(menu).forEach(category => {
    // Add category title
    const sectionTitle = document.createElement("h3");
    sectionTitle.textContent = category;
    menuItemsContainer.appendChild(sectionTitle);

    // Add buttons for each item
    menu[category].forEach(item => {
      const btn = document.createElement("button");
      btn.classList.add("menu-item");
      btn.dataset.name = item.name;
      btn.dataset.price = item.price;
      btn.textContent = `${item.name} (£${item.price})`;

      // Add click handler to add item to active tab
      btn.addEventListener("click", () => {
        if (!activeTab) {
          alert("Please open a tab first!");
          return;
        }
        tabs[activeTab].push({ name: item.name, price: item.price });
        renderBill();
        saveData();
      });

      menuItemsContainer.appendChild(btn);
    });
  });
}




loadData();
renderTabs();
renderBill();
renderMenu(menu); // render menu directly from menu.js




// Create a new tab
// Create a new tab (case-insensitive duplicate check)
newTabBtn.addEventListener("click", () => {
  const tabName = prompt("Enter tab name (e.g. Table 1, Monday Party):");
  if (!tabName) return;

  const lowerTabName = tabName.toLowerCase();
  const duplicate = Object.keys(tabs).some(existing => existing.toLowerCase() === lowerTabName);

  if (!duplicate) {
    tabs[tabName] = [];
    setActiveTab(tabName);
    renderTabs();
    saveData();
  } else {
    alert("Invalid or duplicate tab name.");
  }
});


// Switch active tab
function setActiveTab(tabName) {
  activeTab = tabName;
  activeTabNameDisplay.textContent = tabName || "None";
  renderTabs();   // re-render list (now without any highlight)
  renderBill();
}

// Render tabs in the left panel
function renderTabs_Old() {
  tabsList.innerHTML = "";
  Object.keys(tabs).forEach(tabName => {
    const li = document.createElement("li");
    li.textContent = tabName;
    li.style.cursor = "pointer";
    li.addEventListener("click", () => setActiveTab(tabName));
    tabsList.appendChild(li);
  });
}

// Render tabs in the left panel
function renderTabs() {
  tabsList.innerHTML = "";
Object.keys(tabs).forEach(tabName => {
  const li = document.createElement("li");
  li.textContent = tabName;
  li.classList.add("tab-item");

  if (tabName === activeTab) {
    li.classList.add("active"); // add active class for highlight
  }

  li.addEventListener("click", () => {
    activeTab = tabName;
    activeTabNameDisplay.textContent = activeTab;
    renderBill();
    renderTabs(); // re-render to update highlight
  });

  tabsList.appendChild(li);
});

}


// Render bill for active tab
function renderBill() {
  billItems.innerHTML = "";
  if (!activeTab) return;

  let total = 0;
  tabs[activeTab].forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} (£${item.price})`;

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "10px";
    removeBtn.addEventListener("click", () => {
      tabs[activeTab].splice(index, 1);
      renderBill();
      saveData();
    });

    li.appendChild(removeBtn);
    billItems.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = `Total: £${total.toFixed(2)}`;
}

// Add menu item to active tab
// menuButtons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     if (!activeTab) {
//       alert("Please open a tab first!");
//       return;
//     }
//     const name = btn.getAttribute("data-name");
//     const price = parseFloat(btn.getAttribute("data-price"));
//     tabs[activeTab].push({ name, price });
//     renderBill();
//     saveData();
//   });
// });

// Custom Item Buttom
customItemBtn.addEventListener("click", () => {
  if (!activeTab) {
    alert("Please open a tab first!");
    return;
  }

  const name = prompt("Enter item name:");
  if (!name) return;

  const priceInput = prompt("Enter item price (numbers only):");
  if (!priceInput || isNaN(priceInput)) {
    alert("Invalid price!");
    return;
  }

  const price = parseFloat(priceInput);
  tabs[activeTab].push({ name, price });
  renderBill();
  saveData();
});

// Export Data
/*exportBtn.addEventListener("click", () => {
  const dataToExport = {
    openTabs: tabs,
    archivedTabs: archivedTabs,
    exportedAt: new Date().toISOString()
  };

  const dataStr = JSON.stringify(dataToExport, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `restaurant_data_${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  alert("Data exported successfully!");
});
*/
// csv export
// Export Data as CSV
exportBtn.addEventListener("click", () => {
  let rows = [["Tab", "Item", "Price"]]; // header row

  // Open tabs
  for (const [tabName, items] of Object.entries(tabs)) {
    items.forEach(item => {
      rows.push([tabName, item.name, item.price]);
    });
  }

  // Archived tabs
  for (const [tabName, items] of Object.entries(archivedTabs)) {
    items.forEach(item => {
      rows.push([tabName, item.name, item.price]);
    });
  }

  // Convert rows to CSV string
  let csvContent = rows.map(e => e.join(",")).join("\n");

  // Create downloadable blob
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `reporting/restaurant_orders_${Date.now()}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  alert("CSV exported successfully!");
});



// Close active tab
closeTabBtn.addEventListener("click", () => {
  if (!activeTab) {
    alert("No active tab to close.");
    return;
  }

  const confirmClose = confirm(`Close and bill tab "${activeTab}"?`);
  if (!confirmClose) return;

  // Move the tab to archivedTabs with timestamp to ensure uniqueness
  const timestamp = Date.now();
  archivedTabs[`${activeTab}_${timestamp}`] = tabs[activeTab];

  // Remove from open tabs
  delete tabs[activeTab];
  activeTab = null;

  // Reset middle panel
  activeTabNameDisplay.textContent = "None";
  billItems.innerHTML = "";                // clear bill list
  totalDisplay.textContent = "Total: £0.00"; // reset total

  renderTabs();
  renderBill();
  saveData();
});

purgeBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to purge all archived tabs? This cannot be undone.")) {
    archivedTabs = {};
    saveData();
    alert("Archived tabs cleared.");
  }
});


menuSearch.addEventListener("input", () => {
  const searchTerm = menuSearch.value.toLowerCase();

  document.querySelectorAll("#menu-items-container .menu-item").forEach(btn => {
    const itemName = btn.getAttribute("data-name").toLowerCase();
    if (itemName.includes(searchTerm)) {
      btn.style.display = "inline-block";
    } else {
      btn.style.display = "none";
    }
  });
});

