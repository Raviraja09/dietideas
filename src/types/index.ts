export type IStatusCard = {
  color: string;
  title: string;
  count: number;
};
export type BlogType = {
  id: number;
  title: string;
  uploaded_by: string;
};

export type DateType = {
  date: number | string;
  isToday?: boolean;
  isNext?: boolean;
  isPrev?: boolean;
};

export type EventFormDataType = {
  title: string;
  description: string;
  date: string;
  time: string;
};

export type MealsTableType = {
  client_name: string;
  service_name: string;
  application_date: string;
  expiry_date: string;
};
