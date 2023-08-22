import { LocationFragment } from "../../graphql-operations";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";

type LayoutProps = {
  children: React.ReactNode;
  locations: LocationFragment[];
};

export default function Layout({ children, locations }: LayoutProps) {
  return (
    <div className="bg-blue-150 dark:bg-purple-950">
      <Navbar />
      <main>{children}</main>
      <Footer locations={locations} />
    </div>
  );
}
