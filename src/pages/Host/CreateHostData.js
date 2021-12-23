export const CATEGORY_DATA = [
  {
    id: 1,
    content: '먹고 마시며 대화하는 남의집',
  },
  {
    id: 2,
    content: '취향 나누는 남의 집',
  },
  {
    id: 3,
    content: '인기 많은 남의집',
  },
  {
    id: 4,
    content: '나를 돌보고 성장하는 남의집',
  },
];

export const INPUT_DATA = [
  {
    type: 'text',
    placeholder: '호스트/주제/공간 등이 드러나는 이름을 입력해 주세요.',
    title: '남의집 이름',
    name: 'name',
  },
  {
    type: 'text',
    placeholder: '위 이름을 뒷받침해주는 한 줄 설명을 적어주세요.',
    title: '한줄 설명',
    name: 'description',
  },
  {
    type: 'text',
    placeholder: '주소를 입력해 주세요.',
    title: '주소 입력',
    name: 'address',
  },
  {
    type: 'datetime-local',
    title: '진행 날짜',
    name: 'startDate',
  },
  {
    type: 'number',
    placeholder: '소요시간을 시간 단위로 적어주세요.',
    title: '소요 시간',
    name: 'runningTime',
  },
  {
    type: 'number',
    placeholder: '가격을 적어주세요.',
    title: '가 격',
    name: 'price',
  },
  {
    type: 'number',
    placeholder: '최대 인원을 적어주세요.',
    title: '최대 인원',
    name: 'limit',
  },
  {
    type: 'text',
    placeholder: '준비물을 적어주세요',
    title: '준비물',
    name: 'supply',
  },
];
