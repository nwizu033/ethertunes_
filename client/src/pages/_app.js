import 'ethertunes_/styles/globals.css'
import Layout from 'ethertunes_/components/Layout'


import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon , sepolia} from 'wagmi/chains'

const chains = [sepolia]
const projectId = '80cf4d9c167ff468586f5a8e2bcf841f'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

export default function App({ Component, pageProps }) {
  return (
    <>
  <WagmiConfig client={wagmiClient}>
      <Layout>
        <Component {...pageProps} />
        <Web3Modal
				projectId={projectId}
				ethereumClient={ethereumClient}
				/>
      </Layout>
    </WagmiConfig>
    </>
  ) 
}
