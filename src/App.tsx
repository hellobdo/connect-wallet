import React, { useState } from "react"
import "./App.css"
import {Header} from './components/Header';

function App() {
  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail | undefined>(undefined);
  const [userAccount, setUserAccount] = useState<string>("")

  return (
    <div>
      <Header
        selectedWallet={selectedWallet}
        userAccount={userAccount}
        setUserAccount={setUserAccount}
        setSelectedWallet={setSelectedWallet}
      />
    </div>
  );
}

export default App