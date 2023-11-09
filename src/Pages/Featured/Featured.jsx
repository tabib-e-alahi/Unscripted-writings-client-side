
// import { DataGrid } from '@mui/x-data-grid';
// import { useLoaderData } from 'react-router-dom';





// const Featured = () => {
//     const blogs = useLoaderData();
//     console.log(blogs);



    
//     const columns = [
//         { field: 'SL.', headerName: 'SL', width: 70 },
//         { field: 'title', headerName: 'Blog Title', width: 130 },
//         { field: 'owner', headerName: 'Blog Owner', width: 130 },
//         {
//           field: 'picture',
//           headerName: 'Profile Picture',
//           width: 130,
//           render: (row) => {
//             return (
//               <img src={row.picture} alt={`${row.owner}'s profile picture`} />
//             );
//           }
//         }
//       ];


  

//       const rows = [];
      

//       for( let i=0; i<blogs.length;){
//         rows.push({
//             id:i++,
//             title:blogs[i].title,
//             owner:blogs[i].author_info.author_picture,
//             picture: blogs[i].author_info.author_picture
//         })
//       }

      
// console.log(rows);

//   return (
//     <div>
//      <div className='max-w-7xl mx-auto h-full' >
//       <DataGrid className=''
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 10 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
//     </div>
//     </div>
//   );
// };

// export default Featured;
