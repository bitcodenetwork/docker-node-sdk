export interface CreateImageQuery {
  fromImage?: string;
  fromSrc?: string;
  repo?: string;
  tag?: string;
  message?: string;
  changes?: string[];
  platform?: string;
}