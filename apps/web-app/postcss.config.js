module.exports = {
  plugins: {
    // postcss-import must run before tailwindcss. Without it the @import rules
    // in globals.css are never inlined, and CSS forbids @import after any other
    // rule -- so the browser/PostCSS rejects the sheet and every route 500s.
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
