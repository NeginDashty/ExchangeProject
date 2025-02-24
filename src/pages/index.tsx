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
import CardComponent from "@/components/userLevel";
import ExchangeBox from "@/components/tradeMobile"
import Coins from "@/components/coins"
import styled from "styled-components";

export default function Home() {
  return (
    <>
    <div >
      <Sidebar /> 
      <div > 
        <Navbar />
        <TopText /> 
        <CryptoCard/>
        <CryptoChart/> 
        <CryptoTradeBox/>

       <CardComponent/>
       {/* <GaugeChart/> */}
       <ExchangeBox/>
       <Coins/>
      </div>
    </div>
  </>
  );
}
