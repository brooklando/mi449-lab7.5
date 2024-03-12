function randomName() {
  const names = ['Max', 'Malcolm', 'Mason', 'Macy', 'Marissa', 'Maurice', 'Mike', 'Madison', 'Melanie', 'Melon'];
  return {
    get name() {
      return names[Math.floor(Math.random() * names.length)];
    },
  }
}