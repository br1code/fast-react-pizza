import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.length &&
        menu.map((pizza) => <MenuItem pizza={pizza} key={pizza.id} />)}
    </ul>
  );
}

export async function loader() {
  return await getMenu();
}

export default Menu;
