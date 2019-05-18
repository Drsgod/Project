const students =  [{
    "id": 100,
    "name": "Tinela",
    "car": "Honda"
}, {
    "id": 2,
    "name": "Gescu",
    "car": "Lada"
}] 



const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser);

//GET method
app.get('/', function(req, res) {
        res.send("Hello World");
    });
    app.get('/api/students', function(req, res) {
        res.send(students);
    });
    app.get('/api/students/:id', function(req, res) {
        res.send(students[req.params.id]);
    });

//POST method
app.post('/api/students', (req, res) => {
    var name = req.body.name;
        const student= {
            id: students.length + 1,
            name: name
        };
    students.push(student);
        res.send(students);
    });
 
app.put('/api/students/update/2', function(req, res) {
    var id = parseInt(req.params.id);
    var updatedStudent = req.body;
    if(students[id] != null){
        students[id] = updatedStudent;
    } else {
        res.status(404).send('Error!');
    }
    res.send(students);   
});

app.delete('/api/students/delete/1', function(req, res) {
    var id = parseInt(req.params.id);
    if(students[id] != null){
        students.splice(id,1);
    } else {
        res.status(404).send('Error!');
    }
    res.send(students);   
});

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))