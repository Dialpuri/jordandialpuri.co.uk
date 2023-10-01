<script>
    import { page } from '$app/stores';
</script>

<div class = "fill_screen bg_1 hero">

    <div class = "hero_name">
        <h2>{$page.status}</h2>
        <h1>{$page.error.message}</h1>
    </div>

    <img src = "images/404.png" alt = "Memoji of Jordan Dialpuri"/>

</div>

<style> 
 .bg_1 {
        background-color: var(--bg-1);
    }

    .hero_name {
        display: flex;
        flex-direction: column;
        padding: 1rem;        
        text-align: center;

    }

    .hero_name h1 {
        font-size: 5rem;
        text-align: center;
    }
    .fill_screen {
        width: 100%;
        height: 100vh;
    }

    .hero {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        color : white;
    }

    @media (max-width: 600px) {
        .hero img { display: none}
        .hero_name { text-align: center;}
   
    }
</style>

