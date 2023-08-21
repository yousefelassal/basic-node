const fs = require('fs/promises');

async function main() {
    const text = await fs.readFile('test.txt', 'utf-8');
    console.log(text);
    const newText = 'saba7o saba7 saba7';
    await fs.writeFile('test.txt', newText, {flag: 'a'});
    console.log('Done!');
    const newText2 = await fs.readFile('test.txt', 'utf-8');
    console.log(newText2);
}

main();