export interface Tasks {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  startDate: Date;
  dueDate: Date;
  additionalNote?: string;
}
