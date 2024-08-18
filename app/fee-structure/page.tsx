import Navbar from "@/components/Navbar/Navbar";
import { getImageUrl } from "@/helpers/GetImagesUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <main className="bg-black w-dvw py-[140px] px-10 text-white tablet:px-20">
      <Navbar
        bgColor="bg-navBG"
        text="Trade Now"
        btnTextStyle="uppercase"
        btnTextColor="text-black"
        url="https://url.density.exchange/mWebRedirect"
      />
      <section className="maxScreenSize flex flex-col gap-10">
        <section>
          <h1 className="font-bold text-[3rem] mb-6">Fee Structure</h1>
          <p className="text-lightGray2 text-[20px]">
            The Following Fees are incurred by Traders while trading Crypto
            Futures.
          </p>
        </section>
        <section className="feesSection">
          <h2 className="subHeading">Deposit Fees</h2>
          <p className="info">
            There are 0 Fees when a Trader Deposits Funds in INR Wallet.
          </p>
        </section>
        <section className="feesSection">
          <h2 className="subHeading">Trading Fees</h2>
          <div className="pl-10">
            <ol className="info [all:unset] !flex !flex-col !gap-4">
              <li className="hover:text-lightGray2">
                <strong>Maker Fee: </strong> 0.02%
              </li>
              <li className="hover:text-lightGray2">
                <strong>Taker Fee: </strong> 0.07%
              </li>
              <li className="hover:text-lightGray2">
                <strong>Funding Fees: </strong>
                <br /> The funding fee is exchanged at every fixed interval
                between buyers and sellers of the contract based on the
                difference between the spot price and the futures contract price
                to balance the price difference between the spot and the future.
              </li>
              <li className="hover:text-lightGray2">
                <strong>Liquidation: </strong>
                <br /> The Trader will be charged two different types of fees:
                (i) TakerFee (ii) Insurance clearance fee (depending upon the
                fees decided by Liquidity provider). It may be a combination of
                two or only one of the above depending on the conditions of the
                liquidity provider.
              </li>
            </ol>
          </div>
        </section>
        <section className="feesSection">
          <h2 className="subHeading">
            Withdrawal Fees (USDT to INR Conversion)
          </h2>
          <p className="info">
            <strong>Conversion Method:</strong>
            <br />
            The User can convert his USDT into INR by clicking on the Convert to
            INR option in his USDT Wallet and the conversion will be based on
            USDT-INR Rate, the value of which is market dependent.
          </p>
          <p className="info">
            <strong>Fee:</strong>
            <br />
            1% TDS(based on the clauses of IT Act 1961 and applicable rules)
          </p>
        </section>
        <section className="feesSection">
          <h2 className="subHeading">Insurance Clearance Fees</h2>
          <figure>
            <Image
              src={`${getImageUrl("fees.webp")}`}
              alt="Fees Image"
              width={500}
              height={400}
            />
          </figure>
        </section>
        <section className="feesSection">
          <h2 className="subHeading">Links to Help You out</h2>
          <ol className="info flex flex-col gap-4">
            <li>
              <Link
                href="https://density.exchange/blogs/what-is-maker-and-taker-fees"
                target="_blank"
              >
                Maker & Taker Fees
              </Link>
            </li>
            <li>
              <Link
                href="https://density.exchange/blogs/funding-rate-explained"
                target="_blank"
              >
                Funding Fees
              </Link>
            </li>
            <li>
              <Link
                href="https://density.exchange/blogs/crypto-liquidation-explained"
                target="_blank"
              >
                Liquidation Fees
              </Link>
            </li>
            <li>
              <Link
                href="https://density.exchange/blogs/what-is-insurance-clearance-fees"
                target="_blank"
              >
                Insurance Clearance Fees
              </Link>
            </li>
          </ol>
        </section>
      </section>
    </main>
  );
}

export default page;
