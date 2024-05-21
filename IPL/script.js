const scoreList = document.getElementById("score-list");

const scores = [
    {
        date: "19 Apr, 2024",
        time: "02:46 mins",
        team1: "RCB",
        score1: "18.1k",
        team2: "CSK",
        score2: "4.1k",
    },
    {
        date: "18 Apr, 2024",
        time: "01:15 mins",
        team1: "MI",
        score1: "10.8k",
        team2: "RR",
        score2: "27.5k",
    },
    // Add more scores as needed
];

scores.forEach((score) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <p>${score.date}</p>
        <p>${score.time}</p>
        <p>${score.team1} - ${score.score1}</p>
        <p>${score.team2} - ${score.score2}</p>
    `;
    scoreList.appendChild(listItem);
});

/*
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item

function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('mouseenter', selectItem);
});

*/
// Add interactivity to the table, such as sorting by a column
/*
const table = document.getElementById("pointsTable");
const ths = table.getElementsByTagName("th");

for (let i = 0; i < ths.length; i++) {
	ths[i].addEventListener("click", () => {
		const direction = ths[i].dataset.direction || "asc";
		const column = i;

		sortTable(table, column, direction === "asc" ? "desc" : "asc");

		for (let j = 0; j < ths.length; j++) {
			ths[j].dataset.direction = "";
		}

		ths[column].dataset.direction = direction === "asc" ? "desc" : "asc";
	});
}

function sortTable(table, column, direction) {
	const tbody = table.getElementsByTagName("tbody")[0];
	const rows = Array.from(tbody.rows);

	rows.sort((a, b) => {
		const aValue = direction === "asc" ? a.cells[column].innerText : b.cells[column].innerText;
		const bValue = direction === "asc" ? b.cells[column].innerText : a.cells[column].innerText;

		return aValue.localeCompare(bValue);
	});

	for (let i = 0; i < rows.length; i++) {
		tbody.appendChild(rows[i]);
	}
}*/
// Add interactivity to the page, such as a dropdown menu for sorting teams
const select = document.createElement("select");
select.innerHTML = `
	<option value="name">Name</option>
	<option value="city">City</option>
	<option value="year">Year founded</option>
`;

const selectContainer = document.createElement("div");
selectContainer.appendChild(select);

document.body.insertBefore(selectContainer, document.querySelector("main"));

select.addEventListener("change", () => {
	const teams = document.querySelectorAll("main section");
	const value = select.value;
})
	//teams.forEach((team) => {