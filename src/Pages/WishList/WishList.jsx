import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Wishcard from "./Wishcard";


const WishList = () => {
    const [wishData, setWishData] = useState([])

    const {user} =  useContext(AuthContext);

    useEffect(() =>{
        fetch(`http://localhost:5000/wishlist?email=${user?.email}`)
        .then(res =>res.json())
        .then(data => setWishData(data))
    },[user.email])

   

    return (
        <div>
            <div className="max-w-6xl mx-auto mt-10 grid grid-cols-2 gap-10">
            {
                wishData.map(wish => <Wishcard 
                    key={wish._id} 
                    wish={wish}
                    wishData={wishData}
                    setWishData={setWishData} 
                ></Wishcard>)
            }
            </div>
        </div>
    );
};

export default WishList;