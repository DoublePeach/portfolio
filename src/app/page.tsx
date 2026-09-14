"use client"

import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { data } from "./data";

import { RippleButton } from "@/components/animate-ui/components/buttons/ripple";
import BlurFade from "@/components/BlurFade";
import BlurText from "@/components/BlurText";
import Highlighter from "@/components/Highlighter";
import { useHonorsDialog } from "@/components/HonorsDialog/context";
import LogoLoop from "@/components/LogoLoop";
import ProjectCard, { type ProjectCardProps } from "@/components/ProjectCard";
import ResumeCard from "@/components/ResumeCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SECTION } from "@/enums";
import pkg from "#/package.json";

/** 首页作品集：展示个人简介、经历、技能、项目与博客 */
export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { openHonors } = useHonorsDialog();
  const blurFadeDelay = 0.04;
  const displayName = process.env.NEXT_PUBLIC_NAME ?? "";
  const blogUrl = pkg.author.url;

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="flex flex-col min-h-dvh space-y-10 max-w-4xl mx-auto px-4 py-8 pb-18">
      <section id={SECTION.HERO}>
        <div className="flex justify-between items-center gap-4">
          <div className="flex-col flex flex-1 gap-4">
            <BlurText
              className="text-lg font-bold tracking-tighter sm:text-4xl/none"
              text={`Hi, 我是${displayName} 👋`}
            />
            <BlurText
              className="max-w-150 md:text-lg"
              text={process.env.NEXT_PUBLIC_DESC ?? ""}
            />
            <BlurFade delay={blurFadeDelay * 2}>
              <div className="flex flex-wrap gap-2">
                <RippleButton size="sm" className="gap-2" onClick={openHonors}>
                  <Award className="size-4" />
                  校园荣誉
                </RippleButton>
                <Link href={blogUrl} target="_blank" rel="noopener noreferrer">
                  <RippleButton size="sm" variant="outline" className="gap-2">
                    <ExternalLink className="size-4" />
                    技术博客
                  </RippleButton>
                </Link>
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={blurFadeDelay}>
            <Avatar className="size-28 border border-border/50 shadow-sm">
              <AvatarImage alt={displayName} src="/me.jpg" className="object-cover" />
              <AvatarFallback>{displayName.slice(0, 2) || "HT"}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </section>

      <section id={SECTION.ABOUT}>
        <div className="flex flex-col gap-2">
          <BlurFade delay={blurFadeDelay * 3}>
            <h2 className="text-xl font-bold">{SECTION.label(SECTION.ABOUT)}</h2>
          </BlurFade>
          <BlurFade delay={blurFadeDelay * 4}>
            <div className="flex flex-col justify-center text-sm text-muted-foreground gap-2">
              <p>
                25 届软件工程本科，3 年企业一线研发经验，专注
                {" "}
                <Highlighter action="highlight" color="#87CEFA">
                  <span className="text-white/85">企业级 AI Agent</span>
                </Highlighter>
                、RAG 与 AI 中台落地，具备从 PoC、MVP 到生产上线的全栈交付能力。熟悉飞书生态体系。
              </p>
              <p>
                现任索菲亚家居集团大模型应用开发工程师，主导多智能体导购、Agentic RAG 知识库、飞书智慧办公与 IAM 等方向；熟悉 LangGraph、MCP、飞书/企微集成与企业系统治理。
              </p>
              <p>
                大学期间获华北五省计算机应用大赛
                <span className="text-foreground font-medium"> 国一 </span>
                、全国高校计算机能力挑战赛 Java
                <span className="text-foreground font-medium"> 全国决赛二等奖 </span>
                ，另有多项省级赛事、3 项软著与华为 / 达摩院等专业认证。
                <button
                  type="button"
                  onClick={openHonors}
                  className="text-foreground underline underline-offset-4 ml-1 cursor-pointer"
                >
                  查看完整荣誉墙 →
                </button>
              </p>
              <p className="font-bold">
                <Highlighter action="underline" color="#FF9800">
                  让前沿 AI 真正服务业务目标 —— 在复杂场景里做可观测、可治理、可迭代的工程化产品。
                </Highlighter>
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id={SECTION.WORK}>
        <div className="flex min-h-0 flex-col gap-4">
          <BlurFade delay={blurFadeDelay * 5}>
            <h2 className="text-xl font-bold">{SECTION.label(SECTION.WORK)}</h2>
          </BlurFade>
          {data.work.map((work, index) => (
            <BlurFade key={work.company} delay={blurFadeDelay * 6 + index * 0.05}>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "至今"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id={SECTION.EDUCATION}>
        <div className="flex min-h-0 flex-col gap-4">
          <BlurFade delay={blurFadeDelay * 7}>
            <h2 className="text-xl font-bold">{SECTION.label(SECTION.EDUCATION)}</h2>
          </BlurFade>
          {data.education.map((education, index) => (
            <BlurFade key={education.school} delay={blurFadeDelay * 8 + index * 0.05}>
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id={SECTION.SKILLS}>
        <div className="flex min-h-0 flex-col gap-4">
          <BlurFade inView>
            <h2 className="text-xl font-bold">{SECTION.label(SECTION.SKILLS)}</h2>
          </BlurFade>
          <BlurFade inView>
            <LogoLoop
              logos={data.skills}
              speed={40}
              direction="left"
              logoHeight={48}
              gap={20}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              ariaLabel="Skill logos"
            />
          </BlurFade>
        </div>
      </section>

      <section id={SECTION.PROJECTS}>
        <div className="flex min-h-0 flex-col gap-4">
          <BlurFade inView>
            <h2 className="text-xl font-bold">{SECTION.label(SECTION.PROJECTS)}</h2>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {data.projects.map((project, index) => (
              <BlurFade key={project.title} delay={index * 0.05} inView>
                <ProjectCard {...(project as ProjectCardProps)} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id={SECTION.HONORS}>
        <div className="flex min-h-0 flex-col gap-4">
          <BlurFade inView>
            <h2 className="text-xl font-bold">{SECTION.label(SECTION.HONORS)}</h2>
          </BlurFade>
          <BlurFade inView>
            <Card className="border hover:shadow-lg transition-all duration-300">
              <CardHeader className="gap-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Award className="size-4" />
                  竞赛 · 软著 · 认证
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  华北五省国一、计挑赛全国决赛二等奖、3 项软著，以及华为 HCIA-AI / Agent / Coding 微认证、达摩院训练师、飞书 Agent 等。点击下方按钮以弹窗浏览证书原件。
                </CardDescription>
                <RippleButton size="sm" className="gap-2 w-fit" onClick={openHonors}>
                  <Award className="size-4" />
                  打开荣誉墙
                </RippleButton>
              </CardHeader>
            </Card>
          </BlurFade>
        </div>
      </section>

      <section id={SECTION.BLOG}>
        <div className="flex min-h-0 flex-col gap-4">
          <BlurFade inView>
            <h2 className="text-xl font-bold">{SECTION.label(SECTION.BLOG)}</h2>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3">
            {data.posts.map((postItem, postIndex) => (
              <BlurFade key={postItem.href} delay={postIndex * 0.05} inView>
                <Link href={postItem.href} target="_blank" rel="noopener noreferrer">
                  <Card className="border hover:shadow-lg transition-all duration-300">
                    <CardHeader className="gap-2">
                      <CardTitle className="text-sm sm:text-base flex items-center gap-2">
                        {postItem.title}
                        <ExternalLink className="size-3.5 shrink-0 opacity-60" />
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm leading-relaxed">
                        {postItem.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </BlurFade>
            ))}
          </div>
          <BlurFade inView>
            <Link href={blogUrl} target="_blank" rel="noopener noreferrer">
              <RippleButton size="sm" variant="outline" className="gap-2 w-fit">
                <ExternalLink className="size-4" />
                更多文章 · {blogUrl.replace("https://", "")}
              </RippleButton>
            </Link>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
