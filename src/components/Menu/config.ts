import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.alchemistdefi.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.alchemistdefi.com/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.alchemistdefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Recipes',
    icon: 'RecipeIcon',
    href: 'https://www.alchemistdefi.com/farms',
  },
  {
    label: 'Spells',
    icon: 'SpellIcon',
    href: 'https://www.alchemistdefi.com/nests',
  },
  {
    label: 'Transmutation',
    icon: 'PoolIcon',
    href: 'https://www.aurum.alchemistdefi.com/vessels',
  },
  {
    label: 'MIST Referrals',
    icon: 'GroupsIcon',
    href: 'https://www.alchemistdefi.com/referrals',
  },
  {
    label: 'MIST Price Chart',
    icon: 'ChartIcon',
    href: 'https://poocoin.app/tokens/0x6f8fe12cc34398d15b7d5a5ba933e550da1d099f',
  },
  {
    label: 'Doc',
    icon: 'DocIcon',
    href: 'https://alchemist-defi.gitbook.io/alchemist-defi/',
  },
  {
    label: 'MIST Contract',
    icon: 'ContractIcon',
    href: 'https://bscscan.com/address/0x6f8fe12cc34398d15b7d5a5ba933e550da1d099f',
  },
  {
    label: 'Burning Mist',
    icon: 'FireIcon',
    href: 'https://alchemist-defi.gitbook.io/alchemist-defi/automated-burning-mechanism',
  },
  {
    label: 'Alchemist\'s Genie',
    icon: 'GenieIcon',
    href: 'https://alchemistdefi.medium.com',
  },

  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/achemistdefi/',
      },
      {
        label: 'Docs',
        href: 'https://alchemist-defi.gitbook.io/alchemist-defi/',
      },
      {
        label: 'Blog',
        href: 'https://alchemistdefi.medium.com',
      },
    ],
  },
]

export default config
