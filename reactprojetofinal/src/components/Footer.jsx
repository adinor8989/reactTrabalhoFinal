import { Footer } from "flowbite-react";
import styles from '../styles/Footer.module.css';

export default function Component() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            src="https://cdn.discordapp.com/attachments/1211772456541495307/1248807347485413396/1000cado.png?ex=666501f9&is=6663b079&hm=a6ab512e70689ff7cbbdf3070b9c0f13f5ca90fe01092df5f17a9efbf6ed5a72&"
            alt="Block Commerce"

          />

        </div>
        {/* <Footer.Divider /> */}
        <Footer.Copyright href="#" by=" Block Commerce™ " year={2024} />
      </div>
    </Footer>
  );
}