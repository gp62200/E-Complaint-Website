import React from "react";
import { Card } from "react-bootstrap";
import img from "./images/img.jpg";
import img1 from "./images/electricity.jpg";
import img2 from "./images/road1.jpg";
import img3 from "./images/water5.jpg";
import img4 from "./images/drainage.jpg";
import img_50 from "./images/img_50.jpg";

const About = () => {
  return (
    <>
      <div className="Container"
      style={{
        backgroundImage: `url(${img_50})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "700px",
      }}>
        
     

        <div className="container-fluid">
          <div className="row text-center p-3"></div>
          <div className="row py-3">
            <div className="col-sm-3 ">
              <Card style={{ width: "21rem" }}>
                <img
                  alt="Card image cap"
                  class="card-img-top img-fluid mb-0"
                  src={img1}
                />
                <Card.Body>
                  <Card.Title className="bg-primary text-center">
                    Electricity Complaint
                  </Card.Title>
                  <Card.Text>
                    The 1912 is specifically allotted to Electricity Call
                    Centers for handling power supply related complaints. The
                    customer complaints are registered and forwarded to the
                    field personnel for timely action and rectification. The
                    status of the complaint is periodically tracked and updated.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm-3">
              <Card style={{ width: "21rem" }}>
                <img
                  alt="Card image cap"
                  class="card-img-top img-fluid mb-0"
                  src={img2}
                />
                <Card.Body>
                  <Card.Title className="bg-primary text-center">
                    Road Complaint
                  </Card.Title>
                  <Card.Text>
                    For the better management of complaints to improve
                    efficiency. android projects ideas All the peoples living in
                    housing schemes societies can used our android application
                    for the registration of their complaints within India.
                    Online Road Complaints Registration System Its manual
                    process for earlier system.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm-3">
              <Card style={{ width: "21rem" }}>
                <img
                  alt="Card image cap"
                  class="card-img-top img-fluid mb-0"
                  src={img4}
                />

                <Card.Body>
                  <Card.Title className="bg-primary text-center">
                    Drainage Complaint
                  </Card.Title>
                  <Card.Text>
                    Defective drains solution are required because may result in
                    discharging untreated sewage into open air, creating
                    problems of environmental hygiene such as foul smell, water
                    pollution, slippery surfaces, pest infestation, breeding of
                    mosquitoes or other health and environmental hazards.
                  </Card.Text>{" "}
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm-3">
              <Card style={{ width: "21rem" }}>
                <img
                  alt="Card image cap"
                  class="card-img-top img-fluid mb-0"
                  src={img3}
                />

                <Card.Body>
                  <Card.Title className="bg-primary text-center">
                    Water Complaint
                  </Card.Title>
                  <Card.Text>
                    Problems like leakage, no water or supply at low pressure,
                    contaminated water, request for tanker,wastage, inflated
                    bills etc can be addressed through the system.In urban areas
                    toll-free number 18003456783 to inform about any issue
                    related to drinking water and other issues related to water.
                  </Card.Text>{" "}
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default About;

{
  /*Problems like leakage, no water or supply at low pressure,
                    contaminated water, request for tanker,wastage, inflated
                    bills etc can be addressed through the system.In urban areas
                    toll-free number 18003456783 to inform about any issue
related to drinking water.*/
}
