function CurrencySelect({
  label,
  currency,
  setCurrency,
  currencies,
}) {
  return (
    <div className="select-group">
      <label>{label}</label>

      <select
        value={currency}
        onChange={(e) =>
          setCurrency(e.target.value)
        }
      >
        {currencies.map((item) => (
          <option
            key={item.code}
            value={item.code}
          >
            {item.code} - {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencySelect;