function randomMonster(arrMonsters) {
  return arrMonsters.sort(() => Math.random() - 0.5);
}
export { randomMonster }
