import React, {useState} from "react";



export default function PhoneInput(){
  const [inputValue, setInputValue]  = useState(''); 
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formattedPhoneNumber = formatPhoneNumber(e.target.value);
      setInputValue(formattedPhoneNumber);
  }
  return <input onChange={e => handleInput(e)} value={inputValue}       placeholder="phone number" className="rounded-md border border-slate-200 px-4 py-2 outline-none hover:border-slate-400 focus:border-slate-400"/>
}
function formatPhoneNumber(value: string) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0,3)} ${phoneNumber.slice(3)})`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6,
  )}-${phoneNumber.slice(6, 10)}`
  
}