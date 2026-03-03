import https from 'https';
import fs from 'fs';

const url = 'https://saboariaartesanal.netlify.app/';

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        fs.writeFileSync('original_page.html', data);
        console.log('Page downloaded successfully.');
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});
