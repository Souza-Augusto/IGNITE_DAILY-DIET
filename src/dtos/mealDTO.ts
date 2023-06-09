export type mealDTO = {
  title: string;
  data: [
    {
      hour: string;
      name: string;
      type: 'OUTDIET' | 'ONDIET';
      description: string;
    }
  ];
};
