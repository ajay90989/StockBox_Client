import React, { useEffect, useState } from 'react';
import { getTermsCondition } from '../../../Services/User';

const Terms = () => {
    const [termsCondition, setTermsCondition] = useState('');

    const fetchTermsCondition = async () => {
        try {
            const res = await getTermsCondition();
            if (res.status) {
                setTermsCondition(res.data.description); // Set the HTML content
            }
        } catch (error) {
            console.error('Error fetching Terms Condition:', error);
        }
    };

    useEffect(() => {
        fetchTermsCondition();
     
    }, []);

    console.log('Terms Condition:', termsCondition);
    return (
        <div>
            <div className="page-content">
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Terms & Condition</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <a href="/admin/dashboard">
                                        <i className="bx bx-home-alt" />
                                    </a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <hr />
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Terms & Condition</h5>
                        <hr />
                        {/* Render HTML content safely */}
                        <div
                            dangerouslySetInnerHTML={{ __html: termsCondition }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
