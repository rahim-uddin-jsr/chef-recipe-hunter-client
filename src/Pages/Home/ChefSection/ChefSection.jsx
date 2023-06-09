import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Chef from "../chef/chef";

const ChefSection = () => {
  //   const [chefsData, setChefsData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://foodie-crush-server-dev-rahim.vercel.app/chefs")
  //       .then((res) => res.json())
  //       .then((data) => setChefsData(data));
  //   }, []);
  const { chefsData } = useContext(AuthContext);
  return (
    <div
      className="mt-12"
      style={{
        backgroundImage: `url("https://i.ibb.co/ZxtmpYm/92323-dot-pattern-background.gif")`,
      }}
    >
      <h1 className="my-24 text-3xl font-bold uppercase">
        our top rated chefs
      </h1>
      <div className="justify-items-center grid grid-cols-1 xl:grid-cols-3  lg:grid-cols-2 gap-10">
        {chefsData.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </div>
    </div>
  );
};

export default ChefSection;
