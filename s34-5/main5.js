let addBtn = document.getElementById('btn');
let table = document.getElementById('table');

let data = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        position: "Development"
    },
    {
        id: 2,
        name: "Trần Thị B",
        position: "Development"
    },
    {
        id: 3,
        name: "Phạm Văn C",
        position: "Project Manager"
    }
]

data = JSON.parse(localStorage.getItem('b5')) || [];
displayDatas()
function displayDatas() {
    table.innerHTML = ` <tr class="thead">
        <td>STT</td>
        <td>Tên</td>
        <td>Chức vụ</td>
    </tr>`;
    data.forEach((item, index) => {
        item.id = index + 1
        table.innerHTML += `  
   <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.position}</td>
    </tr>
   `
    });
    localStorage.setItem("b5", JSON.stringify(data))

}

addBtn.onclick = function () {
    let id = data.length + 1;
    let name = document.getElementById('name').value
    let position = document.getElementById('position').value
    if (name === '' || position === '') {
        alert(`Please fill the name and position`)
    } else {
        data.push({ id, name, position })
    }
    displayDatas()
}