import "./fridge.css";
import {useEffect, useMemo, useState} from "react";
import classNames from "classnames";
import {authPost} from "../lib/auth.js";
import Footer from "../components/footer.jsx";


export default function Fridge() {
    const [retrieving, setRetrieving] = useState(false);

    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [products, setProducts] = useState(
        []
    );
    const [filter, setFilter] = useState('');
    const filteredProducts = useMemo(() => {
        const f = filter.trim().toLowerCase();
        if (f === '') {
            return products;
        }

        return products
            .map((p, id) => ({...p, id}))
            .filter(p => p.name.toLowerCase().includes(f));
    }, [filter]);
    const [selected, setSelected] = useState(null);


    const selectedMeasure = useMemo(() => {
        if (selected == null)
            return '';

        const product = products[selected];
        return product.unit;
    }, [selected, products]);

    const dropdown = useMemo(() => {
        if (filter.trim().length === 0) {
            return <></>
        }

        return <div className="cb-card cost-dropdown fridge-dropdown-inner">
            {
                filteredProducts.map(({name, price, amount, unit, id}) => (
                    <a className={classNames("cost-dropdown-entry", {
                        "cost-dropdown-entry--active": id === selected
                    })}
                       key={id}
                       onClick={() => selectProduct(id)}>
                        <h3>{name}</h3>
                        <span>${price}/{(amount === 1 ? '' : amount)}{unit}</span>
                    </a>
                ))
            }
        </div>;
    }, [filter, selected]);

    const selectProduct = id => {
        setSelected(id);
        setQuantity(products[id].amount);
    }


    const retrieveProducts = async () => {
        try {
            const json = await authPost(
                '/products/list',
                {}
            );
            setProducts(
                json.map(product => ({
                    name: product.product,
                    price: product.price,
                    amount: product.quantity,
                    unit: product.unit
                }))
            );
        } catch (err) {
            console.log('failed to retrieve products');
        }
    }
    useEffect(() => {
        retrieveProducts();
    }, []);


    const ITEMS = Array.from({length: 1}).map(() => ({
        name: 'Placeholder Apple',
        price: 69,
        amount: 420,
        unit: 'kg'
    }));

    const [expired, setExpired] = useState(ITEMS);
    const [good, setGood] = useState(ITEMS);

    const handleAdd = () => {
        if (selected == null) {
            alert('No products selected');
            return;
        }

        const product = products[selected];
        const body = {
            ...product,
            amount: quantity,
        }

        setGood([
            ...good,
            body
        ]);

        setSelected(null);
        setQuantity('');
        setDescription('');
        setFilter('');
    }


    return <div className="fridge-page">
        <h1 className="cb-page-title" style={{marginBottom: '1rem'}}>My Storage</h1>
        <h3 className="cb-title">Checking what food you currently have at home!</h3>
        <br/>

        <div className="fridge-cost-box">
            <div className="cost-search">
                <div className="cb-card cost-ing">
                    <h3 className="cb-card-title">Ingredients</h3>
                    <input placeholder="Search Items" className="cb-input"
                           disabled={retrieving}
                           value={filter}
                           onChange={e => setFilter(e.currentTarget.value)}/>
                </div>
                <div className="cb-card cost-search-others">
                    <div className="cost-search-entry">
                        <h3 className="cb-card-title">Description</h3>
                        <input placeholder="Description"
                               className="cb-input"
                               disabled={retrieving}
                               value={description}
                               onChange={e => setDescription(e.currentTarget.value)}/>
                    </div>
                    <div className="cb-card-hline">

                    </div>
                    <div className="cost-search-entry">
                        <h3 className="cb-card-title">Quantity</h3>
                        <input placeholder="Add Values"
                               className="cb-input"
                               disabled={retrieving}
                               value={quantity}
                               onChange={e => setQuantity(e.currentTarget.value)}/>
                    </div>
                    <div className="cb-card-hline">

                    </div>
                    <div className="cost-search-entry">
                        <h3 className="cb-card-title">Measures</h3>
                        <input placeholder="Units" className="cb-input"
                               disabled
                               value={selectedMeasure}/>
                    </div>

                    <div className='cost-search-container fridge-search-buttons'>
                        <button className="cb-button cb-button--outline cost-search-btn"
                                disabled={retrieving}
                                onClick={handleAdd}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                 className="bi bi-save" viewBox="0 0 16 16">
                                <path
                                    d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                            </svg>
                        </button>
                        <button className="cb-button cb-button--outline cost-search-btn"
                                disabled={retrieving}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                 className="bi bi-camera" viewBox="0 0 16 16">
                                <path
                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                                <path
                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="fridge-dropdown">
                {dropdown}
            </div>
        </div>

        <div className="fridge-content">
            <div className="fridge-left">
                <h3 className="fridge-expired">Nearly Expired</h3>
                <div className="fridge-items">
                    {expired.map(({price, amount, unit, name}, id) => (
                        <a className="cost-dropdown-entry"
                           key={id}
                           onClick={() => selectProduct(id)}>
                            <h3>{name}</h3>
                            <span>${price}/{(amount === 1 ? '' : amount)}{unit}</span>
                        </a>
                    ))}
                </div>

            </div>
            <div className="fridge-right">
                <h3 className="fridge-good">Still Good!</h3>

                <div className="fridge-items">
                    {good.map(({price, amount, unit, name}, id) => (
                        <a className="cost-dropdown-entry"
                           key={id}
                           onClick={() => selectProduct(id)}>
                            <h3>{name}</h3>
                            <span>${price}/{(amount === 1 ? '' : amount)}{unit}</span>
                        </a>
                    ))}
                </div>

            </div>
        </div>
        <Footer/>
    </div>
}