<script>
  import Message from '$components/Message.svelte';
  import config from '$src/config.json';

  let messageUpdateNav = '';
  let messageUpdateSeo = '';

  export let navBar;

  const handleNavBarClick = () => {
    const collapse = document.getElementsByClassName("navbar-collapse");
    if (collapse[0]) {
      collapse[0].classList.remove('show');
    }
  }
</script>

{#if messageUpdateNav}
  <Message color='danger'>{messageUpdateNav}</Message>
{/if}
{#if messageUpdateSeo}
  <Message color='danger'>{messageUpdateSeo}</Message>
{/if}

<!-- NavBar to display -->
<nav class={`navbar fixed-top navbar-expand-${navBar.STYLE.expand} navbar-${navBar.STYLE.color} bg-${navBar.STYLE.theme}`}>
  <div class="container-fluid">
    <a class='navbar-brand' href="/">
      <img 
        class='img-fluid' 
        style={navBar.BRAND.LOGO.style} 
        src={config.STATIC_SERVER_URL + navBar.BRAND.LOGO.path} 
        alt={navBar.BRAND.LOGO.alt}
      />
    </a>
    <div class='mx-auto d-none d-lg-flex align-items-center'>
      {#each navBar.SOCIAL_NETWORKS as item}
        <div class={`fw-bold ${navBar.STYLE.SOCIAL_NETWORKS.bootstrapClass}`}>
          <a class="" target={item.target} href={item.redirect}>
            <img 
              style={navBar.STYLE.SOCIAL_NETWORKS.style} 
              src={config.STATIC_SERVER_URL + item.icon} 
              alt={item.alt} 
            />
          </a>
        </div>
        <!-- <div class="mx-3">
          <a target={item.target} href={item.redirect}>
            <i 
              class={item.bootstrapClass}
              style={navBar.STYLE.SOCIAL_NETWORKS.style}
            ></i>
          </a>
        </div> -->
      {/each}
    </div>
    <button 
      class="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto align-items-center">
        {#each navBar.TITLE as item, ind}
        <li class="nav-item active">
          <a 
            class={`nav-link ${ind === navBar.TITLE.length-1 ? 'text-outremer' : navBar.STYLE.TITLE.bootstrapClass}`}
            href={item.url}
            style={navBar.STYLE.TITLE.style}
            aria-current="page" 
            on:click={() => handleNavBarClick()}
          >{item.name.toString()}</a>
        </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

<style>
  .nav-item:last-child {
    background-color: white;
    border-radius: 8px;
    color: #3C3F78;
  }
</style>