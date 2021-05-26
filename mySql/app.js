const { urlencoded } = require('express')
const express = require('express')
const app = express()
const path = require('path')
const dbConnection = require('./db')
const Blog = require('./models/blog')
const methodOverride = require('method-override')
const { ppid } = require('process')

app.set('view engine','ejs');
app.set(path.join(__dirname,'/views'))

app.use(urlencoded({extended:true}))
app.use(methodOverride('_method'))

// Connecting to the DB
dbConnection();

app.get('/',(req,res)=>{
    res.send('Connected ')
})

// Displaying all the Blogs
app.get('/blog', async (req,res)=>{
    const blogs = await Blog.findAll()
    res.render('index', { blogs })
})

//Displaying a new Blog Page
app.get('/blog/new',(req,res)=>{
    res.render('new')
})

// Submitting the new Blog
app.post('/blog/new', async (req,res)=>{
    try{
        const blog = await Blog.create(req.body)
        res.redirect('/blog')
    }
    catch(err){
        console.log("Something Went Wrong:", err)
    }
})

//Viewing the individual blog
app.get('/blog/:id',async(req,res)=>{

    const blog = await Blog.findOne({
        where:{
            id:req.params.id
        }
    })

    res.render('view', { blog })
})

// Showing the edit form
app.get('/blog/:id/edit',async (req,res)=>{
    const blog = await Blog.findOne({
        where:{ id: req.params.id }
    })
    res.render('edit',{ blog })
})

// Updating the Editted blog
app.patch('/blog/:id/edit', async(req,res)=>{
    const blog = await Blog.update(req.body,{
        where:{
            id: req.params.id
        }
    })

    res.redirect('/blog')
})

// Deleting the blog
app.delete('/blog/:id', async (req,res)=>{

    await Blog.destroy({
        where:{
            id:req.params.id
        }
    })

    res.redirect('/blog')
})

app.listen('3000',()=>{
    console.log("Connected to port 3000")
})