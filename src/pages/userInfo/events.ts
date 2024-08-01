export const useUserInfoEvents = () => {
  const handleCalcAge = (birthDateString: string) => {
    // 날짜 문자열을 올바르게 파싱하는 함수
    const parseDateString = (dateString: string) => {
      const [year, month, day] = dateString.split(/년 |월 |일/).map((str) => str.trim());
      return new Date(`${year}-${month}-${day}`);
    };

    const today = new Date();
    const birthDate = parseDateString(birthDateString);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // 생일이 지났는지 여부에 따라 나이를 조정
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  };

  return { handleCalcAge };
};
