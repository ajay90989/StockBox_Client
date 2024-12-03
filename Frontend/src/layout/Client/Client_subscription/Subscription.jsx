import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../../../components/Table';

const Subscription = () => {
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];
    
    const data = [
          {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]




    return (
        <div>
            <div className="page-content">
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Subscription</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <Link href="/client/dashboard">
                                        <i className="bx bx-home-alt" />
                                    </Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <hr />
                
<div className='row'>
    <div className='col-md-4'>
    <div className="card">
 
    <ul className="list-group list-group-flush mt-0">
                        <li className="list-group-item d-flex justify-content-between align-items-center headingfont">
                        Cash<span></span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                        Expiry Date<span className="badge bg-primary rounded-pill badgespan">28 sep 2025</span>
                        </li>
                       
                    </ul>
                    </div>
  
    </div>
    <div className='col-md-4'>
    <div className="card">
   
    <ul className="list-group list-group-flush mt-0">
                        <li className="list-group-item d-flex justify-content-between align-items-center headingfont">
                       Future<span></span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                        Expiry Date <span className="badge bg-primary rounded-pill badgespan">28 sep 2025</span>
                        </li>
                       
                    </ul>
                    </div>
                 
    </div>
    <div className='col-md-4'>
    <div className="card">
   
    <ul className="list-group list-group-flush mt-0">
                        <li className="list-group-item d-flex justify-content-between align-items-center headingfont">
                        Option<span></span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                        Expiry Date<span className="badge bg-primary rounded-pill badgespan">28 sep 2025</span>
                        </li>
                        
                    </ul>
                    </div>
                   
    </div>
</div>
                   
                   
                </div>
                <div className="card">

<Table
columns={columns}
data={data} 
/>

</div>



            </div>
      
    );
}

export default Subscription;
