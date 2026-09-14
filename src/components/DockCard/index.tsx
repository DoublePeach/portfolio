"use client"

import { Award, BookOpen, House, Mail, Moon, Phone, Sun } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes";
import { type ReactNode } from 'react'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/animate-ui/components/animate/tooltip"
import { RippleButton } from "@/components/animate-ui/components/buttons/ripple"
import { useHonorsDialog } from "@/components/HonorsDialog/context";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import { THEME_MODE } from '@/enums';
import { GithubIcon } from '@/lib/icons';
import pkg from '#/package.json';

type SocialLink = {
  name: string;
  url: string;
  icon: ReactNode;
}

/** 底部 Dock：首页、荣誉、博客、GitHub、邮箱、电话与主题切换 */
export default function DockCard() {
  const { resolvedTheme, setTheme } = useTheme();
  const { openHonors } = useHonorsDialog();
  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME || pkg.author.github;

  /**
   * 切换明暗主题
   * 不依赖条件渲染图标，避免 SSR/CSR hydration 不一致
   */
  const handleToggleTheme = () => {
    const nextTheme = resolvedTheme === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK;
    setTheme(nextTheme);
  };

  const socialLinks: SocialLink[] = [
    {
      name: "技术博客",
      url: pkg.author.url,
      icon: <BookOpen />
    },
    {
      name: "GitHub",
      url: `https://github.com/${githubUsername}`,
      icon: <GithubIcon />
    },
    {
      name: "Email",
      url: `mailto:${pkg.author.email}`,
      icon: <Mail />
    },
    {
      name: "电话",
      url: `tel:${pkg.author.phone}`,
      icon: <Phone />
    }
  ]

  return (
    <div className="fixed inset-x-0 bottom-2 z-30 mx-auto flex origin-bottom h-full max-h-12">
      <div className="fixed bottom-0 inset-x-0 h-14 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock direction="middle" className="mt-0 h-full gap-1">
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/" aria-label="首页">
                <RippleButton variant="ghost" className="rounded-full" size='icon'>
                  <House />
                </RippleButton>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>作品集首页</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <RippleButton
                variant="ghost"
                className="rounded-full"
                size='icon'
                aria-label="校园荣誉"
                onClick={openHonors}
              >
                <Award />
              </RippleButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>校园荣誉</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <Separator orientation="vertical" className="h-full" />
        {socialLinks.map(({ name, url, icon }) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
                  <RippleButton variant="ghost" className="rounded-full" size='icon'>
                    {icon}
                  </RippleButton>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <RippleButton
                aria-label="ThemeToggle"
                variant="ghost"
                className="rounded-full"
                size='icon'
                onClick={handleToggleTheme}
              >
                {/* 日月图标同时存在，用 CSS dark: 切换，保证服务端与客户端 DOM 一致 */}
                <span className="relative inline-flex h-[1.2rem] w-[1.2rem] items-center justify-center">
                  <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </span>
              </RippleButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>主题模式</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  )
}
