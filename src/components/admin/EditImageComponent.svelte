<script>
    import { updateStyle } from "../../utils/styleFunctions";
    import config from '../../config.json';
    import Message from "../Message.svelte";
    import Loading from "../Loading.svelte";
    import { uploadFile } from "../../actions/uploadActions";
    import { imagesFormats } from "../../constants/files";
    
    export let values;
    export let styles;

    let messageUploadImage = null;
    let loadingImage = false;

    $: shadow = styles.filter(x => x.name === 'shadow')[0] && styles.filter(x => x.name === 'shadow')[0].value;
    $: rounded = styles.filter(x => x.name === 'rounded')[0] && styles.filter(x => x.name === 'rounded')[0].value;
    $: textAlign = styles.filter(x => x.name === 'text-align')[0] && styles.filter(x => x.name === 'text-align')[0].value;
    
    $: transformR = styles.filter(x => x.name === 'transformR')[0] ? styles.filter(x => x.name === 'transformR')[0].value : 0;
    $: scaleXY = styles.filter(x => x.name === 'scaleXY')[0] ? styles.filter(x => x.name === 'scaleXY')[0].value : 1;
    $: width = styles.filter(x => x.name === 'width')[0] ? styles.filter(x => x.name === 'width')[0].value : 100;

    $: paddingL = styles.filter(x => x.name === 'paddingL')[0] && styles.filter(x => x.name === 'paddingL')[0].value || 0;
    $: paddingR = styles.filter(x => x.name === 'paddingR')[0] && styles.filter(x => x.name === 'paddingR')[0].value || 0;
    $: paddingT = styles.filter(x => x.name === 'paddingT')[0] && styles.filter(x => x.name === 'paddingT')[0].value || 0;
    $: paddingB = styles.filter(x => x.name === 'paddingB')[0] && styles.filter(x => x.name === 'paddingB')[0].value || 0;


    const onChangeHandler = async(index, e) => {

        loadingImage = true;
        const file = e.target.files[0];
        const fileName = Date.now() + '_' + file.name;
        
        const { error, path } = await uploadFile(file, fileName, values[index].url, imagesFormats);

        messageUploadImage = error;
        values[index].url = `/uploads/${fileName}`;
        values = values;

        loadingImage = false;
    };

</script>

{#if messageUploadImage}
    <Message color='danger'>{messageUploadImage}</Message>
{/if}
{#if loadingImage}
      <Loading />
{/if}

<input class="form-control" type='file' name='image-url' on:change={(e) => onChangeHandler(0, e)} />
<input class="form-control my-3" type='text' name='text' bind:value={values[0].caption} placeholder='[option] Légende'/>
<input class="form-control my-3" type='text' name='text' bind:value={values[0].substitution} placeholder='Texte de substitution'/>
<input class="form-control my-3" type='text' name='text' bind:value={values[0].redirection} placeholder='[option] url de redirection *'/>
<p>* exemple : https://url_cible.com Pour une url externe au site <br>* exemple : /edito pour une url interne au site</p>
<div class='row py-1'><div class='col'>
    <button class={`px-2 border rounded btn ${textAlign === "text-start" ? "btn-primary border border-secondary" : "btn-light"}`} on:click={() => styles = updateStyle(styles, {name:'text-align', value:'text-start'})}><i class='bi bi-text-left' /></button>
    <button class={`px-2 border rounded btn ${textAlign === "text-center" ? "btn-primary border border-secondary" : "btn-light"}`} on:click={() => styles = updateStyle(styles, {name:'text-align', value:'text-center'})}><i class='bi bi-text-center' /></button>
    <button class={`px-2 border rounded btn ${textAlign === "text-end" ? "btn-primary border border-secondary" : "btn-light"}`} on:click={() => styles = updateStyle(styles, {name:'text-align', value:'text-end'})}><i class='bi bi-text-right' /></button>
    <button class={`px-2 border rounded btn ${shadow === "shadow" ? "btn-primary border border-secondary" : "btn-light"}`} on:click={() => styles = updateStyle(styles, {name:'shadow', value:'shadow'})}><i class='bi bi-back' /></button>
    <button class={`px-2 border rounded btn ${shadow === "" ? "btn-primary border border-secondary" : "btn-light"}`} on:click={() => styles = updateStyle(styles, {name:'shadow', value:''})}>No shadow</button>
    <button class={`px-2 border rounded btn ${rounded === "" ? "btn-primary border border-secondary" : "btn-light"}`} on:click={() => styles = updateStyle(styles, {name:'rounded', value:''})}><i class='bi bi-square' /></button>
    <button class={`px-2 border rounded btn ${rounded === "rounded-3" ? "btn-primary border border-secondary" : "btn-light"}`} on:click={() => styles = updateStyle(styles, {name:'rounded', value:'rounded-3'})}><i class='bi bi-app' /></button>
    <button class={`px-2 border rounded btn ${rounded === "rounded-circle" ? "btn-primary border border-secondary" : "btn-light"}`} on:click={() => styles = updateStyle(styles, {name:'rounded', value:'rounded-circle'})}><i class='bi bi-circle' /></button>
</div></div>
<div class="row py-2 gx-1">
    <p class="m-0 border-bottom">Padding</p>
    <div class='col'>
        <span>Left : </span>
        <input type='number' step={1} min={0} class='form-control' value={paddingL} on:change={(e) => styles = updateStyle(styles, {name:'paddingL', value:e.target.value})} />
    </div>
    <div class='col'>
        <span>Right : </span>
        <input type='number' step={1} min={0} class='form-control' value={paddingR} on:change={(e) => styles = updateStyle(styles, {name:'paddingR', value:e.target.value})} />
    </div>
    <div class='col'>
        <span>Top : </span>
        <input type='number' step={1} min={0} class='form-control' value={paddingT} on:change={(e) => styles = updateStyle(styles, {name:'paddingT', value:e.target.value})} />
    </div>
    <div class='col'>
        <span>Bottom : </span>
        <input type='number' step={1} min={0} class='form-control' value={paddingB} on:change={(e) => styles = updateStyle(styles, {name:'paddingB', value:e.target.value})} />
    </div>
</div>
<div class='row py-1 align-items-center'>
    <div class='col-4'>Rotate : </div>
    <div class='col-8'>
        <input class="form-control px-1" type='number' value={transformR} on:change={(e) => styles = updateStyle(styles, {name:'transformR', value: e.target.value})} />
    </div>
</div>
<div class='row py-1 align-items-center'>
    <div class='col-4'>Scale XY : </div>
    <div class='col-8'>
        <input class="form-control px-1" type='number' value={scaleXY} on:change={(e) => styles = updateStyle(styles, {name:'scaleXY', value:e.target.value})} step={0.05} />
    </div>
</div>
<div class='row py-1 align-items-center'>
    <div class='col-4'>Width (%) : </div>
    <div class='col-8'>
        <input class="form-control px-1" type='number' value={width} on:change={(e) => styles = updateStyle(styles, {name:'width', value:e.target.value})} step={0.5} min={0} max={100} />
    </div>
</div>