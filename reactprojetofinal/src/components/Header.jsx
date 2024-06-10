import React, { useContext } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import styles from '../styles/Header.module.css'; 
import CartProvider from '../context/CartContext';
import { CartContext } from '../context/CartContext';


export default function TemplateDemo() {
    const { cart } = useContext(CartContext);

    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => { window.location.href = '/' }
        },
        {
            label: 'Sobre',
            icon: 'pi pi-envelope',
            command: () => { window.location.href = '/Sobre' },
            template: itemRenderer
        },
        {
            label: 'Login',
            icon: 'pi pi-star',
            command: () => { window.location.href = '/login' }
        },
        {
            label: (
                <span>
                    Carrinho <Badge value={cart.length} severity="info" />
                </span>
            ),
            icon: 'pi pi-search',
            items: cart.length === 0
            ? [{ label: 'Carrinho Vazio.', 
                template: itemRenderer,
                command: () => { window.location.href = '/carrinho' } }]
            : [
                ...(cart.length > 1 
                    ? [{ label: '${cart[0].nome}', 
                        template: itemRenderer }] 
                    : []),
                ...(cart.length > 2 
                    ? [{ label: '${cart[1].nome}', 
                        template: itemRenderer }] 
                    : []),
                ...(cart.length > 3 
                    ? [{ label: '${cart[2].nome}', 
                        template: itemRenderer }] 
                    : []),
                {
                    label: 'Mais...',
                    command: () => { window.location.href = '/carrinho' },
                    template: itemRenderer
                }
            ]
        }
    ];

    const start = <img alt="logo" src="https://media.discordapp.net/attachments/1211772456541495307/1248807868380086332/BLecommerce.jpg?ex=66650275&is=6663b0f5&hm=1da1a09df0a10a204072b19c72576423863bd03130320378c2de468f31db260c&=&format=webp" height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
            {/* <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" /> */}
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}
        