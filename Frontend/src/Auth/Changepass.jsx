import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { ChangePassword } from '../Services/Admin';

const Changepass = () => {
    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('id');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = (e) => {
        e.preventDefault();
        setShowConfirmPassword(!showConfirmPassword);
    };

    const validationSchema = Yup.object().shape({
        currentPassword: Yup.string().required('Current password is required'),
        newPassword: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('New password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
            .required('Confirm password is required')
    });

    const UpdateChangedPassword = async (values, { resetForm }) => {
        try {
            const data = {
                currentPassword: values.currentPassword,
                newPassword: values.newPassword,
                id: userid,
            };
            const response = await ChangePassword(data, token);

            if (response && response.status) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Password updated successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 2000,
                });
                resetForm();
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error updating the password.',
                    icon: 'error',
                    confirmButtonText: 'Try Again',
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'There was an error updating the password.',
                icon: 'error',
                confirmButtonText: 'Try Again',
            });
        }
    };

    return (
        <div>
            <div className="page-content">
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Change Password</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <Link to="/admin/dashboard">
                                        <i className="bx bx-home-alt" />
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Profile
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 mx-auto">
                        <div className="card">
                            <div className="card-body p-4">
                                <Formik
                                    initialValues={{
                                        currentPassword: '',
                                        newPassword: '',
                                        confirmPassword: '',
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={UpdateChangedPassword}
                                >
                                    {({ values, handleSubmit, isSubmitting }) => (
                                        <Form className="row g-3">
                                            <div className="col-md-12">
                                                <label htmlFor="currentPassword" className="form-label">
                                                    Current Password
                                                </label>
                                                <div className="input-group" id="show_hide_password">
                                                    <Field
                                                        type={showPassword ? 'text' : 'password'}
                                                        name="currentPassword"
                                                        className="form-control border-end-0"
                                                        placeholder="Enter Current Password"
                                                    />
                                                    <button
                                                        className="input-group-text bg-transparent"
                                                        onClick={togglePasswordVisibility}
                                                    >
                                                        <i className={`bx ${showPassword ? 'bx-show' : 'bx-hide'}`} />
                                                    </button>
                                                </div>
                                                <ErrorMessage name="currentPassword" component="div" className="text-danger" />
                                            </div>

                                            <div className="col-md-12">
                                                <label htmlFor="newPassword" className="form-label">
                                                    New Password
                                                </label>
                                                <div className="input-group">
                                                    <Field
                                                        type={showPassword ? 'text' : 'password'}
                                                        name="newPassword"
                                                        className="form-control border-end-0"
                                                        placeholder="Enter New Password"
                                                    />
                                                    <button
                                                        className="input-group-text bg-transparent"
                                                        onClick={togglePasswordVisibility}
                                                    >
                                                        <i className={`bx ${showPassword ? 'bx-show' : 'bx-hide'}`} />
                                                    </button>
                                                </div>
                                                <ErrorMessage name="newPassword" component="div" className="text-danger" />
                                            </div>

                                            <div className="col-md-12">
                                                <label htmlFor="confirmPassword" className="form-label">
                                                    Confirm New Password
                                                </label>
                                                <div className="input-group">
                                                    <Field
                                                        type={showConfirmPassword ? 'text' : 'password'}
                                                        name="confirmPassword"
                                                        className="form-control border-end-0"
                                                        placeholder="Confirm New Password"
                                                    />
                                                    <button
                                                        className="input-group-text bg-transparent"
                                                        onClick={toggleConfirmPasswordVisibility}
                                                    >
                                                        <i className={`bx ${showConfirmPassword ? 'bx-show' : 'bx-hide'}`} />
                                                    </button>
                                                </div>
                                                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                                            </div>

                                            <div className="col-md-12">
                                                <div className="d-md-flex d-grid align-items-center gap-3">
                                                    <button type="submit" className="btn btn-primary px-4" disabled={isSubmitting}>
                                                        {isSubmitting ? 'Updating...' : 'Update'}
                                                    </button>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Changepass;
