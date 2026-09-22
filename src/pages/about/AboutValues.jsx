import "./AboutPage.css";

export function AboutValues() {
  return (
    <div className="values-container">
      <div className="values-header reveal">
        <h2>Our Values</h2>
        <p>The principles that guide everything we do</p>
      </div>

      <div className="values-services">
        <div className="service reveal">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                fill="rgb(64, 254, 254)"
                d="M598.1 139.4C608.8 131.6 611.2 116.6 603.4 105.9C595.6 95.2 580.6 92.8 569.9 100.6L495.4 154.8L485.5 148.2C465.8 135 442.6 128 418.9 128L359.7 128L359.3 128L215.7 128C189 128 163.2 136.9 142.3 153.1L70.1 100.6C59.4 92.8 44.4 95.2 36.6 105.9C28.8 116.6 31.2 131.6 41.9 139.4L129.9 203.4C139.5 210.3 152.6 209.3 161 201L164.9 197.1C178.4 183.6 196.7 176 215.8 176L262.1 176L170.4 267.7C154.8 283.3 154.8 308.6 170.4 324.3L171.2 325.1C218 372 294 372 340.9 325.1L368 298L465.8 395.8C481.4 411.4 481.4 436.7 465.8 452.4L456 462.2L425 431.2C415.6 421.8 400.4 421.8 391.1 431.2C381.8 440.6 381.7 455.8 391.1 465.1L419.1 493.1C401.6 503.5 381.9 509.8 361.5 511.6L313 463C303.6 453.6 288.4 453.6 279.1 463C269.8 472.4 269.7 487.6 279.1 496.9L294.1 511.9L290.3 511.9C254.2 511.9 219.6 497.6 194.1 472.1L65 343C55.6 333.6 40.4 333.6 31.1 343C21.8 352.4 21.7 367.6 31.1 376.9L160.2 506.1C194.7 540.6 241.5 560 290.3 560L342.1 560L343.1 561L344.1 560L349.8 560C398.6 560 445.4 540.6 479.9 506.1L499.8 486.2C501 485 502.1 483.9 503.2 482.7C503.9 482.2 504.5 481.6 505.1 481L609 377C618.4 367.6 618.4 352.4 609 343.1C599.6 333.8 584.4 333.7 575.1 343.1L521.3 396.9C517.1 384.1 510 372 499.8 361.8L385 247C375.6 237.6 360.4 237.6 351.1 247L307 291.1C280.5 317.6 238.5 319.1 210.3 295.7L309 197C322.4 183.6 340.6 176 359.6 175.9L368.1 175.9L368.3 175.9L419.1 175.9C433.3 175.9 447.2 180.1 459 188L482.7 204C491.1 209.6 502 209.3 510.1 203.4L598.1 139.4z"
              />
            </svg>
          </div>
          <h3>Trust & Transparency</h3>
          <p>
            Honest communication, clear timelines, and no surprises. We believe
            trust is built through transparency at every stage of the journey.
          </p>
        </div>

        <div className="service reveal">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M22.1673 16.3333C23.9057 14.63 25.6673 12.5883 25.6673 9.91667C25.6673 8.21486 24.9913 6.58276 23.7879 5.3794C22.5846 4.17604 20.9525 3.5 19.2507 3.5C17.1973 3.5 15.7507 4.08333 14.0007 5.83333C12.2507 4.08333 10.804 3.5 8.75065 3.5C7.04885 3.5 5.41674 4.17604 4.21338 5.3794C3.01002 6.58276 2.33398 8.21486 2.33398 9.91667C2.33398 12.6 4.08398 14.6417 5.83398 16.3333L14.0007 24.5L22.1673 16.3333Z"
                stroke="#00D3F2"
                stroke-width="2.33333"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>Passion for Craft</h3>
          <p>
            We love what we do. Our team is genuinely passionate about
            technology, design, and creating digital experiences that make a
            difference.
          </p>
        </div>

        <div className="service reveal">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M14.0007 25.6663C20.444 25.6663 25.6673 20.443 25.6673 13.9997C25.6673 7.55635 20.444 2.33301 14.0007 2.33301C7.55733 2.33301 2.33398 7.55635 2.33398 13.9997C2.33398 20.443 7.55733 25.6663 14.0007 25.6663Z"
                stroke="#00D3F2"
                stroke-width="2.33333"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21Z"
                stroke="#00D3F2"
                stroke-width="2.33333"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.9993 16.3337C15.288 16.3337 16.3327 15.289 16.3327 14.0003C16.3327 12.7117 15.288 11.667 13.9993 11.667C12.7107 11.667 11.666 12.7117 11.666 14.0003C11.666 15.289 12.7107 16.3337 13.9993 16.3337Z"
                stroke="#00D3F2"
                stroke-width="2.33333"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>Purpose-Driven</h3>
          <p>
            Every project starts with understanding your goals. We build
            solutions that serve a clear purpose and drive measurable outcomes
            for your business.
          </p>
        </div>

        <div className="service reveal">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M4.66674 16.3331C4.44596 16.3339 4.22951 16.272 4.04252 16.1546C3.85553 16.0372 3.70568 15.8692 3.61038 15.67C3.51508 15.4709 3.47825 15.2488 3.50416 15.0296C3.53006 14.8103 3.61765 14.6029 3.75674 14.4314L15.3067 2.53145C15.3934 2.43144 15.5114 2.36387 15.6416 2.3398C15.7717 2.31574 15.9061 2.33663 16.0228 2.39904C16.1394 2.46144 16.2314 2.56166 16.2836 2.68324C16.3358 2.80482 16.3452 2.94054 16.3101 3.06812L14.0701 10.0914C14.004 10.2682 13.9818 10.4584 14.0054 10.6456C14.029 10.8329 14.0977 11.0116 14.2055 11.1664C14.3133 11.3213 14.4571 11.4477 14.6246 11.5348C14.792 11.6219 14.978 11.6671 15.1667 11.6664H23.3334C23.5542 11.6657 23.7706 11.7276 23.9576 11.845C24.1446 11.9623 24.2945 12.1304 24.3898 12.3295C24.4851 12.5287 24.5219 12.7508 24.496 12.97C24.4701 13.1893 24.3825 13.3967 24.2434 13.5681L12.6934 25.4681C12.6068 25.5681 12.4887 25.6357 12.3586 25.6598C12.2285 25.6838 12.0941 25.6629 11.9774 25.6005C11.8607 25.5381 11.7687 25.4379 11.7165 25.3163C11.6643 25.1947 11.655 25.059 11.6901 24.9314L13.9301 17.9081C13.9961 17.7313 14.0183 17.5412 13.9947 17.3539C13.9711 17.1667 13.9025 16.988 13.7946 16.8331C13.6868 16.6782 13.543 16.5518 13.3756 16.4648C13.2082 16.3777 13.0221 16.3325 12.8334 16.3331H4.66674Z"
                stroke="#00D3F2"
                stroke-width="2.33333"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>Innovation First</h3>
          <p>
            We stay ahead of the curve, embracing new technologies and
            methodologies to deliver cutting-edge solutions that future-proof
            your business.
          </p>
        </div>

        <div className="service reveal">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M18.6673 24.5V22.1667C18.6673 20.929 18.1757 19.742 17.3005 18.8668C16.4253 17.9917 15.2383 17.5 14.0007 17.5H7.00065C5.76297 17.5 4.57599 17.9917 3.70082 18.8668C2.82565 19.742 2.33398 20.929 2.33398 22.1667V24.5"
                stroke="#00D3F2"
                stroke-width="2.33333"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5007 12.8333C13.078 12.8333 15.1673 10.744 15.1673 8.16667C15.1673 5.58934 13.078 3.5 10.5007 3.5C7.92332 3.5 5.83398 5.58934 5.83398 8.16667C5.83398 10.744 7.92332 12.8333 10.5007 12.8333Z"
                stroke="#00D3F2"
                stroke-width="2.33333"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.666 24.5007V22.1673C25.6652 21.1334 25.3211 20.1289 24.6876 19.3117C24.0541 18.4945 23.1672 17.9108 22.166 17.6523"
                stroke="#00D3F2"
                stroke-width="2.33333"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.666 3.65137C19.6698 3.90839 20.5596 4.49218 21.1949 5.31073C21.8303 6.12927 22.1752 7.136 22.1752 8.1722C22.1752 9.2084 21.8303 10.2151 21.1949 11.0337C20.5596 11.8522 19.6698 12.436 18.666 12.693"
                stroke="#00D3F2"
                stroke-width="2.33333"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>Collaborative Partnership</h3>
          <p>
            You're not just a client, you're a partner. We work closely with
            you, valuing your input and expertise throughout the entire process.
          </p>
        </div>

        <div className="service reveal">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M25.6673 8.16699L15.7507 18.0837L9.91732 12.2503L2.33398 19.8337"
                stroke="#00D3F2"
                stroke-width="2.33333"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.666 8.16699H25.666V15.167"
                stroke="#00D3F2"
                stroke-width="2.33333"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>Continuous Growth</h3>
          <p>
            We're committed to ongoing learning and improvement, both for our
            team and the solutions we deliver to ensure long-term success.
          </p>
        </div>
      </div>
    </div>
  );
}
