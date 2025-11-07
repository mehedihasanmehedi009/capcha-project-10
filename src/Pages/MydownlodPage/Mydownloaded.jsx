import React, { useContext, useEffect, useState } from 'react';
import { ModelCard } from '../../components/ModelCard';
import { AuthContext } from '../../context/AuthContext';

const Mydownloaded = () => {
      const { user } = useContext(AuthContext);
      const [owner, setOwner] = useState();
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        fetch(`http://localhost:3000/my-downlod?email=${user.email}`, {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setOwner(data);
            setLoading(false);
          });
      }, [user]);
      if (loading) {
        return (
         <div className="flex justify-center items-center min-h-screen">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-pink-500"></div>
        </div>
        );
      }
    return (
        <div>
                <div>
                  <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
                    {owner?.length > 0 ? (
                      owner.map((model) => <ModelCard key={model._id} model={model} />)
                    ) : (
                      <p className="text-center mt-4">No models found</p>
                    )}
                  </div>
                </div>
              
        </div>
    );
};

export default Mydownloaded;