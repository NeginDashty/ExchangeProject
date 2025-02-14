// import Head from "next/head";
// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import TopText from "@/components/topText";
import CryptoCard from "@/components/cards"
import CryptoTradeBox from "@/components/trade";
import CryptoChart from "@/components/chart"
import GaugeChart from "@/components/userLevel"
import ExchangeBox from "@/components/tradeMobile"
import Coins from "@/components/coins"


export default function Home() {
  return (
    // <>
    //  <div>
    //   <Navbar/>
    
    //   </div>
    // </>
    <>
    <div style={{ display: "flex" }}>
      <Sidebar /> 
      <div style={{ flex: 1 }}> 
        <Navbar />
        <TopText /> 
        <CryptoCard/>
       <CryptoTradeBox/>
       <CryptoChart/>
       <GaugeChart/>
       <ExchangeBox/>
       <Coins/>
      </div>
    </div>
  </>
  );
}
