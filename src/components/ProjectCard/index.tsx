import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { RippleButton } from "@/components/animate-ui/components/buttons/ripple";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import pkg from "#/package.json";

export interface ProjectCardProps {
  title: string;
  href?: string;
  description: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  repo?: string;
  className?: string;
}

/**
 * 项目卡片：封面图/视频 + 标题描述 + 标签与外链
 */
export default function ProjectCard({
  title,
  href,
  description,
  tags,
  image,
  video,
  repo,
  className,
}: ProjectCardProps) {
  const githubUsername =
    process.env.NEXT_PUBLIC_GITHUB_USERNAME ||
    (pkg.author as { github?: string }).github ||
    "DoublePeach";
  const displayHost = href
    ?.replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");

  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full gap-2 rounded-lg py-0">
      <Link
        href={href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("relative block cursor-pointer overflow-hidden", className)}
      >
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-44 w-full object-cover object-top"
          />
        ) : null}
        {!video && image ? (
          <div className="relative h-44 w-full bg-muted">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center transition-transform duration-300 ease-out hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : null}
        {!video && !image ? (
          <div className="h-44 w-full bg-linear-to-br from-[#A97CF8]/30 via-[#F38CB8]/20 to-[#FDCC92]/30" />
        ) : null}
        {displayHost ? (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-black/65 to-transparent flex items-end p-2 pl-3">
            <span className="text-white/90 font-medium text-[12px] tracking-wide truncate">
              {displayHost}
            </span>
          </div>
        ) : null}
      </Link>
      <CardHeader className="px-3 py-1 border-none gap-2">
        <CardTitle className="text-base flex items-center gap-2">
          <div className="relative flex">
            <div className={cn("size-2 rounded-full", "bg-green-500 dark:bg-green-400")} />
            <div
              className={cn(
                "absolute inset-0 size-2 rounded-full animate-ping opacity-75",
                "bg-green-500 dark:bg-green-400"
              )}
            />
          </div>
          <span>{title}</span>
        </CardTitle>
        <div className="prose max-w-full text-pretty text-xs text-muted-foreground overflow-hidden line-clamp-3 wrap-break-word">
          {description}
        </div>
      </CardHeader>
      {tags && tags.length > 0 ? (
        <div className="flex flex-wrap gap-1 mt-auto px-3">
          {tags.map((tagName) => (
            <Badge variant="secondary" size="sm" key={tagName}>
              {tagName}
            </Badge>
          ))}
        </div>
      ) : null}
      <div className="flex flex-row flex-wrap items-start gap-1 px-3 pb-3">
        {href ? (
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <RippleButton size="xs">
              <Globe />
              Website
            </RippleButton>
          </Link>
        ) : null}
        {repo ? (
          <Link
            href={`https://github.com/${githubUsername}/${repo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RippleButton size="xs" variant="outline">
              GitHub
            </RippleButton>
          </Link>
        ) : null}
      </div>
    </Card>
  );
}
