//On Window load generate a new motivational quote pulled from the following array.
window.onload = function () {
	let MoD = ['"Hey there! lets be productive today!"', '"Your future is created by what you do today."', 
	'"Wake up with determination. Go to bed with satisfaction."', '"What you do today can improve your tomorrow."', '"You CAN do this!"'];

	let modSpace = document.querySelector("#modSpace").innerHTML = MoD[Math.floor(Math.random() * MoD.length)];
};

//Select the necessary pieces from our HTML.
let addBtn = document.querySelector(".add_todo");
let textField = document.querySelector(".txt_field");
let todosList = document.querySelector(".todosList");
let completedTodos = document.querySelector(".completedTodos");

//The functionality itself
//When user clicks add button
//Text inside text field will be added to the todo list. Along with the elements buttons and span

const functionality = () => {
	if(textField.value == ""){
		addBtn.addEventListener("click", () => {
		})
	}
	else {
		let newLi = document.createElement("li");
		newLi.classList.add("todo");

		let buttons = document.createElement("div");
		buttons.classList.add("buttons");

		let completed = document.createElement("a");
		completed.classList.add("check");

		let span = document.createElement("span");
		span.classList.add("btn_divider");
		span.innerHTML = "|"

		let remove = document.createElement("a");
		remove.classList.add("trash");

		let checkImg = document.createElement("i");
		checkImg.classList.add("far");
		checkImg.classList.add("fa-check-circle");
		checkImg.classList.add("fa-2x");


		let removeImg = document.createElement("i");
		removeImg.classList.add("far");
		removeImg.classList.add("fa-trash-alt");
		removeImg.classList.add("fa-2x");

		completed.appendChild(checkImg);
		remove.appendChild(removeImg);

		buttons.appendChild(completed);
		buttons.appendChild(span);
		buttons.appendChild(remove);

		newLi.textContent = textField.value;
		newLi.appendChild(buttons);

		todosList.insertBefore(newLi, todosList.childNodes[0]);
		textField.value = "";


		//Functionality to remove list item when trash button is clicked

		const removeItem = () => {
			newLi.remove();
		}

		remove.addEventListener("click", removeItem);

		completed.addEventListener("click", () => {
			newLi.classList.add("done");
			completedTodos.insertBefore(newLi, completedTodos.childNodes[0]);
			buttons.removeChild(completed);
		});
	}

}

//Attaching the functionality function to our button and enter key event for the textfield.
addBtn.addEventListener("click", () => {
	functionality();
});

textField.addEventListener("keyup", (e) => {
	e.preventDefault();
	let key = e.which || e.keyCode;
	if (key === 13) {
		functionality();
	}
});
