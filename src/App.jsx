import FriendList from "../src/components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import "./style/style.css";

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
    </div>
  );
};

export default App;
