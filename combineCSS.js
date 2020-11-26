const {
    readdirSync,
    readFile,
    writeFile,
    access,
    rm
} = require('fs');

const source = __dirname + "/styles";
const destination = __dirname + "/out/styles.css";

access(destination, (err) => {
    if (err) {
        return;
    } else {
        rm(destination, (err) => err ? console.error(error) : null);
    }
});
const getDirectories = source =>
    readdirSync(source);

const styleDirectories = getDirectories(source);

styleDirectories.forEach((directory) => {
    readdirSync(`${source}/${directory}`)
        .forEach((file) => {
            const longFileName = `${source}/${directory}/${file}`;
            readFile(longFileName, (err, contents) => {
                if (err) {
                    console.error(err);
                    return;
                } else {
                    contents = `\n /* *************\n   ${file}    \n ************** */ \n` + contents;
                    writeFile(destination, contents, {
                        flag: 'a+'
                    }, (err) => err ? console.error(err) : null);
                }
            })
        })
});