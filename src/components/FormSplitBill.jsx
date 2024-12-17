import { useState } from "react";
const FormSplitBill = ({ selectFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpence] = useState("");
  const friendPaid = bill ? bill - userExpense : "";
  const [whoPay, setWhoPay] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !userExpense) return;
    onSplitBill(whoPay === "user" ? friendPaid : -friendPaid);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split A Bill with {selectFriend.name}</h2>
      <label>💵 Bill Value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>🧑🏻: Your Expense</label>
      <input
        type="number"
        value={userExpense}
        onChange={(e) =>
          setUserExpence(
            Number(e.target.value) > bill ? userExpense : e.target.value
          )
        }
      />

      <label>🧑‍🤝‍🧑: {selectFriend.name}'s Expense</label>
      <input type="text" value={friendPaid} disabled />

      <label>💳: Who pays the bill ?</label>
      <select value={whoPay} onChange={(e) => setWhoPay(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectFriend.name}</option>
      </select>
      <button className="button" onSubmit={handleSubmit}>
        Slit Bill
      </button>
    </form>
  );
};

export default FormSplitBill;
