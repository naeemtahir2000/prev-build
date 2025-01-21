"use client"

import Account from "@/components/account";
import WalletOptions from "@/components/wallet-options";
import { useAccount } from 'wagmi'


function ConnectWallet() {
    const { isConnected } = useAccount()
    if (isConnected) return <Account />
    return <WalletOptions />
}

export default function ConnectWagmiWallet() {
    return (
        <>
            <ConnectWallet />
        </>
    )
}