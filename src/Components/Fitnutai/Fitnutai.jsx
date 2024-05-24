import React from 'react';
import { Link } from 'react-router-dom';

const Fitnutai = () => {


    
    return <>
    
    <div className="my-5 py-5">
        
        <div className="text-decoration-none d-flex justify-content-center align-items-center">
          <Link className='text-decoration-none text-black' to={"/uploaddetails"}>
            <div
            className="shadow bg-white rounded-3 p-3 "
          >
            <div className="text-center w-100">
              <i
                className="fa-solid fa-plus fs-1 text-muted bg-body-secondary text-center pt-2 text-dark my-5 rounded-5"
                style={{ width: "60px", height: "60px" }}
              ></i>
              <p className="text-muted">
                Files must be jpg, jpge, svg and png.
              </p>
            </div>
          </div>
          </Link>
        </div>
        
      </div>
    
    </>
}

export default Fitnutai;
