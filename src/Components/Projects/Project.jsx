import React from "react";

const Project = (props) => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className="mb-0">{props.title}</h3>
        <ul className="list-inline dev-icons">
          {props.techStack.map((i) => {
            let image;
            switch(i) {
              case "kotlin":
                image = (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEzklEQVRoge2Yy28VVRzHP2dm7txXXzwKlFopwbAALYG4MFFMNLhgS9zIyoVruzABIgG6A40LQRA0Glcm/gHGxATjja40cWVMIJHS0gC1hU7vq3fmzpw5Luq99DEzd4ZOZXO/yzlzz/l8Zn6/mTMXuummm26eZUTYwNtnJ1XQoEQx7Bhsa2odJ9+X/6F8ov9cv65XN8IISpVyZ+w3goZCKSYLEj/AQEfwIOsxZ/qRa+7O/7J43Py6v9EYxfMGEhKvSAQ8RAg4umKy4CEDJDQEcznJP9lgia2F38snzMttatsewWtuS8QNdIRfZolIU4M7BRkoIRQ8Mj3u5+Sq48X8X9V3Mh/3rz3fbu7GdXfE4gZiwUMHAQBPU9wperhCBYwKrIzPvbwHQCZ7t/5udqJXEHQuOM5OHGcXEa2XCB5iCAB4AiaLkqC+FUDVALvndvW9/KmiUNG94bqDOM4QBD4iSAQPMQUApFhubEdbf3UzmuWMZ84W9Q7wrbjuNhznufUDgkTwkEAAwBeKyYJkSX8ioen15vn6DbNZ2a9pmht7LtcbwLb30K42pUq5U41E8BAhMGfKwONKwHRBUtMVSrPdifoVI+dLoZRJtTKGJuJLeF4fjcYoSmk/Jb3yrYQKzGd9ZrN+YDsqYK5Qdy8sfarlpd+eQymDWuUQIsGdEMIv5c/UjyWiXpHIEnpsSh7k5Lp+E0L61x9f03ql1Nf+xkenWjmMwOu4uKGXSwMTt5/qyrfSsQcWMz4zKySU8NUX1jVvh+utg29HCaq1wyDCmzoNeIjZxFXDZzrvoYSvPlv8vDlsN8yOP1JQqxyCgCI0MpVU4CHBU2hJ9zk3/729p+ZnRYJGrVXHUEprv7sMvVwaOH8rFXiIKSAUXJ+5WX/R0vONpX247naE1oy9SL12ECUNzJTKZmVCBZ7s0xQfPfy5+uq8KraONBojOPYQmmbHXkjKQqkvZXgAI2zA9AUavvrwUal6fNbtWzvuOEMoZZAv3MWXhchFcrnp0q5LN1OHhwgBgeLXu1/OZst7h8LOaTYH8f0MPT23kLIn8JzNhIeIEvrx3lczUfCteN4AtdpBgr66/tBem7rR+Oa3DTJGJlRgq22OxJ3E83qpVccwjEr72JXiSetP79goitMT4zOXNsgZmlCBhUdvkTHnY0/kySKVyhF0o8yV4kmrr7p/S3twEyUiH6PWwptkMtbyczRGpMzxiTm+Gr6VTZLo+B6wrNcxjDJBb9S1uTjysmX5I+vhW1Gcnnh/ZiIRYYfEepEtWkfR9SWECN5iA1wcOWK57vCWhuFzpxC5kbuQ5p2IvZUol19BaD5CrIdbhv/vyiuwDRUtkWI5Jfoiq5SPoJSxahuxCv4JILah+Lu4+RKJBABqtZfwZS+a3uCDfYetOTEcXPNq+b+lzZZILABQr+9nfM/Rhfva7i0PTcVC2L90/4PEUwmcG8tbD/WdWwEQitlnKJFYYBl+cHXZxJXYhMZOJHD5gH1v2hgMrnmhmM0qHkdJGOlLxBa4eqA+9d32vc9PFTyaoW9mxT+d7kTKErEErh6oT327/YVRAFdTTBVkuEScckpRoqPASvhWUpNIobEjBYLgW0lDwtY2LhEqcO1gbToMvpWNSgjSkeimm266eXb5FyI2k16J3rGGAAAAAElFTkSuQmCC"
                       alt=""/>
                );
                break;
              case "js":
                image = (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACpklEQVRoge2ZS0hUURjHf8d8Zy8kn2lmZWkYJWUIIkGLwKQWgQ/EjaQJEj0QKi3bFC6LgogIF2Zgj8VUPijUiCAYok2mkAYqNKJiKFY2Ezmnxa0OozM1k3rvovODy/3O+c7j+3Mu53VBo9ForET4csg+pJmB/A2R4T3WILMDWWy0AKvRAqxGC7AaLcBqtACr0QKsRguwmiUTIDLE7+f+E0/f2wEoqRHE5wlCMgWJewVlpwW97wPvx/QR6LbD7kJBSzuMTsD3WRgZh+bHkF0o6LYH1p6pAtxuOHJe4HQZ6bBQSE813gAzTqi9LJABnAVNFdAzAIMffnYcBK/uSfpaJf0dko1JcLwMOhslwudBdz7BSxOqd6amlR0aAls2GHZyPPQ8lESEB96mqSOQmqRspwuKTgmGR4z0vwQPJgtIioP9uSpt64KtBwQV9YKB4X9r0/RZqPGiZGe6SjtdcOsBpBcYQr58Daw90wUkxMCLZkltJURFqvzZWUNITolgctp3/blYshIvj4BLJyRDnZKGk5LYaOXr6YcL1/yfhpZEgNv9Z/+veT56NZypgHftkj3bld/W5X9fCxYwPAKHqgVtz1XeoMOzTESYsm8/guwiwecZlbdqBRTnq9Vr7KP//S9oHbjbAeV1ghknPH0pqCqCtBTJnVbPTyAl0XiX1BhbCICD1YKmBsm6OJj6BLYuVScx1iQBc2eTK00w975483rYtsmwc3ZIWtoN/zM7JO8TJMTAxCS4vqk6xfn+x7CgTygtBdpuSFZGefeHhsD1erU1OFYK56qUX0pwjHkGn7cL6o76vxlalOv10QlouCmwdYFjHNaugdwsOFspycqYX97+Bq42C173wpADIsMhMw1KCyTlhyF4mZdAfVyv6/8DVqMFaDQazf/ND8ttt3KFrySDAAAAAElFTkSuQmCC"
                       alt=""/>
                );
                break;
              case "java":
                image = (
                  <img src="data:image/png;base64,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"
                       alt=""/>
                );
                break;
              case "android":
                image = (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACMUlEQVRoge2Yv2tTURTHP+eliTGIgq4VIooKQnF2MrUiSNvJWMQ9oOLsYIaAPybBwSmLf0BHU2hF7CJUcOrgItRB0k2ziBrrS95x6JOUkOS93HeTCLkfCHnce+4955vcb3LeA4fD4QAorhZTcWMrq8XMMPGD8GxsUq7Nb53NNXYevFk4FhVb2bh23M81Pp073HhnI7cVAYCKkk//bj+JCmz5/gtR8kDTRuIZG5sEcN+DDyB3Hq4VRFQuAKeBE2FIA/gMfAVuAM02wT0bua0IyATBdz/l1UXJi8rdHiGz4QsAUf2SmvF8G7kTH6HyWmG55Xnb4bGIhYqcp812+dWVxaT5Jcnicm3hMgSvgUw4tBW+X+qzpHt+T0SuPlp8a2xoYwGV2lKuxY+PIKf+jf0J9o6m2tlMKq3feq3pNa+w86vZnHt+872RqY090OLn7YPFA6Ql+0zSwaF+n0uveYEzR3LZW8BLkzqMBSisdJcpoqVBX2q/eVVZwVCAsYkF5kzX9uCixb0cYyXyV6hcK1wHqQIESunp8ub6/vi82izk8dKmDMrXjxgekCrhP6knWk1eqt18cUw827mUk8Z1xWeofLa60YnhBEwaJ2DSOAGTZioE7HYutT6ySgzzRQoIlNL+RlrH80rJaotm2HzGt5SjauaGZSo80I/d6JC4mHvLWEDnrCYlmbcSPRc6SLcnus901LwpU+2B/wInYNLYFBDVAoykJbEmIKoFGHdL4nA4HOPhL7qsvM+b6M5oAAAAAElFTkSuQmCC"
                       alt=""/>
                );
                break;
              case "react":
                image = (
                  <img src="data:image/png;base64,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"
                       alt=""/>
                );
                break;
            }
            return (
              <li className="list-inline-item">
                {image}
              </li>
            )
          })}
        </ul>
        <p>{props.description}</p>
      </div>
      {props.launchable && (
        <a href={props.launchUrl} target="_blank" rel="noreferrer">
          <button className="btn-primary btn-lg code-button">
            <i className="fa fa-rocket"></i> Launch
          </button>
        </a>
      )}
      &ensp;
      <a href={props.codeUrl} target="_blank" rel="noreferrer">
        <button className="btn-primary btn-lg code-button">
          <i className="fab fa-github"></i> Code
        </button>
      </a>
    </div>
  );
};

export default Project;
