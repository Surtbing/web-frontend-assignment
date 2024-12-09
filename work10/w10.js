document.addEventListener('DOMContentLoaded', function () {
    const saveButton = document.getElementById('save');
    const tableBody = document.querySelector('table tbody');

    // 保存按钮的点击事件
    saveButton.addEventListener('click', function (event) {
        event.preventDefault(); // 阻止表单提交

        // 获取表单的值
        const username = document.getElementById('username').value;
        const name = document.getElementById('name').value;

        // 获取选中的性别
        const gender = document.querySelector('input[name="gender"]:checked')?.value;

        const age = document.getElementById('age').value;
        const career = document.getElementById('career').value;

        // 创建一个新行
        const newRow = document.createElement('tr');

        // 添加单元格数据
        newRow.innerHTML = `
            <td>${username}</td>
            <td>${name}</td>
            <td>${gender}</td>
            <td>${age}</td>
            <td>${career}</td>
            <button class="edit">编辑</button><button class="delete">删除</button></td>
        `;

        // 将新行添加到表格中
        tableBody.appendChild(newRow);

        // 清空表单
        document.querySelector('.userForm').reset();
    });
});
