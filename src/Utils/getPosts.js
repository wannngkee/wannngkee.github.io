const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../pages/ProjectPageDetail/Posts");
let postlist = [];

const getPosts = async () => {
  await fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("Failed to list post: " + err);
    }
    files.forEach((file) => {
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        let post;
        const lines = contents.split("\n");
        const newlines = lines.filter((line) => line !== "");
        post = {
          title: newlines[0],
          date: newlines[1],
          content: newlines.slice(2),
        };
        postlist.push(post);
      });
    });
  });
};
getPosts();
