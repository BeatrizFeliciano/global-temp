import { c as create_ssr_component } from './ssr-5133a634.js';

const css = {
  code: ".app.svelte-1xhdfyv.svelte-1xhdfyv{display:flex;flex-direction:column;min-height:100vh;font-family:'Montserrat', sans-serif}main.svelte-1xhdfyv.svelte-1xhdfyv{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-1xhdfyv.svelte-1xhdfyv{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}footer.svelte-1xhdfyv a.svelte-1xhdfyv{font-weight:bold;color:#D1C3BE}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-1xhdfyv"><main class="svelte-1xhdfyv">${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-1xhdfyv" data-svelte-h="svelte-1pd359d"><p>Data from <a href="https://github.com/rfordatascience/tidytuesday/tree/master/data/2023/2023-07-11" class="svelte-1xhdfyv">Tidy Tuesday</a></p></footer> </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-842b14a2.js.map
