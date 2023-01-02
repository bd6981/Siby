import React from 'react'

const Info = () => {
  return (
    <div>
      this is the info 
    </div>
  )
}

export default Info
  // useEffect(() => {
  //   fetch("crimeData.json"
  //     , {
  //       header: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json'

  //       }
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(false);
  //         setData(result);
  //       },
  //       (error) => {
  //         setIsLoaded(false);
  //         setError(error);
  //       }
  //     )

  // }, []);
  

  // function search(data) {
  //       return data.filter((crime) => {
  //           if (crime.occur_date == filterParam) {
  //               return searchParam.some((newItem) => {
  //                   return (
  //                       crime[newItem]
  //                           .toString()
  //                           .toLowerCase()
  //                           .indexOf(date.toLowerCase()) > -1
  //                   );
  //               });
  //           } else if (filterParam == "All") {
  //               return searchParam.some((newItem) => {
  //                   return (
  //                       crime[newItem]
  //                           .toString()
  //                           .toLowerCase()
  //                           .indexOf(date.toLowerCase()) > -1
  //                   );
  //               });
  //           }
  //       });
  //   }

  
  // return (
  //   <div className="wrapper">
  //     <div className="search-wrapper">
  //       <label htmlFor="search-form">
  //         <input>
           
  //           type="search"
  //           name="search-form"
  //           id="search-form"
  //           className="search-input"
  //           placeholder="Search for..."
  //           value={date}
  //           onChange={(e) => setData(e.target.value)}
            
  //         </input>
  //       </label>
  //     </div>