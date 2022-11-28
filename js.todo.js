const listscontainer = document.querySelector(".listscontainer");
const newlistForm = document.querySelector("data-new-list-Form");
const newlistInput = document.querySelector("data-new-list-input");

let lists = [{
id: 1,
name: "list1"
},
{
id: 2,
name: "list2"
},
{
id: 3,
name: "list3"
},
{
id: 4,
name: "list4"
}]
 newlistForm.addEventListener("submit", function(e) {
e.preventDefault();
const listName = newlistInput.value;
if (listName == null || listName == "") return;
const list = createList(listName);

})

function createList(name) {
return { id: Date.now().toString(), name: name }
}


function addList() {
    <li class="list">work</li>
    clearElement(listscontainer)
    lists.forEach(list => {
        const listElement = document.createElement("li");
        listElement.dataset.listId = list.id;
        listElement.classList.add("list");
        listElement.innerText = list;
        listscontainer.appendChild(listElement);
    });


    function clearElement(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);

        }
    
        render()
    }
    function render() {
        lists.forEach(list => {
            const listElement = document.createElement("li");
            listElement.dataset.listId = list.id;
            listElement.classList.add("list");
            listElement.innerText = list.name;
            listscontainer.appendChild(listElement);
        });
    }
    render()
}

