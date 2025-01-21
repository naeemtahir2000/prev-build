"use client";
import { MetaMaskInpageProvider } from "@metamask/providers";
import React, { useState } from "react";
import Web3 from "web3";

// Extend the global Window interface
declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider | any | undefined;
  }
}

const ConnectMetaMask = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const connectMetaMask = async () => {
    try {
      // Check if MetaMask is installed
      if (!window.ethereum) {
        setError("MetaMask is not installed. Please install it to use this feature.");
        return;
      }

      // Request account access
      const web3 = new Web3(window.ethereum);
      const accounts = (await window.ethereum.request({
        method: "eth_requestAccounts",
      })) as string[]; // Explicitly cast to string[]

      // Set the connected account
      setAccount(accounts[0]);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to connect to MetaMask.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={connectMetaMask}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#f6851b",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Connect to MetaMask
      </button>

      {account && (
        <div style={{ marginTop: "20px", color: "#4caf50" }}>
          <p>Connected account: {account}</p>
        </div>
      )}

      {error && (
        <div style={{ marginTop: "20px", color: "#f44336" }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default ConnectMetaMask;
