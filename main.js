import { LinkedList, Node } from "./linkedList.js";

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("first list");
console.log(list.toString());
console.log(list.size());
console.log("remove the last element");
console.log(list.pop());
console.log(list.toString());
console.log("check position of the snake")
console.log(list.findIndex("snake"));
console.log("check position of the dog")
console.log(list.findIndex("dog"));
console.log("check value at 2")
console.log(list.at(2));
console.log("add at the beginnig goat");
list.prepend("goat");
console.log(list.toString());
console.log("check contains goat");
console.log(list.contains("goat"));
console.log("check contains sheep");
console.log(list.contains("sheep"));


