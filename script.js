const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchUserProfile() {
    await delay(1000);
    if (Math.random() < 0.2) throw new Error("Fetch user profile failed to load");
    return { gameId: 905, userName: "Vinsanity905"}; 
}

async function fetchPosts() {
    await delay(1000);
    if (Math.random() < 0.2) throw new Error("Fetch posts failed to load");
    return [{ riotId: 123, game: "League of Legends"}, { riotId: 456, game: "Valorant"}]; 
    
}

async function fetchComments() {
    await delay(1000);
    if (Math.random() < 0.2) throw new Error("Fetch comments failed to load");
    return [{ comment: "League of Legends is the best MOBA game."}, { comment: "Valorant is the best FPS game."}];
}

async function fetchSequentially() {
    try {

        console.log("Function is loading sequentially...")

        const userProfile = await fetchUserProfile();
        console.log("User Profile Loaded:", userProfile);

        const posts = await fetchPosts();
        console.log("Posts loaded:", posts);

        const comments = await fetchComments();
        console.log("Comments loaded:", comments);

        return { userProfile, posts, comments};
    } catch (error) {
        console.error("Function failed to load:", error.message);
    }

}

async function fetchInParallel() {
    try {
      console.log("Parallel funtion is loading...");
  
      const [userProfile, posts, comments] = await Promise.all([
        fetchUserProfile(),
        fetchPosts(),
        fetchComments(),
      ]);
  
      console.log("Fetched data in parallel:", { userProfile, posts, comments });
  
      return { userProfile, posts, comments };
    } catch (error) {
      console.error("Error in parallel fetching:", error.message);
    }
  }

async function getUserContent() {
    
    console.log("Loading user content...");
  
    try {
      const userProfile = await fetchUserProfile();
      console.log("User profile retrieved:", userProfile);
  
      const posts = await fetchPosts();
      console.log("Posts retrieved:", posts);
  
      const comments = await fetchComments();
      console.log("Comments retrieved:", comments);
  
      console.log("All data retrieved:", { userProfile, posts, comments });
    } catch (error) {
      console.error("Error fetching user content:", error.message);
    }
  }

(async () => {
    console.log("Sequential Fetch");
    await fetchSequentially();
  
    console.log("\n Parallel Fetch");
    await fetchInParallel();
  
    console.log("\n getUserContent");
    await getUserContent();
  })();
