<script>
  export let showOnPx = 150;
  let hidden = true;

  function goTop() {
    document.body.scrollIntoView({behavior: "smooth"});
  }

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<style>
  .back-to-top {
    opacity: 1;
    /* transition: opacity 0.5s, visibility 0.5s; */
    position: fixed;
    z-index: 999;
    right: 5%;
    bottom: 75px;
    cursor:pointer;
    -webkit-border-radius:60px;
    -moz-border-radius:60px;
    text-indent:-9999px;

    user-select: none;
    color: white;
    background-color: var(--text-tertiary);
  }

  .back-to-top span { 
    position:absolute;
    top:50%;
    left:50%;
    margin-left:-8px;
    margin-top:-12px;
    height:0;
    width:0;
    border:8px solid transparent;
    border-bottom-color:var(--text-tertiary);
  }

  .back-to-top:hover { 
    background-color:#e74c3c;
    opacity:1;filter:"alpha(opacity=100)";
    -ms-filter:"alpha(opacity=100)";
  }

  .back-to-top.hidden {
    opacity: 0;
    visibility: hidden;
  }
</style>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top" on:click={goTop} class:hidden><span></span></div>
