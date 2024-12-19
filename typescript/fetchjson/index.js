"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (responce) {
    var todos = responce.data;
    var id = todos.id, title = todos.title, completed = todos.completed;
    console.log("\n          The Todo with ID: ".concat(id, "\n          Had a title of: ").concat(title, "\n          Is it finished ? ").concat(completed, "\n      "));
});
