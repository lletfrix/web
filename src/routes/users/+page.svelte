<script>
    import UserCard from "$lib/components/user/UserCard.svelte";
    export let data;
</script>

<h1>Users</h1>

<p>Here it is the list of users:</p>

<ul>
    {#each data.users as user}
    <li>
        <UserCard {...user}/>
    </li>
    {/each}
</ul>
