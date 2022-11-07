<script>
    export let name = '';
    export let email = '';
</script>

<div class="user-display">
    <p>{name}</p>
    <small>{email}</small>
</div>

<style>
    .user-display {
        border: 1px solid lightblue;
    }
</style>