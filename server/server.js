import express from 'express'
import mysql from 'mysql'
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json())
//const port =  8081;


// const db = mysql.createConnection({host:"localhost",
// user:"root",
// password:"",
// database:"seaside_resort"
// })


const db = mysql.createConnection({host:"sql5.freesqldatabase.com",
user:"sql5670603",
password:"8gPej5PxHa",
database:"sql5670603"
})


// RETRIEVES ALL THE ROOMS ------------------
app.get('/', (req, res)=>{
    const sql = "SELECT * FROM rooms";
    db.query(sql, (err, result)=>{
        if(err) return res.json({Message: "Error inside server"});
        // if(err) return err;
        return res.json(result);
    }) 
})



// RETRIEVE THE FIRST 3 ROOMS -----------------------------------
app.get('/retrieve-three-rooms', (req, res)=>{
    const sql = "SELECT * FROM rooms LIMIT 3";
    db.query(sql, (err, result)=>{
     if(err) return res.json({Message: "Error inside server"});
    //  if(err) return console.log(err);
        return res.json(result);
    })
})

// GET ROOM BY ID -------------------------------------------------
app.get('/rooms/:id', (req, res)=>{
const roomID = req.params.id;
    const sql = "SELECT * FROM rooms WHERE RoomID = ?";
    db.query(sql, [roomID], (err, result)=>{
        if(err) return res.json({Message: "Error retrieving rooom details"});
        return res.json(result);
    })
})

// GET AMENITIES FOR A ROOM  -------------------------------------------------
app.get('/room-amenities/:id', (req, res)=>{
    const roomID = req.params.id;

        const sql = "Select Name From amenities INNER JOIN roomamenities ON amenities.Amenity_ID = roomamenities.Amenity_ID AND roomamenities.RoomID = ?";
        db.query(sql, [roomID], (err, result)=>{
            if(err) return res.json({Message: "Error retrieving rooom amenities"});
            return res.json(result);
        })
    })
   


 // GET SIMILAR ROOMS  -------------------------------------------------
app.get('/similar-rooms/:id', async(req, res)=>{
    const roomID = req.params.id;
   const sql = "SELECT * FROM rooms WHERE roomID != ? AND No_Of_Guests = (SELECT No_Of_Guests FROM rooms WHERE roomID = ?);"
   db.query(sql, [roomID,roomID], (err, result)=>{
    if(err) return res.json({Message: "Error retrieving similar rooms"});
    return res.json(result);
})



  

  
    })   




// BOOK ROOM -------------------------------------------------
app.post('/book', (req, res) =>{
    const guestData = req.body;
        const sql = "INSERT INTO `bookings`(`Booking_ID`, `Full_Name`, `Email`, `Cellphone_No`, `Physical_Address`, `Room_ID`, `Check_in_date`, `Check_out_date`, `Total_Cost`, `Booking_Status`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [guestData.bookid, guestData.fullname, guestData.email, guestData.cell, guestData.address, guestData.id, guestData.indate, guestData.outdate, guestData.cost, "Pending"]
        db.query(sql, values, (err, result)=>{
             if(err) return res.json({Message: "Error saving booking details " + err});
         
            return res.status(200).json({message: "Booking details succesfully saved"});
        })
    })
 

// CHECK AVAILIBILITY -------------------------------------------------
app.get('/available-rooms', (req, res)=>{
    const check_in_date = req.body.indate;
    const check_out_date = req.body.outdate;
    
        const sql = "SELECT RoomID FROM rooms WHERE RoomID NOT IN ( SELECT DISTINCT Room_ID FROM bookings WHERE (Check_in_date <= ? AND Check_out_date >= ? ) AND Booking_Status != 'Done');";
        db.query(sql, [check_out_date,check_in_date], (err, result)=>{
            if(err) return res.json({Message: "Error checking room availability" + err});
            return res.json(result);
        })
    })



app.listen(3000, ()=> {
    console.log("Listening on port 3000")
})