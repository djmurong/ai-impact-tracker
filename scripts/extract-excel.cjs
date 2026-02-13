const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'AI Dashboard Data.xlsx');
const workbook = XLSX.readFile(filePath);

const result = {
  sheetNames: workbook.SheetNames,
  sheets: {}
};

workbook.SheetNames.forEach(name => {
  const sheet = workbook.Sheets[name];
  result.sheets[name] = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
});

fs.writeFileSync(
  path.join(__dirname, '..', 'data', 'dashboard-data-extracted.json'),
  JSON.stringify(result, null, 2),
  'utf8'
);

console.log('Extracted sheets:', result.sheetNames);
console.log('Written to data/dashboard-data-extracted.json');
