import logoDark from "@/public/nathanel-corpuz-logo-dark.png";
import twitter from "@/public/twitter.png";
import linkedin from "@/public/linkedin.png";
import getFooterLinks from "@/lib/mock/footer";
import Image from "next/image";

const footerLinks = getFooterLinks();

export default function Footer() {
  return (
    <footer>
      <nav>
        <h4>{footerLinks.main.title}</h4>
        <ul>
          {footerLinks.main.links.map((link) => (
            <li key={link.pathname + link.title}>{link.title}</li>
          ))}
        </ul>
      </nav>
      <nav>
        <h4>{footerLinks.categories.title}</h4>
        <ul>
          {footerLinks.categories.links.map((link) => (
            <li key={link.pathname + link.title}>{link.title}</li>
          ))}
        </ul>
      </nav>
      <aside>
        <h4>Get more content about websites from yours truly</h4>
        <input placeholder="Your email..." />
        <button>send</button>
        <small>No spam. Unsubscribe anytime.</small>
        <a href="#">Terms & Conditions</a>
      </aside>
      <aside>
        <Image
          src={logoDark}
          width={100}
          alt="dark themed logo of nathanel corpuz"
        />
        <p>
          I design and develop highly customized websites for businesses,
          entrepreneurs, and professionals.
        </p>
        <address>
          <a href="mailto:nathanelwebdesign@gmail.com">
            nathanelwebdesign@gmail.com
          </a>
        </address>
        {/* socials */}
        <div>
          <a
            href="https://twitter.com/nathanelcorpuz"
            rel="noreferrer"
            target="_blank"
          >
            <Image src={twitter} width={50} alt="twitter logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/nathanelcorpuz/"
            rel="noreferrer"
            target="_blank"
          >
            <Image src={linkedin} width={50} alt="twitter logo" />
          </a>
        </div>
      </aside>
      <small>Nathanel Corpuz &copy; 2023</small>
    </footer>
  );
}
