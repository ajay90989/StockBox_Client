import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className="page-content">
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">FAQ</div>
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
                        <h5 className="card-title">Need Help ?</h5>
                        <hr />
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
        Michelle, I don't regret this, but I both rue and lament it?
      </button>
    </h2>
    <div
      id="collapseFive"
      className="accordion-collapse collapse show"
      aria-labelledby="headingFive"
      data-bs-parent="#accordionExample2"
    >
      <div className="accordion-body">
        <p>
          Look, last night was a mistake. We'll need to have a look inside you
          with this camera. Good news, everyone! There's a report on TV with
          some very bad news! You know, I was God once. You lived before you met
          me?!
        </p>
        <p>
          <strong>Example: </strong>I'm Santa Claus! Pansy. That's a popular
          name today. Little "e", big "B"?
        </p>
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
        Why am I sticky and naked?
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
        Is that a cooking show?
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
                </div>

            </div>
        </div>
    );
}

export default Faq;
