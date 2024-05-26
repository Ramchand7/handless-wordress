  import React, { useState, useEffect } from "react";
  import axios from "axios";

  const Menu = ({ setLoading, apiRequestCompleted }) => {
    const [menuItems, setMenuItems] = useState([]);
    const [loadingMenu, setLoadingMenu] = useState(true); // New loading state for menu

    useEffect(() => {
      const fetchMenuItems = async () => {
        try {
          setLoadingMenu(true); // Set loading to true before fetching
          const res = await axios.get(
            "http://localhost/headless-wordpress/server/wp-json/wp/v2/menu-items/",
            {
              auth: {
                username: "ramchand708786@gmail.com",
                password: "ramchand708786@gmail.com",
              },
            }
          );
          setMenuItems(res.data);
        } catch (error) {
          console.error("Error fetching menu:", error);
        } finally {
          setLoadingMenu(false); // Set loading to false after fetching, regardless of success or error
          console.log('TEST-----');
          apiRequestCompleted(); // Notify App component that this component's API request is completed
        }
      };

      fetchMenuItems();
    }, []); // Empty dependency array to ensure useEffect runs only once

    return (
      <div className="header">
      
          <ul className="navigation">
            {menuItems.map((item) => (
              <li className="menu__item" key={item.id}>
                <a href={item.url} className="menu__link">
                  {item.title.rendered}
                </a>
              </li>
            ))}
          </ul>
        
      </div>
    );
  };

  export default Menu;
