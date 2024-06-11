import { Footer } from "flowbite-react";
import styles from '../styles/Footer.module.css';

export default function Component() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            src="./assets/BLOCK.png"
            alt="Block Commerce"

          />

        </div>
        {/* <Footer.Divider /> */}
        <Footer.Copyright href="#" by=" Block Commerce™ " year={2024} />
      </div>
    </Footer>
  );
}