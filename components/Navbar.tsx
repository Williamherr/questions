import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav>
      <div className="flex gap-2 justify-end mr-2">
        <Link href="/quiz">
          <Button>Questions</Button>
        </Link>
        <Link href="/weather">
          <Button>Weather</Button>
        </Link>
        <Link href="/weather-with-api">
          <Button>Weather with api</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
