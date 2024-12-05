import React, { useEffect } from 'react';
import Table from '../../../components/Table';
import { GetPastPerformance } from '../../../Services/User';

const PastPerformance = () => {
    const [pastPerformance, setPastPerformance] = React.useState([]);

    const fetchPastPerformance = async () => {
        try {
            
            const res = await GetPastPerformance();
            console.log('Response:', res); // Inspect the response
            setPastPerformance([res.data]); // Convert object to an array
        } catch (error) {
            console.error('Error fetching past performance:', error);
            setPastPerformance([]); // Handle errors gracefully
        }
    };

    useEffect(() => {
        fetchPastPerformance();
    }, []);

    const columns = [
        { name: 'Count', selector: row => row.count },
        { name: 'Total Profit', selector: row => row.totalProfit },
        { name: 'Total Loss', selector: row => row.totalLoss },
        { name: 'Profit Count', selector: row => row.profitCount },
        { name: 'Loss Count', selector: row => row.lossCount },
        { name: 'Accuracy', selector: row => row.accuracy },
        { name: 'Average Return Per Trade', selector: row => row.avgreturnpertrade },
        { name: 'Average Return Per Month', selector: row => row.avgreturnpermonth },
    ];

    return (
        <div className="page-content">
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div className="breadcrumb-title pe-3">Past Performance</div>
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
                <Table columns={columns} data={pastPerformance} />
            </div>
        </div>
    );
};

export default PastPerformance;
