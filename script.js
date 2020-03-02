function addTask(){
    let task = document.getElementById("dakhel").value;
    let span = document.createElement("span");
    let check = document.createElement("input");
    check.type = "checkbox";
    check.id = "chk";
    let p = document.createElement("p");
    let txt = document.createTextNode(task);

    p.appendChild(txt);
    span.appendChild(check);
    span.appendChild(p);

    document.getElementById("result").appendChild(span);


}