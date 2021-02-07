/**
 *
 * @param qtd how many emails must be generate
 */
export const listGenerator = (qtd: number) => {
  const emails = [];
  for(let i = 0 ; i < qtd; i++) {
    emails.push(getRandomEmail(10));
  }
  return emails;
}

export const getRandomEmail = (caracteres: number, sufix = '@email.com') => {
  let randomEmail = '';
  for(let i = 0 ; i < caracteres; i++) {
    randomEmail += getRandomCaracter();
  }

  return randomEmail + sufix;
};

export const getRandomCaracter = () => String.fromCharCode(getRandomArbitrary(97, 122));

export const getRandomArbitrary = (min: number, max: number) => Math.random() * (max - min) + min;
