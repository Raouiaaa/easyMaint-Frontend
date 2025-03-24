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
                            <tr key={asset.id_assets}>
                                <th scope="row">{asset.id_assets}</th>
                                <td>{asset.name}</td>
                                <td>{asset.location}</td>
                                <td>{asset.category}</td>
                                <td>{asset.installation_date}</td>
                                <td>{asset.maintenance_frequency_inDays}</td>
                                <td>{asset.technicalSpecifications.id_technical_specifications}</td>
                                <td>{asset.subCategory.id_sub}</td>
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