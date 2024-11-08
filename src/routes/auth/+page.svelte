<script lang="ts">
    import { shuffledActions } from "$lib/actions";

    let userId = $state("");
    let savedPattern: string[] = $state([]);
    let userInputPattern: string[] = $state([]);

    let loadedError = $state("");
    let success = $state(false);
    let result = $state("");

    function loadPattern() {
        if (userId === "") {
            loadedError = "Please enter a user ID.";
            return;
        }
        const storedPattern = localStorage.getItem(`${userId}-auth`);
        if (storedPattern) {
            savedPattern = JSON.parse(storedPattern);
            loadedError = "";
        } else {
            loadedError = "No pattern found for this user ID.";
        }
    }

    function addAction(action: string) {
        userInputPattern.push(action);
    }

    function checkPattern() {
        if (JSON.stringify(userInputPattern) === JSON.stringify(savedPattern)) {
            result = "Authentication successful!";
            success = true;
        } else {
            result = "Authentication failed. Please try again.";
            success = false;
            userInputPattern = [];
        }
    }
</script>

<div class="container">
    <div class="field">
        <label for="input">User ID</label>
        <input class="input" type="text" placeholder="Enter your user ID" bind:value={userId} />
        <button onclick={loadPattern}>Load Pattern</button>
    </div>

    {#if loadedError}
        <p class="error">{loadedError}</p>
    {/if}
    {#if savedPattern.length > 0}
        <p class="success">Pattern loaded successfully.</p>
    {/if}

    <h2>Authenticate with Your Activity Pattern</h2>
    <p>Repeat the pattern you set during setup.</p>

    <div class="button-group">
        {#each shuffledActions() as action}
            <button class="action" onclick={() => addAction(action.name)}>{action.name}{@html action.icon}</button>
        {/each}
    </div>

    <h3>Your Input:</h3>
    <ul>
        {#each userInputPattern as action}
            <li>
                {action}
                <button aria-label="delete" class="del" onclick={() => userInputPattern.splice(userInputPattern.indexOf(action), 1)}>
                    <i class="fas fa-trash"></i>
                </button>
            </li>
        {/each}
    </ul>

    {#if result != ""}
        <p class={success ? "success" : "error"}>{result}</p>
    {/if}

    <button onclick={checkPattern}>Verify Pattern</button>
    or
    <a href="/setup">Setup authentication</a>
</div>