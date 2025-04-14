import React, { useState } from 'react'
import AssetInfoForm from '../../components/form/AssetInfoForm';
import TechnicalSpecificationsForm from '../../components/form/TechnicalSpecificationsForm';
import { useAppContext } from '../../globalContextProvider/GlobalContextProvider';


function UpdateAsset() {
    const [steps, setSteps] = useState(1)
    const { selectedAsset, setSelectedAsset } = useAppContext();

    console.log("Selected Asset:", selectedAsset);

    return (
        <div className='wrapper d-flex justify-content-center'>
            <div className="col-sm-8">
                <div className="card">
                    <div className="card-body">
                    {selectedAsset ? (
                        steps === 1 ? (
                            <AssetInfoForm setSteps={setSteps} asset={selectedAsset} setAsset={setSelectedAsset} />
                        ) : steps === 2 ? (
                            <TechnicalSpecificationsForm setSteps={setSteps} asset={selectedAsset} setAsset={setSelectedAsset} action="update"/>
                        ) : null
                        ) 
                        : 
                        (<p>Loading asset data...</p>)
                    }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateAsset