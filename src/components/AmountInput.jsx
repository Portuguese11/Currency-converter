function AmountInput({ amount, setAmount }) {
  return (
    <input
      className="amount-input"
      type="number"
      value={amount}
      onChange={(e) =>
        setAmount(e.target.value)
      }
    />
  );
}

export default AmountInput;