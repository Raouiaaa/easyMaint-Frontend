import React from "react";

function Table({ assets }) {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Reference</th>
                        <th scope="col">Location</th>
                        <th scope="col">Category</th>
                        <th scope="col">Installation Date</th>
                        <th scope="col">Maintenance Frequency</th>
                        <th scope="col">Technical Specs ID</th>
                        <th scope="col">Sub-Category ID</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.length > 0 ? (
                        assets.map((asset) => (
                            <tr key={asset.id}>
                                <th scope="row">{asset.id}</th>
                                <td>{asset.reference}</td>
                                <td>{asset.location}</td>
                                <td>{asset.category}</td>
                                <td>{asset.installationDate}</td>
                                <td>{asset.maintenanceFrequency}</td>
                                <td>{asset.technicalSpecsId}</td>
                                <td>{asset.subCategoryId}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center">No matching assets found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;