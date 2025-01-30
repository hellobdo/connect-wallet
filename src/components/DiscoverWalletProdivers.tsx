import { useEffect, useState } from "react"
import { useSyncProviders } from "../hooks/useSyncProviders"
import { formatAddress } from "../utils/index"
import '../styles/dialogModal.css'

type ChildProps = {
  setSelectedWallet: (provider: EIP6963ProviderDetail) => void;
  setUserAccount: (account: string) => void; 
  userAccount: string;
  selectedWallet: EIP6963ProviderDetail|undefined;
};

export const DiscoverWalletProviders: React.FC<ChildProps> = ( {setSelectedWallet, setUserAccount, userAccount, selectedWallet} ) => {
  const providers = useSyncProviders()

  // Connect to the selected provider using eth_requestAccounts.
  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
    try {
      const accounts = await providerWithInfo.provider.request({
        method: "eth_requestAccounts"
      })

      setSelectedWallet(providerWithInfo)
      setUserAccount(accounts?.[0])
    } catch (error) {
      console.error(error)
    }
  }

  // Display detected providers as connect buttons.
  return (
    <>
      <div>
        {
          providers.length > 0 ? providers?.map((provider: EIP6963ProviderDetail) => (
            <button key={provider.info.uuid} className="wallet-button" onClick={() => handleConnect(provider)} >
              <img src={provider.info.icon} alt={provider.info.name} />
              <div>{provider.info.name}</div>
            </button>
          )) :
            <div>
              No Announced Wallet Providers
            </div>
        }
      </div>
      <hr />
      <p>{userAccount ? "" : "No "}Wallet Selected</p>
      {userAccount &&
        <div>
          <div>
            <img src={selectedWallet.info.icon} alt={selectedWallet.info.name} />
            <div>{selectedWallet.info.name}</div>
            <div>({formatAddress(userAccount)})</div>
          </div>
        </div>
      }
    </>
  )
}