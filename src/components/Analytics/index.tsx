/*
 * @Author: 白雾茫茫丶<baiwumm.com>
 * @Date: 2025-12-22 13:44:28
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2025-12-22 13:53:43
 * @Description: 统计代码
 */
"use client"
import clarity from "@microsoft/clarity";
import Script from 'next/script';
import { useEffect } from 'react';

/**
 * @description: Umami 统计代码
 */
export const UmamiAnalytics = () => {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_ID;
  const scriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
  if (!websiteId || !scriptUrl || process.env.NODE_ENV !== "production") {
    return null;
  }
  return <Script src={scriptUrl} data-website-id={websiteId} />;
};

/**
 * @description: Microsoft Clarity 统计代码
 */
export const ClarityAnalytics = () => {
  useEffect(() => {
    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
    if (process.env.NODE_ENV === "production" && clarityId) {
      clarity.init(clarityId);
    }
  }, []);

  return null;
};

/**
 * @description: Google 统计
 */
export const GoogleAnalytics = () => {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (!GA_ID || process.env.NODE_ENV !== "production") return null;

  return (
    <>
      {/* 加载 GA 主脚本 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* 初始化 Gtag */}
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
};