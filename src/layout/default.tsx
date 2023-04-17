import { type ReactNode } from "react";
import Head from "next/head";
import DottedGridBackground from "../components/DottedGridBackground";
import clsx from "clsx";
import Script from "next/script";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const DefaultLayout = (props: LayoutProps) => {
  const description =
    "在浏览器中组装、配置和部署自主人工智能代理。";
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#2B2B2B] to-[#1F1F1F]">
      <Head>
        <title>Chinese-AgentGPT</title>
        <meta name="description" content={description} />
        <meta name="twitter:site" content="@AgentGPT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AgentGPT 🤖" />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://agentgpt.reworkd.ai/banner.png"
        />
        <meta name="twitter:image:width" content="1280" />
        <meta name="twitter:image:height" content="640" />
        <meta
          property="og:title"
          content="AgentGPT: Autonomous AI in your browser 🤖"
        />
        <meta
          property="og:description"
          content="在浏览器中组装、配置和部署自主人工智能代理。"
        />
        <meta property="og:url" content="https://agentgpt.reworkd.ai/" />
        <meta
          property="og:image"
          content="https://agentgpt.reworkd.ai/banner.png"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="sG4QDkC8g2oxKSopgJdIe2hQ_SaJDaEaBjwCXZNkNWA"
        />
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
          data-domain="agentgpt.reworkd.ai"
        />
      </Head>
      <DottedGridBackground className={clsx("min-h-screen", props.className)}>
        {props.children}
      </DottedGridBackground>
    </div>
  );
};

export default DefaultLayout;
