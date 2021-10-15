import sortByHealt from '../app';

test('Функция должна сортировать массив героев по убыванию здоровья', () => {
  const inputArray = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const outputArray = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortByHealt(inputArray)).toEqual(outputArray);
});
test('Функция должна сортировать массив героев по убыванию здоровья', () => {
  const inputArray = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const outputArray = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 60 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortByHealt(inputArray)).not.toBe(outputArray);
});
