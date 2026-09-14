import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import "./globals.css";
import { ClarityAnalytics, GoogleAnalytics, UmamiAnalytics } from '@/components/Analytics';
import { TooltipProvider } from '@/components/animate-ui/components/animate/tooltip';
import BackTop from '@/components/BackTop';
import DockCard from '@/components/DockCard';
import FullLoading from '@/components/FullLoading';
import HonorsDialog from '@/components/HonorsDialog';
import { HonorsDialogProvider } from '@/components/HonorsDialog/context';
import ScrollProgress from '@/components/ScrollProgress';
import { THEME_MODE } from "@/enums";
import { BASE_PATH } from "@/lib/base-path";
import pkg from "#/package.json";

const siteName = process.env.NEXT_PUBLIC_NAME ?? "";
const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Portfolio";
const siteDescription = process.env.NEXT_PUBLIC_DESC ?? "";
const siteDomain = process.env.NEXT_PUBLIC_APP_DOMAIN ?? "http://localhost:5173";
const siteUrl = `${siteDomain.replace(/\/$/, "")}${BASE_PATH}`;
const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? pkg.author.github;

export const metadata: Metadata = {
  title: `${siteName} - ${appName}`,
  description: siteDescription,
  generator: appName,
  applicationName: appName,
  referrer: 'origin-when-cross-origin',
  keywords: [siteName, appName, 'AI Agent', 'RAG', '大模型应用', '作品集'],
  authors: [{ name: siteName, url: pkg.author.url }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/og.svg`,
        width: 1200,
        height: 630,
      }
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    creator: githubUsername,
    images: [`${siteUrl}/og.svg`],
  },
  manifest: `${siteUrl}/manifest.json`
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="version" content={pkg.version} />
        <UmamiAnalytics />
        <ClarityAnalytics />
        <GoogleAnalytics />
      </head>
      <body>
        <NextThemesProvider attribute="class" defaultTheme={process.env.NEXT_PUBLIC_THEME || THEME_MODE.SYSTEM}>
          <TooltipProvider>
            <HonorsDialogProvider>
              {children}
              <DockCard />
              <HonorsDialog />
              <FullLoading />
              <BackTop />
              <ScrollProgress />
              <Analytics />
            </HonorsDialogProvider>
          </TooltipProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
