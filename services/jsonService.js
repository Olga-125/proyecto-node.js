const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/products.json');

function readData() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

exports.getAll = () => readData();

exports.getById = (id) => {
  const data = readData();
  return data.find(p => p.id === id);
};

exports.create = (product) => {
  const data = readData();
  const newProduct = { id: Date.now().toString(), ...product };
  data.push(newProduct);
  writeData(data);
  return newProduct;
};

exports.update = (id, updates) => {
  const data = readData();
  const index = data.findIndex(p => p.id === id);
  if (index === -1) return null;
  data[index] = { ...data[index], ...updates };
  writeData(data);
  return data[index];
};

exports.remove = (id) => {
  let data = readData();
  const index = data.findIndex(p => p.id === id);
  if (index === -1) return false;
  data.splice(index, 1);
  writeData(data);
  return true;
};
