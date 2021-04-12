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
    label: 'MIST Recipes',
    icon: 'RecipeIcon',
    href: 'https://www.alchemistdefi.com/farms',
  },
  {
    label: 'Spells',
    icon: 'SpellIcon',
    href: 'https://www.alchemistdefi.com/nests',
  },
  {
    label: 'AURUM Alchemy',
    icon: 'PoolIcon',
    href: 'https://www.aurum.alchemistdefi.com/vessels',
  },
  {
    label: 'MIST Price Chart',
    icon: 'ChartIcon',
    href: 'https://unidexbeta.app/bscCharting?token=0x6f8FE12CC34398d15b7D5A5BA933E550DA1D099f',
  },
  {
    label: 'Aurum Price Chart',
    icon: 'ChartIcon',
    href: 'https://unidexbeta.app/bscCharting?token=0x49207BAA3a7332F0716788aa57B088D499bcc104',
  },
  {
    label: 'Project Documentation',
    icon: 'DocIcon',
    href: 'https://alchemist-defi.gitbook.io/alchemist-defi/',
  },  
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Alchemist-defi/',
      },
      {
        label: 'Medium Blog',
        href: 'https://alchemistdefi.medium.com',
      },
    ],
  },  
  {
    label: 'TechRate Audit',
    icon: 'AuditIcon',
    href: 'https://alchemist-defi.com/TechrateAudit11042021',
  },  
]

export default config
