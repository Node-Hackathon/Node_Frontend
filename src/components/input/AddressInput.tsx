import { customStyles, InputBase } from './styles';
import { AddressInputType } from './types';
import DaumPostcode from 'react-daum-postcode';
import ReactModal from 'react-modal';
import { useAddressInput } from './events';

export default function AddressInput({
  placeholder,
  name,
  register,
  errors,
  size,
  type,
  firstSetValue,
  firstClearErrors,
}: AddressInputType) {
  const { isPostOpen, setIsPostOpen, addressValue, handleAddressClick, completeHandler } =
    useAddressInput(firstSetValue, name, firstClearErrors);

  return (
    <>
      <InputBase
        type={type}
        {...register}
        placeholder={placeholder}
        size={size}
        $iserror={!!errors[name]}
        name={name}
        value={addressValue}
        onClick={handleAddressClick}
        readOnly
      />
      <ReactModal
        isOpen={isPostOpen}
        style={customStyles}
        onRequestClose={() => setIsPostOpen(false)}
        ariaHideApp={false}
      >
        <DaumPostcode onComplete={completeHandler} style={{ height: '100%' }}></DaumPostcode>
      </ReactModal>
    </>
  );
}
