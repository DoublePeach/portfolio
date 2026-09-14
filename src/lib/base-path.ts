/**
 * public 静态资源访问前缀（仅作用于图片/视频等静态文件，不影响页面路由）
 * 对应目录：public/portfolio/
 */
export const STATIC_ASSET_PREFIX = "/portfolio";

/**
 * 为 public 静态资源路径补上 /portfolio 前缀
 * @param assetPath 以 / 开头的站点内资源路径，或完整 http(s) URL
 * @returns 可访问的静态资源路径
 */
export function withBasePath(assetPath: string): string {
  if (!assetPath) {
    return assetPath;
  }

  if (/^https?:\/\//i.test(assetPath) || assetPath.startsWith("data:")) {
    return assetPath;
  }

  const normalizedPath = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  if (normalizedPath === STATIC_ASSET_PREFIX || normalizedPath.startsWith(`${STATIC_ASSET_PREFIX}/`)) {
    return normalizedPath;
  }

  return `${STATIC_ASSET_PREFIX}${normalizedPath}`;
}
