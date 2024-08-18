import React from "react";

function page() {
  return (
    <main className="bg-black w-dvw py-[140px] px-10 text-white tablet:px-20">
      <section className="maxScreenSize flex flex-col gap-10">
        <h1 className="font-bold text-[3rem] mb-6">Risk Disclosures</h1>
        <section className="feesSection info">
          <p>
            There are several risks associated with virtual/crypto-assets and
            their trading. By accessing and using the Services, you hereby
            acknowledge and affirm that you have thoroughly reviewed the
            following Virtual/Crypto-assets Risk Disclosures.{" "}
          </p>
          <ol className="list-decimal ml-5 flex flex-col gap-7">
            <li className="!text-lightGray2">
              <p className="font-bold">
                Unique Features of Virtual/Crypto-assets
              </p>
              <p>
                Virtual/crypto-assets are not recognized as legal tender in most
                jurisdictions, including India, and possess no intrinsic value.
                The pricing of virtual/crypto-assets is determined by the
                agreement between parties involved in a transaction, which may
                or may not align with the market value of the
                virtual/crypto-asset at the time of the transaction.{" "}
              </p>
            </li>
            <li className="!text-lightGray2">
              <p className="font-bold">Price Volatility</p>
              <p>
                The price of a virtual/crypto-asset is based on its perceived
                value and is susceptible to fluctuations based on external
                factors beyond the control of any individual entity. These
                products are characterized by high volatility, with certain
                virtual/crypto-assets experiencing daily price swings exceeding
                20%. Consequently, holding virtual/crypto-assets entails
                significant volatility risk, potentially resulting in
                substantial losses for holders.
              </p>
            </li>
            <li className="!text-lightGray2">
              <p className="font-bold">
                Market Manipulation, Valuation, and Liquidity
              </p>
              <p>
                Virtual/crypto-assets can be traded through privately negotiated
                transactions and numerous virtual/crypto-asset exchanges and
                intermediaries worldwide, each with its own pricing mechanism
                and order book. The lack of a centralized pricing source poses
                challenges for valuation. Additionally, certain
                virtual/crypto-assets may have concentrated holdings, affecting
                their prices and liquidity. As a result, buyers and sellers of
                virtual/crypto-assets may not receive fair treatment or prices,
                and liquidity dispersion can create challenges for exiting
                positions, particularly during stressful periods. Instances of
                market manipulation have been reported on multiple occasions.
              </p>
            </li>
            <li className="!text-lightGray2">
              <p className="font-bold">Cybersecurity</p>
              <p>
                The use of virtual/crypto-assets and related &quot;wallets&quot;
                exposes market participants to cybersecurity risks, including
                vulnerabilities to hacking and the possibility that publicly
                distributed ledgers may not be immutable. A cybersecurity event
                could lead to significant and irreversible losses for
                individuals trading virtual/crypto-assets. Even a minor
                cybersecurity incident within the virtual/crypto-asset sphere
                could exert downward price pressure on the affected product and
                potentially impact other virtual/crypto-assets.
              </p>
            </li>
            <li className="!text-lightGray2">
              <p className="font-bold">
                Virtual/Crypto-asset Exchanges, Intermediaries, and Custodians
              </p>
              <p>
                Virtual/crypto-asset exchanges, intermediaries, custodians, and
                vendors facilitating virtual/crypto-asset transactions are
                relatively new and largely unregulated in most jurisdictions.
                The lack of regulatory oversight raises the risk that a
                virtual/crypto-asset exchange may not hold sufficient
                virtual/crypto-assets and funds to meet its obligations, and
                identifying such deficiencies may prove challenging. Moreover,
                these exchanges are susceptible to significant outages,
                downtime, transaction processing delays, and flash crashes,
                resulting in higher operational risk compared to regulated
                futures or securities exchanges. Determining the issuer of a
                virtual/crypto-asset, the trading platform, wallet provider, or
                intermediary, especially in cross-border situations, can be
                difficult, making it challenging to ascertain applicable laws or
                enforce claims against them.
              </p>
            </li>
            <li className="!text-lightGray2">
              <p className="font-bold">Regulatory Landscape</p>
              <p>
                Most virtual/crypto-assets and products or services associated
                with them remain unregulated, depriving users of the rights and
                protections available to consumers of regulated financial
                services, such as complaint or recourse mechanisms. The
                regulatory environment for virtual/crypto-assets remains
                uncertain in many jurisdictions, and some international state
                securities regulators caution that numerous initial coin
                offerings may be classified as securities and subject to their
                respective securities laws. Consequently, future laws,
                regulations, or directives may impact the price and acceptance
                of virtual/crypto-assets by users, merchants, and service
                providers.{" "}
              </p>
            </li>
            <li className="!text-lightGray2">
              <p className="font-bold">Technology</p>
              <p>
                The relatively new and rapidly evolving technology underlying
                virtual/crypto-assets introduces unique risks. Accessing, using,
                or transferring a virtual/crypto-asset on a blockchain or
                distributed ledger requires a unique private key. The loss,
                theft, or destruction of this private key may result in an
                irreversible loss of the associated virtual/crypto-asset.
                Additionally, the ability to participate in forks could have
                implications for investors, particularly if an exchange does not
                allow participation in a fork creating a new product.{" "}
              </p>
            </li>
            <li className="!text-lightGray2">
              <p className="font-bold">Transaction Fees</p>
              <p>
                Many virtual/crypto-assets allow market participants to offer
                fees to miners (parties that process transactions and record
                them on a blockchain or distributed ledger). While not
                mandatory, these fees are generally necessary to ensure prompt
                transaction recording. The amounts of these fees are subject to
                market forces, and during periods of stress, they may increase
                substantially. Virtual/crypto-asset exchanges, wallet providers,
                and other custodians may charge high fees relative to custodians
                in other financial markets.{" "}
              </p>
            </li>
            <li className="!text-lightGray2">
              <p className="font-bold">
                Risk of Partial or Total Loss of the Invested Amount
              </p>
              <p>
                Investing in virtual/crypto-assets is typically unregulated in
                most countries, thereby offering limited protection in case of
                adverse events. Moreover, the associated risks may not be
                clearly stated in the documentation provided by the
                virtual/crypto-asset issuer.
              </p>
            </li>
            <li className="!text-lightGray2">
              <p className="font-bold">Insufficient Information</p>
              <p>
                Information about specific virtual/crypto-assets may be missing,
                inaccurate, incomplete, and unclear regarding the project and
                its risks. Documentation may be highly technical and require
                sophisticated knowledge to comprehend the characteristics of the
                virtual/crypto-asset and/or the project.
              </p>
            </li>
            <li className="!text-lightGray2">
              <p className="font-bold">Misleading Information</p>
              <p>
                Certain virtual/crypto-assets and related products are
                aggressively advertised to the public through marketing
                materials and information that may be unclear, incomplete,
                inaccurate, or intentionally misleading. For instance,
                advertisements on social media platforms may focus on potential
                gains without adequately highlighting the high risks involved.
                Caution should be exercised concerning social media
                &quot;influencers&quot; who may have a financial incentive to
                promote specific virtual/crypto-assets and related products and
                services, potentially leading to biased communications.{" "}
              </p>
            </li>
            <li className="!text-lightGray2">
              <p className="font-bold">Fraud and Malicious Activities</p>
              <p>
                Numerous fake virtual/crypto-assets and scams exist, aiming to
                deceive individuals and deprive them of their funds using
                various techniques, including phishing or fake identification.{" "}
              </p>
            </li>
            <li className="!text-lightGray2">
              <p className="font-bold">No Personal Advice </p>
              <p>
                We do not provide personal advice in relation to our products or
                services. We sometimes provide factual information, information
                about transaction procedures, and information about potential
                risks. However, any decision to use our products or services is
                made by you. No communication or information provided to you by
                us is intended as or shall be considered or construed as,
                investment advice, financial advice, trading advice, or any
                other sort of advice. You are solely responsible for determining
                whether any investment, investment strategy, or related
                transaction is appropriate for you according to your personal
                investment objectives, financial circumstances, and risk
                tolerance.{" "}
              </p>
            </li>
            <li className="!text-lightGray2">
              <p className="font-bold">No Monitoring </p>
              <p>
                We do not monitor whether your use of Density Services is
                consistent with your financial goals and objectives. It is up to
                you to assess whether your financial resources are adequate for
                your financial activity with us, and to your risk appetite in
                the products and services you use.{" "}
              </p>
            </li>
            <li className="!text-lightGray2">
              <p className="font-bold">Liquidity risk </p>
              <p>
                Digital Assets may have limited liquidity which may make it
                difficult or impossible for you to sell or exit a position when
                you wish to do so. This may occur at any time, including at
                times of rapid price movements.{" "}
              </p>
            </li>
          </ol>
          <p className="font-bold">RISK WARNING</p>
          <p>
            Digital asset prices are subject to high market risks and price
            volatility. The value of your investments can go up or down and you
            may not get back the amount invested. You are solely responsible for
            your investment decisions and Density is not liable for any losses
            you may incur. You should carefully consider your investment
            experience, financial situation, investment objectives and risk
            tolerance and consult an independent financial advisor prior to
            making any investment.
          </p>
          <p className="font-bold">DISCLAIMER</p>
          <p>
            Crypto products and NFTs are unregulated and can be highly risky.
            There may be no regulatory recourse for any loss from such
            transactions. For any queries write to us at
            support@density.exchange.
          </p>
        </section>
      </section>
    </main>
  );
}

export default page;
