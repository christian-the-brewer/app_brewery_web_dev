/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import prompt from "prompt-sync";


inquirer
    .prompt([
        {
            message: "Type in your url:",
            name: "URL"
        }
    ])
    .then((answers) => {
        console.log(answers.URL);
        const qr_svg = qr.image(answers.URL);
        qr_svg.pipe(fs.createWriteStream('qr.png'));
        fs.writeFile("url.txt", answers.URL, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("success");
            }
        });
        // fs.writeFile("qr.svg", qr_svg, (err) => {
        //     if (err)
        //         console.log(err);
        //     else {
        //         console.log("QR written successfully\n");
        //     }
        // })
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("something else went wrong");
        }
    });
//
// fs.writeFile("url.txt", answers.URL, (err) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log("File written successfully\n");
//     }
// })


