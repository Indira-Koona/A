let express =require("express");
let cors=require("cors");
let sqlite3=require("sqlite3").verbose();
let { open }=require("sqlite");
let app=express();
let PORT = process.env.PORT ||3000;
app.use(cors());
app.use(express.json());
let db;
(async()=>{
  db=await open({
    filename:"./BD4.5A2/database.sqlite",
    driver:sqlite3.Database,
  });
  })();

async function getAllGames()
{
  let query="SELECT * FROM games";
  let response=await db.all(query,[]);
  return {games:response};
}
app.get('/games',async(req,res)=>{
  try{
    const results=await getAllGames();
    if(results.games.length===0)
    {
      return res.status(404).json({message:"game not found by "});
    }
    return res.status(200).json(results);
  }
  catch(error)
  {
    return res.status(500).json({error:error.message});
  }
});


async function getGamesById(id)
{
  let query="select * from games where id = ?";
  let response=await db.all(query,[id]);
  return {game:response};
}
app.get('/games/details/:id',async(req,res)=>{
  const id=parseInt(req.params.id);
  try{
    const results=await getGamesById(id);
    if(results.game===undefined)
    {
      return res.status(404).json({message:"game not found by "+id});
    }
    return res.status(200).json(results);
  }
  catch(error)
  {
    return res.status(500).json({error:error.message});
  }
});

async function getGamesByGenre(genre)
{
  let query="select * from games where genre = ?";
  let response=await db.all(query,[genre]);
  return {games:response};
}
app.get('/games/genre/:genre',async(req,res)=>{
  const genre=req.params.genre;
  try{
    const results=await getGamesByGenre(genre);
    if(results.games.length===0)
    {
      return res.status(404).json({message:"games not found by "+genre});
    }
    return res.status(200).json(results);
  }
  catch(error)
  {
    return res.status(500).json({error:error.message});
  }
});

async function getGamesByPlatform(platform )
{
  let query="select * from games where platform  = ?";
  let response=await db.all(query,[platform ]);
  return {games:response};
}
app.get('/games/platform/:platform',async(req,res)=>{
  const platform =req.params.platform ;
  try{
    const results=await getGamesByPlatform(platform );
    if(results.games.length===0)
    {
      return res.status(404).json({message:"games not found by "+platform });
    }
    return res.status(200).json(results);
  }
  catch(error)
  {
    return res.status(500).json({error:error.message});
  }
});

async function sortedByRating()
{
  let query="SELECT * FROM games ORDER BY rating DESC ";
  let response=await db.all(query,[]);
  return {games:response};
}
app.get('/games/sort-by-rating',async(req,res)=>{
  try{
    const results=await sortedByRating();
    if(results.games.length===0)
    {
      return res.status(404).json({message:"game not found  "});
    }
    return res.status(200).json(results);
  }
  catch(error)
  {
    return res.status(500).json({error:error.message});
  }
});

async function getAllPlayers()
{
  let query="SELECT * FROM players";
  let response=await db.all(query,[]);
  return {players:response};
}
app.get('/players',async(req,res)=>{
  try{
    const results=await getAllPlayers();
    if(results.players.length===0)
    {
      return res.status(404).json({message:"players not found "});
    }
    return res.status(200).json(results);
  }
  catch(error)
  {
    return res.status(500).json({error:error.message});
  }
});

async function getPlayersById(id) {
  let query = "SELECT * FROM players WHERE id = ?";
  let response = await db.get(query, [id]); 
  return { player: response }; 
}
app.get('/players/details/:id', async (req, res) => {
  const id = parseInt(req.params.id); 
  try {
    const results = await getPlayersById(id);  
    if (!results.player) {  
      return res.status(404).json({ message: "Player not found with ID: " + id });
    }

    return res.status(200).json(results);  
  } catch (error) {
    return res.status(500).json({ error: error.message }); 
  }
});


async function getPlayersByPlatform(platform) {
  let query = "SELECT * FROM players WHERE platform = ?";
  let response = await db.get(query, [platform]); 
  return { players: response }; 
}
app.get('/players/platform/:platform', async (req, res) => {
  const platform = req.params.platform; 
  try {
    const results = await getPlayersByPlatform(platform);  
    if (results.players.length===0) {  
      return res.status(404).json({ message: "Player not found with ID: " + platform });
    }

    return res.status(200).json(results);  
  } catch (error) {
    return res.status(500).json({ error: error.message }); 
  }
});

async function getPlayersByPlatform() {
  let query = "SELECT * FROM players ORDER BY rating DESC ";
  let response = await db.all(query, []); 
  return { players: response }; 
}
app.get('/players/sort-by-rating', async (req, res) => {
  try {
    const results = await getPlayersByPlatform();  
    if (results.players.length===0) {  
      return res.status(404).json({ message: "Player not found with ID: "  });
    }

    return res.status(200).json(results);  
  } catch (error) {
    return res.status(500).json({ error: error.message }); 
  }
});

async function getAllTournaments() {
  let query = "SELECT * FROM tournaments ";
  let response = await db.all(query, []); 
  return { tournaments: response }; 
}
app.get('/tournaments', async (req, res) => {
  try {
    const results = await getAllTournaments();  
    if (results.tournaments.length===0) {  
      return res.status(404).json({ message: "tournaments not found  "  });
    }

    return res.status(200).json(results);  
  } catch (error) {
    return res.status(500).json({ error: error.message }); 
  }
});

async function getAllTournamentsById(id) {
  let query = "SELECT * FROM tournaments WHERE  id = ? ";
  let response = await db.all(query, [id]);
  return { tournaments: response }; 
}
app.get('/tournaments/details/:id', async (req, res) => {
  const id=parseInt(req.params.id);
  try {
    const results = await getAllTournamentsById(id);  
    if (results.tournaments.length===0) {  
      return res.status(404).json({ message: "tournaments not found  " +id });
    }

    return res.status(200).json(results);  
  } catch (error) {
    return res.status(500).json({ error: error.message }); 
  }
});

async function getAllTournamentsByGameId(gameId) {
  let query = "SELECT * FROM tournaments WHERE  gameId = ? ";
  let response = await db.all(query, [gameId]);
  return { tournaments: response }; 
}
app.get('/tournaments/game/:gameId', async (req, res) => {
  const gameId=parseInt(req.params.gameId);
  try {
    const results = await getAllTournamentsByGameId(gameId);  
    if (results.tournaments.length===0) {  
      return res.status(404).json({ message: "tournaments not found  " +gameId });
    }

    return res.status(200).json(results);  
  } catch (error) {
    return res.status(500).json({ error: error.message }); 
  }
});

async function getAllTournamentsByGameId() {
  let query = "SELECT * FROM tournaments WHERE  prizePool >= 2000 ORDER BY prizePool DESC ";
  let response = await db.all(query, []);
  return { tournaments: response }; 
}
app.get('/tournaments/sort-by-prize-pool', async (req, res) => {
  try {
    const results = await getAllTournamentsByGameId();  
    if (results.tournaments.length===0) {  
      return res.status(404).json({ message: "tournaments not found  "  });
    }

    return res.status(200).json(results);  
  } catch (error) {
    return res.status(500).json({ error: error.message }); 
  }
});

app.listen(PORT,()=>console.log("server running on port 3000"));

