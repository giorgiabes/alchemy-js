const person = {
  name: "Alice",
  secret: "afraid of the dark",
};

function removeSecret(object) {
  delete object.secret;
}

removeSecret(person);

module.exports = removeSecret;
