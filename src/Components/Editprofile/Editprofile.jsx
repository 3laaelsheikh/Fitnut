import axios from 'axios';
import React, { useState } from 'react';
import { FallingLines } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const Editprofile = () => {
    const [profileData, setProfileData] = useState({
        fullName: '',
        birthdays: '',
        weight: '',
        height: '',
        profileImage: null,
      });
    
      const [loading, setLoading] = useState(false);

      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        setProfileData({
          ...profileData,
          [name]: files ? files[0] : value,
        });
      };
    
      const updateProfileField = async (field, value) => {
        let endpoint;
        let body = {};
    
        switch (field) {
          case 'name':
            endpoint = 'https://abdo121212-fit-nutrition.onrender.com/change/name';
            body = { fullName: value };
            break;
          case 'birthdays':
            endpoint = 'https://abdo121212-fit-nutrition.onrender.com/change/age';
            body = { birthdays: value };
            break;
          case 'weight':
            endpoint = 'https://abdo121212-fit-nutrition.onrender.com/change/weight';
            body = { weight: value };
            break;
          case 'height':
            endpoint = 'https://abdo121212-fit-nutrition.onrender.com/change/height';
            body = { height: value };
            break;
          case 'profileImage':
            endpoint = 'https://abdo121212-fit-nutrition.onrender.com/change/profileImage';
            body = value; // FormData is already correctly structured
            break;
          default:
            return false;
        }
    
        try {
          const response = await axios.patch(endpoint, body, {
            headers: { token: localStorage.getItem('tkn') },
          });
          console.log(`Response for ${field}:`, response.data);
          return response.data.success;
        } catch (err) {
          console.log(`Error updating ${field}:`, err);
          return false;
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, birthdays, weight, height, profileImage } = profileData;
    
        setLoading(true);
    
        let success = true;
    
        if (profileImage) {
          const formData = new FormData();
          formData.append('profileImage', profileImage);
          success = success && (await updateProfileField('profileImage', formData));
        }
        if (fullName) success = success && (await updateProfileField('name', fullName));
        if (birthdays) success = success && (await updateProfileField('birthdays', birthdays));
        if (weight) success = success && (await updateProfileField('weight', weight));
        if (height) success = success && (await updateProfileField('height', height));
    
        setLoading(false);
    
        if (success) {
          navigate('/profile');
        }
      };
    
      return <>
        <div className="container py-5">
          <form onSubmit={handleSubmit} className="w-100">
            <div className="input-group mb-4">
              <input
                type="file"
                className="input rounded-3 w-100"
                name="profileImage"
                onChange={handleChange}
              />
              <label htmlFor="profileImage" className="input-label">
                Choose photo
              </label>
            </div>
    
            <div className="input-group mb-4">
              <input
                type="text"
                className="input rounded-3 w-100"
                name="fullName"
                value={profileData.fullName}
                onChange={handleChange}
                placeholder="Enter your new name"
              />
              <label htmlFor="fullName" className="input-label">
                Enter your name
              </label>
            </div>
    
            <div className="input-group mb-4">
              <input
                type="date"
                className="input rounded-3 w-100"
                name="birthdays"
                value={profileData.birthdays}
                onChange={handleChange}
                placeholder="Enter your birthdate"
              />
              <label htmlFor="birthdays" className="input-label">
                Enter your birthdate
              </label>
            </div>
    
            <div className="input-group mb-4">
              <input
                type="number"
                className="input rounded-3 w-100"
                name="weight"
                value={profileData.weight}
                onChange={handleChange}
                placeholder="Enter your weight"
              />
              <label htmlFor="weight" className="input-label">
                Enter your weight
              </label>
            </div>
    
            <div className="input-group mb-4">
              <input
                type="number"
                className="input rounded-3 w-100"
                name="height"
                value={profileData.height}
                onChange={handleChange}
                placeholder="Enter your height"
              />
              <label htmlFor="height" className="input-label">
                Enter your height
              </label>
            </div>
    
            <div className="d-flex justify-content-center py-5">
              <button
                type="submit"
                className="rounded-3 px-5 py-2 fs-3 backcolorzeaty text-white"
                disabled={loading}
              >
                {loading ? (
                  <FallingLines
                    color="#fff"
                    width="60"
                    visible={true}
                    ariaLabel="falling-lines-loading"
                  />
                ) : (
                  'Save Changes'
                )}
              </button>
            </div>
          </form>
        </div>
    </>
}

export default Editprofile;
