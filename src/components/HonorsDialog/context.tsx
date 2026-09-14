"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type HonorsDialogContextValue = {
  /** 荣誉墙弹框是否打开 */
  isOpen: boolean;
  /** 打开荣誉墙弹框 */
  openHonors: () => void;
  /** 关闭荣誉墙弹框 */
  closeHonors: () => void;
};

const HonorsDialogContext = createContext<HonorsDialogContextValue | null>(null);

/**
 * 提供荣誉墙弹框开关状态，供首页按钮与底部 Dock 共用
 * @param children 子节点
 */
export function HonorsDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openHonors = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeHonors = useCallback(() => {
    setIsOpen(false);
  }, []);

  const contextValue = useMemo(
    () => ({ isOpen, openHonors, closeHonors }),
    [isOpen, openHonors, closeHonors]
  );

  return (
    <HonorsDialogContext.Provider value={contextValue}>
      {children}
    </HonorsDialogContext.Provider>
  );
}

/**
 * 读取荣誉墙弹框上下文
 * @returns 弹框开关方法与状态
 */
export function useHonorsDialog() {
  const contextValue = useContext(HonorsDialogContext);
  if (!contextValue) {
    throw new Error("useHonorsDialog 必须在 HonorsDialogProvider 内使用");
  }
  return contextValue;
}
