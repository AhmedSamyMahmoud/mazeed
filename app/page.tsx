"use client";
import { useState } from "react";
import dashboard from "../public/images/dashboard.jpg";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

export default function Page() {
  const [activeTab, setActiveTab] = useState("features");
  const [email, setEmail] = useState("");

  const sendEmail = async () => {
    try {
      const serviceID = "service_znu7ioo";
      const templateID = "template_rkk1eru";
      const userID = "9H-vjbnTzb3nkt0Dg";

      var templateParams = {
        name: "There!",
        email: email,
      };

      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        userID
      );
      if (response.status === 200) {
        toast.success("Email sent successfully"); // Show success toast
        setEmail("");
      }
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <div
      className="min-h-screen bg-white text-gray-900 font-body"
      data-oid="-o8enyz"
    >
      <ToastContainer />
      <nav
        className="py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-100"
        data-oid="-uuhm.m"
      >
        <div className="flex items-center" data-oid="z-hvejf">
          <span className="text-xl" data-oid="-s:qjmc">
            mazeed.ai
          </span>
        </div>
        <div className="hidden md:flex space-x-8 cursor-" data-oid="7h6r5f6">
          <button
            className={`${activeTab === "features" ? "text-accent font-medium" : "text-gray-700"} hover:text-accent transition-colors`}
            onClick={() => setActiveTab("features")}
            data-oid="ennhwyi"
          >
            Features
          </button>
          <button
            className={`${activeTab === "howItWorks" ? "text-accent font-medium" : "text-gray-700"} hover:text-accent transition-colors`}
            onClick={() => setActiveTab("howItWorks")}
            data-oid="ez96jij"
          >
            How It Works
          </button>
          <button
            className={`${activeTab === "successStories" ? "text-accent font-medium" : "text-gray-700"} hover:text-accent transition-colors`}
            onClick={() => setActiveTab("successStories")}
            data-oid="tlmr4rm"
          >
            Success Stories
          </button>
        </div>
        <div className="flex space-x-4" data-oid="3uzqc10">
          <button
            onClick={() =>
              window.scrollTo({
                left: 0,
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
            className="px-4 py-2 text-sm font-button bg-transparent text-black hover:bg-gray-50 border border-gray-200 rounded-md"
            data-oid="_x2ziof"
          >
            Join Waitlist
          </button>
          <button
            className="px-4 py-2 text-sm font-button bg-accent text-white hover:bg-accent/90 rounded-md transition-colors"
            data-oid="u-c12o9"
          >
            Book a Demo
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <section
        className="py-16 px-6 md:px-12 max-w-6xl mx-auto text-center"
        data-oid="m_eh8wz"
      >
        <h1
          style={{ fontFamily: "__Aime_43f459" }}
          className="text-4xl md:text-5xl  mb-6"
          data-oid="9dh3jbe"
        >
          AI CFO for Creators and Influencers
        </h1>
        <h2
          style={{ fontFamily: "__Aime_43f459" }}
          className="text-2xl md:text-3xl font-heading font-medium mb-6"
          data-oid="d-8awj3"
        >
          Meet Mazeed: Your 24/7 Creator CFO
        </h2>
        <p
          className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
          data-oid="_onf9uh"
        >
          While you focus on creating amazing content, Mazeed works around the
          clock to multiply your revenue, optimize your spending, and guide your
          investment decisions.
        </p>
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          data-oid="qcd7des"
        >
          <button
            onClick={() =>
              window.scrollTo({
                left: 0,
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
            className="px-8 py-3 font-button bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
            data-oid="6phqqk."
          >
            Join Waitlist
          </button>
          <button
            className="px-8 py-3 font-button border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
            data-oid="ao60czv"
          >
            See How It Works
          </button>
        </div>
        {/* Dashboard Preview */}
        <div
          className="bg-gray-100 p-4 rounded-lg shadow-lg mb-16"
          data-oid="zio23l2"
        >
          <Image src={dashboard} alt="Dashboard Preview" data-oid="4e95ox4" />
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-gray-50 py-16" data-oid=".cfa.1y">
        <div className="max-w-6xl mx-auto px-6 md:px-12" data-oid="4:r0z.y">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            data-oid="x-ade2e"
          >
            <div
              className="bg-white p-8 rounded-lg shadow-sm"
              data-oid="2s.7hz3"
            >
              <h3
                className="text-3xl font-bold text-accent mb-2"
                data-oid="2ck6gqi"
              >
                135%+
              </h3>
              <p className="text-gray-600" data-oid="po0b6s_">
                Average Revenue Increase
              </p>
            </div>
            <div
              className="bg-white p-8 rounded-lg shadow-sm"
              data-oid="qndqvdn"
            >
              <h3
                className="text-3xl font-bold text-accent mb-2"
                data-oid="99ae_qb"
              >
                120
              </h3>
              <p className="text-gray-600" data-oid="jphmo7z">
                Private Beta Customers Using Our Platform
              </p>
            </div>
            <div
              className="bg-white p-8 rounded-lg shadow-sm"
              data-oid="jy6ryln"
            >
              <h3
                className="text-3xl font-bold text-accent mb-2"
                data-oid="3gzz97k"
              >
                $3M+
              </h3>
              <p className="text-gray-600" data-oid="i-b_6g_">
                Additional Creator Revenue Generated
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section
        className="py-16 px-6 md:px-12 max-w-6xl mx-auto"
        data-oid="2jq-::m"
      >
        <h2
          style={{ fontFamily: "__Aime_43f459" }}
          className="text-3xl font-heading font-bold mb-12 text-center"
          data-oid="5pjtuw:"
        >
          Your 24/7 Financial Team
        </h2>
        <p
          className="text-xl text-gray-600 mb-16 text-center max-w-4xl mx-auto"
          data-oid="_0rilav"
        >
          Mazeed is your AI financial agent who works around the clock to
          multiply your revenue, optimize your spending, and guide your
          investment decisions. While you focus on creating amazing content,
          Mazeed manages your entire financial ecosystem.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-oid="us8n7bl"
        >
          {/* Feature 1 */}
          <div
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            data-oid="rgkssvc"
          >
            <div className="flex items-center mb-4" data-oid="0hpbaql">
              <div
                className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center mr-3"
                data-oid="1s._9q1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-oid="chzn9:q"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                    data-oid="q625dzm"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold" data-oid="-pjn6d_">
                Content Transformer
              </h3>
            </div>
            <p className="text-gray-600 mb-4" data-oid="vnkyxdi">
              Mazeed adapts your best-performing content across YouTube, TikTok,
              and Instagram to maximize revenue without extra creation work.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg" data-oid="3z_em2:">
              <h4 className="font-bold mb-2 text-accent" data-oid="c6i63p9">
                2-5X Revenue Growth
              </h4>
              <p className="text-gray-600" data-oid="6y1kue7">
                Mazeed identifies what's working on one platform and reformats
                it for others, maintaining your message while optimizing for
                each platform's algorithm.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            data-oid="zw_tzut"
          >
            <div className="flex items-center mb-4" data-oid="0cugyll">
              <div
                className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center mr-3"
                data-oid="-802-fh"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-oid="mwx-8j4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                    data-oid="eszj2d2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold" data-oid="j-9c9c2">
                Peak Post Timer
              </h3>
            </div>
            <p className="text-gray-600 mb-4" data-oid="frdwjha">
              Mazeed ensures you post at the perfect time on every platform to
              maximize views, engagement, and algorithm boost.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg" data-oid="w6b.mrc">
              <h4 className="font-bold mb-2 text-accent" data-oid="jyugy6k">
                Up to 3X View & Revenue Increase
              </h4>
              <p className="text-gray-600" data-oid="qbha.-y">
                Mazeed analyzes your data to identify your unique optimal
                posting windows, not generic 'best times.'
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            data-oid="zvownl:"
          >
            <div className="flex items-center mb-4" data-oid="0j2jez-">
              <div
                className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center mr-3"
                data-oid="iobmc63"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-oid="cj4nf9:"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                    data-oid=".faycb1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold" data-oid="tgglzr9">
                Profit Gap Finder
              </h3>
            </div>
            <p className="text-gray-600 mb-4" data-oid="3frfbic">
              Mazeed discovers high-CPM content opportunities that can multiply
              your earnings with minimal additional work.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg" data-oid=":pvs_95">
              <h4 className="font-bold mb-2 text-accent" data-oid="57v7a9w">
                5-20X Strategic Content Revenue
              </h4>
              <p className="text-gray-600" data-oid="4plyob-">
                Mazeed identifies content niches with unusually high CPM rates –
                topics with strong advertiser demand but low creator supply.
              </p>
            </div>
          </div>
          {/* Feature 4 */}
          <div
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            data-oid="-.if7q9"
          >
            <div className="flex items-center mb-4" data-oid="jcouez_">
              <div
                className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center mr-3"
                data-oid="4xjmu9."
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-oid="uudnyvc"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                    clipRule="evenodd"
                    data-oid="e3bao1g"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold" data-oid="gqkcly.">
                Global Reach Maximizer
              </h3>
            </div>
            <p className="text-gray-600 mb-4" data-oid="b:eyfft">
              Mazeed uses AI to translates your videos to speak in different
              languages with zero effort.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg" data-oid=":b2cfmt">
              <h4 className="font-bold mb-2 text-accent" data-oid="q26i286">
                2-7X International Revenue Growth
              </h4>
              <p className="text-gray-600" data-oid="63svvj7">
                Mazeed identifies your highest-potential international markets
                and automatically translates your videos to speak in different
                languages.
              </p>
            </div>
          </div>
          {/* Feature 5 */}
          <div
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            data-oid="3rc-60q"
          >
            <div className="flex items-center mb-4" data-oid="md.9:zo">
              <div
                className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center mr-3"
                data-oid="yef1b.i"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-oid="ttira33"
                >
                  <path
                    d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                    data-oid="pt0kcge"
                  />

                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                    data-oid="6_ie1xz"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold" data-oid="oepeyj3">
                Affiliate Booster
              </h3>
            </div>
            <p className="text-gray-600 mb-4" data-oid="rl91ie2">
              Mazeed transforms your affiliate marketing with AI-optimized
              product selection and promotion techniques.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg" data-oid="mcp6467">
              <h4 className="font-bold mb-2 text-accent" data-oid="0vqww89">
                3-8X Affiliate Revenue Increase
              </h4>
              <p className="text-gray-600" data-oid="t3n_-dg">
                Mazeed continuously analyzes your affiliate performance to
                identify what products, price points, and presentation styles
                convert best with your specific audience.
              </p>
            </div>
          </div>
          {/* Feature 6 */}
          <div
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            data-oid="80ytq1x"
          >
            <div className="flex items-center mb-4" data-oid="491ms.u">
              <div
                className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center mr-3"
                data-oid="k-0aqjq"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-oid="0vnj5:e"
                >
                  <path
                    d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                    data-oid=".mf:h9n"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold" data-oid="i17i84g">
                Content Recycler
              </h3>
            </div>
            <p className="text-gray-600 mb-4" data-oid="-f0ace_">
              Mazeed transforms your existing content into books, courses, and
              other products that create entirely new revenue streams.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg" data-oid="z_.q7br">
              <h4 className="font-bold mb-2 text-accent" data-oid="qmvo1rd">
                4-12X Content ROI
              </h4>
              <p className="text-gray-600" data-oid="s864:5v">
                Mazeed identifies high-value themes in your content library that
                have strong repurposing potential for new revenue-generating
                assets.
              </p>
            </div>
          </div>
          {/* Feature 7 */}
          <div
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow col-span-1 md:col-span-3 lg:col-span-1 lg:col-start-2 mx-auto md:max-w-md lg:max-w-none"
            data-oid="y2_blb8"
          >
            <div className="flex items-center mb-4" data-oid="5yx9l0e">
              <div
                className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center mr-3"
                data-oid="aqv_rkv"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-oid="a.koz:v"
                >
                  <path
                    d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                    data-oid="nmi0agz"
                  />

                  <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                    data-oid="o54:n:d"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold" data-oid=":em5kgc">
                Creator Cash Advance
              </h3>
            </div>
            <p className="text-gray-600 mb-4" data-oid="h3z.igp">
              Mazeed gives you immediate access to your future earnings with
              AI-powered forecasting and creator-friendly repayment.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg" data-oid="08.-4t_">
              <h4 className="font-bold mb-2 text-accent" data-oid="boj2sxr">
                2-5X Growth Acceleration
              </h4>
              <p className="text-gray-600" data-oid="it2hd01">
                Mazeed forecasts your earnings across all platforms and provides
                advances against projected income with repayment aligned to your
                revenue cycle.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-12" data-oid=":aw1oka">
        <div className="max-w-6xl mx-auto" data-oid="y.w_f5-">
          <h2
            style={{ fontFamily: "__Aime_43f459" }}
            className="text-3xl font-heading font-bold mb-12 text-center"
            data-oid="65dq-3v"
          >
            How Mazeed Works
          </h2>
          <p
            className="text-xl text-gray-600 mb-16 text-center max-w-4xl mx-auto"
            data-oid="mbwsnz9"
          >
            Our AI analyzes your content and audience data to identify revenue
            opportunities and optimize your financial strategy.
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            data-oid="rcku9g9"
          >
            <div
              className="bg-white p-8 rounded-lg shadow-sm"
              data-oid="mo975tf"
            >
              <div
                className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mb-6 font-bold text-xl"
                data-oid="y0r7flw"
              >
                1
              </div>
              <h3 className="text-xl font-bold mb-4" data-oid="0qsg1-p">
                Connect Your Platforms
              </h3>
              <p className="text-gray-600" data-oid="tpfu.8:">
                Link your creator accounts from YouTube, TikTok, Instagram, and
                other platforms to provide data for our AI agents.
              </p>
            </div>
            <div
              className="bg-white p-8 rounded-lg shadow-sm"
              data-oid="f4-06ey"
            >
              <div
                className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mb-6 font-bold text-xl"
                data-oid="vdyedr1"
              >
                2
              </div>
              <h3 className="text-xl font-bold mb-4" data-oid="o_y62wz">
                AI Analysis & Insights
              </h3>
              <p className="text-gray-600" data-oid="h7mo3dl">
                Our AI agents analyze your content performance, audience
                engagement, and revenue patterns to identify opportunities.
              </p>
            </div>
            <div
              className="bg-white p-8 rounded-lg shadow-sm"
              data-oid="bpmfpnh"
            >
              <div
                className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mb-6 font-bold text-xl"
                data-oid="7v._buc"
              >
                3
              </div>
              <h3 className="text-xl font-bold mb-4" data-oid="j9qnfod">
                Strategic Recommendations
              </h3>
              <p className="text-gray-600" data-oid="-r27yin">
                Receive detailed, actionable recommendations tailored to your
                specific content niche and audience.
              </p>
            </div>
            <div
              className="bg-white p-8 rounded-lg shadow-sm"
              data-oid="k4ok_u1"
            >
              <div
                className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mb-6 font-bold text-xl"
                data-oid="pgl78:d"
              >
                4
              </div>
              <h3 className="text-xl font-bold mb-4" data-oid="mm9o17:">
                Implementation & Tracking
              </h3>
              <p className="text-gray-600" data-oid="n6-jurx">
                Implement suggestions or have our agents do all the legwork for
                you with your guidance. Track improvements in real-time on your
                dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Success Stories Section */}
      <section
        className="py-16 px-6 md:px-12 max-w-6xl mx-auto"
        data-oid="4cfd2ij"
      >
        <h2
          style={{ fontFamily: "__Aime_43f459" }}
          className="text-3xl font-heading font-bold mb-12 text-center"
          data-oid="f_9qrse"
        >
          Success Stories
        </h2>
        <p
          className="text-xl text-gray-600 mb-16 text-center max-w-4xl mx-auto"
          data-oid="rv.d:pp"
        >
          See how creators like you are achieving sustainable financial growth
          with our AI agents.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-oid="jhagv:y"
        >
          {/* Testimonial 1 */}
          <div
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
            data-oid="jjix-ca"
          >
            <p className="text-gray-600 mb-6" data-oid="bqvliwl">
              "Mazeed completely changed my business. It helped me adapt my
              YouTube content to TikTok using AI without creating entirely new
              videos, doubling my revenue in just 3 months."
            </p>
            <div className="flex items-center mb-4" data-oid="ygvfiwl">
              <div
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3 font-bold"
                data-oid="x2xcp65"
              >
                A
              </div>
              <div data-oid="g3uio_p">
                <h4 className="font-bold" data-oid="6iswfpr">
                  Alex C.
                </h4>
                <p className="text-sm text-gray-500" data-oid="os:db7f">
                  YouTube Creator, 500K subs
                </p>
              </div>
            </div>
            <div className="flex justify-between text-sm" data-oid="-y9oymy">
              <div data-oid="7.:jwjb">
                <p className="text-gray-500" data-oid="v3va1gk">
                  Before
                </p>
                <p className="font-bold" data-oid="5x-90u9">
                  $8,500/mo
                </p>
              </div>
              <div data-oid="36qg50b">
                <p className="text-gray-500" data-oid="1d0x2ak">
                  After
                </p>
                <p className="font-bold" data-oid="26t61ll">
                  $17,200/mo
                </p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
            data-oid="_p595s2"
          >
            <p className="text-gray-600 mb-6" data-oid="tsljdo_">
              "Mazeed identified high-CPM topics in my niche that I had
              completely overlooked. I now dedicate 25% of my content to these
              topics and my revenue has increased by over 60%."
            </p>
            <div className="flex items-center mb-4" data-oid="c_hqvmb">
              <div
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3 font-bold"
                data-oid="xc.3c9c"
              >
                S
              </div>
              <div data-oid="j43io._">
                <h4 className="font-bold" data-oid="8awy0a2">
                  Sarah J.
                </h4>
                <p className="text-sm text-gray-500" data-oid="fm267n8">
                  Finance Creator, 250K followers
                </p>
              </div>
            </div>
            <div className="flex justify-between text-sm" data-oid="10uejqu">
              <div data-oid="pk.1:nj">
                <p className="text-gray-500" data-oid="ep1--7s">
                  Before
                </p>
                <p className="font-bold" data-oid="_3nrxe6">
                  $12,000/mo
                </p>
              </div>
              <div data-oid="6cv1.st">
                <p className="text-gray-500" data-oid="low34:r">
                  After
                </p>
                <p className="font-bold" data-oid="7p.gtf_">
                  $19,300/mo
                </p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
            data-oid="v4irkrl"
          >
            <p className="text-gray-600 mb-6" data-oid="5nxr3g9">
              "My affiliate revenue was always inconsistent until I started
              using Mazeed. It found products that actually resonated with my
              audience, and my conversion rates have skyrocketed."
            </p>
            <div className="flex items-center mb-4" data-oid="ibetvnd">
              <div
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3 font-bold"
                data-oid="88vhdm_"
              >
                M
              </div>
              <div data-oid="j125kt1">
                <h4 className="font-bold" data-oid="lcjct4m">
                  Marcus W.
                </h4>
                <p className="text-sm text-gray-500" data-oid="79p_y79">
                  Tech Reviewer, 1.2M subs
                </p>
              </div>
            </div>
            <div className="flex justify-between text-sm" data-oid="jteiggo">
              <div data-oid="jb-do1n">
                <p className="text-gray-500" data-oid="xcbempr">
                  Before
                </p>
                <p className="font-bold" data-oid="6_44sll">
                  $22,000/mo
                </p>
              </div>
              <div data-oid="_dj8lav">
                <p className="text-gray-500" data-oid="m.0nv4_">
                  After
                </p>
                <p className="font-bold" data-oid="ekziqvh">
                  $37,500/mo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-12" data-oid="rr6jkho">
        <div className="max-w-3xl mx-auto text-center" data-oid="4728xf4">
          <div
            className="bg-white p-10 rounded-lg shadow-sm"
            data-oid="d2uf8sr"
          >
            <h2
              className="text-2xl font-heading font-bold mb-6"
              data-oid="l7w4i85"
            >
              Ready to multiply your creator revenue?
            </h2>
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
              data-oid="ljgytn-"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-md w-full sm:w-auto"
                data-oid="h.2.49g"
              />
              <button
                onClick={sendEmail}
                disabled={!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)}
                className="px-6 py-3 font-button bg-accent text-white rounded-md hover:bg-accent/90 disabled:cursor-not-allowed disabled:bg-gray-300 transition-colors w-full sm:w-auto"
                data-oid="3j12fd6"
              >
                Join Waitlist
              </button>
            </div>
            <p className="text-sm text-gray-500" data-oid="rvg7_dr">
              By joining, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer
        className="bg-white py-12 px-6 md:px-12 border-t border-gray-100"
        data-oid="6dh8zw8"
      >
        <div className="max-w-6xl mx-auto" data-oid="70yard6">
          <div
            className="flex flex-col md:flex-row justify-between items-center mb-8"
            data-oid="lt:l1tx"
          >
            <div className="flex items-center mb-4 md:mb-0" data-oid="vveylc6">
              <span className="text-xl" data-oid="6p7ald5">
                mazeed.ai
              </span>
            </div>
            <p
              className="text-gray-600 text-center md:text-left"
              data-oid="bgd.b6v"
            >
              Your AI Financial Partner in the Creator Economy. Multiply
              revenue, optimize spending, and make smarter investment decisions.
            </p>
          </div>
          <div className="text-center text-sm text-gray-500" data-oid="o0ht8_5">
            © 2025 Mazeed. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
