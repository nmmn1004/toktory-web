import example1 from './example1.png';
import example2 from './example2.png';

export interface ExampleItem {
  id: number;
  src: string;
  alt: string;
}

export const EXAMPLE_LIST: ExampleItem[] = [
  { id: 1, src: example1, alt: "톡토리 가계부 지출 기록 및 조회 화면 예시" },
  { id: 2, src: example2, alt: "AI 소비 흐름 분석 및 미래 예측 서비스 화면 예시" }
];