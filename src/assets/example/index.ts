import example1 from './example1.png';
import example2 from './example2.png';

export interface ExampleItem {
  id: number;
  src: string;
  alt: string;
}

export const EXAMPLE_LIST: ExampleItem[] = [
  { id: 1, src: example1, alt: "예시 이미지 1" },
  { id: 2, src: example2, alt: "예시 이미지 2" }
];