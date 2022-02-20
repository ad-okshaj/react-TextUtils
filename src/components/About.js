import React from "react";
// import Link from "react-router-dom";
export default function About(props) {
  //   const [myStyle, setmyStyle] = useState({
  //     color: "black",
  //     backgroundColor: "white",
  //   });
  let myStyle = {
    // color: props.mode === "dark" ? "white" : "black",
    // backgroundColor: "dark" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : "black",
    color: props.mode === "light" ? "black" : "white",
    border: "1px solid",
    borderColor: props.mode === "light" ? "black" : "white",
  };

  //   const [btnText, setbtnText] = useState("Enable Dark Mode");

  //   const toggleStyle = () => {
  //     if (myStyle.color === "black") {
  //       setmyStyle({
  //         color: "white",
  //         backgroundColor: "black",
  //         border: "1px solid white",
  //       });
  //       setbtnText("Enable Light Mode");
  //     } else {
  //       setmyStyle({
  //         color: "black",
  //         backgroundColor: "white",
  //       });
  //       setbtnText("Enable Dark Mode");
  //     }
  //   };

  return (
    <div className="container">
      <h1 className="mb-4" style={{ color: props.mode === "light" ? "black" : "white" }}>
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              <strong> Analyze Your Text </strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count or character count.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              <strong> Free to Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">TextUtils is a free charecter counter tool that provides instant charecter count and word count statistics for a given text. TextUtils reports the number of words and charecters. Thus it is suitable for writing text with word / character limit.</div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">This word counter software works in any web browsers such a Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count charecters in Facebook, Blog, Books, Excel Document, Pdf Document, Essays, Etc.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Analyze Your Text
// TextUtils gives you a way to analyze your text quickly and efficiently. Be it word CountQueuingStrategy, charecter count or

// Free to use
// TextUtils is a free charecter counter tool that provides instant charecter count and word count statistics for a given text.
// TextUtils reports the number of words and charecters. Thus it is suitable for writing text with word // charecter limit.

// Browser Compatible
// This word counter software works in any web browsers such a Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count charecters in Facebook, Blog, Books, Excel Document, Pdf Document, Essays, Etc.
