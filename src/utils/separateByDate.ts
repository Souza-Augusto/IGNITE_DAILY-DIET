import { mealDTO } from 'src/dtos/mealDTO';

type Props = {
  title: string 
  data: mealDTO[];
};

export function SeparateByDate(data: mealDTO[]) {
  const arrayseparate: Props[] = [];

  data.forEach((obj) => {
    const data = obj.date;
    const formattedobject = {
      id: obj.id,
      hour: obj.hour,
      date: obj.date,
      name: obj.name,
      healthy: obj.healthy,
      description: obj.description,
      createdAt: obj.createdAt,
      updatedAt: obj.updatedAt,
    };

    const indexData = arrayseparate.findIndex((item) => item.title === data);

    if (indexData !== -1) {
      arrayseparate[indexData].data.push(formattedobject);
    } else {
      arrayseparate.push({
        title: data,
        data: [formattedobject],
      });
    }
  });

  return arrayseparate;
}
