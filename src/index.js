//EZ TASK

module.exports = function reverse (n) {
  let cor = n
  if(cor < 0){
    cor = cor * -1
  }
  return Number(String(cor).split("").reverse().join(""))
}
