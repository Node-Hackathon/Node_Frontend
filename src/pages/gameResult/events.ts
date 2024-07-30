export const useGameResultEvents = () => {
  const BlockGame = {
    title: '블록쌓기',
    game01: {
      date: '2024-07-01',
      result: '0%',
    },
    game02: {
      date: '2024-07-02',
      result: '10%',
    },
    game03: {
      date: '2024-07-03',
      result: '20%',
    },
    game04: {
      date: '2024-07-17',
      result: '30%',
    },
    game05: {
      date: '2024-07-18',
      result: '40%',
    },
  };

  const CompositionGame = {
    title: '구성놀이',
    game01: {
      date: '2024-07-04',
      result: '100%',
    },
    game02: {
      date: '2024-07-05',
      result: '90%',
    },
    game03: {
      date: '2024-07-06',
      result: '80%',
    },
    game04: {
      date: '2024-07-12',
      result: '70%',
    },
  };

  const SelectCardGame = {
    title: '카드 뒤집기',
    game01: {
      date: '2024-07-07',
      result: '0회',
    },
    game02: {
      date: '2024-07-08',
      result: '1회',
    },
    game03: {
      date: '2024-07-09',
      result: '2회',
    },
    game04: {
      date: '2024-07-09',
      result: '2회',
    },
    game05: {
      date: '2024-07-09',
      result: '2회',
    },
    game06: {
      date: '2024-07-09',
      result: '2회',
    },
    game07: {
      date: '2024-07-09',
      result: '2회',
    },
  };

  const ChoiceNumGame = {
    title: '숫자 맞추기',
    game01: {
      date: '2024-07-10',
      result: '999회',
    },
    game02: {
      date: '2024-07-11',
      result: '998회',
    },
    game03: {
      date: '2024-07-12',
      result: '997회',
    },
    game04: {
      date: '2024-07-12',
      result: '997회',
    },
    game05: {
      date: '2024-07-12',
      result: '997회',
    },
    game06: {
      date: '2024-07-12',
      result: '997회',
    },
    game07: {
      date: '2024-07-12',
      result: '997회',
    },
    game08: {
      date: '2024-07-12',
      result: '997회',
    },
    game09: {
      date: '2024-07-12',
      result: '997회',
    },
  };

  return { BlockGame, CompositionGame, SelectCardGame, ChoiceNumGame };
};
