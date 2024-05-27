import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const usercontext = createContext();

export function UserProvider({ children }) {
  const [role, setRole] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [imag, setImag] = useState("");
  const [email, setEmail] = useState("");
  const [perfectweight, setPerfectWeight] = useState("");
  const [disea, setDisea] = useState("");

  


  async function getUserDetails() {
    try {
      const { data } = await axios.get(
        `https://abdo121212-fit-nutrition.onrender.com/auth`,
        {
          headers: { token: localStorage.getItem("tkn") },
        }
      );
      console.log(data);
      setWeight(data.user.weight);
      setRole(data.user.role);
      setName(data.user.fullName);
      setHeight(data.user.height);
      setGender(data.user.gender);
      setAge(data.user.birthdays);
      setImag(data.user.profileImage.url);
      setEmail(data.user.email);
      setPerfectWeight(data.user.perfect_weight);
      setDisea(data.user.diseases);
    } catch (err) {
      console.log("error", err);
    }
  }
  // useEffect(() => {
  //     getUserDetails();
  // }, []);

  return (
    <usercontext.Provider value={{ getUserDetails,disea,setDisea,perfectweight,setPerfectWeight,email,imag,setImag ,height,name ,gender ,age,setHeight ,setName ,setGender ,setAge , weight, role, setRole }}>
      {children}
    </usercontext.Provider>
  );
}
