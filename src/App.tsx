import './App.css'
import {useState} from "react";
//import {UserInput} from "./co"
import {Header} from "./components/Header.tsx"
import {Results} from "./components/Results.tsx";
import {UserInput} from "./components/UserInput.tsx";

function App() {
    const [userInfo, setUserInfo] = useState({
        initialInvestment: 15000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 7
    });
    const handleUserInput = (key: string, value: string) => {
        setUserInfo({...userInfo, [key]: value});
    }
  return (
    <>
        <Header title= "Investment Calculator" />
        <UserInput
            userInfo={userInfo}
            onChange={handleUserInput}
        />

        <Results
            initialInvestment={userInfo.initialInvestment}
            annualInvestment={userInfo.annualInvestment}
            expectedReturn={userInfo.expectedReturn}
            duration={userInfo.duration}
        />
    </>
    );
}
export default App
