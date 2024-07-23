import Calendar from 'react-calendar';
import { useBirthInput } from './events';
import { CalendarWrapper, InputBase } from './styles';
import { BirthInputType } from './types';

export default function BirthInput({
  placeholder,
  name,
  register,
  errors,
  size,
  type,
  firstSetValue,
}: BirthInputType) {
  const {
    handleInputClick,
    isCalendarOpen,
    selectedBirth,
    setSelectedBirth,
    inputRef,
    birthInputValue,
    handleDateChange,
  } = useBirthInput(firstSetValue, name);

  return (
    <CalendarWrapper ref={inputRef}>
      <InputBase
        type={type}
        {...register}
        placeholder={placeholder}
        size={size}
        $iserror={!!errors[name]}
        name={name}
        onClick={handleInputClick}
        value={birthInputValue}
        readOnly
      />
      {isCalendarOpen && (
        <Calendar
          onChange={setSelectedBirth}
          value={selectedBirth}
          calendarType="gregory"
          prev2Label={null}
          next2Label={null}
          onClickDay={handleDateChange}
        />
      )}
    </CalendarWrapper>
  );
}
