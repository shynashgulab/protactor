const nodemailer = require("nodemailer");
const directoryFiles = require('../jsons/directory.json');
const jsonData = require('read-write-json');

// Get count of passed and failed from combined.json
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();

let basePath = directoryFiles.reportDirectory + '/' + day + '-' + month + '-' + year;
// let reportZipFilePath = directoryFiles.emailableReportDirectory + '/' + day + '-' + month + '-' + year + '.zip';

let combinedJsonFilePath = basePath + '/combined.json';
let json = JSON.parse(jsonData.readJSONFile(combinedJsonFilePath));

let passCount = 0; 
let failCount = 0; 
for (let i = 0; i < json.length; i++){
    if (json[i].passed === false){
        failCount = failCount + 1;
    }
    if (json[i].passed === true){
        passCount = passCount + 1;
    }
}

let totalCount = passCount + failCount

let uploadedData = jsonData.readJSONFile(directoryFiles.reportLocation);
let downloadURL = 'https://drive.google.com/uc?export=download&id=' + uploadedData.uploadedFileId;

let transport = nodemailer.createTransport({
	service: 'Gmail',
    auth: {
        user: "tester.quovantis@gmail.com",
        pass: "quo@1234"
    }
});
let mailOptions = {
    from: 'tester.quovantis@gmail.com', // sender address
    to: 'amandeep.anand@quovantis.com, naman.agrawal@quovantis.com', // list of receivers
    subject: 'Automation Suite Result', // Subject line
    // attachments: [{
    //     path: reportZipFilePath,
    // }],
};
mailOptions.html = `
                    <html>
                    <body>
                    <p>Hi, <br/><br/>Automation script executed, please use the following link to download the report</p>
                    <p><a href="${downloadURL}">Link to Download Report</a></p>
                    <p>Summary:</p>
                    <table style="margin-bottom:10px;border-collapse:collapse;empty-cells:show;">
                    <tbody>
                    <tr>
                    <th style="font-size:15px;border-width:1px;border-style:solid;border-color:#009;padding-top:.25em;padding-bottom:.25em;padding-right:.5em;padding-left:.5em;vertical-align:bottom;">Total Cases</th>
                    <th style="font-size:15px;border-width:1px;border-style:solid;border-color:#009;padding-top:.25em;padding-bottom:.25em;padding-right:.5em;padding-left:.5em;vertical-align:bottom;">Passed</th>
                    <th style="font-size:15px;border-width:1px;border-style:solid;border-color:#009;padding-top:.25em;padding-bottom:.25em;padding-right:.5em;padding-left:.5em;vertical-align:bottom;">Failed</th>
                    </tr>
                    <tr>
                    <td style="font-size:15px;border-width:1px;border-style:solid;border-color:#009;padding-top:.25em;padding-bottom:.25em;padding-right:.5em;padding-left:.5em;vertical-align:top;background-color:#E6EBF9;" >${totalCount}</td>
                    <td style="font-size:15px;border-width:1px;border-style:solid;border-color:#009;padding-top:.25em;padding-bottom:.25em;padding-right:.5em;padding-left:.5em;vertical-align:top;background-color:#E6EBF9;" >${passCount}</td>
                    <td style="font-size:15px;border-width:1px;border-style:solid;border-color:#009;padding-top:.25em;padding-bottom:.25em;padding-right:.5em;padding-left:.5em;vertical-align:top;background-color:#E6EBF9;">${failCount}</td>
                    </tr>
                    </tbody>
                    </table>
                    <p style="font-size:13px;">Note: This is an auto-generated email, please do not reply.</p>
                    </body>
                    </html>
                `;

transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log("ERROR: "+ error);
		res.send(err);
    } else {
        console.log("INFO: Report sent successfully." + info.response);
		res.send(info);
    }
});