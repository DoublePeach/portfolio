/**
 * 站点部署子路径（需与 next.config.ts 中 basePath 保持一致）
 * 注意：Next.js basePath 不能以斜杠结尾
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/portfolio";

/**
 * 为 public 静态资源路径补上 basePath 前缀
 * @param assetPath 以 / 开头的站点内路径，或完整 http(s) URL
 * @returns 带 basePath 的可访问路径
 */
export function withBasePath(assetPath: string): string {
  if (!assetPath) {
    return assetPath;
  }

  if (/^https?:\/\//i.test(assetPath) || assetPath.startsWith("data:")) {
    return assetPath;
  }

  const normalizedPath = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  if (!BASE_PATH || BASE_PATH === "/") {
    return normalizedPath;
  }

  if (normalizedPath === BASE_PATH || normalizedPath.startsWith(`${BASE_PATH}/`)) {
    return normalizedPath;
  }

  return `${BASE_PATH}${normalizedPath}`;
}
