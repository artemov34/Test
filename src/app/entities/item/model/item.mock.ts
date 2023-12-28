import { randomNumber } from '../../../utils';

const colors = ['#4BC6B9', '#73C1C6', '#96C3CE', '#A79AB2', '#B57BA6'];

export const itemGenerator = (count: number = 10) => {
  return [...Array(count).keys()].map(index => ({
    id: `${index + 1}`,
    int: Math.round(Math.random() * 1000),
    float: Math.random(),
    color: colors[randomNumber(0, colors.length - 1)],
    child: {
      id: `child-${index + 1}`,
      color: colors[randomNumber(0, colors.length - 1)]
    }
  }));
};
