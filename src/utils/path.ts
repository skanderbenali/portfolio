/**
 * Utility function to handle asset paths with Next.js basePath
 * This ensures assets work correctly when deployed under a subdirectory like /portfolio
 */
export function getAssetPath(path: string | undefined): string | undefined {
  // If path is undefined or is an external URL (starts with http), return as is
  if (!path || path.startsWith('http')) {
    return path;
  }
  
  // Manually add the basePath in production
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/portfolio' : '';
  
  // Make sure we don't add the basePath twice
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  } else {
    return `${basePath}/${path}`;
  }
}

/**
 * Check if a URL is a Google Drive video URL
 */
export function isGoogleDriveUrl(url: string | undefined): boolean {
  return !!url && (url.includes('drive.google.com') || url.includes('googleusercontent.com'));
}

/**
 * Convert a Google Drive sharing URL to an embed URL
 * Input format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * Output format: https://drive.google.com/file/d/FILE_ID/preview
 */
export function getGoogleDriveEmbedUrl(url: string): string {
  // Extract the file ID from the URL
  const fileIdMatch = url.match(/\/d\/(.+?)(\/|$|\?)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
  }
  return url;
} 