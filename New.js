
var newForm = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
newForm.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);


function bookAppointment()
{
    const name = document.getElementById("name").value;
    // localStorage.setItem("Name", name);

    const mail = document.getElementById("mail").value;
    // localStorage.setItem("E-mail ID", mail);

    const phone = document.getElementById("phone").value;
    // localStorage.setItem("Phone Number", phone);

    const date = document.getElementById("date").value;
    // localStorage.setItem("Appointment Date", date);

    const time = document.getElementById("time").value;
    // localStorage.setItem("Appointment Time", time);

    var myObj = 
    {
        Name: name,
        Mail: mail,
        Conatct: phone,
        Date: date,
        Time: time
    };

    var myObj_serialized = JSON.stringify(myObj);
    localStorage.setItem(mail, myObj_serialized);
    var myObj_deserialized = JSON.parse(localStorage.getItem(mail));
    alert("Appointment Booked");
}

function addItem(e)
{
    e.preventDefault();

    // Get input value
    var newName = document.getElementById('name').value;
    var newMail = document.getElementById('mail').value;
    var newPhone = document.getElementById('phone').value;
    var newDate = document.getElementById('date').value;
    var newTime = document.getElementById('time').value;



    // Create new li element
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newName + " - " + newMail + " - " + newPhone + " - " + newDate + " - " + newTime));            

    // Append li to list
    itemList.appendChild(li); 



    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-primary btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('Delete'));

    // Append button to li
    li.appendChild(deleteBtn);
}

// Remove item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
            localStorage.removeItem(mail);
            alert("Removed from Local Storage");
        }
    }
}




const form = document.querySelector("form")
form.addEventListener('submit', e =>
{
    if (!form.checkValidity())
    {
        e.preventDefault()
    }
    form.classList.add('was-validated')
})
