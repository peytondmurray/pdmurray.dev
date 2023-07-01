// must be module.exports, not export defult.
module.exports = function (eleventyConfig: any) {
  eleventyConfig.addExtension('11ty.tsx', {
    key: '11ty.js',
  });

  // dev server doesn't spider js dependencies properly, so opt for hard browsersync with watch.
  eleventyConfig.setServerOptions({
    module: "@11ty/eleventy-server-browsersync",
    snippet: true,
    watch: true,
    server: "_site"
  });
}
