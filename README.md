# NFT Auth - Shopify NFT Discount Plugin

> Transform your Shopify store with blockchain-powered discounts. Create exclusive offers based on NFT ownership and traits, building stronger communities while driving sales.

## 🚀 Features

- **🔐 NFT Authentication**: Verify customer ownership of specific NFTs through wallet connection
- **🎯 Trait-Based Discounts**: Create discounts based on NFT traits (rarity, attributes, characteristics)
- **🆔 Token ID Targeting**: Offer exclusive discounts to holders of specific NFT token IDs
- **🏪 TokenGated Products**: Create VIP product pages accessible only to verified NFT holders
- **⚡ Multi-Chain Support**: Compatible with all Alchemy-supported blockchain networks
- **📊 Usage Analytics**: Track discount performance and customer engagement
- **🔄 Real-time Verification**: Instant NFT ownership validation
- **📱 Mobile Optimized**: Seamless experience across all devices

## 🛠️ Tech Stack

- **Frontend**: React, Next.js, TailwindCSS, ShadcnUI
- **Backend**: Node.js, Prisma ORM
- **Database**: MongoDB
- **Blockchain**: Alchemy API, Web3.js/Ethers.js
- **Platform**: Shopify App Framework
- **Authentication**: Shopify OAuth, Wallet Signatures

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- Shopify Partner Account
- MongoDB database
- Alchemy API key
- Basic understanding of NFTs and blockchain

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/nft-auth-shopify.git
cd nft-auth-shopify
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file:

```env
# Shopify App Configuration
SHOPIFY_API_KEY=your_shopify_api_key
SHOPIFY_API_SECRET=your_shopify_api_secret
SCOPES=read_products,write_discounts,read_customers,write_customers
HOST=https://yourdomain.ngrok.io

# Database
DATABASE_URL="mongodb://username:password@localhost:27017/nftauth"

# Blockchain
ALCHEMY_API_KEY=your_alchemy_api_key
SUPPORTED_CHAINS=1,137,42161,10,56

# Security
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://yourdomain.ngrok.io
```

### 4. Database Setup

```bash
npx prisma generate
npx prisma db push
```

### 5. Development Server

```bash
npm run dev
# or
yarn dev
```

### 6. Shopify App Setup

1. Create a new app in your Shopify Partner Dashboard
2. Configure the app URL and redirect URLs
3. Install the app on a development store

## 📊 Database Schema

Our application uses the following key models:

- **Session**: Shopify authentication and store data
- **DiscountRule**: NFT-based discount configurations
- **DiscountUsage**: Tracking discount applications
- **CustomerWallet**: Wallet address verification
- **WebhookLog**: System integration logs

## 🎯 Usage

### Creating NFT-Based Discounts

1. **Install the app** on your Shopify store
2. **Connect your store** through Shopify OAuth
3. **Create discount rules**:
   - Set NFT contract address
   - Choose discount type (NFT ID or Trait-based)
   - Configure discount percentage
   - Set product SKUs
4. **Customers connect wallets** and get automatic discounts

### Discount Types

#### NFT ID Discounts

```javascript
{
  discountBase: "NftId",
  nftIds: [1, 5, 10, 25],
  discountPercentage: 15
}
```

#### Trait-Based Discounts

```javascript
{
  discountBase: "TrailType",
  trailKey: "rarity",
  trailValue: "legendary",
  discountPercentage: 25
}
```

## 🔐 Security & Privacy

- **No personal data storage**: We only store Shopify session data and wallet addresses
- **Wallet verification**: Cryptographic signature verification for wallet ownership
- **GDPR compliant**: Built-in data export and deletion capabilities
- **Secure authentication**: OAuth 2.0 with Shopify and wallet signatures

## 📈 Pricing Plans

| Plan       | Price        | Rules     | Features                        |
| ---------- | ------------ | --------- | ------------------------------- |
| **Growth** | $19.99/month | 10 Rules  | All chains, 14-day trial        |
| **Pro**    | $24.99/month | 250 Rules | Start/end dates, 1-day trial    |
| **Scale**  | $44.44/month | Unlimited | Email support, TokenGated pages |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow ESLint and Prettier configurations
- Write tests for new features
- Update documentation for API changes
- Ensure mobile responsiveness
- Test with multiple NFT collections

## 📚 API Documentation

### Webhook Endpoints

```javascript
POST / api / webhooks / orders / create;
POST / api / webhooks / customers / data_request;
POST / api / webhooks / customers / redact;
POST / api / webhooks / shop / redact;
```

### NFT Verification

```javascript
POST /api/nft/verify
{
  walletAddress: "0x...",
  contractAddress: "0x...",
  tokenId: 123,
  signature: "0x..."
}
```

## 🔧 Configuration

### Supported Blockchain Networks

- Ethereum Mainnet (1)
- Polygon (137)
- Arbitrum One (42161)
- Optimism (10)
- Binance Smart Chain (56)

### Discount Configuration Options

- **Chain Selection**: Choose target blockchain
- **Contract Address**: NFT collection contract
- **Token IDs**: Specific tokens (optional)
- **Traits**: Metadata-based filtering
- **Date Ranges**: Time-limited offers
- **Usage Limits**: Per-customer restrictions

## 🐛 Troubleshooting

### Common Issues

**Wallet Connection Fails**

- Ensure MetaMask/WalletConnect is properly installed
- Check network compatibility
- Verify contract address format

**Discount Not Applied**

- Confirm NFT ownership on correct chain
- Check discount rule activation status
- Verify product SKU matching

**Installation Issues**

- Update Node.js to version 18+
- Clear npm/yarn cache
- Check environment variables

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Support

- **Documentation**: [docs.nftauth.com](https://docs.nftauth.com)
- **Email Support**: support@nftauth.com
- **Community**: [Discord Server](https://discord.gg/nftauth)
- **Issues**: [GitHub Issues](https://github.com/yourusername/nft-auth-shopify/issues)

## 🚀 Roadmap

- [ ] Multi-signature wallet support
- [ ] Advanced trait filtering
- [ ] Loyalty point integration
- [ ] Cross-chain NFT verification
- [ ] Analytics dashboard expansion
- [ ] Mobile app companion

---

**Built with ❤️ for the Web3 community**

[Website](https://nftauth.com) • [Documentation](https://docs.nftauth.com) • [Twitter](https://twitter.com/nftauth)
