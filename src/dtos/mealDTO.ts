export type mealDTO = {
  title: string;
  data: [
    {
      id: string;
      hour: string;
      date: string;
      name: string;
      type: 'OUTDIET' | 'ONDIET';
      description: string;
    }
  ];
};
