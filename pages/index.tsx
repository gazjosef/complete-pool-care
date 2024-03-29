import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="section section-home | ">
        <div className="u-container">
          <h1>Home</h1>
        </div>
      </section>
      <section className="section | u-bg-primary-300">
        <div className="section-services | u-container">
          <div className="section-services__title">
            <h1 className="primary-heading | u-center-text u-margin-bottom-medium">
              Cheeck Us Out
            </h1>
          </div>
          <div className="section-services__boxes">
            <div className="feature-box box-1">
              <div className="feature-box__img">
                <Image src="" alt="Box 1" />
              </div>
              <div className="feature-box__text">Box 1</div>
            </div>
            <div className="feature-box box-2">
              <div className="feature-box__img">
                <Image src="" alt="Box 2" />
              </div>
              <div className="feature-box__text">Box 2</div>
            </div>
            <div className="feature-box box-3">
              <div className="feature-box__img">
                <Image src="" alt="Box 3" />
              </div>
              <div className="feature-box__text">Box 3</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-about | u-container">
          <div className="section-about__text"></div>
          <div className="section-about__img"></div>
        </div>
      </section>
      <section className="section">
        <div className="section-contact | u-container">
          <div className="section-contact__img"></div>
          <div className="section-contact__text"></div>
        </div>
      </section>
    </>
  );
}
