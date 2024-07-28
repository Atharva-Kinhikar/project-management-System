// script.js
const searchInput = document.getElementById('search');
const projectTable = document.getElementById('project-table');
const pageButtons = document.querySelectorAll('.page-button');
const rowsPerPage = 10; // Define the number of rows per page
let currentPage = 1; // Initialize the current page
let projects = []; // Initialize the projects array

// Function to filter projects based on search input
function filterProjects() {
  const searchTerm = searchInput.value.toLowerCase();
  const tableRows = projectTable.querySelectorAll('tbody tr');

  tableRows.forEach(row => {
    const projectName = row.querySelector('td:first-child').textContent.toLowerCase();
    if (projectName.includes(searchTerm)) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  });
}

// Function to handle page navigation
function handlePageNavigation(page) {
  currentPage = parseInt(page); // Update the current page
  const startRow = (currentPage - 1) * rowsPerPage; // Calculate the start row index
  const endRow = startRow + rowsPerPage; // Calculate the end row index

  // Update table rows with the new data
  const tableBody = projectTable.querySelector('tbody');
  tableBody.innerHTML = ''; // Clear the table body

  // Assuming 'projects' is an array of project objects
  projects.slice(startRow, endRow).forEach(project => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${project.name}</td>
      <td>${project.description}</td>
    `;
    tableBody.appendChild(row);
  });

  // Update pagination buttons
  pageButtons.forEach(button => {
    const pageNumber = parseInt(button.textContent);
    if (pageNumber === currentPage) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  // Disable/enable previous/next buttons
  const prevButton = pageButtons[0];
  const nextButton = pageButtons[pageButtons.length - 1];
  if (currentPage === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }
  if (currentPage === Math.ceil(projects.length / rowsPerPage)) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

// Function to fetch projects data from API/local storage
function fetchProjects() {
  // Replace with actual API call or local storage retrieval
  projects = [
    { name: 'Project 1', description: 'Description 1' },
    { name: 'Project 2', description: 'Description 2' },
    { name: 'Project 3', description: 'Description 3' },
    // ...
  ];
}

// Event listeners
searchInput.addEventListener('input', filterProjects);

pageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const page = button.textContent;
    handlePageNavigation(page);
  });
});

// Initialize the projects data and pagination
fetchProjects();
handlePageNavigation(1);