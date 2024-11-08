<script lang="ts">
    import { shuffledActions } from "$lib/actions";

    const chosenPattern: string[] = $state([]);
    
    let userid = $state("");

    let saved = $state(false);
    let reset = $state(false);

    let actions = $state(shuffledActions());

    function addAction(action: string) {
        chosenPattern.push(action);
    }

    function resetPattern() {
        chosenPattern.length = 0;
        reset = true;
        saved = false;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => reset = false, 3000);
    }

    let timeout = 0;

    function savePattern() {
        localStorage.setItem(`${userid}-auth`, JSON.stringify(chosenPattern));
        saved = true;
        reset = false;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => saved = false, 3000);
    }
</script>

<div class="container">
    <div class="field">
        <label for="input">User ID</label>
        <input class="input" type="text" placeholder="Enter your user ID" bind:value={userid} />
    </div>

    <h2>Select Your Activity Pattern</h2>
    <p>Choose actions that will serve as your authentication pattern.</p>

    <div class="button-group">
        {#each actions as action}
            <button class="action" onclick={() => addAction(action.name)}>{action.name}{@html action.icon}</button>
        {/each}
    </div>

    <h3>Selected Pattern:</h3>
    <ul>
        {#each chosenPattern as action}
            <li>
                {action} 
                <button aria-label="delete" class="del" onclick={() => chosenPattern.splice(chosenPattern.indexOf(action), 1)}>
                    <i class="fas fa-trash"></i>
                </button>
            </li>
        {/each}
    </ul>

    {#if reset}
        <p class="error">Pattern reset.</p>
    {/if}
    {#if saved}
        <p class="success">Pattern saved successfully.</p>
    {/if}

    <button onclick={resetPattern}>Reset Pattern</button>
    <button onclick={savePattern}>Save Pattern</button>
    or 
    <a href="/auth">Verify Pattern</a>
</div>
