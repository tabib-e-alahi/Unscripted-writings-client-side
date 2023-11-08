import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const WishList = () => {
    const [wishData, setWishData] = useState([])

    const {user} =  useContext(AuthContext);

    useEffect(() =>{
        fetch(`http://localhost:5000/wishlist?email=${user.email}`)
        .then(res =>res.json())
        .then(data => setWishData(data))
    },[user.email])

    return (
        <div>
            <h1>{wishData.length}</h1>
        </div>
    );
};

export default WishList;