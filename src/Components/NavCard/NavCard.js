import React from 'react';
import * as reactBootstrap from "react-bootstrap";
import cox from '../../Image/Image/Rectangle 1.png';
import sremongol from '../../Image/Image/Sreemongol.png';
import sundorbon from '../../Image/Image/tiger-wallpaper-hd-1080p-115616.jpg'
import { Link } from "react-router-dom";


const NavCard = () => {
    return (
        <div>
            <div>
                <reactBootstrap.Navbar bg="dark" variant="dark">


                    <reactBootstrap.Form inline>
                        <reactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </reactBootstrap.Form>


                    <reactBootstrap.Nav style={{ paddingLeft: "100px" }} className="mr-auto">
                        <Link to="/cox"><reactBootstrap.Nav.Link href="#destination" >News</reactBootstrap.Nav.Link></Link>
                        <Link to="/cox"><reactBootstrap.Nav.Link href="#destination">Destination</reactBootstrap.Nav.Link></Link>
                        <reactBootstrap.Nav.Link href="#blog">Blog</reactBootstrap.Nav.Link>
                        <reactBootstrap.Nav.Link href="#content">Content</reactBootstrap.Nav.Link>
                       <Link to="/login"> <reactBootstrap.Button variant="outline-info">Login</reactBootstrap.Button></Link>
                    </reactBootstrap.Nav>


                </reactBootstrap.Navbar>

            </div>

            <div>

                <reactBootstrap.Card style={{ border: "2px red solid", marginBottom: "5px" }}>
                    <reactBootstrap.Card.Img style={{ height: "200px" }} variant="top" src={cox} />
                    <reactBootstrap.Card.Body>
                        <reactBootstrap.Card.Text>
                            <Link to="/cox"><h3 style={{ color: "maroon" }}>COX'S BAZAR</h3></Link>
                        </reactBootstrap.Card.Text>
                    </reactBootstrap.Card.Body>
                </reactBootstrap.Card>

            </div>

            <div>

                <reactBootstrap.Card style={{ border: "2px red solid", marginBottom: "5px" }}>
                    <reactBootstrap.Card.Img style={{ height: "200px" }} variant="top" src={sremongol} />
                    <reactBootstrap.Card.Body>
                        <reactBootstrap.Card.Text>
                          <Link to="/sre">  <h3 style={{ color: "maroon"}}>SREEMANGAL</h3></Link>
                        </reactBootstrap.Card.Text>
                    </reactBootstrap.Card.Body>
                </reactBootstrap.Card>

            </div>


            <div>

                <reactBootstrap.Card style={{ border: "2px red solid", marginBottom: "5px" }}>
                    <reactBootstrap.Card.Img style={{ height: "200px" }} variant="top" src={sundorbon} />
                    <reactBootstrap.Card.Body>
                        <reactBootstrap.Card.Text>
                           <Link to="/sun"> <h3 style={{ color: "maroon"  }}>SUNDARBANS</h3></Link>
                        </reactBootstrap.Card.Text>
                    </reactBootstrap.Card.Body>
                </reactBootstrap.Card>

            </div>


        </div>
    );
};

export default NavCard;