import React, { useState } from 'react'
import AssetInfoForm from '../../components/form/AssetInfoForm';
import TechnicalSpecificationsForm from '../../components/form/TechnicalSpecificationsForm';

function UpdateAsset() {
    const [steps, setSteps] = useState(1)
    // const [asset, setAsset] = useState(null)
    // const {selectedAsset, setSelectedAsset} = useAppContextProvider();

    return (
        <div className='wrapper d-flex justify-content-center'>
            <div className="col-sm-8">
                <div className="card">
                    <div className="card-body">
                        {steps === 1 && <AssetInfoForm setSteps={setSteps} asset={selectedAsset} setAsset={setSelectedAsset} />}
                        {steps === 2 && <TechnicalSpecificationsForm setSteps={setSteps} asset={selectedAsset} setAsset={setSelectedAsset} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateAsset