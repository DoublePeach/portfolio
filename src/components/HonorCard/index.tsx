"use client";

import Image from "next/image";
import { type FC } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { HonorItem } from "@/data/honors";

type HonorCardProps = {
  /** 荣誉条目 */
  honor: HonorItem;
};

/**
 * 渲染单条荣誉卡片（含证书缩略图、标签与说明）
 * @param honor 荣誉数据
 */
const HonorCard: FC<HonorCardProps> = ({ honor }) => {
  return (
    <Card className="overflow-hidden border hover:shadow-lg transition-all duration-300 gap-0 py-0 h-full">
      {honor.image ? (
        <div className="relative w-full aspect-[4/3] bg-muted">
          <Image
            src={honor.image}
            alt={honor.title}
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      ) : null}
      <CardHeader className="gap-2 px-4 py-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-sm leading-snug">{honor.title}</CardTitle>
          <span className="shrink-0 text-xs tabular-nums text-muted-foreground">{honor.date}</span>
        </div>
        {honor.level ? (
          <Badge variant="secondary" size="sm" className="w-fit">
            {honor.level}
          </Badge>
        ) : null}
        <div className="flex flex-wrap gap-1">
          {honor.tags.map((tagName) => (
            <Badge key={tagName} variant="outline" size="sm">
              {tagName}
            </Badge>
          ))}
        </div>
        <CardDescription className="text-xs leading-relaxed">{honor.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default HonorCard;
