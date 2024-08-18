import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/helpers/GetImagesUrl";

interface Props {
  bgColor: string;
}

function Footer(props: Props): JSX.Element {
  const { bgColor } = props;
  return (
    <footer
      className={`${bgColor} flex flex-col gap-10 h-auto items-center justify-center py-[4rem] text-white text-center text-[0.875rem] w-full`}
    >
      <Image
        src={`${getImageUrl("densityfooterlogo.svg")}`}
        alt="Density Logo"
        width={100}
        height={200}
      />
      <nav>
        <ul className="links_container flex flex-col gap-[56px] desktop:flex-row">
          <li>
            <Link href="/policies/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/policies/trading-policy">Trading Policy</Link>
          </li>
          <li>
            <Link href="/policies/terms-of-use">Terms & Conditions</Link>
          </li>
          <li>
            <Link href="/policies/cookie-policy">Cookie Policy</Link>
          </li>
          <li>
            <Link href="/policies/kyc-aml-and-transaction-monitoring-policy">
              KYC-AML Policy
            </Link>
          </li>
          <li>
            <Link href="/policies/risk-disclosures">Risk disclosure</Link>
          </li>
          <li>
            <Link href="/policies/research-disclaimer">Research Disclaimer</Link>
          </li>
        </ul>
      </nav>
      <p className="text-white w-[70%]">
        Density was started with the vision of democratising money for everyone.
        With the idea of derivatives made simple, use Density to maximise
        profits and a hassle free experience.
      </p>
      <p className="uppercase text-white">Pagarpay India Pvt. Ltd.</p>
      <div className="socialLinks_container flex gap-6">
        <Link
          href="https://www.linkedin.com/company/densityexchange"
          target="_blank"
        >
          <Image
            src={`${getImageUrl("linkedinlogo.svg")}`}
            width={20}
            height={20}
            alt="LinkedIn Link"
          />
        </Link>
        <Link href="https://www.instagram.com/densityexchange/" target="_blank">
          <Image
            src={`${getImageUrl("instagramlogo.svg")}`}
            width={20}
            height={20}
            alt="Instagram Link"
          />
        </Link>
        <Link href="https://twitter.com/densityxchange" target="_blank">
          <Image
            src={`${getImageUrl("twitterlogo.svg")}`}
            width={20}
            height={20}
            alt="Twitter Link"
          />
        </Link>
        <Link href="https://www.youtube.com/@densityexchange" target="_blank">
          <Image
            src={`${getImageUrl("youtubelogo.svg")}`}
            width={20}
            height={20}
            alt="Youtube Link"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
