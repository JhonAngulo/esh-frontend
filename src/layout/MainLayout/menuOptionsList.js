import { Home, DeviceHub, Settings, Info } from '@mui/icons-material';

const color = 'primary'

const MenuOptionsList = [
    {
        "id": 1,
        "option": "home",
        "displayName": "Hogar",
        "urlLink": "/",
        "icon": <Home color={color}/>
    },
    {
        "id": 2,
        "option": "devices",
        "displayName": "Dispositivos",
        "urlLink": "/dispositivos",
        "icon": <DeviceHub color={color}/>
    },
    {
        "id": 3,
        "option": "Setup",
        "displayName": "Configuraciones",
        "urlLink": "/configuraciones",
        "icon": <Settings color={color}/>
    },
    {
        "id": 4,
        "option": "About",
        "displayName": "Acerca",
        "urlLink": "/acerca",
        "icon": <Info color={color}/>
    }
]

export default MenuOptionsList