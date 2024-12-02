import React from 'react'

const SubscribeService = () => {
  return (
    <div>
       <div className="page-content">
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div className="breadcrumb-title pe-3">Subscribe</div>
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
    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 mt-5">
    <div className="col-12 col-lg-8 col-xl-8">
  <h6 className="mb-4 text-uppercase">Payment information  </h6>

  <div className="card">
    <div className="card-body">
    <ul className="nav nav-tabs nav-primary" role="tablist">
    <li className="nav-item" role="presentation">
      <a
        className="nav-link active"
        data-bs-toggle="tab"
        href="#primaryhome"
        role="tab"
        aria-selected="true"
      >
        <div className="d-flex align-items-center">
          <div className="tab-icon">
            <i className="bx bx-home font-18 me-1" />
          </div>
          <div className="tab-title">Pay With QR Code</div>
        </div>
      </a>
    </li>
    <li className="nav-item" role="presentation">
      <a
        className="nav-link"
        data-bs-toggle="tab"
        href="#primaryprofile"
        role="tab"
        aria-selected="false"
        tabIndex={-1}
      >
        <div className="d-flex align-items-center">
          <div className="tab-icon">
            <i className="bx bx-user-pin font-18 me-1" />
          </div>
          <div className="tab-title"><img src="/assets/images/r-logo.jpg" width={120} alt="" /></div>
        </div>
      </a>
    </li>
    
  </ul>
  <div className="tab-content py-3">
    <div className="tab-pane fade show active" id="primaryhome" role="tabpanel">
    

<div className="accordion accordion-flush" id="accordionExample2">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseFive"
        aria-expanded="true"
        aria-controls="collapseFive"
      >
       ICICI Bank
      </button>
    </h2>
    <div
      id="collapseFive"
      className="accordion-collapse collapse show"
      aria-labelledby="headingFive"
      data-bs-parent="#accordionExample2"
    >
      <div className="accordion-body">
<div className='row'>
<div class="col-12 col-lg-8 col-xl-8 border-right">
<dl className="row">
  <dt className="col-sm-5">Name</dt>
  <dd className="col-sm-7">Ajay Devdhar</dd>
  <dt className="col-sm-5">Account type</dt>
  <dd className="col-sm-7">Current</dd>
  <dt className="col-sm-5">Branch ID</dt>
  <dd className="col-sm-7">Brown</dd>
  <dt className="col-sm-5">Account number</dt>
  <dd className="col-sm-7">200895548795 </dd>
  <dt className="col-sm-5">IFSC code</dt>
  <dd className="col-sm-7">123456</dd>
  
</dl>

</div>

<div class="col-12 col-lg-4 col-xl-4">
<img src="/assets/images/QR.jpg" width={150} alt="" />

</div>

</div>



      
        
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseSix"
        aria-expanded="false"
        aria-controls="collapseSix"
      >
       IDFC FIRST Bank
      </button>
    </h2>
    <div
      id="collapseSix"
      className="accordion-collapse collapse"
      aria-labelledby="headingSix"
      data-bs-parent="#accordionExample2"
    >
      <div className="accordion-body">
        <p>
          Did I miss something fun? Humans dating robots is sick. You people
          wonder why I'm still single? It's 'cause all the fine robot sisters
          are dating humans! Kids don't turn rotten just from watching TV.
        </p>
        <p>
          <strong>Example: </strong>I usually try to keep my sadness pent up
          inside where it can fester quietly as a mental illness.
        </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseSeven"
        aria-expanded="false"
        aria-controls="collapseSeven"
      >
       SBI FIRST Bank
      </button>
    </h2>
    <div
      id="collapseSeven"
      className="accordion-collapse collapse"
      aria-labelledby="headingSeven"
      data-bs-parent="#accordionExample2"
    >
      <div className="accordion-body">
        <p>
          OK, this has gotta stop. I'm going to remind Fry of his humanity the
          way only a woman can. You seem malnourished. Are you suffering from
          intestinal parasites? Check it out, y'all. Everyone who was invited is
          here. I am Singing Wind, Chief of the Martians.
        </p>
        <p>
          <strong>Example: </strong>Man, I'm sore all over. I feel like I just
          went ten rounds with mighty Thor.
        </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingEight">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseEight"
        aria-expanded="false"
        aria-controls="collapseEight"
      >
        You are the last hope of the universe?
      </button>
    </h2>
    <div
      id="collapseEight"
      className="accordion-collapse collapse"
      aria-labelledby="headingEight"
      data-bs-parent="#accordionExample2"
    >
      <div className="accordion-body">
        <p>
          I don't want to be rescued. I videotape every customer that comes in
          here, so that I may blackmail them later. Ah, computer dating. It's
          like pimping, but you rarely have to use the phrase "upside your
          head."
        </p>
        <p>
          <strong>Example: </strong>Tell them I hate them.
        </p>
      </div>
    </div>
  </div>
</div>




    </div>
    <div className="tab-pane fade" id="primaryprofile" role="tabpanel">
      <p>
        Food truck fixie locavore, accusamus mcsweeney's marfa nulla
        single-origin coffee squid. Exercitation +1 labore velit, blog sartorial
        PBR leggings next level wes anderson artisan four loko farm-to-table
        craft beer twee. Qui photo booth letterpress, commodo enim craft beer
        mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud
        organic, assumenda labore aesthetic magna delectus mollit. Keytar
        helvetica VHS salvia yr, vero magna velit sapiente labore stumptown.
        Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts
        beard ut DIY ethical culpa terry richardson biodiesel. Art party
        scenester stumptown, tumblr butcher vero sint qui sapiente accusamus
        tattooed echo park.
      </p>
    </div>
    
  </div> 
      
    </div>
  </div>
</div>
<div class="cocol-12 col-lg-4 col-xl-4">
<h6 className="mb-4 text-uppercase">Order Information</h6>
<div className="card">
 
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>

    <div className="order-info-itro">
  <p>
    <span>Valid For:</span>
    <span>12 Months</span>
  </p>
  <p>
    <span>Price:</span>
    <span>₹118.80 INR</span>
  </p>
  <p className="order-info-itro-sale">
    <span>Use Coupon:</span>
    <span>-₹19.80 INR</span>
  </p>
</div>
<div className="order-info-total">
  <span>Total Charge:</span>
  <strong data-type="month">₹99.00 INR</strong>
</div>


  </div>
  
  
</div>
</div>
</div>     

    </div>

   
    </div>
  )
}

export default SubscribeService
