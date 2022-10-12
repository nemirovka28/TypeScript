/* Необхожимо написать функцию сортировки любіх объектов,
которые имеют id по убыванию и по возрастанию */

const data = [
  { id: 1, name: 'Vasya' },
  { id: 1, name: 'Petya' },
  { id: 1, name: 'Nadya' },
];

interface ID {
  id: number;
}

function sort<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
  return data.sort((a, b) => {
    switch (type) {
      case 'asc':
        return a.id - b.id;
      case 'desc':
        return b.id - a.id;
    }
  });
}
