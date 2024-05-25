import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../css/style.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const username = "ramchand708786@gmail.com"; 
    const password = "ramchand708786@gmail.com"; 

    axios
      .get(
        "http://localhost/headless-wordpress/server/wp-json/wp/v2/menu-items/",
        {
          auth: {
            username: username,
            password: password,
          },
        }
      )
      .then((res) => {
        setMenuItems(res.data);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
      });
  }, []);


  return (
    <nav className="menu">
      <ul className="menu__list">
        {menuItems &&
          menuItems.map((item) => (
            <li className="menu__item" key={item.id}>
              <a href={item.url} className="menu__link">
                {item.title.rendered}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Menu;
