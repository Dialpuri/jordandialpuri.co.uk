import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const back_to_top_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.back-to-top.svelte-r92lfr.svelte-r92lfr{opacity:1;position:fixed;z-index:999;right:5%;bottom:75px;cursor:pointer;-webkit-border-radius:60px;-moz-border-radius:60px;text-indent:-9999px;user-select:none;color:white;background-color:var(--text-tertiary)}.back-to-top.svelte-r92lfr span.svelte-r92lfr{position:absolute;top:50%;left:50%;margin-left:-8px;margin-top:-12px;height:0;width:0;border:8px solid transparent;border-bottom-color:var(--text-tertiary)}.back-to-top.svelte-r92lfr.svelte-r92lfr:hover{background-color:#e74c3c;opacity:1;filter:"alpha(opacity=100)";-ms-filter:"alpha(opacity=100)"}.back-to-top.hidden.svelte-r92lfr.svelte-r92lfr{opacity:0;visibility:hidden}',
  map: null
};
const Back_to_top = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 150 } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css$1);
  return `

<div class="${["back-to-top svelte-r92lfr", "hidden"].join(" ").trim()}"><span class="${"svelte-r92lfr"}"></span></div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".navbar_.svelte-1xdsxld.svelte-1xdsxld{display:flex;align-items:center;justify-content:space-between;padding-inline:1rem;background-color:var(--bg-2);border-bottom:var(--text-tertiary) solid 1px}.navbar-links.svelte-1xdsxld a.svelte-1xdsxld{color:black}li.svelte-1xdsxld.svelte-1xdsxld{list-style:none}a.svelte-1xdsxld.svelte-1xdsxld{text-decoration:none}.menu.svelte-1xdsxld.svelte-1xdsxld{display:flex;gap:1em;font-size:18px}.menu.svelte-1xdsxld li.svelte-1xdsxld:hover{background-color:var(--text-tertiary);color:black;border-radius:5px;transition:0.3s ease}.menu.svelte-1xdsxld li.svelte-1xdsxld{padding:5px}input[type=checkbox].svelte-1xdsxld.svelte-1xdsxld{display:none}.hamburger.svelte-1xdsxld.svelte-1xdsxld{display:none;font-size:24px;user-select:none;color:white}footer.svelte-1xdsxld.svelte-1xdsxld{width:100%;background-color:var(--bg-1);height:5vh;text-align:center;vertical-align:middle;line-height:5vh;color:var(--text-primary)\n        /* justify-content: center; */\n    }@media(max-width: 768px){.menu.svelte-1xdsxld.svelte-1xdsxld{display:none;position:absolute;background-color:var(--bg-2);right:0;left:0;text-align:center}.menu.svelte-1xdsxld li.svelte-1xdsxld:hover{display:inline-block;background-color:var(--text-tertiary);transition:0.3s ease}input[type=checkbox].svelte-1xdsxld:checked~.menu.svelte-1xdsxld{display:block}.hamburger.svelte-1xdsxld.svelte-1xdsxld{display:block;color:var(--bg-1)}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"navbar_ svelte-1xdsxld"}"><h1 style="${""}"><span style="${"color:var(--text-secondary)"}">Jordan </span>Dialpuri</h1>


    <ul class="${"navbar-links svelte-1xdsxld"}"><input type="${"checkbox"}" id="${"checkbox_toggle"}" class="${"svelte-1xdsxld"}">

        <label for="${"checkbox_toggle"}" class="${"hamburger svelte-1xdsxld"}">☰</label>

        <div class="${"menu svelte-1xdsxld"}"><li class="${"svelte-1xdsxld"}"><a href="${"/"}" class="${"svelte-1xdsxld"}"><span>Home</span></a></li>
            
            <li class="${"svelte-1xdsxld"}"><a href="${"#projects"}" class="${"svelte-1xdsxld"}"><span>Projects</span></a></li>
            <li class="${"svelte-1xdsxld"}"><a href="${"#about"}" class="${"svelte-1xdsxld"}"><span>About</span></a></li>
            <li class="${"svelte-1xdsxld"}"><a href="${"#contact"}" class="${"svelte-1xdsxld"}"><span>Contact</span></a></li>
            <a href="${"https://www.github.com/dialpuri"}" class="${"svelte-1xdsxld"}"><img style="${"max-height: 2rem;"}" src="${"images/github.png"}" alt="${"Github Logo"}"></a>
            <a href="${"https://www.linkedin.com/in/jordan-dialpuri/"}" class="${"svelte-1xdsxld"}"><img style="${"max-height: 2rem;"}" src="${"images/linkedin.png"}" alt="${"Linkedin Logo"}"></a></div></ul></div>

${slots.default ? slots.default({}) : ``}

<footer class="${"svelte-1xdsxld"}">© Jordan Dialpuri 2023  
</footer>

${validate_component(Back_to_top, "BackToTop").$$render($$result, {}, {}, {})}









`;
});
export {
  Layout as default
};
