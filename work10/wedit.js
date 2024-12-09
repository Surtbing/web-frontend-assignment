document.addEventListener('DOMContentLoaded',function() {
    let users = [];
    document.getElementById('editBtn').addEventListener('click', function() {
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
    
    document.getElementById('deleteBtn').addEventListener('click', function() {
        if (users.length > 0) {
            users.pop();
            updateTable();
        }
    });
});


