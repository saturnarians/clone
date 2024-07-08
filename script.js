document.getElementById('connect-button').addEventListener('click', () => {
    const wallets = ['MetaMask', 'Coinbase Wallet', 'Trust Wallet']; // Example wallets
    let foundWallet = false;

    wallets.forEach(wallet => {
        if (isWalletInstalled(wallet)) {
            foundWallet = true;
            window.location.href = getWalletUrl(wallet);
        }
    });

    if (!foundWallet) {
        document.getElementById('wallet-status').textContent = 'No wallet found. Please install a cryptocurrency wallet.';
    }
});

// Function to check if a wallet is installed
function isWalletInstalled(walletName) {
    if (walletName === 'MetaMask') {
        return typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask;
    }
    // Add additional wallet detection logic here
    return false;
}

// Function to get the wallet URL
function getWalletUrl(walletName) {
    if (walletName === 'MetaMask') {
        return 'https://metamask.io/download.html';
    } else if (walletName === 'Coinbase Wallet') {
        return 'https://www.coinbase.com/wallet';
    } else if (walletName === 'Trust Wallet') {
        return 'https://trustwallet.com/';
    }
    return 'https://example.com';
}