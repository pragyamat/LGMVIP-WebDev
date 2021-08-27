import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UserGrid from "./components/userGrid/UserGrid";

function App() {
  const [userData, setUserData] = useState([]);
  const [isDataBeingFetched, setIsDataBeingFetched] = useState(false);
  const getUsers = async () => {
    setIsDataBeingFetched(true);
    const url = `https://reqres.in/api/users?page=1`;
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data.data);
    setIsDataBeingFetched(false);
  };
  return (
    <div>
      <Header getUsers={getUsers} />
      <UserGrid userData={userData} isDataBeingFetched={isDataBeingFetched} />
      <Footer />
    </div>
  );
}

export default App;
