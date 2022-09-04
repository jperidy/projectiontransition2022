<script>
    import A from "../../routes/pages/[...data]@page.svelte";
import SelecteCity from "./SelecteCity.svelte";
    import Thumbnail from "./Thumbnail.svelte";

    const CITIES = {
        PARIS: "Paris",
        NANTES: 'Nantes',
        TOULOUSE: 'Toulouse',
        BRUXELLES: 'Bruxelles',
    }

    const DAYS = {
        VENDREDI: 'Vendredi 14 octobre',
        SAMEDI: 'Samedi 15 octobre',
        DIMANCHE: 'Dimanche 15 octobre',
    }

    const filmList = [
        { 
            title: 'Le garçon qui dompta le vent',
            author: 'Chiwetel Ejiofor', 
            description: 'description', 
            image: 'garcon-qui-dompta-le-vent.jpg', 
            redirect: '/pages/garcon-qui-dompta-le-vent',
            styles: { color: "text-dark"},
            cities: [
                { city: CITIES.PARIS, day: DAYS.VENDREDI, moment: "14h"}, 
            ]
        },
        { 
            title: 'Soleil vert',
            author: 'Richard Fleischer', 
            description: 'description', 
            image: 'soleil-vert.jpeg', 
            redirect: '/pages/soleil-vert',
            styles: { color: "text-dark"},
            cities: [
                { city: CITIES.PARIS, day: DAYS.VENDREDI, moment: "20h"}, 
            ]
        },
        { 
            title: 'En guerre',
            author: 'Stéphane Brizé', 
            description: 'description', 
            image: 'en-guerre.jpeg', 
            redirect: '/pages/en-guerre',
            styles: { color: "text-dark"},
            cities: [
                { city: CITIES.PARIS, day: DAYS.SAMEDI, moment: "14h"}, 
            ]
        },
        { 
            title: "Les fils de l'homme",
            author: 'Alfonso Cuarón', 
            description: 'description', 
            image: 'les-fils-de-lhomme.png', 
            redirect: '/pages/les-fils-de-l-homme',
            styles: { color: "text-dark"},
            cities: [
                { city: CITIES.PARIS, day: DAYS.SAMEDI, moment: "20h"}, 
            ]
        },
        { 
            title: "Goliath",
            author: 'Frédéric Tellier', 
            description: 'description', 
            image: 'goliath.jpg', 
            redirect: '/pages/goliath',
            styles: { color: "text-dark"},
            cities: [
                { city: CITIES.PARIS, day: DAYS.DIMANCHE, moment: "11h"}, 
            ]
        },
        { 
            title: "Sans filtre",
            author: 'Ruben Östlund', 
            description: 'description', 
            image: 'sans-filtre.jpg', 
            redirect: '/pages/sans-filtre',
            styles: { color: "text-dark"},
            cities: [
                { city: CITIES.PARIS, day: DAYS.DIMANCHE, moment: "11h"}, 
            ]
        },
    ];

    let selectedCity;

</script>

<div class="d-flex flex-column my-4 text-center align-items-center">
    <h1>Programmation 2022</h1>
    <SelecteCity bind:selectedCity/>
</div>

<div class="day-container mx-auto">
    {#each Object.values(DAYS) as day }
        <div class="row mt-3">
            <div class="col">
                <h2 class="text-uppercase text-center text-lg-start">{day}</h2>
            </div>
        </div>
    
        <div class="row">
            {#each filmList.filter(
                (film) => film.cities.find((city) => city.city === selectedCity && city.day === day)
            ) as film}
                <Thumbnail film={{ 
                    ...film, 
                    ...film.cities.find((city) => city.city === selectedCity && city.day === day)
                }} />
            {/each}
        </div>
    {/each}
</div>

<style>
    .day-container {
        max-width: 1200px;
    }
</style>