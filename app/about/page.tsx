import { Nav } from "../../components/custom/nav";
import { NavBarWrapper } from "@/components/custom/nav-bar-wrapper";
const About = async () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBarWrapper />
      <p>All about the App</p>
    </div>
  );
};
export default About;
