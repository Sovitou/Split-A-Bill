import Button from "./Button";
import "../style/style.css";

const FormAddFriend = () => {
  return (
    <form className="form-add-friend">
      <label>👨🏻‍🤝‍👩🏼Name</label>
      <input type="text" />

      <label>📷Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
