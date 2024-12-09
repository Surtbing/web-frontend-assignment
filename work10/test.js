
let users = [];
let editingIndex = -1;

document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const userData = {
        username: document.getElementById('username').value,
        name: document.getElementById('name').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        age: document.getElementById('age').value,
        occupation: document.getElementById('occupation').value
    };

    if (editingIndex === -1) {
        users.push(userData);
    } else {
        users[editingIndex] = userData;
        editingIndex = -1;
    }

    updateTable();
    this.reset();
});

function updateTable() {
    const tbody = document.getElementById('userTableBody');
    tbody.innerHTML = '';

    users.forEach((user, index) => {
        const row = tbody.insertRow();
        Object.values(user).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });
}

document.getElementById('editBtn').addEventListener('click', function () {
    const selectedRow = document.querySelector('#userTableBody tr:last-child');
    if (selectedRow) {
        const cells = selectedRow.cells;
        document.getElementById('username').value = cells[0].textContent;
        document.getElementById('name').value = cells[1].textContent;
        document.querySelector(`input[name="gender"][value="${cells[2].textContent}"]`).checked = true;
        document.getElementById('age').value = cells[3].textContent;
        document.getElementById('occupation').value = cells[4].textContent;
        editingIndex = users.length - 1;
    }
});

document.getElementById('deleteBtn').addEventListener('click', function () {
    if (users.length > 0) {
        users.pop();
        updateTable();
    }
});