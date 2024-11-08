<script lang="ts">
    import { shuffledActions } from "$lib/actions";

    const chosenPattern: string[] = $state([]);
    
    let userid = $state("");

    function addAction(action: string) {
        chosenPattern.push(action);
    }

    function resetPattern() {
        chosenPattern.length = 0;
    }

    function savePattern() {
        localStorage.setItem(`${userid}-auth`, JSON.stringify(chosenPattern));
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
        {#each shuffledActions() as action}
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

    <button onclick={resetPattern}>Reset Pattern</button>
    <button onclick={savePattern}>Save Pattern</button>
    or 
    <a href="/auth">Verify Pattern</a>
</div>
