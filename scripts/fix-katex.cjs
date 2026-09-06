const fs = require('fs');
const path = require('path');

/**
 * markstream-vue has a bug where it tries to import KaTeX's mhchem
 * without a file extension, which causes build failures in some
 * environments (like Cloudflare Pages/Nitro).
 * This script fixes it by creating a extensionless copy of the file.
 */
function fixKatex() {
  try {
    const nodeModulesPath = path.join(process.cwd(), 'node_modules');
    const pnpmPath = path.join(nodeModulesPath, '.pnpm');

    if (!fs.existsSync(pnpmPath)) {
      // If not using pnpm, try looking in node_modules/katex directly
      const directKatexPath = path.join(nodeModulesPath, 'katex', 'dist', 'contrib');
      const src = path.join(directKatexPath, 'mhchem.js');
      const dest = path.join(directKatexPath, 'mhchem');

      if (fs.existsSync(src) && !fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
        console.log(`Fixed KaTeX (direct): copied ${src} to ${dest}`);
      }
      return;
    }

    const dirs = fs.readdirSync(pnpmPath);
    const katexDir = dirs.find(d => d.startsWith('katex@'));

    if (!katexDir) {
      console.log('KaTeX not found in .pnpm, skipping fix');
      return;
    }

    const contribPath = path.join(pnpmPath, katexDir, 'node_modules', 'katex', 'dist', 'contrib');
    const src = path.join(contribPath, 'mhchem.js');
    const dest = path.join(contribPath, 'mhchem');

    if (fs.existsSync(src) && !fs.existsSync(dest)) {
      fs.copyFileSync(src, dest);
      console.log(`Fixed KaTeX (pnpm): copied ${src} to ${dest}`);
    } else if (fs.existsSync(dest)) {
      console.log('KaTeX fix already applied');
    } else {
      console.log(`KaTeX source file not found: ${src}`);
    }
  } catch (err) {
    console.error('Error applying KaTeX fix:', err);
    // We don't exit(1) here because this is a non-critical build-time hack
  }
}

fixKatex();
