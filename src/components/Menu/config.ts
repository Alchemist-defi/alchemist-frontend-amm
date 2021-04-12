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
    label: 'Mist Info',
    icon: 'RecipeIcon',
    items: [
      {
        label: 'Recipes',
        href: 'https://www.alchemistdefi.com/farms',
      },
      {
        label: 'Spells',
        href: 'https://www.alchemistdefi.com/nests',
      },
      {
        label: 'MIST Price Chart',
        href: 'https://unidexbeta.app/bscCharting?token=0x6f8FE12CC34398d15b7D5A5BA933E550DA1D099f',
      },    
    ],
  },
  {
    label: 'Aurum Info',
    icon: 'PoolIcon',
    items: [
      {
        label: 'Enchanted Chamber',
        href: 'https://www.aurum.alchemistdefi.com/aurum',
      },
      {
        label: 'Aurum Enchantment',
        href: 'https://www.aurum.alchemistdefi.com/vessels',
      },
      {
        label: 'Aurum Price Chart',
        href: 'https://unidexbeta.app/bscCharting?token=0x49207BAA3a7332F0716788aa57B088D499bcc104',
      },    
    ],
  },
  {
    label: 'TechRate Audit',
    icon: 'AuditIcon',
    href: 'https://www.alchemistdefi.com/files/TechrateAudit11042021.pdf',
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
      {
        label: 'Project Documentation',
        href: 'https://alchemist-defi.gitbook.io/alchemist-defi/',
      },      
    ],
  },  
]

export default config
