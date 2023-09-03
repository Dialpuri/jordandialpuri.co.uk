import { g as getContext, c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/index.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bg_1.svelte-1pcm39c.svelte-1pcm39c{background-color:var(--bg-1)}.hero_name.svelte-1pcm39c.svelte-1pcm39c{display:flex;flex-direction:column;padding:1rem;text-align:center}.hero_name.svelte-1pcm39c h1.svelte-1pcm39c{font-size:5rem;text-align:center}.fill_screen.svelte-1pcm39c.svelte-1pcm39c{width:100%;height:100vh}.hero.svelte-1pcm39c.svelte-1pcm39c{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;justify-content:center;gap:2rem;color:white}@media(max-width: 600px){.hero.svelte-1pcm39c img.svelte-1pcm39c{display:none}.hero_name.svelte-1pcm39c.svelte-1pcm39c{text-align:center}}",
  map: null
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"fill_screen bg_1 hero svelte-1pcm39c"}"><div class="${"hero_name svelte-1pcm39c"}"><h2>${escape($page.status)}</h2>
        <h1 class="${"svelte-1pcm39c"}">${escape($page.error.message)}</h1></div>

    <img src="${"images/404.png"}" alt="${"Memoji of Jordan Dialpuri"}" class="${"svelte-1pcm39c"}">

</div>`;
});
export {
  Error$1 as default
};
