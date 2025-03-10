To repro-

`cd apps/mobile`
`npm start`

Here's what it should look like
![image](https://github.com/user-attachments/assets/046be9dc-ac4e-4fff-bb18-c523b492d6df)

But with a pnpm workspace + EXPO_USE_METRO_WORKSPACE_ROOT=1 + the dependencies listed (copied and pasted from our app)

The dom component no longer loads. 

We use an index.js file in our repo, so the `EXPO_USE_METRO_WORKSPACE_ROOT=1` is needed to find the index.js file. Otherwise it says not found.

![image](https://github.com/user-attachments/assets/50165835-7390-4195-9899-7face854fe33)

The dependencies aren't the issue, the Dom component still loaded with these dependencies. It wasn't until I made a simple pnpm workspace with `EXPO_USE_METRO_WORKSPACE_ROOT=1` that it broke.

My hunch is that this messes up the bundle resolution path, but unsure what the solution is.
