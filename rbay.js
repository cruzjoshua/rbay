function rbay(message) {
  const reply = '... right back at you!';
  return _.map(message, msg => msg + reply);
}
console.log(rbay(['hi', 'how are you doing']));
