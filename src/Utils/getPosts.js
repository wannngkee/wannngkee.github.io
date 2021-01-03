const dayjs = require("dayjs");
const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "../pages/Posts");
let postlist = [];

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("Failed to list post: " + err);
    }
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            return obj;
          }
        };
        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };
        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const content = parseContent({ lines, metadataIndices });
        post = {
          title: metadata.title,
          date: metadata.date,
          brief: metadata.brief,
          cover: metadata.cover,
          tags: metadata.tags.split(","),
          content: content,
        };
        postlist.push(post);
        if (i === files.length - 1) {
          const sortedList = postlist.sort((a, b) => {
            return dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync("src/posts.json", data);
        }
      });
    });
  });
};
getPosts();
