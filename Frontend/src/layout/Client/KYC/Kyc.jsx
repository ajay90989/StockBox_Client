
import { useFormik } from 'formik';

const KycForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            address: ''
        },
        onSubmit: values => {
            
        },
    });

    return (


        <div className="page-content">
      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div className="breadcrumb-title pe-3">KYC</div>
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
      <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <br />
            <label htmlFor="address">Address</label>
            <input
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.address}
            />
            <br />
            <button type="submit">Submit</button>
        
        </form>
        </div>
      </div>
    </div>
    
    );
};

export default KycForm;