export async function 
convertCurrency(
  amount,
  from,
  to
) {
  const response = await fetch(
    `https://api.frankfurter.app/v1/latest?base=${from}&symbols=${to}`
  );

  console.log("Response:", response);

  const data = await response.json();

  console.log("Data:", data);

  return data.rates[to];
}