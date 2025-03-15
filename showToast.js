export function showToast(operation , id) {

    const toast = document.createElement("div");
    toast.classList.add("toast");

    //set the text content of the toast based on the operation

    if(operation == 'add'){
        toast.textContent = `Product With ID ${id} has been added `;
    }else{
        toast.textContent = `Product with Id ${id} has been deleted. `;
    };

    document.body.appendChild(toast);


    //Automatically remove the toast after a few seconds
     setTimeout(() => {
        toast.remove();
     },2000);

}