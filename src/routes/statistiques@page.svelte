<script>

    import { browser } from "$app/env";
    import { goto } from "$app/navigation";

    import config from "../config.json";
    import packageConfig from "../../package.json"; 

    import { userInfo, statisticsSendRequest, statisticsAllPages } from "../store";

    import { getStatistics, getAllpages } from "../actions/logsActions";
    import CustomContainer from "../components/CustomContainer.svelte";
    import Message from "../components/Message.svelte";
    import Loading from "../components/Loading.svelte";
    import Chart from "chart.js/auto/auto.js";
    import { onMount } from "svelte";

    $: {
        let isAuthenticate = $userInfo && $userInfo.profil === 'admin' ? true : false;
        if (browser && !isAuthenticate) { goto('/'); }
    }
    
    // let type = '';
    // let target = '';
    let startDate = (new Date(Date.now())).toISOString().substring(0,10);
    let endDate = (new Date(Date.now())).toISOString().substring(0,10);
    let ctx = null;
    let statisticsChart;
    let selectedPages = [];    

    onMount(() => {
        getStatistics("", "", []);

        ctx = document.getElementById('statisticsChart').getContext('2d');
        statisticsChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: '# of Views',
                        data: [],
                        backgroundColor: [],
                        borderColor: [],
                        borderWidth: 1,
                    }]
                }
            });
    });

    $:{
        if ($statisticsSendRequest.success) {
            statisticsChart.data = $statisticsSendRequest.data;
            if ($statisticsSendRequest.data && $statisticsSendRequest.data.datasets.length > 0) {
                $statisticsSendRequest.data.datasets.sort((first, second) => {
                    const occurenceFirst = first.data.reduce((prev, current) => prev + current);
                    const occurenceSecond = second.data.reduce((prev, current) => prev + current);
                    if (occurenceSecond > occurenceFirst) {
                        return 1;
                    } else if (occurenceSecond < occurenceFirst) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
            }
            statisticsChart.update();
        }
    };

    const submitHandler = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
        } else {
            e.preventDefault(); // to avoid page to refresh
            getStatistics(startDate, endDate, selectedPages.join('-SEP-'));
        }
    };

</script>

<CustomContainer>
    
    <h1 class='mt-2'>Statistics</h1>

    <form id='statistics' class="statistics-form" on:submit={submitHandler}>
            
        <div class="row align-items-center mb-3">

            <div class="col-sm-12 col-md-6">
                <label for="startDateInput" class="form-label">Date de début</label>
                <input type="date" class="form-control" id="startDateInput" required bind:value={startDate}>
            </div>
            <div class="col-sm-12 col-md-6">
                <label for="endDateInput" class="form-label">Date de fin</label>
                <input type="date" class="form-control" id="endDateInput" required bind:value={endDate}>
            </div>
        </div>
        {#if $statisticsSendRequest.data.datasets}
            <div class='row mb-3'>
                <div class="col">
                    <select class="form-select" multiple aria-label="multiple select pages" bind:value={selectedPages}>
                        {#each $statisticsSendRequest.data.datasets as page}
                            <option value={page.label}>{page.label} ({page.data.reduce((prev, current) => prev + current)} views)</option>
                        {/each}
                    </select>
                </div>
            </div>
        {/if}
        
        <div class='row'>
            <div class='col text-start'>
                <button type="submit" class="btn btn-primary">Valider</button>
            </div>
        </div>
    </form>

    {#if $statisticsSendRequest.loading}
        <Loading number={3} color="primary" />
    {/if}
    {#if $statisticsSendRequest.message}
        <Message color={$statisticsSendRequest.success ? "primary" : "danger"}>{$statisticsSendRequest.message}</Message>
    {/if}
    <div class='row my-3'>
        <div class='col bg-light rounded p-5'>
            <canvas id="statisticsChart"></canvas>
        </div>
    </div>

    <h1>Application version</h1>
    <p>frontend : {packageConfig.version} in {config.SVELTE_ENV} mode</p>
    <p>backend : {$statisticsAllPages.application.version} in {$statisticsAllPages.application.mode} mode</p>

</CustomContainer>