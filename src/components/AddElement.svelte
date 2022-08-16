<script>
  import { recursiveBlankMedias } from "$utils/imageFunctions";
  
  import { copyComponent } from "$src/store";
  import { get } from "svelte/store";
  
  export let action = null;
  export let position = 0;
  export let modalId = null;
  
  let type = '';
  let values = [];
  let styles = [];
  let past = false;
  
  
  const toggle = async(save) => {
    if (action && save) {
      await action({type, values, styles }, position);
    }
    past = false;
  };
  
  const updateValues = () => {
    if (past) {
      let newArrayPast = JSON.parse(JSON.stringify(get(copyComponent))).values;
      recursiveBlankMedias(newArrayPast);
      values = newArrayPast;
      styles = JSON.parse(JSON.stringify(get(copyComponent))).styles;
      type = JSON.parse(JSON.stringify(get(copyComponent))).type;
    } else {
      values=[];
      styles=[];
    }
  }
  
  const tooglePast = () => {
    past = !past;
    updateValues();
  };
  
  const handleClick = (typeComponent) => {
    type = typeComponent;
    updateValues();
  };

  const componentList = [
    { 
      category: 'standard', 
      type: 'layoutComponent', 
      title: "Add a frame in your page to host another components like Text, Image, Video",
      icon: "bi bi-grid-1x2"
    },
    { 
      category: 'standard', 
      type: 'textComponent', 
      title: "Add a text in your page or in your frame (recommended)",
      icon: "bi bi-type"
    },
    { 
      category: 'standard', 
      type: 'imageComponent', 
      title: "Add an image in your page or in your frame (recommended)",
      icon: "bi bi-image"
    },
    { 
      category: 'standard', 
      type: 'videoComponent', 
      title: "Add a video in your page or in your frame (recommended)",
      icon: "bi bi-youtube"
    },
    { 
      category: 'standard', 
      type: 'compressComponent', 
      title: "Upload a compressed file that user can download in your page or in your frame (recommended)",
      icon: "bi bi-file-earmark-arrow-up"
    },
    { 
      category: 'standard', 
      type: 'sousligneComponent', 
      title: "Add a line form in your page or in your frame (recommended)",
      icon: "bi bi-dash"
    },
    { 
      category: 'standard', 
      type: 'multiLayerComponent', 
      title: "Add a multi-layer form in your page or in your frame (recommended)",
      icon: "bi bi-stack"
    },
    { 
      category: 'standard', 
      type: 'buttonComponent', 
      title: "Add a button in your page or in your frame (recommended)",
      icon: "bi bi-hand-index-thumb-fill"
    },
    { 
      category: 'custom', 
      type: 'contactComponent', 
      title: "Add a contact form in your page or in your frame (recommended)",
      icon: "bi bi-envelope"
    },
    { 
      category: 'custom', 
      type: 'carouselComponent', 
      title: "Add a carousel in your page or in your frame (recommended)",
      icon: "bi bi-images"
    },
    { 
      category: 'custom', 
      type: 'infoComponent', 
      title: "Add a component in your page or in your frame (recommended) with information on your event : map, price, others informations",
      icon: "bi bi-geo-alt"
    },
  ]
  
</script>

<div 
  class="modal fade" 
  id={modalId} 
  tabindex="-1" 
  aria-labelledby={`${modalId}Label`} 
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="staticBackdropLabel">Ajouter un contenu</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class='row'>
          <div class='col'>
            <div>
              {#if $copyComponent}
              <div class="form-check form-switch mt-3">
                <input class="form-check-input" type="checkbox" id="flexSwitchPast" checked={past} on:change={tooglePast}>
                <label class="form-check-label" for="flexSwitchPast">Coller ici la forme que vous avez auparavant copié</label>
              </div>  
              {/if}
              {#if !past}
                <div class='mt-3 d-grid gap-2 d-sm-block'>
                  <h3>Standard components: </h3>
                  {#each componentList.filter((component) => component.category === 'standard')  as component}
                    <button 
                      class={`btn ${type === component.type ? 'btn-primary' : 'btn-light'}  btn-lg`} 
                      on:click={() => handleClick(component.type)}
                      data-bs-toggle="tooltip" 
                      data-bs-placement="right" 
                      title={component.title}
                      >
                      <i class={component.icon}></i>
                    </button>
                  {/each}
                </div>

                <div class='mt-3 d-grid gap-2 d-sm-block'>
                  <h3>Custom components: </h3>
                  {#each componentList.filter((component) => component.category === 'custom')  as component}
                    <button 
                      class={`btn ${type === component.type ? 'btn-primary' : 'btn-light'}  btn-lg`} 
                      on:click={() => handleClick(component.type)}
                      data-bs-toggle="tooltip" 
                      data-bs-placement="right" 
                      title={component.title}
                      >
                      <i class={component.icon}></i>
                    </button>
                  {/each}
                </div>
              {/if}
            </div> 
          </div>
        </div>
      </div>
      <div class=modal-footer>
        <button 
          id="modal-add-button"
          type="button" 
          class="btn" 
          on:click={() => toggle(true)}
          data-bs-dismiss="modal"
        >Add</button>
        <button 
          id="modal-cancel-button"
          type="button" 
          class="btn" 
          data-bs-dismiss="modal" 
          on:click={() => toggle(false)}
        >Cancel</button>
      </div>
    </div>
  </div>
</div>

<style>
.modal-content {
    color: white;
    background-color: rgb(88,88,88);
  }
  #modal-add-button {
    background-color: white;
    color: rgb(88, 88, 88);
  }
  #modal-cancel-button {
    background-color: #d1d1d1;
    color: rgb(88, 88, 88);
  }
</style>