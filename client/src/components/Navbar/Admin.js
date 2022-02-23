import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Dropdown, Nav, Image } from "react-bootstrap";
import { addproduct, addtopping, keranjang, logo, logout } from "../../assets";
import { AppContext } from "../../context/AppContext";

const Admin = (props) => {
  const router = useHistory();
  const [state] = useContext(AppContext);

  console.log("STATE", state);
  const goToTransaction = () => {
    router.push("/transaction");
  };
  const goToAddProduct = () => {
    router.push("/addproduct");
  };
  const goToAddTopping = () => {
    router.push("/addtopping");
  };

  return (
    <div>
      <Nav>
        <Dropdown>
          <Dropdown.Toggle
            as={Nav.Link}
            style={{ marginRight: "10px", marginLeft: "-10px" }}
          >
            <Image
              src={logo}
              alt="account"
              style={{
                width: "60px",
                height: "60px",
                position: "relative",
                transform: "translate(15px, -3px)",
              }}
            />
          </Dropdown.Toggle>
          <Dropdown.Menu align="right" className="dropdown-menu">
            <Dropdown.Item onClick={goToTransaction} className="mb-3">
              <img src={keranjang} alt="profile" className="img-icon mr-3" />
              Transactions
            </Dropdown.Item>
            <Dropdown.Item onClick={goToAddProduct} className="mb-3">
              <img src={addproduct} alt="profile" className="img-icon mr-3" />
              Add Product
            </Dropdown.Item>
            <Dropdown.Item onClick={goToAddTopping} className="mb-3">
              <img src={addtopping} alt="profile" className="img-icon mr-3" />
              Add Topping
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={props.handleLogout}>
              <img src={logout} alt="profile" className="img-icon mr-3" />
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </div>
  );
};

export default Admin;
