import axios from 'axios';
import * as Config from "../Utils/config";
const qs = require('qs');




export async function GetClient(token) {
    try {
        const res = await axios.get(`${Config.base_url}client/list`, {
            headers: {
                'Authorization': `${token}`
            },
        });

        return res?.data;
    } catch (err) {


        // if ("Forbidden" == err.response?.data || err.message) {
        //     localStorage.clear()
        //     window.location.reload()
        // }
        return err;
    }
}



export async function AddStaffClient(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}user/add`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },

        });

        return res?.data;
    } catch (err) {
        return err.response?.data || err.message;
    }
}


// get client detail 

export async function clientdetailbyid(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}client/detail/${_id}`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}

// get client plan data 


export async function clientplandatabyid(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}client/myplan/${_id}`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}




// get list for staaf
export async function GetStaff(token) {
    try {
        const res = await axios.get(`${Config.base_url}user/list`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return err;
    }
}



// delete staaf

export async function deleteStaff(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}user/delete/${_id}`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}



// update staff


export async function UpdateStaff(data, token) {
    try {

        const res = await axios.put(`${Config.base_url}user/update`, data, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}


// update client 

export async function UpdateClient(data, token) {
    try {
        const res = await axios.put(`${Config.base_url}client/update`, data, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}


// delete client 

export async function deleteClient(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}client/delete/${_id}`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}




// add client

export async function AddClient(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}client/add`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },

        });

        return res?.data;
    } catch (err) {
        return err.response?.data || err.message;
    }
}


// add signal by admin

export async function AddSignalByAdmin(data, token) {
    try {
        const formData = new FormData();
        for (const key in data) {
            if (key === 'report' && data[key]) {
                formData.append(key, data[key]);
            } else {
                formData.append(key, data[key]);
            }
        }

        const res = await axios.post(`${Config.base_url}signal/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {
        return err.response?.data || err.message;
    }
}





// service list


export async function GetService(token) {
    try {
        const res = await axios.get(`${Config.base_url}service/list`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return err;
    }
}


// service add

export async function AddService(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}service/add`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {
        return err.response?.data || err.message;
    }
}




// update service 

export async function UpdateService(data, token) {
    try {
        const res = await axios.put(`${Config.base_url}service/update`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {
        return err.response?.data || err.message;
    }
}


// update service status


export async function UpdateServiceStatus(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}service/change-status`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {
        return err.response?.data || err.message;
    }
}


// update client status

export async function UpdateClientStatus(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}client/change-status`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {
        return err.response?.data || err.message;
    }
}




// update staff status

export async function updateStaffstatus(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}user/change-status`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {
        return err.response?.data || err.message;
    }
}




// get stock list and detail


export async function GetStockDetail(token) {
    try {
        const res = await axios.get(`${Config.base_url}stock/list`, {
            headers: {

                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return err;
    }
}



export async function GetSignallist(data, token) {
    try {
        const res = await axios.get(`${Config.base_url}signal/list`, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params: {
                from: data.from,
                to: data.to,
                service: data.service,
                stock: data.stock
            }
        });

        return res?.data;
    } catch (error) {
        console.log("Error fetching signals:", error.response ? error.response.data : error.message);
    }

}





// get signal detailperuser
export async function Signalperdetail(_id, token) {

    try {
        const res = await axios.get(`${Config.base_url}signal/detail/${_id}`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}



// delete signal 
export async function DeleteSignal(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}signal/delete/${_id}`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}



// for signal close api 
export async function SignalCloseApi(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}signal/closesignal`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });
        return res?.data;
    } catch (err) {
        return err.response?.data || err.message;
    }
}



// basket list 
export async function BasketAllList(token) {
    try {
        const res = await axios.get(`${Config.base_url}basket/list`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return err;
    }
}




// get basket detail per stock

export async function Viewbasket(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}basket/detail/${_id}`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}



// get delete basket 

export async function deletebasket(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}basket/delete/${_id}`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}





// add staff permission 

export async function addStaffpermission(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}user/update-permissions`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {
        return err.response?.data || err.message;
    }
}



// staff detail per id

export async function getstaffperuser(_id, token) {

    try {
        const res = await axios.get(`${Config.base_url}user/detail/${_id}`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}


// basket
// add basket 

export async function Addbasketplan(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}basket/add`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {
        return err.response?.data || err.message;
    }
}


// update basket 

export async function Updatebasket(data, token) {
    try {
        const res = await axios.put(`${Config.base_url}basket/update`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {
        return err.response?.data || err.message;
    }
}


// plan list 


export async function getplanlist(token) {

    try {
        const res = await axios.get(`${Config.base_url}plan/list`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}



// add plan 


export async function Addplanbyadmin(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}plan/add`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },

        });

        return res?.data;
    } catch (err) {
        return err.response?.data || err.message;
    }
}


// plan  plancategory list

export async function getcategoryplan(token) {

    try {
        const res = await axios.get(`${Config.base_url}plancategory/list`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}


// category active plan 

export async function getActivecategoryplan(token) {

    try {
        const res = await axios.get(`${Config.base_url}plancategory/activeplancategory`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}




// plan category add 

export async function Addplancategory(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}plancategory/add`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },

        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



//  update category plan 

export async function UpdateCategoryplan(data, token) {
    try {
        const res = await axios.put(`${Config.base_url}plancategory/update`, data, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}


// delete plan category 


export async function deleteplancategory(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}plancategory/delete/${_id}`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}


// update plan status 

export async function updatecategorydstatus(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}plancategory/change-status`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// plan status 

export async function changeplanstatus(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}plan/change-status`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// delet api for service

export async function Deleteservices(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}service/delete/${_id}`, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {
        return err.response?.data || err.message;
    }
}



// get stock list 

export async function getstocklist(token) {

    try {
        const res = await axios.get(`${Config.base_url}stock/list`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}



// add stock 

export async function AddstockbyAdmin(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}stock/add`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}

// update stock


export async function Updatestock(data, token) {
    try {
        const res = await axios.put(`${Config.base_url}stock/update`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// delet api for stock

export async function DeleteStock(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}stock/delete/${_id}`, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;

    } catch (err) {

        return err.response?.data || err.message;
    }
}



// change status of stock 

export async function Stockstatus(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}stock/change-status`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },

        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}




// set stock data in bulk 

export async function Setstockinbulk(data, token) {
    const formData = new FormData();
    formData.append('add_by', data.add_by);
    formData.append('file', data.file);
    try {
        const res = await axios.post(`${Config.base_url}stock/addbulkstock`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// get blogs list 


export async function getblogslist(token) {

    try {
        const res = await axios.get(`${Config.base_url}blogs/list`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}



// add blogs by admin 


export async function Addblogsbyadmin(data, token) {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('image', data.image);
    formData.append('add_by', data.add_by);
    try {
        const res = await axios.post(`${Config.base_url}blogs/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// update blogs

export async function Updateblogsbyadmin(data, token) {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('image', data.image);
    formData.append('id', data.id);
    try {
        const res = await axios.post(`${Config.base_url}blogs/update`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



//blogs status 

export async function changeblogsstatus(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}blogs/change-status`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}

// blogs delete 

// delete news 

export async function DeleteBlog(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}blogs/delete/${_id}`, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;

    } catch (err) {

        return err.response?.data || err.message;
    }
}




// get news list 


export async function getnewslist(token) {

    try {
        const res = await axios.get(`${Config.base_url}news/list`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}



// add News by admin 


export async function AddNewsbyadmin(data, token) {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('image', data.image);
    formData.append('add_by', data.add_by);
    try {
        const res = await axios.post(`${Config.base_url}news/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// update news 

export async function UpdateNewsbyadmin(data, token) {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('image', data.image);
    formData.append('id', data.id);
    try {
        const res = await axios.post(`${Config.base_url}news/update`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// news status

export async function changeNewsStatus(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}news/change-status`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// delete news 

export async function DeleteNews(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}news/delete/${_id}`, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;

    } catch (err) {

        return err.response?.data || err.message;
    }
}



// FAQ


// get FAQ list 


export async function getFaqlist(token) {

    try {
        const res = await axios.get(`${Config.base_url}faq/list`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}



// add faq 

export async function AddFaq(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}faq/add`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },

        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// update faq 

export async function UpdateFaq(data, token) {
    try {
        const res = await axios.put(`${Config.base_url}faq/update`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },

        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// Faq delete 


export async function DeleteFAQ(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}faq/delete/${_id}`, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;

    } catch (err) {

        return err.response?.data || err.message;
    }
}



// Change Faq status 

// status

export async function changeFAQStatus(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}faq/change-status`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// add coupon

export async function Addcouponbyadmin(data, token) {
    const formData = new FormData();

    formData.append('add_by', data.add_by);
    formData.append('image', data.image);
    formData.append('name', data.name);
    formData.append('code', data.code);
    formData.append('type', data.type);
    formData.append('value', data.value);
    formData.append('startdate', data.startdate);
    formData.append('enddate', data.enddate);
    formData.append('minpurchasevalue', data.minpurchasevalue);
    formData.append('mincouponvalue', data.mincouponvalue);
    formData.append('description', data.description);

    try {
        const res = await axios.post(`${Config.base_url}coupon/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// get coupon list 

export async function getcouponlist(token) {

    try {
        const res = await axios.get(`${Config.base_url}coupon/list`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}



// update coupon or edit coupon

export async function updateCouponbyadmin(data, token) {
    const formData = new FormData();

    formData.append('id', data.id);
    formData.append('image', data.image);
    formData.append('name', data.name);
    formData.append('code', data.code);
    formData.append('type', data.type);
    formData.append('value', data.value);
    formData.append('startdate', data.startdate);
    formData.append('enddate', data.enddate);
    formData.append('minpurchasevalue', data.minpurchasevalue);
    formData.append('mincouponvalue', data.mincouponvalue);
    formData.append('description', data.description);

    try {
        const res = await axios.put(`${Config.base_url}coupon/update`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// delete coupon

export async function DeleteCoupon(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}coupon/delete/${_id}`, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;

    } catch (err) {

        return err.response?.data || err.message;
    }
}



// get terms content

export async function getconsitionlist(token) {

    try {
        const res = await axios.get(`${Config.base_url}content/list`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}


// add condition 

export async function Addtermscondition(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}content/add`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },

        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// change condiiton status 

export async function changeconditionstatus(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}content/change-status`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// update terms and condition

export async function UpdateCondition(data, token) {
    try {
        const res = await axios.put(`${Config.base_url}content/update`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },

        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



//  assign subscription 


export async function PlanSubscription(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}plan/addplansubscription`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// basket service assign 

export async function BasketSubscription(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}api/list/addbasketsubscription`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// update plan 

export async function Updateplan(data, token) {
    try {
        const res = await axios.put(`${Config.base_url}plan/update`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// getby id detail of plan 

export async function getbyidplan(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}plan/detail/${_id}`, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;

    } catch (err) {
        return err.response?.data || err.message;
    }
}


// delete plan

export async function Deleteplan(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}plan/delete/${_id}`, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;

    } catch (err) {
        return err.response?.data || err.message;
    }
}




// get banner list

export async function getbannerlist(token) {

    try {
        const res = await axios.get(`${Config.base_url}banner/list`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}


// add banner by admin 


export async function Addbanner(data, token) {
    const formData = new FormData();
    formData.append('image', data.image);
    formData.append('add_by', data.add_by);
    formData.append('hyperlink', data.hyperlink);
    try {
        const res = await axios.post(`${Config.base_url}banner/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// update  banner

export async function UpdateBanner(data, token) {
    const formData = new FormData();
    formData.append('image', data.image);
    formData.append('id', data.id);
    formData.append('hyperlink', data.hyperlink);
    try {
        const res = await axios.post(`${Config.base_url}banner/update`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// banner status

export async function changeBannerStatus(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}banner/change-status`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// banner delete

export async function DeleteBanner(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}banner/delete/${_id}`, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;

    } catch (err) {

        return err.response?.data || err.message;
    }
}


// basic setting 

export async function basicsettinglist(token) {

    try {
        const res = await axios.get(`${Config.base_url}basicsetting/detail`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}



// add or update basic setting 

export async function Updatebasicsettings(data, token) {
    const formData = new FormData();

    formData.append('id', data.id);
    formData.append('from_name', data.from_name);
    formData.append('address', data.address);
    formData.append('email_address', data.email_address);
    formData.append('contact_number', data.contact_number);
    formData.append('favicon', data.favicon);
    formData.append('logo', data.logo);

    try {
        const res = await axios.post(`${Config.base_url}basicsetting/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// update email setting


export async function UpdateEmailSettings(data, token) {
    const formData = new FormData();


    // formData.append('from_mail', data.from_mail);
    // formData.append('receiver_earn', data.receiver_earn);
    // formData.append('refer_description', data.refer_description);
    // formData.append('refer_title', data.refer_title);
    // formData.append('sender_earn', data.sender_earn);
    formData.append('smtp_host', data.smtp_host);
    formData.append('smtp_password', data.smtp_password);
    formData.append('smtp_port', data.smtp_port);
    // formData.append('smtp_status', data.smtp_status);
    formData.append('smtp_username', data.smtp_username);
    formData.append('to_mail', data.to_mail);
    formData.append('encryption', data.encryption);
    // formData.append('refer_image', data.refer_image);
    // formData.append('surepass_token', data.surepass_token);
    // formData.append('digio_client_id', data.digio_client_id);
    // formData.append('digio_client_secret', data.digio_client_secret);
    // formData.append('razorpay_key', data.razorpay_key);
    // formData.append('razorpay_secret', data.razorpay_secret);

    try {
        const res = await axios.post(`${Config.base_url}basicsetting/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// api information 

export async function updateApiinfo(data, token) {
    const formData = new FormData();
  
    formData.append('digio_client_id', data.digio_client_id);
    formData.append('digio_client_secret', data.digio_client_secret);
    formData.append('digio_template_name', data.digio_template_name);
    try {
        const res = await axios.post(`${Config.base_url}basicsetting/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// update payment gateway 


export async function updatePayementgateway(data, token) {
    const formData = new FormData();

    formData.append('razorpay_key', data.razorpay_key);
    formData.append('razorpay_secret', data.razorpay_secret);

    try {
        const res = await axios.post(`${Config.base_url}basicsetting/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// get email template page

export async function getemailtemplate(token) {

    try {
        const res = await axios.get(`${Config.base_url}mailtemplate/list`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}


//  update template 


export async function UpdateTemplate(data, token) {
    try {
        const res = await axios.put(`${Config.base_url}mailtemplate/update`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



/// get stock list by on service

export async function getstockbyservice(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}stock/getstockbyservice`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}

// get stock expiry date

export async function getexpirydate(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}stock/getstocksbyexpiry`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// get change password api 

export async function ChangePassword(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}user/change-password`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


//  forget api 

export async function ForgetPasswordApi(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}user/forgot-password`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// get dasboard api 

export async function getDashboarddetail(token) {

    try {
        const res = await axios.get(`${Config.base_url}dashboard/getcount`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return { error: err.response?.data || err.message };
    }
}



// get strike price
// get stock expiry date

export async function getstockStrickprice(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}stock/getstocksbyexpirybystrike`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// get plan payment history 



export async function getPayementhistory(token) {
    try {
        const res = await axios.get(`${Config.base_url}plan/paymenthistory`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return err;
    }
}

// get freelist client 

export async function FreeClientList(token) {
    try {
        const res = await axios.get(`${Config.base_url}client/freetriallist`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return err;
    }
}


// delete free client 

export async function DeleteFreeClient(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}client/freetrialdelete/${_id}`, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;

    } catch (err) {

        return err.response?.data || err.message;
    }
}




//add broadcast messsage 

export async function SendBroadCast(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}broadcast/add`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// get broadcast message 

export async function getBroadCastmessage(token) {
    try {
        const res = await axios.get(`${Config.base_url}broadcast/list`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return err;
    }
}


// change broacast status 

export async function ChangeBroadCastStatus(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}broadcast/change-status`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// delete broadcastmessage 
export async function DeleteBroadCastmessage(_id, token) {
    try {
        const res = await axios.get(`${Config.base_url}broadcast/delete/${_id}`, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;

    } catch (err) {

        return err.response?.data || err.message;
    }
}



// update broadcast message 

// update plan 

export async function UpdateCastmessage(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}broadcast/update`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// get payment request 

// get broadcast message 

export async function PaymentRequestlist(token) {
    try {
        const res = await axios.get(`${Config.base_url}client/payoutlist`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return err;
    }
}


// change status on payment request



// change broacast status 

export async function ChangePaymentStatus(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}client/process-payout-request`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}



// get help message 

// get broadcast message 

export async function getHelpMessagelist(token) {
    try {
        const res = await axios.get(`${Config.base_url}client/helpdesklist`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return err;
    }
}


// // add freetrial client 

// export async function addfreeClient(data, token) {
//     try {
//         const res = await axios.post(`${Config.base_url}basicsetting/add`, data, {
//             headers: {
//                 data: {},
//                 'Authorization': `${token}`,
//             },
//         });

//         return res?.data;
//     } catch (err) {

//         return err.response?.data || err.message;
//     }
// }


export async function addfreeClient(data, token) {
    const formData = new FormData();
    formData.append('freetrial', data.freetrial);
    try {
        const res = await axios.post(`${Config.base_url}basicsetting/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// update refer and earn 

export async function UpdatereferAndEarn(data, token) {
    const formData = new FormData();
    formData.append('sender_earn', data.sender_earn);
    formData.append('receiver_earn', data.receiver_earn);
    formData.append('refer_title', data.refer_title);
    formData.append('refer_description', data.refer_description);
    formData.append('refer_image', data.refer_image);
    
    try {
        const res = await axios.post(`${Config.base_url}basicsetting/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// update coupon status

export async function CouponStatus(data, token) {
    try {
        const res = await axios.post(`${Config.base_url}coupon/change-status`, data, {
            headers: {
                data: {},
                'Authorization': `${token}`,
            },
        });

        return res?.data;
    } catch (err) {

        return err.response?.data || err.message;
    }
}


// get freetrial status 



export async function getfreetrialstatus(token) {
    try {
        const res = await axios.get(`${Config.base_url}basicsetting/freetrial`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return res?.data;
    } catch (err) {
        return err;
    }
}
