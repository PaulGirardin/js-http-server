fetch('https://api.myjson.com/bins/9l2ez').then(function (resp) {
    return resp.json();
}).then(function (data) {
    var list = document.getElementById('list');
    var todos = data.todos;
    console.log(todos);
    // return todos.map(function (todo) {
    //     var li = document.createElement('li');
    //     li.innerHTML = '' + todo.label;
    //     list.appendChild(li);
    //     if (todo.complete) {
    //         li.classList.add('done');
    //     }
    // });
});