const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split A Bill with X</h2>
      <label>💵 Bill Value</label>
      <input type="text" />

      <label>🧑🏻: Your Expense</label>
      <input type="text" />

      <label>🧑‍🤝‍🧑: X is Expense</label>
      <input type="text" disabled />

      <label>💳: Who pays the bill ?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <button className="button">Slit Bill</button>
    </form>
  );
};

export default FormSplitBill;
