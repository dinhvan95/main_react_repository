import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components/HeaderEmailApp.css";

export default function HeaderEmailApp({userSelected, onSelectedUser, users}) {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 h-50">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/messages"} className="nav-link active">Messages</Link>
                            </li>


                            <li className="nav-item">
                                <Link to={"/contacts"} className="nav-link">Contacts</Link>
                            </li>


                            <li className="nav-item">
                                <Link to={"/preferences"} className="nav-link">Preferences</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {userSelected}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    users.map((el, index) => (<Dropdown.Item key={index} onClick = {() => onSelectedUser(el)}>{el}</Dropdown.Item>))
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </nav>
    );
}