<script>
    export let values=[];
    export let styles=[];
    export let isSelected = {select: false, position: null};

    $:{
        if (values.length === 0) {
            values.push({type:'buttonComponent', value:'#todo'});
        }
    }
    $:{
        if (!styles.length) {
            styles = [];
        }
    }

    const getStyle = (name, defaultValue) => 
        styles.filter(x => x.name === name)[0] && styles.filter(x => x.name === name)[0].value || defaultValue;

    $: textAlign = styles.filter(x => x.name === 'text-align')[0] && styles.filter(x => x.name === 'text-align')[0].value;
    $: textColor = styles.filter(x => x.name === 'text-color')[0] && styles.filter(x => x.name === 'text-color')[0].value;
    $: bgColor = styles.filter(x => x.name === 'backgroud-color')[0] && styles.filter(x => x.name === 'backgroud-color')[0].value;
    $: bgPrimaryText = styles.filter(x => x.name === 'bgPrimaryText')[0] && styles.filter(x => x.name === 'bgPrimaryText')[0].value;
    $: marginL = getStyle('marginL', 0);
    $: marginR = getStyle('marginR', 0);
    $: marginT = styles.filter(x => x.name === 'marginT')[0] && styles.filter(x => x.name === 'marginT')[0].value || 0;
    $: marginB = styles.filter(x => x.name === 'marginB')[0] && styles.filter(x => x.name === 'marginB')[0].value || 0;
    $: paddingL = styles.filter(x => x.name === 'paddingL')[0] && styles.filter(x => x.name === 'paddingL')[0].value || 0;
    $: paddingR = styles.filter(x => x.name === 'paddingR')[0] && styles.filter(x => x.name === 'paddingR')[0].value || 0;
    $: paddingT = styles.filter(x => x.name === 'paddingT')[0] && styles.filter(x => x.name === 'paddingT')[0].value || 0;
    $: paddingB = styles.filter(x => x.name === 'paddingB')[0] && styles.filter(x => x.name === 'paddingB')[0].value || 0;
    $: fontWeight = styles.filter(x => x.name === 'font-weight')[0] && styles.filter(x => x.name === 'font-weight')[0].value;
    $: fontStyle = styles.filter(x => x.name === 'font-style')[0] && styles.filter(x => x.name === 'font-style')[0].value;
    $: fontFamily = styles.filter(x => x.name === 'fontFamily')[0] && styles.filter(x => x.name === 'fontFamily')[0].value || "";
    $: fontSize = styles.filter(x => x.name === 'fontSize')[0] && styles.filter(x => x.name === 'fontSize')[0].value || "";
    $: rounded = styles.filter(x => x.name === 'rounded')[0] && styles.filter(x => x.name === 'rounded')[0].value;
    $: transformR = styles.filter(x => x.name === 'transformR')[0] ? styles.filter(x => x.name === 'transformR')[0].value : 0;

</script>


<div class='content-container'>
    <div class={`content ${isSelected.select && "border border-3 rounded"}`} >
        <button 
            class={`btn`} 
            style={`text-align: ${textAlign}; font-family: ${fontFamily};${fontSize > 0 ? "font-size: " + fontSize + "rem"  : ""};font-weight: ${fontWeight};font-style: ${fontStyle};transform: rotate(${transformR}deg);margin-left: ${marginL}rem;margin-right: ${marginR}rem;margin-top: ${marginT}rem;margin-bottom: ${marginB}rem;padding-left: ${paddingL}rem;padding-right: ${paddingR}rem;padding-top: ${paddingT}rem;padding-bottom: ${paddingB}rem;`}
        >
            {values[0].value}
        </button>
    </div>
</div>