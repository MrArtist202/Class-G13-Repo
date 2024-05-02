// This is a new File to be commited.

console.log("Adding after edit in browser");
console.log("Added in browser");

const app = require('express')();
app.get("/", (req,res) => {
    res.json({ message : "cicd server g13 running" });
})
app.listen(4000, () => {
    console.log(("Server running on 7000"));
})