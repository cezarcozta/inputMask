export function cep(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 9;

  let cepValue = e.currentTarget.value;

  cepValue = cepValue.replace(/\D/g, "");
  cepValue = cepValue.replace(/^(\d{5})(\d)/, `$1-$2`);

  e.currentTarget.value = cepValue;

  return e;
}

export function currency(e: React.FormEvent<HTMLInputElement>) {
  let currencyValue = e.currentTarget.value;

  currencyValue = currencyValue.replace(/\D/g, "");

  currencyValue = currencyValue.replace(/(\d)(\d{2})$/, "$1,$2");

  currencyValue = currencyValue.replace(/(?=(\d{3})+(\D))\B/g, ".");

  e.currentTarget.value = currencyValue;

  return e;
}
