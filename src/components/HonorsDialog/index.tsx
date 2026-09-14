"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

import { useHonorsDialog } from "./context";

import { RippleButton } from "@/components/animate-ui/components/buttons/ripple";
import HonorCard from "@/components/HonorCard";
import { Badge } from "@/components/ui/badge";
import { HONOR_TAGS, honors, type HonorTag } from "@/data/honors";

/**
 * 校园荣誉墙弹框：左侧垂直标签筛选，右侧证书卡片列表
 */
export default function HonorsDialog() {
  const { isOpen, closeHonors } = useHonorsDialog();
  const [activeTag, setActiveTag] = useState<HonorTag | "全部">("全部");

  const filteredHonors = useMemo(() => {
    if (activeTag === "全部") {
      return honors;
    }
    return honors.filter((honorItem) => honorItem.tags.includes(activeTag));
  }, [activeTag]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === "Escape") {
        closeHonors();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeHonors]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="关闭荣誉墙遮罩"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeHonors}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="honors-dialog-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative z-10 flex h-[min(88vh,860px)] w-full max-w-5xl overflow-hidden rounded-2xl border bg-background shadow-2xl"
          >
            <aside className="flex w-24 shrink-0 flex-col gap-2 border-r bg-muted/30 p-3 sm:w-36 sm:p-4">
              <p className="mb-1 px-1 text-[11px] font-medium text-muted-foreground sm:text-xs">
                筛选
              </p>
              <div className="flex flex-1 flex-col gap-2 overflow-y-auto pr-1">
                {HONOR_TAGS.map((tagName) => {
                  const isActive = activeTag === tagName;
                  return (
                    <button
                      key={tagName}
                      type="button"
                      onClick={() => setActiveTag(tagName)}
                      className="text-left"
                    >
                      <Badge
                        variant={isActive ? "primary" : "secondary"}
                        size="sm"
                        className="w-full justify-center whitespace-normal py-2 text-center leading-tight"
                      >
                        {tagName}
                      </Badge>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex items-start justify-between gap-3 border-b px-4 py-3 sm:px-5">
                <div className="min-w-0 space-y-1">
                  <h2 id="honors-dialog-title" className="text-lg font-bold tracking-tight sm:text-xl">
                    校园荣誉与事迹
                  </h2>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    竞赛、软著与专业认证 · 当前 {filteredHonors.length} 项
                  </p>
                </div>
                <RippleButton
                  variant="ghost"
                  size="icon"
                  aria-label="关闭荣誉墙"
                  className="shrink-0 rounded-full"
                  onClick={closeHonors}
                >
                  <X className="size-5" />
                </RippleButton>
              </div>

              <div className="flex-1 overflow-y-auto p-4 sm:p-5">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {filteredHonors.map((honorItem) => (
                    <HonorCard key={honorItem.id} honor={honorItem} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
