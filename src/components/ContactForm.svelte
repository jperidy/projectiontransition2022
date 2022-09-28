<script>
    import Message from "./Message.svelte";
    import { sendContactEmail } from '../actions/emailsActions';

    import Loading from "./Loading.svelte";
    import CustomContainer from "./CustomContainer.svelte";
    export let values=[];
    export let styles=[];styles;
    export let isSelected = {select: false, position:null};

    let subject = '';
    let email = '';
    let nom = '';
    let prenom = '';
    let body = '';
    $: emailAction = { success: "", message: "", loading: false }

    $:{
        if (values.length === 0) {
            values.push({
                title: {name: 'title', values:[], styles: []}
            })
        }
    }

    const sendEmailHandler = (e) => {
        emailAction = { ...emailAction, loading: true };
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            emailAction = { ...emailAction, message: "Veuillez vérifier les informations saisies", success: false }
        } else {
            e.preventDefault();
            sendContactEmail({email, subject, body, prenom, nom, type: values[0].type})
                .then((result) => emailAction = result)
                .catch((error) => emailAction = result);
        }
        emailAction = { ...emailAction, loading: false };
    }

</script>

<CustomContainer size={{xs: 12, sm:12, md:12, lg:12}}>
    <div class={`contact-form ${isSelected.select && "border border-3 rounded"}`}>
        <form id='contact' class="row contact-form" on:submit={sendEmailHandler}>
            
            <div class="row align-items-center mb-3">
                <div class="col-sm-12 col-md-6">
                    <label for="exampleInputNom" class="form-label">Votre nom</label>
                    <input type="text" class="form-control" id="exampleInputNom" aria-describedby="nomHelp" placeholder="Votre nom" required bind:value={nom}>
                </div>
                <div class="col-sm-12 col-md-6">
                    <label for="exampleInputPrenom" class="form-label">Votre prénom</label>
                    <input type="text" class="form-control" id="exampleInputPrenom" aria-describedby="emailHelp" placeholder="Votre prénom" required bind:value={prenom}>
                </div>
            </div>
            <div class="row align-items-center mb-3">
                <div class="col-sm-12 col-md-6">
                    <label for="exampleInputSujet" class="form-label">Sujet du message</label>
                    <input type="text" class="form-control" id="exampleInputSujet" aria-describedby="SujetHelp" placeholder="Votre sujet" required bind:value={subject}>
                </div>
                <div class="col-sm-12 col-md-6">
                    <label for="exampleInputEmail1" class="form-label">Votre adresse e-mail</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Votre e-mail" required bind:value={email}>
                </div>
            </div>

            <div class="row mb-3">
                <div class='col'>
                    <label for="emailBody" class="form-label">Votre message</label>
                    <textarea class="form-control" id="emailBody" aria-describedby="bodyHelper" placeholder="Votre message" rows="6" required bind:value={body}></textarea>
                    <div id="bodyHelper" class="form-text">* champs obligatoires</div>
                </div>
            </div>
            <div class='row'>
                <div class='col text-start'>
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </div>
            </div>
        </form>
    
        {#if emailAction.message}
            {#if emailAction.success}
                <Message color='success'>{emailAction.message}</Message>
            {:else}
                <Message color='warning'>{emailAction.message}</Message>
            {/if}
        {/if}
        
        {#if emailAction.loading}
            <Loading color='secondary' number={3} />
        {/if}
    
    </div>
</CustomContainer>
