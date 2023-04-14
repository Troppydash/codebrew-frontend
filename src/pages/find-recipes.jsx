import "./find-recipes.css";
import Select from 'react-select';
import Food from "../components/food.jsx";
import Footer from "../components/footer.jsx";

const SELECT_STYLES = {
    control: (base, state) => ({
        ...base,
        background: '#41644A',
        borderRadius: '15px',
    }),
    singleValue: (base) => ({
        ...base,
        color: 'white'
    }),
    dropdownIndicator: base => ({
        ...base,
        color: "white",
        "&:hover": {
            color: 'white'
        }
    })
};

const SELECT_THEME = (theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
        ...theme.colors,
        primary25: '#eee',
        primary: '#41644A',
    },
});

export default function FindRecipes() {
    return <>
        <form className="find-search">
            <input className="cb-input cb-input--outline find-searchbar"
                   placeholder="What's in Your Fridge?"/>

            <button type="submit" className="cb-button cb-button--icon cb-button--outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-search" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                Search
            </button>
        </form>
        <div className="find-page">
            <div className="find-filters">
                <Select
                    defaultValue={
                        {value: 'all', label: 'All Menus'}
                    }
                    options={[
                        {value: 'all', label: 'All Menus'},
                        {value: 'gf', label: 'Gluten Free'},
                        {value: 'kt', label: 'Ketogenic'},
                        {value: 'v', label: 'Vegetarian'},
                    ]}
                    theme={SELECT_THEME}
                    styles={SELECT_STYLES}/>

                <Select
                    defaultValue={
                        {value: 'none', label: 'No Intolerances'}
                    }
                    options={[
                        {value: 'none', label: 'No Intolerances'},
                        {value: 'dairy', label: 'Dairy'},
                        {value: 'peanut', label: 'Peanut'},
                        {value: 'gluten', label: 'Gluten'},
                    ]}
                    theme={SELECT_THEME}
                    styles={SELECT_STYLES}/>


                <Select
                    defaultValue={
                        {value: 'all', label: 'Price Range'}
                    }
                    options={[
                        {value: 'all', label: 'Price Range'},
                        {value: 'ascending', label: 'Cheapest First'},
                        {value: 'descending', label: 'Expensive First'},
                    ]}
                    theme={SELECT_THEME}
                    styles={SELECT_STYLES}/>

            </div>

            <div className="find-recipes">
                {
                    Array.from({length: 10})
                        .map(() => (
                            <Food
                                cost={17}
                                nv={'energy: 17kJ'}
                                url={'https://live-production.wcms.abc-cdn.net.au/b983edcea41673904b177071b138dadb?impolicy=wcms_crop_resize&cropH=861&cropW=1529&xPos=0&yPos=345&width=862&height=485'}
                                name={'Apple'}>
                                <div className="find-recipes-action">
                                    <button className="cb-button cb-button--outline">Add To Recipe</button>
                                </div>
                            </Food>
                        ))
                }
            </div>
        </div>
        <Footer/>
    </>
}