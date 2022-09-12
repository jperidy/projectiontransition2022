<script>
    export let size = {
        xs: 12,
        sm: 10,
        md: 10,
        lg: 10,
        xl: 10 
    }
</script>

<div class={`container-fluid p-0 m-0 `}>
    <div class="row p-3">
        <div class={`col-${size.xs} offset-${Math.round((12-size.xs)/2)} col-sm-${size.sm} offset-sm-${Math.round((12-size.sm)/2)} col-md-${size.md} offset-md-${Math.round((12-size.md)/2)} col-lg-${size.lg} offset-lg-${Math.round((12-size.lg)/2)} col-xl-${size.xl} offset-xl-${Math.round((12-size.xl)/2)}`}>
            <slot></slot>
        </div>
    </div>
</div>