import { useState, useEffect } from "react"
import '../styles/header.css';
import { DiscoverWalletProviders } from "../components/DiscoverWalletProdivers"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

interface HeaderProps {
  selectedWallet?: EIP6963ProviderDetail;
  userAccount: string;
  setUserAccount: (userAccount: string) => void;
  setSelectedWallet: (selectedWallet: EIP6963ProviderDetail) => void;
}

export function Header( {selectedWallet, userAccount, setUserAccount, setSelectedWallet}: HeaderProps) {
  const [showProviders, setShowProviders] = useState(false);
  
  const handleClick = () => {
      setShowProviders(!showProviders);
    };
  
    const handleClose = () => {
      setShowProviders(false);
    };

    useEffect(() => {
      if (userAccount) {
        handleClose();
      }
    }, [userAccount]);
  
    function checkConnected(userAccount: string, selectedWallet?: EIP6963ProviderDetail) {
      console.log("userAccount:", userAccount);
      console.log("selectedWallet:", selectedWallet);
      
      return userAccount ? (
        <div className="connected-status">
          <div className="blinking-ball"></div>
          <span>{userAccount.slice(0, 6)}...</span>
          {selectedWallet && (
            <div className="wallet-provider">
              <img src={selectedWallet.info.icon} alt={selectedWallet.info.name} />
            </div>
          )}
        </div>
      ) : (
        <Button variant="contained" onClick={handleClick}>Connect</Button>
      );
    }
  
  
  return (
    <div>
      {checkConnected(userAccount, selectedWallet)}
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