const codingDescContainerClass="py-4 px-3 coding_desc_container__gdB9M"

// window.addEventListener("load",addAIHelpButton);//this won't work in single page application (SAP'S ,react ones) 

const observer= new MutationObserver(()=>{
    addAIHelpButton();
})
observer.observe(document.body, {childList:true,subtree:true} );

addAIHelpButton();//for the first time

function addAIHelpButton(){
    const btn= document.createElement("button");

    btn.id = "my-ai-helper-btn";
    btn.innerText = "AI Helper";

    btn.style.top = "20px";
    btn.style.right = "20px";
    btn.style.padding = "10px 16px";
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "6px";
    btn.style.fontSize = "14px";
    btn.style.fontWeight = "bold";
    btn.style.cursor = "pointer";
    btn.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.2)";
    btn.style.zIndex = "9999";
    btn.style.transition = "background-color 0.3s ease";

    const codingDescContainer= document.getElementsByClassName(codingDescContainerClass)[0];
    codingDescContainer.insertAdjacentElement("beforeend",btn);
}

