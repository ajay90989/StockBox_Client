import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../../components/Table";
import { getMySubsription } from "../../../Services/User";

const Subscription = () => {
    // States
    const [planData, setPlanData] = useState([]); // State for storing subscription data
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    console.log("ID:", id, "Token:", token);

    // Function to fetch subscription data
    const getMySubscription = async () => {
        try {
            const res = await getMySubsription({ id, token }); // Call the API
            console.log("Response:", res);

            if (res?.status === true) {
                setPlanData(res.data); // Update state with the fetched data
            } else {
                console.error("API response status is false.");
                setPlanData([]); // Set to empty if response is false
            }
        } catch (err) {
            console.error("Error fetching subscription:", err);
            setPlanData([]); // Handle error case
        }
    };

    useEffect(() => {
        getMySubscription(); // Fetch data when component mounts
    }, []);

    // Define table columns
    const columns = [
        {
            name: "Title",
            selector: (row) => row.title,
        },
        {
            name: "Year",
            selector: (row) => row.year,
        },
    ];

    return (
        <div>
            <div className="page-content">
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Subscription</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <Link to="/client/dashboard">
                                        <i className="bx bx-home-alt" />
                                    </Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <hr />

                {/* Cards Section */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <ul className="list-group list-group-flush mt-0">
                                <li className="list-group-item d-flex justify-content-between align-items-center headingfont">
                                    Cash<span></span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Expiry Date<span className="badge bg-primary rounded-pill badgespan">28 Sep 2025</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <ul className="list-group list-group-flush mt-0">
                                <li className="list-group-item d-flex justify-content-between align-items-center headingfont">
                                    Future<span></span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Expiry Date<span className="badge bg-primary rounded-pill badgespan">28 Sep 2025</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <ul className="list-group list-group-flush mt-0">
                                <li className="list-group-item d-flex justify-content-between align-items-center headingfont">
                                    Option<span></span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Expiry Date<span className="badge bg-primary rounded-pill badgespan">28 Sep 2025</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                <div className="card">
                    <Table columns={columns} data={planData} /> {/* Use fetched data */}
                </div>
            </div>
        </div>
    );
};

export default Subscription;
