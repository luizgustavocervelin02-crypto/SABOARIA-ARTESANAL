import https from 'https';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://saboariaartesanal.netlify.app';

const assets = [
    '/assets/index-CZGm8LUS.js',
    '/assets/index-CX3uTV31.css',
    '/assets/sabonete-calendula-BiD-bsUp.jpg',
    '/assets/sabonetes-florais-C_o9Zyik.jpg',
    '/assets/sabonete-pepino-CrNvaJNI.jpg',
    '/assets/sabonetes-rosas-DAHhp5-S.jpg',
    '/assets/sabonetes-coloridos-CsmyHFE6.jpg',
    '/assets/sabonetes-flores-azuis-B4dInMp2.jpg',
    '/assets/sabonetes-maos-CnWSW3QC.jpg',
    '/assets/sabonetes-massagem-CEPwGSH_.jpg',
    '/assets/sabonetes-presenteaveis-BcZJee1o.jpg',
    '/assets/velas-aromaticas-GLDEXafm.jpg',
    '/assets/fornecedores-secretos-BfY1zcLY.jpg',
    '/assets/multiuso-limao-bonus-o-qmrGyj.jpg',
    '/assets/planner-producao-DGm0JtvV.jpg',
    '/assets/guia-fotografico-CBtMpRgq.jpg',
    '/assets/sistema-precificacao-DqkK4hlI.jpg',
    '/assets/como-fazer-sabonete-artesanal-o-guia-completo--CYtO1F9S.jpg',
    '/assets/mockup-celular-B6tTf9Q3.png'
];

if (!fs.existsSync('public/assets')) {
    fs.mkdirSync('public/assets', { recursive: true });
}

function download(url, dest) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                const file = fs.createWriteStream(dest);
                res.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`Downloaded: ${dest}`);
                    resolve();
                });
            } else {
                reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
            }
        }).on('error', (err) => reject(err));
    });
}

async function run() {
    for (const asset of assets) {
        const assetUrl = `${baseUrl}${asset}`;
        const destPath = path.join('public', asset);
        try {
            await download(assetUrl, destPath);
        } catch (e) {
            console.error(e.message);
        }
    }
}

run();
