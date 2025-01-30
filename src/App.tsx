import React, { useState } from "react"
import "./App.css"
import { DiscoverWalletProviders } from "./components/DiscoverWalletProdivers"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import {Header} from './components/Header';

function App() {
  const [showProviders, setShowProviders] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>()
  const [userAccount, setUserAccount] = useState<string>("")

  const handleClick = () => {
    setShowProviders(!showProviders);
  };

  const handleClose = () => {
    setShowProviders(false);
  };

  return (
    <div>
      <Header userAccount={userAccount}/>
      <Button variant="contained" onClick={handleClick}>Connect</Button>
      <Dialog open={showProviders} onClose={handleClose}>
        <DialogTitle>Connect Wallet</DialogTitle>
        <DialogContent>
          <DiscoverWalletProviders 
            setSelectedWallet={setSelectedWallet}
            setUserAccount={setUserAccount}
            selectedWallet={selectedWallet}
            userAccount={userAccount}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App