import "./food.css";


export default function Food(
    {
        url,
        name,
        nv,
        cost,
        children
    }
) {
    return <div className="cb-card food-card">
        <div className="food-image">
            <img
                src={url}
                alt="food image"
            />
        </div>
        <h1 className="cb-card-title food-title">
            {name}
        </h1>
        <div className="food-info">
            <span>{nv}</span>
            <span>|</span>
            <span>${cost}</span>
        </div>
        {children}
    </div>
}