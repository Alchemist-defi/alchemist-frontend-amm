import React, { useContext } from 'react'
import { Menu as UikitMenu, ConnectorId } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetPriceData   from 'hooks/useGetPriceData'
import useGetAurumPriceData   from 'hooks/useGetAurumPriceData'
import { injected, bsc, walletconnect } from 'connectors'
import links from './config'

const Menu: React.FC = props => {
  const { account, activate, deactivate } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  // const cakePriceUsd = useGetPriceData()
  const mistPriceUsd = useGetPriceData()
  const aurumPriceUsd = useGetAurumPriceData()
  console.log (mistPriceUsd)
  console.log (aurumPriceUsd)

  return (
    <UikitMenu
      links={links}
      priceLink="https://exchange.alchemistdefi.com"
      account={account as string}
      login={(connectorId: ConnectorId) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }

        if (connectorId === 'bsc') {
          return activate(bsc)
        }

        return activate(injected)
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}      
      aurumPriceUsd={aurumPriceUsd}
      mistPriceUsd={mistPriceUsd}
      mistPriceLink="https://charts.bogged.finance/?token=0x6f8FE12CC34398d15b7D5A5BA933E550DA1D099f"
      aurumPriceLink="https://charts.bogged.finance/?token=0x49207BAA3a7332F0716788aa57B088D499bcc104"
      {...props}
    />
  )
}

export default Menu

