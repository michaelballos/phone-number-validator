/**
 * Determines if a string is a valid phone number.
 * @param {string} phoneNumber - The phone number to be validated
 * @returns {boolean} - Returns true if the phone number is valid, false otherwise
 *
 * @author Michael Ballos
 * @Date 2020-04-10
 */
const telephoneCheck = (phoneNumber: string) => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(phoneNumber);
};

console.log(
  telephoneCheck('555-555-5555'),
  telephoneCheck('1 555-555-5555'),
  telephoneCheck('1 (555) 555-5555'),
  telephoneCheck('5555555555'),
  telephoneCheck('555-555-5555'),
  telephoneCheck('(555)555-5555'),
  telephoneCheck('1(555)555-5555'),
  telephoneCheck('555-5555'),
  telephoneCheck('5555555'),
  telephoneCheck('1 555)555-5555'),
  telephoneCheck('1 555 555 5555'),
  telephoneCheck('1 456 789 4444'),
  telephoneCheck('123**&!!asdf#'),
  telephoneCheck('55555555'),
  telephoneCheck('(6054756961)'),
  telephoneCheck('2 (757) 622-7382'),
  telephoneCheck('0 (757) 622-7382'),
  telephoneCheck('-1 (757) 622-7382'),
  telephoneCheck('2 757 622-7382'),
  telephoneCheck('10 (757) 622-7382'),
  telephoneCheck('27576227382'),
  telephoneCheck('(275)76227382'),
  telephoneCheck('2(757)6227382'),
  telephoneCheck('2(757)622-7382'),
  telephoneCheck('555)-555-5555'),
  telephoneCheck('(555-555-5555'),
  telephoneCheck('(555)5(55?)-5555'),
  telephoneCheck('55 55-55-555-5'),
  telephoneCheck('11 555-555-5555')
);
