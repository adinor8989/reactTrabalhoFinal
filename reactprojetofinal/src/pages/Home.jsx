// import React from 'react';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from '../service/ProductService';
import { Card } from 'primereact/card';



export function Home() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };
    
    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <>
            {/* <Button label="Ca" icon="pi pi-check" /> */}
            <Button label="Comprar" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
        </>
    );

    return (
        <><div className="card">
            <Carousel value={products}
                numScroll={1}
                numVisible={3}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate} />
        </div>
        <br />
        <br />
        <div className="card flex justify-content-center">
                <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
                    <p className="m-0">
                    Produto
                    </p>
                </Card>
            </div>
            <br />
        <br />
        <div className="card flex justify-content-center">
                <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
                    <p className="m-0">
                    Produto
                    </p>
                </Card>
            </div>
            <br />
        <br />
        <div className="card flex justify-content-center">
                <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
                    <p className="m-0">
                    Produto
                    </p>
                </Card>
            </div></>
            
    )
}
export default Home;

























// export const Home = () => {
//   const products = [
//     { id: 1, name: 'Produto 1', description: 'Descrição do produto 1', price: 100, image: '/images/product1.jpg' },
//     { id: 2, name: 'Produto 2', description: 'Descrição do produto 2', price: 200, image: '/images/product2.jpg' },
   
//   ];
//   return (
//     <div>
//       <h1>Produtos Disponíveis</h1>
     
       
//     </div>
//   );
// };

