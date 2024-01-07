export default function display ( {special} ) {
  special.forEach(item => {
    if (!('description' in item)) {
      item.description = 'Описание недоступно'
    }
  });
  return special;
}