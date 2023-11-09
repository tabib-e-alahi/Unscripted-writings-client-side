// import { Skeleton } from "@mui/joy";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const Wishcard = ({ wish ,wishData, setWishData}) => {

//   const { _id, title, category } = wish;
//   console.log(_id);

//   if (wish === null) {
//     return (
//       <div className="max-w-4xl mx-auto">
//         <Skeleton variant="rectangular" width={910} height={900} />;
//       </div>
//     );
//   }

//   if (Object.keys(wish).length === 0) {
//     return <div>Blog not found or an error occurred.</div>;
//   }
  const handleRemove = () => {
    fetch(`http://localhost:5000/wish/${wish._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
            Swal.fire(
              "Deleted!",
              "Your product has been deleted.",
              "success"
            );
            const remaining = wishData.filter((wD) => wD._id !== wish._id);
            setWishData(remaining);
          }
       
      });

  };

  return (
    <div className="card rounded-sm card-side bg-slate-300 shadow-xl">
      <div className="card-body py-4">
        <h2 className="card-title">{wish.title}</h2>
        <p>Category: {wish.category}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleRemove} >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

Wishcard.propTypes = {
    wish: PropTypes.object,
    wishData: PropTypes.array,
    setWishData: PropTypes.array,
};

export default Wishcard;
