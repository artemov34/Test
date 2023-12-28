import { itemGenerator } from '@entities/item/model';

addEventListener('message', ({ data }) => {
  const { size, additional_ids } = data;
  const items = itemGenerator(size);
  const additionalItems = items.filter(e => additional_ids.includes(e.id));
  const additionalCount = additionalItems.length + 1;
  const result =
    additionalCount > 10
      ? additionalItems.slice(0, 10)
      : [...additionalItems, ...items.slice(0, 10 - additionalItems.length)];
  postMessage(result);
});
