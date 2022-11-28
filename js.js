const listscontainer = document.querySelector(".listscontainer");

let lists = ["list1", "list2", "list3"];

function addList() {
    <li class="list">work</li>
    clearElement(listscontainer)
    lists.forEach(list => {
        const listElement = document.createElement("li");
        listElement.classList.add("list");
        listElement.innerText = list;
        listscontainer.appendChild(listElement);
    });


    function clearElement(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    
        render()
