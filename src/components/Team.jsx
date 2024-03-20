import React, { useState } from "react";
import james from "../assets/image/james-img.webp";
import yong from "../assets/image/yong-img.webp";
import kalvin from "../assets/image/kalvin-img.webp";
import ryan from "../assets/image/ryan-img.webp";
import dylan from "../assets/image/dylan.webp";
import ralf from "../assets/image/ralf.webp";
import jorden from "../assets/image/jorden-img.webp";
import jae from "../assets/image/jae-img.webp";

const cardbio = [
  {
    aos: "fade-right",
    img: james,

    name: "James Vuong",
    nametwo: "(Co-CEO)",
    para1:
      "James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ",
    para2:
      "impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.",
  },
  {
    aos: "fade-right",
    img: yong,
    nametwo: "(Co-CEO)",
    name: "Tricia Yong",
    para1:
      "Tricia is a Marketing Director with 15 years of expertise, co-founded ROOMERANG and KEYNINJA with James Vuong, bringing a wealth of knowledge from the tech industry, property valuation, and consumer ",
    para2:
      "products. With a background in consumer behavior, UI/UX design, and marketing strategies, she adeptly navigates the convergence of technology and marketing. Tricia is renowned for crafting compelling narratives that deeply resonate with both business clients and consumers, propelling the company to success in the ever-evolving tech landscape.",
  },
  {
    img: kalvin,
    name: "Kevin Li",
    nametwo: "(CFO)",
    para1:
      "Kev is a seasoned CFO with 15 years of expertise in the Big Pharma sector, demonstrated his leadership by establishing a successful branch office in Myanmar, overseeing its growth to 70 employees in just 24 months. His",
    para2:
      "strategic pricing initiatives for life-saving medications not only gained eligibility onto the government reimbursement list in Singapore, Sri Lanka, and the Maldives but also significantly alleviated the financial burden on patients grappling with the costs of disease..",
  },
  {
    aos: "fade-left",
    img: ryan,
    nametwo: "(Lorem Ipsum)",
    name: "Ryan Ang",
    names: "Vuong",
    para1:
      "James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ",
    para2:
      "impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.",
  },
  {
    img: dylan,
    name: "Dylan",
    nametwo: "(Executive Producer)",
    para1:
      "Lorem ipsum dolor sit amet consectetur. Quis in ullamcorper molestie velit proin est. Vestibulum eget eu in egestas. Consequat mi consequat eu eu id integer est. Eget at egestas morbi vitae platea imperdiet sed egestas dignissim.",
    para2: "Lorem ipsum dolor sit amet consectetur. Amet erat condimentum.",
  },
  {
    img: ralf,
    name: "Ralf",
    nametwo: "(Lorem Ipsum)",
    para1:
      "Lorem ipsum dolor sit amet consectetur. Cursus vulputate facilisis mattis diam consectetur molestie ultrices. Laoreet sagittis facilisis consequat dignissim viverra etiam gravida. Eu cursus scelerisque purus pharetra enim.",
    para2:
      "Lorem ipsum dolor sit amet consectetur. Donec amet mattis sit fermentum. Cursus at sed commodo ac mattis feugiat vel faucibus iaculis. Id congue egestas sit leo placerat. Ipsum a feugiat massa fringilla justo consectetur. Eu euismod viverra ut porttitor sed leo. Eget viverra etiam sit nunc.",
  },
  {
    img: jorden,
    name: "Jordan Stratford",
    nametwo: "(Creative Director)",
    para1:
      "James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ",
    para2:
      "impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.",
  },
  {
    img: jae,
    nametwo: "(Lorem Ipsum)",
    name: "Jae Sik Choi",
    para1:
      "James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ",
    para2:
      "impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.",
  },
];

const Team = () => {
  const [first, setfirst] = useState();
  function index(first) {
    setfirst(!first);
  }
  const mycard = cardbio.map((mycard) => (
    <div className={`${index === 1 ? "" : ""} col-lg-6 col-12 `}>
      <div className="team-card position-relative mb-4 p-3 overflow-hidden">
        <div className="d-sm-flex align-items-center">
          <img className="behind_img" src={mycard.img} alt="card-img" />
          <div>
            <p className=" d-flex align-items-center fw-semibold text-white ms-2 fs-md1">
              {mycard.name}
              <span className="fs-sm1 fw-normal CEO_clr ms-2 ">
                {mycard.nametwo}
              </span>
            </p>
            <p className="fs-sm1 fw-normal  text-gray ms-2 font-roboto max-w-283">
              {mycard.para1}
            </p>
          </div>
        </div>
        <p className="fs-sm1 fw-normal  text-gray mt-2 ms-2 ms-sm-0 font-roboto">
          {mycard.para2}
        </p>
        <span className="ellipesourtem"></span>
      </div>
    </div>
  ));
  return (
    <div id="team" className="bg-black mt_2 position-relative overflow-x">
      <div className="team-elipes d-none d-sm-block"></div>
      <div className="team-elipes2 d-none d-sm-block"></div>
      <p className="fs-xxl text-lightblack fw-bold font-roboto text-name2 d-none d-sm-block">Our Team</p>
      <div className="container pt-2 ">
        <div className="d-flex align-items-center justify-content-center">
          <button className="team_btn ">OUR TEAM</button>
        </div>
        <h1 className="fs-xl1 fw-bold text-white text-center mx-auto font-roboto">
          {" "}
          Behind our expertise
        </h1>
        <div className="row pt-5">{mycard}</div>
      </div>
    </div>
  );
};

export default Team;
