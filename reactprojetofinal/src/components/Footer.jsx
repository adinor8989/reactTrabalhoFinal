import { Footer } from "flowbite-react";
import styles from '../styles/Footer.module.css';

export default function Component() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            src="https://media.discordapp.net/attachments/1211772456541495307/1248807347485413396/1000cado.png?ex=66684db9&is=6666fc39&hm=7df52cebe14bf661ec3adf35f4ec79567d11d9856e4d4cc72847782203338eb6&=&format=webp&quality=lossless&width=571&height=571"
            alt="Block Commerce"

          />

        </div>
        {/* <Footer.Divider /> */}
        <Footer.Copyright href="#" by=" Block Commerce™ " year={2024} />
      </div>
    </Footer>
  );
}