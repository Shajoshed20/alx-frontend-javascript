// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Ugochi",
  lastName: "Doe",
  age: 20,
  location: "New York",
};
const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

// Render the table
const table = document.createElement("table");
table.border = "1";

// Add table headers
const headerRow = table.insertRow();
const headerFirstNameCell = headerRow.insertCell(0);
headerFirstNameCell.textContent = "First Name";
const headerLocationCell = headerRow.insertCell(1);
headerLocationCell.textContent = "Location";

// Add rows for each student
studentsList.forEach((student) => {
  const row = table.insertRow();

  const cellFirstName = row.insertCell(0);
  cellFirstName.textContent = student.firstName;

  const cellLocation = row.insertCell(1);
  cellLocation.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
