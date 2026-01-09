function generateRandomPhone() {
  return '08' + Math.floor(100000000 + Math.random() * 900000000);
}

module.exports = { generateRandomPhone };
